<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	const toolContent = {
		about: {
			en: 'Dollar-cost averaging (DCA) is a strategy of investing a fixed amount at regular intervals regardless of price, which can reduce the impact of short-term volatility on the average purchase price. This calculator estimates how a DCA plan might have performed under simplified linear-price assumptions. Real markets are non-linear and results are not guaranteed; this tool is for educational purposes only and is not financial advice.',
			ko: '정기 적립 투자(DCA)는 가격과 관계없이 일정 금액을 정기적으로 투자하는 전략으로, 평균 매입 단가에 단기 변동성이 미치는 영향을 줄일 수 있습니다. 본 계산기는 선형 가격 변화를 가정한 단순화 모델로 DCA 계획의 가상 성과를 추정합니다. 실제 시장은 비선형이며 결과는 보장되지 않습니다. 본 도구는 교육 목적으로만 제공되며 재무 자문이 아닙니다.',
			ja: 'ドルコスト平均法(DCA)は価格に関係なく一定額を定期的に投資する戦略で、平均購入価格に対する短期ボラティリティの影響を抑えられる可能性があります。本計算機は線形価格変化を仮定した簡易モデルでDCAプランの仮想成績を推定します。実際の市場は非線形で結果は保証されません。本ツールは教育目的のみで金融アドバイスではありません。',
			zh: '定投(DCA)是一种无视价格、定期投入固定金额的策略，可降低短期波动对平均买入价的影响。本计算器在简化的线性价格假设下估算定投计划的模拟表现。实际市场非线性，结果无法保证。本工具仅供教育用途，不是财务建议。'
		},
		howTo: {
			en: [
				'Enter the amount you plan to invest each interval.',
				'Choose the contribution frequency: daily, weekly, or monthly.',
				'Set the duration in months for the DCA plan.',
				'Enter the assumed start price and end price for the asset.',
				'Review the simulated total value, average purchase price, and accumulated coins.'
			],
			ko: [
				'매 회 투자할 금액을 입력합니다.',
				'적립 주기(일/주/월)를 선택합니다.',
				'DCA 계획의 기간(개월)을 설정합니다.',
				'자산의 시작 가격과 종료 가격(가정값)을 입력합니다.',
				'시뮬레이션된 총 가치, 평균 매입 단가, 누적 수량을 확인합니다.'
			],
			ja: [
				'各回に投資する金額を入力します。',
				'積立頻度(毎日/毎週/毎月)を選択します。',
				'DCAプランの期間(月数)を設定します。',
				'資産の開始価格と終了価格(仮定値)を入力します。',
				'シミュレーションされた総額、平均購入価格、累積数量を確認します。'
			],
			zh: [
				'输入每次计划投入的金额。',
				'选择投入频率：每日、每周或每月。',
				'设定定投计划的持续月数。',
				'输入资产的假设起始价格和结束价格。',
				'查看模拟的总价值、平均买入价和累计数量。'
			]
		},
		useCases: {
			en: [
				'Compare DCA outcomes versus a single lump-sum buy in different price scenarios.',
				'Plan a recurring crypto or stock contribution from monthly salary.',
				'Educational illustration of how averaging affects volatile asset entry prices.',
				'Estimate accumulated holdings after a fixed savings horizon.',
				'Stress-test how different end prices change the projected return.'
			],
			ko: [
				'다양한 가격 시나리오에서 DCA와 일시 매수 결과 비교',
				'월 급여로 정기 매수 계획 수립(주식/암호화폐)',
				'평균화가 변동성 자산 진입가에 미치는 영향 학습',
				'고정 저축 기간 후 누적 보유량 추정',
				'다양한 종료가격으로 예상 수익률 스트레스 테스트'
			],
			ja: [
				'様々な価格シナリオでDCAと一括購入の結果を比較',
				'月給からの定期暗号資産・株式積立計画',
				'平均化がボラティリティ資産の取得価格に与える影響の学習',
				'一定期間後の累積保有量の推定',
				'異なる終了価格での予想リターンのストレステスト'
			],
			zh: [
				'在不同价格场景下比较定投与一次性买入的结果',
				'用月薪规划定期加密货币或股票投入',
				'用于说明均值化如何影响波动性资产的入场价',
				'估算固定储蓄期后的累计持仓',
				'对不同结束价格下的预期回报进行压力测试'
			]
		},
		faq: {
			en: [
				{ q: 'Is this financial advice?', a: 'No. This tool is for educational and illustrative purposes only and does not constitute investment advice. Cryptocurrency and equities can lose value.' },
				{ q: 'Why does the result differ from real DCA outcomes?', a: 'This calculator uses a simplified linear price path between start and end prices. Real prices fluctuate, so actual DCA results will differ.' },
				{ q: 'Does DCA always beat lump-sum investing?', a: 'No. Studies show lump-sum often outperforms in upward-trending markets, while DCA can reduce regret in volatile or declining markets. Neither is universally better.' },
				{ q: 'Are fees and taxes included?', a: 'No. This calculation excludes trading fees, spreads, and taxes, which can materially reduce real-world returns.' }
			],
			ko: [
				{ q: '이것은 재무 자문인가요?', a: '아닙니다. 본 도구는 교육 및 예시 목적으로만 제공되며 투자 자문이 아닙니다. 암호화폐와 주식은 가치를 잃을 수 있습니다.' },
				{ q: '결과가 실제 DCA와 다른 이유는?', a: '본 계산기는 시작가와 종료가 사이의 선형 가격 경로를 가정한 단순화 모델입니다. 실제 가격은 변동하므로 결과가 다를 수 있습니다.' },
				{ q: 'DCA가 항상 일시 매수보다 좋나요?', a: '아닙니다. 연구에 따르면 상승장에서는 일시 매수가 우세한 경우가 많고, 변동성이 높거나 하락하는 시장에서는 DCA가 후회를 줄일 수 있습니다. 항상 더 나은 전략은 없습니다.' },
				{ q: '수수료와 세금이 포함되나요?', a: '아니요. 거래 수수료, 스프레드, 세금은 제외되어 있어 실제 수익률은 더 낮을 수 있습니다.' }
			],
			ja: [
				{ q: 'これは金融アドバイスですか?', a: 'いいえ。本ツールは教育・例示目的のみで投資アドバイスではありません。暗号資産や株式は価値を失う可能性があります。' },
				{ q: '実際のDCA結果と異なる理由は?', a: '本計算機は開始価格と終了価格間の線形価格経路を仮定した簡易モデルです。実際の価格は変動するため結果は異なります。' },
				{ q: 'DCAは常に一括購入より優れていますか?', a: 'いいえ。研究では上昇相場では一括購入が優位、ボラティリティの高い市場や下落市場ではDCAが後悔を抑えられることがあります。常により良いとは言えません。' },
				{ q: '手数料や税金は含まれますか?', a: 'いいえ。取引手数料、スプレッド、税金は除外されており、実際のリターンはさらに低くなる可能性があります。' }
			],
			zh: [
				{ q: '这是财务建议吗？', a: '不是。本工具仅供教育和说明用途，不构成投资建议。加密货币和股票可能贬值。' },
				{ q: '为什么结果与真实定投不同？', a: '本计算器假设起止价格之间是线性价格路径的简化模型。实际价格会波动，所以真实定投结果会有差异。' },
				{ q: '定投总比一次性投入好吗？', a: '不是。研究显示，在上升趋势中一次性投入往往胜出，而在波动或下跌市场中定投可降低后悔。没有哪种策略普遍更优。' },
				{ q: '是否包含费用和税收？', a: '没有。本计算未包含交易费用、点差和税收，这些会显著降低真实收益。' }
			]
		},
		related: [
			{ href: '/compound', label: { en: 'Compound Interest', ko: '복리 계산기', ja: '複利計算機', zh: '复利计算器' } },
			{ href: '/profit', label: { en: 'Profit Calculator', ko: '손익 계산기', ja: '損益計算機', zh: '盈亏计算器' } },
			{ href: '/roi', label: { en: 'ROI Calculator', ko: 'ROI 계산기', ja: 'ROI計算機', zh: 'ROI计算器' } }
		]
	};

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

	<ToolContent {lang} content={toolContent} />
</div>
