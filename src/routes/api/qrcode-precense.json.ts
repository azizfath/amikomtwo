import { MikomLegacy } from '@binsarjr/apiamikomone'

export const post = async (event: { url: URL }) => {
	const npm = event.url.searchParams.get('npm') || '';
	const data = Buffer.from(event.url.searchParams.get('data') || '', 'base64').toString();
	const response = await MikomLegacy.Presence.QrCode(npm, data);

	return {
		body: {
			status: response.status == 'success',
			message: response.message
		}
	};
};
