<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	const financeTools = [
		{ id: 'loan', icon: '💰', color: 'from-green-500 to-emerald-500' },
		{ id: 'compound', icon: '📈', color: 'from-blue-500 to-cyan-500' },
		{ id: 'mortgage', icon: '🏠', color: 'from-purple-500 to-indigo-500' },
		{ id: 'retirement', icon: '🎯', color: 'from-orange-500 to-amber-500' },
		{ id: 'roi', icon: '💹', color: 'from-teal-500 to-cyan-500' },
		{ id: 'currency', icon: '💱', color: 'from-pink-500 to-rose-500' }
	];

	const cryptoTools = [
		{ id: 'profit', icon: '🚀', color: 'from-yellow-500 to-orange-500' },
		{ id: 'dca', icon: '📊', color: 'from-indigo-500 to-purple-500' },
		{ id: 'staking', icon: '🔒', color: 'from-green-500 to-teal-500' },
		{ id: 'mining', icon: '⛏️', color: 'from-gray-500 to-slate-500' }
	];
</script>

<svelte:head>
	<title>{t('home.title')} - SDK.bz</title>
	<meta name="description" content={t('home.subtitle')} />
	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'SDK.bz',
		url: 'https://sdk.bz',
		description: 'Free financial and crypto calculators for educational purposes'
	})}</` + `script>`}
	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'SDK.bz',
		url: 'https://sdk.bz',
		logo: 'https://sdk.bz/og-image.png',
		sameAs: ['https://github.com/sdk-kr']
	})}</` + `script>`}
</svelte:head>

<div class="max-w-7xl mx-auto px-4 py-12">
	<!-- Hero Section -->
	<div class="text-center mb-16">
		<h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-dark-100 mb-4">
			{t('home.title')}
		</h1>
		<p class="text-xl text-gray-600 dark:text-dark-400 max-w-2xl mx-auto">
			{t('home.subtitle')}
		</p>
	</div>

	<!-- Finance Tools Section -->
	<div class="mb-12">
		<h2 class="text-2xl font-bold text-gray-900 dark:text-dark-100 mb-6 flex items-center gap-2">
			<span class="text-green-500">💵</span> Finance Calculators
		</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each financeTools as tool}
				<a
					href="/{lang}/{tool.id}"
					class="group relative bg-white dark:bg-dark-800 rounded-2xl p-6 border border-gray-200 dark:border-dark-700 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden"
				>
					<div class="absolute inset-0 bg-gradient-to-br {tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
					<div class="text-4xl mb-4">{tool.icon}</div>
					<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
						{t(`home.${tool.id}.title`)}
					</h3>
					<p class="text-sm text-gray-600 dark:text-dark-400">
						{t(`home.${tool.id}.desc`)}
					</p>
					<div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
						<svg class="w-5 h-5 text-green-500 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</div>
				</a>
			{/each}
		</div>
	</div>

	<!-- Crypto Tools Section -->
	<div class="mb-12">
		<h2 class="text-2xl font-bold text-gray-900 dark:text-dark-100 mb-6 flex items-center gap-2">
			<span class="text-orange-500">₿</span> Crypto Calculators
		</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each cryptoTools as tool}
				<a
					href="/{lang}/{tool.id}"
					class="group relative bg-white dark:bg-dark-800 rounded-2xl p-6 border border-gray-200 dark:border-dark-700 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden"
				>
					<div class="absolute inset-0 bg-gradient-to-br {tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
					<div class="text-4xl mb-4">{tool.icon}</div>
					<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
						{t(`home.${tool.id}.title`)}
					</h3>
					<p class="text-sm text-gray-600 dark:text-dark-400">
						{t(`home.${tool.id}.desc`)}
					</p>
					<div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
						<svg class="w-5 h-5 text-orange-500 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</div>
				</a>
			{/each}
		</div>
	</div>

	<!-- Features Section -->
	<div class="mt-16 text-center">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div class="p-6">
				<div class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
					<svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
					</svg>
				</div>
				<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-2">Accurate Calculations</h3>
				<p class="text-gray-600 dark:text-dark-400 text-sm">Professional-grade financial formulas for precise results</p>
			</div>
			<div class="p-6">
				<div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
					<svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
					</svg>
				</div>
				<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-2">100% Private</h3>
				<p class="text-gray-600 dark:text-dark-400 text-sm">All calculations happen in your browser - no data sent to servers</p>
			</div>
			<div class="p-6">
				<div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
					<svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
					</svg>
				</div>
				<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-2">Instant Results</h3>
				<p class="text-gray-600 dark:text-dark-400 text-sm">Get real-time calculations as you type - no waiting</p>
			</div>
		</div>
	</div>
</div>
