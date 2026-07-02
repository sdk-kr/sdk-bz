<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';
	import ToolGuide from '$lib/components/ToolGuide.svelte';

	const guideSections = [
		{
			heading: {
				en: 'How the DCA Math Actually Works',
				ko: 'DCA 수학의 실제 원리',
				ja: 'DCAの計算が実際にどう働くか',
				zh: '定投数学的真实原理'
			},
			body: {
				en: `The core of dollar-cost averaging is a single ratio: your average cost per unit equals total money invested divided by total units acquired. Because you invest a fixed dollar amount each period, the number of units you receive changes with the price. $100 buys 1.25 units at $80 but only 0.8 units at $125, so cheap periods contribute more units to the denominator and expensive periods contribute fewer.

Work through a four-month plan of $100 per month at prices of $100, $80, $125, and $100. The units acquired are 1.0, 1.25, 0.8, and 1.0, for a total of 4.05 units from $400 invested. Your average cost is 400 / 4.05 ≈ $98.77 per unit. Compare that with the simple arithmetic average of the four prices, (100 + 80 + 125 + 100) / 4 = $101.25. The DCA average is lower, and this is not a coincidence.

Mathematically, when you invest equal dollar amounts, your average cost is the harmonic mean of the purchase prices: n divided by the sum of the reciprocals of each price. The harmonic mean is always less than or equal to the arithmetic mean, with equality only when every price is identical. In plain terms, a fixed-dollar schedule automatically overweights cheap purchases and underweights expensive ones, with no timing skill, forecasts, or willpower required. The more the price fluctuates around its average, the wider the gap between the two means, so volatility itself works in favor of your average cost.`,
				ko: `정액 분할 매수(DCA)의 핵심은 하나의 비율입니다. 단위당 평균 매입 단가는 총 투자 금액을 총 취득 수량으로 나눈 값입니다. 매 기간 고정된 금액을 투자하기 때문에 받는 수량은 가격에 따라 달라집니다. 100달러로 가격이 80달러일 때는 1.25단위를 살 수 있지만 125달러일 때는 0.8단위밖에 사지 못하므로, 가격이 싼 시기는 분모에 더 많은 수량을 보태고 비싼 시기는 더 적게 보탭니다.

매달 100달러씩 4개월간, 가격이 100달러, 80달러, 125달러, 100달러일 때를 계산해 봅시다. 취득 수량은 각각 1.0, 1.25, 0.8, 1.0으로, 400달러 투자에 총 4.05단위입니다. 평균 매입 단가는 400 / 4.05 ≈ 98.77달러입니다. 네 가격의 단순 산술 평균 (100 + 80 + 125 + 100) / 4 = 101.25달러와 비교하면 DCA 평균이 더 낮은데, 이는 우연이 아닙니다.

수학적으로, 매번 같은 금액을 투자하면 평균 매입 단가는 매수 가격들의 조화 평균이 됩니다. 즉 n을 각 가격의 역수 합으로 나눈 값입니다. 조화 평균은 항상 산술 평균보다 작거나 같으며, 모든 가격이 동일할 때만 같아집니다. 쉽게 말해 고정 금액 적립은 타이밍 감각도, 예측도, 의지력도 없이 저렴한 매수에 자동으로 더 큰 비중을, 비싼 매수에 더 작은 비중을 두게 합니다. 가격이 평균 주위에서 더 크게 출렁일수록 두 평균의 차이도 커지므로, 변동성 자체가 평균 단가에 유리하게 작용합니다.`,
				ja: `ドルコスト平均法(DCA)の核心は一つの比率です。1単位あたりの平均取得価格は、投資総額を取得総数量で割った値になります。毎回一定額を投資するため、受け取る数量は価格によって変わります。100ドルで買えるのは、価格が80ドルなら1.25単位ですが、125ドルなら0.8単位だけです。つまり安い時期は分母により多くの数量を加え、高い時期は少ししか加えません。

毎月100ドルを4か月、価格が100ドル、80ドル、125ドル、100ドルのケースを計算してみましょう。取得数量はそれぞれ1.0、1.25、0.8、1.0で、投資額400ドルに対して合計4.05単位です。平均取得価格は400 / 4.05 ≈ 98.77ドルになります。4つの価格の単純な算術平均 (100 + 80 + 125 + 100) / 4 = 101.25ドルと比べるとDCAの平均の方が低く、これは偶然ではありません。

数学的には、毎回同じ金額を投資すると、平均取得価格は購入価格の調和平均になります。すなわちnを各価格の逆数の合計で割った値です。調和平均は常に算術平均以下であり、すべての価格が同一のときだけ等しくなります。平たく言えば、定額積立はタイミングの技術も予測も意志力も必要とせず、安い購入に自動的に大きなウェイトを、高い購入に小さなウェイトを与えます。価格が平均の周りで大きく変動するほど二つの平均の差は広がるため、ボラティリティそのものが平均取得価格に有利に働くのです。`,
				zh: `定投(DCA)的核心是一个比率：每单位平均成本等于总投入金额除以总取得数量。由于每期投入固定金额，买到的数量随价格变化。100美元在价格为80美元时能买1.25个单位，而在125美元时只能买0.8个单位，因此便宜的时期为分母贡献更多数量，昂贵的时期贡献更少。

来算一个四个月的计划：每月投入100美元，价格依次为100、80、125、100美元。取得数量分别为1.0、1.25、0.8、1.0，总计400美元买到4.05个单位。平均成本为400 / 4.05 ≈ 98.77美元。与四个价格的简单算术平均 (100 + 80 + 125 + 100) / 4 = 101.25美元相比，定投的平均成本更低，这并非巧合。

从数学上讲，当你每次投入相同金额时，平均成本就是各次买入价格的调和平均数：即n除以各价格倒数之和。调和平均数总是小于或等于算术平均数，只有当所有价格完全相同时才相等。通俗地说，固定金额的定投计划会自动加大便宜买入的权重、减小昂贵买入的权重，不需要择时技巧、预测或意志力。价格围绕均值波动越剧烈，两个平均数的差距就越大，因此波动性本身反而有利于你的平均成本。`
			},
			code: {
				lang: 'js',
				example: `// Four monthly buys of $100 each
const prices = [100, 80, 125, 100];
const units = prices.map((p) => 100 / p);      // [1.0, 1.25, 0.8, 1.0]
const totalUnits = 1.0 + 1.25 + 0.8 + 1.0;     // 4.05
const avgCost = 400 / totalUnits;              // ≈ 98.77 (harmonic mean)
const meanPrice = (100 + 80 + 125 + 100) / 4;  // 101.25 (arithmetic mean)
// avgCost < meanPrice whenever prices vary`
			}
		},
		{
			heading: {
				en: 'DCA vs Lump-Sum Investing: What the Evidence Says',
				ko: 'DCA와 일시 투자: 연구 결과가 말해주는 것',
				ja: 'DCAと一括投資：エビデンスが示すこと',
				zh: '定投与一次性投入：证据怎么说'
			},
			body: {
				en: `If you already have the full amount in hand, the historical evidence is uncomfortable for DCA. Studies by Vanguard and others across US, UK, and Australian market history found that investing a lump sum immediately outperformed spreading it over 6 to 12 months in roughly two-thirds of rolling periods. The reason is simple: markets have trended upward more often than not, so every dollar waiting on the sidelines misses expected growth and any dividends along the way. On average, delay costs money.

So why does DCA remain so popular? Because the two-thirds statistic hides what the other one-third feels like. Committing everything the week before a 30% drawdown is the scenario people actually fear, and DCA caps that regret: a schedule that keeps buying through the decline picks up cheap units instead. DCA is best understood as a risk-management and behavioral commitment device, not a return maximizer. It converts a paralyzing question, whether now is a good time to buy, into a routine you can automate and forget.

There is also a case where the comparison is moot: most people invest from income, receiving money in monthly increments. Contributing each payday is effectively a series of small lump sums invested as early as possible, so the paycheck investor gets both properties at once. DCA tends to beat lump-sum specifically in markets that fall and then recover, or that chop sideways with high volatility, which is one reason the approach has such a strong following among crypto investors.`,
				ko: `이미 목돈이 손에 있다면, 역사적 증거는 DCA에 불리합니다. 뱅가드(Vanguard) 등 여러 기관이 미국, 영국, 호주 시장의 역사를 분석한 연구에 따르면, 목돈을 즉시 투자하는 것이 6~12개월에 걸쳐 나누어 투자하는 것보다 롤링 기간의 약 3분의 2에서 더 나은 성과를 냈습니다. 이유는 단순합니다. 시장은 오르는 기간이 더 많았기 때문에, 대기 중인 현금은 기대 수익과 그 사이의 배당을 놓치게 됩니다. 평균적으로 미루는 것은 비용입니다.

그런데 왜 DCA는 여전히 인기가 많을까요? 3분의 2라는 통계가 나머지 3분의 1의 체감을 감추기 때문입니다. 30% 폭락 일주일 전에 전부를 넣는 것이 사람들이 실제로 두려워하는 시나리오이고, DCA는 그 후회에 상한선을 둡니다. 하락 구간에도 계속 매수하는 스케줄은 오히려 싼 수량을 담아가기 때문입니다. DCA는 수익 극대화 도구가 아니라 위험 관리와 행동 통제 장치로 이해하는 것이 가장 정확합니다. 지금이 살 때인가라는 마비를 부르는 질문을, 자동화하고 잊어버릴 수 있는 루틴으로 바꿔 줍니다.

비교 자체가 무의미한 경우도 있습니다. 대부분의 사람은 소득에서 투자하며, 돈은 매달 조금씩 들어옵니다. 월급날마다 투자하는 것은 사실상 가능한 가장 빠른 시점에 투자되는 작은 목돈의 연속이므로, 월급 투자자는 두 방식의 성질을 동시에 누립니다. DCA가 일시 투자를 이기기 쉬운 시장은 하락 후 회복하거나 높은 변동성 속에 횡보하는 시장인데, 이것이 암호화폐 투자자들 사이에서 이 방식의 지지가 특히 두터운 이유 중 하나입니다.`,
				ja: `すでにまとまった資金が手元にあるなら、歴史的なエビデンスはDCAにとって都合の悪いものです。バンガード(Vanguard)などが米国・英国・オーストラリア市場の歴史を分析した研究では、一括で即時に投資した方が、6〜12か月に分けて投資するよりもローリング期間の約3分の2で好成績でした。理由は単純で、市場は上昇した期間の方が多かったため、待機している現金は期待成長とその間の配当を逃すからです。平均的には、先送りはコストになります。

ではなぜDCAはこれほど人気なのでしょうか。3分の2という統計は、残り3分の1がどう感じられるかを隠しているからです。30%の下落の一週間前に全額を投じるのが人々が本当に恐れるシナリオであり、DCAはその後悔に上限を設けます。下落局面でも買い続けるスケジュールは、むしろ安い数量を拾っていくからです。DCAはリターンの最大化ツールではなく、リスク管理と行動コミットメントの装置として理解するのが最も正確です。「今は買い時か」という思考を麻痺させる問いを、自動化して忘れられるルーティンに変えてくれます。

比較自体が無意味なケースもあります。ほとんどの人は収入から投資し、資金は毎月少しずつ入ってきます。給料日ごとの積立は実質的に、できるだけ早く投資される小さな一括投資の連続なので、給与投資家は両方の性質を同時に得られます。DCAが一括投資に勝ちやすいのは、下落後に回復する市場や、高いボラティリティの中で横ばいが続く市場です。これが暗号資産投資家の間でこの手法の支持が特に厚い理由の一つです。`,
				zh: `如果你手上已经有一整笔资金，历史证据对定投并不友好。Vanguard(先锋集团)等机构针对美国、英国和澳大利亚市场历史的研究发现，在大约三分之二的滚动区间里，立即一次性投入的表现优于分6到12个月逐步投入。原因很简单：市场上涨的时间多于下跌，闲置在场外的每一块钱都会错过预期增长和期间的股息。平均而言，拖延是有代价的。

那为什么定投依然如此流行？因为三分之二这个统计掩盖了另外三分之一的切身感受。人们真正害怕的场景，是在下跌30%的前一周把全部资金投入，而定投为这种懊悔设定了上限：跌势中持续买入的计划反而会捡到便宜的筹码。定投最准确的定位是风险管理和行为约束工具，而不是收益最大化工具。它把"现在是不是买入的好时机"这个令人瘫痪的问题，变成一个可以自动执行、无需再想的例行程序。

还有一种情况让这场比较失去意义：大多数人是用收入来投资的，钱按月分批到账。每个发薪日投入，实际上等于一连串尽早投入的小额一次性投资，因此工薪投资者同时获得了两种方式的特性。定投通常恰恰在先跌后回升、或高波动横盘的市场中战胜一次性投入，这也是它在加密货币投资者中拥有大量拥趸的原因之一。`
			}
		},
		{
			heading: {
				en: 'Edge Cases and Common Mistakes',
				ko: '예외 상황과 흔한 실수',
				ja: 'エッジケースとよくある間違い',
				zh: '边界情况与常见错误'
			},
			body: {
				en: `DCA has failure modes worth knowing before you rely on it. In a steadily rising market it systematically underperforms, because every later purchase is more expensive than the last: buying $100 monthly at prices of $100, $110, $120, and $130 yields about 3.512 units at an average cost near $113.91, worse than the $100 cost you would have locked in by investing all $400 on day one.

The most damaging mistake is behavioral: stopping contributions during a crash. The entire mechanism depends on buying the cheap units near the bottom; if you pause when prices fall 40% and resume after recovery, you have kept the expensive purchases and skipped the discounted ones, inverting the strategy's logic. Automating transfers so that no monthly decision is required is the practical defense.

Costs matter disproportionately at small sizes. A fixed $1 fee on a $50 purchase is a 2% loss before the asset moves at all; the same fee on a $500 purchase is 0.2%. When fees are fixed, buying less frequently in larger amounts usually nets out better. On thinly traded pairs, bid-ask spread and slippage act as an additional hidden fee on every single order.

Finally, DCA is not a rescue plan for a bad pick. Averaging down into one failing company or token concentrates risk in something that may go to zero, and an asset that never recovers has no cheap units, only losses. The strategy's assumptions hold for broad, durable assets such as diversified index funds, not for any single position.`,
				ko: `DCA에도 의존하기 전에 알아야 할 실패 모드가 있습니다. 꾸준히 상승하는 시장에서는 구조적으로 성과가 뒤처집니다. 매수할 때마다 이전보다 비싸지기 때문입니다. 가격이 100달러, 110달러, 120달러, 130달러일 때 매달 100달러씩 사면 약 3.512단위를 평균 단가 약 113.91달러에 취득하게 되는데, 첫날 400달러 전부를 넣어 100달러 단가로 고정했을 때보다 나쁜 결과입니다.

가장 치명적인 실수는 행동에서 나옵니다. 폭락 중에 적립을 멈추는 것입니다. 이 전략의 메커니즘 전체가 바닥 근처에서 싼 수량을 사는 데 달려 있습니다. 가격이 40% 떨어졌을 때 멈추고 회복 후에 재개한다면, 비싼 매수만 남기고 할인된 매수를 건너뛴 셈이 되어 전략의 논리가 뒤집힙니다. 매달 판단할 필요가 없도록 이체를 자동화하는 것이 현실적인 방어책입니다.

비용은 금액이 작을수록 불균형하게 큽니다. 50달러 매수에 붙는 1달러 고정 수수료는 자산이 움직이기도 전에 2%의 손실이고, 같은 수수료가 500달러 매수에서는 0.2%입니다. 수수료가 고정이라면 더 큰 금액을 덜 자주 사는 편이 보통 유리합니다. 거래가 적은 페어에서는 호가 스프레드와 슬리피지가 모든 주문에 붙는 숨은 수수료로 작용합니다.

마지막으로 DCA는 잘못된 종목 선택을 구제하는 계획이 아닙니다. 무너져 가는 회사나 토큰 하나에 물타기하는 것은 0이 될 수도 있는 대상에 위험을 집중시키는 일이며, 영영 회복하지 못하는 자산에는 싼 수량이란 없고 손실만 있습니다. 이 전략의 전제는 분산된 인덱스 펀드처럼 넓고 내구성 있는 자산에서 성립하며, 개별 포지션 하나에서는 성립하지 않습니다.`,
				ja: `DCAにも、頼る前に知っておくべき失敗モードがあります。着実に上昇する市場では構造的に劣後します。後の購入ほど前回より高くなるからです。価格が100ドル、110ドル、120ドル、130ドルのとき毎月100ドルずつ買うと、約3.512単位を平均取得価格約113.91ドルで取得することになり、初日に400ドル全額を投じて100ドルの単価で固定した場合より悪い結果です。

最も致命的な間違いは行動面にあります。暴落中に積立を止めることです。この戦略のメカニズム全体は、底値付近で安い数量を買うことに懸かっています。価格が40%下がったときに止めて回復後に再開すれば、高い購入だけを残して割引された購入を飛ばしたことになり、戦略の論理が逆転します。毎月の判断を不要にするよう振替を自動化するのが現実的な防御策です。

コストは金額が小さいほど不釣り合いに重くなります。50ドルの購入にかかる1ドルの固定手数料は、資産が動く前から2%の損失であり、同じ手数料でも500ドルの購入なら0.2%です。手数料が固定なら、より大きな金額を低い頻度で買う方が通常は有利です。取引の薄いペアでは、気配スプレッドとスリッページがすべての注文に付く隠れた手数料として働きます。

最後に、DCAは悪い銘柄選びを救済する計画ではありません。崩れていく一つの企業やトークンへのナンピンは、ゼロになり得る対象にリスクを集中させる行為であり、二度と回復しない資産に安い数量はなく、あるのは損失だけです。この戦略の前提は、分散されたインデックスファンドのような広く耐久性のある資産で成り立つものであり、個別の一つのポジションでは成り立ちません。`,
				zh: `在依赖定投之前，值得了解它的失效场景。在稳步上涨的市场中，定投在结构上必然跑输，因为每次买入都比上一次更贵：价格依次为100、110、120、130美元时每月买入100美元，最终约得到3.512个单位，平均成本约113.91美元，比第一天就投入全部400美元、锁定100美元成本的结果更差。

破坏力最大的错误是行为上的：在暴跌中停止投入。整个机制的关键就在于在底部附近买到便宜的筹码；如果价格下跌40%时你暂停、等回升后再恢复，你留下的全是昂贵的买入，跳过的恰恰是打折的买入，把策略的逻辑彻底颠倒了。把转账设为自动执行、让每月无需做决定，是最实际的防御。

成本对小额订单的伤害尤其不成比例。50美元的买单被收取1美元固定手续费，等于资产还没波动就先损失2%；同样的手续费放在500美元的买单上只有0.2%。如果手续费是固定的，通常加大单笔金额、降低频率更划算。在成交清淡的交易对上，买卖价差和滑点则相当于附加在每一笔订单上的隐形费用。

最后，定投不是挽救错误选择的方案。向一家不断恶化的公司或代币持续摊低成本，是把风险集中在可能归零的标的上，而永远无法回升的资产没有便宜筹码，只有亏损。这套策略的前提适用于宽基指数基金这类广泛而持久的资产，而不是任何单一持仓。`
			},
			code: {
				lang: 'text',
				example: `Fixed fee drag on small orders
  $1 fee on a $50 buy:   1 / 50  = 0.02   ->  2.0% lost before any price move
  $1 fee on a $500 buy:  1 / 500 = 0.002  ->  0.2% lost

Rising market example: $100/month at $100, $110, $120, $130
  units    = 1 + 0.9091 + 0.8333 + 0.7692 = 3.5117
  avg cost = 400 / 3.5117 ≈ $113.91   (vs $100 lump sum on day one)`
			}
		},
		{
			heading: {
				en: 'Variations Worth Knowing',
				ko: '알아둘 만한 변형 전략',
				ja: '知っておきたいバリエーション',
				zh: '值得了解的变体策略'
			},
			body: {
				en: `Several relatives of standard DCA solve adjacent problems. DCA in reverse, selling a fixed dollar amount or a fixed fraction of a position at regular intervals, de-risks an exit the same way regular buying de-risks an entry. Retirees drawing down a portfolio and holders of concentrated positions use it to avoid selling everything at what turns out to be a local bottom.

Value averaging targets a growth path for the portfolio rather than a fixed contribution. If your plan calls for the account to grow by $500 per month and markets fall, you contribute more than $500 to get back on track; if markets surge, you contribute less or even sell. This buys more aggressively at lows than plain DCA, but its cash demands are unpredictable: after a sharp drop, the required contribution can be several times your normal amount, which many budgets cannot absorb.

A hybrid answers the lump-sum dilemma directly: invest half immediately, then DCA the remainder over 6 to 12 months. The expected return sits between the two pure approaches, and so does the worst case.

Also note the interaction with rebalancing. Directing each new contribution to whichever asset class is furthest below its target weight rebalances the portfolio with fresh cash, often reducing or eliminating the need to sell, which can also mean fewer taxable events.`,
				ko: `표준 DCA의 친척 격인 전략들이 인접한 문제를 풀어 줍니다. 역방향 DCA, 즉 일정 금액 또는 포지션의 일정 비율을 정기적으로 매도하는 방식은, 정기 매수가 진입 위험을 줄이는 것과 같은 원리로 청산 위험을 줄입니다. 포트폴리오를 인출하는 은퇴자나 집중된 포지션의 보유자가, 결과적으로 국지적 바닥으로 판명될 시점에 전량 매도하는 일을 피하기 위해 사용합니다.

밸류 애버리징(value averaging)은 고정 적립액 대신 포트폴리오의 성장 경로를 목표로 합니다. 계좌가 매달 500달러씩 커지는 것이 계획이라면, 시장이 하락했을 때는 경로 복귀를 위해 500달러보다 많이 넣고, 급등했을 때는 덜 넣거나 심지어 팔기도 합니다. 일반 DCA보다 저점에서 더 공격적으로 사게 되지만 현금 수요를 예측할 수 없다는 단점이 있습니다. 급락 후에는 필요한 적립액이 평소의 몇 배가 될 수 있어 많은 가계 예산으로는 감당하기 어렵습니다.

하이브리드는 일시 투자 딜레마에 직접 답합니다. 절반을 즉시 투자하고 나머지를 6~12개월에 걸쳐 DCA하는 방식입니다. 기대 수익은 두 순수 방식의 중간에 위치하고, 최악의 경우도 마찬가지입니다.

리밸런싱과의 상호작용도 눈여겨보세요. 매번의 신규 적립금을 목표 비중에서 가장 많이 미달한 자산군으로 보내면 새 현금으로 포트폴리오가 리밸런싱되어 매도 필요가 줄거나 없어지는 경우가 많고, 이는 과세 이벤트가 줄어든다는 의미이기도 합니다.`,
				ja: `標準的なDCAの親戚にあたる戦略が、隣接する問題を解決してくれます。逆方向のDCA、つまり一定額またはポジションの一定割合を定期的に売却する方式は、定期的な買いがエントリーのリスクを下げるのと同じ原理で、出口のリスクを下げます。ポートフォリオを取り崩す退職者や集中ポジションの保有者が、結果的に目先の底と判明する局面で全部を売ってしまう事態を避けるために使います。

バリュー平均法(value averaging)は、固定の積立額ではなくポートフォリオの成長経路を目標にします。口座を毎月500ドルずつ成長させる計画なら、市場が下落したときは経路に戻すため500ドルより多く拠出し、急騰したときは少なく拠出するか、売却さえします。通常のDCAより安値で積極的に買うことになりますが、資金需要が予測できないのが難点です。急落の後には必要拠出額が普段の数倍になることがあり、多くの家計では吸収できません。

ハイブリッドは一括投資のジレンマに直接答えます。半分を即時に投資し、残りを6〜12か月かけてDCAする方式です。期待リターンは二つの純粋な方式の中間に位置し、最悪のケースも同様です。

リバランスとの相互作用にも注目してください。毎回の新規拠出を目標ウェイトから最も下振れしている資産クラスに向ければ、新しい資金でポートフォリオがリバランスされ、売却の必要が減るかなくなることが多く、それは課税イベントが減ることも意味します。`,
				zh: `标准定投有几个近亲策略，各自解决相邻的问题。反向定投，即按固定金额或固定比例定期卖出仓位，用定期买入降低入场风险的同一原理来降低退出风险。提取养老组合的退休人士和持有集中仓位的投资者用它来避免在事后被证明是阶段性底部的时刻清仓。

价值平均(value averaging)瞄准的不是固定投入额，而是组合的增长路径。如果计划是账户每月增长500美元，那么市场下跌时你要投入超过500美元以回到轨道；市场大涨时则少投，甚至卖出。它在低点比普通定投买得更激进，但现金需求无法预测：大跌之后，所需投入可能是平时的好几倍，很多家庭预算难以承受。

混合方案直接回应一次性投入的两难：立即投入一半，剩余部分在6到12个月内定投。预期收益介于两种纯粹方式之间，最坏情况也是如此。

还要注意与再平衡的互动。把每笔新投入导向低于目标权重最多的资产类别，等于用新资金完成组合再平衡，常常能减少甚至免去卖出操作，这也往往意味着更少的应税事件。`
			}
		},
		{
			heading: {
				en: 'Record-Keeping, Taxes, and a Final Word',
				ko: '기록 관리, 세금, 그리고 마지막 당부',
				ja: '記録管理・税金・最後に',
				zh: '记录保存、税务与结语'
			},
			body: {
				en: `Every DCA purchase creates a separate tax lot: a quantity of units with its own date and cost basis. After three years of monthly buying you hold 36 lots, and which basis applies when you sell depends on your jurisdiction's rules. Some tax systems mandate or default to FIFO (first in, first out), others use an average-cost method across all units, and some allow you to identify specific lots at the time of sale; these choices can change the taxable gain on an identical sale by a wide margin. Rules for cryptocurrency in particular are still evolving in many countries.

The practical takeaway is simple: keep a record of every purchase, including date, amount invested, units received, price, and fees, from the very first buy. Exchanges and brokers close, change owners, and prune old data; an export you keep yourself is far more durable. Because tax treatment differs so much by country and by asset type, consult a qualified tax professional before selling significant DCA-accumulated positions.

This calculator uses a simplified linear price path, which makes it useful for building intuition about contribution size, frequency, and horizon, and inaccurate as a forecast, since real prices are anything but linear. Everything on this page, including the calculator itself, is educational content only and is not financial advice; past performance does not guarantee future results, and any investment can lose value. Use the numbers as a starting point for questions, not as a plan.`,
				ko: `모든 DCA 매수는 별도의 세무 로트(tax lot)를 만듭니다. 고유한 날짜와 취득 원가를 가진 수량 묶음입니다. 매달 3년을 사 모으면 36개의 로트를 보유하게 되고, 매도할 때 어떤 원가가 적용되는지는 거주 국가의 규정에 따라 달라집니다. 어떤 세제는 선입선출(FIFO)을 의무화하거나 기본값으로 삼고, 어떤 세제는 전체 수량에 대한 평균 원가법을 쓰며, 매도 시점에 특정 로트를 지정하도록 허용하는 곳도 있습니다. 이 선택에 따라 동일한 매도의 과세 이익이 크게 달라질 수 있습니다. 특히 암호화폐 관련 규정은 많은 나라에서 아직 정비 중입니다.

실무적인 결론은 단순합니다. 첫 매수부터 날짜, 투자 금액, 취득 수량, 가격, 수수료 등 모든 매수 기록을 남기세요. 거래소와 증권사는 문을 닫거나 주인이 바뀌거나 오래된 데이터를 삭제합니다. 직접 보관하는 내보내기 파일이 훨씬 오래갑니다. 세금 처리 방식은 국가와 자산 유형에 따라 크게 다르므로, DCA로 쌓은 상당한 규모의 포지션을 매도하기 전에는 자격 있는 세무 전문가와 상담하세요.

이 계산기는 단순화된 선형 가격 경로를 사용합니다. 적립 금액, 주기, 기간에 대한 직관을 기르는 데는 유용하지만, 실제 가격은 결코 선형이 아니므로 예측 도구로는 부정확합니다. 계산기 자체를 포함해 이 페이지의 모든 내용은 교육 목적의 콘텐츠일 뿐 재무 자문이 아닙니다. 과거의 성과는 미래의 결과를 보장하지 않으며, 어떤 투자든 가치를 잃을 수 있습니다. 이 숫자들은 계획이 아니라 질문의 출발점으로 사용하세요.`,
				ja: `DCAでの購入はすべて、固有の日付と取得原価を持つ独立したタックスロット(税務上の取得単位)を作ります。毎月3年間買い続ければ36個のロットを保有することになり、売却時にどの原価が適用されるかは居住国のルールによって異なります。先入先出(FIFO)を義務付けまたはデフォルトとする税制もあれば、全数量に対する平均取得価額方式を使う税制もあり、売却時に特定のロットを指定できる国もあります。この選択によって、同一の売却でも課税対象の利益は大きく変わり得ます。特に暗号資産のルールは多くの国でまだ整備の途上です。

実務的な結論はシンプルです。最初の購入から、日付・投資額・取得数量・価格・手数料といったすべての購入記録を残してください。取引所や証券会社は閉鎖され、経営者が変わり、古いデータを削除します。自分で保管するエクスポートの方がはるかに長持ちします。税務上の扱いは国と資産の種類によって大きく異なるため、DCAで積み上げた相当規模のポジションを売却する前に、資格を持つ税務専門家に相談してください。

この計算機は単純化された線形の価格経路を使っています。拠出額・頻度・期間についての直感を養うには有用ですが、実際の価格は決して線形ではないため、予測としては不正確です。計算機自体を含めこのページのすべての内容は教育目的のコンテンツであり、金融アドバイスではありません。過去の実績は将来の結果を保証せず、どんな投資も価値を失う可能性があります。これらの数字は計画としてではなく、問いの出発点として使ってください。`,
				zh: `每一笔定投买入都会形成一个独立的税务批次(tax lot)：一批有自己日期和成本基础的单位。按月买满三年后，你将持有36个批次，卖出时适用哪个成本取决于你所在司法辖区的规则。有的税制强制或默认使用先进先出(FIFO)，有的对全部持仓采用平均成本法，还有的允许在卖出时指定具体批次；同样一笔卖出，不同选择带来的应税利得可能相差很大。尤其是加密货币的相关规则，在许多国家仍在演变之中。

实际的结论很简单：从第一笔买入开始，就记录每次购买的日期、投入金额、取得数量、价格和手续费。交易所和券商会倒闭、易主或清理旧数据；自己保存的导出文件要可靠得多。由于各国、各资产类型的税务处理差异巨大，在卖出通过定投积累的较大仓位之前，请咨询有资质的税务专业人士。

本计算器采用简化的线性价格路径，用来建立关于投入金额、频率和期限的直觉很有帮助，但真实价格绝非线性，因此不能作为预测。本页面的全部内容，包括计算器本身，仅为教育性内容，不构成财务建议；过去的表现不能保证未来的结果，任何投资都可能亏损。请把这些数字当作提出问题的起点，而不是一份计划。`
			}
		}
	];

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	const toolContent = {
		about: {
			en: 'Dollar-cost averaging (DCA) is a strategy of investing a fixed amount at regular intervals regardless of price, which can reduce the impact of short-term volatility on the average purchase price. This calculator estimates how a DCA plan might have performed under simplified linear-price assumptions. Real markets are non-linear and results are not guaranteed; this tool is for educational purposes only and is not financial advice.',
			ko: '정기 적립 투자(DCA)는 가격과 관계없이 일정 금액을 정기적으로 투자하는 전략으로, 평균 매입 단가에 단기 변동성이 미치는 영향을 줄일 수 있습니다. 본 계산기는 선형 가격 변화를 가정한 단순화 모델로 DCA 계획의 가상 성과를 추정합니다. 실제 시장은 비선형이며 결과는 보장되지 않습니다. 본 도구는 교육 목적으로만 제공되며 재무 자문이 아닙니다.',
			ja: 'ドルコスト平均法(DCA)は価格に関係なく一定額を定期的に投資する戦略で、平均購入価格に対する短期ボラティリティの影響を抑えられる可能性があります。本計算機は線形価格変化を仮定した簡易モデルでDCAプランの仮想成績を推定します。実際の市場は非線形で結果は保証されません。本ツールは教育目的のみで金融アドバイスではありません。',
			zh: '定投(DCA)是一种无视价格、定期投入固定金额的策略，可降低短期波动对平均买入价的影响。本计算器在简化的线性价格假设下估算定投计划的模拟表现。实际市场非线性，结果无法保证。本工具仅供教育用途，不是财务建议。'
		},
		howTo: {
			en: [
				'Enter the amount you plan to invest each interval.',
				'Choose the contribution frequency: daily, weekly, or monthly.',
				'Set the duration in months for the DCA plan.',
				'Enter the assumed start price and end price for the asset.',
				'Review the simulated total value, average purchase price, and accumulated coins.'
			],
			ko: [
				'매 회 투자할 금액을 입력합니다.',
				'적립 주기(일/주/월)를 선택합니다.',
				'DCA 계획의 기간(개월)을 설정합니다.',
				'자산의 시작 가격과 종료 가격(가정값)을 입력합니다.',
				'시뮬레이션된 총 가치, 평균 매입 단가, 누적 수량을 확인합니다.'
			],
			ja: [
				'各回に投資する金額を入力します。',
				'積立頻度(毎日/毎週/毎月)を選択します。',
				'DCAプランの期間(月数)を設定します。',
				'資産の開始価格と終了価格(仮定値)を入力します。',
				'シミュレーションされた総額、平均購入価格、累積数量を確認します。'
			],
			zh: [
				'输入每次计划投入的金额。',
				'选择投入频率：每日、每周或每月。',
				'设定定投计划的持续月数。',
				'输入资产的假设起始价格和结束价格。',
				'查看模拟的总价值、平均买入价和累计数量。'
			]
		},
		useCases: {
			en: [
				'Compare DCA outcomes versus a single lump-sum buy in different price scenarios.',
				'Plan a recurring crypto or stock contribution from monthly salary.',
				'Educational illustration of how averaging affects volatile asset entry prices.',
				'Estimate accumulated holdings after a fixed savings horizon.',
				'Stress-test how different end prices change the projected return.'
			],
			ko: [
				'다양한 가격 시나리오에서 DCA와 일시 매수 결과 비교',
				'월 급여로 정기 매수 계획 수립(주식/암호화폐)',
				'평균화가 변동성 자산 진입가에 미치는 영향 학습',
				'고정 저축 기간 후 누적 보유량 추정',
				'다양한 종료가격으로 예상 수익률 스트레스 테스트'
			],
			ja: [
				'様々な価格シナリオでDCAと一括購入の結果を比較',
				'月給からの定期暗号資産・株式積立計画',
				'平均化がボラティリティ資産の取得価格に与える影響の学習',
				'一定期間後の累積保有量の推定',
				'異なる終了価格での予想リターンのストレステスト'
			],
			zh: [
				'在不同价格场景下比较定投与一次性买入的结果',
				'用月薪规划定期加密货币或股票投入',
				'用于说明均值化如何影响波动性资产的入场价',
				'估算固定储蓄期后的累计持仓',
				'对不同结束价格下的预期回报进行压力测试'
			]
		},
		faq: {
			en: [
				{ q: 'Is this financial advice?', a: 'No. This tool is for educational and illustrative purposes only and does not constitute investment advice. Cryptocurrency and equities can lose value.' },
				{ q: 'Why does the result differ from real DCA outcomes?', a: 'This calculator uses a simplified linear price path between start and end prices. Real prices fluctuate, so actual DCA results will differ.' },
				{ q: 'Does DCA always beat lump-sum investing?', a: 'No. Studies show lump-sum often outperforms in upward-trending markets, while DCA can reduce regret in volatile or declining markets. Neither is universally better.' },
				{ q: 'Are fees and taxes included?', a: 'No. This calculation excludes trading fees, spreads, and taxes, which can materially reduce real-world returns.' }
			],
			ko: [
				{ q: '이것은 재무 자문인가요?', a: '아닙니다. 본 도구는 교육 및 예시 목적으로만 제공되며 투자 자문이 아닙니다. 암호화폐와 주식은 가치를 잃을 수 있습니다.' },
				{ q: '결과가 실제 DCA와 다른 이유는?', a: '본 계산기는 시작가와 종료가 사이의 선형 가격 경로를 가정한 단순화 모델입니다. 실제 가격은 변동하므로 결과가 다를 수 있습니다.' },
				{ q: 'DCA가 항상 일시 매수보다 좋나요?', a: '아닙니다. 연구에 따르면 상승장에서는 일시 매수가 우세한 경우가 많고, 변동성이 높거나 하락하는 시장에서는 DCA가 후회를 줄일 수 있습니다. 항상 더 나은 전략은 없습니다.' },
				{ q: '수수료와 세금이 포함되나요?', a: '아니요. 거래 수수료, 스프레드, 세금은 제외되어 있어 실제 수익률은 더 낮을 수 있습니다.' }
			],
			ja: [
				{ q: 'これは金融アドバイスですか?', a: 'いいえ。本ツールは教育・例示目的のみで投資アドバイスではありません。暗号資産や株式は価値を失う可能性があります。' },
				{ q: '実際のDCA結果と異なる理由は?', a: '本計算機は開始価格と終了価格間の線形価格経路を仮定した簡易モデルです。実際の価格は変動するため結果は異なります。' },
				{ q: 'DCAは常に一括購入より優れていますか?', a: 'いいえ。研究では上昇相場では一括購入が優位、ボラティリティの高い市場や下落市場ではDCAが後悔を抑えられることがあります。常により良いとは言えません。' },
				{ q: '手数料や税金は含まれますか?', a: 'いいえ。取引手数料、スプレッド、税金は除外されており、実際のリターンはさらに低くなる可能性があります。' }
			],
			zh: [
				{ q: '这是财务建议吗？', a: '不是。本工具仅供教育和说明用途，不构成投资建议。加密货币和股票可能贬值。' },
				{ q: '为什么结果与真实定投不同？', a: '本计算器假设起止价格之间是线性价格路径的简化模型。实际价格会波动，所以真实定投结果会有差异。' },
				{ q: '定投总比一次性投入好吗？', a: '不是。研究显示，在上升趋势中一次性投入往往胜出，而在波动或下跌市场中定投可降低后悔。没有哪种策略普遍更优。' },
				{ q: '是否包含费用和税收？', a: '没有。本计算未包含交易费用、点差和税收，这些会显著降低真实收益。' }
			]
		},
		related: [
			{ href: '/compound', label: { en: 'Compound Interest', ko: '복리 계산기', ja: '複利計算機', zh: '复利计算器' } },
			{ href: '/profit', label: { en: 'Profit Calculator', ko: '손익 계산기', ja: '損益計算機', zh: '盈亏计算器' } },
			{ href: '/roi', label: { en: 'ROI Calculator', ko: 'ROI 계산기', ja: 'ROI計算機', zh: 'ROI计算器' } }
		],
		externalRefs: [
			{ href: 'https://www.investopedia.com/terms/d/dollarcostaveraging.asp', label: 'Investopedia: Dollar-Cost Averaging' },
			{ href: 'https://www.sec.gov/about/reports-publications/investor-publications/saving-investing', label: 'SEC: Saving and Investing' }
		]
	};

	let investment = 100;
	let frequency: 'daily' | 'weekly' | 'monthly' = 'weekly';
	let duration = 12;
	let startPrice = 30000;
	let endPrice = 45000;

	const periodsPerMonth = { daily: 30, weekly: 4, monthly: 1 };

	$: totalPeriods = duration * periodsPerMonth[frequency];
	$: totalInvested = investment * totalPeriods;
	// Simplified DCA simulation assuming linear price change
	$: avgPrice = (startPrice + endPrice) / 2;
	$: totalCoins = totalInvested / avgPrice;
	$: totalValue = totalCoins * endPrice;
	$: profit = totalValue - totalInvested;
	$: roi = totalInvested > 0 ? (profit / totalInvested) * 100 : 0;

	function formatCurrency(value: number): string {
		return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(value);
	}
