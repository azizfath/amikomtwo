<script lang="ts">
	import { goto } from '$app/navigation';
	import { frontPage } from '../stores';
	import { onDestroy, onMount } from 'svelte';
	let fp: string;
	const unsubsFpStore = frontPage.subscribe((val) => {
		fp = val;
	});
	onMount(() => {
		goto(fp);
	});
	onDestroy(() => {
		unsubsFpStore()
	})
</script>
