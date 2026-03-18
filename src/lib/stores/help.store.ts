import { writable } from 'svelte/store';

/**
 * helpStore is the store for the help dialog and used with vim core keybindings.
 */
export const helpStore = writable({ open: false });
