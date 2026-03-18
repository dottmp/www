import { toggleMode } from 'mode-watcher';

import { vim } from '../core';

import { goto } from '$app/navigation';
import { resolve } from '$app/paths';
import { page } from '$app/state';
import type { Pathname } from '$app/types';
import { helpStore } from '$lib/stores/help.store';

vim.keymap.set(
	'n',
	'x',
	function () {
		goto(resolve('/'));
	},
	{ name: 'home', desc: 'Go to home page' }
);

vim.keymap.set(
	'n',
	'a',
	function () {
		goto(resolve('/articles'));
	},
	{ name: 'articles', desc: 'Go to articles page' }
);

vim.keymap.set(
	'n',
	's',
	function () {
		goto(resolve('/snowflake-proxy'));
	},
	{ name: 'snowflake', desc: 'Go to snowflake proxy page' }
);

vim.keymap.set(
	'n',
	'/',
	function () {
		window.open('https://github.com/dottmp', '_blank', 'noopener noreferrer');
	},
	{ name: 'github', desc: 'Open GitHub profile' }
);

vim.keymap.set(
	'n',
	'm',
	function () {
		toggleMode();
	},
	{ name: 'mode', desc: 'Toggle between normal and visual mode' }
);

vim.keymap.set(
	'n',
	'?',
	function () {
		helpStore.update((store) => ({ ...store, open: !store.open }));
	},
	{ name: 'help', desc: 'Open help dialog' }
);

vim.keymap.set(
	'n',
	'q',
	function () {
		if (page.url.pathname === '/') return;

		goto(resolve((page.url.pathname.split('/').slice(0, -1).join('/') || '/') as Pathname));
	},
	{ name: 'back', desc: 'Go back' }
);
