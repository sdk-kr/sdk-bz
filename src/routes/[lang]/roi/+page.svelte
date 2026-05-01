<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	const toolContent = {
		about: {
			en: 'The ROI (Return on Investment) calculator estimates the simple and annualized rate of return between an initial and final investment value over a chosen number of years. It is useful for comparing investments with different time horizons on a like-for-like basis. ROI does not capture risk, volatility, fees, or taxes. This tool is for educational purposes only and is not financial advice.',
			ko: 'ROI(투자수익률) 계산기는 초기 투자금과 최종 가치, 기간(연수)을 사용해 단순 수익률과 연환산 수익률을 추정합니다. 기간이 다른 투자도 동일한 기준에서 비교할 수 있어 유용합니다. ROI는 위험, 변동성, 수수료, 세금을 반영하지 않습니다. 본 도구는 교육 목적으로만 제공되며 재무 자문이 아닙니다.',
			ja: 'ROI(投資収益率)計算機は、初期投資額・最終価値・年数からシンプルROIと年換算ROIを推定します。期間の異なる投資を同じ基準で比較するのに便利です。ROIはリスク、ボラティリティ、手数料、税金を反映しません。本ツールは教育目的のみで、金融アドバイスではありません。',
			zh: 'ROI(投资回报率)计算器根据初始投资、最终价值和年限估算简单ROI与年化ROI。便于在同一标准下比较不同期限的投资。ROI不反映风险、波动率、费用和税收。本工具仅供教育用途，不是财务建议。'
		},
		howTo: {
			en: [
				'Enter the initial investment amount.',
				'Enter the final value of the investment.',
				'Enter the holding period in years (use a decimal for partial years).',
				'Review the simple ROI percentage.',
				'Compare the annualized ROI to other investments with different durations.'
			],
			ko: [
				'초기 투자금을 입력합니다.',
				'최종 가치를 입력합니다.',
				'보유 기간(년)을 입력합니다(소수점 사용 가능).',
				'단순 ROI 백분율을 확인합니다.',
				'기간이 다른 투자와 비교할 때는 연환산 ROI를 사용합니다.'
			],
			ja: [
				'初期投資額を入力します。',
				'最終価値を入力します。',
				'保有期間(年)を入力します(小数可)。',
				'シンプルROIのパーセントを確認します。',
				'期間の異なる投資との比較には年換算ROIを使用します。'
			],
			zh: [
				'输入初始投资金额。',
				'输入最终价值。',
				'输入持有年限 (可使用小数)。',
				'查看简单ROI百分比。',
				'与不同期限的投资比较时请使用年化ROI。'
			]
		},
		useCases: {
			en: [
				'Compare a 3-year stock investment with a 10-year real-estate holding on an annualized basis.',
				'Evaluate the performance of a closed trade or a sold asset.',
				'Calculate the implied annual growth rate of a savings account or fund.',
				'Educational example for understanding the difference between simple and annualized return.',
				'Sanity-check returns reported by a fund or platform.'
			],
			ko: [
				'3년 주식 투자와 10년 부동산 투자를 연환산 기준으로 비교',
				'청산된 거래나 매도된 자산의 성과 평가',
				'예금이나 펀드의 내재 연 성장률 계산',
				'단순 수익률과 연환산 수익률의 차이 학습',
				'펀드나 플랫폼이 보고한 수익률 검토'
			],
			ja: [
				'3年の株式投資と10年の不動産保有を年換算で比較',
				'クローズドな取引や売却済み資産のパフォーマンス評価',
				'貯蓄口座や投信のインプライド年成長率の計算',
				'シンプルROIと年換算ROIの違いの学習',
				'ファンドやプラットフォーム公表値の妥当性チェック'
			],
			zh: [
				'按年化基准比较3年股票投资与10年房地产持有',
				'评估已平仓交易或已售资产的表现',
				'计算储蓄账户或基金的隐含年增长率',
				'用于学习简单收益与年化收益的差异',
				'核对基金或平台所报告收益的合理性'
			]
		},
		faq: {
			en: [
				{ q: 'Is this financial advice?', a: 'No. This calculator is for educational purposes only and does not constitute financial or investment advice.' },
				{ q: 'What is the difference between simple ROI and annualized ROI?', a: 'Simple ROI is the total percentage gain over the entire period. Annualized ROI converts that gain into an equivalent yearly rate, which is useful for comparing investments with different durations.' },
				{ q: 'Are fees, taxes, and inflation included?', a: 'No. ROI here is calculated before fees, taxes, and inflation. Real net returns will be lower.' },
				{ q: 'Does a higher ROI mean a better investment?', a: 'Not necessarily. ROI does not capture risk, volatility, or liquidity. Two investments with the same ROI can have very different risk profiles.' }
			],
			ko: [
				{ q: '이것은 재무 자문인가요?', a: '아닙니다. 본 계산기는 교육 목적으로만 제공되며 재무 또는 투자 자문이 아닙니다.' },
				{ q: '단순 ROI와 연환산 ROI의 차이는?', a: '단순 ROI는 전체 기간의 총 수익률입니다. 연환산 ROI는 이를 연 단위로 환산해 기간이 다른 투자 비교에 유용합니다.' },
				{ q: '수수료, 세금, 인플레이션이 포함되나요?', a: '아니요. ROI는 수수료, 세금, 인플레이션 차감 전 기준입니다. 실제 순수익률은 더 낮습니다.' },
				{ q: 'ROI가 높으면 더 좋은 투자인가요?', a: '꼭 그렇지 않습니다. ROI는 위험, 변동성, 유동성을 반영하지 않으므로 같은 ROI라도 위험 프로파일은 매우 다를 수 있습니다.' }
			],
			ja: [
				{ q: 'これは金融アドバイスですか?', a: 'いいえ。本計算機は教育目的のみで、金融・投資アドバイスではありません。' },
				{ q: 'シンプルROIと年換算ROIの違いは?', a: 'シンプルROIは期間全体の総リターンです。年換算ROIはこれを年率換算したもので、異なる期間の投資比較に便利です。' },
				{ q: '手数料、税金、インフレは含まれますか?', a: 'いいえ。ROIは手数料・税金・インフレ控除前の値で、実際の純リターンはより低くなります。' },
				{ q: 'ROIが高ければ良い投資ですか?', a: '必ずしもそうではありません。ROIはリスク、ボラティリティ、流動性を反映しないため、同じROIでもリスクプロファイルは大きく異なります。' }
			],
			zh: [
				{ q: '这是财务建议吗？', a: '不是。本计算器仅供教育用途，不构成财务或投资建议。' },
				{ q: '简单ROI与年化ROI有什么区别？', a: '简单ROI是整个期间的总收益百分比。年化ROI将其换算为等价的年化利率，便于比较不同期限的投资。' },
				{ q: '是否包含费用、税收和通胀？', a: '没有。这里的ROI在扣除费用、税收和通胀之前。真实净收益会更低。' },
				{ q: 'ROI越高就是越好的投资吗？', a: '不一定。ROI未反映风险、波动率和流动性。两笔ROI相同的投资，风险特征可能截然不同。' }
			]
		},
		related: [
			{ href: '/profit', label: { en: 'Profit Calculator', ko: '손익 계산기', ja: '損益計算機', zh: '盈亏计算器' } },
			{ href: '/compound', label: { en: 'Compound Interest', ko: '복리 계산기', ja: '複利計算機', zh: '复利计算器' } },
			{ href: '/dca', label: { en: 'DCA Calculator', ko: 'DCA 계산기', ja: 'DCA計算機', zh: 'DCA计算器' } }
		]
	};

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

	<ToolContent {lang} content={toolContent} />
</div>
