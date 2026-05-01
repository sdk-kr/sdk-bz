<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	const toolContent = {
		about: {
			en: 'The currency converter estimates the value of one currency in another using reference exchange rates. Real banks and exchange services typically apply spreads, commissions, and transfer fees that change the final amount you receive. This tool is provided for educational and reference purposes only and is not financial advice or a real-time trading rate.',
			ko: '환율 변환기는 참고용 환율을 사용해 한 통화의 다른 통화 환산 가치를 추정합니다. 실제 은행이나 환전 서비스는 스프레드, 수수료, 송금 비용을 적용하므로 실제 수령액은 달라집니다. 본 도구는 교육 및 참고 목적으로만 제공되며 재무 자문이나 실시간 거래 환율이 아닙니다.',
			ja: '通貨換算ツールは参考レートを使って、ある通貨の別通貨での価値を推定します。実際の銀行や両替サービスはスプレッド、手数料、送金費用を適用するため受取額は変わります。本ツールは教育・参考目的のみで提供され、金融アドバイスやリアルタイム取引レートではありません。',
			zh: '货币换算器使用参考汇率估算一种货币兑换为另一种货币的价值。实际银行和兑换服务通常会收取点差、佣金和手续费，会改变您最终收到的金额。本工具仅供教育和参考用途，不是财务建议或实时交易汇率。'
		},
		howTo: {
			en: [
				'Enter the amount in the source currency.',
				'Select the source (From) currency.',
				'Select the target (To) currency.',
				'Use the swap button to reverse the conversion direction.',
				'Compare the calculated rate with your bank or exchange service before transacting.'
			],
			ko: [
				'원본 통화 금액을 입력합니다.',
				'원본(From) 통화를 선택합니다.',
				'대상(To) 통화를 선택합니다.',
				'스왑 버튼으로 변환 방향을 바꿀 수 있습니다.',
				'거래 전에 은행이나 환전 서비스의 실제 적용 환율과 비교하세요.'
			],
			ja: [
				'元通貨の金額を入力します。',
				'元通貨(From)を選択します。',
				'対象通貨(To)を選択します。',
				'スワップボタンで方向を反転できます。',
				'取引前に銀行や両替サービスの実レートと比較してください。'
			],
			zh: [
				'输入源货币的金额。',
				'选择源货币 (From)。',
				'选择目标货币 (To)。',
				'使用切换按钮可以反转转换方向。',
				'交易前请与您的银行或兑换服务的实际汇率进行比较。'
			]
		},
		useCases: {
			en: [
				'Estimate the cost of an overseas purchase before checkout.',
				'Compare prices listed in different currencies during travel planning.',
				'Get a quick reference for invoice or freelance billing across borders.',
				'Educational examples for understanding foreign exchange concepts.',
				'Sanity-check the rate offered by your bank or remittance app.'
			],
			ko: [
				'결제 전 해외 구매 비용 추정',
				'여행 계획 시 서로 다른 통화로 표시된 가격 비교',
				'국가 간 인보이스나 프리랜서 청구의 빠른 참고',
				'외환 개념 학습을 위한 교육 예시',
				'은행이나 송금 앱이 제시한 환율 검토'
			],
			ja: [
				'決済前に海外購入の費用を推定',
				'旅行計画時に異なる通貨で表示された価格を比較',
				'国際的な請求書やフリーランス請求のクイックリファレンス',
				'外国為替の概念を理解するための教育例',
				'銀行や送金アプリが提示するレートの妥当性チェック'
			],
			zh: [
				'结账前估算海外购物的费用',
				'旅行规划时比较以不同货币标示的价格',
				'跨境发票或自由职业账单的快速参考',
				'用于理解外汇概念的教学示例',
				'对银行或汇款应用提供的汇率进行合理性检查'
			]
		},
		faq: {
			en: [
				{ q: 'Is this financial advice?', a: 'No. This converter is for educational and reference purposes only and is not financial, investment, or currency-trading advice.' },
				{ q: 'Are these real-time exchange rates?', a: 'No. The rates here are static reference values for illustration. Real market rates change every second and your bank will quote a different rate.' },
				{ q: 'Why is the amount I receive at my bank different?', a: 'Banks and remittance services add a spread, commission, or fixed fees on top of the mid-market rate, so the final amount you receive is typically lower than the calculated value.' },
				{ q: 'Can I use this for tax reporting?', a: 'No. For tax or accounting use, you must use the official rate published by your tax authority for the relevant date.' }
			],
			ko: [
				{ q: '이것은 재무 자문인가요?', a: '아닙니다. 본 변환기는 교육 및 참고 목적으로만 제공되며 재무, 투자, 외환 거래 자문이 아닙니다.' },
				{ q: '실시간 환율인가요?', a: '아니요. 표시된 환율은 예시용 정적 참고값입니다. 실제 시장 환율은 초 단위로 변동하며 은행이 제시하는 환율은 다릅니다.' },
				{ q: '은행에서 받는 금액이 왜 다른가요?', a: '은행과 송금 서비스는 중간 시장 환율에 스프레드, 수수료, 고정 비용을 더하므로 실제 수령액은 보통 계산값보다 낮습니다.' },
				{ q: '세무 신고에 사용할 수 있나요?', a: '아닙니다. 세무 또는 회계 용도로는 해당 날짜에 세무 당국이 공시한 공식 환율을 사용해야 합니다.' }
			],
			ja: [
				{ q: 'これは金融アドバイスですか?', a: 'いいえ。本ツールは教育・参考目的のみで、金融・投資・通貨取引のアドバイスではありません。' },
				{ q: 'リアルタイムレートですか?', a: 'いいえ。表示されているレートは例示用の静的な参考値です。実際の市場レートは秒単位で変動し、銀行が提示するレートも異なります。' },
				{ q: '銀行で受け取る金額が違うのはなぜですか?', a: '銀行や送金サービスはミッドマーケットレートにスプレッド、手数料、固定費用を上乗せするため、実受取額は計算値より低くなるのが通常です。' },
				{ q: '税務申告に使えますか?', a: 'いいえ。税務・会計用途では、該当日に税務当局が公表する公式レートを使用する必要があります。' }
			],
			zh: [
				{ q: '这是财务建议吗？', a: '不是。本换算器仅供教育和参考用途，不构成财务、投资或外汇交易建议。' },
				{ q: '这是实时汇率吗？', a: '不是。这里的汇率是用于说明的静态参考值。实际市场汇率每秒都在变化，银行报价也会不同。' },
				{ q: '为什么我在银行收到的金额不一样？', a: '银行和汇款服务会在中间市场汇率上加点差、佣金或固定手续费，所以实际收到的金额通常低于计算值。' },
				{ q: '可以用于报税吗？', a: '不可以。税务或会计用途必须使用税务机关在相关日期公布的官方汇率。' }
			]
		},
		related: [
			{ href: '/profit', label: { en: 'Profit Calculator', ko: '손익 계산기', ja: '損益計算機', zh: '盈亏计算器' } },
			{ href: '/roi', label: { en: 'ROI Calculator', ko: 'ROI 계산기', ja: 'ROI計算機', zh: 'ROI计算器' } },
			{ href: '/dca', label: { en: 'DCA Calculator', ko: 'DCA 계산기', ja: 'DCA計算機', zh: 'DCA计算器' } }
		],
		externalRefs: [
			{ href: 'https://www.iso.org/iso-4217-currency-codes.html', label: 'ISO 4217 Currency Codes' },
			{ href: 'https://www.imf.org/en/About/Factsheets/Sheets/2023/special-drawing-rights-sdr', label: 'IMF: Exchange Rates' }
		]
	};

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

	<ToolContent
		{lang}
		toolName="Currency Converter"
		toolUrl="https://sdk.bz/{lang}/currency"
		lastUpdated="2026-04-30"
		category="Finance Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sdk.bz/${lang}` },
			{ name: 'Tools', url: `https://sdk.bz/${lang}` },
			{ name: 'Currency Converter', url: `https://sdk.bz/${lang}/currency` }
		]}
		content={toolContent}
	/>
</div>
