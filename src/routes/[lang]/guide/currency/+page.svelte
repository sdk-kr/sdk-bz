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
			title: 'Currency Converter Guide',
			metaDesc: 'Complete guide to currency conversion. Learn about exchange rates, currency pairs, forex basics, and how to get the best rates for travel or trading.',
			ctaText: 'Try Currency Converter',
			sections: [
				{
					heading: 'Understanding Exchange Rates',
					text: 'Exchange rates determine how much one currency is worth in terms of another. When you see USD/EUR = 0.92, it means 1 US Dollar equals 0.92 Euros. Exchange rates fluctuate constantly based on supply and demand in the foreign exchange (forex) market, which trades over $6 trillion daily. Understanding exchange rates is essential whether you\'re traveling abroad, making international purchases, sending money overseas, or trading currencies. Our currency converter provides real-time rates for major world currencies, helping you calculate conversions quickly and accurately. Always check current rates before making significant currency exchanges, as rates can change rapidly.'
				},
				{
					heading: 'Factors Affecting Currency Values',
					text: 'Many factors influence currency exchange rates. Interest rates are a major driver; higher rates attract foreign investment, increasing demand for that currency. Inflation rates matter too; currencies from countries with lower inflation tend to strengthen over time. Economic indicators like GDP growth, employment data, and trade balances also affect currency values. Political stability and government policies play a role as well. Central bank actions, such as quantitative easing or rate changes, can cause significant currency movements. Understanding these factors helps you anticipate rate changes, whether you\'re timing a vacation money exchange or making international investment decisions.'
				},
				{
					heading: 'Getting the Best Exchange Rates',
					text: 'Where you exchange currency significantly affects how much you get. Airport and hotel exchanges typically offer the worst rates due to convenience premiums. Banks often provide better rates for account holders but may charge fees. Credit cards usually offer competitive rates but watch for foreign transaction fees (typically 1-3%). ATMs abroad can be a good option, but check your bank\'s international withdrawal fees. Online currency exchange services often offer competitive rates. For large amounts, consider forex brokers. Compare the total cost including fees, not just the quoted rate. Our calculator shows mid-market rates; actual rates you receive will include a margin for the exchange provider.'
				},
				{
					heading: 'Currency Pairs Explained',
					text: 'In forex, currencies are always quoted in pairs. The first currency is the base currency, the second is the quote currency. EUR/USD = 1.08 means 1 Euro buys 1.08 US Dollars. Major pairs include EUR/USD, USD/JPY, GBP/USD, and USD/CHF, all involving the US Dollar. Cross pairs don\'t include USD, like EUR/GBP or AUD/JPY. Exotic pairs involve a major currency and a developing market currency. Understanding pairs is crucial for interpreting rate movements. When EUR/USD rises, the Euro is strengthening against the Dollar. Our converter supports all major and many minor currency pairs, making it easy to calculate exchanges between any two currencies.'
				},
				{
					heading: 'Historical Rates and Trends',
					text: 'Looking at historical exchange rates helps you understand currency trends and make better decisions. Some currencies are relatively stable, while others can be highly volatile. Tracking trends can help you time large purchases or transfers. For example, if you need to exchange USD to EUR in a month, understanding recent trends might help you decide whether to exchange now or wait. However, predicting currency movements is notoriously difficult, even for professionals. Past performance doesn\'t guarantee future results. For most personal exchanges, focus on getting the best available rate rather than trying to time the market perfectly.'
				},
				{
					heading: 'Travel Money Tips',
					text: 'When traveling internationally, plan your currency exchange strategy. Notify your bank of travel plans to avoid card blocks. Use credit cards with no foreign transaction fees for major purchases. Withdraw local currency from ATMs for daily expenses, but minimize withdrawal frequency to reduce fees. Keep some local currency on hand for tips and small vendors who don\'t accept cards. Avoid dynamic currency conversion, where merchants offer to charge you in your home currency, as rates are usually poor. Use our converter to check current rates before departing and periodically during your trip. Consider a multi-currency travel card for frequent international travel.'
				}
			]
		},
		ko: {
			title: '환율 변환기 가이드',
			metaDesc: '환율 변환에 대한 완벽한 가이드. 환율, 통화쌍, 외환 기초, 여행이나 거래를 위해 최상의 환율을 얻는 방법을 알아보세요.',
			ctaText: '환율 변환기 사용하기',
			sections: [
				{
					heading: '환율 이해하기',
					text: '환율은 한 통화가 다른 통화로 얼마의 가치가 있는지 결정합니다. USD/EUR = 0.92는 1 미국 달러가 0.92 유로와 같다는 것을 의미합니다. 환율은 매일 6조 달러 이상 거래되는 외환(forex) 시장의 수요와 공급에 따라 끊임없이 변동합니다. 환율을 이해하는 것은 해외 여행, 국제 구매, 해외 송금 또는 통화 거래 여부에 관계없이 필수적입니다. 저희 환율 변환기는 주요 세계 통화에 대한 실시간 환율을 제공하여 빠르고 정확하게 환전을 계산하는 데 도움이 됩니다. 환율은 빠르게 변할 수 있으므로 상당한 금액의 환전 전에 항상 현재 환율을 확인하세요.'
				},
				{
					heading: '통화 가치에 영향을 미치는 요소',
					text: '많은 요소가 환율에 영향을 미칩니다. 금리는 주요 동인입니다. 높은 금리는 외국 투자를 유치하여 해당 통화에 대한 수요를 증가시킵니다. 인플레이션율도 중요합니다. 인플레이션이 낮은 국가의 통화는 시간이 지남에 따라 강세를 보이는 경향이 있습니다. GDP 성장, 고용 데이터, 무역 수지와 같은 경제 지표도 통화 가치에 영향을 미칩니다. 정치적 안정성과 정부 정책도 역할을 합니다. 양적 완화나 금리 변경과 같은 중앙은행 조치는 상당한 통화 변동을 일으킬 수 있습니다. 이러한 요소를 이해하면 휴가 환전 타이밍을 잡거나 국제 투자 결정을 내릴 때 환율 변화를 예측하는 데 도움이 됩니다.'
				},
				{
					heading: '최상의 환율 얻기',
					text: '통화를 환전하는 곳은 얻는 금액에 크게 영향을 미칩니다. 공항과 호텔 환전소는 일반적으로 편의 프리미엄으로 인해 최악의 환율을 제공합니다. 은행은 종종 계좌 소유자에게 더 나은 환율을 제공하지만 수수료가 부과될 수 있습니다. 신용카드는 일반적으로 경쟁력 있는 환율을 제공하지만 해외 거래 수수료(일반적으로 1-3%)에 주의하세요. 해외 ATM은 좋은 옵션이 될 수 있지만 은행의 국제 인출 수수료를 확인하세요. 온라인 환전 서비스는 종종 경쟁력 있는 환율을 제공합니다. 큰 금액의 경우 외환 브로커를 고려하세요. 제시된 환율뿐만 아니라 수수료를 포함한 총 비용을 비교하세요. 저희 계산기는 중간 시장 환율을 보여줍니다. 실제로 받는 환율에는 환전 제공자의 마진이 포함됩니다.'
				},
				{
					heading: '통화쌍 설명',
					text: '외환에서 통화는 항상 쌍으로 표시됩니다. 첫 번째 통화는 기준 통화이고 두 번째는 견적 통화입니다. EUR/USD = 1.08은 1 유로로 1.08 미국 달러를 산다는 의미입니다. 주요 통화쌍에는 EUR/USD, USD/JPY, GBP/USD, USD/CHF가 포함되며 모두 미국 달러를 포함합니다. 크로스 통화쌍은 EUR/GBP 또는 AUD/JPY처럼 USD를 포함하지 않습니다. 이국적인 통화쌍은 주요 통화와 신흥 시장 통화를 포함합니다. 쌍을 이해하는 것은 환율 변동을 해석하는 데 중요합니다. EUR/USD가 상승하면 유로가 달러 대비 강세를 보입니다. 저희 변환기는 모든 주요 통화쌍과 많은 마이너 통화쌍을 지원하여 두 통화 간의 환전을 쉽게 계산할 수 있습니다.'
				},
				{
					heading: '역사적 환율과 추세',
					text: '역사적 환율을 살펴보면 통화 추세를 이해하고 더 나은 결정을 내리는 데 도움이 됩니다. 일부 통화는 비교적 안정적이지만 다른 통화는 변동성이 클 수 있습니다. 추세를 추적하면 대규모 구매나 이체 타이밍을 잡는 데 도움이 될 수 있습니다. 예를 들어 한 달 후에 USD를 EUR로 환전해야 한다면 최근 추세를 이해하면 지금 환전할지 기다릴지 결정하는 데 도움이 될 수 있습니다. 그러나 통화 움직임을 예측하는 것은 전문가에게도 매우 어렵기로 유명합니다. 과거 실적이 미래 결과를 보장하지 않습니다. 대부분의 개인 환전의 경우 시장 타이밍을 완벽하게 맞추려고 하기보다 가능한 최상의 환율을 얻는 데 집중하세요.'
				},
				{
					heading: '여행 환전 팁',
					text: '해외 여행 시 환전 전략을 계획하세요. 카드 차단을 피하기 위해 여행 계획을 은행에 알리세요. 주요 구매에는 해외 거래 수수료가 없는 신용카드를 사용하세요. 일상 경비는 ATM에서 현지 통화를 인출하되 수수료를 줄이기 위해 인출 빈도를 최소화하세요. 카드를 받지 않는 팁과 소규모 판매자를 위해 현지 통화를 일부 보유하세요. 판매자가 본국 통화로 청구하겠다고 제안하는 동적 통화 변환은 환율이 일반적으로 좋지 않으므로 피하세요. 저희 변환기를 사용하여 출발 전과 여행 중에 정기적으로 현재 환율을 확인하세요. 빈번한 해외 여행의 경우 다중 통화 여행 카드를 고려하세요.'
				}
			]
		},
		ja: {
			title: '通貨換算ガイド',
			metaDesc: '通貨換算の完全ガイド。為替レート、通貨ペア、外国為替の基本、旅行や取引に最適なレートを得る方法を学びます。',
			ctaText: '通貨換算機を試す',
			sections: [
				{
					heading: '為替レートの理解',
					text: '為替レートは、ある通貨が別の通貨でいくらの価値があるかを決定します。USD/EUR = 0.92は、1米ドルが0.92ユーロに等しいことを意味します。為替レートは、毎日6兆ドル以上を取引する外国為替（forex）市場の需要と供給に基づいて常に変動しています。為替レートを理解することは、海外旅行、国際購入、海外送金、通貨取引のいずれにおいても不可欠です。当社の通貨換算機は、主要な世界通貨のリアルタイムレートを提供し、迅速かつ正確に換算を計算するのに役立ちます。レートは急速に変化する可能性があるため、大規模な通貨交換を行う前に必ず現在のレートを確認してください。'
				},
				{
					heading: '通貨価値に影響を与える要因',
					text: '多くの要因が為替レートに影響を与えます。金利は主要な要因です。高い金利は外国投資を引き付け、その通貨への需要を増加させます。インフレ率も重要です。インフレが低い国の通貨は時間とともに強化する傾向があります。GDP成長、雇用データ、貿易収支などの経済指標も通貨価値に影響を与えます。政治的安定性と政府の政策も役割を果たします。量的緩和や金利変更などの中央銀行の行動は、大幅な通貨変動を引き起こす可能性があります。これらの要因を理解することで、休暇の両替タイミングや国際投資決定を行う際にレート変動を予測するのに役立ちます。'
				},
				{
					heading: '最良の為替レートを得る',
					text: '通貨を交換する場所は、得られる金額に大きく影響します。空港やホテルの両替所は通常、利便性プレミアムのため最悪のレートを提供します。銀行は口座保有者により良いレートを提供することが多いですが、手数料がかかる場合があります。クレジットカードは通常、競争力のあるレートを提供しますが、海外取引手数料（通常1〜3%）に注意してください。海外のATMは良い選択肢になり得ますが、銀行の国際引き出し手数料を確認してください。オンライン通貨交換サービスは競争力のあるレートを提供することが多いです。大きな金額の場合は、外為ブローカーを検討してください。提示されたレートだけでなく、手数料を含む総コストを比較してください。当社の計算機は中間市場レートを示しています。実際に受け取るレートには、交換プロバイダーのマージンが含まれます。'
				},
				{
					heading: '通貨ペアの説明',
					text: '外国為替では、通貨は常にペアで表示されます。最初の通貨は基準通貨、2番目は見積通貨です。EUR/USD = 1.08は、1ユーロで1.08米ドルを買えることを意味します。主要ペアにはEUR/USD、USD/JPY、GBP/USD、USD/CHFが含まれ、すべて米ドルを含みます。クロスペアはEUR/GBPやAUD/JPYのようにUSDを含みません。エキゾチックペアは主要通貨と新興市場通貨を含みます。ペアを理解することはレート変動を解釈するために重要です。EUR/USDが上昇すると、ユーロがドルに対して強くなっています。当社の換算機はすべての主要通貨ペアと多くのマイナー通貨ペアをサポートしており、任意の2つの通貨間の交換を簡単に計算できます。'
				},
				{
					heading: '過去のレートとトレンド',
					text: '過去の為替レートを見ることで、通貨トレンドを理解し、より良い決定を下すのに役立ちます。一部の通貨は比較的安定していますが、非常に変動が激しいものもあります。トレンドを追跡することで、大規模な購入や送金のタイミングを取るのに役立ちます。例えば、1か月後にUSDをEURに交換する必要がある場合、最近のトレンドを理解することで、今すぐ交換するか待つかを決定するのに役立ちます。ただし、通貨の動きを予測することは、専門家にとっても非常に難しいことで有名です。過去の実績は将来の結果を保証しません。ほとんどの個人的な交換では、市場のタイミングを完璧に合わせようとするよりも、最良の利用可能なレートを得ることに集中してください。'
				},
				{
					heading: '旅行のお金のヒント',
					text: '海外旅行時は、通貨交換戦略を計画してください。カードのブロックを避けるために、銀行に旅行計画を通知してください。主要な購入には海外取引手数料のないクレジットカードを使用してください。日常の経費にはATMで現地通貨を引き出しますが、手数料を減らすために引き出し頻度を最小限に抑えてください。カードを受け付けないチップや小規模な売り手のために、現地通貨をいくらか手元に置いてください。商人が自国通貨で請求すると提案する動的通貨変換は、レートが通常悪いので避けてください。当社の換算機を使用して、出発前と旅行中に定期的に現在のレートを確認してください。頻繁な海外旅行には、マルチ通貨トラベルカードを検討してください。'
				}
			]
		},
		zh: {
			title: '货币转换器指南',
			metaDesc: '货币转换完整指南。了解汇率、货币对、外汇基础知识以及如何获得最佳旅行或交易汇率。',
			ctaText: '试用货币转换器',
			sections: [
				{
					heading: '理解汇率',
					text: '汇率决定一种货币相对于另一种货币的价值。当您看到USD/EUR = 0.92时，意味着1美元等于0.92欧元。汇率基于外汇（forex）市场的供求关系不断波动，该市场每天交易超过6万亿美元。无论您是出国旅行、进行国际购物、海外汇款还是交易货币，理解汇率都是必不可少的。我们的货币转换器提供主要世界货币的实时汇率，帮助您快速准确地计算转换。汇率可能快速变化，因此在进行重大货币兑换之前务必检查当前汇率。'
				},
				{
					heading: '影响货币价值的因素',
					text: '许多因素影响汇率。利率是主要驱动因素；较高的利率吸引外国投资，增加对该货币的需求。通胀率也很重要；通胀较低国家的货币往往随时间走强。GDP增长、就业数据和贸易平衡等经济指标也影响货币价值。政治稳定性和政府政策也起作用。央行行动，如量化宽松或利率变化，可能导致重大货币波动。理解这些因素有助于您预测汇率变化，无论是为假期换汇选择时机还是做出国际投资决策。'
				},
				{
					heading: '获得最佳汇率',
					text: '您在哪里兑换货币会显著影响您获得的金额。机场和酒店兑换通常由于便利性溢价而提供最差的汇率。银行通常为账户持有人提供更好的汇率，但可能收取费用。信用卡通常提供有竞争力的汇率，但要注意外币交易费（通常1-3%）。海外ATM可能是一个不错的选择，但要检查银行的国际取款费。在线货币兑换服务通常提供有竞争力的汇率。对于大额兑换，考虑外汇经纪商。比较包括费用在内的总成本，而不仅仅是报价汇率。我们的计算器显示中间市场汇率；您实际收到的汇率将包括兑换提供商的利润。'
				},
				{
					heading: '货币对解释',
					text: '在外汇中，货币总是以货币对的形式报价。第一种货币是基础货币，第二种是报价货币。EUR/USD = 1.08意味着1欧元可以买1.08美元。主要货币对包括EUR/USD、USD/JPY、GBP/USD和USD/CHF，都涉及美元。交叉货币对不包括USD，如EUR/GBP或AUD/JPY。异国货币对涉及一种主要货币和一种新兴市场货币。理解货币对对于解读汇率变动至关重要。当EUR/USD上涨时，欧元对美元走强。我们的转换器支持所有主要货币对和许多次要货币对，使计算任意两种货币之间的兑换变得容易。'
				},
				{
					heading: '历史汇率和趋势',
					text: '查看历史汇率有助于您了解货币趋势并做出更好的决策。一些货币相对稳定，而其他货币可能高度波动。跟踪趋势可以帮助您选择大额购买或转账的时机。例如，如果您需要在一个月后将USD兑换成EUR，了解最近的趋势可能有助于您决定是现在兑换还是等待。然而，预测货币走势是出了名的困难，即使对专业人士也是如此。过去的表现不能保证未来的结果。对于大多数个人兑换，专注于获得最佳可用汇率，而不是试图完美地把握市场时机。'
				},
				{
					heading: '旅行换汇技巧',
					text: '出国旅行时，规划您的货币兑换策略。通知银行您的旅行计划以避免卡被锁定。使用没有外币交易费的信用卡进行大额购物。从ATM取款获取当地货币用于日常开支，但尽量减少取款频率以降低费用。为不接受卡的小费和小商贩保留一些当地货币。避免动态货币转换，即商家提议以您的本国货币收费，因为汇率通常很差。使用我们的转换器在出发前和旅行期间定期检查当前汇率。对于频繁的国际旅行，考虑使用多币种旅行卡。'
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
		<a href="/{lang}/currency"
			class="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors">
			{t.ctaText}
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
			</svg>
		</a>
	</div>
</div>
