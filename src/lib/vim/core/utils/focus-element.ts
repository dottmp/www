/**
 * Focus next or prev element depending on provided direction.
 */
export function focusElement(direction: 'next' | 'prev'): void {
	const elements = getFocusableElements();
	const activeIndex = elements.indexOf(document.activeElement as HTMLElement);

	if (activeIndex === -1) {
		elements[getInitialIndex(elements, direction)].focus();
	} else {
		elements[getIndex(elements, activeIndex, direction)].focus();
	}
}

//----------------------------------------------------------------------
// Helpers
//----------------------------------------------------------------------
type Diretion = 'next' | 'prev';

// Array with focusable elements for vim lib
const FOCUSABLE_ELEMENTS = Object.freeze([
	'[tabindex]:not([tabindex="-1"]):not([disabled])',
	'input:not([disabled]):not([type="hidden"]):not([tabindex="-1"])',
	'textarea:not([disabled]):not([tabindex="-1"])',
	'select:not([disabled]):not([tabindex="-1"])',
	'button:not([disabled]):not([tabindex="-1"])',
	'a[href]:not([disabled]):not([tabindex="-1"])'
] as const);

// Gets the focusable elements and filter hidden ones
function getFocusableElements(): HTMLElement[] {
	return Array.from(document.querySelectorAll(FOCUSABLE_ELEMENTS.join(', '))).filter(
		(el) => !el.closest('[hidden]')
	) as HTMLElement[];
}

// Intended user experience should be that if active tabindex is provided it should have priority focus and focus first regardless of direction (h,l)
function getExplicitTabindexElement(elements: HTMLElement[]): HTMLElement | null {
	const withTabindex = elements
		.map((el) => ({ el, tabindex: parseInt(el.getAttribute('tabindex') ?? '', 10) }))
		.filter(({ tabindex }) => !isNaN(tabindex))
		.sort((a, b) => a.tabindex - b.tabindex);

	return withTabindex[0]?.el ?? null;
}

// Get inital index based of the FOCUSABLE_ELEMENTS array
function getInitialIndex(elements: HTMLElement[], direction: Diretion): number {
	const explicitElement = getExplicitTabindexElement(elements);

	if (explicitElement) {
		return elements.indexOf(explicitElement);
	}

	return direction === 'next' ? 0 : elements.length - 1;
}

// Get index for the next/prev element based of the FOCUSABLE_ELEMENTS array
function getIndex(elements: HTMLElement[], activeIndex: number, direction: Diretion): number {
	if (direction === 'next') {
		return (activeIndex + 1) % elements.length;
	}

	return (activeIndex - 1 + elements.length) % elements.length;
}
