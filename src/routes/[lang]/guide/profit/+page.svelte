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
			title: 'Crypto Profit Calculator Guide',
			metaDesc: 'Complete guide to calculating cryptocurrency profits and losses. Learn about cost basis, realized gains, unrealized gains, and tax implications of crypto trading.',
			ctaText: 'Try Crypto Profit Calculator',
			sections: [
				{
					heading: 'Understanding Crypto Profits',
					text: 'Calculating profit in cryptocurrency trading seems simple on the surface: sell price minus buy price equals profit. However, crypto profit calculation involves several nuances that can significantly affect your actual returns. Our crypto profit calculator helps you accurately determine your gains or losses by accounting for all the factors that matter: purchase price, sale price, trading fees, and the amount of cryptocurrency involved. Whether you\'re trading Bitcoin, Ethereum, or any altcoin, understanding your true profit helps you make better trading decisions and prepare for tax obligations. Let\'s explore the key concepts you need to know.'
				},
				{
					heading: 'Cost Basis Explained',
					text: 'Your cost basis is the original value of your cryptocurrency for tax purposes, typically what you paid for it plus any fees. If you bought 1 Bitcoin for $30,000 with a $50 fee, your cost basis is $30,050. Cost basis becomes complicated when you make multiple purchases at different prices. There are several accounting methods: FIFO (First In, First Out) assumes you sell the oldest coins first; LIFO (Last In, First Out) assumes you sell the newest first; and specific identification lets you choose which coins you\'re selling. The method you use can significantly affect your taxable gain. Our calculator supports different purchase prices, helping you understand how your cost basis affects profit calculations.'
				},
				{
					heading: 'Realized vs Unrealized Gains',
					text: 'A crucial distinction in crypto investing is between realized and unrealized gains. Unrealized gains (or paper profits) are the increase in value of cryptocurrency you still hold. If you bought Bitcoin at $30,000 and it\'s now worth $50,000, you have $20,000 in unrealized gains. These aren\'t taxable until you sell. Realized gains occur when you actually sell, exchange, or spend your cryptocurrency. Only realized gains trigger tax events. Our calculator helps you track both: use it to see potential profit if you sell (which would become realized gains) and understand the tax implications before making trading decisions.'
				},
				{
					heading: 'Accounting for Fees',
					text: 'Trading fees can significantly eat into your crypto profits, especially for frequent traders. Exchanges typically charge 0.1% to 1% per trade, and these fees add up. Network transaction fees (gas fees on Ethereum, for example) can also be substantial. When calculating profit, subtract both buying and selling fees from your gain. Our calculator includes fee inputs to give you an accurate picture of your actual profit after all costs. Don\'t overlook these expenses; many traders are surprised to find that frequent trading with small gains results in net losses after fees are considered.'
				},
				{
					heading: 'Tax Implications',
					text: 'In most countries, cryptocurrency is treated as property for tax purposes, meaning you owe capital gains tax when you sell at a profit. Short-term gains (held less than a year) are typically taxed at higher ordinary income rates, while long-term gains may qualify for lower capital gains rates. Some events that trigger taxes include: selling crypto for fiat currency, trading one cryptocurrency for another, using crypto to purchase goods or services, and receiving crypto as income. Losses can offset gains for tax purposes. Our calculator helps you understand potential tax implications before you trade, but always consult a tax professional for your specific situation.'
				},
				{
					heading: 'Strategies for Maximizing Profit',
					text: 'Beyond basic buying low and selling high, several strategies can help maximize your crypto profits. Tax-loss harvesting involves selling at a loss to offset gains elsewhere. HODLing (holding long-term) can result in lower tax rates on gains. Dollar-cost averaging reduces the impact of volatility on your cost basis. Keeping detailed records of all transactions makes tax time easier and ensures you don\'t overpay. Use our calculator to model different scenarios before trading: What if you sell now versus waiting? What\'s the impact of fees? How does your cost basis affect the gain? These insights help you make more informed trading decisions.'
				}
			]
		},
		ko: {
			title: '크립토 수익 계산기 가이드',
			metaDesc: '암호화폐 이익과 손실 계산에 대한 완벽한 가이드. 원가 기준, 실현 이익, 미실현 이익, 크립토 거래의 세금 영향을 알아보세요.',
			ctaText: '크립토 수익 계산기 사용하기',
			sections: [
				{
					heading: '크립토 수익 이해하기',
					text: '암호화폐 거래에서 수익을 계산하는 것은 표면적으로 간단해 보입니다: 판매 가격에서 구매 가격을 빼면 수익입니다. 그러나 크립토 수익 계산에는 실제 수익에 크게 영향을 미칠 수 있는 여러 가지 뉘앙스가 있습니다. 저희 크립토 수익 계산기는 구매 가격, 판매 가격, 거래 수수료, 관련 암호화폐 양 등 중요한 모든 요소를 고려하여 이익 또는 손실을 정확하게 결정하는 데 도움이 됩니다. 비트코인, 이더리움 또는 다른 알트코인을 거래하든 실제 수익을 이해하면 더 나은 거래 결정을 내리고 세금 의무에 대비하는 데 도움이 됩니다. 알아야 할 주요 개념을 살펴보겠습니다.'
				},
				{
					heading: '원가 기준 설명',
					text: '원가 기준은 세금 목적의 암호화폐 원래 가치로, 일반적으로 지불한 금액에 수수료를 더한 것입니다. 1 비트코인을 $50 수수료와 함께 $30,000에 구매했다면 원가 기준은 $30,050입니다. 다른 가격에 여러 번 구매하면 원가 기준이 복잡해집니다. 여러 회계 방법이 있습니다: FIFO(선입선출)는 가장 오래된 코인을 먼저 판매한다고 가정합니다. LIFO(후입선출)는 가장 새로운 것을 먼저 판매한다고 가정합니다. 특정 식별은 판매하는 코인을 선택할 수 있게 합니다. 사용하는 방법은 과세 대상 이익에 크게 영향을 미칠 수 있습니다. 저희 계산기는 다른 구매 가격을 지원하여 원가 기준이 수익 계산에 어떤 영향을 미치는지 이해하는 데 도움이 됩니다.'
				},
				{
					heading: '실현 이익 대 미실현 이익',
					text: '크립토 투자에서 중요한 구분은 실현 이익과 미실현 이익입니다. 미실현 이익(또는 장부상 이익)은 여전히 보유하고 있는 암호화폐의 가치 증가입니다. 비트코인을 $30,000에 구매하여 현재 $50,000의 가치가 있다면 $20,000의 미실현 이익이 있습니다. 이는 판매할 때까지 과세되지 않습니다. 실현 이익은 실제로 암호화폐를 판매, 교환 또는 사용할 때 발생합니다. 실현 이익만이 과세 이벤트를 유발합니다. 저희 계산기는 둘 다 추적하는 데 도움이 됩니다: 판매할 경우 잠재적 수익(실현 이익이 됨)을 확인하고 거래 결정을 내리기 전에 세금 영향을 이해하는 데 사용하세요.'
				},
				{
					heading: '수수료 고려하기',
					text: '거래 수수료는 특히 빈번한 거래자에게 크립토 수익을 크게 갉아먹을 수 있습니다. 거래소는 일반적으로 거래당 0.1%에서 1%를 청구하며 이러한 수수료가 누적됩니다. 네트워크 거래 수수료(예: 이더리움의 가스 수수료)도 상당할 수 있습니다. 수익을 계산할 때 이익에서 구매 및 판매 수수료를 모두 빼세요. 저희 계산기에는 수수료 입력이 포함되어 있어 모든 비용 후 실제 수익을 정확하게 파악할 수 있습니다. 이러한 비용을 간과하지 마세요. 많은 거래자들은 작은 이익으로 빈번하게 거래하면 수수료를 고려한 후 순손실이 발생한다는 것에 놀랍니다.'
				},
				{
					heading: '세금 영향',
					text: '대부분의 국가에서 암호화폐는 세금 목적상 재산으로 취급되므로 이익을 얻어 판매할 때 자본 이득세를 내야 합니다. 단기 이익(1년 미만 보유)은 일반적으로 더 높은 경상 소득 세율로 과세되고, 장기 이익은 더 낮은 자본 이득 세율에 해당될 수 있습니다. 세금을 유발하는 일부 이벤트에는 법정 통화로 크립토 판매, 한 암호화폐를 다른 암호화폐로 거래, 크립토를 사용하여 상품 또는 서비스 구매, 소득으로 크립토 수령이 포함됩니다. 손실은 세금 목적으로 이익을 상쇄할 수 있습니다. 저희 계산기는 거래 전에 잠재적인 세금 영향을 이해하는 데 도움이 되지만, 특정 상황에 대해서는 항상 세무 전문가와 상담하세요.'
				},
				{
					heading: '수익 극대화 전략',
					text: '기본적인 저가 매수, 고가 매도 외에도 크립토 수익을 극대화하는 데 도움이 되는 여러 전략이 있습니다. 세금 손실 수확은 다른 곳의 이익을 상쇄하기 위해 손실에 판매하는 것을 포함합니다. HODL(장기 보유)은 이익에 대한 세율을 낮출 수 있습니다. 달러 비용 평균화는 원가 기준에 대한 변동성의 영향을 줄입니다. 모든 거래에 대한 상세한 기록을 유지하면 세금 시즌이 쉬워지고 과다 납부를 방지합니다. 거래 전에 다양한 시나리오를 모델링하기 위해 저희 계산기를 사용하세요: 지금 판매하면 대 기다리면? 수수료의 영향은? 원가 기준이 이익에 어떤 영향을 미치나요? 이러한 통찰력은 더 정보에 입각한 거래 결정을 내리는 데 도움이 됩니다.'
				}
			]
		},
		ja: {
			title: '暗号通貨利益計算機ガイド',
			metaDesc: '暗号通貨の利益と損失の計算に関する完全ガイド。原価基準、実現利益、未実現利益、暗号通貨取引の税金への影響を学びます。',
			ctaText: '暗号通貨利益計算機を試す',
			sections: [
				{
					heading: '暗号通貨の利益を理解する',
					text: '暗号通貨取引での利益計算は表面上は単純に見えます：売却価格から購入価格を引くと利益になります。しかし、暗号通貨の利益計算には、実際のリターンに大きく影響する可能性のあるいくつかのニュアンスがあります。当社の暗号通貨利益計算機は、購入価格、売却価格、取引手数料、関係する暗号通貨の量など、重要なすべての要素を考慮して、利益または損失を正確に決定するのに役立ちます。ビットコイン、イーサリアム、またはその他のアルトコインを取引する場合でも、真の利益を理解することで、より良い取引決定を下し、税金の義務に備えることができます。知っておくべき主要な概念を探っていきましょう。'
				},
				{
					heading: '原価基準の説明',
					text: '原価基準は、税務上の暗号通貨の元の価値で、通常は支払った金額に手数料を加えたものです。1ビットコインを$50の手数料で$30,000で購入した場合、原価基準は$30,050です。異なる価格で複数回購入すると、原価基準は複雑になります。いくつかの会計方法があります：FIFO（先入先出）は最も古いコインを最初に売ると仮定します。LIFO（後入先出）は最も新しいものを最初に売ると仮定します。特定の識別は売るコインを選択できます。使用する方法は、課税対象の利益に大きく影響する可能性があります。当社の計算機は異なる購入価格をサポートしており、原価基準が利益計算にどのように影響するかを理解するのに役立ちます。'
				},
				{
					heading: '実現利益と未実現利益',
					text: '暗号通貨投資における重要な区別は、実現利益と未実現利益です。未実現利益（または帳簿上の利益）は、まだ保有している暗号通貨の価値の増加です。ビットコインを$30,000で購入し、現在$50,000の価値がある場合、$20,000の未実現利益があります。これらは売却するまで課税されません。実現利益は、実際に暗号通貨を売却、交換、または使用したときに発生します。実現利益のみが課税イベントを引き起こします。当社の計算機は両方を追跡するのに役立ちます：売却した場合の潜在的な利益（実現利益になる）を確認し、取引決定を下す前に税金への影響を理解するために使用してください。'
				},
				{
					heading: '手数料の考慮',
					text: '取引手数料は、特に頻繁なトレーダーにとって、暗号通貨の利益を大幅に削る可能性があります。取引所は通常、取引ごとに0.1%から1%を請求し、これらの手数料は積み重なります。ネットワーク取引手数料（例えば、イーサリアムのガス手数料）も相当なものになる可能性があります。利益を計算する際は、利益から購入と売却の両方の手数料を引いてください。当社の計算機には手数料入力が含まれており、すべてのコスト後の実際の利益を正確に把握できます。これらの費用を見落とさないでください。多くのトレーダーは、小さな利益で頻繁に取引すると、手数料を考慮した後に純損失になることに驚きます。'
				},
				{
					heading: '税金への影響',
					text: 'ほとんどの国では、暗号通貨は税務上財産として扱われ、利益で売却するとキャピタルゲイン税を支払う必要があります。短期利益（1年未満の保有）は通常、より高い通常所得税率で課税され、長期利益はより低いキャピタルゲイン税率に該当する場合があります。税金を引き起こすイベントには、法定通貨への暗号通貨の売却、ある暗号通貨を別の暗号通貨に交換、暗号通貨を使用した商品やサービスの購入、収入としての暗号通貨の受領が含まれます。損失は税務上利益を相殺できます。当社の計算機は取引前に潜在的な税金への影響を理解するのに役立ちますが、特定の状況については常に税務専門家にご相談ください。'
				},
				{
					heading: '利益最大化の戦略',
					text: '基本的な安く買って高く売る以外にも、暗号通貨の利益を最大化するのに役立ついくつかの戦略があります。タックスロスハーベスティングは、他の場所の利益を相殺するために損失で売却することを含みます。HODL（長期保有）は利益に対する税率を下げる結果になる可能性があります。ドルコスト平均法は、原価基準に対するボラティリティの影響を軽減します。すべての取引の詳細な記録を保持すると、税金の時期が楽になり、過払いを防ぎます。取引前にさまざまなシナリオをモデル化するために当社の計算機を使用してください：今売る対待つ？手数料の影響は？原価基準は利益にどのように影響する？これらの洞察は、より情報に基づいた取引決定を下すのに役立ちます。'
				}
			]
		},
		zh: {
			title: '加密货币利润计算器指南',
			metaDesc: '计算加密货币利润和损失的完整指南。了解成本基础、已实现收益、未实现收益以及加密货币交易的税务影响。',
			ctaText: '试用加密货币利润计算器',
			sections: [
				{
					heading: '理解加密货币利润',
					text: '计算加密货币交易中的利润表面上看起来很简单：卖出价减去买入价等于利润。然而，加密货币利润计算涉及几个细微差别，可能会显著影响您的实际回报。我们的加密货币利润计算器通过考虑所有重要因素来帮助您准确确定收益或损失：购买价格、销售价格、交易费用和涉及的加密货币数量。无论您是交易比特币、以太坊还是任何山寨币，了解您的真实利润有助于您做出更好的交易决策并为税务义务做准备。让我们探讨您需要了解的关键概念。'
				},
				{
					heading: '成本基础解释',
					text: '您的成本基础是加密货币用于税务目的的原始价值，通常是您支付的金额加上任何费用。如果您以30,000美元购买了1个比特币，手续费50美元，您的成本基础是30,050美元。当您以不同价格多次购买时，成本基础会变得复杂。有几种会计方法：FIFO（先进先出）假设您首先出售最旧的币；LIFO（后进先出）假设您首先出售最新的币；特定识别允许您选择要出售的币。您使用的方法可能会显著影响您的应税收益。我们的计算器支持不同的购买价格，帮助您了解成本基础如何影响利润计算。'
				},
				{
					heading: '已实现收益与未实现收益',
					text: '加密货币投资中的一个关键区别是已实现收益和未实现收益。未实现收益（或账面利润）是您仍持有的加密货币价值的增加。如果您以30,000美元购买了比特币，现在价值50,000美元，您有20,000美元的未实现收益。这些在您出售之前不需要纳税。已实现收益发生在您实际出售、交换或使用加密货币时。只有已实现收益才会触发纳税事件。我们的计算器帮助您跟踪两者：用它来查看如果您出售的潜在利润（将成为已实现收益），并在做出交易决策之前了解税务影响。'
				},
				{
					heading: '考虑费用',
					text: '交易费用可能会大大吞噬您的加密货币利润，特别是对于频繁交易者。交易所通常收取每笔交易0.1%到1%的费用，这些费用会累积起来。网络交易费用（例如以太坊的燃气费）也可能相当可观。计算利润时，从收益中减去购买和销售费用。我们的计算器包括费用输入，让您准确了解扣除所有成本后的实际利润。不要忽视这些费用；许多交易者惊讶地发现，频繁交易小额收益在考虑费用后会导致净亏损。'
				},
				{
					heading: '税务影响',
					text: '在大多数国家，加密货币在税务上被视为财产，这意味着当您获利出售时需要缴纳资本利得税。短期收益（持有不到一年）通常按较高的普通收入税率征税，而长期收益可能符合较低的资本利得税率。触发税收的一些事件包括：将加密货币出售为法定货币、将一种加密货币交易为另一种、使用加密货币购买商品或服务以及作为收入接收加密货币。损失可以抵消税务目的的收益。我们的计算器帮助您在交易前了解潜在的税务影响，但对于您的具体情况，请务必咨询税务专业人士。'
				},
				{
					heading: '最大化利润的策略',
					text: '除了基本的低买高卖之外，还有几种策略可以帮助最大化您的加密货币利润。税损收割涉及亏损出售以抵消其他地方的收益。HODL（长期持有）可以导致收益的较低税率。美元成本平均法减少波动性对成本基础的影响。保留所有交易的详细记录可以使纳税季节更轻松，并确保您不会多缴税。在交易前使用我们的计算器模拟不同的场景：现在卖出与等待？费用的影响是什么？成本基础如何影响收益？这些见解帮助您做出更明智的交易决策。'
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
		<a href="/{lang}/profit"
			class="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors">
			{t.ctaText}
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
			</svg>
		</a>
	</div>
</div>
