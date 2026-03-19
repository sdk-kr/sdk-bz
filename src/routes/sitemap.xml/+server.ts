import type { RequestHandler } from './$types';
import { getAllBlogPosts } from '$lib/data/blog-posts';

const SITE = 'https://sdk.bz';
const LANGS = ['en', 'ko', 'ja', 'zh'];

const PAGES = [
	'',
	'/loan',
	'/compound',
	'/mortgage',
	'/retirement',
	'/roi',
	'/currency',
	'/profit',
	'/dca',
	'/staking',
	'/mining',
	'/about',
	'/privacy',
	'/terms',
	'/contact',
	'/faq',
	'/guide',
	'/guide/loan',
	'/guide/compound',
	'/guide/mortgage',
	'/guide/retirement',
	'/guide/roi',
	'/guide/currency',
	'/guide/profit',
	'/guide/dca',
	'/guide/staking',
	'/guide/mining',
	'/blog',
	...getAllBlogPosts().map(p => `/blog/${p.slug}`)
];

export const GET: RequestHandler = async () => {
	const today = new Date().toISOString().split('T')[0];

	const urls = LANGS.flatMap((lang) =>
		PAGES.map(
			(page) => `
	<url>
		<loc>${SITE}/${lang}${page}</loc>
		<lastmod>${today}</lastmod>
		<changefreq>weekly</changefreq>
		<priority>${page === '' ? '1.0' : page.startsWith('/blog') ? '0.6' : page.startsWith('/guide') ? '0.7' : '0.8'}</priority>
	</url>`
		)
	).join('');

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

	return new Response(sitemap.trim(), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
};
