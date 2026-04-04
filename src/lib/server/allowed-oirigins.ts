import { ALLOWED_ORIGINS } from '$env/static/private';

export function getAllowedOrigin(request: Request): string | null | false {
	const allowedOrigins = ALLOWED_ORIGINS?.split(',').map((origin) => origin.trim()) ?? [];

	const origin = request.headers.get('origin');

	if (!origin) return null;

	return allowedOrigins.includes(origin) ? origin : false;
}
