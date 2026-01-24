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
			title: 'Compound Interest Guide',
			metaDesc: 'Complete guide to understanding compound interest. Learn about compounding frequency, APY vs APR, investment growth, and the power of time in building wealth.',
			ctaText: 'Try Compound Interest Calculator',
			sections: [
				{
					heading: 'The Power of Compound Interest',
					text: 'Compound interest is often called the eighth wonder of the world, and for good reason. Unlike simple interest, which is calculated only on the principal amount, compound interest is calculated on both the principal and the accumulated interest from previous periods. This creates a snowball effect where your money grows exponentially over time. Albert Einstein reportedly said that compound interest is the most powerful force in the universe. Whether you\'re saving for retirement, building an emergency fund, or investing for long-term goals, understanding compound interest is essential for maximizing your wealth-building potential. Our calculator helps you visualize exactly how your money will grow over time with different interest rates and compounding frequencies.'
				},
				{
					heading: 'Understanding Compounding Frequency',
					text: 'The frequency at which interest compounds significantly impacts your returns. Common compounding frequencies include annually, semi-annually, quarterly, monthly, weekly, and even daily. The more frequently interest compounds, the more you earn. For example, $10,000 at 5% interest compounded annually becomes $10,500 after one year. But the same amount compounded monthly becomes $10,512. While the difference seems small in one year, over decades it becomes substantial. This is why it\'s important to understand the compounding frequency when comparing investment options. Our calculator lets you experiment with different frequencies to see exactly how they affect your long-term growth. Always look for investments with more frequent compounding when other factors are equal.'
				},
				{
					heading: 'APY vs APR Explained',
					text: 'APR (Annual Percentage Rate) and APY (Annual Percentage Yield) are related but different concepts that often confuse investors. APR is the simple interest rate without accounting for compounding, while APY reflects the total amount of interest you\'ll actually earn in a year, including the effects of compounding. APY is always equal to or higher than APR. For example, an account with 5% APR compounded monthly has an APY of approximately 5.12%. When comparing savings accounts or investments, always compare APY to APY for an accurate picture. Banks often advertise APY for savings accounts (to show higher returns) and APR for loans (to show lower costs). Understanding this distinction helps you make better financial decisions and avoid being misled by marketing.'
				},
				{
					heading: 'The Time Factor in Wealth Building',
					text: 'Time is the most powerful factor in compound interest. The longer your money compounds, the more dramatic the growth. This is why starting early is so crucial for building wealth. Consider this: if you invest $200 per month starting at age 25 with 7% annual returns, you\'ll have over $520,000 by age 65. If you wait until 35 to start, you\'ll only have about $244,000 despite investing the same monthly amount. The 10-year head start nearly doubles your final wealth. This principle, known as the time value of money, is why financial advisors always emphasize starting to save and invest as early as possible. Use our calculator to see how different starting ages and time horizons affect your wealth accumulation.'
				},
				{
					heading: 'Maximizing Your Returns',
					text: 'To maximize compound interest benefits, focus on three key factors: starting amount, regular contributions, and interest rate. Even small increases in any of these can have significant long-term impacts. Increasing your monthly contribution by just $50 can add tens of thousands to your final balance over decades. Similarly, finding an investment that returns 1% more annually can make a huge difference over time. Consistency is also crucial. Regular contributions, even small ones, combined with the power of compounding create substantial wealth. Set up automatic transfers to ensure you never miss a contribution. Use our calculator to experiment with different scenarios and find the combination that works best for your financial goals and current budget.'
				},
				{
					heading: 'Practical Applications',
					text: 'Compound interest applies to many real-world financial situations. Savings accounts, certificates of deposit (CDs), bonds, and retirement accounts all use compound interest to grow your money. On the flip side, compound interest also works against you with debt. Credit card debt, student loans, and mortgages all compound interest, which is why debt can grow so quickly if not managed. Understanding how compound interest works in both contexts helps you make smarter decisions. Prioritize paying off high-interest debt while simultaneously building investments that compound in your favor. Use our calculator to model both scenarios and create a comprehensive financial plan that leverages the power of compounding while minimizing its negative effects on your debt.'
				}
			]
		},
		ko: {
			title: '복리 이자 가이드',
			metaDesc: '복리 이자를 이해하기 위한 완벽한 가이드. 복리 주기, APY 대 APR, 투자 성장, 부를 쌓는 데 있어 시간의 힘에 대해 알아보세요.',
			ctaText: '복리 계산기 사용하기',
			sections: [
				{
					heading: '복리 이자의 힘',
					text: '복리 이자는 종종 세계 8대 불가사의라고 불리며, 그럴 만한 이유가 있습니다. 원금에만 계산되는 단리와 달리, 복리 이자는 원금과 이전 기간의 누적 이자 모두에 대해 계산됩니다. 이것은 시간이 지남에 따라 돈이 기하급수적으로 성장하는 눈덩이 효과를 만듭니다. 알버트 아인슈타인이 복리 이자가 우주에서 가장 강력한 힘이라고 말했다고 전해집니다. 은퇴를 위한 저축이든, 비상 자금 마련이든, 장기 목표를 위한 투자이든, 복리 이자를 이해하는 것은 부를 쌓는 잠재력을 극대화하는 데 필수적입니다. 저희 계산기는 다양한 이자율과 복리 주기에 따라 시간이 지남에 따라 돈이 어떻게 성장하는지 정확히 시각화하는 데 도움이 됩니다.'
				},
				{
					heading: '복리 주기 이해하기',
					text: '이자가 복리되는 빈도는 수익에 크게 영향을 미칩니다. 일반적인 복리 주기에는 연간, 반기, 분기, 월간, 주간, 심지어 매일이 포함됩니다. 이자가 더 자주 복리될수록 더 많이 벌 수 있습니다. 예를 들어, 연간 복리 5% 이자의 $10,000은 1년 후 $10,500이 됩니다. 그러나 월간 복리되는 같은 금액은 $10,512가 됩니다. 1년 동안의 차이는 작아 보이지만, 수십 년 동안은 상당해집니다. 이것이 투자 옵션을 비교할 때 복리 주기를 이해하는 것이 중요한 이유입니다. 저희 계산기를 사용하면 다양한 주기를 실험하여 장기 성장에 정확히 어떤 영향을 미치는지 확인할 수 있습니다. 다른 요소가 동일할 때 항상 더 자주 복리되는 투자를 찾으세요.'
				},
				{
					heading: 'APY 대 APR 설명',
					text: 'APR(연간 이자율)과 APY(연간 수익률)는 관련이 있지만 투자자들을 종종 혼란스럽게 하는 다른 개념입니다. APR은 복리를 고려하지 않은 단순 이자율이고, APY는 복리 효과를 포함하여 1년 동안 실제로 벌게 될 총 이자 금액을 반영합니다. APY는 항상 APR과 같거나 높습니다. 예를 들어, 월간 복리 5% APR 계좌의 APY는 약 5.12%입니다. 저축 계좌나 투자를 비교할 때 정확한 비교를 위해 항상 APY 대 APY를 비교하세요. 은행은 종종 저축 계좌에는 APY를(높은 수익을 보여주기 위해), 대출에는 APR을(낮은 비용을 보여주기 위해) 광고합니다. 이 구별을 이해하면 더 나은 재정 결정을 내리고 마케팅에 속지 않을 수 있습니다.'
				},
				{
					heading: '부 축적에 있어 시간 요소',
					text: '시간은 복리 이자에서 가장 강력한 요소입니다. 돈이 복리되는 시간이 길수록 성장이 더 극적입니다. 이것이 부를 쌓기 위해 일찍 시작하는 것이 매우 중요한 이유입니다. 다음을 고려하세요: 25세에 연 7% 수익률로 월 $200를 투자하기 시작하면 65세까지 $520,000 이상을 갖게 됩니다. 35세까지 기다리면 같은 월 금액을 투자해도 약 $244,000밖에 갖지 못합니다. 10년의 선두 출발이 최종 부를 거의 두 배로 만듭니다. 화폐의 시간 가치로 알려진 이 원칙이 재정 고문이 항상 가능한 한 빨리 저축하고 투자하기 시작할 것을 강조하는 이유입니다. 저희 계산기를 사용하여 다양한 시작 연령과 시간 범위가 부 축적에 어떤 영향을 미치는지 확인하세요.'
				},
				{
					heading: '수익 극대화하기',
					text: '복리 이자 혜택을 극대화하려면 시작 금액, 정기 기여금, 이자율의 세 가지 핵심 요소에 집중하세요. 이 중 어느 하나라도 작은 증가도 장기적으로 큰 영향을 미칠 수 있습니다. 월 기여금을 $50만 늘려도 수십 년 동안 최종 잔액에 수만 달러를 추가할 수 있습니다. 마찬가지로 연간 1% 더 수익을 내는 투자를 찾으면 시간이 지남에 따라 큰 차이를 만들 수 있습니다. 일관성도 중요합니다. 작은 금액이라도 정기적인 기여금과 복리의 힘이 결합되어 상당한 부를 만듭니다. 기여금을 놓치지 않도록 자동 이체를 설정하세요. 저희 계산기를 사용하여 다양한 시나리오를 실험하고 재정 목표와 현재 예산에 가장 적합한 조합을 찾으세요.'
				},
				{
					heading: '실용적인 적용',
					text: '복리 이자는 많은 실제 금융 상황에 적용됩니다. 저축 계좌, 예금 증서(CD), 채권, 퇴직 계좌 모두 복리 이자를 사용하여 돈을 늘립니다. 반대로 복리 이자는 부채에서 불리하게 작용합니다. 신용 카드 부채, 학자금 대출, 모기지 모두 이자가 복리되어 관리하지 않으면 부채가 빠르게 증가하는 이유입니다. 두 맥락에서 복리 이자가 어떻게 작동하는지 이해하면 더 현명한 결정을 내릴 수 있습니다. 고금리 부채를 갚는 것을 우선시하면서 동시에 유리하게 복리되는 투자를 구축하세요. 저희 계산기를 사용하여 두 시나리오를 모델링하고 복리의 힘을 활용하면서 부채에 대한 부정적인 영향을 최소화하는 포괄적인 재정 계획을 세우세요.'
				}
			]
		},
		ja: {
			title: '複利ガイド',
			metaDesc: '複利を理解するための完全ガイド。複利頻度、APY対APR、投資成長、資産形成における時間の力について学びます。',
			ctaText: '複利計算機を試す',
			sections: [
				{
					heading: '複利の力',
					text: '複利はしばしば世界8番目の不思議と呼ばれますが、それには理由があります。元金のみで計算される単利とは異なり、複利は元金と以前の期間からの累積利息の両方で計算されます。これにより、時間とともにお金が指数関数的に成長する雪だるま効果が生まれます。アルバート・アインシュタインが複利は宇宙で最も強力な力だと言ったと伝えられています。退職のための貯蓄、緊急資金の構築、長期目標への投資のいずれであっても、複利を理解することは資産形成の可能性を最大化するために不可欠です。当社の計算機は、さまざまな金利と複利頻度で時間とともにお金がどのように成長するかを正確に視覚化するのに役立ちます。'
				},
				{
					heading: '複利頻度の理解',
					text: '利息が複利される頻度は収益に大きく影響します。一般的な複利頻度には、年次、半年、四半期、月次、週次、さらには毎日が含まれます。利息がより頻繁に複利されるほど、より多く稼げます。例えば、年間複利5%の金利で$10,000は1年後に$10,500になります。しかし、月次複利の同じ金額は$10,512になります。1年間の差は小さく見えますが、数十年にわたると大きくなります。これが投資オプションを比較する際に複利頻度を理解することが重要な理由です。当社の計算機では、さまざまな頻度を試して、長期的な成長にどのように影響するかを正確に確認できます。他の要因が同じ場合は、常により頻繁に複利する投資を探してください。'
				},
				{
					heading: 'APY対APR解説',
					text: 'APR（年率）とAPY（年間利回り）は関連していますが、投資家をしばしば混乱させる異なる概念です。APRは複利を考慮しない単純な金利であり、APYは複利の効果を含めて1年間で実際に得られる利息の総額を反映します。APYは常にAPR以上です。例えば、月次複利5%APRのアカウントのAPYは約5.12%です。普通預金口座や投資を比較する際は、正確な比較のために常にAPY同士を比較してください。銀行は普通預金口座にはAPYを（より高い収益を示すため）、ローンにはAPRを（より低いコストを示すため）広告することが多いです。この区別を理解することで、より良い財務決定を下し、マーケティングに惑わされないようになります。'
				},
				{
					heading: '資産形成における時間要素',
					text: '時間は複利において最も強力な要素です。お金が複利される時間が長いほど、成長はより劇的になります。これが資産を築くために早く始めることが非常に重要な理由です。考えてみてください：25歳で年7%の収益で月$200の投資を始めると、65歳までに$520,000以上になります。35歳まで待つと、同じ月額を投資しても約$244,000しか得られません。10年の先行スタートが最終的な資産をほぼ2倍にします。お金の時間価値として知られるこの原則が、ファイナンシャルアドバイザーが常に可能な限り早く貯蓄と投資を始めることを強調する理由です。当社の計算機を使用して、異なる開始年齢と時間軸が資産蓄積にどのように影響するかを確認してください。'
				},
				{
					heading: '収益を最大化する',
					text: '複利のメリットを最大化するには、開始金額、定期的な拠出、金利の3つの重要な要素に焦点を当ててください。これらのいずれかのわずかな増加でも、長期的には大きな影響を与える可能性があります。月々の拠出を$50増やすだけで、数十年で最終残高に数万ドルを追加できます。同様に、年間1%多くリターンする投資を見つけることは、時間とともに大きな違いを生みます。一貫性も重要です。小さくても定期的な拠出と複利の力が組み合わさって、大きな資産を生み出します。拠出を見逃さないように自動振替を設定してください。当社の計算機を使用してさまざまなシナリオを試し、財務目標と現在の予算に最も適した組み合わせを見つけてください。'
				},
				{
					heading: '実用的な応用',
					text: '複利は多くの現実の金融状況に適用されます。普通預金口座、定期預金（CD）、債券、退職口座はすべて複利を使用してお金を増やします。一方で、複利は負債では不利に働きます。クレジットカードの負債、学生ローン、住宅ローンはすべて利息が複利されるため、管理しないと負債が急速に増加します。両方の文脈で複利がどのように機能するかを理解することで、より賢い決定を下せます。高金利の負債を返済することを優先しながら、同時に有利に複利する投資を構築してください。当社の計算機を使用して両方のシナリオをモデル化し、複利の力を活用しながら負債への悪影響を最小限に抑える包括的な財務計画を作成してください。'
				}
			]
		},
		zh: {
			title: '复利指南',
			metaDesc: '理解复利的完整指南。了解复利频率、APY与APR、投资增长以及时间在财富积累中的力量。',
			ctaText: '试用复利计算器',
			sections: [
				{
					heading: '复利的力量',
					text: '复利常被称为世界第八大奇迹，这是有充分理由的。与仅根据本金计算的单利不同，复利是根据本金和前几期累积的利息计算的。这创造了一种滚雪球效应，使您的资金随时间呈指数增长。据说阿尔伯特·爱因斯坦曾说复利是宇宙中最强大的力量。无论您是为退休储蓄、建立应急基金还是为长期目标投资，理解复利对于最大化您的财富增长潜力至关重要。我们的计算器帮助您准确地可视化在不同利率和复利频率下，您的资金将如何随时间增长。'
				},
				{
					heading: '理解复利频率',
					text: '利息复利的频率显著影响您的回报。常见的复利频率包括每年、每半年、每季度、每月、每周，甚至每天。利息复利越频繁，您赚的越多。例如，年复利5%利率的10,000美元在一年后变成10,500美元。但同样金额的月复利变成10,512美元。虽然一年的差异看起来很小，但几十年后就会变得很大。这就是为什么在比较投资选项时理解复利频率很重要。我们的计算器让您可以尝试不同的频率，准确了解它们如何影响您的长期增长。当其他因素相同时，总是寻找复利更频繁的投资。'
				},
				{
					heading: 'APY与APR解释',
					text: 'APR（年利率）和APY（年收益率）是相关但不同的概念，经常让投资者感到困惑。APR是不考虑复利的简单利率，而APY反映您一年内实际将获得的总利息金额，包括复利的效果。APY总是等于或高于APR。例如，月复利5% APR的账户APY约为5.12%。比较储蓄账户或投资时，始终比较APY与APY以获得准确的图景。银行通常为储蓄账户宣传APY（显示更高的回报），为贷款宣传APR（显示更低的成本）。理解这种区别有助于您做出更好的财务决策，避免被营销误导。'
				},
				{
					heading: '财富积累中的时间因素',
					text: '时间是复利中最强大的因素。您的资金复利的时间越长，增长就越显著。这就是为什么尽早开始对于积累财富如此重要。考虑一下：如果您从25岁开始以7%的年回报率每月投资200美元，到65岁时您将拥有超过520,000美元。如果您等到35岁才开始，尽管投资相同的月金额，您只会有大约244,000美元。10年的先发优势几乎使您的最终财富翻倍。这个被称为货币时间价值的原则，就是为什么财务顾问总是强调尽早开始储蓄和投资。使用我们的计算器查看不同的起始年龄和时间范围如何影响您的财富积累。'
				},
				{
					heading: '最大化您的回报',
					text: '要最大化复利收益，请关注三个关键因素：起始金额、定期供款和利率。即使这些中的任何一个小幅增加，也可能产生重大的长期影响。每月供款仅增加50美元，几十年后可以为您的最终余额增加数万美元。同样，找到年回报率高1%的投资可以随时间产生巨大差异。一致性也很重要。定期供款，即使是小额的，结合复利的力量可以创造可观的财富。设置自动转账以确保您永远不会错过供款。使用我们的计算器尝试不同的场景，找到最适合您财务目标和当前预算的组合。'
				},
				{
					heading: '实际应用',
					text: '复利适用于许多现实世界的金融情况。储蓄账户、存款证（CD）、债券和退休账户都使用复利来增长您的资金。另一方面，复利在债务方面也对您不利。信用卡债务、学生贷款和抵押贷款都是复利的，这就是为什么如果不管理，债务会增长得如此之快。理解复利在这两种情况下如何运作可以帮助您做出更明智的决定。优先偿还高利息债务，同时建立对您有利的复利投资。使用我们的计算器对两种场景进行建模，制定一个全面的财务计划，利用复利的力量，同时最小化其对债务的负面影响。'
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
		<a href="/{lang}/compound"
			class="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors">
			{t.ctaText}
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
			</svg>
		</a>
	</div>
</div>
