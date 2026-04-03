<script lang="ts">
	import { mode } from 'mode-watcher';
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils/cn';

	export type SnowflakeProxyProps = WithoutChildrenOrChild<HTMLAttributes<HTMLDivElement>>;

	let { class: classname, ...props }: SnowflakeProxyProps = $props();

	let isFirefox = navigator.userAgent.toLowerCase().includes('firefox');
</script>

<div class={cn('relative size-fit ', classname)} {...props}>
	<iframe
		title="Snowflake proxy"
		aria-readonly={true}
		src="https://snowflake.torproject.org/embed.html"
		width="320"
		height="260"
		class={cn(
			'border-0 outline-none',
			mode.current === 'dark' && isFirefox
				? 'filter-[invert(1)_hue-rotate(180deg)_brightness(0.8)_contrast(0.92)]'
				: 'filter-[brightness(0.6)_contrast(1.1)_saturate(0.8)_hue-rotate(180deg)]'
		)}
	></iframe>
</div>
