<script lang="ts">
import { onMount } from 'svelte';

	import { failure, success } from '../../../supports/toast-theme';
	let nim = '';
	const current = new Date();
	let tahun_lahir = current.getFullYear().toString();
	let tanggal_lahir = current.getDate().toString();
	let bulan_lahir = (current.getMonth() + 1).toString();

	const reqotp = (
		e: SubmitEvent & {
			currentTarget: EventTarget & HTMLFormElement;
		}
	) => {
		e.preventDefault();
		tanggal_lahir = (tanggal_lahir || '').toString().padStart(2, '0');
		bulan_lahir = (bulan_lahir || '').toString().padStart(2, '0');

		if (!/\d{2}\.\d{2}\.\d{4}/.test(nim)) {
			failure('NIM Tidak valid');
			return;
		}
		const rangeTanggalLahir = parseInt(tanggal_lahir) > 0 && parseInt(tanggal_lahir) < 32;
		if (!/\d{2}/.test(tanggal_lahir) || !rangeTanggalLahir) {
			failure('Tanggal Lahir Tidak valid');
			return;
		}

		const rangeBulanLahir = parseInt(bulan_lahir) > 0 && parseInt(bulan_lahir) < 13;
		if (!/\d{2}/.test(bulan_lahir) || !rangeBulanLahir) {
			failure('Bulan Lahir Tidak valid');
			return;
		}

		if (!/\d{4}/.test(tahun_lahir)) {
			failure('Tahun Lahir Tidak valid');
			return;
		}
		(document.querySelector('form') as HTMLFormElement).submit();
		return e;
	};
	export let error:string
	onMount(() => {
		if(error) failure(error)
	})
</script>

<form
	method="post"
	on:submit|preventDefault={reqotp}
	class="flex flex-col justify-content-center mx-auto gap-5 w-full xl:w-1/2"
>
	<input
		bind:value={nim}
		name="nim"
		type="text"
		class="bg-gray-100 py-2 px-4 rounded-lg flex-auto"
		placeholder="Nomor Induk Mahasiswa"
	/>
	<div class="flex flex-col w-full">
		<label for="tgllahir">Masukkan Tanggal Lahir</label>
		<div class="flex flex-row gap-2">
			<input
				bind:value={tanggal_lahir}
				name="tanggal_lahir"
				type="number"
				class="bg-gray-100 py-2 px-4 rounded-lg w-full"
				placeholder="Tanggal"
			/>
			<input
				bind:value={bulan_lahir}
				name="bulan_lahir"
				type="number"
				class="bg-gray-100 py-2 px-4 rounded-lg w-full"
				placeholder="Bulan"
			/>
			<input
				bind:value={tahun_lahir}
				name="tahun_lahir"
				type="number"
				class="bg-gray-100 py-2 px-4 rounded-lg w-full"
				placeholder="Tahun"
			/>
		</div>
	</div>
	<button class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">Kiriminkan</button>
	<p>
		Kami memerlukan Nomor Induk Mahasiswa dan Tanggal Lahir Anda untuk memverifikasi data diri Anda.
		Selanjutnya Anda akan menerima kode OTP melalui email_anda@students.amikom.ac.id
	</p>
</form>
