<script lang="ts">
	import { onMount } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils/cn';

	interface Star {
		x: number;
		y: number;
		z: number;
		symbol: string;
	}

	const charSets = ' .+*.+*.+*.+*';

	const STARS_AMOUNT = 40;
	const MAX_DEPTH = 1000;
	const FOV = 3000;
	const SPEED = 0.5;
	const SYMBOL: string[] = charSets.split('');

	let container: HTMLDivElement;

	export type StarfieldProps = WithoutChildrenOrChild<HTMLAttributes<HTMLDivElement>>;

	let { class: classname, ...props }: StarfieldProps = $props();

	let canvas = $state({ width: 0, height: 0 });
	let stars = $state<Star[]>([]);

	function createStar(initial = false) {
		const angle = Math.random() * Math.PI * 2;
		const distance = Math.sqrt(Math.random()) * 50;
		return {
			x: Math.cos(angle) * distance,
			y: Math.sin(angle) * distance,
			z: initial ? Math.random() * MAX_DEPTH : MAX_DEPTH,
			symbol: SYMBOL[Math.floor(Math.random() * SYMBOL.length)]
		};
	}

	function resetStar(star: Star) {
		star.z = MAX_DEPTH;
		const angle = Math.random() * Math.PI * 2;
		const distance = Math.sqrt(Math.random()) * 50;
		star.x = Math.cos(angle) * distance;
		star.y = Math.sin(angle) * distance;
		star.symbol = SYMBOL[Math.floor(Math.random() * SYMBOL.length)];
	}

	function updateStar(star: Star) {
		const depthSpeed = SPEED * (2 - star.z / MAX_DEPTH);
		star.z -= depthSpeed;

		if (star.z <= 10) {
			resetStar(star);
		}
	}

	function getRenderedStar(star: Star) {
		const screenX = (star.x / star.z) * FOV * 2 + canvas.width / 2;
		const screenY = (star.y / star.z) * FOV * 2 + canvas.height / 2;
		const size = Math.max(8, 24 * (1 - star.z / MAX_DEPTH));
		const opacity = 1 - star.z / MAX_DEPTH;

		return { x: screenX, y: screenY, symbol: star.symbol, size, opacity };
	}

	function initStars() {
		stars = Array.from({ length: STARS_AMOUNT }, () => createStar(true));
	}

	function updateAndDraw() {
		stars.forEach((star) => updateStar(star));
		stars = stars;
	}

	onMount(() => {
		canvas.width = container.clientWidth;
		canvas.height = container.clientHeight;

		initStars();

		let animationFrame: number;

		function animate() {
			updateAndDraw();
			animationFrame = requestAnimationFrame(animate);
		}

		animate();

		function handleResize() {
			canvas.width = container.clientWidth;
			canvas.height = container.clientHeight;
			initStars();
		}

		window.addEventListener('resize', handleResize);
		return () => {
			cancelAnimationFrame(animationFrame);
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

<div
	bind:this={container}
	class={cn('relative -z-10 flex-1 overflow-hidden font-mono text-foreground/30', classname)}
	{...props}
>
	{#each stars as star (star)}
		{@const rendered = getRenderedStar(star)}
		{#if rendered.x > -50 && rendered.x < canvas.width + 50 && rendered.y > -50 && rendered.y < canvas.height + 50}
			<div
				class="absolute"
				style="
					left: {rendered.x}px;
					top: {rendered.y}px;
					font-size: {rendered.size}px;
				"
			>
				{rendered.symbol}
			</div>
		{/if}
	{/each}
</div>
