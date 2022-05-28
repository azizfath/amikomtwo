<script lang="ts">
	// @ts-ignore
	import InternetConnection from 'svelte-internet-connection';
</script>

<InternetConnection let:offline>
		{#if offline}
			<section class="fixed flex items-center justify-center top-0 left-0 bottom-0 bg-black opacity-50 right-0  font-bold px-4 py-1 text-center z-50" id="offline">
				<p class="text-md bg-red-500 text-white px-4 py-2 rounded">
					Saat ini kamu sedang offline. Aplikasi hanya bisa digunakan ketika online
				</p>
			</section>
		{/if}
</InternetConnection>