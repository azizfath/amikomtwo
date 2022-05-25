<script lang="ts">
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import Connectivity from '../components/Connectivity.svelte';
	import '../app.css';
	import Container from '../components/Container.svelte';
	import AddToHomeScreen from '../components/AddToHomeScreen.svelte';
</script>

<SvelteToast />
<Connectivity />
<Container>
	<slot />
</Container>
<footer class="py-5">
	<section class="float-right">
		<div class="flex flex-row" />
	</section>
</footer>
<AddToHomeScreen />
