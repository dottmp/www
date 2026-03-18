<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils/cn';

	export type BackButtonProps = WithoutChildrenOrChild<HTMLAttributes<HTMLAnchorElement>> & {
		href: string;
		vertical?: boolean;
	};

	let { vertical, class: classname, ...props }: BackButtonProps = $props();

	let texts = ['back', 'cd ..', 'cd ../articles', '~/dottmp/articles'];

	let text = texts[Math.floor(Math.random() * texts.length)];
</script>

<a
	class={cn(
		'btn btn-text group flex translate-x-0 transform cursor-pointer items-center select-none motion-safe:transition-all',
		vertical
			? ' flex-col pr-0 hover:-translate-y-2 focus:-translate-y-2'
			: 'hover:-translate-x-2 focus:-translate-x-2',
		classname
	)}
	{...props}
>
	<div class="shrink-0">
		<span
			class="opacity-100 group-hover:opacity-[0.01] group-focus:opacity-[0.01] motion-safe:transition-opacity"
		>
			q:
		</span>

		<span
			class="size-6 text-muted-foreground group-hover:text-foreground group-focus:text-foreground sm:size-4"
		>
			&#8604
		</span>
	</div>

	<span
		aria-hidden="true"
		class="opacity-[0.01] group-hover:opacity-100 group-focus:opacity-100 motion-safe:transition-opacity"
	>
		{text}
	</span>

	<span class="sr-only"> back </span>
</a>
