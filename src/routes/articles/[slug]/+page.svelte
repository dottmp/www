<script lang="ts">
	import type { PageProps } from './$types';
	let { data }: PageProps = $props();
</script>

{#if data.component}
	{@const MDSvex = data.component}
	<MDSvex />
{/if}
