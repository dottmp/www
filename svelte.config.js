import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-cloudflare';
import { createHighlighter } from 'shiki';
import relativeImages from 'mdsvex-relative-images';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: { adapter: adapter() },
	preprocess: [
		mdsvex({
			extensions: ['.svx', '.md'],

			remarkPlugins: [relativeImages],

			highlight: {
				highlighter: async (code, lang = 'text') => {
					const highlighter = await createHighlighter({
						theme: 'css-variables'
					});

					const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }));
					return `{@html \`${html}\` }`;
				}
			}
		})
	],
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
