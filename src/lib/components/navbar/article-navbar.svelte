<script lang="ts">
	import BackButton from '../back-button.svelte';
	import Help from '../help.svelte';
	import ModeToggle from '../mode-toggle.svelte';

	import Navbar, { type NavbarProps } from './navbar.svelte';

	import { cn } from '$lib/utils/cn';

	export type ArticleNavbarProps = {
		backHref: string;
	} & WithoutChildrenOrChild<NavbarProps>;

	let { class: classname, backHref, ...props }: ArticleNavbarProps = $props();
</script>

<Navbar class={cn(classname)} {...props}>
	<div class="relative flex h-fit items-start justify-between gap-x-4">
		<BackButton href={backHref} />

		<div class="flex gap-x-6 sm:gap-x-4">
			<ModeToggle />

			<Help />
		</div>
	</div>
</Navbar>
