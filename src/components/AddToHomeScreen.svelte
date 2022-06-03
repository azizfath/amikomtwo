<script lang="ts">
	import { isMobile, isStandalone } from '..//supports/pwasupport';
	import { Item, Text } from '@smui/list';

	import { onDestroy, onMount } from 'svelte';

	import { pwaDeferredPrompt } from '../stores';

	let deferredPrompt: any;
	let btnInstall = false;
	const unsubsPwaStore = pwaDeferredPrompt.subscribe((value) => {
		deferredPrompt = value;
		btnInstall = Boolean(deferredPrompt);
	});
	const handleInstall = (e: any) => {
		console.info(`app install call`);
		e.preventDefault();
		if (deferredPrompt === null) {
			deferredPrompt = e;
			pwaDeferredPrompt.update((s) => e);
		}

		btnInstall = true;
		console.info(`app install call complete`);
	};
	const installApp = (e: any) => {
		btnInstall = true;
		deferredPrompt.prompt();
		deferredPrompt.userChoice.then((choiceResult: any) => {
			if (choiceResult.outcome === 'accepted') {
				btnInstall = false;
				console.info('User accepted the A2HS prompt');
			} else {
				console.info('User dismissed the A2HS prompt');
			}
			pwaDeferredPrompt.update((s) => null);
		});
	};

	let refererInstalation: [string, string] | [] = [];

	onMount(() => {
		if (!isStandalone()) {
			window.addEventListener('appinstalled', () => {
				btnInstall = false;
			});
			if (isMobile.iOS()) refererInstalation = ['IOS', '/install/ios'];
			else if (isMobile.Android()) refererInstalation = ['Android', '/install/android'];
			else refererInstalation = [];
		}
	});
	onDestroy(() => {
		unsubsPwaStore();
	});
</script>

<svelte:window on:beforeinstallprompt={handleInstall} />
{#if btnInstall}
	<Item>
		<button
			on:click={installApp}
			class="bg-green-500 text-center hover:bg-green-600 text-white py-2 px-4 rounded w-full"
			>Install di Android/IOS</button
		>
	</Item>
{/if}
{#if !btnInstall && refererInstalation.length == 2}
	<Item href={refererInstalation[1]}>
		<span class="bg-green-500 text-center hover:bg-green-600 text-white py-2 px-4 rounded w-full"
			>Install di {refererInstalation[0]}</span
		>
	</Item>
{/if}
