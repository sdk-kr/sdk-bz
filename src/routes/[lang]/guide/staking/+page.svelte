<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	const content: Record<Locale, {
		title: string;
		metaDesc: string;
		ctaText: string;
		sections: { heading: string; text: string }[]
	}> = {
		en: {
			title: 'Staking Calculator Guide',
			metaDesc: 'Complete guide to cryptocurrency staking. Learn about staking rewards, APY, validator selection, lock-up periods, and how to maximize your passive income from staking.',
			ctaText: 'Try Staking Calculator',
			sections: [
				{
					heading: 'What is Cryptocurrency Staking?',
					text: 'Staking is the process of locking up your cryptocurrency to support a blockchain network\'s operations, typically on Proof of Stake (PoS) networks. In return for staking your coins, you earn rewards, similar to earning interest on a savings account. Major cryptocurrencies that support staking include Ethereum, Cardano, Solana, Polkadot, and many others. Staking rewards typically range from 4% to 20% APY, depending on the network and conditions. Our staking calculator helps you estimate your potential earnings based on the amount you stake, the expected APY, and your staking duration, giving you a clear picture of your passive income potential.'
				},
				{
					heading: 'Understanding Staking APY',
					text: 'APY (Annual Percentage Yield) in staking represents your expected yearly return, including the compounding of rewards. Staking APY varies based on several factors: the total amount staked network-wide (more staking typically means lower individual rewards), network inflation rate, validator performance, and the specific staking mechanism used. Some networks have variable APY that changes frequently, while others offer more stable rates. When comparing staking opportunities, look at historical APY data, not just current rates, to understand the range of returns you might expect. Our calculator lets you model different APY scenarios to see how changes affect your earnings.'
				},
				{
					heading: 'Choosing Where to Stake',
					text: 'You have several options for staking your cryptocurrency. Direct staking through the network requires running a validator node or delegating to one, offering higher rewards but requiring technical knowledge. Exchange staking through platforms like Coinbase, Binance, or Kraken is simpler but typically offers lower returns due to fees. Liquid staking protocols like Lido let you stake while maintaining liquidity through derivative tokens. Each option has trade-offs between convenience, returns, decentralization, and risk. Consider factors like minimum stake requirements, lock-up periods, and the reputation of the staking provider. Our calculator works with any staking option; just input your expected APY.'
				},
				{
					heading: 'Lock-up Periods and Liquidity',
					text: 'Many staking arrangements require a lock-up period during which you cannot access your staked coins. Ethereum, for example, has had extended lock-up periods historically. Some networks have unbonding periods of 21-28 days after you request to unstake. This lack of liquidity is a key risk: if the market crashes while your funds are locked, you cannot sell. Consider your need for liquidity when deciding how much to stake. Liquid staking solutions help address this by giving you tradeable tokens representing your staked assets, though they come with their own risks. Our calculator includes duration inputs to help you understand the commitment required for your staking strategy.'
				},
				{
					heading: 'Staking Risks to Consider',
					text: 'While staking is often considered relatively safe, several risks exist. Slashing risk: validators can lose a portion of staked funds for misbehavior or downtime, affecting delegators. Smart contract risk: staking through protocols exposes you to potential bugs. Market risk: your staked tokens can still lose value. Validator risk: choosing a poor validator can result in missed rewards or slashing. Opportunity cost: locked funds cannot be used for other potentially higher-return investments. Inflation: staking rewards may not outpace token inflation, reducing real returns. Research your chosen staking method thoroughly and never stake more than you can afford to have locked up.'
				},
				{
					heading: 'Maximizing Your Staking Returns',
					text: 'To maximize staking returns, compound your rewards by restaking earned tokens regularly. Choose reliable validators with high uptime and reasonable fees. Diversify across multiple validators to reduce risk. Stay informed about network upgrades that might affect staking. Consider the tax implications in your jurisdiction; staking rewards are often taxable as income when received. Use our staking calculator to model different scenarios: What if you compound weekly versus monthly? How does APY variation affect your total? What\'s the impact of validator fees? Understanding these factors helps you optimize your staking strategy for maximum passive income.'
				}
			]
		},
		ko: {
			title: '스테이킹 계산기 가이드',
			metaDesc: '암호화폐 스테이킹에 대한 완벽한 가이드. 스테이킹 보상, APY, 검증자 선택, 잠금 기간, 스테이킹에서 수동 소득을 극대화하는 방법을 알아보세요.',
			ctaText: '스테이킹 계산기 사용하기',
			sections: [
				{
					heading: '암호화폐 스테이킹이란?',
					text: '스테이킹은 일반적으로 지분 증명(PoS) 네트워크에서 블록체인 네트워크 운영을 지원하기 위해 암호화폐를 잠그는 과정입니다. 코인을 스테이킹하는 대가로 저축 계좌에서 이자를 받는 것과 유사하게 보상을 받습니다. 스테이킹을 지원하는 주요 암호화폐에는 이더리움, 카르다노, 솔라나, 폴카닷 등이 있습니다. 스테이킹 보상은 네트워크와 조건에 따라 일반적으로 연 4%에서 20% APY 범위입니다. 저희 스테이킹 계산기는 스테이킹 금액, 예상 APY, 스테이킹 기간을 기반으로 잠재적 수익을 추정하여 수동 소득 잠재력에 대한 명확한 그림을 제공합니다.'
				},
				{
					heading: '스테이킹 APY 이해하기',
					text: '스테이킹에서 APY(연간 수익률)는 보상의 복리를 포함한 예상 연간 수익을 나타냅니다. 스테이킹 APY는 여러 요인에 따라 달라집니다: 네트워크 전체 스테이킹 총액(스테이킹이 많을수록 일반적으로 개인 보상이 낮아짐), 네트워크 인플레이션율, 검증자 성능, 사용된 특정 스테이킹 메커니즘. 일부 네트워크는 자주 변하는 변동 APY를 가지고 있고 다른 네트워크는 더 안정적인 비율을 제공합니다. 스테이킹 기회를 비교할 때 현재 비율뿐만 아니라 과거 APY 데이터를 확인하여 기대할 수 있는 수익 범위를 이해하세요. 저희 계산기를 사용하면 다양한 APY 시나리오를 모델링하여 변화가 수익에 어떤 영향을 미치는지 확인할 수 있습니다.'
				},
				{
					heading: '어디서 스테이킹할지 선택하기',
					text: '암호화폐를 스테이킹하는 데 여러 옵션이 있습니다. 네트워크를 통한 직접 스테이킹은 검증자 노드를 실행하거나 위임해야 하며, 더 높은 보상을 제공하지만 기술적 지식이 필요합니다. 코인베이스, 바이낸스, 크라켄 같은 플랫폼을 통한 거래소 스테이킹은 더 간단하지만 일반적으로 수수료로 인해 수익이 낮습니다. 리도 같은 유동성 스테이킹 프로토콜은 파생 토큰을 통해 유동성을 유지하면서 스테이킹할 수 있게 합니다. 각 옵션에는 편의성, 수익, 분산화, 위험 간의 트레이드오프가 있습니다. 최소 스테이킹 요구 사항, 잠금 기간, 스테이킹 제공자의 평판과 같은 요소를 고려하세요. 저희 계산기는 모든 스테이킹 옵션과 함께 작동합니다. 예상 APY만 입력하면 됩니다.'
				},
				{
					heading: '잠금 기간과 유동성',
					text: '많은 스테이킹 계약은 스테이킹된 코인에 접근할 수 없는 잠금 기간을 요구합니다. 예를 들어, 이더리움은 역사적으로 긴 잠금 기간이 있었습니다. 일부 네트워크는 언스테이킹 요청 후 21-28일의 언본딩 기간이 있습니다. 이러한 유동성 부족은 핵심 위험입니다: 자금이 잠겨 있는 동안 시장이 폭락하면 판매할 수 없습니다. 얼마나 스테이킹할지 결정할 때 유동성 필요성을 고려하세요. 유동성 스테이킹 솔루션은 스테이킹된 자산을 나타내는 거래 가능한 토큰을 제공하여 이를 해결하는 데 도움이 되지만, 자체적인 위험이 있습니다. 저희 계산기에는 스테이킹 전략에 필요한 약정을 이해하는 데 도움이 되는 기간 입력이 포함되어 있습니다.'
				},
				{
					heading: '고려해야 할 스테이킹 위험',
					text: '스테이킹은 종종 비교적 안전한 것으로 여겨지지만 여러 위험이 존재합니다. 슬래싱 위험: 검증자는 잘못된 행동이나 다운타임으로 인해 스테이킹된 자금의 일부를 잃을 수 있으며, 이는 위임자에게 영향을 미칩니다. 스마트 계약 위험: 프로토콜을 통한 스테이킹은 잠재적인 버그에 노출됩니다. 시장 위험: 스테이킹된 토큰은 여전히 가치를 잃을 수 있습니다. 검증자 위험: 좋지 않은 검증자를 선택하면 보상 누락이나 슬래싱이 발생할 수 있습니다. 기회 비용: 잠긴 자금은 잠재적으로 더 높은 수익을 올릴 수 있는 다른 투자에 사용할 수 없습니다. 인플레이션: 스테이킹 보상이 토큰 인플레이션을 능가하지 못해 실질 수익이 감소할 수 있습니다. 선택한 스테이킹 방법을 철저히 조사하고 잠글 여유가 없는 것보다 더 많이 스테이킹하지 마세요.'
				},
				{
					heading: '스테이킹 수익 극대화하기',
					text: '스테이킹 수익을 극대화하려면 정기적으로 얻은 토큰을 다시 스테이킹하여 보상을 복리화하세요. 높은 가동 시간과 합리적인 수수료를 가진 신뢰할 수 있는 검증자를 선택하세요. 위험을 줄이기 위해 여러 검증자에 분산하세요. 스테이킹에 영향을 미칠 수 있는 네트워크 업그레이드에 대해 계속 알아보세요. 관할권의 세금 영향을 고려하세요. 스테이킹 보상은 종종 받을 때 소득으로 과세됩니다. 저희 스테이킹 계산기를 사용하여 다양한 시나리오를 모델링하세요: 매주 대 매월 복리화하면? APY 변동이 총액에 어떤 영향을 미치나요? 검증자 수수료의 영향은? 이러한 요소를 이해하면 최대 수동 소득을 위해 스테이킹 전략을 최적화하는 데 도움이 됩니다.'
				}
			]
		},
		ja: {
			title: 'ステーキング計算機ガイド',
			metaDesc: '暗号通貨ステーキングの完全ガイド。ステーキング報酬、APY、バリデーター選択、ロックアップ期間、ステーキングからのパッシブインカムを最大化する方法を学びます。',
			ctaText: 'ステーキング計算機を試す',
			sections: [
				{
					heading: '暗号通貨ステーキングとは？',
					text: 'ステーキングは、通常プルーフオブステーク（PoS）ネットワークで、ブロックチェーンネットワークの運営をサポートするために暗号通貨をロックするプロセスです。コインをステーキングする見返りに、普通預金口座で利息を得るのと同様に報酬を得ます。ステーキングをサポートする主要な暗号通貨には、イーサリアム、カルダノ、ソラナ、ポルカドットなどがあります。ステーキング報酬は、ネットワークと条件に応じて、通常年4%から20%のAPYの範囲です。当社のステーキング計算機は、ステーキング額、予想APY、ステーキング期間に基づいて潜在的な収益を見積もり、パッシブインカムの可能性を明確に示します。'
				},
				{
					heading: 'ステーキングAPYの理解',
					text: 'ステーキングにおけるAPY（年間利回り）は、報酬の複利を含む予想年間リターンを表します。ステーキングAPYはいくつかの要因によって異なります：ネットワーク全体のステーキング総額（ステーキングが多いほど個人報酬は通常低くなる）、ネットワークインフレ率、バリデーターのパフォーマンス、使用される特定のステーキングメカニズム。一部のネットワークは頻繁に変化する変動APYを持ち、他のネットワークはより安定したレートを提供します。ステーキングの機会を比較する際は、現在のレートだけでなく過去のAPYデータを見て、期待できるリターンの範囲を理解してください。当社の計算機では、さまざまなAPYシナリオをモデル化して、変化が収益にどのように影響するかを確認できます。'
				},
				{
					heading: 'どこでステーキングするか選択する',
					text: '暗号通貨をステーキングするにはいくつかのオプションがあります。ネットワークを通じた直接ステーキングは、バリデーターノードを実行するか委任する必要があり、より高い報酬を提供しますが技術的な知識が必要です。Coinbase、Binance、Krakenなどのプラットフォームを通じた取引所ステーキングはより簡単ですが、手数料のため通常リターンが低くなります。Lidoなどのリキッドステーキングプロトコルはデリバティブトークンを通じて流動性を維持しながらステーキングできます。各オプションには、利便性、リターン、分散化、リスクのトレードオフがあります。最小ステーキング要件、ロックアップ期間、ステーキングプロバイダーの評判などの要因を考慮してください。当社の計算機はどのステーキングオプションでも機能します。予想APYを入力するだけです。'
				},
				{
					heading: 'ロックアップ期間と流動性',
					text: '多くのステーキング契約は、ステーキングされたコインにアクセスできないロックアップ期間を必要とします。例えば、イーサリアムは歴史的に長いロックアップ期間がありました。一部のネットワークはアンステーキング要求後21〜28日のアンボンディング期間があります。この流動性の欠如は重要なリスクです：資金がロックされている間に市場が暴落した場合、売却できません。どのくらいステーキングするかを決定する際に流動性の必要性を考慮してください。リキッドステーキングソリューションは、ステーキングされた資産を表す取引可能なトークンを提供することでこれに対処しますが、独自のリスクがあります。当社の計算機には、ステーキング戦略に必要なコミットメントを理解するための期間入力が含まれています。'
				},
				{
					heading: '考慮すべきステーキングリスク',
					text: 'ステーキングは比較的安全と考えられることが多いですが、いくつかのリスクがあります。スラッシングリスク：バリデーターは不正行為やダウンタイムでステーキングされた資金の一部を失う可能性があり、委任者に影響します。スマートコントラクトリスク：プロトコルを通じたステーキングは潜在的なバグにさらされます。市場リスク：ステーキングされたトークンは依然として価値を失う可能性があります。バリデーターリスク：悪いバリデーターを選ぶと、報酬の逸失やスラッシングが発生する可能性があります。機会費用：ロックされた資金は他の潜在的に高リターンの投資に使用できません。インフレ：ステーキング報酬がトークンインフレを上回らず、実質リターンが減少する可能性があります。選択したステーキング方法を徹底的に調査し、ロックする余裕がある以上にステーキングしないでください。'
				},
				{
					heading: 'ステーキングリターンの最大化',
					text: 'ステーキングリターンを最大化するには、獲得したトークンを定期的に再ステーキングして報酬を複利化してください。高い稼働時間と合理的な手数料を持つ信頼できるバリデーターを選択してください。リスクを軽減するために複数のバリデーターに分散してください。ステーキングに影響を与える可能性のあるネットワークアップグレードについて情報を得てください。管轄区域の税金への影響を考慮してください。ステーキング報酬は受け取り時に収入として課税されることが多いです。当社のステーキング計算機を使用してさまざまなシナリオをモデル化してください：週次対月次で複利化した場合は？APYの変動は合計にどのように影響しますか？バリデーター手数料の影響は？これらの要因を理解することで、最大のパッシブインカムのためにステーキング戦略を最適化できます。'
				}
			]
		},
		zh: {
			title: '质押计算器指南',
			metaDesc: '加密货币质押完整指南。了解质押奖励、APY、验证者选择、锁定期以及如何最大化质押的被动收入。',
			ctaText: '试用质押计算器',
			sections: [
				{
					heading: '什么是加密货币质押？',
					text: '质押是锁定您的加密货币以支持区块链网络运营的过程，通常在权益证明（PoS）网络上。作为质押代币的回报，您可以获得奖励，类似于在储蓄账户上赚取利息。支持质押的主要加密货币包括以太坊、卡尔达诺、Solana、波卡等。质押奖励通常在4%到20%的APY范围内，具体取决于网络和条件。我们的质押计算器根据您质押的金额、预期APY和质押期限帮助您估算潜在收益，让您清楚了解被动收入的潜力。'
				},
				{
					heading: '理解质押APY',
					text: '质押中的APY（年收益率）代表您的预期年回报，包括奖励的复利。质押APY根据多个因素而变化：全网质押总量（更多质押通常意味着更低的个人奖励）、网络通胀率、验证者表现以及使用的特定质押机制。一些网络具有频繁变化的可变APY，而其他网络提供更稳定的利率。比较质押机会时，查看历史APY数据，而不仅仅是当前利率，以了解您可能期望的回报范围。我们的计算器让您模拟不同的APY场景，以查看变化如何影响您的收益。'
				},
				{
					heading: '选择在哪里质押',
					text: '您有多种质押加密货币的选择。通过网络直接质押需要运行验证者节点或委托给一个，提供更高的奖励但需要技术知识。通过Coinbase、Binance或Kraken等平台的交易所质押更简单，但由于费用通常回报较低。Lido等流动质押协议让您通过衍生代币保持流动性的同时进行质押。每个选项在便利性、回报、去中心化和风险之间都有权衡。考虑最低质押要求、锁定期和质押提供商的声誉等因素。我们的计算器适用于任何质押选项；只需输入您的预期APY。'
				},
				{
					heading: '锁定期和流动性',
					text: '许多质押安排需要锁定期，在此期间您无法访问质押的代币。例如，以太坊历史上有较长的锁定期。一些网络在您请求取消质押后有21-28天的解绑期。这种流动性不足是一个关键风险：如果您的资金被锁定时市场崩溃，您无法出售。在决定质押多少时考虑您对流动性的需求。流动质押解决方案通过提供代表您质押资产的可交易代币来解决这个问题，尽管它们有自己的风险。我们的计算器包括期限输入，帮助您了解质押策略所需的承诺。'
				},
				{
					heading: '需要考虑的质押风险',
					text: '虽然质押通常被认为相对安全，但存在几种风险。罚没风险：验证者可能因不当行为或停机而损失部分质押资金，影响委托人。智能合约风险：通过协议质押会使您面临潜在的漏洞。市场风险：您质押的代币仍可能贬值。验证者风险：选择不良验证者可能导致奖励损失或罚没。机会成本：锁定的资金无法用于其他潜在更高回报的投资。通胀：质押奖励可能无法超过代币通胀，降低实际回报。彻底研究您选择的质押方法，永远不要质押超过您能承受锁定的金额。'
				},
				{
					heading: '最大化您的质押回报',
					text: '要最大化质押回报，定期将获得的代币重新质押以复利奖励。选择具有高正常运行时间和合理费用的可靠验证者。分散到多个验证者以降低风险。了解可能影响质押的网络升级。考虑您所在司法管辖区的税务影响；质押奖励通常在收到时作为收入征税。使用我们的质押计算器模拟不同场景：如果每周复利与每月复利？APY变化如何影响总额？验证者费用的影响是什么？理解这些因素有助于您优化质押策略以获得最大被动收入。'
				}
			]
		}
	};

	$: t = content[lang] || content.en;
</script>

<svelte:head>
	<title>{t.title} - SDK.bz</title>
	<meta name="description" content={t.metaDesc} />
</svelte:head>

<div class="max-w-3xl mx-auto px-4 py-12">
	<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-8">{t.title}</h1>

	<div class="space-y-8">
		{#each t.sections as section}
			<div class="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700">
				<h2 class="text-xl font-semibold text-gray-800 dark:text-dark-200 mb-3">{section.heading}</h2>
				<p class="text-gray-600 dark:text-dark-400 leading-relaxed">{section.text}</p>
			</div>
		{/each}
	</div>

	<div class="mt-10 text-center">
		<a href="/{lang}/staking"
			class="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors">
			{t.ctaText}
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
			</svg>
		</a>
	</div>
</div>
