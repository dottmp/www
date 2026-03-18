import { keymap } from './keymap';
import * as utils from './utils/focus-element.ts';
import './listener';

export const vim = Object.freeze({ keymap, utils } as const);
