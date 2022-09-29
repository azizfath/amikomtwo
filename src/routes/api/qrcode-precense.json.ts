import { MikomLegacy } from '@binsarjr/apiamikomone';

export const post = async (event: { url: URL }) => {
	const npm = event.url.searchParams.get('npm') || '';
	const data = Buffer.from(event.url.searchParams.get('data') || '', 'base64').toString();
	const locations = ["Dashboard", "Amikom"]
	const randomLocation = locations[Math.floor(Math.random() * locations.length)]
	const response = await MikomLegacy.Presence.QrCode(npm, data, randomLocation);

	return {
		body: {
			status: response.status == 'success',
			message: response.message
		}
	};
};
