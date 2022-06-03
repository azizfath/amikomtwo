<script lang="ts">
	import type { IBio } from '@binsarjr/apiamikomone/lib/typings/Response';

	export let user: IBio;
</script>

<span class="bg-yellow-500 text-black px-4 py-2 rounded">Beta Version</span>
<p>Untuk fitur ini masih dalam versi beta.Sehingga fitur fitur belum berjalan secara maksimal</p>
<table class="min-w-full leading-normal">
	<tr>
		<th
			class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"
			>Nama</th
		>
		<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm w-full">{user.Mhs.Nama}</td>
	</tr>

	<tr>
		<th
			class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"
			>Angkatan</th
		>
		<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm w-full">{user.Mhs.Angkatan}</td>
	</tr>

	<tr>
		<th
			class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"
			>Email</th
		>
		<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm w-full"
			>{user.Mhs.EmailAmikom}</td
		>
	</tr>

	<tr>
		<th
			class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"
			>Prodi</th
		>
		<td class="px-5 py-5 border-b border-gray-200 bg-white text-sm w-full">{user.Mhs.Prodi}</td>
	</tr>
</table>
