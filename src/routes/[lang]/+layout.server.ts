import { locales, type Locale } from '$lib/i18n';
import { error } from '@sveltejs/kit';
import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = ({ params }) => {
	const lang = params.lang as Locale;

	if (!locales.includes(lang)) {
		throw error(404, 'Language not supported');
	}

	return {
		lang
	};
};
