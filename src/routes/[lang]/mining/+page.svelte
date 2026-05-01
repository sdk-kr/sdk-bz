<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	const toolContent = {
		about: {
			en: 'The Bitcoin mining calculator estimates daily and monthly mining revenue, electricity cost, and net profit based on your hashrate, power draw, electricity price, coin price, and current network difficulty. Mining economics change constantly with difficulty adjustments and price swings, so any projection is only a snapshot. This tool is provided for educational purposes only and is not financial advice or a guarantee of mining profitability.',
			ko: '비트코인 채굴 계산기는 해시레이트, 소비 전력, 전기 요금, 코인 가격, 네트워크 난이도를 기준으로 일일/월간 채굴 수익, 전기 비용, 순이익을 추정합니다. 채굴 경제성은 난이도 조정과 가격 변동에 따라 끊임없이 바뀌므로 모든 예측은 한 시점의 스냅샷에 불과합니다. 본 도구는 교육 목적으로만 제공되며 재무 자문이나 수익 보장이 아닙니다.',
			ja: 'ビットコインマイニング計算機は、ハッシュレート、消費電力、電気料金、コイン価格、現在のネットワーク難易度に基づき、日次・月次のマイニング収益、電気代、純利益を推定します。難易度調整と価格変動でマイニング経済性は常に変化するため、予測は一時点のスナップショットに過ぎません。本ツールは教育目的のみで、金融アドバイスや収益保証ではありません。',
			zh: '比特币挖矿计算器根据您的算力、功耗、电价、币价和当前网络难度估算日/月挖矿收入、电费和净利润。挖矿经济性随难度调整和价格波动持续变化，任何预测都只是某个时点的快照。本工具仅供教育用途，不是财务建议或挖矿盈利保证。'
		},
		howTo: {
			en: [
				'Enter your mining hardware hashrate and select the unit (TH/s, GH/s, MH/s).',
				'Enter the power consumption in watts.',
				'Enter your electricity cost per kWh in USD.',
				'Enter the current Bitcoin price.',
				'Review the daily profit, monthly profit, and electricity cost breakdown.'
			],
			ko: [
				'채굴 장비의 해시레이트와 단위(TH/s, GH/s, MH/s)를 입력합니다.',
				'소비 전력(W)을 입력합니다.',
				'kWh당 전기 요금(USD)을 입력합니다.',
				'현재 비트코인 가격을 입력합니다.',
				'일일 수익, 월 수익, 전기 비용 내역을 확인합니다.'
			],
			ja: [
				'マイニング機器のハッシュレートと単位(TH/s, GH/s, MH/s)を入力します。',
				'消費電力(W)を入力します。',
				'kWhあたりの電気料金(USD)を入力します。',
				'現在のビットコイン価格を入力します。',
				'日次利益、月次利益、電気代の内訳を確認します。'
			],
			zh: [
				'输入挖矿硬件算力并选择单位 (TH/s、GH/s、MH/s)。',
				'输入功耗 (瓦特)。',
				'输入每千瓦时的电费 (美元)。',
				'输入当前比特币价格。',
				'查看日利润、月利润和电费的明细。'
			]
		},
		useCases: {
			en: [
				'Estimate whether a specific ASIC miner is profitable in your region.',
				'Compare profitability across different electricity prices or hardware.',
				'Decide whether to mine, buy and hold, or join a mining pool.',
				'Educational example of how difficulty and energy cost shape mining economics.',
				'Stress-test profitability under different Bitcoin price scenarios.'
			],
			ko: [
				'특정 ASIC 채굴기가 본인 지역에서 수익성이 있는지 추정',
				'전기 요금이나 하드웨어가 다른 경우의 수익성 비교',
				'채굴, 매수 후 보유, 채굴 풀 참여 중 무엇이 유리한지 판단',
				'난이도와 에너지 비용이 채굴 경제성에 미치는 영향 학습',
				'다양한 비트코인 가격 시나리오에서 수익성 스트레스 테스트'
			],
			ja: [
				'特定のASICマイナーが地域で採算が取れるかの推定',
				'異なる電気料金やハードウェアでの収益性比較',
				'マイニング、現物保有、マイニングプール参加の比較',
				'難易度とエネルギーコストがマイニング経済性に与える影響の学習',
				'異なるビットコイン価格シナリオでの収益性ストレステスト'
			],
			zh: [
				'估算特定ASIC矿机在您所在地区是否有利可图',
				'比较不同电价或硬件下的收益情况',
				'决定是挖矿、买入持有还是加入矿池',
				'用于学习难度和能源成本如何影响挖矿经济性',
				'对不同比特币价格场景下的盈利能力进行压力测试'
			]
		},
		faq: {
			en: [
				{ q: 'Is this financial advice?', a: 'No. This calculator is for educational purposes only and does not constitute financial or investment advice. Mining can result in losses, especially when difficulty rises or price falls.' },
				{ q: 'Why does the result not match real mining?', a: 'Real revenue depends on pool fees, transaction fee revenue, ongoing difficulty adjustments, hardware downtime, cooling costs, and price volatility, which are not all captured here.' },
				{ q: 'Does this include hardware cost?', a: 'No. Capital cost of the miner itself is not amortized. To find true ROI you must factor in hardware purchase price and expected lifetime.' },
				{ q: 'How often should I update difficulty?', a: 'Bitcoin difficulty adjusts roughly every two weeks. For accurate estimates, refresh the difficulty value to the latest published number.' }
			],
			ko: [
				{ q: '이것은 재무 자문인가요?', a: '아닙니다. 본 계산기는 교육 목적으로만 제공되며 재무 또는 투자 자문이 아닙니다. 난이도 상승이나 가격 하락 시 채굴은 손실을 초래할 수 있습니다.' },
				{ q: '실제 채굴 결과와 다른 이유는?', a: '실제 수익은 풀 수수료, 거래 수수료 수익, 지속적인 난이도 조정, 하드웨어 가동 중단, 냉각 비용, 가격 변동성에 영향을 받으며 여기서 모두 반영되지는 않습니다.' },
				{ q: '하드웨어 비용이 포함되나요?', a: '아니요. 채굴기 자체의 자본 비용은 상각되지 않습니다. 실제 ROI를 보려면 하드웨어 구매가와 예상 수명을 함께 고려해야 합니다.' },
				{ q: '난이도는 얼마나 자주 갱신해야 하나요?', a: '비트코인 난이도는 약 2주마다 조정됩니다. 정확한 추정을 위해 최신 공시값으로 갱신하세요.' }
			],
			ja: [
				{ q: 'これは金融アドバイスですか?', a: 'いいえ。本計算機は教育目的のみで、金融・投資アドバイスではありません。難易度上昇や価格下落時には損失となり得ます。' },
				{ q: '実際のマイニング結果と異なる理由は?', a: '実収益はプール手数料、取引手数料収入、継続的な難易度調整、ハードウェア停止、冷却コスト、価格変動の影響を受け、ここではすべて反映されていません。' },
				{ q: 'ハードウェアコストは含まれますか?', a: 'いいえ。マイナー本体の資本コストは償却されていません。実際のROIを見るには購入価格と耐用年数も考慮してください。' },
				{ q: '難易度はどのくらいの頻度で更新すべき?', a: 'ビットコインの難易度は約2週間ごとに調整されます。正確な推定には最新値に更新してください。' }
			],
			zh: [
				{ q: '这是财务建议吗？', a: '不是。本计算器仅供教育用途，不构成财务或投资建议。挖矿可能导致亏损，尤其是难度上升或币价下跌时。' },
				{ q: '为什么结果与真实挖矿不一致？', a: '真实收益取决于矿池费、交易手续费收入、持续的难度调整、硬件停机、散热成本以及价格波动，这些并未完全体现。' },
				{ q: '是否包含硬件成本？', a: '没有。矿机本身的资本成本未做摊销。要计算真实ROI，需考虑硬件采购价和预期使用年限。' },
				{ q: '难度多久更新一次？', a: '比特币难度大约每两周调整一次。为获得准确估算，请使用最新公布的难度值。' }
			]
		},
		related: [
			{ href: '/staking', label: { en: 'Staking Calculator', ko: '스테이킹 계산기', ja: 'ステーキング計算機', zh: '质押计算器' } },
			{ href: '/profit', label: { en: 'Profit Calculator', ko: '손익 계산기', ja: '損益計算機', zh: '盈亏计算器' } },
			{ href: '/roi', label: { en: 'ROI Calculator', ko: 'ROI 계산기', ja: 'ROI計算機', zh: 'ROI计算器' } }
		],
		externalRefs: [
			{ href: 'https://en.wikipedia.org/wiki/Bitcoin_mining', label: 'Bitcoin mining - Wikipedia' },
			{ href: 'https://www.investopedia.com/terms/b/bitcoin-mining.asp', label: 'Investopedia: Bitcoin Mining' }
		]
	};

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

	<ToolContent
		{lang}
		toolName="Mining Profit Calculator"
		toolUrl="https://sdk.bz/{lang}/mining"
		lastUpdated="2026-04-30"
		category="Finance Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sdk.bz/${lang}` },
			{ name: 'Tools', url: `https://sdk.bz/${lang}` },
			{ name: 'Mining Profit Calculator', url: `https://sdk.bz/${lang}/mining` }
		]}
		content={toolContent}
	/>
</div>
