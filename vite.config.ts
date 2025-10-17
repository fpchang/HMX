import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';

// 原子化css - 可选
import autocss from './uni_modules/ux-frame/libs/plugins/autocss/index.mjs';

export default defineConfig({
	plugins: [
		uni(),
		autocss({
			debug: false,
			autoUseSnippets: true,
			generateGlobalCss : false,
			configFile: './autocss/config.js',
			cssFile: 'autocss/index.css',
			cssSnippetsFile: 'autocss/snippets.css',
			exclude: ['uni_modules/*', 'node_modules/*']
		})
	]
});