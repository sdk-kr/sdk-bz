<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let buyPrice = 30000;
	let sellPrice = 45000;
	let amount = 0.5;

	$: investment = buyPrice * amount;
	$: currentValue = sellPrice * amount;
	$: profit = currentValue - investment;
	$: percentChange = investment > 0 ? ((currentValue - investment) / investment) * 100 : 0;

	function formatCurrency(value: number): string {
		return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(value);
	}
</script>

<svelte:head>
	<title>{t('profit.title')} - SDK.bz</title>
	<meta name="description" content={t('profit.desc')} />
	<meta property="og:title" content="{t('profit.title')} - SDK.bz" />
	<meta property="og:description" content={t('profit.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('profit.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('profit.desc')}</p>
	</div>

	<div class="grid md:grid-cols-2 gap-8">
		<div class="space-y-6 bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700">
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('profit.buy')}</label>
				<input type="number" bind:value={buyPrice} min="0" step="100"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-orange-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('profit.sell')}</label>
				<input type="number" bind:value={sellPrice} min="0" step="100"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-orange-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('profit.amount')}</label>
				<input type="number" bind:value={amount} min="0" step="0.001"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-orange-400" />
			</div>
		</div>

		<div class="space-y-4">
			<div class="p-6 rounded-2xl border {profit >= 0 ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'}">
				<p class="text-sm {profit >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'} mb-1">{t('profit.profit')}</p>
				<p class="text-3xl font-bold {profit >= 0 ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}">{formatCurrency(profit)}</p>
				<p class="text-lg {profit >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}">{profit >= 0 ? '+' : ''}{percentChange.toFixed(2)}%</p>
			</div>
			<div class="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700">
				<div class="flex justify-between mb-4">
					<span class="text-gray-600 dark:text-dark-400">{t('profit.investment')}</span>
					<span class="font-semibold text-gray-900 dark:text-dark-100">{formatCurrency(investment)}</span>
				</div>
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('profit.value')}</span>
					<span class="font-semibold text-gray-900 dark:text-dark-100">{formatCurrency(currentValue)}</span>
				</div>
			</div>
		</div>
	</div>
</div>
