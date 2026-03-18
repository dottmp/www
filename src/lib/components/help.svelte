<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	import { helpStore } from '$lib/stores/help.store';
	import { cn } from '$lib/utils/cn';
	import { vim } from '$lib/vim';
	import type { Map } from '$lib/vim/core/keymap';

	export type DialogProps = WithElementRef<HTMLAttributes<HTMLDialogElement>> & {};

	let dialog: HTMLDialogElement | undefined;

	let { ref = $bindable(null), class: classname, ...props }: DialogProps = $props();

	helpStore.subscribe(({ open }) => {
		if (open) {
			dialog?.showModal();
			setTimeout(() => dialog?.querySelector('button')?.focus());
		} else {
			dialog?.close();
		}
	});

	function onAction(keymap: Map) {
		keymap.rhs();
		dialog?.close();
	}

	function onKeydown(e: KeyboardEvent) {
		if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
		e.preventDefault();

		const buttons = Array.from(dialog?.querySelectorAll<HTMLButtonElement>('li button') ?? []);
		const current = document.activeElement as HTMLButtonElement;
		const index = buttons.indexOf(current);

		if (e.key === 'ArrowDown') {
			buttons[(index + 1) % buttons.length]?.focus();
		} else {
			buttons[(index - 1 + buttons.length) % buttons.length]?.focus();
		}
	}
</script>

<button onclick={() => helpStore.set({ open: true })} class="btn btn-text">?: help</button>

<dialog
	bind:this={dialog}
	class={cn(
		'm-auto h-fit w-125 overflow-y-auto border border-border bg-background outline-0 ',
		classname
	)}
	onclick={() => helpStore.set({ open: false })}
	oncancel={() => helpStore.set({ open: false })}
	onkeydown={onKeydown}
	{...props}
>
	<ul class="size-full">
		{#if $helpStore.open}
			{#each vim.keymap.all() as keymap (keymap.opts?.name)}
				<li>
					<button
						class="grid w-full cursor-pointer grid-cols-8 items-center gap-x-3 px-6 py-2 text-start outline-0 hover:bg-muted/20 focus-visible:bg-muted/20 hover:[&_p]:text-foreground! focus-visible:[&_p]:text-foreground!"
						onclick={() => onAction(keymap)}
					>
						<p class="col-span-2">
							{keymap.lhs}
						</p>

						<p class="col-span-6">
							{keymap.opts?.desc}
						</p>
					</button>
				</li>
			{/each}
		{/if}
	</ul>
</dialog>
