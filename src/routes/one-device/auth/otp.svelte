<script lang="ts">
	import { failure } from '../../../supports/toast-theme';

	let otp: string = '';
	const sendOtp = (
		e: SubmitEvent & {
			currentTarget: EventTarget & HTMLFormElement;
		}
	) => {
		e.preventDefault();
		if (otp.length != 6) {
			failure('Mohon masukkan otp yang valid');
			return;
		}
		(document.querySelector('form') as HTMLFormElement).submit();
	};

	$: if (otp.length == 6) (document.querySelector('form button') as HTMLFormElement).click();
</script>

<form
	method="post"
	on:submit|preventDefault={sendOtp}
	class="flex flex-col justify-content-center mx-auto gap-5 w-full xl:w-1/2"
>
	<p>Periksa email students lalu masukkan kode OTP yang Anda terima pada email</p>
	<input
		bind:value={otp}
		name="otp"
		type="text"
		class="bg-gray-100 py-2 px-4 rounded-lg flex-auto"
		placeholder="Masukkan OTP"
	/>
	<button class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">Kiriminkan</button>
</form>
