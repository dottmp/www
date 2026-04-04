<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	import { resolve } from '$app/paths';
	import { cn } from '$lib/utils/cn';
	import { formatDate } from '$lib/utils/date';

	export type ArticleProps = WithoutChildrenOrChild<HTMLAttributes<HTMLElement>> & {
		article: App.Article;
	};

	let { article, class: classname, tabindex, ...props }: ArticleProps = $props();
</script>

<article tabindex="-1" class={cn('group relative outline-hidden  ', classname)} {...props}>
	<div class="inline-flex items-center gap-2">
		<h2
			class="line-clamp-1 font-medium text-muted-foreground transition group-focus-within:text-foreground group-hover:text-foreground"
		>
			<a {tabindex} class="outline-hidden" href={resolve(`/articles/${article.slug}`)}>
				<span class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6"></span>
				<span class="relative z-10">{article.title}</span>
			</a>
		</h2>

		<time
			class="text-sm leading-0 text-nowrap text-muted-foreground transition group-focus-within:text-foreground group-hover:text-foreground sm:text-xs"
		>
			{formatDate(new Date(article.date))}
		</time>
	</div>

	<p
		class="text-muted-foreground transition group-focus-within:text-foreground! group-hover:text-foreground!"
	>
		{article.description}
	</p>
</article>
