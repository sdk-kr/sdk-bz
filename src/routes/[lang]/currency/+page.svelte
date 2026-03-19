<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	let amount = 1000;
	let fromCurrency = 'USD';
	let toCurrency = 'EUR';

	// Static exchange rates (in real app, would fetch from API)
	const rates: Record<string, number> = {
		USD: 1, EUR: 0.92, GBP: 0.79, JPY: 149.5, KRW: 1320,
		CNY: 7.24, CAD: 1.36, AUD: 1.53, CHF: 0.88, INR: 83.1
	};

	const currencies = Object.keys(rates);

	$: rate = rates[toCurrency] / rates[fromCurrency];
	$: result = amount * rate;

	function swap() {
		const temp = fromCurrency;
		fromCurrency = toCurrency;
		toCurrency = temp;
	}

	function formatNumber(value: number): string {
		return new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 }).format(value);
	}
</script>

<svelte:head>
	<title>{t('currency.title')} - SDK.bz</title>
	<meta name="description" content={t('currency.desc')} />
	<meta property="og:title" content="{t('currency.title')} - SDK.bz" />
	<meta property="og:description" content={t('currency.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('currency.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('currency.desc')}</p>
	</div>

	<div class="max-w-xl mx-auto space-y-6">
		<div class="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700">
			<div class="space-y-4">
				<div>
					<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('currency.amount')}</label>
					<input type="number" bind:value={amount} min="0" step="100"
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-pink-400 text-lg" />
				</div>

				<div class="flex items-center gap-4">
					<div class="flex-1">
						<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('currency.from')}</label>
						<select bind:value={fromCurrency}
							class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-pink-400">
							{#each currencies as c}
								<option value={c}>{c}</option>
							{/each}
						</select>
					</div>

					<button on:click={swap}
						class="mt-6 p-3 bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 rounded-xl transition-colors">
						<svg class="w-5 h-5 text-gray-600 dark:text-dark-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
						</svg>
					</button>

					<div class="flex-1">
						<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('currency.to')}</label>
						<select bind:value={toCurrency}
							class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-pink-400">
							{#each currencies as c}
								<option value={c}>{c}</option>
							{/each}
						</select>
					</div>
				</div>
			</div>
		</div>

		<div class="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-2xl border border-pink-200 dark:border-pink-800 text-center">
			<p class="text-sm text-pink-600 dark:text-pink-400 mb-2">{t('currency.result')}</p>
			<p class="text-4xl font-bold text-pink-700 dark:text-pink-300">{formatNumber(result)} {toCurrency}</p>
			<p class="text-sm text-pink-600 dark:text-pink-400 mt-2">1 {fromCurrency} = {formatNumber(rate)} {toCurrency}</p>
		</div>

		<p class="text-xs text-gray-500 dark:text-dark-500 text-center">Exchange rates are for reference only and may not reflect real-time market rates.</p>
	</div>
</div>
