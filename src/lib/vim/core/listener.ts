import { keymap, type Map } from './keymap';
import { Logger } from './logger';

/**
 * Listener class listens for keyboard events and executes the corresponding commands based on the defined keymaps.
 */
export class Listener extends Logger {
	keymaps: Map[] = keymap.all();

	mode: Map['mode'] = 'n';

	history: Map['lhs'][] = [];

	command: Map['lhs'] = '';

	constructor() {
		super();

		if (typeof window === 'undefined') {
			return;
		}

		window.addEventListener('keydown', this.keydown.bind(this));

		this.logger.debug('listener initialized');
	}

	keydown(event: KeyboardEvent) {
		if (event.ctrlKey || event.altKey || event.metaKey) {
			return;
		}

		this.history.push(event.key);

		this.command += this.translate(event);

		this.logger.debug('current command ', this.command);

		const matches = this.findmatch(this.command);

		this.logger.debug('matches found ', matches);

		if (matches.length === 1) {
			const [match] = matches;
			match.rhs();
			this.command = '';
		}

		if (matches.length === 0) {
			this.command = '';
		}
	}

	findmatch(keySequence: string) {
		return this.keymaps.filter((map) => map.lhs.startsWith(keySequence));
	}

	translate(event: KeyboardEvent) {
		if (event.code === 'Space') {
			return '<leader>';
		}

		return event.key;
	}
}

export const listener = new Listener();
