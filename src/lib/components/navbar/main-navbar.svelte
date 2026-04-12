<script lang="ts">
	import Help from '../help.svelte';
	import ModeToggle from '../mode-toggle.svelte';

	import Navbar, { type NavbarProps } from './navbar.svelte';

	import { resolve } from '$app/paths';
	import { cn } from '$lib/utils/cn';

	let { class: classname, ...props }: WithoutChildrenOrChild<NavbarProps> = $props();
</script>

<Navbar class={cn(classname)} {...props}>
	<div class="flex w-full flex-col gap-6 md:flex-row">
		<div class="flex gap-x-4 md:gap-x-6">
			<a class="btn btn-text" href={resolve('/')}>x: home</a>

			<ModeToggle />

			<Help />
		</div>

		<div class="flex flex-wrap gap-x-4 gap-y-6 md:ml-auto md:gap-x-6">
			<a class="btn btn-link" href={resolve('/articles')}>a: articles</a>
			<a class="btn btn-link" href={resolve('/projects')}>p: projects</a>
			<a class="btn btn-link" href={resolve('/snowflake-proxy')}>s: snowflake proxy</a>
			<a
				class="btn btn-link"
				href="https://github.com/dottmp"
				target="_blank"
				rel="noopener noreferrer"
			>
				/: github &#8605
			</a>
		</div>
	</div>
</Navbar>
