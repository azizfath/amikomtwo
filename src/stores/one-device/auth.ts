import { writable, type Writable } from 'svelte/store';

export interface Auth {
	nim: string;
	password: string;
	deviceId: string;
	tglLahir: string;
}

export const authOneDevice: Writable<Auth> = writable({
	deviceId: '',
	nim: '',
	password: '',
	tglLahir: ''
});

export const getAuthData = async (): Promise<Auth> =>
	new Promise((resolve) => authOneDevice.subscribe(resolve));

export const isLogged = async () => {
	const auth: Auth = await getAuthData();
	return Boolean(auth.deviceId && auth.password && auth.nim && auth.tglLahir);
};

export const resetAuthOneDevice = () => {
	authOneDevice.update(() => ({
		deviceId: '',
		nim: '',
		password: '',
		tglLahir: ''
	}));
};
