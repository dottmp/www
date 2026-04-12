import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

import { dev } from '$app/environment';

const handleHeaders: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);

	response.headers.set('Cache-Control', 'public, max-age=1800');

	response.headers.set('X-Frame-Options', 'DENY');

	response.headers.set('X-Content-Type-Options', 'nosniff');

	if (!dev) {
		response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
	}

	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

	response.headers.set(
		'Permissions-Policy',
		'camera=(), microphone=(), geolocation=(), payment=()'
	);

	return response;
};

export const handle = sequence(handleHeaders);
