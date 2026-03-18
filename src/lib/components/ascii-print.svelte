<script lang="ts">
	import { onMount } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils/cn';

	export type AsciiPrintProps = WithElementRef<HTMLAttributes<HTMLPreElement>> & {
		text: string;
		chunkSize?: number;
		delay?: number;
		oncomplete?: () => void;
	};

	let {
		text,
		chunkSize = 16,
		delay = 0,
		class: className,
		oncomplete,
		children
	}: AsciiPrintProps = $props();

	let displayed = $state('');
	let done = $state(false);

	onMount(() => {
		const chars = [...text].reverse();
		let banner = '';

		const tick = () => {
			const chunk = Array(chunkSize)
				.fill(null)
				.map(() => chars.pop() ?? '')
				.join('');

			if (!chunk) {
				displayed = banner;
				done = true;
				oncomplete?.();
				return;
			}

			banner += chunk;
			displayed = banner + '█';

			if (delay > 0) {
				setTimeout(tick, delay);
			} else {
				requestAnimationFrame(tick);
			}
		};

		requestAnimationFrame(tick);
	});
</script>

<pre
	style="background: transparent"
	aria-hidden="true"
	class={cn(
		'font-mono text-xs leading-3 -tracking-widest',
		className
	)}>{displayed}{#if done && children}{@render children()}{/if}</pre>
