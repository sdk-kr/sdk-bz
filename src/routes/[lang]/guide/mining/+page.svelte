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
			title: 'Mining Calculator Guide',
			metaDesc: 'Complete guide to cryptocurrency mining profitability. Learn about hash rates, electricity costs, mining difficulty, hardware selection, and break-even analysis.',
			ctaText: 'Try Mining Calculator',
			sections: [
				{
					heading: 'Understanding Crypto Mining',
					text: 'Cryptocurrency mining is the process of using computational power to validate transactions and secure blockchain networks, earning rewards in the process. Proof of Work (PoW) cryptocurrencies like Bitcoin and Litecoin require miners to solve complex mathematical puzzles. The first miner to solve the puzzle gets to add the next block to the blockchain and receives the block reward plus transaction fees. Mining profitability depends on several factors: your hardware\'s hash rate, electricity costs, mining difficulty, and the current price of the cryptocurrency. Our mining calculator helps you estimate potential profits by modeling all these variables, so you can make informed decisions before investing in mining equipment.'
				},
				{
					heading: 'Hash Rate Explained',
					text: 'Hash rate measures your mining hardware\'s computational power, expressed in hashes per second. Higher hash rates mean more chances to solve the puzzle and earn rewards. Hash rates are measured in kilohashes (KH/s), megahashes (MH/s), gigahashes (GH/s), terahashes (TH/s), or even petahashes (PH/s) for large mining operations. Different cryptocurrencies use different mining algorithms, and hardware performance varies by algorithm. For example, ASIC miners designed for Bitcoin\'s SHA-256 algorithm might achieve 100 TH/s, while GPU mining Ethereum\'s Ethash might achieve 100 MH/s. When using our calculator, input your specific hardware\'s hash rate for the cryptocurrency you plan to mine.'
				},
				{
					heading: 'Electricity Costs: The Key Factor',
					text: 'Electricity is typically the largest ongoing cost in mining and often determines whether mining is profitable. Mining hardware consumes significant power, measured in watts. A typical ASIC miner might consume 3,000 watts, running 24/7. To calculate your daily electricity cost, multiply wattage by hours operated (24) and your electricity rate, then divide by 1,000 for kilowatt-hours. For example, 3,000W x 24h x $0.10/kWh / 1000 = $7.20 per day. Electricity rates vary dramatically by location, from $0.03/kWh in some regions to over $0.30/kWh in others. This difference can make mining profitable in one location and unprofitable in another. Our calculator includes electricity cost inputs to give you accurate profit estimates.'
				},
				{
					heading: 'Mining Difficulty and Network Hash Rate',
					text: 'Mining difficulty adjusts automatically to maintain consistent block times as the total network hash rate changes. When more miners join (higher network hash rate), difficulty increases, making it harder to earn rewards. When miners leave, difficulty decreases. Bitcoin, for example, adjusts difficulty every 2,016 blocks (roughly two weeks). This means your share of rewards depends not just on your hash rate, but on your percentage of the total network. As more powerful hardware is released and more miners join, your existing hardware earns less over time. Our calculator factors in current difficulty, but remember that future difficulty changes can significantly impact long-term profitability.'
				},
				{
					heading: 'Hardware Considerations',
					text: 'The choice between ASIC miners and GPU mining depends on what you want to mine. ASICs (Application-Specific Integrated Circuits) are purpose-built for specific algorithms, offering the highest efficiency but limited flexibility. If the algorithm becomes unprofitable, the ASIC becomes worthless. GPU mining offers flexibility to switch between different cryptocurrencies but is generally less efficient. Consider hardware costs, efficiency (hashrate per watt), noise levels, heat output, and availability. Popular ASIC manufacturers include Bitmain, MicroBT, and Canaan. For GPU mining, NVIDIA and AMD offer various options. Factor in hardware depreciation and potential resale value when calculating total costs.'
				},
				{
					heading: 'Calculating Profitability and Break-Even',
					text: 'To determine if mining is worthwhile, calculate your break-even point: how long until your mining earnings cover your initial hardware investment plus ongoing costs. Start with daily revenue (based on hash rate, difficulty, and coin price), subtract daily electricity costs to get daily profit. Divide your hardware cost by daily profit to find break-even days. Be conservative in estimates; coin prices can drop, and difficulty typically increases. Also consider: pool fees (typically 1-3%), maintenance costs, and hardware lifespan (typically 2-4 years for ASICs). Our mining calculator helps you model these scenarios and understand the risks. Many miners find that break-even takes 12-18 months in favorable conditions, but market changes can extend this significantly.'
				}
			]
		},
		ko: {
			title: '채굴 계산기 가이드',
			metaDesc: '암호화폐 채굴 수익성에 대한 완벽한 가이드. 해시레이트, 전기 비용, 채굴 난이도, 하드웨어 선택, 손익분기점 분석에 대해 알아보세요.',
			ctaText: '채굴 계산기 사용하기',
			sections: [
				{
					heading: '암호화폐 채굴 이해하기',
					text: '암호화폐 채굴은 계산 능력을 사용하여 거래를 검증하고 블록체인 네트워크를 보호하며, 그 과정에서 보상을 받는 프로세스입니다. 비트코인이나 라이트코인과 같은 작업 증명(PoW) 암호화폐는 채굴자가 복잡한 수학적 퍼즐을 풀어야 합니다. 퍼즐을 먼저 푸는 채굴자가 블록체인에 다음 블록을 추가하고 블록 보상과 거래 수수료를 받습니다. 채굴 수익성은 여러 요소에 따라 달라집니다: 하드웨어의 해시레이트, 전기 비용, 채굴 난이도, 암호화폐의 현재 가격. 저희 채굴 계산기는 이러한 모든 변수를 모델링하여 잠재적 수익을 추정하여 채굴 장비에 투자하기 전에 정보에 입각한 결정을 내릴 수 있도록 도와줍니다.'
				},
				{
					heading: '해시레이트 설명',
					text: '해시레이트는 채굴 하드웨어의 계산 능력을 측정하며, 초당 해시로 표시됩니다. 해시레이트가 높을수록 퍼즐을 풀고 보상을 받을 기회가 많아집니다. 해시레이트는 킬로해시(KH/s), 메가해시(MH/s), 기가해시(GH/s), 테라해시(TH/s), 또는 대규모 채굴 작업의 경우 페타해시(PH/s)로 측정됩니다. 다른 암호화폐는 다른 채굴 알고리즘을 사용하며 하드웨어 성능은 알고리즘에 따라 다릅니다. 예를 들어, 비트코인의 SHA-256 알고리즘용으로 설계된 ASIC 채굴기는 100 TH/s를 달성할 수 있는 반면, 이더리움의 Ethash를 GPU로 채굴하면 100 MH/s를 달성할 수 있습니다. 저희 계산기를 사용할 때 채굴하려는 암호화폐에 대한 특정 하드웨어의 해시레이트를 입력하세요.'
				},
				{
					heading: '전기 비용: 핵심 요소',
					text: '전기는 일반적으로 채굴에서 가장 큰 지속 비용이며 종종 채굴의 수익성을 결정합니다. 채굴 하드웨어는 와트로 측정되는 상당한 전력을 소비합니다. 일반적인 ASIC 채굴기는 24시간 연중무휴로 3,000와트를 소비할 수 있습니다. 일일 전기 비용을 계산하려면 와트에 작동 시간(24)과 전기 요금을 곱한 다음 킬로와트시로 1,000으로 나눕니다. 예: 3,000W x 24h x $0.10/kWh / 1000 = 하루 $7.20. 전기 요금은 지역에 따라 kWh당 $0.03에서 $0.30 이상까지 극적으로 다릅니다. 이 차이로 인해 한 지역에서는 채굴이 수익성이 있고 다른 지역에서는 수익성이 없을 수 있습니다. 저희 계산기에는 정확한 수익 추정을 위한 전기 비용 입력이 포함되어 있습니다.'
				},
				{
					heading: '채굴 난이도와 네트워크 해시레이트',
					text: '채굴 난이도는 총 네트워크 해시레이트가 변함에 따라 일관된 블록 시간을 유지하기 위해 자동으로 조정됩니다. 더 많은 채굴자가 참여하면(높은 네트워크 해시레이트) 난이도가 증가하여 보상을 받기가 더 어려워집니다. 채굴자가 떠나면 난이도가 감소합니다. 예를 들어, 비트코인은 2,016 블록(약 2주)마다 난이도를 조정합니다. 이는 보상의 몫이 해시레이트뿐만 아니라 총 네트워크에서 차지하는 비율에 따라 달라진다는 것을 의미합니다. 더 강력한 하드웨어가 출시되고 더 많은 채굴자가 참여함에 따라 기존 하드웨어는 시간이 지남에 따라 덜 벌게 됩니다. 저희 계산기는 현재 난이도를 고려하지만, 미래의 난이도 변화가 장기 수익성에 크게 영향을 미칠 수 있다는 점을 기억하세요.'
				},
				{
					heading: '하드웨어 고려 사항',
					text: 'ASIC 채굴기와 GPU 채굴 중 선택은 채굴하려는 것에 따라 다릅니다. ASIC(특정 용도 집적 회로)은 특정 알고리즘용으로 특별히 제작되어 최고의 효율성을 제공하지만 유연성이 제한됩니다. 알고리즘이 수익성이 없어지면 ASIC은 가치가 없어집니다. GPU 채굴은 다른 암호화폐 간에 전환할 수 있는 유연성을 제공하지만 일반적으로 효율성이 낮습니다. 하드웨어 비용, 효율성(와트당 해시레이트), 소음 수준, 열 출력, 가용성을 고려하세요. 인기 있는 ASIC 제조업체로는 Bitmain, MicroBT, Canaan이 있습니다. GPU 채굴의 경우 NVIDIA와 AMD가 다양한 옵션을 제공합니다. 총 비용을 계산할 때 하드웨어 감가상각과 잠재적 재판매 가치를 고려하세요.'
				},
				{
					heading: '수익성 및 손익분기점 계산',
					text: '채굴이 가치가 있는지 판단하려면 손익분기점을 계산하세요: 채굴 수익이 초기 하드웨어 투자와 지속 비용을 얼마나 빨리 충당하는지. 일일 수익(해시레이트, 난이도, 코인 가격 기반)에서 시작하여 일일 전기 비용을 빼면 일일 이익이 됩니다. 하드웨어 비용을 일일 이익으로 나누면 손익분기점 일수를 찾을 수 있습니다. 추정에서 보수적으로 하세요. 코인 가격이 떨어질 수 있고 난이도는 일반적으로 증가합니다. 또한 고려하세요: 풀 수수료(일반적으로 1-3%), 유지 관리 비용, 하드웨어 수명(ASIC의 경우 일반적으로 2-4년). 저희 채굴 계산기는 이러한 시나리오를 모델링하고 위험을 이해하는 데 도움이 됩니다. 많은 채굴자들은 유리한 조건에서 손익분기점이 12-18개월 걸린다고 생각하지만, 시장 변화로 인해 이 기간이 크게 연장될 수 있습니다.'
				}
			]
		},
		ja: {
			title: 'マイニング計算機ガイド',
			metaDesc: '暗号通貨マイニングの収益性に関する完全ガイド。ハッシュレート、電気代、マイニング難易度、ハードウェア選択、損益分岐点分析について学びます。',
			ctaText: 'マイニング計算機を試す',
			sections: [
				{
					heading: '暗号通貨マイニングの理解',
					text: '暗号通貨マイニングは、計算能力を使用してトランザクションを検証し、ブロックチェーンネットワークを保護し、その過程で報酬を得るプロセスです。ビットコインやライトコインなどのプルーフオブワーク（PoW）暗号通貨では、マイナーが複雑な数学的パズルを解く必要があります。最初にパズルを解いたマイナーが次のブロックをブロックチェーンに追加し、ブロック報酬とトランザクション手数料を受け取ります。マイニングの収益性はいくつかの要因に依存します：ハードウェアのハッシュレート、電気代、マイニング難易度、暗号通貨の現在の価格。当社のマイニング計算機は、これらすべての変数をモデル化して潜在的な利益を見積もり、マイニング機器に投資する前に情報に基づいた決定を下すことができます。'
				},
				{
					heading: 'ハッシュレートの説明',
					text: 'ハッシュレートは、マイニングハードウェアの計算能力を測定し、1秒あたりのハッシュで表されます。ハッシュレートが高いほど、パズルを解いて報酬を得るチャンスが増えます。ハッシュレートは、キロハッシュ（KH/s）、メガハッシュ（MH/s）、ギガハッシュ（GH/s）、テラハッシュ（TH/s）、または大規模なマイニング操作ではペタハッシュ（PH/s）で測定されます。異なる暗号通貨は異なるマイニングアルゴリズムを使用し、ハードウェアのパフォーマンスはアルゴリズムによって異なります。例えば、ビットコインのSHA-256アルゴリズム用に設計されたASICマイナーは100 TH/sを達成できる一方、イーサリアムのEthashをGPUでマイニングすると100 MH/sを達成できます。当社の計算機を使用する際は、マイニングする予定の暗号通貨に対する特定のハードウェアのハッシュレートを入力してください。'
				},
				{
					heading: '電気代：重要な要素',
					text: '電気は通常、マイニングで最大の継続的なコストであり、マイニングが収益性があるかどうかを決定することが多いです。マイニングハードウェアはワットで測定される大量の電力を消費します。典型的なASICマイナーは24時間365日稼働で3,000ワットを消費する可能性があります。日々の電気代を計算するには、ワット数に稼働時間（24）と電気料金を掛け、キロワット時のために1,000で割ります。例：3,000W x 24h x $0.10/kWh / 1000 = 1日$7.20。電気料金は地域によって大きく異なり、一部の地域では$0.03/kWhから他の地域では$0.30/kWh以上まであります。この違いにより、ある場所ではマイニングが収益性があり、別の場所では収益性がなくなる可能性があります。当社の計算機には正確な利益見積もりのための電気代入力が含まれています。'
				},
				{
					heading: 'マイニング難易度とネットワークハッシュレート',
					text: 'マイニング難易度は、総ネットワークハッシュレートが変化するにつれて一貫したブロック時間を維持するために自動的に調整されます。より多くのマイナーが参加すると（高いネットワークハッシュレート）、難易度が上がり、報酬を得るのが難しくなります。マイナーが去ると、難易度は下がります。例えば、ビットコインは2,016ブロック（約2週間）ごとに難易度を調整します。これは、報酬のシェアがハッシュレートだけでなく、ネットワーク全体に対するあなたの割合にも依存することを意味します。より強力なハードウェアがリリースされ、より多くのマイナーが参加すると、既存のハードウェアは時間とともに収益が減少します。当社の計算機は現在の難易度を考慮していますが、将来の難易度の変化が長期的な収益性に大きく影響する可能性があることを覚えておいてください。'
				},
				{
					heading: 'ハードウェアの考慮事項',
					text: 'ASICマイナーとGPUマイニングの選択は、何をマイニングしたいかによって異なります。ASIC（特定用途向け集積回路）は特定のアルゴリズム用に特別に構築されており、最高の効率を提供しますが、柔軟性が限られています。アルゴリズムが収益性がなくなると、ASICは無価値になります。GPUマイニングは異なる暗号通貨間で切り替える柔軟性を提供しますが、一般的に効率は低くなります。ハードウェアコスト、効率（ワットあたりのハッシュレート）、騒音レベル、発熱、入手可能性を考慮してください。人気のあるASICメーカーには、Bitmain、MicroBT、Canaanがあります。GPUマイニングの場合、NVIDIAとAMDがさまざまなオプションを提供しています。総コストを計算する際は、ハードウェアの減価償却と潜在的な再販価値を考慮してください。'
				},
				{
					heading: '収益性と損益分岐点の計算',
					text: 'マイニングが価値があるかどうかを判断するには、損益分岐点を計算してください：マイニング収益が初期ハードウェア投資と継続的なコストをカバーするまでの時間。日々の収益（ハッシュレート、難易度、コイン価格に基づく）から始め、日々の電気代を引いて日々の利益を得ます。ハードウェアコストを日々の利益で割ると、損益分岐日数がわかります。見積もりでは保守的に。コイン価格は下がる可能性があり、難易度は通常上がります。また考慮してください：プール手数料（通常1-3%）、メンテナンスコスト、ハードウェア寿命（ASICの場合通常2-4年）。当社のマイニング計算機は、これらのシナリオをモデル化し、リスクを理解するのに役立ちます。多くのマイナーは、好条件で損益分岐点が12〜18ヶ月かかると感じていますが、市場の変化によりこれが大幅に延長される可能性があります。'
				}
			]
		},
		zh: {
			title: '挖矿计算器指南',
			metaDesc: '加密货币挖矿盈利能力完整指南。了解哈希率、电力成本、挖矿难度、硬件选择和盈亏平衡分析。',
			ctaText: '试用挖矿计算器',
			sections: [
				{
					heading: '理解加密货币挖矿',
					text: '加密货币挖矿是使用计算能力来验证交易并保护区块链网络的过程，在此过程中获得奖励。比特币和莱特币等工作量证明（PoW）加密货币需要矿工解决复杂的数学难题。第一个解决难题的矿工可以将下一个区块添加到区块链并获得区块奖励和交易费用。挖矿盈利能力取决于几个因素：硬件的哈希率、电力成本、挖矿难度和加密货币的当前价格。我们的挖矿计算器通过模拟所有这些变量来帮助您估算潜在利润，以便您在投资挖矿设备之前做出明智的决定。'
				},
				{
					heading: '哈希率解释',
					text: '哈希率衡量您挖矿硬件的计算能力，以每秒哈希数表示。哈希率越高意味着解决难题并获得奖励的机会越多。哈希率以千哈希（KH/s）、兆哈希（MH/s）、吉哈希（GH/s）、太哈希（TH/s）或大型挖矿操作的拍哈希（PH/s）来衡量。不同的加密货币使用不同的挖矿算法，硬件性能因算法而异。例如，为比特币SHA-256算法设计的ASIC矿机可能达到100 TH/s，而GPU挖以太坊的Ethash可能达到100 MH/s。使用我们的计算器时，输入您计划挖掘的加密货币的特定硬件哈希率。'
				},
				{
					heading: '电力成本：关键因素',
					text: '电力通常是挖矿中最大的持续成本，通常决定挖矿是否有利可图。挖矿硬件消耗大量电力，以瓦特为单位。典型的ASIC矿机可能每天24小时运行消耗3,000瓦。要计算每日电费，将瓦数乘以运行小时数（24）和电价，然后除以1,000得到千瓦时。例如：3,000W x 24h x $0.10/kWh / 1000 = 每天$7.20。电价因地区而异，从某些地区的$0.03/kWh到其他地区的$0.30/kWh以上不等。这种差异可能使挖矿在一个地方有利可图而在另一个地方无利可图。我们的计算器包括电力成本输入，以提供准确的利润估算。'
				},
				{
					heading: '挖矿难度和网络哈希率',
					text: '挖矿难度会自动调整，以在总网络哈希率变化时保持一致的出块时间。当更多矿工加入（更高的网络哈希率）时，难度增加，使获得奖励变得更难。当矿工离开时，难度降低。例如，比特币每2,016个区块（大约两周）调整一次难度。这意味着您的奖励份额不仅取决于您的哈希率，还取决于您在总网络中的百分比。随着更强大的硬件发布和更多矿工加入，您现有的硬件随时间赚得更少。我们的计算器考虑了当前难度，但请记住，未来难度变化可能会显著影响长期盈利能力。'
				},
				{
					heading: '硬件考虑',
					text: 'ASIC矿机和GPU挖矿之间的选择取决于您想挖什么。ASIC（专用集成电路）是为特定算法专门构建的，提供最高效率但灵活性有限。如果算法变得无利可图，ASIC就变得毫无价值。GPU挖矿提供在不同加密货币之间切换的灵活性，但通常效率较低。考虑硬件成本、效率（每瓦特哈希率）、噪音水平、热量输出和可用性。流行的ASIC制造商包括比特大陆、MicroBT和嘉楠。对于GPU挖矿，NVIDIA和AMD提供各种选择。计算总成本时考虑硬件折旧和潜在转售价值。'
				},
				{
					heading: '计算盈利能力和盈亏平衡',
					text: '要确定挖矿是否值得，计算您的盈亏平衡点：您的挖矿收入需要多长时间才能覆盖初始硬件投资加上持续成本。从每日收入开始（基于哈希率、难度和币价），减去每日电费得到每日利润。将硬件成本除以每日利润即可找到盈亏平衡天数。估算时要保守；币价可能下跌，难度通常会增加。还要考虑：矿池费用（通常1-3%）、维护成本和硬件寿命（ASIC通常2-4年）。我们的挖矿计算器帮助您模拟这些场景并理解风险。许多矿工发现在有利条件下盈亏平衡需要12-18个月，但市场变化可能会显著延长这个时间。'
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
		<a href="/{lang}/mining"
			class="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors">
			{t.ctaText}
			<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
			</svg>
		</a>
	</div>
</div>
