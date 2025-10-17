const fs = require('fs');
const path = require('path');
const glob = require('glob');

// 根目录
const root = process.env.UNI_INPUT_DIR || process.env.UNI_CLI_CONTEXT;

// 固定的头部代码片段
const headerCode = `<script setup>
import Mobile from '../../src/components/mobile/index.vue'
</script>

`;

// 固定的平台兼容性内容
const platformCompatibility = `## 平台兼容性

### UniApp X

| Android | iOS | web | 鸿蒙 Next | 小程序 |
|:-------:|:---:|:---:|:-------:|:---:|
|    √    |  √  |  √  |    √    |  √  |

### UniApp Vue Nvue

| Android | iOS | web | 鸿蒙 Next | 小程序 |
|:-------:|:---:|:---:|:-------:|:---:|
|    x    |  x  |  √  |    x    |  x  |

`;

// 属性名
function fmtName(name) {
	// 移除选项列表格式
	return name.replace(/=\[[^\]]+\]/, '');
}

// 描述
function fmtDesc(desc) {
	// 处理括号
	desc = desc.replace(/（/g, '(');
	desc = desc.replace(/）/g, ')');

	// 处理竖线分隔
	if (desc.includes('|')) {
		desc = desc.split('|').slice(1).join('|').trim();
	}

	// 处理默认值部分
	if (desc.includes('(默认')) {
		desc = desc.split('(默认')[0].trim();
	}

	return desc.trim();
}

// 默认值
function fmtDef(desc) {
	// 处理括号
	desc = desc.replace(/（/g, '(');
	desc = desc.replace(/）/g, ')');

	// 处理竖线分隔
	if (desc.includes('|')) {
		desc = desc.split('|').slice(1).join('|').trim();
	}

	// 处理默认值部分
	if (desc.includes('(默认')) {
		const def = desc.split('(默认')[1].replace(')', '').trim();
		// 如果是 $ux. 开头的,用反引号包裹
		return def.startsWith('$ux.') ? `\`${def}\`` : def;
	} else {
		return '';
	}
}

// 解析属性
function parseProps(content) {
	if (content.includes('/**')) {
		content = content.split('/**')[1].split('*/')[0]
	}

	content = content.replace(/ /g, '');

	let props = []
	let values = []
	let index = 0

	let lines = content.split('\n');
	for (let i = 0; i < lines.length; i++) {
		let line = lines[i];

		// 删除第一个\t
		line = line.replace(/\t/, '');
		if (line === '') continue

		if (line.startsWith('*@property')) {
			// 如果values有值,则将values赋值给props的values
			if (values.length > 0) {
				props[index - 1].values = JSON.parse(JSON.stringify(values));
				values = [];
			}

			// 用制表符分割
			const parts = line.split(/\t+/);

			// 处理第一部分,得到类型
			const type = parts[0].replace('*@property{', '').replace('}', '');

			// 第二部分是属性名
			const name = fmtName(parts[1] || '');

			// 第三部分是描述
			const desc = fmtDesc(parts[2] || '');

			// 默认值
			const def = fmtDef(parts[2] || '');

			// 索引+1
			index++

			props.push({
				type,
				name,
				def,
				desc,
				values: []
			})
		} else if (line.startsWith('*@value')) {
			// 候选value
			const parts = line.split(/\t+/);
			// 属性名
			const name = parts[0].replace('*@value', '')
			// 描述
			const desc = parts[1] || '';

			values.push({
				name,
				desc
			});
		}
	}

	// 后处理名称
	props.forEach(prop => {
		if (prop.values.length > 0) {
			prop.name = `[${prop.name}](#${prop.name})`
		}
	});

	return props;
}

// 解析事件
function parseEvents(content) {
	if (content.includes('/**')) {
		content = content.split('/**')[1].split('*/')[0]
	}

	content = content.replace(/ /g, '');

	let events = []

	let lines = content.split('\n');
	for (let i = 0; i < lines.length; i++) {
		let line = lines[i];

		// 删除第一个\t
		line = line.replace(/\t/, '');
		if (line === '') continue

		if (line.startsWith('*@event')) {
			// 用制表符分割
			const parts = line.split(/\t+/);

			// 处理第一部分,得到类型
			const type = parts[0].replace('*@event{', '').replace('}', '');

			// 第二部分是属性名
			const name = fmtName(parts[1] || '');

			// 第三部分是描述
			const desc = fmtDesc(parts[2] || '');

			events.push({
				type,
				name,
				desc,
				param: ''
			})
		}
	}

	return events;
}

