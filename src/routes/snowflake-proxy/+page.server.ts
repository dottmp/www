import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		meta: {
			title: 'snowflake proxy | dottmp',
			description:
				'Enable snowflake proxy and leave it on to donate bandwith and help tor users bypass censorship and access internet freely.'
		}
	};
};
