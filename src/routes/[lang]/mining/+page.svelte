<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let hashrate = 100;
	let unit: 'TH/s' | 'GH/s' | 'MH/s' = 'TH/s';
	let power = 3000;
	let electricityCost = 0.10;
	let coinPrice = 45000;
	let blockReward = 6.25;
	let networkDifficulty = 75000000000000;

	// Simplified mining calculation
	const unitMultipliers = { 'TH/s': 1e12, 'GH/s': 1e9, 'MH/s': 1e6 };

	$: hashrateInHashes = hashrate * unitMultipliers[unit];
	$: blocksPerDay = (hashrateInHashes * 86400) / (networkDifficulty * Math.pow(2, 32));
	$: dailyCoins = blocksPerDay * blockReward;
	$: dailyRevenue = dailyCoins * coinPrice;
	$: dailyElectricityCost = (power / 1000) * 24 * electricityCost;
	$: dailyProfit = dailyRevenue - dailyElectricityCost;
	$: monthlyProfit = dailyProfit * 30;

	function formatCurrency(value: number): string {
		return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(value);
	}
</script>

<svelte:head>
	<title>{t('mining.title')} - SDK.bz</title>
	<meta name="description" content={t('mining.desc')} />
	<meta property="og:title" content="{t('mining.title')} - SDK.bz" />
	<meta property="og:description" content={t('mining.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('mining.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('mining.desc')}</p>
	</div>

	<div class="grid md:grid-cols-2 gap-8">
		<div class="space-y-6 bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700">
			<div class="flex gap-4">
				<div class="flex-1">
					<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('mining.hashrate')}</label>
					<input type="number" bind:value={hashrate} min="0" step="10"
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-gray-400" />
				</div>
				<div class="w-32">
					<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('mining.unit')}</label>
					<select bind:value={unit}
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-gray-400">
						<option value="TH/s">TH/s</option>
						<option value="GH/s">GH/s</option>
						<option value="MH/s">MH/s</option>
					</select>
				</div>
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('mining.power')}</label>
				<input type="number" bind:value={power} min="0" step="100"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-gray-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('mining.cost')}</label>
				<input type="number" bind:value={electricityCost} min="0" step="0.01"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-gray-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('mining.price')}</label>
				<input type="number" bind:value={coinPrice} min="0" step="1000"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-gray-400" />
			</div>
		</div>

		<div class="space-y-4">
			<div class="p-6 rounded-2xl border {dailyProfit >= 0 ? 'bg-gray-100 dark:bg-gray-800/50 border-gray-300 dark:border-gray-700' : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'}">
				<p class="text-sm {dailyProfit >= 0 ? 'text-gray-600 dark:text-gray-400' : 'text-red-600 dark:text-red-400'} mb-1">{t('mining.daily')}</p>
				<p class="text-3xl font-bold {dailyProfit >= 0 ? 'text-gray-900 dark:text-gray-100' : 'text-red-700 dark:text-red-300'}">{formatCurrency(dailyProfit)}</p>
			</div>
			<div class="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700 space-y-3">
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('mining.monthly')}</span>
					<span class="font-semibold {monthlyProfit >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}">{formatCurrency(monthlyProfit)}</span>
				</div>
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('mining.electricity')}</span>
					<span class="font-semibold text-red-600 dark:text-red-400">-{formatCurrency(dailyElectricityCost)}/day</span>
				</div>
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">Daily Revenue</span>
					<span class="font-semibold text-gray-900 dark:text-dark-100">{formatCurrency(dailyRevenue)}</span>
				</div>
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">Daily Coins</span>
					<span class="font-semibold text-gray-900 dark:text-dark-100">{dailyCoins.toFixed(8)} BTC</span>
				</div>
			</div>
		</div>
	</div>
</div>
