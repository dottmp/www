import { mdsvex, escapeSvelte } from 'mdsvex';
import adapter from '@sveltejs/adapter-cloudflare';
import { createCssVariablesTheme, createHighlighter } from 'shiki';
import relativeImages from 'mdsvex-relative-images';

const THEME = 'css-variable';

const myTheme = createCssVariablesTheme({
	name: THEME,
	variablePrefix: '--shiki-',
	variableDefaults: {},
	fontStyle: true
});

const highlighter = await createHighlighter({
	themes: [myTheme],
	langs: []
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: { adapter: adapter() },
	csp: {
		mode: 'auto',
		directives: {
			'default-src': ['self'],
			'script-src': ['self'],
			'style-src': ['self'],
			'font-src': ['self'],
			'img-src': ['self', 'data:', 'https:'],
			'connect-src': ['self'],
			'object-src': ['none'],
			'base-uri': ['self'],
			'form-action': ['self'],
			'frame-ancestors': ['none']
		}
	},
	preprocess: [
		mdsvex({
			extensions: ['.svx', '.md'],

			remarkPlugins: [relativeImages],

			highlight: {
				highlighter: async (code, lang = 'text') => {
					await highlighter.loadLanguage(lang).catch(() => {});
					const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: THEME }));
					return `{@html \`${html}\` }`;
				}
			}
		})
	],
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
