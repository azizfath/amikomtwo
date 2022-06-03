import { MikomOneDevice } from '@binsarjr/apiamikomone';
import { authOneDevice, isLogged } from '../../../stores/one-device/auth';

export const get = async () => {
	const islogged = await isLogged();
	console.log(islogged);

	return islogged
		? {
				status: 302,
				headers: {
					location: '/one-device'
				}
		  }
		: {};
};

export const post = async (e: { request: Request }) => {
	const form = await e.request.formData();
	const nim = form.get('nim')?.toString() || '';
	const password = form.get('password')?.toString() || '';

	try {
		const logged = await new Promise((resolve, reject) =>
			authOneDevice.subscribe((auth) => {
				auth.password = password;
				MikomOneDevice.Auth(nim, password, auth.deviceId).then(resolve).catch(reject);
			})
		);
		return {
			status: 302,
			headers: {
				location: '/one-device'
			}
		};
	} catch (error) {
		return {
			body: {
				error: 'Login tidak dikenali'
			}
		};
	}
};
