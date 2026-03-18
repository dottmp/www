import { dev } from '$app/environment';

type LogLog = Parameters<typeof console.log>;
type ErrorLog = Parameters<typeof console.error>;
type DebugLog = Parameters<typeof console.debug>;
type InfoLog = Parameters<typeof console.info>;

/**
 * Logger for vim extension, it prefixes all logs with [vim].
 */
export class Logger {
	private prefix: string = '[vim] ';

	private log(...args: LogLog) {
		if (!dev) return;
		console.log(this.prefix, ...args);
	}

	private error(...args: ErrorLog) {
		if (!dev) return;
		console.error(this.prefix, ...args);
	}

	private debug(...args: DebugLog) {
		if (!dev) return;
		console.debug(this.prefix, ...args);
	}

	private info(...args: InfoLog) {
		if (!dev) return;
		console.info(this.prefix, ...args);
	}

	logger = {
		info: this.info.bind(this),
		error: this.error.bind(this),
		debug: this.debug.bind(this),
		log: this.log.bind(this)
	};
}
