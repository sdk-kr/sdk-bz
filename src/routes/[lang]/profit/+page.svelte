<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';
	import ToolGuide from '$lib/components/ToolGuide.svelte';

	const guideSections = [
		{
			heading: {
				en: 'The Complete Profit Formula: Fees on Both Sides',
				ko: '완전한 손익 공식: 양쪽에 붙는 수수료',
				ja: '完全な損益計算式：両側にかかる手数料',
				zh: '完整的盈亏公式：两端都要计费'
			},
			body: {
				en: `The number this calculator shows is gross profit: (sell price − buy price) × quantity. Real trading outcomes are measured net of costs, and the honest formula charges a fee on both legs of the trade:

net profit = (sell price × qty − sell fee) − (buy price × qty + buy fee)
return % = net profit ÷ total cost, where total cost = buy price × qty + buy fee.

Walk through a concrete case. You buy 0.5 BTC at $60,000 on an exchange charging a 0.1% taker fee. The notional is $30,000 and the fee is $30, so your total cost is $30,030. You later sell the 0.5 BTC at $66,000. Gross proceeds are $33,000, the 0.1% sell fee is $33, and net proceeds are $32,967. Net profit is $32,967 − $30,030 = $2,937, and the return is $2,937 ÷ $30,030 ≈ 9.78% — not the naive 10% you get by comparing prices alone.

A 0.22 percentage-point gap sounds small, but it compounds with trade frequency: at 50 round trips a year, 0.2% per round trip costs roughly 10% of capital annually before any market risk. On high-fee venues — retail apps commonly charge 0.5% to 1.5% once the spread is included — the gap between gross and net widens dramatically, and short-term strategies that look profitable gross can be reliably unprofitable net.`,
				ko: `이 계산기가 보여주는 숫자는 총손익, 즉 (매도가 − 매수가) × 수량입니다. 실제 거래 성과는 비용을 차감한 순손익으로 측정해야 하며, 정직한 공식은 거래의 양쪽 모두에 수수료를 부과합니다.

순이익 = (매도가 × 수량 − 매도 수수료) − (매수가 × 수량 + 매수 수수료)
수익률 % = 순이익 ÷ 총비용, 여기서 총비용 = 매수가 × 수량 + 매수 수수료.

구체적인 사례를 살펴봅시다. 0.1% 테이커 수수료를 부과하는 거래소에서 0.5 BTC를 $60,000에 매수합니다. 명목 금액은 $30,000이고 수수료는 $30이므로 총비용은 $30,030입니다. 이후 0.5 BTC를 $66,000에 매도합니다. 총 매도 대금은 $33,000, 0.1% 매도 수수료는 $33이며 순수령액은 $32,967입니다. 순이익은 $32,967 − $30,030 = $2,937이고, 수익률은 $2,937 ÷ $30,030 ≈ 9.78%로, 가격만 단순 비교했을 때 나오는 순진한 10%가 아닙니다.

0.22%포인트 차이는 작아 보이지만 거래 빈도에 따라 누적됩니다. 연간 50회 왕복 거래를 하면 왕복당 0.2%만으로도 시장 위험을 고려하기 전에 이미 자본의 약 10%가 매년 비용으로 사라집니다. 수수료가 높은 플랫폼 — 리테일 앱은 스프레드를 포함하면 보통 0.5%~1.5%를 부과합니다 — 에서는 총손익과 순손익의 격차가 크게 벌어지며, 총손익 기준으로는 수익처럼 보이는 단기 전략이 순손익 기준으로는 꾸준히 손실일 수 있습니다.`,
				ja: `この計算機が表示する数値は総損益、つまり（売値 − 買値）× 数量です。実際の取引成績はコスト控除後の純損益で測るべきであり、正直な計算式は取引の両側に手数料を課します。

純利益 =（売値 × 数量 − 売却手数料）−（買値 × 数量 + 購入手数料）
リターン % = 純利益 ÷ 総コスト、ここで総コスト = 買値 × 数量 + 購入手数料。

具体例で確認しましょう。テイカー手数料0.1%の取引所で0.5 BTCを$60,000で購入します。想定元本は$30,000、手数料は$30なので、総コストは$30,030です。その後、0.5 BTCを$66,000で売却します。売却代金の総額は$33,000、0.1%の売却手数料は$33で、手取りは$32,967です。純利益は$32,967 − $30,030 = $2,937、リターンは$2,937 ÷ $30,030 ≈ 9.78%であり、価格だけを比較して得られる素朴な10%ではありません。

0.22パーセントポイントの差は小さく見えますが、取引頻度とともに積み重なります。年間50回の往復取引をすれば、往復あたり0.2%だけで、市場リスクを考える前に資本の約10%が毎年コストとして消えます。手数料の高いプラットフォーム — リテールアプリはスプレッドを含めると通常0.5%〜1.5%を課します — では総損益と純損益の差は劇的に広がり、総損益では利益に見える短期戦略が、純損益では安定して不採算ということも珍しくありません。`,
				zh: `本计算器显示的数字是毛利润，即 (卖出价 − 买入价) × 数量。真实的交易结果必须以扣除成本后的净值来衡量，而诚实的公式会在交易的两端都计入手续费：

净利润 = (卖出价 × 数量 − 卖出手续费) − (买入价 × 数量 + 买入手续费)
收益率 % = 净利润 ÷ 总成本，其中总成本 = 买入价 × 数量 + 买入手续费。

来看一个具体案例。你在一家收取 0.1% 吃单手续费的交易所以 $60,000 买入 0.5 BTC。名义金额为 $30,000，手续费为 $30，因此总成本为 $30,030。之后你以 $66,000 卖出这 0.5 BTC。卖出总额为 $33,000，0.1% 的卖出手续费为 $33，净所得为 $32,967。净利润为 $32,967 − $30,030 = $2,937，收益率为 $2,937 ÷ $30,030 ≈ 9.78% —— 而不是只比较价格得出的天真的 10%。

0.22 个百分点的差距听起来很小，但会随交易频率累积：一年做 50 次往返交易，每次往返 0.2% 的成本，在考虑任何市场风险之前就已每年吃掉约 10% 的本金。在高费率平台上 —— 零售应用把点差算进去后通常收取 0.5% 到 1.5% —— 毛利与净利之间的差距会急剧扩大，毛利口径看似盈利的短线策略在净值口径下可能持续亏损。`
			},
			code: {
				lang: 'javascript',
				example: `const qty = 0.5;
const buyPrice = 60000, sellPrice = 66000;
const feeRate = 0.001; // 0.1% per side

const cost = buyPrice * qty * (1 + feeRate);      // 30000 + 30 = 30030
const proceeds = sellPrice * qty * (1 - feeRate); // 33000 - 33 = 32967
const profit = proceeds - cost;                   // 2937
const returnPct = (profit / cost) * 100;          // 9.78% (not the naive 10%)`
			}
		},
		{
			heading: {
				en: 'Break-Even Price: What You Must Clear Before Any Profit',
				ko: '손익분기 가격: 이익이 나기 전에 넘어야 할 문턱',
				ja: '損益分岐価格：利益の前に越えるべきライン',
				zh: '保本价格：盈利之前必须跨过的门槛'
			},
			body: {
				en: `Because fees are charged on both legs, selling at your entry price loses money. The exit price at which you walk away flat is:

breakeven sell price = buy price × (1 + buy fee rate) ÷ (1 − sell fee rate)

With 0.1% on each side, the multiplier is 1.001 ÷ 0.999 ≈ 1.002002, so you must sell about 0.20% above entry just to break even. With 1% per side — typical of convenience-focused retail apps — the multiplier is 1.01 ÷ 0.99 ≈ 1.0202: the asset has to rise roughly 2.02% before you earn your first cent. A $60,000 entry then needs an exit near $61,212, and anything below that is a loss even though the price went up.

Two hidden components push the true break-even higher. First, the bid-ask spread: you buy at the ask and sell at the bid, so a 0.3% spread acts like an extra 0.3% round-trip fee that never appears on any fee schedule. Second, fixed withdrawal and network fees: moving coins off an exchange might cost 0.0002 BTC, or a flat $15–25 during congested hours on some networks. On a $500 position, a $15 withdrawal fee alone is 3% of the stake — small positions on high-fee venues can need a move of 5% or more just to get back to zero.`,
				ko: `수수료가 양쪽에 부과되기 때문에 진입 가격 그대로 매도하면 손해입니다. 본전으로 빠져나올 수 있는 매도 가격은 다음과 같습니다.

손익분기 매도가 = 매수가 × (1 + 매수 수수료율) ÷ (1 − 매도 수수료율)

양쪽 각 0.1%라면 배수는 1.001 ÷ 0.999 ≈ 1.002002이므로, 본전을 맞추려면 진입가보다 약 0.20% 높게 팔아야 합니다. 편의성 위주 리테일 앱에서 흔한 편도 1%라면 배수는 1.01 ÷ 0.99 ≈ 1.0202가 되어, 첫 한 푼을 벌기 전에 자산이 약 2.02% 올라야 합니다. $60,000에 진입했다면 약 $61,212 부근에서 청산해야 하며, 그 아래에서는 가격이 올랐는데도 손실입니다.

숨어 있는 두 가지 요소가 실제 손익분기점을 더 끌어올립니다. 첫째, 매수-매도 호가 스프레드입니다. 매수는 매도호가(ask)에, 매도는 매수호가(bid)에 체결되므로 0.3% 스프레드는 어떤 수수료표에도 나타나지 않는 0.3%의 추가 왕복 수수료처럼 작동합니다. 둘째, 고정 출금·네트워크 수수료입니다. 거래소에서 코인을 옮기는 데 0.0002 BTC가 들거나, 일부 네트워크의 혼잡 시간대에는 정액 $15~25가 들 수 있습니다. $500 포지션에서는 $15 출금 수수료 하나만으로도 원금의 3%이며, 수수료가 높은 플랫폼의 소액 포지션은 본전에 돌아가기 위해서만 5% 이상의 상승이 필요할 수 있습니다.`,
				ja: `手数料は両側に課されるため、エントリー価格のまま売ると損になります。損得ゼロで手仕舞える売却価格は次の通りです。

損益分岐売値 = 買値 ×（1 + 購入手数料率）÷（1 − 売却手数料率）

両側とも0.1%なら係数は1.001 ÷ 0.999 ≈ 1.002002となり、損益ゼロにするだけでエントリーより約0.20%高く売る必要があります。手軽さ重視のリテールアプリで典型的な片道1%なら、係数は1.01 ÷ 0.99 ≈ 1.0202となり、最初の1円を稼ぐ前に資産が約2.02%上昇しなければなりません。$60,000でエントリーした場合、出口は約$61,212付近が必要で、それ以下では価格が上がったのに損失になります。

隠れた2つの要素が本当の損益分岐点をさらに押し上げます。第一にビッド・アスク・スプレッドです。買いはアスク、売りはビッドで約定するため、0.3%のスプレッドはどの手数料表にも決して現れない0.3%の追加往復手数料のように機能します。第二に固定の出金・ネットワーク手数料です。取引所からコインを移動するのに0.0002 BTCかかったり、一部のネットワークでは混雑時間帯に定額$15〜25かかったりします。$500のポジションでは$15の出金手数料だけで元本の3%であり、高手数料プラットフォームの小口ポジションは、ゼロに戻るためだけに5%以上の上昇が必要になることもあります。`,
				zh: `由于两端都要收费，以进场价原价卖出就是亏钱。让你不赚不亏离场的卖出价是：

保本卖出价 = 买入价 × (1 + 买入费率) ÷ (1 − 卖出费率)

若两边各收 0.1%，系数为 1.001 ÷ 0.999 ≈ 1.002002，即卖出价必须比进场价高约 0.20% 才能保本。若每边收 1% —— 这在主打便捷的零售应用中很典型 —— 系数为 1.01 ÷ 0.99 ≈ 1.0202：资产必须先上涨约 2.02%，你才能赚到第一分钱。以 $60,000 进场，出场价需要在 $61,212 附近，低于这个价位即使价格涨了你仍在亏损。

两个隐藏成本会把真实保本点推得更高。其一是买卖价差：你按卖方报价 (ask) 买入、按买方报价 (bid) 卖出，因此 0.3% 的点差相当于一笔从不出现在任何费率表上的 0.3% 额外往返费用。其二是固定的提币和网络费用：把币从交易所转出可能花费 0.0002 BTC，或在某些网络的拥堵时段花费固定的 $15–25。对一笔 $500 的仓位来说，仅 $15 的提币费就占本金的 3% —— 高费率平台上的小额仓位，可能需要 5% 以上的涨幅才能刚刚回到零。`
			},
			code: {
				lang: 'javascript',
				example: `// breakeven = buyPrice * (1 + fBuy) / (1 - fSell)
60000 * (1 + 0.001) / (1 - 0.001); // = 60120.12 -> +0.20% above entry
60000 * (1 + 0.01) / (1 - 0.01);   // = 61212.12 -> +2.02% above entry`
			}
		},
		{
			heading: {
				en: 'Realized vs. Unrealized P&L: Paper Gains Are Not Money',
				ko: '실현 손익 vs 미실현 손익: 평가 이익은 돈이 아니다',
				ja: '実現損益と未実現損益：含み益はお金ではない',
				zh: '已实现与未实现盈亏：账面收益不是钱'
			},
			body: {
				en: `Unrealized P&L marks your open position to the current market price: it answers the question of what you would have if you sold everything right now at this print. It changes with every tick and can evaporate as fast as it appeared. Realized P&L is different in kind, not just in size: it is locked in the moment you dispose of the asset, and no later price movement can change it.

Portfolio apps blur this line. A dashboard showing +$8,400 profit on an open altcoin position is quoting a hypothetical: filling a large sell order in a thin market moves the price against you (slippage), fees are subtracted on exit, and the quote itself may lag. Treating unrealized gains as spendable money is one of the most common ways traders end up over-leveraged.

Partial sells split one position into both categories. Suppose you hold 2 ETH bought at $2,000 each and sell 1 ETH at $3,000. You realize $1,000 of profit (ignoring fees) — that number is now permanent. The remaining 1 ETH still carries a $2,000 cost basis, and its P&L stays unrealized: if ETH falls back to $2,000, your realized profit is still $1,000 while the open lot shows $0. Tracking the two separately is the only way to know how much of your profit actually survived your trading.`,
				ko: `미실현 손익은 보유 중인 포지션을 현재 시장 가격으로 평가한 것입니다. 지금 이 가격에 전부 판다면 얼마가 되는가에 대한 답이며, 틱마다 변하고 나타났던 속도만큼 빠르게 사라질 수 있습니다. 실현 손익은 크기가 아니라 종류가 다릅니다. 자산을 처분하는 순간 확정되며, 이후 어떤 가격 변동도 이를 바꿀 수 없습니다.

포트폴리오 앱은 이 경계를 흐립니다. 미청산 알트코인 포지션에 +$8,400 수익이라고 표시된 대시보드는 가정을 인용하고 있을 뿐입니다. 유동성이 얕은 시장에서 큰 매도 주문을 체결하면 가격이 불리하게 움직이고(슬리피지), 청산 시 수수료가 빠지며, 표시된 호가 자체가 지연되었을 수도 있습니다. 미실현 이익을 쓸 수 있는 돈으로 취급하는 것은 트레이더가 과도한 레버리지에 빠지는 가장 흔한 경로 중 하나입니다.

부분 매도는 하나의 포지션을 두 범주로 나눕니다. 각 $2,000에 산 2 ETH를 보유하다가 1 ETH를 $3,000에 판다고 합시다. (수수료 제외 시) $1,000의 이익이 실현되며 이 숫자는 이제 영구적입니다. 남은 1 ETH는 여전히 $2,000의 취득가를 가지며 그 손익은 미실현 상태로 남습니다. ETH가 $2,000로 되돌아가도 실현 이익은 여전히 $1,000이고 남은 랏은 $0을 표시합니다. 둘을 분리해서 추적하는 것이 수익 중 실제로 살아남은 금액을 아는 유일한 방법입니다.`,
				ja: `未実現損益は、保有中のポジションを現在の市場価格で評価したものです。今この価格で全部売ったらいくらになるか、という問いへの答えであり、ティックごとに変わり、現れたのと同じ速さで消えることがあります。実現損益は大きさではなく種類が違います。資産を手放した瞬間に確定し、その後のどんな値動きもそれを変えられません。

ポートフォリオアプリはこの境界を曖昧にします。未決済のアルトコインポジションに+$8,400の利益と表示するダッシュボードは、仮定の数字を示しているにすぎません。流動性の薄い市場で大きな売り注文を約定させれば価格は不利に動き（スリッページ）、出口では手数料が差し引かれ、表示価格自体が遅延している可能性もあります。未実現利益を使えるお金として扱うことは、トレーダーが過剰レバレッジに陥る最も一般的な経路の一つです。

部分売却は1つのポジションを両方のカテゴリに分割します。各$2,000で買った2 ETHを保有し、1 ETHを$3,000で売るとします。（手数料を除けば）$1,000の利益が実現し、この数字はもう恒久的です。残りの1 ETHは依然として$2,000の取得原価を持ち、その損益は未実現のままです。ETHが$2,000に戻っても実現利益は$1,000のままで、残りのロットは$0を示します。2つを分けて追跡することが、利益のうち実際に生き残った金額を知る唯一の方法です。`,
				zh: `未实现盈亏是把持仓按当前市场价格估值的结果：它回答的是如果你现在按这个价格全部卖出会得到多少。它随每一次报价跳动而变化，来得快也去得快。已实现盈亏则是性质上的不同，而不只是数额上的不同：在你处置资产的那一刻锁定，之后任何价格波动都无法改变它。

投资组合应用模糊了这条界线。仪表盘上一笔未平仓山寨币显示 +$8,400 利润，引用的只是一个假设：在流动性稀薄的市场中成交大额卖单会把价格推向对你不利的方向（滑点），离场时还要扣除手续费，而且报价本身可能滞后。把未实现收益当成可以花的钱，是交易者陷入过度杠杆的最常见方式之一。

部分卖出会把一个仓位拆成两个类别。假设你持有以每枚 $2,000 买入的 2 ETH，以 $3,000 卖出 1 ETH。你实现了 $1,000 的利润（不计手续费）—— 这个数字从此固定。剩下的 1 ETH 仍带着 $2,000 的成本基础，其盈亏保持未实现状态：如果 ETH 跌回 $2,000，你的已实现利润仍是 $1,000，而剩余批次显示 $0。把两者分开跟踪，是弄清你的利润到底有多少真正留住了的唯一办法。`
			}
		},
		{
			heading: {
				en: 'Cost Basis Methods: FIFO, LIFO, Average Cost, and HIFO',
				ko: '취득가 산정 방법: FIFO, LIFO, 평균단가, HIFO',
				ja: '取得原価の計算方法：FIFO・LIFO・平均原価・HIFO',
				zh: '成本基础核算方法：FIFO、LIFO、平均成本与 HIFO'
			},
			body: {
				en: `When you buy the same asset at different prices, the phrase "my buy price" becomes ambiguous, and the accounting method you use decides your reported gain. Consider three trades: buy 1 BTC at $30,000, later buy 1 BTC at $50,000, then sell 1 BTC at $60,000.

FIFO (first in, first out) deems the $30,000 coin sold: reported gain $30,000. LIFO (last in, first out) sells the $50,000 coin: gain $10,000. Average cost blends the lots into a $40,000 basis: gain $20,000. HIFO (highest in, first out) always disposes of the most expensive lot first — here the same as LIFO at $10,000 — and by construction minimizes the reported gain of any sale.

Identical trades, four different profits ranging from $10,000 to $30,000 — a 3x spread. None of them is more true than the others for measuring performance, but for taxes the difference is real money, and which method you are permitted to use depends on your jurisdiction and sometimes on the asset class; some tax authorities mandate one method, others allow a choice but require consistency. The practical takeaways: keep complete, timestamped records of every buy, sell, and fee from day one (reconstructing them years later is painful), and consult a qualified tax professional in your jurisdiction before relying on any specific method.`,
				ko: `같은 자산을 서로 다른 가격에 매수하면 "내 매수가"라는 말이 모호해지고, 어떤 회계 방법을 쓰느냐가 보고되는 이익을 결정합니다. 세 건의 거래를 생각해 봅시다. 1 BTC를 $30,000에 매수하고, 나중에 1 BTC를 $50,000에 추가 매수한 뒤, 1 BTC를 $60,000에 매도합니다.

FIFO(선입선출)는 $30,000짜리 코인을 판 것으로 간주합니다. 보고 이익 $30,000. LIFO(후입선출)는 $50,000짜리 코인을 팝니다. 이익 $10,000. 평균단가법은 두 랏을 $40,000의 취득가로 혼합합니다. 이익 $20,000. HIFO(고가선출)는 항상 가장 비싼 랏부터 처분하며 — 여기서는 LIFO와 같은 $10,000 — 구조적으로 모든 매도의 보고 이익을 최소화합니다.

동일한 거래인데 이익은 $10,000에서 $30,000까지 네 가지, 3배 차이입니다. 성과 측정 관점에서 어느 하나가 더 진실인 것은 아니지만, 세금에서는 이 차이가 실제 돈이며, 어떤 방법을 쓸 수 있는지는 관할권과 때로는 자산 유형에 따라 다릅니다. 일부 과세 당국은 특정 방법을 의무화하고, 다른 곳은 선택을 허용하되 일관성을 요구합니다. 실무적 결론은 두 가지입니다. 첫날부터 모든 매수·매도·수수료의 완전한 타임스탬프 기록을 보관하고(몇 년 뒤에 재구성하는 것은 고통스럽습니다), 특정 방법에 의존하기 전에 해당 관할권의 자격 있는 세무 전문가와 상담하세요.`,
				ja: `同じ資産を異なる価格で買うと「自分の買値」という言葉が曖昧になり、採用する会計方法が報告上の利益を決めます。3つの取引を考えます。1 BTCを$30,000で購入、後に1 BTCを$50,000で追加購入、その後1 BTCを$60,000で売却。

FIFO（先入先出）は$30,000のコインを売ったとみなします。報告利益は$30,000。LIFO（後入先出）は$50,000のコインを売ります。利益$10,000。平均原価法は2つのロットを$40,000の原価に均します。利益$20,000。HIFO（高値先出）は常に最も高いロットから処分し — ここではLIFOと同じ$10,000 — 構造上、あらゆる売却の報告利益を最小化します。

同一の取引なのに、利益は$10,000から$30,000まで4通り、3倍の開きです。成績を測る上でどれかがより正しいわけではありませんが、税務ではこの差が実際のお金であり、どの方法が許されるかは法域や、場合によっては資産クラスによって異なります。特定の方法を義務付ける税務当局もあれば、選択を認めつつ一貫性を求める当局もあります。実務上の結論は2つです。初日からすべての売買と手数料のタイムスタンプ付き完全な記録を保管すること（数年後の再構築は苦行です）、そして特定の方法に依存する前に、その法域の資格ある税務専門家に相談することです。`,
				zh: `当你以不同价格买入同一资产时，"我的买入价"这个说法就变得模糊，而你采用的核算方法决定了申报的收益。考虑三笔交易：以 $30,000 买入 1 BTC，之后以 $50,000 再买入 1 BTC，然后以 $60,000 卖出 1 BTC。

FIFO（先进先出）视同卖出 $30,000 的那枚币：申报收益 $30,000。LIFO（后进先出）卖出 $50,000 的那枚：收益 $10,000。平均成本法把两批摊成 $40,000 的成本基础：收益 $20,000。HIFO（高价先出）总是先处置成本最高的批次 —— 此处与 LIFO 相同，为 $10,000 —— 从结构上把每笔卖出的申报收益压到最低。

完全相同的交易，却有从 $10,000 到 $30,000 的四种利润，相差 3 倍。就衡量业绩而言，没有哪一种比其他更真实；但在税务上这个差异是真金白银，而你被允许使用哪种方法取决于所在司法辖区，有时还取决于资产类别；有些税务机关强制规定某一种方法，有些允许选择但要求前后一致。实务上的结论有两条：从第一天起保留每笔买入、卖出和手续费的完整带时间戳记录（几年后再重建会非常痛苦），并在依赖任何具体方法之前咨询你所在辖区的合格税务专业人士。`
			},
			code: {
				lang: 'text',
				example: `Lots: buy 1 BTC @ 30000, then 1 BTC @ 50000. Sell 1 BTC @ 60000.

FIFO: 60000 - 30000           = 30000 gain
LIFO: 60000 - 50000           = 10000 gain
AVG : 60000 - (30000+50000)/2 = 20000 gain
HIFO: 60000 - 50000           = 10000 gain (highest-cost lot first)`
			}
		},
		{
			heading: {
				en: 'Percentage Asymmetry, Leverage Math, and Common Mistakes',
				ko: '퍼센트 비대칭, 레버리지 수학, 흔한 실수들',
				ja: 'パーセントの非対称性・レバレッジの数学・よくある誤り',
				zh: '百分比不对称、杠杆数学与常见错误'
			},
			body: {
				en: `Gains and losses are not symmetric, because recovery is computed on a smaller base. The recovery required after a loss L is 1 ÷ (1 − L) − 1. A −10% loss needs +11.1% to get back to even; −25% needs +33.3%; −33.3% needs +50%; −50% needs +100%; −90% needs +900%. This is why risk management dominates entry timing: deep drawdowns require improbable rallies to repair, and pairing a −60% trade with a +60% trade leaves you down 36%, not flat (0.4 × 1.6 = 0.64).

Beyond the asymmetry, a few recurring mistakes distort P&L calculations. Ignoring fees and spread, as covered above. Comparing entries and exits quoted in different currencies — buying in USD while mentally selling in EUR, or mixing USDT and USD prices — without converting at the relevant exchange rates. Unit bias: profit equals percentage change times capital deployed, so 10,000 coins at $0.01 gaining one cent doubles your money, while 0.1 BTC rising by $100 per coin earns just $10. And leverage rewrites everything: with 10x leverage, price moves are amplified tenfold against your margin, periodic funding fees accrue while the position is open, and an adverse move of roughly 10% — before fees, and less after them — wipes out the entire margin through liquidation.

Finally, keep the context: this guide and the calculator above are educational content only, not financial or tax advice. Cryptocurrency prices are extremely volatile, past results never guarantee future ones, and you can lose your entire stake. Verify any calculation independently before making decisions with real money.`,
				ko: `이익과 손실은 대칭이 아닙니다. 회복은 더 작아진 원금 위에서 계산되기 때문입니다. 손실 L 이후 필요한 회복률은 1 ÷ (1 − L) − 1입니다. −10% 손실은 본전까지 +11.1%가 필요하고, −25%는 +33.3%, −33.3%는 +50%, −50%는 +100%, −90%는 +900%가 필요합니다. 리스크 관리가 진입 타이밍보다 중요한 이유가 이것입니다. 깊은 하락은 회복에 비현실적인 랠리를 요구하며, −60% 거래와 +60% 거래를 짝지으면 본전이 아니라 −36%가 됩니다(0.4 × 1.6 = 0.64).

이 비대칭 외에도 손익 계산을 왜곡하는 반복적인 실수가 몇 가지 있습니다. 위에서 다룬 수수료와 스프레드 무시. USD로 사면서 머릿속으로는 EUR로 팔거나 USDT와 USD 가격을 섞는 등, 서로 다른 통화로 표시된 진입가와 청산가를 해당 환율로 변환하지 않고 비교하는 것. 단위 편향: 이익은 변동률 × 투입 자본이므로, $0.01짜리 코인 10,000개가 1센트 오르면 원금이 두 배가 되지만, 0.1 BTC는 코인당 $100가 올라도 $10를 벌 뿐입니다. 그리고 레버리지는 모든 것을 다시 씁니다. 10배 레버리지에서는 가격 변동이 증거금 대비 10배로 증폭되고, 포지션이 열려 있는 동안 주기적인 펀딩 수수료가 쌓이며, 약 10%의 불리한 움직임 — 수수료 전 기준이며 수수료 후에는 그보다 작은 폭 — 만으로 청산을 통해 증거금 전액이 사라집니다.

마지막으로 맥락을 기억해 주세요. 이 가이드와 위의 계산기는 교육용 콘텐츠일 뿐 재무 또는 세무 자문이 아닙니다. 암호화폐 가격은 극도로 변동성이 크고, 과거 성과는 미래를 결코 보장하지 않으며, 투자 원금 전액을 잃을 수 있습니다. 실제 돈으로 결정을 내리기 전에 모든 계산을 독립적으로 검증하세요.`,
				ja: `利益と損失は対称ではありません。回復は小さくなった元本の上で計算されるからです。損失Lの後に必要な回復率は 1 ÷ (1 − L) − 1 です。−10%の損失は元に戻るのに+11.1%が必要で、−25%は+33.3%、−33.3%は+50%、−50%は+100%、−90%は+900%が必要です。リスク管理がエントリーのタイミングより重要なのはこのためです。深いドローダウンの修復には非現実的な急騰が必要で、−60%の取引と+60%の取引を組み合わせるとプラスマイナスゼロではなく−36%になります（0.4 × 1.6 = 0.64）。

この非対称性に加えて、損益計算を歪める典型的な誤りがいくつかあります。前述の手数料とスプレッドの無視。USDで買いながら頭の中でEURで売る、USDTとUSDの価格を混在させるなど、異なる通貨建てのエントリーとエグジットを該当する為替レートで換算せずに比較すること。単位バイアス：利益は変動率×投入資本なので、$0.01のコイン10,000枚が1セント上がれば資金は2倍になりますが、0.1 BTCは1コインあたり$100上がっても$10しか稼げません。そしてレバレッジはすべてを書き換えます。10倍レバレッジでは値動きが証拠金に対して10倍に増幅され、ポジションを持っている間は定期的な資金調達手数料が積み上がり、約10%の不利な変動 — 手数料前の値で、手数料後はそれ以下 — だけで清算により証拠金全額が失われます。

最後に前提を忘れないでください。本ガイドと上の計算機は教育目的のコンテンツにすぎず、金融アドバイスでも税務アドバイスでもありません。暗号資産の価格は極めて変動が激しく、過去の成績は将来を決して保証せず、投資額の全額を失う可能性があります。実際のお金で意思決定する前に、あらゆる計算を独立して検証してください。`,
				zh: `收益与亏损并不对称，因为回本要在缩水后的本金上计算。亏损 L 之后所需的回升幅度为 1 ÷ (1 − L) − 1。亏 10% 需要涨 11.1% 才能回本；亏 25% 需要涨 33.3%；亏 33.3% 需要涨 50%；亏 50% 需要涨 100%；亏 90% 需要涨 900%。这就是为什么风险管理比进场时机更重要：深度回撤需要不切实际的反弹才能修复，而一笔 −60% 加一笔 +60% 的交易组合起来不是打平，而是净亏 36%（0.4 × 1.6 = 0.64）。

除了这种不对称之外，还有几个反复出现的错误会扭曲盈亏计算。忽略手续费和点差，如上文所述。把以不同计价货币报价的进出场价格直接比较 —— 用 USD 买入却在心里用 EUR 计算卖出，或把 USDT 与 USD 价格混用 —— 而不按相应汇率换算。单位错觉：利润等于涨跌幅乘以投入资金，因此 10,000 枚 $0.01 的币每枚涨一美分就能让本金翻倍，而 0.1 BTC 每枚涨 $100 也只赚 $10。杠杆则改写一切：在 10 倍杠杆下，价格波动对保证金的影响被放大十倍，持仓期间还会持续产生资金费率，大约 10% 的不利波动 —— 这是不计手续费的数字，计入后更小 —— 就足以通过强制平仓抹掉全部保证金。

最后请记住背景：本指南与上方的计算器仅为教育内容，不构成财务或税务建议。加密货币价格极其波动，过去的结果绝不保证未来，你可能损失全部本金。在用真金白银做决定之前，请独立核验所有计算。`
			}
		}
	];

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	const toolContent = {
		about: {
			en: 'The profit and loss calculator estimates the gross gain or loss of a trade based on buy price, sell price, and quantity. It is useful for reviewing past trades, planning targets, or comparing scenarios. The calculation does not account for trading fees, slippage, or taxes, which can change the real outcome. This tool is provided for educational purposes only and is not financial advice.',
			ko: '손익 계산기는 매수가, 매도가, 수량을 기준으로 거래의 총 손익을 추정합니다. 과거 거래 검토, 목표가 계획, 시나리오 비교에 유용합니다. 거래 수수료, 슬리피지, 세금은 반영되지 않으며 실제 결과는 달라질 수 있습니다. 본 도구는 교육 목적으로만 제공되며 재무 자문이 아닙니다.',
			ja: '損益計算機は、買値・売値・数量に基づいて取引の総損益を推定します。過去取引の振り返り、目標設定、シナリオ比較に便利です。取引手数料、スリッページ、税金は反映されず、実際の結果は異なる可能性があります。本ツールは教育目的のみで、金融アドバイスではありません。',
			zh: '盈亏计算器根据买入价、卖出价和数量估算一笔交易的毛盈亏。可用于复盘历史交易、规划目标价或比较不同场景。计算未包含交易费用、滑点和税收，实际结果可能不同。本工具仅供教育用途，不是财务建议。'
		},
		howTo: {
			en: [
				'Enter the buy price (the price at which you bought the asset).',
				'Enter the sell price (the price at which you intend to or did sell).',
				'Enter the amount (number of units, coins, or shares).',
				'Review the resulting profit or loss in absolute and percentage terms.',
				'Compare with fees and taxes separately to estimate net result.'
			],
			ko: [
				'매수가(자산을 구입한 가격)를 입력합니다.',
				'매도가(매도 예정가 또는 실제 매도가)를 입력합니다.',
				'수량(단위, 코인, 주식 수)을 입력합니다.',
				'금액과 비율로 표시된 손익을 확인합니다.',
				'수수료와 세금을 별도로 차감해 순손익을 추정합니다.'
			],
			ja: [
				'買値(資産を購入した価格)を入力します。',
				'売値(予定または実際の売却価格)を入力します。',
				'数量(単位、コイン、株数)を入力します。',
				'金額とパーセントで表示された損益を確認します。',
				'手数料と税金を別途差し引いて純損益を推定します。'
			],
			zh: [
				'输入买入价 (您买入资产的价格)。',
				'输入卖出价 (计划或实际卖出的价格)。',
				'输入数量 (单位数、币数或股数)。',
				'查看以金额和百分比表示的盈亏结果。',
				'另行扣除费用和税款以估算净结果。'
			]
		},
		useCases: {
			en: [
				'Quickly check the gain or loss on a recent crypto or stock trade.',
				'Plan a target sell price needed to reach a desired profit.',
				'Compare alternate exit prices side by side before placing an order.',
				'Educational example for understanding percentage returns versus absolute gains.',
				'Reconcile trade history when reviewing portfolio performance.'
			],
			ko: [
				'최근 암호화폐나 주식 거래의 손익 빠른 확인',
				'원하는 수익에 도달하기 위한 목표 매도가 계산',
				'주문 전 다양한 청산 가격을 나란히 비교',
				'백분율 수익률과 절대 수익의 차이 학습',
				'포트폴리오 성과 검토 시 거래 내역 대조'
			],
			ja: [
				'最近の暗号資産・株式取引の損益のクイックチェック',
				'目標利益達成に必要な売却価格の計画',
				'発注前に複数の決済価格を並べて比較',
				'パーセントリターンと絶対利益の違いの学習',
				'ポートフォリオ成績の確認時の取引履歴の照合'
			],
			zh: [
				'快速查看近期加密货币或股票交易的盈亏',
				'规划达到目标利润所需的卖出价',
				'下单前并排比较不同的离场价格',
				'用于理解百分比收益与绝对收益的差异',
				'复盘投资组合表现时核对交易记录'
			]
		},
		faq: {
			en: [
				{ q: 'Is this financial advice?', a: 'No. This calculator is for educational purposes only and is not financial, investment, or trading advice.' },
				{ q: 'Are fees and taxes included?', a: 'No. Trading fees, spreads, slippage, and capital gains taxes are not included. Real net profit will be lower.' },
				{ q: 'How is percentage change calculated?', a: 'Percentage change equals (sell price minus buy price) divided by buy price, multiplied by 100.' },
				{ q: 'Can this be used for tax filing?', a: 'No. Tax filings require official cost basis, lot accounting, and applicable tax rates. Use a qualified tax professional or dedicated tax software.' }
			],
			ko: [
				{ q: '이것은 재무 자문인가요?', a: '아닙니다. 본 계산기는 교육 목적으로만 제공되며 재무, 투자, 거래 자문이 아닙니다.' },
				{ q: '수수료와 세금이 포함되나요?', a: '아니요. 거래 수수료, 스프레드, 슬리피지, 양도소득세는 포함되지 않으며 실제 순이익은 더 낮습니다.' },
				{ q: '백분율 변동은 어떻게 계산되나요?', a: '(매도가 - 매수가) / 매수가 × 100 으로 계산됩니다.' },
				{ q: '세금 신고에 사용할 수 있나요?', a: '아닙니다. 세금 신고에는 공식 취득가, 종목별 회계, 적용 세율이 필요합니다. 세무 전문가나 전용 소프트웨어를 이용하세요.' }
			],
			ja: [
				{ q: 'これは金融アドバイスですか?', a: 'いいえ。本計算機は教育目的のみで、金融・投資・取引アドバイスではありません。' },
				{ q: '手数料や税金は含まれますか?', a: 'いいえ。取引手数料、スプレッド、スリッページ、譲渡益税は含まれず、実際の純利益はより低くなります。' },
				{ q: 'パーセント変動の計算方法は?', a: '(売値 - 買値) ÷ 買値 × 100 で算出されます。' },
				{ q: '税務申告に使えますか?', a: 'いいえ。税務申告には公式取得原価、ロット会計、適用税率が必要です。税理士や専用ソフトをご利用ください。' }
			],
			zh: [
				{ q: '这是财务建议吗？', a: '不是。本计算器仅供教育用途，不构成财务、投资或交易建议。' },
				{ q: '是否包含费用和税收？', a: '没有。未包含交易费用、点差、滑点和资本利得税，实际净利润会更低。' },
				{ q: '百分比变化如何计算？', a: '百分比变化 = (卖出价 - 买入价) / 买入价 × 100。' },
				{ q: '可以用于报税吗？', a: '不可以。报税需要正式的成本基础、批次核算和适用税率。请咨询税务专业人士或使用专用税务软件。' }
			]
		},
		related: [
			{ href: '/roi', label: { en: 'ROI Calculator', ko: 'ROI 계산기', ja: 'ROI計算機', zh: 'ROI计算器' } },
			{ href: '/dca', label: { en: 'DCA Calculator', ko: 'DCA 계산기', ja: 'DCA計算機', zh: 'DCA计算器' } },
			{ href: '/currency', label: { en: 'Currency Converter', ko: '환율 변환기', ja: '通貨換算', zh: '货币换算' } }
		],
		externalRefs: [
			{ href: 'https://www.investopedia.com/terms/p/profit.asp', label: 'Investopedia: Profit' },
			{ href: 'https://www.investopedia.com/terms/p/profitmargin.asp', label: 'Investopedia: Profit Margin' }
		]
	};

	let buyPrice = 30000;
	let sellPrice = 45000;
	let amount = 0.5;

	$: investment = buyPrice * amount;
	$: currentValue = sellPrice * amount;
	$: profit = currentValue - investment;
	$: percentChange = investment > 0 ? ((currentValue - investment) / investment) * 100 : 0;

	function formatCurrency(value: number): string {
		return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(value);
	}
