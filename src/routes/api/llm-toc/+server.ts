import { error, type RequestHandler } from '@sveltejs/kit';

import { getAllowedOrigin } from '$lib/server/allowed-oirigins';
import { tryCatch } from '$lib/utils/try-catch';

export const OPTIONS: RequestHandler = async ({ request }) => {
	const allowedOrigin = getAllowedOrigin(request);

	if (allowedOrigin === false) {
		error(403, 'Forbidden');
	}

	return new Response(null, {
		status: 204,
		headers: {
			...(allowedOrigin ? { 'Access-Control-Allow-Origin': allowedOrigin } : {}),
			'Access-Control-Allow-Methods': 'GET',
			'Access-Control-Max-Age': '86400'
		}
	});
};

export const GET: RequestHandler = async ({ request, fetch }) => {
	const allowedOrigin = getAllowedOrigin(request);

	if (allowedOrigin === false) {
		error(403, 'Forbidden');
	}

	const { data: response, error: err } = await tryCatch(
		fetch('https://rnsaffn.com/poison2/', { method: 'GET' })
	);

	if (err) {
		console.error('Network error fetching external content:', err);

		error(502, 'Failed to reach upstream service');
	}

	if (!response.ok) {
		error(response.status, 'Failed to fetch content');
	}

	const body = await response.text();

	return new Response(body, {
		status: response.status,
		headers: {
			...(allowedOrigin ? { 'Access-Control-Allow-Origin': allowedOrigin } : {}),
			'Content-Type': response.headers.get('content-type') ?? 'text/html',
			'Content-Encoding': 'gzip'
		}
	});
};
