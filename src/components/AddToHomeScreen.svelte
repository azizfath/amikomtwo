<script lang="ts">
	import { isMobile, isStandalone } from '..//supports/pwasupport';
	import { Item,Text } from '@smui/list';

	import { onMount } from 'svelte';

	import { pwaDeferredPrompt } from '../stores';

	let deferredPrompt: any;
	let btnInstall = false;
	pwaDeferredPrompt.subscribe((value) => {
		deferredPrompt = value;
	});
	const handleInstall = (e: any) => {
		console.info(`app install call`);
		e.preventDefault();
		if (deferredPrompt === null) {
			deferredPrompt = e;
			pwaDeferredPrompt.update((s) => e);
		}

		btnInstall = false;
		console.info(`app install call complete`);
	};
	const installApp = (e: any) => {
		btnInstall = false;
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

	let refererInstalation: [string,string] | []=[]

	onMount(() => {
		window.addEventListener('appinstalled', () => {
			btnInstall = false;
		});
		if(!isStandalone()) {
			if(isMobile.iOS()) (refererInstalation=["IOS", "/install/ios"])
			else if(isMobile.Android()) (refererInstalation=["Android", "/install/android"])
			else (refererInstalation=[])
		}
	});
</script>

<svelte:window on:beforeinstallprompt={handleInstall} />
{#if btnInstall}
	<Item>
		<button
			on:click={installApp}
			class="bg-green-500 text-center hover:bg-green-600 text-white py-2 px-4 rounded w-full"
			>Install Aplikasi</button
		>
	</Item>
{:else if refererInstalation.length==2}
	<Item href="{refererInstalation[1]}">
		<span
			class="bg-green-500 text-center hover:bg-green-600 text-white py-2 px-4 rounded w-full"
			>Install di {refererInstalation[0]}</span
		>
	</Item>
{/if}