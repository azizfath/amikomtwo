<script lang="ts">
	import Connectivity from '../components/Connectivity.svelte';
	import '../app.css';
	import Nav from '../components/Nav.svelte';
	import { SvelteToast } from '@zerodevx/svelte-toast';
</script>

<SvelteToast />
<Connectivity />
<Nav>
	<slot />
</Nav>
