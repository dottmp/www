<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils/cn';

	export type NavbarProps = WithElementRef<HTMLAttributes<HTMLElement>>;

	let { ref = $bindable(null), children, class: classname, ...props }: NavbarProps = $props();
</script>

<nav bind:this={ref} class={cn(classname)} {...props}>
	<div class="mx-auto px-4 py-6 sm:px-6 lg:px-8">{@render children?.()}</div>
</nav>
