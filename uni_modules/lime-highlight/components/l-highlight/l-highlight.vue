<template>
	<view class="l-highlight">
		<template v-for="item in highlightChunks">
			<slot :item="item"></slot>
			<template v-if="!$slots.default">
				<text v-if="!item.highlight" class="l-highlight--normal"  :class="unhighlightClass">{{item.text}}</text>
				<text v-if="item.highlight" class="l-highlight__text" :class="highlightClass"
					:style="highlightStyle ?? ''">{{item.text}}</text>
			</template>
		</template>
	</view>
</template>
<script lang="ts">
	// @ts-nocheck
	/**
	 * Highlight 文本高亮组件
	 * @description 用于在文本内容中高亮显示指定关键词
	 * @tutorial https://ext.dcloud.net.cn/plugin?name=lime-highlight
	 * 
	 * @property {boolean} autoEscape 自动转义正则特殊字符
	 * @property {boolean} caseSensitive 是否区分大小写
	 * @property {(string|UTSJSONObject)} highlightStyle 高亮样式
	 * @property {string} unhighlightClass 普通文本样式类名
	 * @property {string} highlightClass 高亮部分样式类名
	 * @property {string|string[]} keywords 需要高亮的关键词（支持数组形式多关键词）
	 * @property {string} text 原始文本内容
	 */
	import { Chunk} from './type';
	import { defineComponent, computed } from '@/uni_modules/lime-shared/vue';
	export default defineComponent({
		name: 'l-highlight',
		props: {
			// 是否自动转义
			autoEscape: {
				type: Boolean,
				default: true,
			},
			// 是否区分大小写
			caseSensitive: {
				type: Boolean,
				default: false,
			},
			// 高亮元素的样式
			highlightStyle: {
				type: [String, Object],
				// default: '',
			},
			unhighlightClass: {
				type: String,
				default: '',
			},
			highlightClass: {
				type: String,
				default: '',
			},
			// 高亮的文本
			keywords: {
				type: [String, Array],
				default: () => [],
			},
			// 源文本
			text: {
				type: String,
				default: "",
			},
		},
		setup(props) {
			// 去重
			const removeDuplicates = (keywords : any) : string[] => {
				return Array.from(new Set(Array.isArray(keywords) ? keywords : [keywords]));
			}
			const highlightChunks = computed(() : Chunk[] => {
				const { autoEscape, caseSensitive, keywords, text: sourceString } = props;
				if (!keywords || keywords.length === 0) {
					return [
						{
							start: 0,
							end: sourceString.length,
							text: sourceString,
							highlight: false,
						} as Chunk
					]
				}
				// 根据是否区分大小写设置正则表达式标志
				const flags = caseSensitive ? 'g' : 'gi';
				// 确保关键词是数组格式
				const _keywords : string[] = removeDuplicates(keywords);
				// 如果需要自动转义，则对关键词进行转义处理
				const escapedKeywords = autoEscape
					? _keywords.map((keyword : string) : string =>
						keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
					)
					: _keywords;
				// 创建一个正则表达式，匹配任意关键词
				const regexPattern = new RegExp(escapedKeywords.join('|'), flags);
				let chunks : Chunk[] = [];
				let match;
				let lastIndex = 0;
				// 使用正则表达式找到所有匹配项
				while ((match = regexPattern.exec(sourceString))) {
					const start = match.index;
					const end = regexPattern.lastIndex;
					const text = sourceString.slice(start, end); // 获取匹配到的文本
					// 如果匹配到的文本为空，跳过本次循环
					if (start >= end) {
						regexPattern.lastIndex++;
						continue;
					}
					// 如果上一次匹配的结束位置小于当前匹配的开始位置，添加非高亮文本块
					if (lastIndex < start) {
						chunks.push({
							start: lastIndex,
							end: start,
							text: sourceString.slice(lastIndex, start),
							highlight: false,
						} as Chunk);
					}
					// 添加高亮文本块
					chunks.push({
						start,
						end,
						text,
						highlight: true,
					} as Chunk);

					lastIndex = end;

					// 避免使用全局正则表达式匹配空字符串时导致的无限循环
					if (start == end) {
						continue;
					}
				}

				// 添加最后一个非高亮文本块（如果存在）
				if (lastIndex < sourceString.length) {
					chunks.push({
						start: lastIndex,
						end: sourceString.length,
						text: sourceString.slice(lastIndex),
						highlight: false,
					} as Chunk);
				}
				chunks.sort((a, b) : number => a.start - b.start);
				return chunks
			})
			
			return {
				highlightChunks
			}
		}
	})
</script>
<style lang="scss">
	@import './index';
</style>