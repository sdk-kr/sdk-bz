<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	const toolContent = {
		about: {
			en: 'The profit and loss calculator estimates the gross gain or loss of a trade based on buy price, sell price, and quantity. It is useful for reviewing past trades, planning targets, or comparing scenarios. The calculation does not account for trading fees, slippage, or taxes, which can change the real outcome. This tool is provided for educational purposes only and is not financial advice.',
			ko: '손익 계산기는 매수가, 매도가, 수량을 기준으로 거래의 총 손익을 추정합니다. 과거 거래 검토, 목표가 계획, 시나리오 비교에 유용합니다. 거래 수수료, 슬리피지, 세금은 반영되지 않으며 실제 결과는 달라질 수 있습니다. 본 도구는 교육 목적으로만 제공되며 재무 자문이 아닙니다.',
			ja: '損益計算機は、買値・売値・数量に基づいて取引の総損益を推定します。過去取引の振り返り、目標設定、シナリオ比較に便利です。取引手数料、スリッページ、税金は反映されず、実際の結果は異なる可能性があります。本ツールは教育目的のみで、金融アドバイスではありません。',
			zh: '盈亏计算器根据买入价、卖出价和数量估算一笔交易的毛盈亏。可用于复盘历史交易、规划目标价或比较不同场景。计算未包含交易费用、滑点和税收，实际结果可能不同。本工具仅供教育用途，不是财务建议。'
		},
		howTo: {
			en: [
				'Enter the buy price (the price at which you bought the asset).',
				'Enter the sell price (the price at which you intend to or did sell).',
				'Enter the amount (number of units, coins, or shares).',
				'Review the resulting profit or loss in absolute and percentage terms.',
				'Compare with fees and taxes separately to estimate net result.'
			],
			ko: [
				'매수가(자산을 구입한 가격)를 입력합니다.',
				'매도가(매도 예정가 또는 실제 매도가)를 입력합니다.',
				'수량(단위, 코인, 주식 수)을 입력합니다.',
				'금액과 비율로 표시된 손익을 확인합니다.',
				'수수료와 세금을 별도로 차감해 순손익을 추정합니다.'
			],
			ja: [
				'買値(資産を購入した価格)を入力します。',
				'売値(予定または実際の売却価格)を入力します。',
				'数量(単位、コイン、株数)を入力します。',
				'金額とパーセントで表示された損益を確認します。',
				'手数料と税金を別途差し引いて純損益を推定します。'
			],
			zh: [
				'输入买入价 (您买入资产的价格)。',
				'输入卖出价 (计划或实际卖出的价格)。',
				'输入数量 (单位数、币数或股数)。',
				'查看以金额和百分比表示的盈亏结果。',
				'另行扣除费用和税款以估算净结果。'
			]
		},
		useCases: {
			en: [
				'Quickly check the gain or loss on a recent crypto or stock trade.',
				'Plan a target sell price needed to reach a desired profit.',
				'Compare alternate exit prices side by side before placing an order.',
				'Educational example for understanding percentage returns versus absolute gains.',
				'Reconcile trade history when reviewing portfolio performance.'
			],
			ko: [
				'최근 암호화폐나 주식 거래의 손익 빠른 확인',
				'원하는 수익에 도달하기 위한 목표 매도가 계산',
				'주문 전 다양한 청산 가격을 나란히 비교',
				'백분율 수익률과 절대 수익의 차이 학습',
				'포트폴리오 성과 검토 시 거래 내역 대조'
			],
			ja: [
				'最近の暗号資産・株式取引の損益のクイックチェック',
				'目標利益達成に必要な売却価格の計画',
				'発注前に複数の決済価格を並べて比較',
				'パーセントリターンと絶対利益の違いの学習',
				'ポートフォリオ成績の確認時の取引履歴の照合'
			],
			zh: [
				'快速查看近期加密货币或股票交易的盈亏',
				'规划达到目标利润所需的卖出价',
				'下单前并排比较不同的离场价格',
				'用于理解百分比收益与绝对收益的差异',
				'复盘投资组合表现时核对交易记录'
			]
		},
		faq: {
			en: [
				{ q: 'Is this financial advice?', a: 'No. This calculator is for educational purposes only and is not financial, investment, or trading advice.' },
				{ q: 'Are fees and taxes included?', a: 'No. Trading fees, spreads, slippage, and capital gains taxes are not included. Real net profit will be lower.' },
				{ q: 'How is percentage change calculated?', a: 'Percentage change equals (sell price minus buy price) divided by buy price, multiplied by 100.' },
				{ q: 'Can this be used for tax filing?', a: 'No. Tax filings require official cost basis, lot accounting, and applicable tax rates. Use a qualified tax professional or dedicated tax software.' }
			],
			ko: [
				{ q: '이것은 재무 자문인가요?', a: '아닙니다. 본 계산기는 교육 목적으로만 제공되며 재무, 투자, 거래 자문이 아닙니다.' },
				{ q: '수수료와 세금이 포함되나요?', a: '아니요. 거래 수수료, 스프레드, 슬리피지, 양도소득세는 포함되지 않으며 실제 순이익은 더 낮습니다.' },
				{ q: '백분율 변동은 어떻게 계산되나요?', a: '(매도가 - 매수가) / 매수가 × 100 으로 계산됩니다.' },
				{ q: '세금 신고에 사용할 수 있나요?', a: '아닙니다. 세금 신고에는 공식 취득가, 종목별 회계, 적용 세율이 필요합니다. 세무 전문가나 전용 소프트웨어를 이용하세요.' }
			],
			ja: [
				{ q: 'これは金融アドバイスですか?', a: 'いいえ。本計算機は教育目的のみで、金融・投資・取引アドバイスではありません。' },
				{ q: '手数料や税金は含まれますか?', a: 'いいえ。取引手数料、スプレッド、スリッページ、譲渡益税は含まれず、実際の純利益はより低くなります。' },
				{ q: 'パーセント変動の計算方法は?', a: '(売値 - 買値) ÷ 買値 × 100 で算出されます。' },
				{ q: '税務申告に使えますか?', a: 'いいえ。税務申告には公式取得原価、ロット会計、適用税率が必要です。税理士や専用ソフトをご利用ください。' }
			],
			zh: [
				{ q: '这是财务建议吗？', a: '不是。本计算器仅供教育用途，不构成财务、投资或交易建议。' },
				{ q: '是否包含费用和税收？', a: '没有。未包含交易费用、点差、滑点和资本利得税，实际净利润会更低。' },
				{ q: '百分比变化如何计算？', a: '百分比变化 = (卖出价 - 买入价) / 买入价 × 100。' },
				{ q: '可以用于报税吗？', a: '不可以。报税需要正式的成本基础、批次核算和适用税率。请咨询税务专业人士或使用专用税务软件。' }
			]
		},
		related: [
			{ href: '/roi', label: { en: 'ROI Calculator', ko: 'ROI 계산기', ja: 'ROI計算機', zh: 'ROI计算器' } },
			{ href: '/dca', label: { en: 'DCA Calculator', ko: 'DCA 계산기', ja: 'DCA計算機', zh: 'DCA计算器' } },
			{ href: '/currency', label: { en: 'Currency Converter', ko: '환율 변환기', ja: '通貨換算', zh: '货币换算' } }
		]
	};

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

	<ToolContent {lang} content={toolContent} />
</div>
