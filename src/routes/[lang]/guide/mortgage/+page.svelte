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
			title: 'Mortgage Calculator Guide',
			metaDesc: 'Complete guide to using the mortgage calculator. Learn about down payments, mortgage terms, interest rates, PMI, property taxes, and total homeownership costs.',
			ctaText: 'Try Mortgage Calculator',
			sections: [
				{
					heading: 'Understanding Your Mortgage',
					text: 'A mortgage is likely the largest financial commitment you\'ll ever make, so understanding how it works is crucial. Our mortgage calculator helps you determine your monthly payment based on the home price, down payment, interest rate, and loan term. But a mortgage is more than just principal and interest. Your total monthly housing cost typically includes property taxes, homeowner\'s insurance, and possibly private mortgage insurance (PMI) if your down payment is less than 20%. Understanding all these components helps you accurately budget for homeownership. Our calculator breaks down each element so you can see exactly where your money goes and make informed decisions about how much house you can truly afford.'
				},
				{
					heading: 'Down Payment Strategies',
					text: 'The down payment is the portion of the home price you pay upfront, and it significantly affects your mortgage. A larger down payment means borrowing less, which results in lower monthly payments and less interest paid over the life of the loan. Putting down 20% or more also eliminates the need for private mortgage insurance (PMI), which can save you hundreds of dollars monthly. However, putting down more money means less cash for other needs. Some buyers choose smaller down payments (3-10%) to preserve cash for emergencies, renovations, or investments that might earn higher returns. Use our calculator to compare different down payment amounts and see how they affect your monthly payment and total interest costs.'
				},
				{
					heading: 'Choosing Your Loan Term',
					text: 'Mortgage terms typically range from 15 to 30 years, with 30-year mortgages being the most popular. A 30-year term offers lower monthly payments, making homeownership more accessible and freeing up cash for other goals. However, you\'ll pay significantly more interest over the life of the loan. A 15-year term has higher monthly payments but much lower total interest and builds equity faster. Some lenders also offer 20-year or 25-year terms as a middle ground. Consider your financial goals, monthly budget, and how long you plan to stay in the home. Use our calculator to compare different terms and see the trade-offs between monthly payment and total cost.'
				},
				{
					heading: 'Interest Rates and Types',
					text: 'Mortgage interest rates significantly impact your total cost. Even a 0.5% difference can mean tens of thousands of dollars over a 30-year loan. Fixed-rate mortgages keep the same interest rate throughout the loan term, providing predictable payments. Adjustable-rate mortgages (ARMs) typically start with lower rates that can change after an initial period. ARMs might make sense if you plan to sell or refinance before the rate adjusts. When shopping for mortgages, compare rates from multiple lenders, including banks, credit unions, and online lenders. Also consider points, which are prepaid interest that can lower your rate. Our calculator helps you see how different rates affect your payment and total cost.'
				},
				{
					heading: 'Hidden Costs of Homeownership',
					text: 'Your mortgage payment is just part of owning a home. Property taxes vary by location and can add hundreds to your monthly payment. Homeowner\'s insurance is required by lenders and protects your investment. If your down payment is less than 20%, you\'ll likely pay PMI until you reach 20% equity. Beyond these, budget for maintenance (typically 1-2% of home value annually), utilities, HOA fees if applicable, and unexpected repairs. Our calculator includes fields for taxes, insurance, and PMI to give you a more accurate picture of your true monthly housing cost. Don\'t forget closing costs, which typically run 2-5% of the loan amount and are due at purchase.'
				},
				{
					heading: 'Tips for Mortgage Success',
					text: 'To get the best mortgage, start by improving your credit score before applying, as higher scores qualify for better rates. Save for a substantial down payment to reduce borrowing costs and avoid PMI. Get pre-approved to know your budget and strengthen your offers. Shop around and compare at least three lenders for rates and closing costs. Consider the total cost, not just the monthly payment. Don\'t max out your budget; leave room for unexpected expenses and life changes. Finally, understand the difference between pre-qualification (informal estimate) and pre-approval (verified commitment). Use our mortgage calculator throughout your home buying journey to model different scenarios and make confident decisions.'
				}
			]
		},
		ko: {
			title: '모기지 계산기 가이드',
			metaDesc: '모기지 계산기 사용에 대한 완벽한 가이드. 계약금, 모기지 기간, 이자율, PMI, 재산세, 총 주택 소유 비용에 대해 알아보세요.',
			ctaText: '모기지 계산기 사용하기',
			sections: [
				{
					heading: '모기지 이해하기',
					text: '모기지는 아마도 여러분이 하게 될 가장 큰 재정적 약속이므로, 어떻게 작동하는지 이해하는 것이 중요합니다. 저희 모기지 계산기는 주택 가격, 계약금, 이자율, 대출 기간을 기반으로 월 상환액을 결정하는 데 도움이 됩니다. 그러나 모기지는 단순히 원금과 이자만이 아닙니다. 총 월 주거 비용에는 일반적으로 재산세, 주택 보험, 그리고 계약금이 20% 미만인 경우 개인 모기지 보험(PMI)이 포함됩니다. 이러한 모든 구성 요소를 이해하면 주택 소유 예산을 정확하게 세울 수 있습니다. 저희 계산기는 각 요소를 분류하여 돈이 정확히 어디로 가는지 보고 실제로 감당할 수 있는 주택에 대해 현명한 결정을 내릴 수 있습니다.'
				},
				{
					heading: '계약금 전략',
					text: '계약금은 선불로 지불하는 주택 가격의 일부이며 모기지에 크게 영향을 미칩니다. 계약금이 클수록 대출 금액이 줄어들어 월 상환액이 낮아지고 대출 기간 동안 지불하는 이자가 줄어듭니다. 20% 이상을 내면 개인 모기지 보험(PMI)이 필요 없어 월 수백 달러를 절약할 수 있습니다. 그러나 더 많은 돈을 내면 다른 필요에 사용할 현금이 줄어듭니다. 일부 구매자는 비상금, 리모델링 또는 더 높은 수익을 올릴 수 있는 투자를 위해 현금을 보존하기 위해 적은 계약금(3-10%)을 선택합니다. 저희 계산기를 사용하여 다양한 계약금 금액을 비교하고 월 상환액과 총 이자 비용에 어떤 영향을 미치는지 확인하세요.'
				},
				{
					heading: '대출 기간 선택하기',
					text: '모기지 기간은 일반적으로 15년에서 30년까지이며, 30년 모기지가 가장 인기 있습니다. 30년 기간은 월 상환액이 낮아 주택 소유를 더 쉽게 접근할 수 있게 하고 다른 목표를 위한 현금을 확보할 수 있습니다. 그러나 대출 기간 동안 훨씬 더 많은 이자를 지불하게 됩니다. 15년 기간은 월 상환액이 높지만 총 이자가 훨씬 적고 자산을 더 빨리 축적합니다. 일부 대출 기관은 중간점으로 20년 또는 25년 기간도 제공합니다. 재정 목표, 월 예산, 주택에 얼마나 오래 머물 계획인지 고려하세요. 저희 계산기를 사용하여 다양한 기간을 비교하고 월 상환액과 총 비용 간의 트레이드오프를 확인하세요.'
				},
				{
					heading: '이자율과 유형',
					text: '모기지 이자율은 총 비용에 크게 영향을 미칩니다. 0.5%의 차이도 30년 대출에서 수만 달러를 의미할 수 있습니다. 고정금리 모기지는 대출 기간 동안 동일한 이자율을 유지하여 예측 가능한 상환을 제공합니다. 변동금리 모기지(ARM)는 일반적으로 초기 기간 후에 변경될 수 있는 낮은 금리로 시작합니다. ARM은 금리가 조정되기 전에 매도하거나 재융자할 계획이라면 적합할 수 있습니다. 모기지를 찾을 때 은행, 신용협동조합, 온라인 대출 기관을 포함한 여러 대출 기관의 금리를 비교하세요. 또한 금리를 낮출 수 있는 선불 이자인 포인트도 고려하세요. 저희 계산기는 다양한 금리가 상환액과 총 비용에 어떤 영향을 미치는지 보여줍니다.'
				},
				{
					heading: '주택 소유의 숨겨진 비용',
					text: '모기지 상환액은 주택 소유의 일부일 뿐입니다. 재산세는 지역에 따라 다르며 월 상환액에 수백 달러를 추가할 수 있습니다. 주택 보험은 대출 기관에서 요구하며 투자를 보호합니다. 계약금이 20% 미만이면 20% 자산에 도달할 때까지 PMI를 지불하게 됩니다. 이 외에도 유지 관리(일반적으로 연간 주택 가치의 1-2%), 공과금, 해당되는 경우 HOA 비용, 예상치 못한 수리 비용을 예산에 포함하세요. 저희 계산기에는 세금, 보험, PMI에 대한 필드가 포함되어 있어 실제 월 주거 비용에 대한 더 정확한 그림을 제공합니다. 일반적으로 대출 금액의 2-5%이며 구매 시 지불해야 하는 클로징 비용을 잊지 마세요.'
				},
				{
					heading: '모기지 성공을 위한 팁',
					text: '최상의 모기지를 받으려면 신청 전에 신용 점수를 개선하는 것부터 시작하세요. 점수가 높을수록 더 좋은 금리를 받을 수 있습니다. 대출 비용을 줄이고 PMI를 피하기 위해 상당한 계약금을 저축하세요. 사전 승인을 받아 예산을 파악하고 제안을 강화하세요. 여러 곳을 둘러보고 금리와 클로징 비용에 대해 최소 3개 대출 기관을 비교하세요. 월 상환액뿐만 아니라 총 비용을 고려하세요. 예산을 최대한 사용하지 말고 예상치 못한 비용과 생활 변화를 위한 여유를 남겨두세요. 마지막으로 사전 자격(비공식 추정)과 사전 승인(검증된 약정)의 차이를 이해하세요. 주택 구매 여정 전반에 걸쳐 저희 모기지 계산기를 사용하여 다양한 시나리오를 모델링하고 자신감 있는 결정을 내리세요.'
				}
			]
		},
		ja: {
			title: '住宅ローン計算機ガイド',
			metaDesc: '住宅ローン計算機の使用に関する完全ガイド。頭金、住宅ローン期間、金利、PMI、固定資産税、総住宅所有コストについて学びます。',
			ctaText: '住宅ローン計算機を試す',
			sections: [
				{
					heading: '住宅ローンの理解',
					text: '住宅ローンはおそらく人生で最大の財政的コミットメントなので、その仕組みを理解することが重要です。当社の住宅ローン計算機は、住宅価格、頭金、金利、ローン期間に基づいて月々の支払いを決定するのに役立ちます。しかし、住宅ローンは単なる元金と利息だけではありません。総月間住居費には通常、固定資産税、住宅保険、頭金が20%未満の場合は民間住宅ローン保険（PMI）が含まれます。これらすべての構成要素を理解することで、住宅所有の予算を正確に立てることができます。当社の計算機は各要素を分解して、お金がどこに行くかを正確に確認し、本当に購入できる住宅について情報に基づいた決定を下すことができます。'
				},
				{
					heading: '頭金戦略',
					text: '頭金は住宅価格のうち前払いする部分で、住宅ローンに大きな影響を与えます。頭金が大きいほど借入額が減り、月々の支払いが低くなり、ローン期間中に支払う利息が少なくなります。20%以上を支払うと民間住宅ローン保険（PMI）も不要になり、月々数百ドル節約できます。ただし、より多くのお金を支払うと、他のニーズに使える現金が減ります。一部の購入者は、緊急資金、改装、またはより高い収益を得られる投資のために現金を保持するために、少ない頭金（3〜10%）を選択します。当社の計算機を使用して、さまざまな頭金額を比較し、月々の支払いと総利息コストにどのように影響するかを確認してください。'
				},
				{
					heading: 'ローン期間の選択',
					text: '住宅ローン期間は通常15年から30年で、30年住宅ローンが最も人気があります。30年の期間は月々の支払いが低く、住宅所有がより身近になり、他の目標のために現金を確保できます。ただし、ローン期間中に支払う利息は大幅に多くなります。15年の期間は月々の支払いが高くなりますが、総利息がはるかに少なく、より早く資産を構築します。一部の貸し手は、中間点として20年または25年の期間も提供しています。財務目標、月々の予算、住宅にどのくらい住む予定かを考慮してください。当社の計算機を使用して、さまざまな期間を比較し、月々の支払いと総コストのトレードオフを確認してください。'
				},
				{
					heading: '金利と種類',
					text: '住宅ローン金利は総コストに大きく影響します。0.5%の差でも、30年ローンで数万ドルの差になる可能性があります。固定金利住宅ローンはローン期間中同じ金利を維持し、予測可能な支払いを提供します。変動金利住宅ローン（ARM）は通常、初期期間後に変更される可能性がある低い金利から始まります。ARMは、金利が調整される前に売却または借り換えを計画している場合に適している可能性があります。住宅ローンを探す際は、銀行、信用組合、オンライン貸し手を含む複数の貸し手からの金利を比較してください。また、金利を下げることができる前払い利息であるポイントも検討してください。当社の計算機は、異なる金利が支払いと総コストにどのように影響するかを示します。'
				},
				{
					heading: '住宅所有の隠れたコスト',
					text: '住宅ローンの支払いは住宅所有の一部に過ぎません。固定資産税は場所によって異なり、月々の支払いに数百ドル追加される可能性があります。住宅保険は貸し手によって要求され、投資を保護します。頭金が20%未満の場合、20%の資産に達するまでPMIを支払う可能性があります。これら以外に、メンテナンス（通常年間住宅価値の1〜2%）、公共料金、該当する場合はHOA料金、予期しない修理の予算を立ててください。当社の計算機には税金、保険、PMIのフィールドが含まれており、実際の月間住居コストのより正確な画像を提供します。通常、ローン金額の2〜5%で購入時に支払うクロージングコストを忘れないでください。'
				},
				{
					heading: '住宅ローン成功のためのヒント',
					text: '最良の住宅ローンを得るには、申請前に信用スコアを改善することから始めてください。スコアが高いほど、より良い金利を得られます。借入コストを減らしてPMIを避けるために、十分な頭金を貯めてください。事前承認を取得して予算を把握し、オファーを強化してください。複数を比較して、金利とクロージングコストについて少なくとも3つの貸し手を比較してください。月々の支払いだけでなく、総コストを考慮してください。予算を最大限に使わず、予期しない出費や生活の変化に余裕を持たせてください。最後に、事前資格（非公式な見積もり）と事前承認（検証されたコミットメント）の違いを理解してください。住宅購入の旅を通じて当社の住宅ローン計算機を使用して、さまざまなシナリオをモデル化し、自信を持って決定してください。'
				}
			]
		},
		zh: {
			title: '抵押贷款计算器指南',
			metaDesc: '使用抵押贷款计算器的完整指南。了解首付、抵押贷款期限、利率、PMI、房产税和总拥房成本。',
			ctaText: '试用抵押贷款计算器',
			sections: [
				{
					heading: '理解您的抵押贷款',
					text: '抵押贷款可能是您一生中最大的财务承诺，因此了解它的运作方式至关重要。我们的抵押贷款计算器帮助您根据房价、首付、利率和贷款期限确定月还款额。但抵押贷款不仅仅是本金和利息。您的总月住房成本通常包括房产税、房主保险，如果首付低于20%，还可能包括私人抵押贷款保险（PMI）。了解所有这些组成部分有助于您准确地为拥房预算。我们的计算器分解每个元素，让您确切地看到钱花在哪里，并对您真正能负担的房子做出明智的决定。'
				},
				{
					heading: '首付策略',
					text: '首付是您预先支付的房价部分，它显著影响您的抵押贷款。首付越大，借款越少，月还款额越低，贷款期限内支付的利息越少。支付20%或更多还可以免除私人抵押贷款保险（PMI），每月可节省数百美元。但是，支付更多意味着其他需求的现金减少。一些买家选择较小的首付（3-10%）来保留现金用于紧急情况、装修或可能获得更高回报的投资。使用我们的计算器比较不同的首付金额，看看它们如何影响您的月还款额和总利息成本。'
				},
				{
					heading: '选择贷款期限',
					text: '抵押贷款期限通常从15年到30年不等，30年抵押贷款最受欢迎。30年期限提供较低的月还款额，使拥房更容易获得，并为其他目标腾出现金。但是，您在贷款期限内支付的利息会显著增加。15年期限月还款额较高，但总利息少得多，并且更快地积累资产。一些贷款机构还提供20年或25年期限作为折中方案。考虑您的财务目标、月度预算以及您计划在房子里住多久。使用我们的计算器比较不同期限，查看月还款额和总成本之间的权衡。'
				},
				{
					heading: '利率和类型',
					text: '抵押贷款利率显著影响您的总成本。即使0.5%的差异也可能意味着30年贷款中数万美元的差异。固定利率抵押贷款在整个贷款期限内保持相同的利率，提供可预测的还款。可调利率抵押贷款（ARM）通常以较低的利率开始，可能在初始期后发生变化。如果您计划在利率调整前出售或再融资，ARM可能是合适的。在寻找抵押贷款时，比较多家贷款机构的利率，包括银行、信用合作社和在线贷款机构。还要考虑积分，这是可以降低利率的预付利息。我们的计算器帮助您了解不同利率如何影响您的还款和总成本。'
				},
				{
					heading: '拥房的隐藏成本',
					text: '您的抵押贷款还款只是拥房的一部分。房产税因地点而异，可能每月增加数百美元。房主保险是贷款机构要求的，保护您的投资。如果首付低于20%，您可能需要支付PMI直到达到20%的资产。除此之外，还要为维护（通常每年房屋价值的1-2%）、公用事业、适用的HOA费用和意外维修做预算。我们的计算器包括税收、保险和PMI的字段，让您更准确地了解真实的月住房成本。不要忘记过户费用，通常为贷款金额的2-5%，在购买时到期。'
				},
				{
					heading: '抵押贷款成功的技巧',
					text: '要获得最佳抵押贷款，首先在申请前提高您的信用评分，因为更高的分数可以获得更好的利率。为了减少借款成本并避免PMI，存一笔可观的首付。获得预批准以了解您的预算并加强您的报价。货比三家，至少比较三家贷款机构的利率和过户费用。考虑总成本，而不仅仅是月还款额。不要用尽预算；为意外支出和生活变化留出空间。最后，了解预资格（非正式估计）和预批准（验证的承诺）之间的区别。在整个购房过程中使用我们的抵押贷款计算器，对不同场景进行建模并做出自信的决定。'
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
		<a href="/{lang}/mortgage"
			class="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors">
			{t.ctaText}
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
			</svg>
		</a>
	</div>
</div>
