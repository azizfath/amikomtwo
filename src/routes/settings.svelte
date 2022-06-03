<script lang="ts">
import { onDestroy } from 'svelte';

	import { frontPage } from '../stores';
	import { success } from '../supports/toast-theme';
	let fp: string;
	const unsubsFpStore = frontPage.subscribe((value) => {
		fp = value;
	});
	function submit() {
		frontPage.update(() => fp);
		success('Pengaturan berhasil disimpan');
	}
	onDestroy(() => {
		unsubsFpStore()
	})
</script>

<section class="flex flex-col justify-content-center mx-auto gap-5 w-full xl:w-1/2">
	<div class="flex flex-col">
		<label for="frontpage">Pilih Default Tampilan Depan</label>
		<select bind:value={fp} id="frontpage" class="bg-gray-100 py-2 px-4 rounded-lg flex-auto">
			<option value="/quick-presence">Presensi Cepat</option>
			<option value="/one-device">One Device</option>
		</select>
	</div>
	<button on:click={submit} class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
		>Simpan</button
	>
</section>
