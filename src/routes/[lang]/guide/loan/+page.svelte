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
			title: 'Loan Calculator Guide',
			metaDesc: 'Complete guide to using the loan calculator. Learn about principal, interest rates, loan terms, monthly payments, and amortization schedules.',
			ctaText: 'Try Loan Calculator',
			sections: [
				{
					heading: 'Understanding Loan Basics',
					text: 'A loan calculator is an essential financial tool that helps you understand the true cost of borrowing money. Whether you\'re considering a personal loan, auto loan, or any other type of financing, understanding how loans work is crucial for making informed financial decisions. The basic components of any loan include the principal amount (the money you borrow), the interest rate (the cost of borrowing), and the loan term (how long you have to repay). Our calculator takes these inputs and shows you exactly what your monthly payment will be, how much total interest you\'ll pay, and how the loan amortizes over time. This transparency helps you compare different loan offers and choose the option that best fits your budget and financial goals.'
				},
				{
					heading: 'How Interest Rates Work',
					text: 'Interest rates are expressed as an annual percentage (APR) and determine how much extra you\'ll pay on top of the principal. There are two main types: fixed rates that stay the same throughout the loan term, and variable rates that can change based on market conditions. Fixed rates offer predictability, making budgeting easier since your payment never changes. Variable rates might start lower but carry the risk of increasing over time. When comparing loans, always look at the APR rather than just the nominal interest rate, as APR includes fees and gives you a true picture of the borrowing cost. Even a small difference in interest rate can mean thousands of dollars over the life of a loan, so it pays to shop around and negotiate for the best rate possible.'
				},
				{
					heading: 'Principal and Loan Terms',
					text: 'The principal is the original amount you borrow, and the loan term is how long you have to pay it back. These two factors work together with the interest rate to determine your monthly payment. Shorter loan terms mean higher monthly payments but less total interest paid over the life of the loan. Longer terms reduce monthly payments but increase the total cost due to more interest accumulation. For example, a 5-year auto loan will have higher payments than a 7-year loan, but you\'ll pay significantly less in total interest. When deciding on a loan term, balance your monthly budget constraints with your desire to minimize total borrowing costs. Our calculator lets you experiment with different terms to find the sweet spot for your situation.'
				},
				{
					heading: 'Monthly Payment Breakdown',
					text: 'Your monthly loan payment consists of two parts: principal repayment and interest charges. In the early stages of a loan, most of your payment goes toward interest. As time passes, more of your payment goes toward principal. This is called amortization. Understanding this breakdown is important because if you make extra payments, you can specify that they go toward principal, which reduces your total interest and can shorten your loan term. Our calculator shows you exactly how much of each payment goes to principal versus interest, and how this ratio changes over the life of your loan. This knowledge empowers you to develop strategies for paying off your loan faster if that aligns with your financial goals.'
				},
				{
					heading: 'Comparing Loan Options',
					text: 'When shopping for a loan, you\'ll likely encounter multiple offers with different combinations of rates, terms, and fees. Our calculator helps you compare these options apples-to-apples by showing the total cost of each loan. Don\'t just look at the monthly payment; a lower monthly payment with a longer term often means paying more total interest. Consider the total cost of the loan, including any origination fees, prepayment penalties, or other charges. Also consider your financial situation: can you comfortably afford the higher payment of a shorter-term loan? Would you benefit from the flexibility of a longer term? Use our calculator to run multiple scenarios and find the loan structure that best balances your immediate cash flow needs with your long-term financial health.'
				},
				{
					heading: 'Tips for Getting the Best Loan',
					text: 'To secure the best loan terms, start by checking and improving your credit score before applying. Lenders offer their best rates to borrowers with excellent credit. Shop around and get quotes from multiple lenders, including banks, credit unions, and online lenders. Don\'t be afraid to negotiate; lenders often have flexibility, especially for well-qualified borrowers. Consider making a larger down payment to reduce the amount you need to borrow. Read the fine print carefully, looking for prepayment penalties or other hidden costs. Finally, time your loan application wisely; rates can vary based on economic conditions. Use our loan calculator throughout this process to understand exactly what different offers will cost you over time, ensuring you make the most financially sound decision.'
				}
			]
		},
		ko: {
			title: '대출 계산기 가이드',
			metaDesc: '대출 계산기 사용에 대한 완벽한 가이드. 원금, 이자율, 대출 기간, 월 상환액, 상환 일정에 대해 알아보세요.',
			ctaText: '대출 계산기 사용하기',
			sections: [
				{
					heading: '대출 기본 이해하기',
					text: '대출 계산기는 돈을 빌리는 실제 비용을 이해하는 데 도움이 되는 필수적인 금융 도구입니다. 개인 대출, 자동차 대출 또는 기타 유형의 금융을 고려하든 대출이 어떻게 작동하는지 이해하는 것은 현명한 재정 결정을 내리는 데 중요합니다. 모든 대출의 기본 구성 요소에는 원금(빌리는 돈), 이자율(빌리는 비용), 대출 기간(상환 기간)이 포함됩니다. 저희 계산기는 이러한 입력을 받아 월 상환액이 얼마인지, 총 이자를 얼마나 내는지, 시간이 지남에 따라 대출이 어떻게 상환되는지 정확히 보여줍니다. 이러한 투명성은 다양한 대출 제안을 비교하고 예산과 재정 목표에 가장 적합한 옵션을 선택하는 데 도움이 됩니다.'
				},
				{
					heading: '이자율 작동 방식',
					text: '이자율은 연간 백분율(APR)로 표시되며 원금 외에 추가로 얼마를 지불하는지 결정합니다. 두 가지 주요 유형이 있습니다: 대출 기간 동안 동일하게 유지되는 고정금리와 시장 상황에 따라 변할 수 있는 변동금리입니다. 고정금리는 상환액이 변하지 않으므로 예산 책정이 쉬워 예측 가능성을 제공합니다. 변동금리는 처음에는 낮을 수 있지만 시간이 지남에 따라 증가할 위험이 있습니다. 대출을 비교할 때 명목 이자율뿐만 아니라 항상 APR을 확인하세요. APR에는 수수료가 포함되어 있어 대출 비용의 실제 그림을 제공합니다. 이자율의 작은 차이도 대출 기간 동안 수천 달러를 의미할 수 있으므로 최상의 금리를 위해 여러 곳을 비교하고 협상하는 것이 좋습니다.'
				},
				{
					heading: '원금과 대출 기간',
					text: '원금은 빌리는 원래 금액이고, 대출 기간은 상환하는 데 걸리는 시간입니다. 이 두 요소는 이자율과 함께 작용하여 월 상환액을 결정합니다. 대출 기간이 짧을수록 월 상환액은 높지만 대출 기간 동안 지불하는 총 이자는 적습니다. 기간이 길면 월 상환액은 줄어들지만 이자 누적이 더 많아 총 비용이 증가합니다. 예를 들어, 5년 자동차 대출은 7년 대출보다 상환액이 높지만 총 이자는 훨씬 적게 지불합니다. 대출 기간을 결정할 때 월별 예산 제약과 총 대출 비용을 최소화하려는 욕구의 균형을 맞추세요. 저희 계산기를 사용하면 다양한 기간을 실험하여 상황에 맞는 최적의 조건을 찾을 수 있습니다.'
				},
				{
					heading: '월 상환액 분석',
					text: '월 대출 상환액은 두 부분으로 구성됩니다: 원금 상환과 이자 비용. 대출 초기에는 상환액의 대부분이 이자로 갑니다. 시간이 지남에 따라 상환액의 더 많은 부분이 원금으로 갑니다. 이것을 상환이라고 합니다. 이 분석을 이해하는 것은 중요합니다. 추가 상환을 하면 원금에 적용하도록 지정할 수 있어 총 이자를 줄이고 대출 기간을 단축할 수 있기 때문입니다. 저희 계산기는 각 상환액 중 원금 대 이자로 얼마가 가는지, 이 비율이 대출 기간 동안 어떻게 변하는지 정확히 보여줍니다. 이 지식을 통해 재정 목표에 맞는 경우 대출을 더 빨리 상환하기 위한 전략을 개발할 수 있습니다.'
				},
				{
					heading: '대출 옵션 비교하기',
					text: '대출을 찾을 때 금리, 기간, 수수료의 다양한 조합으로 여러 제안을 접하게 될 것입니다. 저희 계산기는 각 대출의 총 비용을 보여줌으로써 이러한 옵션을 동등하게 비교하는 데 도움이 됩니다. 월 상환액만 보지 마세요. 기간이 긴 낮은 월 상환액은 종종 더 많은 총 이자를 지불하는 것을 의미합니다. 개설 수수료, 조기 상환 위약금 또는 기타 비용을 포함한 대출의 총 비용을 고려하세요. 또한 재정 상황을 고려하세요: 단기 대출의 높은 상환액을 편안하게 감당할 수 있나요? 장기의 유연성으로 이익을 얻을 수 있나요? 저희 계산기를 사용하여 여러 시나리오를 실행하고 즉각적인 현금 흐름 요구와 장기적인 재정 건강의 균형을 가장 잘 맞추는 대출 구조를 찾으세요.'
				},
				{
					heading: '최고의 대출을 받기 위한 팁',
					text: '최상의 대출 조건을 확보하려면 신청 전에 신용 점수를 확인하고 개선하는 것부터 시작하세요. 대출 기관은 우수한 신용을 가진 차용인에게 최고의 금리를 제공합니다. 여러 곳을 둘러보고 은행, 신용협동조합, 온라인 대출 기관을 포함한 여러 대출 기관에서 견적을 받으세요. 협상을 두려워하지 마세요. 대출 기관은 특히 자격을 갖춘 차용인에게 유연성이 있는 경우가 많습니다. 빌려야 하는 금액을 줄이기 위해 더 큰 계약금을 고려하세요. 조기 상환 위약금이나 기타 숨겨진 비용을 찾아 세부 사항을 주의 깊게 읽으세요. 마지막으로, 대출 신청 시기를 현명하게 정하세요. 금리는 경제 상황에 따라 다를 수 있습니다. 이 과정 전반에 걸쳐 저희 대출 계산기를 사용하여 다양한 제안이 시간이 지남에 따라 얼마나 비용이 들지 정확히 이해하고 가장 재정적으로 건전한 결정을 내리세요.'
				}
			]
		},
		ja: {
			title: 'ローン計算機ガイド',
			metaDesc: 'ローン計算機の使用に関する完全ガイド。元金、金利、ローン期間、月々の支払い、返済スケジュールについて学びます。',
			ctaText: 'ローン計算機を試す',
			sections: [
				{
					heading: 'ローンの基本を理解する',
					text: 'ローン計算機は、お金を借りる本当のコストを理解するのに役立つ重要な金融ツールです。個人ローン、自動車ローン、またはその他の種類の融資を検討している場合でも、ローンの仕組みを理解することは、賢明な財務決定を下すために重要です。すべてのローンの基本的な構成要素には、元金（借りるお金）、金利（借りるコスト）、ローン期間（返済期間）が含まれます。当社の計算機はこれらの入力を受け取り、月々の支払い額、支払う総利息額、時間の経過とともにローンがどのように償却されるかを正確に示します。この透明性により、さまざまなローンオファーを比較し、予算と財務目標に最も適したオプションを選択できます。'
				},
				{
					heading: '金利の仕組み',
					text: '金利は年率（APR）で表され、元金に加えていくら余分に支払うかを決定します。主に2種類あります：ローン期間中同じままの固定金利と、市場状況に応じて変化する変動金利です。固定金利は支払いが変わらないため、予算管理が容易で予測可能性を提供します。変動金利は最初は低いかもしれませんが、時間とともに上昇するリスクがあります。ローンを比較する際は、名目金利だけでなく常にAPRを確認してください。APRには手数料が含まれており、借入コストの真の姿を示します。金利のわずかな違いでも、ローン期間を通じて数千ドルの差になる可能性があるため、複数を比較して最良の金利を交渉することが重要です。'
				},
				{
					heading: '元金とローン期間',
					text: '元金は借りる元の金額で、ローン期間は返済にかかる時間です。これら2つの要素は金利と連動して月々の支払いを決定します。ローン期間が短いほど月々の支払いは高くなりますが、ローン期間中に支払う総利息は少なくなります。期間が長いと月々の支払いは減りますが、利息の蓄積が増えるため総コストは増加します。例えば、5年の自動車ローンは7年ローンより支払いが高くなりますが、総利息ははるかに少なくなります。ローン期間を決める際は、月々の予算制約と総借入コストを最小化したい願望のバランスを取ってください。当社の計算機では、さまざまな期間を試して、あなたの状況に最適な条件を見つけることができます。'
				},
				{
					heading: '月々の支払い内訳',
					text: '月々のローン支払いは、元金返済と利息の2つの部分で構成されています。ローンの初期段階では、支払いのほとんどが利息に充てられます。時間が経つにつれて、支払いのより多くの部分が元金に充てられます。これを償却と呼びます。この内訳を理解することは重要です。追加支払いをする場合、元金に充てるよう指定でき、総利息を減らしてローン期間を短縮できるからです。当社の計算機は、各支払いのうち元金対利息にいくら充てられるか、この比率がローン期間中にどのように変化するかを正確に示します。この知識により、財務目標に合致する場合、ローンをより早く返済する戦略を立てることができます。'
				},
				{
					heading: 'ローンオプションの比較',
					text: 'ローンを探すとき、金利、期間、手数料のさまざまな組み合わせで複数のオファーに出会うでしょう。当社の計算機は、各ローンの総コストを示すことで、これらのオプションを公平に比較するのに役立ちます。月々の支払いだけを見ないでください。期間が長い低い月々の支払いは、多くの場合、より多くの総利息を支払うことを意味します。開設手数料、繰上返済ペナルティ、その他の費用を含むローンの総コストを考慮してください。また、財務状況を考慮してください：短期ローンの高い支払いを快適に負担できますか？長期の柔軟性から恩恵を受けられますか？当社の計算機を使用して複数のシナリオを実行し、即座のキャッシュフローのニーズと長期的な財務健全性のバランスが最も良いローン構造を見つけてください。'
				},
				{
					heading: '最良のローンを得るためのヒント',
					text: '最良のローン条件を確保するには、申請前に信用スコアを確認し改善することから始めてください。貸し手は優れた信用を持つ借り手に最良の金利を提供します。複数を比較して、銀行、信用組合、オンライン貸し手を含む複数の貸し手から見積もりを取得してください。交渉を恐れないでください。貸し手は特に資格のある借り手に対して柔軟性があることが多いです。借りる必要のある金額を減らすために、より大きな頭金を検討してください。繰上返済ペナルティやその他の隠れたコストを探して、細かい字を注意深く読んでください。最後に、ローン申請のタイミングを賢く選んでください。金利は経済状況によって変わる可能性があります。このプロセス全体を通じて当社のローン計算機を使用して、さまざまなオファーが時間とともにいくらかかるかを正確に理解し、最も財務的に健全な決定を下してください。'
				}
			]
		},
		zh: {
			title: '贷款计算器指南',
			metaDesc: '使用贷款计算器的完整指南。了解本金、利率、贷款期限、月还款额和摊还计划。',
			ctaText: '试用贷款计算器',
			sections: [
				{
					heading: '理解贷款基础',
					text: '贷款计算器是一个重要的金融工具，可帮助您了解借钱的真实成本。无论您是考虑个人贷款、汽车贷款还是任何其他类型的融资，了解贷款的运作方式对于做出明智的财务决策至关重要。任何贷款的基本组成部分包括本金（您借的钱）、利率（借款成本）和贷款期限（您需要多长时间偿还）。我们的计算器接受这些输入，并准确显示您的月还款额、您将支付的总利息以及贷款如何随时间摊销。这种透明度可帮助您比较不同的贷款报价，并选择最适合您预算和财务目标的选项。'
				},
				{
					heading: '利率如何运作',
					text: '利率以年百分比（APR）表示，决定您在本金之外需要额外支付多少。主要有两种类型：在整个贷款期限内保持不变的固定利率，以及可能根据市场条件变化的浮动利率。固定利率提供可预测性，使预算更容易，因为您的还款永远不会改变。浮动利率可能开始较低，但有随时间增加的风险。比较贷款时，始终查看APR而不仅仅是名义利率，因为APR包括费用，让您了解借款成本的真实情况。即使利率的微小差异也可能意味着贷款期限内数千美元的差异，因此值得货比三家并协商获得最佳利率。'
				},
				{
					heading: '本金和贷款期限',
					text: '本金是您借的原始金额，贷款期限是您偿还的时间。这两个因素与利率一起决定您的月还款额。贷款期限越短，月还款额越高，但在贷款期限内支付的总利息越少。期限越长，月还款额越低，但由于利息累积更多，总成本增加。例如，5年汽车贷款的还款额将高于7年贷款，但您支付的总利息将大大减少。在决定贷款期限时，平衡您的月度预算限制和最小化总借款成本的愿望。我们的计算器让您可以尝试不同的期限，找到适合您情况的最佳条件。'
				},
				{
					heading: '月还款额分解',
					text: '您的月贷款还款由两部分组成：本金偿还和利息费用。在贷款的早期阶段，您的大部分还款都用于利息。随着时间的推移，您的更多还款用于本金。这称为摊销。理解这种分解很重要，因为如果您进行额外还款，您可以指定它们用于本金，这会减少您的总利息并可以缩短贷款期限。我们的计算器准确显示每次还款中有多少用于本金与利息，以及这个比例在贷款期限内如何变化。这些知识使您能够制定策略，如果符合您的财务目标，可以更快地还清贷款。'
				},
				{
					heading: '比较贷款选项',
					text: '在寻找贷款时，您可能会遇到具有不同利率、期限和费用组合的多个报价。我们的计算器通过显示每笔贷款的总成本来帮助您进行同等比较。不要只看月还款额；期限较长的较低月还款额通常意味着支付更多的总利息。考虑贷款的总成本，包括任何发起费、提前还款罚款或其他费用。还要考虑您的财务状况：您能舒适地负担短期贷款的较高还款吗？您会从长期的灵活性中受益吗？使用我们的计算器运行多个场景，找到最能平衡您即时现金流需求和长期财务健康的贷款结构。'
				},
				{
					heading: '获得最佳贷款的技巧',
					text: '要获得最佳贷款条件，首先在申请前检查并提高您的信用评分。贷款人向信用优秀的借款人提供最佳利率。货比三家，从多家贷款机构获取报价，包括银行、信用合作社和在线贷款机构。不要害怕谈判；贷款人通常有灵活性，特别是对于资质良好的借款人。考虑支付更大的首付以减少需要借的金额。仔细阅读细则，寻找提前还款罚款或其他隐藏成本。最后，明智地选择贷款申请时机；利率可能会根据经济状况而变化。在整个过程中使用我们的贷款计算器，准确了解不同报价随时间的成本，确保您做出最明智的财务决策。'
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
		<a href="/{lang}/loan"
			class="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors">
			{t.ctaText}
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
			</svg>
		</a>
	</div>
</div>
