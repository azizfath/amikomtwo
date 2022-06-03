import { MikomOneDevice } from '@binsarjr/apiamikomone';
import { authOneDevice, type Auth } from '../../../stores/one-device/auth';

export const post = async (e: { request: Request }) => {
	const request = await e.request.formData();
	const otp = request.get('otp')?.toString() || '';
	let auth: Auth;

	try {
		await new Promise((resolve, reject) =>
			authOneDevice.subscribe((val) => {
				val.deviceId = val.nim;
				auth = val;
				MikomOneDevice.Device.Verify(auth.nim, otp, auth.deviceId).then(resolve).catch(reject);
			})
		);

		return {
			status: 302,
			headers: {
				location: '/one-device/auth/signin'
			}
		};
	} catch (error) {
		return {
			status: 302,
			headers: {
				location: '/one-device/auth'
			},
			body: {
				error: 'Gagal memverifikasi otp.Silakan ulangi prosesnya'
			}
		};
	}
};
