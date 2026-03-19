<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let homePrice = 400000;
	let downPayment = 80000;
	let rate = 6.5;
	let term = 30;

	$: loanAmount = homePrice - downPayment;
	$: monthlyRate = rate / 100 / 12;
	$: numPayments = term * 12;
	$: monthlyPayment = monthlyRate > 0
		? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1)
		: loanAmount / numPayments;
	$: totalCost = monthlyPayment * numPayments + downPayment;
	$: totalInterest = totalCost - homePrice;

	function formatCurrency(value: number): string {
		return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
	}
</script>

<svelte:head>
	<title>{t('mortgage.title')} - SDK.bz</title>
	<meta name="description" content={t('mortgage.desc')} />
	<meta property="og:title" content="{t('mortgage.title')} - SDK.bz" />
	<meta property="og:description" content={t('mortgage.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('mortgage.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('mortgage.desc')}</p>
	</div>

	<div class="grid md:grid-cols-2 gap-8">
		<div class="space-y-6 bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700">
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('mortgage.price')}</label>
				<input type="number" bind:value={homePrice} min="0" step="10000"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-purple-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('mortgage.down')}</label>
				<input type="number" bind:value={downPayment} min="0" step="5000"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-purple-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('mortgage.rate')}</label>
				<input type="number" bind:value={rate} min="0" max="20" step="0.125"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-purple-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('mortgage.term')}</label>
				<select bind:value={term}
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-purple-400">
					<option value={15}>15 years</option>
					<option value={20}>20 years</option>
					<option value={30}>30 years</option>
				</select>
			</div>
		</div>

		<div class="space-y-4">
			<div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-800">
				<p class="text-sm text-purple-600 dark:text-purple-400 mb-1">{t('mortgage.monthly')}</p>
				<p class="text-3xl font-bold text-purple-700 dark:text-purple-300">{formatCurrency(monthlyPayment)}</p>
			</div>
			<div class="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700 space-y-3">
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('mortgage.loanAmount')}</span>
					<span class="font-semibold text-gray-900 dark:text-dark-100">{formatCurrency(loanAmount)}</span>
				</div>
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('mortgage.total')}</span>
					<span class="font-semibold text-gray-900 dark:text-dark-100">{formatCurrency(totalCost)}</span>
				</div>
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('loan.interest')}</span>
					<span class="font-semibold text-red-600 dark:text-red-400">{formatCurrency(totalInterest)}</span>
				</div>
			</div>
		</div>
	</div>
</div>
