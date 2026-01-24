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
			title: 'DCA Calculator Guide',
			metaDesc: 'Complete guide to Dollar Cost Averaging (DCA) for cryptocurrency investing. Learn how DCA works, its benefits, strategies, and how to build wealth consistently over time.',
			ctaText: 'Try DCA Calculator',
			sections: [
				{
					heading: 'What is Dollar Cost Averaging?',
					text: 'Dollar Cost Averaging (DCA) is an investment strategy where you invest a fixed amount of money at regular intervals, regardless of the asset\'s price. Instead of trying to time the market with a lump sum, you spread your purchases over time. For example, investing $100 in Bitcoin every week means you\'ll buy more when prices are low and less when prices are high, automatically. This removes the emotional stress of trying to pick the perfect entry point and has been shown to produce solid returns over time. Our DCA calculator helps you model different scenarios to see how this strategy would have performed and project future outcomes based on various assumptions.'
				},
				{
					heading: 'Why DCA Works for Crypto',
					text: 'Cryptocurrency markets are notoriously volatile, with prices capable of swinging 20% or more in a single day. This volatility makes market timing extremely difficult, even for experienced traders. DCA addresses this by removing the timing decision entirely. When prices drop, your fixed investment buys more coins, lowering your average cost. When prices rise, you buy fewer coins but your existing holdings gain value. Over time, this averaging effect smooths out volatility and typically results in a favorable average purchase price. Studies have shown that DCA often outperforms lump-sum investing in volatile markets, making it particularly well-suited for cryptocurrency.'
				},
				{
					heading: 'Setting Up Your DCA Strategy',
					text: 'To implement DCA effectively, decide on three things: the asset (Bitcoin, Ethereum, etc.), the amount per investment, and the frequency (daily, weekly, monthly). Most experts recommend weekly or monthly intervals for optimal balance between cost averaging and fee management. Choose an amount you can sustain long-term; consistency is key. Many exchanges offer automatic recurring purchases, removing the temptation to skip investments when prices seem high. Use our calculator to experiment with different amounts and frequencies. Start with what you can comfortably afford, even if it\'s small. The power of DCA comes from consistency over time, not large individual investments.'
				},
				{
					heading: 'DCA vs Lump Sum Investing',
					text: 'The debate between DCA and lump sum investing is ongoing. Historically, in steadily rising markets, lump sum investing slightly outperforms DCA because your money is fully invested sooner. However, lump sum requires you to have a large amount available and carries significant timing risk. If you invest everything right before a crash, recovery takes longer. DCA offers psychological benefits: it\'s easier to stick with, reduces regret from poor timing, and works well when you\'re investing from income over time. For most people, especially in volatile crypto markets, DCA provides better risk-adjusted returns and much less stress. Our calculator lets you compare both strategies.'
				},
				{
					heading: 'Common DCA Mistakes',
					text: 'While DCA is straightforward, some common mistakes can undermine its effectiveness. First, stopping during market downturns: this is actually when DCA provides the most benefit, as you\'re buying more at lower prices. Second, changing your investment amount based on price movements defeats the purpose of averaging. Third, ignoring fees: frequent small purchases can accumulate significant fees on some platforms. Choose an exchange with low fees or adjust your frequency accordingly. Fourth, not having an exit strategy: DCA is for accumulation, but you should also plan when and how you\'ll eventually take profits. Our calculator helps you visualize these scenarios and plan appropriately.'
				},
				{
					heading: 'Maximizing Your DCA Results',
					text: 'To get the most from your DCA strategy, stay consistent above all else. Automate your purchases to remove human emotion from the equation. Reinvest any dividends or staking rewards to compound your growth. Keep detailed records for tax purposes. Consider diversifying across multiple assets rather than putting everything into one cryptocurrency. Periodically review your strategy, perhaps annually, to ensure your investment amount still aligns with your financial situation and goals. Use our DCA calculator regularly to track your progress and project future outcomes. Remember, DCA is a marathon, not a sprint. The real results come from years of consistent investing, not months.'
				}
			]
		},
		ko: {
			title: 'DCA 계산기 가이드',
			metaDesc: '암호화폐 투자를 위한 달러 비용 평균화(DCA)에 대한 완벽한 가이드. DCA의 작동 방식, 이점, 전략, 시간이 지남에 따라 꾸준히 부를 쌓는 방법을 알아보세요.',
			ctaText: 'DCA 계산기 사용하기',
			sections: [
				{
					heading: '달러 비용 평균화란 무엇인가요?',
					text: '달러 비용 평균화(DCA)는 자산 가격에 관계없이 정기적으로 고정 금액을 투자하는 투자 전략입니다. 일시불로 시장 타이밍을 맞추려고 하는 대신 시간에 걸쳐 구매를 분산합니다. 예를 들어, 매주 비트코인에 $100를 투자하면 가격이 낮을 때 더 많이 사고 가격이 높을 때 자동으로 덜 사게 됩니다. 이것은 완벽한 진입점을 고르려는 감정적 스트레스를 제거하고 시간이 지남에 따라 견고한 수익을 낸다는 것이 입증되었습니다. 저희 DCA 계산기는 다양한 시나리오를 모델링하여 이 전략이 어떻게 수행되었을지 확인하고 다양한 가정에 따라 미래 결과를 예측하는 데 도움이 됩니다.'
				},
				{
					heading: 'DCA가 크립토에 효과적인 이유',
					text: '암호화폐 시장은 하루에 20% 이상 가격이 변동할 수 있는 변동성이 높기로 악명 높습니다. 이러한 변동성은 경험 많은 트레이더에게도 시장 타이밍을 매우 어렵게 만듭니다. DCA는 타이밍 결정을 완전히 제거하여 이를 해결합니다. 가격이 떨어지면 고정 투자로 더 많은 코인을 구매하여 평균 비용을 낮춥니다. 가격이 오르면 코인을 덜 사지만 기존 보유량의 가치가 상승합니다. 시간이 지남에 따라 이 평균화 효과는 변동성을 완화하고 일반적으로 유리한 평균 구매 가격을 가져옵니다. 연구에 따르면 DCA는 변동성이 큰 시장에서 종종 일시불 투자보다 성과가 좋아 암호화폐에 특히 적합합니다.'
				},
				{
					heading: 'DCA 전략 설정하기',
					text: 'DCA를 효과적으로 구현하려면 세 가지를 결정하세요: 자산(비트코인, 이더리움 등), 투자당 금액, 빈도(매일, 매주, 매월). 대부분의 전문가는 비용 평균화와 수수료 관리 간의 최적의 균형을 위해 주간 또는 월간 간격을 권장합니다. 장기적으로 유지할 수 있는 금액을 선택하세요. 일관성이 핵심입니다. 많은 거래소가 자동 반복 구매를 제공하여 가격이 높아 보일 때 투자를 건너뛰는 유혹을 제거합니다. 저희 계산기를 사용하여 다양한 금액과 빈도를 실험하세요. 작더라도 편안하게 감당할 수 있는 것부터 시작하세요. DCA의 힘은 큰 개별 투자가 아니라 시간에 걸친 일관성에서 나옵니다.'
				},
				{
					heading: 'DCA 대 일시불 투자',
					text: 'DCA와 일시불 투자 사이의 논쟁은 계속되고 있습니다. 역사적으로 꾸준히 상승하는 시장에서는 돈이 더 빨리 완전히 투자되기 때문에 일시불 투자가 DCA보다 약간 더 좋은 성과를 냅니다. 그러나 일시불은 큰 금액이 있어야 하고 상당한 타이밍 위험이 있습니다. 폭락 직전에 모든 것을 투자하면 회복에 더 오래 걸립니다. DCA는 심리적 이점을 제공합니다: 고수하기 쉽고, 잘못된 타이밍으로 인한 후회를 줄이고, 시간에 걸쳐 소득에서 투자할 때 잘 작동합니다. 대부분의 사람들에게, 특히 변동성이 큰 크립토 시장에서 DCA는 더 나은 위험 조정 수익과 훨씬 적은 스트레스를 제공합니다. 저희 계산기를 사용하면 두 전략을 비교할 수 있습니다.'
				},
				{
					heading: '일반적인 DCA 실수',
					text: 'DCA는 간단하지만 일부 일반적인 실수는 효과를 저해할 수 있습니다. 첫째, 시장 하락기에 중단: 이것은 실제로 DCA가 가장 큰 이점을 제공하는 때입니다. 낮은 가격에 더 많이 사기 때문입니다. 둘째, 가격 변동에 따라 투자 금액을 변경하면 평균화의 목적이 무효화됩니다. 셋째, 수수료 무시: 일부 플랫폼에서 빈번한 소액 구매는 상당한 수수료가 누적될 수 있습니다. 수수료가 낮은 거래소를 선택하거나 그에 따라 빈도를 조정하세요. 넷째, 출구 전략이 없는 것: DCA는 축적용이지만 언제 어떻게 결국 이익을 취할지도 계획해야 합니다. 저희 계산기는 이러한 시나리오를 시각화하고 적절하게 계획하는 데 도움이 됩니다.'
				},
				{
					heading: 'DCA 결과 극대화하기',
					text: 'DCA 전략에서 최대한의 효과를 얻으려면 무엇보다도 일관성을 유지하세요. 구매를 자동화하여 인간의 감정을 배제하세요. 배당금이나 스테이킹 보상을 재투자하여 성장을 복리화하세요. 세금 목적으로 상세한 기록을 유지하세요. 모든 것을 하나의 암호화폐에 넣는 대신 여러 자산에 분산 투자하는 것을 고려하세요. 아마도 매년 전략을 정기적으로 검토하여 투자 금액이 여전히 재정 상황과 목표에 맞는지 확인하세요. 저희 DCA 계산기를 정기적으로 사용하여 진행 상황을 추적하고 미래 결과를 예측하세요. 기억하세요, DCA는 단거리가 아닌 마라톤입니다. 진정한 결과는 몇 달이 아니라 수년간의 꾸준한 투자에서 나옵니다.'
				}
			]
		},
		ja: {
			title: 'DCA計算機ガイド',
			metaDesc: '暗号通貨投資のためのドルコスト平均法（DCA）の完全ガイド。DCAの仕組み、利点、戦略、時間をかけて一貫して資産を構築する方法を学びます。',
			ctaText: 'DCA計算機を試す',
			sections: [
				{
					heading: 'ドルコスト平均法とは？',
					text: 'ドルコスト平均法（DCA）は、資産の価格に関係なく、定期的に固定金額を投資する投資戦略です。一括投資で市場のタイミングを図る代わりに、購入を時間をかけて分散させます。例えば、毎週ビットコインに$100を投資すると、価格が低いときは自動的に多く購入し、価格が高いときは少なく購入します。これにより、完璧なエントリーポイントを選ぼうとする感情的なストレスがなくなり、時間の経過とともに堅実なリターンを生むことが示されています。当社のDCA計算機は、さまざまなシナリオをモデル化して、この戦略がどのように機能したかを確認し、さまざまな仮定に基づいて将来の結果を予測するのに役立ちます。'
				},
				{
					heading: 'DCAが暗号通貨に効果的な理由',
					text: '暗号通貨市場は、1日で20%以上価格が変動する可能性があることで有名です。このボラティリティは、経験豊富なトレーダーでも市場のタイミングを非常に難しくします。DCAは、タイミングの決定を完全に排除することでこれに対処します。価格が下がると、固定投資でより多くのコインを購入し、平均コストを下げます。価格が上がると、購入するコインは少なくなりますが、既存の保有分の価値が上がります。時間の経過とともに、この平均化効果がボラティリティを平滑化し、通常、有利な平均購入価格をもたらします。研究によると、DCAはボラティリティの高い市場で一括投資を上回ることが多く、暗号通貨に特に適しています。'
				},
				{
					heading: 'DCA戦略の設定',
					text: 'DCAを効果的に実行するには、3つのことを決定します：資産（ビットコイン、イーサリアムなど）、投資ごとの金額、頻度（毎日、毎週、毎月）。ほとんどの専門家は、コスト平均と手数料管理の最適なバランスのために、週次または月次の間隔を推奨しています。長期的に維持できる金額を選択してください。一貫性が鍵です。多くの取引所は自動的な定期購入を提供しており、価格が高そうに見えるときに投資をスキップする誘惑を排除します。当社の計算機を使用して、さまざまな金額と頻度を試してください。小さくても、快適に負担できる金額から始めてください。DCAの力は、大きな個別投資からではなく、時間をかけた一貫性から生まれます。'
				},
				{
					heading: 'DCA対一括投資',
					text: 'DCAと一括投資の議論は続いています。歴史的に、着実に上昇する市場では、お金がより早く完全に投資されるため、一括投資がDCAをわずかに上回ります。ただし、一括投資には大きな金額が必要で、重大なタイミングリスクがあります。暴落直前にすべてを投資すると、回復に時間がかかります。DCAには心理的な利点があります：維持しやすく、タイミングの悪さからの後悔を減らし、時間をかけて収入から投資する場合にうまく機能します。ほとんどの人にとって、特にボラティリティの高い暗号通貨市場では、DCAはより良いリスク調整後リターンとはるかに少ないストレスを提供します。当社の計算機では、両方の戦略を比較できます。'
				},
				{
					heading: '一般的なDCAの間違い',
					text: 'DCAは簡単ですが、いくつかの一般的な間違いがその効果を損なう可能性があります。まず、市場の下落時に停止すること：これは実際にDCAが最も利益をもたらすときです。より低い価格でより多く購入するからです。次に、価格変動に基づいて投資額を変更すると、平均化の目的が無効になります。第三に、手数料を無視すること：一部のプラットフォームでは、頻繁な小額購入で大幅な手数料が蓄積する可能性があります。手数料の低い取引所を選択するか、それに応じて頻度を調整してください。第四に、出口戦略がないこと：DCAは蓄積用ですが、いつどのように最終的に利益を得るかも計画する必要があります。当社の計算機は、これらのシナリオを視覚化し、適切に計画するのに役立ちます。'
				},
				{
					heading: 'DCA結果の最大化',
					text: 'DCA戦略から最大の効果を得るには、何よりも一貫性を保ってください。購入を自動化して、人間の感情を排除してください。配当やステーキング報酬を再投資して、成長を複利化してください。税務目的で詳細な記録を保持してください。すべてを1つの暗号通貨に入れるのではなく、複数の資産に分散することを検討してください。おそらく年に一度、戦略を定期的に見直して、投資額が財務状況と目標にまだ合っているか確認してください。当社のDCA計算機を定期的に使用して、進捗を追跡し、将来の結果を予測してください。DCAはスプリントではなく、マラソンであることを覚えておいてください。本当の結果は、数ヶ月ではなく、何年もの一貫した投資から生まれます。'
				}
			]
		},
		zh: {
			title: 'DCA计算器指南',
			metaDesc: '加密货币投资美元成本平均法（DCA）完整指南。了解DCA的工作原理、优势、策略以及如何随时间持续积累财富。',
			ctaText: '试用DCA计算器',
			sections: [
				{
					heading: '什么是美元成本平均法？',
					text: '美元成本平均法（DCA）是一种投资策略，无论资产价格如何，您都会定期投资固定金额。不是试图用一次性投资来把握市场时机，而是将购买分散在一段时间内。例如，每周投资100美元购买比特币意味着价格低时您会自动买入更多，价格高时买入更少。这消除了试图挑选完美入场点的情绪压力，并已被证明随时间产生稳定的回报。我们的DCA计算器帮助您模拟不同场景，以了解这一策略的表现，并根据各种假设预测未来结果。'
				},
				{
					heading: '为什么DCA对加密货币有效',
					text: '加密货币市场以波动性著称，价格在一天内可能波动20%或更多。这种波动性使市场时机把握极其困难，即使对于经验丰富的交易者也是如此。DCA通过完全消除时机决策来解决这个问题。当价格下跌时，您的固定投资会购买更多币，降低您的平均成本。当价格上涨时，您购买的币减少，但您现有持仓的价值增加。随着时间的推移，这种平均效应平滑了波动性，通常会产生有利的平均购买价格。研究表明，DCA在波动市场中往往优于一次性投资，使其特别适合加密货币。'
				},
				{
					heading: '设置您的DCA策略',
					text: '要有效实施DCA，需要决定三件事：资产（比特币、以太坊等）、每次投资金额和频率（每天、每周、每月）。大多数专家建议每周或每月间隔，以在成本平均和费用管理之间取得最佳平衡。选择一个您可以长期维持的金额；一致性是关键。许多交易所提供自动定期购买，消除了价格看起来很高时跳过投资的诱惑。使用我们的计算器尝试不同的金额和频率。从您能舒适负担的金额开始，即使很小。DCA的力量来自于时间的一致性，而不是大额单次投资。'
				},
				{
					heading: 'DCA与一次性投资',
					text: 'DCA和一次性投资之间的争论一直在继续。历史上，在稳定上涨的市场中，一次性投资略微优于DCA，因为您的资金更早地完全投入。然而，一次性投资需要您有大量可用资金，并承担重大的时机风险。如果您在崩盘前投入所有资金，恢复需要更长时间。DCA提供心理优势：更容易坚持，减少因时机不佳而产生的后悔，并且当您随时间从收入中投资时效果很好。对于大多数人来说，特别是在波动的加密货币市场中，DCA提供更好的风险调整回报和更少的压力。我们的计算器让您可以比较两种策略。'
				},
				{
					heading: '常见的DCA错误',
					text: '虽然DCA很简单，但一些常见错误可能会削弱其有效性。首先，在市场下跌期间停止：这实际上是DCA提供最大收益的时候，因为您以更低的价格购买更多。其次，根据价格变动改变投资金额会违背平均的目的。第三，忽略费用：在某些平台上，频繁的小额购买可能会累积大量费用。选择费用低的交易所或相应调整您的频率。第四，没有退出策略：DCA是为了积累，但您也应该计划何时以及如何最终获利。我们的计算器帮助您可视化这些场景并适当规划。'
				},
				{
					heading: '最大化您的DCA结果',
					text: '要从DCA策略中获得最大收益，首先要保持一致。自动化您的购买以消除人为情绪。将任何股息或质押奖励再投资以复合您的增长。为税务目的保留详细记录。考虑分散投资于多种资产，而不是将所有资金投入一种加密货币。定期审查您的策略，可能每年一次，以确保您的投资金额仍然符合您的财务状况和目标。定期使用我们的DCA计算器跟踪您的进度并预测未来结果。记住，DCA是马拉松，不是短跑。真正的结果来自多年的持续投资，而不是几个月。'
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
		<a href="/{lang}/dca"
			class="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors">
			{t.ctaText}
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
			</svg>
		</a>
	</div>
</div>
