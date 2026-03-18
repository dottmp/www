import { focusElement } from './utils/focus-element';

export type Map = {
	mode: string | string[];
	lhs: string;
	rhs: () => unknown;
	opts?: { desc?: string; name?: string };
};
/**
 * Initial keymap class that holds all the key mappings for the vim extension.
 */
export class Keymap {
	maps: Map[];

	constructor() {
		this.maps = [
			{
				mode: ['n'],
				lhs: 'h',
				rhs: function () {
					focusElement('prev');
				},
				opts: { name: 'navigatePrev', desc: 'Focus previous element' }
			},
			{
				mode: ['n'],
				lhs: 'l',
				rhs: function () {
					focusElement('next');
				},
				opts: { name: 'navigateNext', desc: 'Focus next element' }
			},
			{
				mode: ['n'],
				lhs: 'j',
				rhs: function () {
					window.scrollBy(0, 100);
				},
				opts: { name: 'scrollDown', desc: 'Scroll down the page' }
			},

			{
				mode: ['n'],
				lhs: 'k',
				rhs: function () {
					window.scrollBy(0, -100);
				},
				opts: { name: 'scrollUp', desc: 'Scroll up the page' }
			},
			{
				mode: ['n'],
				lhs: 'gg',
				rhs: function () {
					window.scrollTo({ top: 0 });
				},
				opts: { name: 'scrollToTop', desc: 'Scroll to the top of the page' }
			},
			{
				mode: ['n'],
				lhs: 'G',
				rhs: function () {
					window.scrollTo({ top: document.body.scrollHeight });
				},
				opts: { name: 'scrollToBottom', desc: 'Scroll to the bottom of the page' }
			}
		];
	}

	set(mode: Map['mode'], lhs: Map['lhs'], rhs: Map['rhs'], opts?: Map['opts']): void {
		this.maps.push({ mode, lhs, rhs, opts });
	}

	del(mode?: Map['mode'], lhs?: Map['lhs'], opts?: Map['opts']): void {
		this.maps = this.maps.filter(
			(k) =>
				k.mode !== mode ||
				k.lhs !== lhs ||
				(opts && JSON.stringify(k.opts) !== JSON.stringify(opts))
		);
	}

	get(mode: Map['mode'], lhs: Map['lhs'], opts?: Map['opts']): Map | undefined {
		return this.maps.find(
			(k) =>
				k.mode === mode &&
				k.lhs === lhs &&
				(!opts || JSON.stringify(k.opts) === JSON.stringify(opts))
		);
	}

	getname(optsname: string): Map | undefined {
		return this.maps.find((k) => k.opts?.name === optsname);
	}

	all(mode?: Map['mode']): Map[] {
		return mode ? this.maps.filter((k) => k.mode === mode) : this.maps;
	}
}

export const keymap = new Keymap();
