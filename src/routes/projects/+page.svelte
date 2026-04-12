<script lang="ts">
	import type { PageProps } from './$types';

	import AsciiPrint from '$lib/components/ascii-print.svelte';
	import * as Navbar from '$lib/components/navbar/index';

	let { data }: PageProps = $props();

	const banner = `projects made by dottmp`;

	let completed = $state(false);
</script>

<Navbar.Main />

<main class=" container flex w-fit flex-1 flex-col">
	<header class="pt-48 pb-4 sm:pt-96">
		<AsciiPrint class="w-38.75" chunkSize={2} text={banner} oncomplete={() => (completed = true)} />
		<h1 class="sr-only">projects made by dottmp</h1>
	</header>

	{#if completed}
		<ul class="mt-2 space-y-2">
			{#each data.projects as project, index (project.href)}
				<li>
					<a tabindex={index + 1} class="btn btn-link" rel="external" href={project.href}>
						{project.name} &#8605
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</main>
