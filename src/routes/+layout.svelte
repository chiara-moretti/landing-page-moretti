<script>
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';

	import '$lib/styles/reset.css';
	import '$lib/styles/tokens.css';

	let { children } = $props();

	// Theme store
	const theme = writable('dark');

	// Initialize theme from localStorage or system preference
	onMount(() => {
		const savedTheme = localStorage.getItem('theme');
		const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

		theme.set(initialTheme);
		document.documentElement.setAttribute('data-theme', initialTheme);
	});

	// Theme toggle function
	function toggleTheme() {
		theme.update(current => {
			const newTheme = current === 'dark' ? 'light' : 'dark';
			document.documentElement.setAttribute('data-theme', newTheme);
			localStorage.setItem('theme', newTheme);
			return newTheme;
		});
	}
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<!-- Satoshi Font -->
	<link rel="preconnect" href="https://api.fontshare.com" />
	<link rel="preconnect" href="https://api.fontshare.com" crossorigin="anonymous" />
	<link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,2&display=swap" rel="stylesheet" />

	<!-- Inter Font -->
	<link rel="preconnect" href="https://fonts.bunny.net">
	<link rel="preconnect" href="https://fonts.bunny.net" crossorigin="anonymous">
	<link href="https://fonts.bunny.net/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
</svelte:head>

<div class="layout-shell">
	<button class="theme-toggle-button" onclick={toggleTheme} aria-label="Toggle theme">
		<svg class="theme-toggle-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
		</svg>
	</button>

	{@render children()}
</div>

<style>
	.layout-shell {
		min-height: 100vh;
	}

	.theme-toggle-button {
		position: fixed;
		top: 1rem;
		right: 1rem;
		z-index: 50;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		padding: 0;
		border-radius: 50%;
		background: var(--color-content-primary);
		color: var(--color-background-primary);
		border: 1px solid var(--color-content-secondary);
		cursor: pointer;
		transition: opacity 0.2s ease;
	}

	.theme-toggle-button:hover {
		opacity: 0.8;
	}

	.theme-toggle-icon {
		width: 1.5rem;
		height: 1.5rem;
	}
</style>
