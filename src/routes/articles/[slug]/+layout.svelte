<script lang="ts">
	import type { LayoutProps } from './$types';

	import * as Navbar from '$lib/components/navbar/index';
	import Thumbnail from '$lib/components/thumbnail.svelte';
	import { formatDate } from '$lib/utils/date';

	let { data, children, params }: LayoutProps = $props();
</script>

<Navbar.Article backHref="/articles" />

<main>
	<div class="container mx-auto max-w-3xl space-y-3 py-20">
		<header>
			<h1 class="text-3xl! leading-tight">
				{data.frontmatter.title}
			</h1>

			<time dateTime={data.frontmatter.date} class="text-sm text-muted-foreground">
				{formatDate(new Date(data.frontmatter.date))}
			</time>
		</header>

		<Thumbnail
			src={data.frontmatter.thumbnail}
			slug={params.slug}
			alt="Thumbnail for the article"
		/>

		<div class="typography">
			{@render children?.()}
		</div>
	</div>
</main>
