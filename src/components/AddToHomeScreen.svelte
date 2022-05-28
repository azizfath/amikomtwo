<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	import { pwaDeferredPrompt } from '../stores';

	let deferredPrompt: any;
	const dispatch = createEventDispatcher();
	let visible = false;
	const installed = () => dispatch('installed');
	const beforeinstall = () => dispatch('beforeinstall');
	pwaDeferredPrompt.subscribe((value) => {
		deferredPrompt = value;
	});
	onMount(() => {
		window.addEventListener('appinstalled', () =>{
			visible=true
			installed()
		})
		visible ? installed() : beforeinstall();
	});
	const handleInstall = (e: any) => {
		console.info(`app install call`);
		e.preventDefault();
		if (deferredPrompt === null) {
			deferredPrompt = e;
			pwaDeferredPrompt.update((s) => e);
		}

		visible = true;
		console.info(`app install call complete`);
	};
	const installApp = (e: any) => {
		visible = false;
		deferredPrompt.prompt();
		deferredPrompt.userChoice.then((choiceResult: any) => {
			if (choiceResult.outcome === 'accepted') {
				visible = false;
				console.info('User accepted the A2HS prompt');
			} else {
				console.info('User dismissed the A2HS prompt');
			}
			pwaDeferredPrompt.update((s) => null);
		});
	};
</script>

<svelte:window on:beforeinstallprompt={handleInstall}/>
{#if visible}
	<button
		on:click={installApp}
		class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded w-full"
		>Install di Android/IOS</button
	>
{/if}
