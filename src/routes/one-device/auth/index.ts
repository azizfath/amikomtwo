import { MikomOneDevice } from '@binsarjr/apiamikomone';
import { authOneDevice, type Auth } from '../../../stores/one-device/auth';

export const get = async () => {
	let auth: Auth = await new Promise((resolve) => authOneDevice.subscribe(resolve));
	if (auth.deviceId) {
		return {
			status: 302,
			headers: {
				location: '/one-device/auth/signin'
			}
		};
	}
	return {};
};

export const post = async (e: { request: Request }) => {
	const request = await e.request.formData();
	const nim = request.get('nim')?.toString() || '';
	const tanggal_lahir = (request.get('tanggal_lahir')?.toString() || '').padStart(2, '0');
	const bulan_lahir = (request.get('bulan_lahir')?.toString() || '').padStart(2, '0');
	const tahun_lahir = request.get('tahun_lahir')?.toString() || '';
	let tglLahir = `${tahun_lahir}-${bulan_lahir}-${tanggal_lahir}`;

	try {
		await MikomOneDevice.Device.Otp(nim, tglLahir);

		authOneDevice.update((_) => ({
			deviceId: '',
			nim,
			password: '',
			tglLahir
		}));

		return {
			status: 302,
			headers: {
				location: '/one-device/auth/otp'
			}
		};
	} catch (error) {
		return {
			body: {
				error: 'Gagal mengirimkan otp.Cek kembali nim dan tanggal lahir anda'
			}
		};
	}
};
