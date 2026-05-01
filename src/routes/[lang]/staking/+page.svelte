<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	const toolContent = {
		about: {
			en: 'The staking calculator estimates token rewards over a chosen period given a staked amount, current token price, and APY (annual percentage yield). It supports both simple and compounded reward modes. Real APY varies with network conditions, validator performance, lock-up rules, and slashing risk. This tool is provided for educational purposes only and is not financial advice or a guarantee of staking yield.',
			ko: '스테이킹 계산기는 스테이킹 수량, 현재 토큰 가격, APY(연 환산 수익률)를 사용해 선택한 기간 동안의 보상을 추정합니다. 단순 보상과 복리 보상 모드를 지원합니다. 실제 APY는 네트워크 상황, 검증자 성과, 락업 정책, 슬래싱 위험에 따라 달라집니다. 본 도구는 교육 목적으로만 제공되며 재무 자문이나 스테이킹 수익 보장이 아닙니다.',
			ja: 'ステーキング計算機は、ステーク量、現在のトークン価格、APY(年率)から選択期間の報酬を推定します。単利と複利の両モードに対応。実際のAPYはネットワーク状況、バリデーター成績、ロック規則、スラッシングリスクで変動します。本ツールは教育目的のみで、金融アドバイスやステーキング利回りの保証ではありません。',
			zh: '质押计算器根据质押数量、当前代币价格和APY(年化收益率)估算所选期间的代币奖励，支持简单与复利两种模式。真实APY受网络状况、验证者表现、锁定规则和罚没风险影响。本工具仅供教育用途，不是财务建议或质押收益保证。'
		},
		howTo: {
			en: [
				'Enter the amount of tokens you plan to stake.',
				'Enter the current token price in USD.',
				'Enter the APY (annual percentage yield) advertised by the network or validator.',
				'Set the staking period in days.',
				'Toggle compound rewards if rewards are auto-restaked, then review the projection.'
			],
			ko: [
				'스테이킹할 토큰 수량을 입력합니다.',
				'현재 토큰 가격(USD)을 입력합니다.',
				'네트워크나 검증자가 제시한 APY를 입력합니다.',
				'스테이킹 기간(일)을 설정합니다.',
				'보상이 자동 재스테이킹되면 복리 옵션을 켜고 결과를 확인합니다.'
			],
			ja: [
				'ステーキングするトークン数量を入力します。',
				'現在のトークン価格(USD)を入力します。',
				'ネットワークやバリデーターが提示するAPYを入力します。',
				'ステーキング期間(日数)を設定します。',
				'報酬が自動再ステーキングされる場合は複利オプションをオンにして結果を確認します。'
			],
			zh: [
				'输入计划质押的代币数量。',
				'输入当前代币价格 (美元)。',
				'输入网络或验证者公布的APY (年化收益率)。',
				'设定质押天数。',
				'若奖励自动复投请开启复利选项，然后查看预测结果。'
			]
		},
		useCases: {
			en: [
				'Estimate staking yield for popular networks like Ethereum, Solana, or Cardano.',
				'Compare an exchange staking program with self-custody validator staking.',
				'See how compounding rewards changes total return over a year.',
				'Plan staking allocation as part of a broader portfolio strategy.',
				'Educational example for understanding APY versus APR in DeFi.'
			],
			ko: [
				'이더리움, 솔라나, 카르다노 등 주요 네트워크의 스테이킹 수익 추정',
				'거래소 스테이킹과 자체 검증인 스테이킹 비교',
				'복리 보상이 1년 총 수익에 미치는 영향 확인',
				'포트폴리오 전략 내 스테이킹 비중 계획',
				'DeFi의 APY와 APR 차이 학습'
			],
			ja: [
				'イーサリアム、ソラナ、カルダノなど主要ネットワークのステーキング利回り推定',
				'取引所ステーキングと自己保管バリデーターステーキングの比較',
				'複利が年間総リターンに与える影響の確認',
				'ポートフォリオ戦略内のステーキング配分の計画',
				'DeFiにおけるAPYとAPRの違いの学習'
			],
			zh: [
				'估算以太坊、Solana、Cardano等主流网络的质押收益',
				'比较交易所质押与自托管验证者质押',
				'查看复利奖励对一年总回报的影响',
				'在整体组合策略中规划质押配比',
				'用于理解DeFi中APY与APR的差异'
			]
		},
		faq: {
			en: [
				{ q: 'Is this financial advice?', a: 'No. This calculator is for educational purposes only and does not constitute financial, investment, or crypto advice. Staking can result in loss of principal due to slashing, lock-ups, or token price decline.' },
				{ q: 'Is APY guaranteed?', a: 'No. APY changes with network participation, validator performance, and protocol parameters. Quoted APY is a snapshot, not a guarantee.' },
				{ q: 'Are slashing and lock-up risks included?', a: 'No. This calculator does not model validator slashing, withdrawal queues, or unbonding periods, which can significantly affect real returns.' },
				{ q: 'What is the difference between APY and APR?', a: 'APR is the simple annual rate without compounding. APY assumes rewards are reinvested and compounded, so APY is typically higher than APR for the same protocol.' }
			],
			ko: [
				{ q: '이것은 재무 자문인가요?', a: '아닙니다. 본 계산기는 교육 목적으로만 제공되며 재무, 투자, 암호화폐 자문이 아닙니다. 슬래싱, 락업, 토큰 가격 하락 등으로 원금 손실이 발생할 수 있습니다.' },
				{ q: 'APY는 보장되나요?', a: '아니요. APY는 네트워크 참여도, 검증자 성과, 프로토콜 파라미터에 따라 변동하며 표시값은 한 시점의 스냅샷에 불과합니다.' },
				{ q: '슬래싱과 락업 위험이 포함되나요?', a: '아니요. 본 계산기는 검증자 슬래싱, 인출 대기열, 언본딩 기간을 모델링하지 않으며 이들은 실제 수익에 큰 영향을 줍니다.' },
				{ q: 'APY와 APR의 차이는?', a: 'APR은 복리를 적용하지 않은 단순 연이율입니다. APY는 보상이 재투자되고 복리화된다고 가정하므로 같은 프로토콜에서도 APY가 보통 더 높습니다.' }
			],
			ja: [
				{ q: 'これは金融アドバイスですか?', a: 'いいえ。本計算機は教育目的のみで、金融・投資・暗号資産のアドバイスではありません。スラッシング、ロックアップ、価格下落で元本損失が生じる可能性があります。' },
				{ q: 'APYは保証されますか?', a: 'いいえ。APYはネットワーク参加率、バリデーター成績、プロトコルパラメータで変動し、表示値は一時点のスナップショットです。' },
				{ q: 'スラッシングやロックアップリスクは含まれますか?', a: 'いいえ。本計算機はバリデータースラッシング、出金キュー、アンボンディング期間をモデル化しておらず、これらは実リターンに大きな影響を与えます。' },
				{ q: 'APYとAPRの違いは?', a: 'APRは複利を適用しない単純年率です。APYは報酬が再投資・複利化される前提なので、同じプロトコルでもAPYの方が通常高くなります。' }
			],
			zh: [
				{ q: '这是财务建议吗？', a: '不是。本计算器仅供教育用途，不构成财务、投资或加密货币建议。质押可能因罚没、锁定或币价下跌而导致本金损失。' },
				{ q: 'APY有保证吗？', a: '没有。APY随网络参与度、验证者表现和协议参数变化，所示值仅为某一时点的快照。' },
				{ q: '是否包含罚没和锁定风险？', a: '没有。本计算器未对验证者罚没、提款队列、解绑期建模，而这些会显著影响实际收益。' },
				{ q: 'APY与APR有何区别？', a: 'APR是不计复利的简单年化利率。APY假设奖励再投资并复利计算，所以同一协议下APY通常高于APR。' }
			]
		},
		related: [
			{ href: '/mining', label: { en: 'Mining Calculator', ko: '채굴 계산기', ja: 'マイニング計算機', zh: '挖矿计算器' } },
			{ href: '/compound', label: { en: 'Compound Interest', ko: '복리 계산기', ja: '複利計算機', zh: '复利计算器' } },
			{ href: '/profit', label: { en: 'Profit Calculator', ko: '손익 계산기', ja: '損益計算機', zh: '盈亏计算器' } }
		],
		externalRefs: [
			{ href: 'https://ethereum.org/en/staking/', label: 'Ethereum.org: Staking' },
			{ href: 'https://www.investopedia.com/what-is-staking-5211386', label: 'Investopedia: What Is Crypto Staking?' }
		]
	};

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

	<ToolContent
		{lang}
		toolName="Staking Calculator"
		toolUrl="https://sdk.bz/{lang}/staking"
		lastUpdated="2026-04-30"
		category="Finance Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sdk.bz/${lang}` },
			{ name: 'Tools', url: `https://sdk.bz/${lang}` },
			{ name: 'Staking Calculator', url: `https://sdk.bz/${lang}/staking` }
		]}
		content={toolContent}
	/>
</div>
