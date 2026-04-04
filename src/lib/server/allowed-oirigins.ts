import { env } from '$env/dynamic/private';

export function getAllowedOrigin(request: Request): string | null | false {
	const allowedOrigins = env.ALLOWED_ORIGINS?.split(',').map((origin) => origin.trim()) ?? [];

	const origin = request.headers.get('origin');

	if (!origin) return null;

	return allowedOrigins.includes(origin) ? origin : false;
}
