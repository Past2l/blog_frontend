export function getCookie(name: string): string {
	const matches = document.cookie.match(
		new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)')
	);
	return matches ? decodeURIComponent(matches[1]) : '';
}

export function setCookie(name: string, value: any, options?: any) {
	options = {
		path: '/',
		...options
	};

	if (options.expires instanceof Date) options.expires = options.expires.toUTCString();
	else if (!isNaN(+options.expires))
		options.expires = new Date(Date.now() + options.expires).toUTCString();

	let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

	for (const optionKey in options) {
		updatedCookie += '; ' + optionKey;
		const optionValue = options[optionKey];
		if (optionValue !== true) {
			updatedCookie += '=' + optionValue;
		}
	}

	document.cookie = updatedCookie;
}

export function deleteCookie(name: string) {
	setCookie(name, '', {
		'max-age': -1
	});
}
