<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let principal = 10000;
	let rate = 7;
	let time = 10;
	let monthlyContribution = 500;
	let frequency: 'annual' | 'semi' | 'quarter' | 'monthly' = 'monthly';

	const frequencies = { annual: 1, semi: 2, quarter: 4, monthly: 12 };

	$: n = frequencies[frequency];
	$: r = rate / 100;
	$: futureValue = principal * Math.pow(1 + r/n, n * time) +
		monthlyContribution * ((Math.pow(1 + r/n, n * time) - 1) / (r/n)) * (1 + r/n);
	$: totalContributed = principal + (monthlyContribution * 12 * time);
	$: interestEarned = futureValue - totalContributed;

	function formatCurrency(value: number): string {
		return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
	}
</script>

<svelte:head>
	<title>{t('compound.title')} - SDK.bz</title>
	<meta name="description" content={t('compound.desc')} />
	<meta property="og:title" content="{t('compound.title')} - SDK.bz" />
	<meta property="og:description" content={t('compound.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('compound.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('compound.desc')}</p>
	</div>

	<div class="grid md:grid-cols-2 gap-8">
		<div class="space-y-6 bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700">
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('compound.principal')}</label>
				<input type="number" bind:value={principal} min="0" step="1000"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-blue-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('compound.monthly')}</label>
				<input type="number" bind:value={monthlyContribution} min="0" step="100"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-blue-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('compound.rate')}</label>
				<input type="number" bind:value={rate} min="0" max="30" step="0.5"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-blue-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('compound.time')}</label>
				<input type="number" bind:value={time} min="1" max="50"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-blue-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('compound.frequency')}</label>
				<select bind:value={frequency}
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-blue-400">
					<option value="annual">{t('compound.freq.annual')}</option>
					<option value="semi">{t('compound.freq.semi')}</option>
					<option value="quarter">{t('compound.freq.quarter')}</option>
					<option value="monthly">{t('compound.freq.monthly')}</option>
				</select>
			</div>
		</div>

		<div class="space-y-4">
			<div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
				<p class="text-sm text-blue-600 dark:text-blue-400 mb-1">{t('compound.future')}</p>
				<p class="text-3xl font-bold text-blue-700 dark:text-blue-300">{formatCurrency(futureValue)}</p>
			</div>
			<div class="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700">
				<div class="flex justify-between mb-4">
					<span class="text-gray-600 dark:text-dark-400">{t('compound.contributed')}</span>
					<span class="font-semibold text-gray-900 dark:text-dark-100">{formatCurrency(totalContributed)}</span>
				</div>
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('compound.earned')}</span>
					<span class="font-semibold text-green-600 dark:text-green-400">{formatCurrency(interestEarned)}</span>
				</div>
			</div>
			<div class="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700">
				<div class="h-4 rounded-full overflow-hidden flex">
					<div class="bg-blue-500" style="width: {(totalContributed / futureValue) * 100}%"></div>
					<div class="bg-green-500" style="width: {(interestEarned / futureValue) * 100}%"></div>
				</div>
				<div class="flex justify-between mt-2 text-xs">
					<span class="text-blue-600 dark:text-blue-400">Contributions: {((totalContributed / futureValue) * 100).toFixed(1)}%</span>
					<span class="text-green-600 dark:text-green-400">Interest: {((interestEarned / futureValue) * 100).toFixed(1)}%</span>
				</div>
			</div>
		</div>
	</div>
</div>
