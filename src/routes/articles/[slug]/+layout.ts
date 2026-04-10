import { error } from '@sveltejs/kit';

import type { LayoutLoad } from './$types';

import { getSlug } from '$lib/utils/slug';
import { tryCatch } from '$lib/utils/try-catch';

export const load: LayoutLoad = async ({ params, url }) => {
	const modules = import.meta.glob<App.MdsvexFile>(`/src/articles/**/*.{md,svx,svelte.md}`);

	const [, resolver] =
		Object.entries(modules).find(([path]) => getSlug(path) === params.slug) ?? [];

	if (!resolver) {
		error(404);
	}

	const { data: article, error: err } = await tryCatch(resolver());

	if (err) {
		error(500, `Failed to load article with slug: ${params.slug}. Error: ${err.message}`);
	}

	return {
		component: article.default,
		frontmatter: article.metadata,
		meta: {
			title: `${article.metadata.title} | dottmp`,
			description: article.metadata.description,
			url: url.href
		}
	};
};
