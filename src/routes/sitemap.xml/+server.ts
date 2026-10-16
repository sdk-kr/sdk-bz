import type { RequestHandler } from './$types';

const SITE = 'https://sdk.bz';
// 색인 대상 로케일. ja/zh 번역본이 en/ko 대비 크게 짧아 품질 기준에 미달한다.
// 2026-10-16 전수 측정: /ja 중앙값 157~481단어, /zh 158~589단어 (en 은 446~1,994).
// 번역이 보강되면 다시 추가한다. (layout 에서 noindex 도 함께 처리)
const LANGS = ['en', 'ko'];

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
	'/guide/mining'
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
