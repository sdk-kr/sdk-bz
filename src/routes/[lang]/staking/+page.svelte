<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let amount = 1000;
	let price = 50;
	let apy = 5;
	let period = 365;
	let compound = true;

	$: dailyRate = apy / 100 / 365;
	$: totalRewards = compound
		? amount * (Math.pow(1 + dailyRate, period) - 1)
		: amount * dailyRate * period;
	$: totalAfterPeriod = amount + totalRewards;
	$: dailyRewards = compound ? totalRewards / period : amount * dailyRate;
	$: monthlyRewards = dailyRewards * 30;
	$: yearlyRewards = amount * (apy / 100);
	$: valueUSD = totalAfterPeriod * price;

	function formatNumber(value: number, decimals: number = 4): string {
		return value.toLocaleString('en-US', { maximumFractionDigits: decimals });
	}
	function formatCurrency(value: number): string {
		return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
	}
</script>

<svelte:head>
	<title>{t('staking.title')} - SDK.bz</title>
	<meta name="description" content={t('staking.desc')} />
	<meta property="og:title" content="{t('staking.title')} - SDK.bz" />
	<meta property="og:description" content={t('staking.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('staking.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('staking.desc')}</p>
	</div>

	<div class="grid md:grid-cols-2 gap-8">
		<div class="space-y-6 bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700">
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('staking.amount')}</label>
				<input type="number" bind:value={amount} min="0" step="100"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-green-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('staking.price')}</label>
				<input type="number" bind:value={price} min="0" step="1"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-green-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('staking.apy')}</label>
				<input type="number" bind:value={apy} min="0" max="200" step="0.5"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-green-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('staking.period')}</label>
				<input type="number" bind:value={period} min="1" max="3650"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-green-400" />
			</div>
			<div class="flex items-center gap-3">
				<input type="checkbox" bind:checked={compound} id="compound"
					class="w-5 h-5 rounded border-gray-300 text-green-500 focus:ring-green-400" />
				<label for="compound" class="text-sm font-medium text-gray-700 dark:text-dark-300">{t('staking.compound')}</label>
			</div>
		</div>

		<div class="space-y-4">
			<div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl border border-green-200 dark:border-green-800">
				<p class="text-sm text-green-600 dark:text-green-400 mb-1">{t('staking.total')}</p>
				<p class="text-3xl font-bold text-green-700 dark:text-green-300">{formatNumber(totalAfterPeriod, 4)} tokens</p>
				<p class="text-lg text-green-600 dark:text-green-400">{formatCurrency(valueUSD)}</p>
			</div>
			<div class="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700 space-y-3">
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('staking.daily')}</span>
					<span class="font-semibold text-gray-900 dark:text-dark-100">{formatNumber(dailyRewards, 6)} tokens</span>
				</div>
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('staking.monthly')}</span>
					<span class="font-semibold text-gray-900 dark:text-dark-100">{formatNumber(monthlyRewards, 4)} tokens</span>
				</div>
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('staking.yearly')}</span>
					<span class="font-semibold text-gray-900 dark:text-dark-100">{formatNumber(yearlyRewards, 4)} tokens</span>
				</div>
			</div>
		</div>
	</div>
</div>
