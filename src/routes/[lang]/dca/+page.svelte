<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let investment = 100;
	let frequency: 'daily' | 'weekly' | 'monthly' = 'weekly';
	let duration = 12;
	let startPrice = 30000;
	let endPrice = 45000;

	const periodsPerMonth = { daily: 30, weekly: 4, monthly: 1 };

	$: totalPeriods = duration * periodsPerMonth[frequency];
	$: totalInvested = investment * totalPeriods;
	// Simplified DCA simulation assuming linear price change
	$: avgPrice = (startPrice + endPrice) / 2;
	$: totalCoins = totalInvested / avgPrice;
	$: totalValue = totalCoins * endPrice;
	$: profit = totalValue - totalInvested;
	$: roi = totalInvested > 0 ? (profit / totalInvested) * 100 : 0;

	function formatCurrency(value: number): string {
		return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(value);
	}
</script>

<svelte:head>
	<title>{t('dca.title')} - SDK.bz</title>
	<meta name="description" content={t('dca.desc')} />
	<meta property="og:title" content="{t('dca.title')} - SDK.bz" />
	<meta property="og:description" content={t('dca.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('dca.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('dca.desc')}</p>
	</div>

	<div class="grid md:grid-cols-2 gap-8">
		<div class="space-y-6 bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700">
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('dca.investment')}</label>
				<input type="number" bind:value={investment} min="1" step="10"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-indigo-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('dca.frequency')}</label>
				<select bind:value={frequency}
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-indigo-400">
					<option value="daily">{t('dca.freq.daily')}</option>
					<option value="weekly">{t('dca.freq.weekly')}</option>
					<option value="monthly">{t('dca.freq.monthly')}</option>
				</select>
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('dca.duration')}</label>
				<input type="number" bind:value={duration} min="1" max="120"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-indigo-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('dca.startPrice')}</label>
				<input type="number" bind:value={startPrice} min="0" step="100"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-indigo-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('dca.endPrice')}</label>
				<input type="number" bind:value={endPrice} min="0" step="100"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-indigo-400" />
			</div>
		</div>

		<div class="space-y-4">
			<div class="p-6 rounded-2xl border {profit >= 0 ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800' : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'}">
				<p class="text-sm {profit >= 0 ? 'text-indigo-600 dark:text-indigo-400' : 'text-red-600 dark:text-red-400'} mb-1">{t('dca.totalValue')}</p>
				<p class="text-3xl font-bold {profit >= 0 ? 'text-indigo-700 dark:text-indigo-300' : 'text-red-700 dark:text-red-300'}">{formatCurrency(totalValue)}</p>
				<p class="text-lg {profit >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}">{profit >= 0 ? '+' : ''}{roi.toFixed(2)}%</p>
			</div>
			<div class="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700 space-y-3">
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('dca.totalInvested')}</span>
					<span class="font-semibold text-gray-900 dark:text-dark-100">{formatCurrency(totalInvested)}</span>
				</div>
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('dca.avgPrice')}</span>
					<span class="font-semibold text-gray-900 dark:text-dark-100">{formatCurrency(avgPrice)}</span>
				</div>
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('dca.totalCoins')}</span>
					<span class="font-semibold text-gray-900 dark:text-dark-100">{totalCoins.toFixed(6)}</span>
				</div>
			</div>
		</div>
	</div>
</div>
