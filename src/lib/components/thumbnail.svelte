<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils/cn';

	export type ThumbnailProps = WithoutChildrenOrChild<HTMLImgAttributes> & {
		slug: string;
	};

	let { class: classname, src: source, slug, ...props }: ThumbnailProps = $props();

	const imageModules = import.meta.glob<{ default: string }>(
		'/src/lib/data/articles/**/*.{png,jpg,jpeg,gif,webp,avif,svg}',
		{ eager: true, query: '?url' }
	);

	let src = $derived(
		source?.startsWith('./')
			? (imageModules[`/src/lib/data/articles/${slug}/${source.slice(2)}`]?.default ?? source)
			: source
	);
</script>

<img
	sizes="(min-width: 768px) 42rem, 100vw"
	class={cn('aspect-16/10 w-full object-cover', classname)}
	{src}
	{...props}
/>
