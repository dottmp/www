import { error } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';

import { getSlug } from '$lib/utils/slug';
import { tryCatch } from '$lib/utils/try-catch';

const MAX_ARTICLES_AMOUNT = 10;

export const load: PageServerLoad = async () => {
	const modules = import.meta.glob<App.MdsvexFile>(`/src/articles/**/*.{md,svx,svelte.md}`);

	const articlePromises: Promise<App.Article>[] = Object.entries(modules).map(
		async ([path, resolver]) => {
			const { data: article, error: err } = await tryCatch(resolver());

			if (err) {
				error(500, `Failed to load article at path: ${path}. Error: ${err.message}`);
			}

			return {
				slug: getSlug(path),
				...article.metadata
			};
		}
	);

	const articles = await Promise.all(articlePromises);

	const maxArticles = articles.slice(0, MAX_ARTICLES_AMOUNT);

	maxArticles.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));

	return {
		articles: maxArticles,
		meta: {
			title: 'articles | dottmp',
			description: 'Writing on development and stuff.'
		}
	};
};
