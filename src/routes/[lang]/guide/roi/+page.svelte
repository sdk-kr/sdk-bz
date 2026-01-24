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
			title: 'ROI Calculator Guide',
			metaDesc: 'Complete guide to calculating Return on Investment (ROI). Learn about ROI formulas, annualized returns, comparing investments, and making data-driven decisions.',
			ctaText: 'Try ROI Calculator',
			sections: [
				{
					heading: 'Understanding ROI',
					text: 'Return on Investment (ROI) is one of the most fundamental metrics in finance, measuring the profitability of an investment relative to its cost. Simply put, ROI tells you how much money you made (or lost) compared to how much you invested. The basic formula is: ROI = (Final Value - Initial Investment) / Initial Investment x 100. For example, if you invested $1,000 and it\'s now worth $1,200, your ROI is 20%. This simple metric allows you to compare different investments regardless of their size or type, making it an essential tool for any investor. Our calculator makes it easy to compute ROI for any investment and compare opportunities side by side.'
				},
				{
					heading: 'The ROI Formula Explained',
					text: 'While the basic ROI formula is straightforward, understanding its components helps you use it effectively. The initial investment is the total amount you put in, including any fees or costs. The final value is what your investment is worth at the end, including any dividends, interest, or capital gains. For a complete picture, always include all costs (transaction fees, taxes, management fees) and all returns (dividends, interest payments). Excluding these can significantly skew your ROI calculation. Our calculator helps you account for these factors to get an accurate measure of your true returns.'
				},
				{
					heading: 'Annualized ROI',
					text: 'Basic ROI doesn\'t account for time, which can be misleading when comparing investments held for different periods. A 20% return over 2 years is very different from 20% over 10 years. Annualized ROI (also called Compound Annual Growth Rate or CAGR) solves this by showing the equivalent yearly return. The formula is: Annualized ROI = ((Final Value / Initial Value)^(1/years) - 1) x 100. A $1,000 investment that grows to $1,500 over 5 years has an annualized ROI of about 8.4%, not 10% (50% divided by 5). This metric allows fair comparison between investments of different durations and is the standard for measuring investment performance.'
				},
				{
					heading: 'Comparing Investment Opportunities',
					text: 'ROI is a powerful tool for comparing investment opportunities, but use it wisely. Always compare annualized returns when investments have different time horizons. Consider the risk: a guaranteed 5% bank CD has different risk than a stock with potential 15% returns. Factor in liquidity; can you access your money when needed? Don\'t forget taxes; some investments are more tax-efficient than others. Also consider your goals and time horizon. Our calculator lets you input multiple investments and compare their ROI side by side, helping you make informed decisions about where to allocate your capital for the best risk-adjusted returns.'
				},
				{
					heading: 'Common ROI Mistakes',
					text: 'Many investors make mistakes when calculating or interpreting ROI. First, forgetting to include all costs: transaction fees, management fees, and taxes reduce your actual returns. Second, ignoring inflation: a 3% return means nothing if inflation is 3% too. Calculate real (inflation-adjusted) returns for a true picture. Third, cherry-picking time periods: looking at ROI only during favorable periods gives a misleading view. Fourth, comparing apples to oranges: a real estate ROI calculation should include maintenance, taxes, and property management, while stock ROI should include dividends. Our calculator helps you avoid these pitfalls with comprehensive input fields and clear results.'
				},
				{
					heading: 'Using ROI for Better Decisions',
					text: 'ROI isn\'t just for investments; it\'s a versatile metric for any situation where you invest resources and expect returns. Use it to evaluate business purchases, marketing campaigns, education costs, or home improvements. For business decisions, calculate ROI on equipment purchases, hiring decisions, or software investments. When considering education, compare the cost of a degree against expected salary increases. For home improvements, estimate how much value they\'ll add versus their cost. Our ROI calculator provides a standardized way to evaluate any investment decision, helping you allocate your resources more effectively and make data-driven choices.'
				}
			]
		},
		ko: {
			title: 'ROI 계산기 가이드',
			metaDesc: '투자 수익률(ROI) 계산에 대한 완벽한 가이드. ROI 공식, 연간 수익률, 투자 비교, 데이터 기반 의사 결정에 대해 알아보세요.',
			ctaText: 'ROI 계산기 사용하기',
			sections: [
				{
					heading: 'ROI 이해하기',
					text: '투자 수익률(ROI)은 금융에서 가장 기본적인 지표 중 하나로, 비용 대비 투자의 수익성을 측정합니다. 간단히 말해, ROI는 투자한 금액 대비 얼마나 벌었는지(또는 잃었는지)를 알려줍니다. 기본 공식은: ROI = (최종 가치 - 초기 투자) / 초기 투자 x 100입니다. 예를 들어, $1,000를 투자하여 현재 $1,200의 가치가 있다면 ROI는 20%입니다. 이 간단한 지표를 사용하면 크기나 유형에 관계없이 다양한 투자를 비교할 수 있어 모든 투자자에게 필수 도구입니다. 저희 계산기를 사용하면 모든 투자에 대한 ROI를 쉽게 계산하고 기회를 나란히 비교할 수 있습니다.'
				},
				{
					heading: 'ROI 공식 설명',
					text: '기본 ROI 공식은 간단하지만, 구성 요소를 이해하면 효과적으로 사용할 수 있습니다. 초기 투자는 수수료나 비용을 포함하여 투입한 총 금액입니다. 최종 가치는 배당금, 이자 또는 자본 이득을 포함하여 투자의 최종 가치입니다. 완전한 그림을 얻으려면 항상 모든 비용(거래 수수료, 세금, 관리 수수료)과 모든 수익(배당금, 이자 지급)을 포함하세요. 이를 제외하면 ROI 계산이 크게 왜곡될 수 있습니다. 저희 계산기는 이러한 요소를 고려하여 실제 수익을 정확하게 측정하는 데 도움이 됩니다.'
				},
				{
					heading: '연간 ROI',
					text: '기본 ROI는 시간을 고려하지 않아 다른 기간 동안 보유한 투자를 비교할 때 오해를 줄 수 있습니다. 2년 동안 20% 수익은 10년 동안 20%와 매우 다릅니다. 연간 ROI(연평균 성장률 또는 CAGR이라고도 함)는 동등한 연간 수익을 보여주어 이를 해결합니다. 공식은: 연간 ROI = ((최종 가치 / 초기 가치)^(1/년수) - 1) x 100입니다. 5년 동안 $1,000 투자가 $1,500으로 성장하면 연간 ROI는 약 8.4%이며, 10%(50%를 5로 나눈 값)가 아닙니다. 이 지표를 사용하면 다른 기간의 투자를 공정하게 비교할 수 있으며 투자 성과 측정의 표준입니다.'
				},
				{
					heading: '투자 기회 비교',
					text: 'ROI는 투자 기회를 비교하는 강력한 도구이지만 현명하게 사용하세요. 투자 기간이 다를 때는 항상 연간 수익률을 비교하세요. 위험을 고려하세요: 보장된 5% 은행 CD는 잠재적 15% 수익을 가진 주식과 다른 위험이 있습니다. 유동성을 고려하세요; 필요할 때 돈에 접근할 수 있습니까? 세금을 잊지 마세요; 일부 투자는 다른 투자보다 세금 효율성이 높습니다. 또한 목표와 시간 범위를 고려하세요. 저희 계산기를 사용하면 여러 투자를 입력하고 ROI를 나란히 비교하여 최상의 위험 조정 수익을 위해 자본을 어디에 배분할지에 대해 정보에 입각한 결정을 내릴 수 있습니다.'
				},
				{
					heading: '일반적인 ROI 실수',
					text: '많은 투자자가 ROI를 계산하거나 해석할 때 실수를 합니다. 첫째, 모든 비용을 포함하는 것을 잊습니다: 거래 수수료, 관리 수수료, 세금은 실제 수익을 줄입니다. 둘째, 인플레이션을 무시합니다: 인플레이션도 3%라면 3% 수익은 의미가 없습니다. 진정한 그림을 위해 실질(인플레이션 조정) 수익을 계산하세요. 셋째, 기간을 선별합니다: 유리한 기간 동안의 ROI만 보면 오해를 줍니다. 넷째, 사과와 오렌지를 비교합니다: 부동산 ROI 계산에는 유지 관리, 세금, 재산 관리가 포함되어야 하고, 주식 ROI에는 배당금이 포함되어야 합니다. 저희 계산기는 포괄적인 입력 필드와 명확한 결과로 이러한 함정을 피하는 데 도움이 됩니다.'
				},
				{
					heading: '더 나은 결정을 위한 ROI 사용',
					text: 'ROI는 투자에만 해당되지 않습니다. 자원을 투자하고 수익을 기대하는 모든 상황에 대한 다재다능한 지표입니다. 사업 구매, 마케팅 캠페인, 교육 비용 또는 주택 개량을 평가하는 데 사용하세요. 사업 결정의 경우 장비 구매, 채용 결정 또는 소프트웨어 투자에 대한 ROI를 계산하세요. 교육을 고려할 때 학위 비용을 예상 급여 인상과 비교하세요. 주택 개량의 경우 비용 대비 얼마나 많은 가치를 추가할지 추정하세요. 저희 ROI 계산기는 모든 투자 결정을 평가하는 표준화된 방법을 제공하여 자원을 더 효과적으로 배분하고 데이터 기반 선택을 하는 데 도움이 됩니다.'
				}
			]
		},
		ja: {
			title: 'ROI計算機ガイド',
			metaDesc: '投資収益率（ROI）計算の完全ガイド。ROI公式、年率リターン、投資比較、データ駆動型意思決定について学びます。',
			ctaText: 'ROI計算機を試す',
			sections: [
				{
					heading: 'ROIの理解',
					text: '投資収益率（ROI）は、コストに対する投資の収益性を測定する、金融で最も基本的な指標の1つです。簡単に言えば、ROIは投資した金額に対してどれだけ稼いだか（または失ったか）を示します。基本公式は：ROI =（最終価値 - 初期投資）/ 初期投資 x 100です。例えば、$1,000を投資して現在$1,200の価値がある場合、ROIは20%です。この単純な指標により、サイズやタイプに関係なくさまざまな投資を比較でき、すべての投資家にとって不可欠なツールとなっています。当社の計算機を使用すると、あらゆる投資のROIを簡単に計算し、機会を並べて比較できます。'
				},
				{
					heading: 'ROI公式の説明',
					text: '基本的なROI公式は簡単ですが、その構成要素を理解することで効果的に使用できます。初期投資は、手数料やコストを含めて投入した総額です。最終価値は、配当、利息、キャピタルゲインを含む投資の最終的な価値です。完全な画像を得るために、常にすべてのコスト（取引手数料、税金、管理手数料）とすべてのリターン（配当、利息支払い）を含めてください。これらを除外すると、ROI計算が大幅に歪む可能性があります。当社の計算機は、これらの要因を考慮して、実際のリターンを正確に測定するのに役立ちます。'
				},
				{
					heading: '年率ROI',
					text: '基本的なROIは時間を考慮しないため、異なる期間保有した投資を比較する際に誤解を招く可能性があります。2年間で20%のリターンは10年間で20%とは非常に異なります。年率ROI（複合年間成長率またはCAGRとも呼ばれる）は、同等の年間リターンを示すことでこれを解決します。公式は：年率ROI =（（最終価値 / 初期価値）^（1/年数）- 1）x 100です。5年間で$1,000の投資が$1,500に成長した場合、年率ROIは約8.4%であり、10%（50%を5で割った値）ではありません。この指標により、異なる期間の投資を公正に比較でき、投資パフォーマンス測定の標準となっています。'
				},
				{
					heading: '投資機会の比較',
					text: 'ROIは投資機会を比較するための強力なツールですが、賢く使用してください。投資期間が異なる場合は、常に年率リターンを比較してください。リスクを考慮してください：保証された5%の銀行CDは、潜在的に15%のリターンがある株式とは異なるリスクがあります。流動性を考慮してください。必要なときにお金にアクセスできますか？税金を忘れないでください。一部の投資は他の投資よりも税効率が高いです。また、目標と時間軸を考慮してください。当社の計算機では、複数の投資を入力してROIを並べて比較し、最高のリスク調整後リターンのために資本をどこに配分するかについて情報に基づいた決定を下すことができます。'
				},
				{
					heading: '一般的なROIの間違い',
					text: '多くの投資家がROIを計算または解釈する際に間違いを犯します。まず、すべてのコストを含めることを忘れます：取引手数料、管理手数料、税金は実際のリターンを減らします。次に、インフレを無視します：インフレも3%なら、3%のリターンは意味がありません。真の画像を得るために、実質（インフレ調整後）リターンを計算してください。第三に、期間を選り好みします：有利な期間のROIだけを見ると、誤解を招く見方になります。第四に、りんごとオレンジを比較します：不動産のROI計算にはメンテナンス、税金、プロパティマネジメントを含める必要があり、株式のROIには配当を含める必要があります。当社の計算機は、包括的な入力フィールドと明確な結果でこれらの落とし穴を避けるのに役立ちます。'
				},
				{
					heading: 'より良い決定のためのROI使用',
					text: 'ROIは投資だけでなく、リソースを投資してリターンを期待するあらゆる状況で使用できる多用途な指標です。ビジネス購入、マーケティングキャンペーン、教育費、住宅改善の評価に使用してください。ビジネス上の決定には、機器購入、採用決定、ソフトウェア投資のROIを計算してください。教育を検討する際は、学位の費用と予想される給与増加を比較してください。住宅改善の場合は、コストに対してどれだけの価値が追加されるかを見積もってください。当社のROI計算機は、あらゆる投資決定を評価する標準化された方法を提供し、リソースをより効果的に配分し、データ駆動型の選択を行うのに役立ちます。'
				}
			]
		},
		zh: {
			title: 'ROI计算器指南',
			metaDesc: '计算投资回报率（ROI）的完整指南。了解ROI公式、年化回报、投资比较和数据驱动决策。',
			ctaText: '试用ROI计算器',
			sections: [
				{
					heading: '理解ROI',
					text: '投资回报率（ROI）是金融中最基本的指标之一，衡量投资相对于成本的盈利能力。简单地说，ROI告诉您相对于投资金额赚了（或亏了）多少钱。基本公式是：ROI =（最终价值 - 初始投资）/ 初始投资 x 100。例如，如果您投资了1,000美元，现在价值1,200美元，您的ROI是20%。这个简单的指标允许您比较不同的投资，无论其规模或类型如何，使其成为任何投资者的必备工具。我们的计算器让您可以轻松计算任何投资的ROI并并排比较机会。'
				},
				{
					heading: 'ROI公式解释',
					text: '虽然基本的ROI公式很简单，但理解其组成部分有助于您有效地使用它。初始投资是您投入的总金额，包括任何费用或成本。最终价值是您的投资在结束时的价值，包括任何股息、利息或资本收益。为了获得完整的图景，始终包括所有成本（交易费用、税收、管理费）和所有回报（股息、利息支付）。排除这些可能会显著扭曲您的ROI计算。我们的计算器帮助您考虑这些因素，以获得真实回报的准确衡量。'
				},
				{
					heading: '年化ROI',
					text: '基本ROI不考虑时间，在比较持有不同时期的投资时可能会产生误导。2年20%的回报与10年20%非常不同。年化ROI（也称为复合年增长率或CAGR）通过显示等效的年回报来解决这个问题。公式是：年化ROI =（（最终价值 / 初始价值）^（1/年数）- 1）x 100。5年内1,000美元的投资增长到1,500美元，年化ROI约为8.4%，而不是10%（50%除以5）。这个指标允许公平比较不同持续时间的投资，是衡量投资业绩的标准。'
				},
				{
					heading: '比较投资机会',
					text: 'ROI是比较投资机会的强大工具，但要明智地使用它。当投资有不同的时间范围时，始终比较年化回报。考虑风险：有保证的5%银行CD与潜在15%回报的股票风险不同。考虑流动性；您需要时能获取资金吗？不要忘记税收；一些投资比其他投资更节税。还要考虑您的目标和时间范围。我们的计算器让您输入多个投资并并排比较其ROI，帮助您就将资本分配到哪里以获得最佳风险调整回报做出明智的决定。'
				},
				{
					heading: '常见的ROI错误',
					text: '许多投资者在计算或解释ROI时会犯错误。首先，忘记包括所有成本：交易费用、管理费和税收会减少您的实际回报。其次，忽略通货膨胀：如果通胀也是3%，3%的回报毫无意义。计算实际（通胀调整后）回报以获得真实图景。第三，选择性地挑选时间段：只看有利时期的ROI会给出误导性的观点。第四，比较苹果和橙子：房地产ROI计算应包括维护、税收和物业管理，而股票ROI应包括股息。我们的计算器通过全面的输入字段和清晰的结果帮助您避免这些陷阱。'
				},
				{
					heading: '使用ROI做出更好的决策',
					text: 'ROI不仅仅用于投资；它是一个多功能指标，适用于您投资资源并期望回报的任何情况。用它来评估商业购买、营销活动、教育成本或房屋装修。对于商业决策，计算设备购买、招聘决策或软件投资的ROI。考虑教育时，比较学位成本与预期薪资增长。对于房屋装修，估计它们相对于成本将增加多少价值。我们的ROI计算器提供了一种标准化的方法来评估任何投资决策，帮助您更有效地分配资源并做出数据驱动的选择。'
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
		<a href="/{lang}/roi"
			class="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors">
			{t.ctaText}
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
			</svg>
		</a>
	</div>
</div>
