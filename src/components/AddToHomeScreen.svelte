<script lang="ts">
	import { pwaDeferredPrompt } from '../stores';
	import Wrapper from './Wrapper.svelte';

	let deferredPrompt: any;
	let btnInstallAppVisible = false;
	pwaDeferredPrompt.subscribe((value) => {
		deferredPrompt = value;
		btnInstallAppVisible = Boolean(deferredPrompt);
	});

	const handleInstall = (e: any) => {
		console.info(`app install call`);
		e.preventDefault();
		if (deferredPrompt === null) {
			deferredPrompt = e;
			pwaDeferredPrompt.update((s) => e);
		}

		btnInstallAppVisible = true;
		console.info(`app install call complete`);
	};
	const installApp = (e: any) => {
		btnInstallAppVisible = false;
		deferredPrompt.prompt();
		deferredPrompt.userChoice.then((choiceResult: any) => {
			if (choiceResult.outcome === 'accepted') {
				btnInstallAppVisible = false;
				console.info('User accepted the A2HS prompt');
			} else {
				console.info('User dismissed the A2HS prompt');
			}
			pwaDeferredPrompt.update((s) => null);
		});
	};
</script>

<svelte:window on:beforeinstallprompt={handleInstall} />
{#if btnInstallAppVisible}
	<div class="installable">
		<Wrapper>
			<div class="flex self-center justify-end items-center mx-auto w-full xl:w-1/2">
				<button
					on:click={installApp}
					class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded w-full"
					>Install di Android/IOS</button
				>
			</div>
		</Wrapper>
	</div>
{/if}

<style lang="scss">
	.installable {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
	}
</style>
