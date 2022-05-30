/**
 ** Gunakanlah di onMount supaya object window bisa terbaca
 * helps you detect mobile browsers (to show a relevant message as the process of installing your PWA changes from browser to browser)
 */
export const isMobile = {
	Android: function () {
		return /Android/i.test(navigator.userAgent);
	},
	BlackBerry: function () {
		return /BlackBerry/i.test(navigator.userAgent);
	},
	iOS: function () {
		return /iPhone|iPad|iPod/i.test(navigator.userAgent);
	},
	Opera: function () {
		return /Opera Mini/i.test(navigator.userAgent);
	},
	Samsung: function () {
		return /SAMSUNG|Samsung|SGH-[I|N|T]|GT-[I|N]|SM-[A|N|P|T|Z]|SHV-E|SCH-[I|J|R|S]|SPH-L/i.test(
			navigator.userAgent
		);
	},
	Windows: function () {
		return /IEMobile/i.test(navigator.userAgent) || /WPDesktop/i.test(navigator.userAgent);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows() ||
			false
		);
	}
};

/**
 ** Gunakanlah di onMount supaya object window bisa terbaca
 * use this to check if the user is already using your PWA - no need to prompt if in standalone
 */
export function isStandalone(): boolean {
	const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
	if (document.referrer.startsWith('android-app://')) {
		return true; // Trusted web app
	} else if ('standalone' in navigator || isStandalone) {
		return true;
	}
	return false;
}