</script>

<svelte:head>
	<title>{t('profit.title')} - SDK.bz</title>
	<meta name="description" content={t('profit.desc')} />
	<meta property="og:title" content="{t('profit.title')} - SDK.bz" />
	<meta property="og:description" content={t('profit.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('profit.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('profit.desc')}</p>
	</div>

	<div class="grid md:grid-cols-2 gap-8">
		<div class="space-y-6 bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700">
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('profit.buy')}</label>
				<input type="number" bind:value={buyPrice} min="0" step="100"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-orange-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('profit.sell')}</label>
				<input type="number" bind:value={sellPrice} min="0" step="100"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-orange-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('profit.amount')}</label>
				<input type="number" bind:value={amount} min="0" step="0.001"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-orange-400" />
			</div>
		</div>

		<div class="space-y-4">
			<div class="p-6 rounded-2xl border {profit >= 0 ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'}">
				<p class="text-sm {profit >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'} mb-1">{t('profit.profit')}</p>
				<p class="text-3xl font-bold {profit >= 0 ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}">{formatCurrency(profit)}</p>
				<p class="text-lg {profit >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}">{profit >= 0 ? '+' : ''}{percentChange.toFixed(2)}%</p>
			</div>
			<div class="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700">
				<div class="flex justify-between mb-4">
					<span class="text-gray-600 dark:text-dark-400">{t('profit.investment')}</span>
					<span class="font-semibold text-gray-900 dark:text-dark-100">{formatCurrency(investment)}</span>
				</div>
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('profit.value')}</span>
					<span class="font-semibold text-gray-900 dark:text-dark-100">{formatCurrency(currentValue)}</span>
				</div>
			</div>
		</div>
	</div>

	<ToolContent
		{lang}
		toolName="Profit Calculator"
		toolUrl="https://sdk.bz/{lang}/profit"
		lastUpdated="2026-04-30"
		category="Finance Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sdk.bz/${lang}` },
			{ name: 'Tools', url: `https://sdk.bz/${lang}` },
			{ name: 'Profit Calculator', url: `https://sdk.bz/${lang}/profit` }
		]}
		content={toolContent}
	/>

	<ToolGuide {lang} sections={guideSections} />
</div>
