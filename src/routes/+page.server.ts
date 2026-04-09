import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		meta: {
			title: 'dottmp',
			description:
				'Welcome to dottmp. A personal portfolio of a Swedish developer who nerds over fonts and colors.'
		}
	};
};
