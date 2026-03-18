<script lang="ts">
	import Help from '../help.svelte';
	import ModeToggle from '../mode-toggle.svelte';

	import Navbar, { type NavbarProps } from './navbar.svelte';

	import { resolve } from '$app/paths';
	import { cn } from '$lib/utils/cn';

	let { class: classname, ...props }: WithoutChildrenOrChild<NavbarProps> = $props();
</script>

<Navbar class={cn(classname)} {...props}>
	<div class="grid w-full grid-cols-1 grid-rows-2 gap-6 sm:grid-cols-2 sm:grid-rows-1">
		<div class="flex gap-x-6 sm:gap-x-4">
			<a class="btn btn-text" href={resolve('/')}>x: home</a>

			<ModeToggle />

			<Help />
		</div>

		<div class="row-start-2 flex gap-x-6 sm:col-start-2 sm:row-start-1 sm:ml-auto sm:gap-x-4">
			<a class="btn btn-link" href={resolve('/articles')}>a: articles</a>
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
