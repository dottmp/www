/**
 * Gets the slug from a given path. The slug is the name of the parent folder of the file.
 */
export function getSlug(path: string) {
	const parts = path.split('/');
	const fileNameWithExtension = parts.pop();

	if (!fileNameWithExtension) return null;

	const parentFolder = parts.pop();

	return parentFolder ?? null;
}
