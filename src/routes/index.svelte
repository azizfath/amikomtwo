<script lang="ts">
	import { goto } from '$app/navigation';
	import { frontPage } from '../stores';
	import { onMount } from 'svelte';
	let fp: string;
	frontPage.subscribe((val) => {
		fp = val;
	});
	onMount(() => {
		goto(fp);
	});
</script>
