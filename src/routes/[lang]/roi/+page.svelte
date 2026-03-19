<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let initial = 10000;
	let final = 15000;
	let years = 3;

	$: gain = final - initial;
	$: roi = initial > 0 ? ((final - initial) / initial) * 100 : 0;
	$: annualizedRoi = years > 0 ? (Math.pow(final / initial, 1 / years) - 1) * 100 : roi;

	function formatCurrency(value: number): string {
		return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
	}
</script>

<svelte:head>
	<title>{t('roi.title')} - SDK.bz</title>
	<meta name="description" content={t('roi.desc')} />
	<meta property="og:title" content="{t('roi.title')} - SDK.bz" />
	<meta property="og:description" content={t('roi.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('roi.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('roi.desc')}</p>
	</div>

	<div class="grid md:grid-cols-2 gap-8">
		<div class="space-y-6 bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700">
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('roi.initial')}</label>
				<input type="number" bind:value={initial} min="0" step="1000"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-teal-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('roi.final')}</label>
				<input type="number" bind:value={final} min="0" step="1000"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-teal-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('roi.years')}</label>
				<input type="number" bind:value={years} min="0.5" max="50" step="0.5"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-teal-400" />
			</div>
		</div>

		<div class="space-y-4">
			<div class="p-6 rounded-2xl border {roi >= 0 ? 'bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800' : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'}">
				<p class="text-sm {roi >= 0 ? 'text-teal-600 dark:text-teal-400' : 'text-red-600 dark:text-red-400'} mb-1">{t('roi.roi')}</p>
				<p class="text-3xl font-bold {roi >= 0 ? 'text-teal-700 dark:text-teal-300' : 'text-red-700 dark:text-red-300'}">{roi >= 0 ? '+' : ''}{roi.toFixed(2)}%</p>
			</div>
			<div class="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700 space-y-3">
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('roi.annualized')}</span>
					<span class="font-semibold {annualizedRoi >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}">{annualizedRoi >= 0 ? '+' : ''}{annualizedRoi.toFixed(2)}%</span>
				</div>
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('roi.gain')}</span>
					<span class="font-semibold {gain >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}">{formatCurrency(gain)}</span>
				</div>
			</div>
		</div>
	</div>
</div>