</script>

<svelte:head>
	<title>{t('dca.title')} - SDK.bz</title>
	<meta name="description" content={t('dca.desc')} />
	<meta property="og:title" content="{t('dca.title')} - SDK.bz" />
	<meta property="og:description" content={t('dca.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('dca.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('dca.desc')}</p>
	</div>

	<div class="grid md:grid-cols-2 gap-8">
		<div class="space-y-6 bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700">
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('dca.investment')}</label>
				<input type="number" bind:value={investment} min="1" step="10"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-indigo-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('dca.frequency')}</label>
				<select bind:value={frequency}
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-indigo-400">
					<option value="daily">{t('dca.freq.daily')}</option>
					<option value="weekly">{t('dca.freq.weekly')}</option>
					<option value="monthly">{t('dca.freq.monthly')}</option>
				</select>
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('dca.duration')}</label>
				<input type="number" bind:value={duration} min="1" max="120"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-indigo-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('dca.startPrice')}</label>
				<input type="number" bind:value={startPrice} min="0" step="100"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-indigo-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('dca.endPrice')}</label>
				<input type="number" bind:value={endPrice} min="0" step="100"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-indigo-400" />
			</div>
		</div>

		<div class="space-y-4">
			<div class="p-6 rounded-2xl border {profit >= 0 ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800' : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'}">
				<p class="text-sm {profit >= 0 ? 'text-indigo-600 dark:text-indigo-400' : 'text-red-600 dark:text-red-400'} mb-1">{t('dca.totalValue')}</p>
				<p class="text-3xl font-bold {profit >= 0 ? 'text-indigo-700 dark:text-indigo-300' : 'text-red-700 dark:text-red-300'}">{formatCurrency(totalValue)}</p>
				<p class="text-lg {profit >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}">{profit >= 0 ? '+' : ''}{roi.toFixed(2)}%</p>
			</div>
			<div class="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700 space-y-3">
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('dca.totalInvested')}</span>
					<span class="font-semibold text-gray-900 dark:text-dark-100">{formatCurrency(totalInvested)}</span>
				</div>
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('dca.avgPrice')}</span>
					<span class="font-semibold text-gray-900 dark:text-dark-100">{formatCurrency(avgPrice)}</span>
				</div>
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('dca.totalCoins')}</span>
					<span class="font-semibold text-gray-900 dark:text-dark-100">{totalCoins.toFixed(6)}</span>
				</div>
			</div>
		</div>
	</div>

	<ToolContent
		{lang}
		toolName="DCA Calculator"
		toolUrl="https://sdk.bz/{lang}/dca"
		lastUpdated="2026-04-30"
		category="Finance Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sdk.bz/${lang}` },
			{ name: 'Tools', url: `https://sdk.bz/${lang}` },
			{ name: 'DCA Calculator', url: `https://sdk.bz/${lang}/dca` }
		]}
		content={toolContent}
	/>

	<ToolGuide {lang} sections={guideSections} />
</div>
