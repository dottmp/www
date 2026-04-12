import type { PageServerLoad } from './$types';

import projects from '$lib/data/projects.json';

export const load: PageServerLoad = async () => {
	return {
		projects: projects.data,
		meta: {
			title: 'projects | dottmp',
			description: 'Writing on development and stuff.'
		}
	};
};
