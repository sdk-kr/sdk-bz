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
			title: 'Retirement Planning Guide',
			metaDesc: 'Complete guide to retirement planning. Learn about savings goals, withdrawal rates, inflation adjustments, Social Security, and how to calculate retirement readiness.',
			ctaText: 'Try Retirement Calculator',
			sections: [
				{
					heading: 'Starting Your Retirement Plan',
					text: 'Retirement planning is one of the most important financial exercises you\'ll undertake, and the earlier you start, the better positioned you\'ll be for a comfortable retirement. Our retirement calculator helps you determine how much you need to save, how your investments will grow, and whether you\'re on track to meet your retirement goals. The key inputs include your current age, desired retirement age, current savings, monthly contributions, expected rate of return, and estimated retirement expenses. Understanding these variables and how they interact is crucial for creating a realistic retirement plan. Don\'t let the complexity discourage you; even a basic plan is better than no plan, and you can refine it as your situation evolves.'
				},
				{
					heading: 'Setting Retirement Savings Goals',
					text: 'How much do you need to retire? A common rule of thumb is to aim for 70-80% of your pre-retirement income, though your actual needs depend on your lifestyle plans. Some retirees spend more in early retirement (travel, hobbies) and less later, while others have consistent expenses. Consider your expected sources of income: Social Security, pensions, rental income, and investment withdrawals. Then calculate the gap your personal savings must fill. A popular guideline is the 25x rule: save 25 times your expected annual expenses. If you plan to spend $50,000 per year in retirement, aim for $1.25 million in savings. Our calculator helps you model different scenarios and adjust your savings strategy accordingly.'
				},
				{
					heading: 'The 4% Withdrawal Rule',
					text: 'The 4% rule is a widely-cited guideline suggesting you can withdraw 4% of your retirement savings in the first year, then adjust for inflation each subsequent year, with a high probability of not running out of money over 30 years. For example, with $1 million saved, you could withdraw $40,000 in year one. However, this rule has limitations. It was developed based on historical U.S. market returns and may not apply in all economic conditions. Some financial planners now suggest 3-3.5% for more conservative planning, especially given longer life expectancies and potential for lower future returns. Use our calculator to test different withdrawal rates and see how they affect your retirement runway.'
				},
				{
					heading: 'Accounting for Inflation',
					text: 'Inflation is a silent retirement killer that many people underestimate. Even modest 3% annual inflation cuts your purchasing power in half over 24 years. If you need $50,000 today to maintain your lifestyle, you\'ll need about $100,000 in 24 years to buy the same things. This is why retirement planning must account for inflation in both the accumulation phase (while saving) and the distribution phase (while withdrawing). Our calculator factors in inflation to give you a realistic picture of your future needs. Consider investments that historically outpace inflation, like stocks, while balancing risk appropriately as you near retirement.'
				},
				{
					heading: 'Social Security and Pensions',
					text: 'For many retirees, Social Security provides a significant portion of retirement income. Understanding your expected benefits helps you determine how much personal savings you need. You can estimate your benefits at ssa.gov. Remember, you can claim as early as 62 (with reduced benefits) or delay until 70 (for increased benefits). The optimal claiming age depends on your health, other income sources, and financial needs. If you have a pension, understand its terms: is it inflation-adjusted? Does it include survivor benefits? Our calculator lets you input expected Social Security and pension income to see how these guaranteed income sources reduce the burden on your personal savings.'
				},
				{
					heading: 'Creating Your Action Plan',
					text: 'Once you\'ve calculated your retirement needs, create an actionable plan. First, maximize tax-advantaged accounts like 401(k)s and IRAs. Take full advantage of any employer match; it\'s free money. Increase contributions whenever possible, especially after raises. Diversify your investments appropriately for your age and risk tolerance. Regularly review and rebalance your portfolio. Don\'t forget healthcare costs, which can be substantial in retirement. Consider a Health Savings Account (HSA) if eligible. Use our retirement calculator annually to track your progress and adjust as needed. Small changes now compound dramatically over decades, so start today and stay consistent.'
				}
			]
		},
		ko: {
			title: '은퇴 계획 가이드',
			metaDesc: '은퇴 계획에 대한 완벽한 가이드. 저축 목표, 인출율, 인플레이션 조정, 사회 보장, 은퇴 준비도 계산 방법에 대해 알아보세요.',
			ctaText: '은퇴 계산기 사용하기',
			sections: [
				{
					heading: '은퇴 계획 시작하기',
					text: '은퇴 계획은 여러분이 수행하게 될 가장 중요한 재정 활동 중 하나이며, 일찍 시작할수록 편안한 은퇴를 위해 더 좋은 위치에 있게 됩니다. 저희 은퇴 계산기는 얼마나 저축해야 하는지, 투자가 어떻게 성장하는지, 은퇴 목표를 달성하기 위해 순조롭게 진행되고 있는지 결정하는 데 도움이 됩니다. 주요 입력 사항에는 현재 나이, 원하는 은퇴 나이, 현재 저축액, 월 기여금, 예상 수익률, 예상 은퇴 비용이 포함됩니다. 이러한 변수와 상호 작용 방식을 이해하는 것은 현실적인 은퇴 계획을 세우는 데 중요합니다. 복잡함에 낙담하지 마세요. 기본 계획이라도 계획이 없는 것보다 낫고, 상황이 변함에 따라 수정할 수 있습니다.'
				},
				{
					heading: '은퇴 저축 목표 설정',
					text: '은퇴하려면 얼마가 필요할까요? 일반적인 경험 법칙은 은퇴 전 소득의 70-80%를 목표로 하는 것이지만, 실제 필요한 금액은 라이프스타일 계획에 따라 다릅니다. 일부 은퇴자는 초기 은퇴 시(여행, 취미) 더 많이 쓰고 나중에 덜 쓰는 반면, 다른 사람들은 일정한 지출을 합니다. 예상 수입원을 고려하세요: 사회 보장, 연금, 임대 수입, 투자 인출. 그런 다음 개인 저축이 채워야 할 격차를 계산하세요. 인기 있는 지침은 25배 규칙입니다: 예상 연간 지출의 25배를 저축하세요. 은퇴 후 연간 $50,000를 쓸 계획이라면 저축 목표는 $125만입니다. 저희 계산기는 다양한 시나리오를 모델링하고 그에 따라 저축 전략을 조정하는 데 도움이 됩니다.'
				},
				{
					heading: '4% 인출 규칙',
					text: '4% 규칙은 첫해에 은퇴 저축의 4%를 인출한 다음 매년 인플레이션을 조정하면 30년 동안 돈이 바닥나지 않을 확률이 높다는 널리 인용되는 지침입니다. 예를 들어, $100만을 저축하면 첫해에 $40,000를 인출할 수 있습니다. 그러나 이 규칙에는 한계가 있습니다. 미국 시장의 역사적 수익률을 기반으로 개발되었으며 모든 경제 상황에 적용되지 않을 수 있습니다. 일부 재정 계획가들은 특히 더 긴 기대 수명과 미래 수익률이 낮아질 가능성을 고려하여 보다 보수적인 계획을 위해 3-3.5%를 제안합니다. 저희 계산기를 사용하여 다양한 인출률을 테스트하고 은퇴 자금이 얼마나 지속되는지 확인하세요.'
				},
				{
					heading: '인플레이션 고려하기',
					text: '인플레이션은 많은 사람들이 과소평가하는 조용한 은퇴 킬러입니다. 연간 3%의 적당한 인플레이션도 24년 동안 구매력을 절반으로 줄입니다. 오늘 생활을 유지하기 위해 $50,000가 필요하다면 24년 후에는 같은 것을 사기 위해 약 $100,000가 필요합니다. 이것이 은퇴 계획이 축적 단계(저축하는 동안)와 분배 단계(인출하는 동안) 모두에서 인플레이션을 고려해야 하는 이유입니다. 저희 계산기는 인플레이션을 고려하여 미래 필요에 대한 현실적인 그림을 제공합니다. 은퇴가 가까워지면 위험을 적절히 균형 잡으면서 역사적으로 인플레이션을 앞지르는 주식과 같은 투자를 고려하세요.'
				},
				{
					heading: '사회 보장과 연금',
					text: '많은 은퇴자들에게 사회 보장은 은퇴 소득의 상당 부분을 제공합니다. 예상 혜택을 이해하면 얼마나 많은 개인 저축이 필요한지 결정하는 데 도움이 됩니다. ssa.gov에서 혜택을 추정할 수 있습니다. 62세에 일찍 청구하거나(혜택 감소) 70세까지 연기(혜택 증가)할 수 있다는 것을 기억하세요. 최적의 청구 연령은 건강, 기타 수입원, 재정적 필요에 따라 다릅니다. 연금이 있다면 조건을 이해하세요: 인플레이션 조정이 되나요? 유족 혜택이 포함되어 있나요? 저희 계산기를 사용하면 예상 사회 보장 및 연금 수입을 입력하여 이러한 보장된 수입원이 개인 저축 부담을 얼마나 줄이는지 확인할 수 있습니다.'
				},
				{
					heading: '실행 계획 만들기',
					text: '은퇴 필요 자금을 계산했다면 실행 가능한 계획을 세우세요. 먼저 401(k) 및 IRA와 같은 세금 우대 계좌를 최대화하세요. 고용주 매칭을 최대한 활용하세요. 공짜 돈입니다. 특히 급여 인상 후 가능할 때마다 기여금을 늘리세요. 나이와 위험 허용 범위에 적합하게 투자를 다각화하세요. 정기적으로 포트폴리오를 검토하고 리밸런싱하세요. 은퇴 시 상당할 수 있는 의료 비용을 잊지 마세요. 자격이 되면 건강 저축 계좌(HSA)를 고려하세요. 저희 은퇴 계산기를 매년 사용하여 진행 상황을 추적하고 필요에 따라 조정하세요. 지금 작은 변화가 수십 년에 걸쳐 극적으로 복리되므로 오늘 시작하고 일관성을 유지하세요.'
				}
			]
		},
		ja: {
			title: '退職計画ガイド',
			metaDesc: '退職計画の完全ガイド。貯蓄目標、引き出し率、インフレ調整、社会保障、退職準備度の計算方法について学びます。',
			ctaText: '退職計算機を試す',
			sections: [
				{
					heading: '退職計画を始める',
					text: '退職計画は、あなたが行う最も重要な財務活動の1つであり、早く始めるほど、快適な退職のための準備が整います。当社の退職計算機は、いくら貯蓄する必要があるか、投資がどのように成長するか、退職目標を達成するための軌道に乗っているかを判断するのに役立ちます。主な入力項目には、現在の年齢、希望退職年齢、現在の貯蓄、毎月の拠出、予想収益率、推定退職費用が含まれます。これらの変数とその相互作用を理解することは、現実的な退職計画を作成するために重要です。複雑さに落胆しないでください。基本的な計画でも計画がないよりはましで、状況が変化するにつれて調整できます。'
				},
				{
					heading: '退職貯蓄目標の設定',
					text: '退職にはいくら必要ですか？一般的な経験則は、退職前の収入の70〜80%を目指すことですが、実際のニーズはライフスタイルの計画によって異なります。一部の退職者は退職初期（旅行、趣味）に多く使い、後で少なくなりますが、一定の支出を持つ人もいます。予想される収入源を考慮してください：社会保障、年金、賃貸収入、投資引き出し。次に、個人貯蓄が埋める必要があるギャップを計算します。人気のあるガイドラインは25倍ルールです：予想年間支出の25倍を貯蓄します。退職後年間$50,000を使う予定なら、$125万の貯蓄を目指してください。当社の計算機は、さまざまなシナリオをモデル化し、それに応じて貯蓄戦略を調整するのに役立ちます。'
				},
				{
					heading: '4%引き出しルール',
					text: '4%ルールは、退職貯蓄の4%を初年度に引き出し、その後毎年インフレ調整を行えば、30年間お金が尽きない可能性が高いという広く引用されるガイドラインです。例えば、$100万を貯蓄していれば、初年度に$40,000を引き出せます。ただし、このルールには制限があります。米国市場の歴史的リターンに基づいて開発されており、すべての経済状況に当てはまるわけではありません。一部のファイナンシャルプランナーは、特に長い平均寿命と将来の低リターンの可能性を考慮して、より保守的な計画のために3〜3.5%を提案しています。当社の計算機を使用して、さまざまな引き出し率をテストし、退職資金がどれくらい持続するかを確認してください。'
				},
				{
					heading: 'インフレの考慮',
					text: 'インフレは、多くの人が過小評価している静かな退職キラーです。年間3%の穏やかなインフレでも、24年で購買力は半分になります。今日のライフスタイルを維持するために$50,000が必要な場合、24年後には同じものを買うために約$100,000が必要になります。これが、退職計画が蓄積段階（貯蓄中）と分配段階（引き出し中）の両方でインフレを考慮する必要がある理由です。当社の計算機はインフレを考慮して、将来のニーズの現実的な画像を提供します。退職が近づくにつれてリスクを適切にバランスさせながら、歴史的にインフレを上回る株式などの投資を検討してください。'
				},
				{
					heading: '社会保障と年金',
					text: '多くの退職者にとって、社会保障は退職収入の大部分を提供します。予想される給付を理解することで、個人貯蓄がどれだけ必要かを判断できます。ssa.govで給付を見積もることができます。62歳で早期請求（給付減額）または70歳まで延期（給付増額）できることを忘れないでください。最適な請求年齢は、健康状態、他の収入源、財務ニーズによって異なります。年金がある場合は、その条件を理解してください：インフレ調整されますか？遺族給付は含まれていますか？当社の計算機では、予想される社会保障と年金収入を入力して、これらの保証された収入源が個人貯蓄の負担をどれだけ軽減するかを確認できます。'
				},
				{
					heading: '行動計画の作成',
					text: '退職に必要な資金を計算したら、実行可能な計画を作成してください。まず、401(k)やIRAなどの税制優遇口座を最大限に活用してください。雇用主のマッチングを最大限に活用してください。それは無料のお金です。特に昇給後、可能な限り拠出を増やしてください。年齢とリスク許容度に適した投資を分散させてください。定期的にポートフォリオを見直し、リバランスしてください。退職時にかなりの額になる可能性がある医療費を忘れないでください。資格がある場合は、健康貯蓄口座（HSA）を検討してください。当社の退職計算機を毎年使用して進捗を追跡し、必要に応じて調整してください。今の小さな変化が数十年にわたって劇的に複利するので、今日から始めて一貫性を保ってください。'
				}
			]
		},
		zh: {
			title: '退休规划指南',
			metaDesc: '退休规划完整指南。了解储蓄目标、提取率、通胀调整、社会保障以及如何计算退休准备程度。',
			ctaText: '试用退休计算器',
			sections: [
				{
					heading: '开始您的退休计划',
					text: '退休规划是您将进行的最重要的财务活动之一，开始得越早，为舒适退休做好准备的位置就越好。我们的退休计算器帮助您确定需要储蓄多少、投资如何增长以及是否在实现退休目标的轨道上。主要输入包括您当前的年龄、期望的退休年龄、当前储蓄、每月供款、预期回报率和估计的退休费用。理解这些变量及其相互作用对于制定现实的退休计划至关重要。不要因复杂性而气馁；即使是基本计划也比没有计划好，您可以随着情况的变化进行调整。'
				},
				{
					heading: '设定退休储蓄目标',
					text: '退休需要多少钱？一般经验法则是目标为退休前收入的70-80%，尽管您的实际需求取决于您的生活方式计划。一些退休人员在退休初期花费更多（旅行、爱好），之后花费更少，而其他人则有稳定的支出。考虑您预期的收入来源：社会保障、养老金、租金收入和投资提取。然后计算您的个人储蓄必须填补的差距。一个流行的准则是25倍法则：储蓄预期年度支出的25倍。如果您计划退休后每年花费50,000美元，目标是125万美元的储蓄。我们的计算器帮助您模拟不同的场景并相应调整您的储蓄策略。'
				},
				{
					heading: '4%提取规则',
					text: '4%规则是一个广泛引用的准则，建议您可以在第一年提取退休储蓄的4%，然后每年根据通货膨胀调整，这样30年内不会用完钱的可能性很高。例如，储蓄100万美元，第一年可以提取40,000美元。但是，这个规则有局限性。它是基于美国市场的历史回报开发的，可能不适用于所有经济条件。一些财务规划师现在建议3-3.5%以进行更保守的规划，特别是考虑到更长的预期寿命和未来可能较低的回报。使用我们的计算器测试不同的提取率，看看它们如何影响您的退休资金持续时间。'
				},
				{
					heading: '考虑通货膨胀',
					text: '通货膨胀是许多人低估的沉默退休杀手。即使每年3%的温和通胀也会在24年内将您的购买力减半。如果您今天需要50,000美元来维持生活方式，24年后您将需要大约100,000美元来购买相同的东西。这就是为什么退休规划必须在积累阶段（储蓄时）和分配阶段（提取时）都考虑通货膨胀。我们的计算器考虑通货膨胀，为您提供未来需求的现实图景。考虑历史上跑赢通胀的投资，如股票，同时在接近退休时适当平衡风险。'
				},
				{
					heading: '社会保障和养老金',
					text: '对于许多退休人员来说，社会保障提供了退休收入的很大一部分。了解您的预期福利有助于您确定需要多少个人储蓄。您可以在ssa.gov估算您的福利。记住，您可以在62岁时提前领取（福利减少）或延迟到70岁（福利增加）。最佳领取年龄取决于您的健康状况、其他收入来源和财务需求。如果您有养老金，了解其条款：是否调整通胀？是否包括遗属福利？我们的计算器允许您输入预期的社会保障和养老金收入，以查看这些有保障的收入来源如何减轻您个人储蓄的负担。'
				},
				{
					heading: '制定行动计划',
					text: '一旦计算出退休需求，就制定可行的计划。首先，最大化401(k)和IRA等税收优惠账户。充分利用任何雇主匹配；这是免费的钱。尽可能增加供款，特别是在加薪后。根据您的年龄和风险承受能力适当分散投资。定期审查和重新平衡您的投资组合。不要忘记医疗费用，这在退休时可能相当可观。如果符合条件，考虑健康储蓄账户（HSA）。每年使用我们的退休计算器跟踪进度并根据需要调整。现在的小变化在几十年内会产生巨大的复利效应，所以今天就开始并保持一致。'
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
		<a href="/{lang}/retirement"
			class="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors">
			{t.ctaText}
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
			</svg>
		</a>
	</div>
</div>
