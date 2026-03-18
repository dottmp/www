import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	return {
		meta: {
			title: 'dottmp',
			description: 'Welcome, to dottmp.'
		}
	};
};
