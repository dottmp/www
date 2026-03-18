<script lang="ts">
	import '@fontsource-variable/ibm-plex-sans';
	import '@fontsource/ibm-plex-serif/100.css';
	import '@fontsource/ibm-plex-serif/200.css';
	import '@fontsource/ibm-plex-serif/300.css';
	import '@fontsource/ibm-plex-serif/400.css';
	import '@fontsource/ibm-plex-serif/500.css';
	import '@fontsource/ibm-plex-serif/600.css';
	import '@fontsource/ibm-plex-serif/700.css';
	import '@fontsource/ibm-plex-mono';

	import '$lib/styles/index.css';

	import { ModeWatcher } from 'mode-watcher';

	import { page } from '$app/state';
	import favicon from '$lib/assets/favicon.svg';
	import Starfield from '$lib/components/starfield.svelte';
	import '$lib/vim';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	{#if page.data.meta?.title}
		<title>{page.data.meta.title}</title>
	{/if}

	{#if page.data.meta?.description}
		<meta name="description" content={page.data.meta.description} />
	{/if}
</svelte:head>

<!------------------------------------------------------------------------>
<!-- global                                                             -->
<!------------------------------------------------------------------------>
<ModeWatcher />
<Starfield class="absolute h-screen w-screen" />
<!------------------------------------------------------------------------>
<!-- content                                                             -->
<!------------------------------------------------------------------------>
<div class="flex min-h-dvh flex-col font-serif antialiased">
	{@render children()}
</div>
