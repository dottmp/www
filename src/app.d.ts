declare global {
	type WithoutChild<T> = T extends { child?: unknown } ? Omit<T, 'child'> : T;
	type WithoutChildren<T> = T extends { children?: unknown } ? Omit<T, 'children'> : T;
	type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
	type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

	namespace App {
		type MdsvexFile = {
			default: import('svelte/internal').SvelteComponent;
			metadata: Meta;
		};

		type MdsvexResolver = () => Promise<MdsvexFile>;

		type Meta = {
			title: string;
			thumbnail: string;
			description: string;
			date: string;
		};

		type Article = Meta & {
			slug: string | null;
		};

		interface PageData {
			meta?: {
				title?: string;
				description?: string;
				url?: string;
				image?: string;
			};
		}
	}
}

export {};