// 生成示例代码
function parseExamples(file) {
	if (!file) return ''

	let template = ''
	let script = ''
	let style = ''

	const content = fs.readFileSync(root + '/' + file, 'utf-8');

	// 解析vue文件中的 template script style
	let arr = content.split('<script')
	template = arr[0].trim()
	script = '<script ' + arr[1].split('<style')[0].trim()
	style = '<style ' + arr[1].split('<style')[1].trim()

	return `## 示例代码
  ::: code-group\n` +
		"```html\n" +
		`\n${template}\n` +
		"\n```\n" +
		"```ts [script]\n" +
		`\n${script}\n` +
		"\n```\n" +
		"```css [style]\n" +
		`\n${style}\n` +
		"\n```\n" +
		`:::`
}

// 生成属性表格
function generatePropsTable(props) {
	if (props.length === 0) return '';

	return `## Props

| 属性名   | 类型 | 默认值 | 说明 |
|:------:|:----:|:----:|:----:|
${props.map(prop => `| ${prop.name} | ${prop.type} | ${prop.def} | ${prop.desc} |`).join('\n')}

`;
}

// 生成值表格
function generateValuesTable(props) {
	if (props.length === 0) return '';

	let values = ''
	props.forEach(prop => {
		if (prop.values.length > 0) {
			values += `### ${prop.name}

| 值   | 说明 |
|:------:|:----:|
${prop.values.map(e => `| ${e.name} | ${e.desc} |`).join('\n')}

`;
		}
	});

	return values
}

// 生成事件表格
function generateEventsTable(events) {
	if (events.length === 0) return '';

	return `## Events

| 事件名   | 说明 | 参数 |
|:------:|:----:|:----:|
${events.map(e => `| ${e.name} | ${e.desc} | ${e.param} |`).join('\n')}
  
  `;
}

function gen(options) {
	var output = options.output || 'docs'
	var suffix = options.suffix || 'uvue'
	var components = options.component || []
	
var f = (str, dir) => {
	// 扫描组件文件
	const componentsDir = root + '/' + str
	const files = glob.sync('**/*.' + suffix, {
		cwd: componentsDir
	})
	// 创建docs目录
	const docsDir = root + '/' + output + '/' + dir;
	if (!fs.existsSync(docsDir)) {
		fs.mkdirSync(docsDir, {
			recursive: true
		});
	}
	
	// 生成空白文档
	files.forEach(file => {
		const componentName = path.basename(file, '.' + suffix);
		const displayName = componentName.replace(/^ux-/, '');

		// 读取组件文件内容
		const content = fs.readFileSync(path.join(componentsDir, file), 'utf-8');

		// 从JSDoc注释中提取标题
		const titleMatch = content.match(/@title\s+([^\n]+)/);
		const title = titleMatch ? titleMatch[1].trim() : displayName.charAt(0).toUpperCase() + displayName
			.slice(1);

		// 从JSDoc注释中提取描述
		const descMatch = content.match(/@description\s+([^\n]+)/);
		const description = descMatch ? descMatch[1].trim() : '';

		// 生成组件类型 - 去掉连字符并让每个单词首字母大写
		const componentType = componentName
			.split('-')
			.map(word => word.charAt(0).toUpperCase() + word.slice(1))
			.join('') + 'ComponentPublicInstance';

		// 生成Mobile组件代码
		const mobileCode =
			`<Mobile url="https://web.uxframe.cn/#pages/component/${displayName}?title=${title}"></Mobile>\n\n`;

		// 解析属性
		const props = parseProps(content);
		const propsTable = generatePropsTable(props);
		const valuesTable = generateValuesTable(props);

		// 解析事件
		const events = parseEvents(content);
		const eventsTable = generateEventsTable(events);

		// 生成示例代码
		const demoMatch = content.match(/@demo\s+([^\n]+)/);
		const examples = parseExamples(demoMatch ? demoMatch[1].trim() : '');

		// 生成文档内容
		const docContent = `# ${title}
> 组件类型：${componentType}

${description}

${platformCompatibility}${propsTable}${valuesTable}${eventsTable}${examples}`;

		fs.writeFileSync(path.join(docsDir, `${displayName}.md`), headerCode + mobileCode + docContent);
		console.log(`UxFrame Doc ${displayName}.md Created Success!`);
	});
}

components.forEach(str => {
	f(str, 'component')
})
}

function DocGen(options) {
	// 标记是否已执行
	let isProcessed = false;

	return {
		name: "vite-plugin-doc",
		enforce: "pre",
		buildStart() {
			if (isProcessed) return;
			isProcessed = true

			gen(options)
		}
	}
}

export {
	DocGen as
	default
}