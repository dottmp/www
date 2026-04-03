<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	import { resolve } from '$app/paths';

	type LLMTOCLinkProps = WithoutChildren<HTMLAttributes<Omit<HTMLAnchorElement, 'href' | 'class'>>>;

	let { ...props }: LLMTOCLinkProps = $props();
</script>

<a aria-hidden="true" tabindex="-1" href={resolve('/api/llm-toc')} class="sr-only" {...props}>
	terms of conditions</a
>
