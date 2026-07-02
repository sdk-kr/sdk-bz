<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';
	import ToolGuide from '$lib/components/ToolGuide.svelte';

	const guideSections = [
		{
			heading: {
				en: 'The Mid-Market Rate vs the Rate You Actually Get',
				ko: '중간 시장 환율과 실제 적용 환율의 차이',
				ja: 'ミッドマーケットレートと実際に適用されるレート',
				zh: '中间市场汇率与您实际获得的汇率'
			},
			body: {
				en: `Every currency pair has a mid-market rate, sometimes called the interbank rate: the midpoint between the best price at which large institutions are willing to buy a currency (the bid) and the best price at which they are willing to sell it (the ask). This is the number you see on financial news tickers, and it is the rate this converter uses as a reference. It is also, for practical purposes, a rate that retail customers almost never receive.

Banks, card networks, and exchange kiosks earn money by shifting the rate away from the midpoint before quoting it to you. Suppose the mid-market rate is 0.92 EUR per USD. Converting 1,000 USD at that rate would yield exactly 920 EUR. A bank applying a 2.5% spread instead quotes roughly 0.92 × 0.975 = 0.897, so your 1,000 USD becomes about 897 EUR — 23 EUR less than the mid-market outcome. Add a flat 5 USD wire fee on top and the total cost of the transfer approaches 3% of the amount sent, even though the statement may show no line item labeled commission at all.

The practical takeaway: always compute the mid-market value first, then compare it against the amount a provider actually promises to deliver. That difference, expressed as a percentage, is your true cost of conversion.`,
				ko: `모든 통화쌍에는 중간 시장 환율(미드마켓 레이트), 이른바 은행 간 환율이 존재합니다. 이는 대형 금융기관이 통화를 사겠다고 제시하는 최고 가격(매수 호가)과 팔겠다고 제시하는 최저 가격(매도 호가)의 중간값입니다. 경제 뉴스 시세판에 표시되는 숫자가 바로 이것이며, 본 변환기도 이 값을 참고 환율로 사용합니다. 그러나 현실적으로 개인 고객이 이 환율을 그대로 적용받는 일은 거의 없습니다.

은행, 카드 네트워크, 환전소는 고객에게 제시하기 전에 환율을 중간값에서 자신에게 유리한 쪽으로 옮겨 수익을 얻습니다. 중간 시장 환율이 1달러당 0.92유로라고 가정해 봅시다. 이 환율로 1,000달러를 환전하면 정확히 920유로가 됩니다. 그런데 2.5% 스프레드를 적용하는 은행은 약 0.92 × 0.975 = 0.897의 환율을 제시하므로, 1,000달러는 약 897유로가 되어 중간 시장 기준보다 23유로 줄어듭니다. 여기에 5달러의 고정 송금 수수료까지 더하면, 명세서에 수수료라는 항목이 전혀 보이지 않더라도 이 송금의 총비용은 송금액의 약 3%에 이릅니다.

실전 요령은 이렇습니다. 먼저 중간 시장 기준 금액을 계산한 다음, 서비스 제공자가 실제로 지급하겠다고 약속한 금액과 비교하세요. 그 차이를 백분율로 나타낸 값이 바로 진짜 환전 비용입니다.`,
				ja: `すべての通貨ペアにはミッドマーケットレート（インターバンクレートとも呼ばれます）が存在します。これは、大手金融機関が通貨を買う際に提示する最良価格（ビッド）と、売る際に提示する最良価格（アスク）の中間値です。経済ニュースのティッカーに表示されるのはこの数字であり、本ツールも参考レートとしてこれを使用しています。しかし実際のところ、個人客がこのレートをそのまま受け取れることはほとんどありません。

銀行、カードネットワーク、両替所は、顧客に提示する前にレートを中間値から自社に有利な方向へずらすことで利益を得ています。ミッドマーケットレートが1ドル＝0.92ユーロだとしましょう。このレートで1,000ドルを換算すればちょうど920ユーロになります。ところが2.5％のスプレッドを適用する銀行はおよそ0.92 × 0.975 = 0.897のレートを提示するため、1,000ドルは約897ユーロとなり、ミッドマーケット基準より23ユーロ少なくなります。さらに5ドルの固定送金手数料が加われば、明細に手数料という項目が一切なくても、この送金の総コストは送金額の約3％に達します。

実務上のポイントは次のとおりです。まずミッドマーケット基準の金額を計算し、次に業者が実際に支払うと約束する金額と比較してください。その差を百分率で表した値こそが、あなたの本当の両替コストです。`,
				zh: `每一个货币对都有一个中间市场汇率（有时称为银行同业汇率）：即大型机构愿意买入某种货币的最优价格（买入价）与愿意卖出该货币的最优价格（卖出价）之间的中点。财经新闻行情上显示的就是这个数字，本换算器也以它作为参考汇率。但就实际操作而言，零售客户几乎不可能拿到这个汇率。

银行、卡组织和兑换点在向您报价之前，会把汇率从中点向对自己有利的方向偏移，以此赚取利润。假设中间市场汇率为 1 美元兑 0.92 欧元。按此汇率兑换 1,000 美元恰好得到 920 欧元。而一家加收 2.5% 点差的银行报出的汇率约为 0.92 × 0.975 = 0.897，于是您的 1,000 美元只能换到约 897 欧元——比中间市场结果少 23 欧元。再加上 5 美元的固定电汇费，即使账单上没有任何标注为佣金的项目，这笔汇款的总成本也接近汇款金额的 3%。

实用建议是：先按中间市场汇率算出理论金额，再与服务商实际承诺到账的金额比较。两者之差换算成百分比，就是您真正的兑换成本。`
			},
			code: {
				example: `// Mid-market vs retail quote
const amount = 1000;            // USD
const midMarket = 0.92;         // EUR per USD
const spread = 0.025;           // 2.5%
const wireFee = 5;              // USD, flat

const idealEUR  = amount * midMarket;                 // 920.00 EUR
const retailEUR = amount * midMarket * (1 - spread);  // 897.00 EUR
const feeEUR    = wireFee * midMarket;                //   4.60 EUR
const costPct   = ((idealEUR - retailEUR + feeEUR) / idealEUR) * 100;
// (920 - 897 + 4.6) / 920 * 100 ≈ 3.0%`
			}
		},
		{
			heading: {
				en: 'Cross Rates and Triangulation Through a Base Currency',
				ko: '교차 환율과 기준 통화를 통한 삼각 계산',
				ja: 'クロスレートと基軸通貨を介した三角計算',
				zh: '交叉汇率与通过基准货币的三角换算'
			},
			body: {
				en: `Most reference tables, and most calculators including this one, do not store a separate rate for every possible currency pair. With just 10 currencies there are already 45 pairs; with 150 currencies there would be more than 11,000. Instead, each currency is quoted against a single base — here, the US dollar — and any other pair is derived by triangulation: rate(A to B) = rate(USD to B) ÷ rate(USD to A).

Take EUR to JPY using this page's reference values. One dollar buys 0.92 EUR and 149.5 JPY. Dividing 149.5 by 0.92 gives approximately 162.5, so 1 EUR ≈ 162.5 JPY. You can sanity-check the result by walking through the dollar: 1 EUR converts to about 1.087 USD (that is 1 ÷ 0.92), and 1.087 USD × 149.5 ≈ 162.5 JPY. Both paths agree, as they must whenever a single consistent table is used.

In live markets, however, EUR/JPY is also traded directly, and the directly quoted price can drift a few hundredths of a percent away from the triangulated one. Liquidity differs between pairs, each leg carries its own spread, and quotes update at slightly different moments. Arbitrage keeps these gaps tiny, but they explain why two calculators fed by different data sources rarely match to the last decimal place.`,
				ko: `대부분의 참고용 환율표와 계산기(본 계산기 포함)는 가능한 모든 통화쌍의 환율을 따로 저장하지 않습니다. 통화가 10개만 되어도 조합은 이미 45쌍이고, 150개라면 11,000쌍이 넘습니다. 대신 모든 통화를 하나의 기준 통화(여기서는 미국 달러)에 대해서만 고시하고, 나머지 쌍은 삼각 계산으로 도출합니다: rate(A→B) = rate(USD→B) ÷ rate(USD→A).

이 페이지의 참고값으로 EUR→JPY를 계산해 봅시다. 1달러로 0.92유로 또는 149.5엔을 살 수 있습니다. 149.5를 0.92로 나누면 약 162.5이므로 1유로 ≈ 162.5엔입니다. 달러를 거쳐 검산할 수도 있습니다. 1유로는 약 1.087달러(즉 1 ÷ 0.92)이고, 1.087달러 × 149.5 ≈ 162.5엔입니다. 하나의 일관된 환율표를 쓰는 한 두 경로의 결과는 반드시 일치합니다.

그러나 실제 시장에서는 EUR/JPY가 직접 거래되기도 하며, 직접 고시된 가격은 삼각 계산값에서 100분의 몇 퍼센트 수준으로 어긋날 수 있습니다. 통화쌍마다 유동성이 다르고, 각 단계마다 고유의 스프레드가 붙으며, 호가가 갱신되는 시점도 조금씩 다르기 때문입니다. 차익거래가 이 간극을 매우 작게 유지하지만, 서로 다른 데이터 소스를 쓰는 두 계산기가 마지막 소수 자리까지 일치하는 일이 드문 이유가 바로 여기에 있습니다.`,
				ja: `ほとんどの参考レート表や計算ツール（本ツールを含む）は、考えられるすべての通貨ペアのレートを個別に保存してはいません。通貨が10種類でも組み合わせはすでに45ペア、150種類なら11,000ペアを超えます。その代わり、各通貨を単一の基軸通貨（ここでは米ドル）に対してのみ提示し、それ以外のペアは三角計算で導出します：rate(A→B) = rate(USD→B) ÷ rate(USD→A)。

このページの参考値でEUR→JPYを計算してみましょう。1ドルで0.92ユーロ、または149.5円が買えます。149.5を0.92で割るとおよそ162.5となり、1ユーロ ≈ 162.5円です。ドルを経由して検算することもできます。1ユーロは約1.087ドル（つまり1 ÷ 0.92）で、1.087ドル × 149.5 ≈ 162.5円。一貫した単一のレート表を使う限り、二つの経路の結果は必ず一致します。

しかし実際の市場ではEUR/JPYは直接取引もされており、直接提示される価格は三角計算値から数百分の一パーセントほどずれることがあります。ペアごとに流動性が異なり、各レッグに固有のスプレッドが乗り、気配値の更新タイミングもわずかに違うためです。裁定取引がこの乖離をごく小さく保っていますが、異なるデータソースを使う二つの計算ツールが最後の小数位まで一致することがめったにないのは、これが理由です。`,
				zh: `大多数参考汇率表和计算器（包括本工具）并不会为每一个可能的货币对单独存储汇率。仅 10 种货币就已有 45 个货币对，若有 150 种货币则超过 11,000 对。因此通行做法是：每种货币只对单一基准货币（此处为美元）报价，其余货币对通过三角换算推导：rate(A→B) = rate(USD→B) ÷ rate(USD→A)。

以本页的参考值计算 EUR→JPY。1 美元可兑换 0.92 欧元或 149.5 日元。用 149.5 除以 0.92 约得 162.5，即 1 欧元 ≈ 162.5 日元。也可以经由美元验算：1 欧元约合 1.087 美元（即 1 ÷ 0.92），1.087 美元 × 149.5 ≈ 162.5 日元。只要使用同一张自洽的汇率表，两条路径的结果必然一致。

然而在真实市场中，EUR/JPY 也存在直接交易，直接报价可能与三角换算值相差百分之零点几。各货币对的流动性不同，每一段兑换都带有自己的点差，报价刷新的时刻也略有差异。套利交易会把这些缺口压得很小，但这正解释了为什么使用不同数据源的两个计算器很少能精确到最后一位小数完全一致。`
			},
			code: {
				example: `// Triangulation through the USD base
const usdToEur = 0.92;    // 1 USD = 0.92 EUR
const usdToJpy = 149.5;   // 1 USD = 149.5 JPY

const eurToJpy = usdToJpy / usdToEur;   // 149.5 / 0.92 ≈ 162.5

// Sanity check via the dollar leg:
// 1 EUR = 1 / 0.92 ≈ 1.087 USD
// 1.087 USD × 149.5 ≈ 162.5 JPY  ✓ same result`
			}
		},
		{
			heading: {
				en: "Bid, Ask, and the 'Zero Commission' Illusion",
				ko: '매수·매도 호가와 수수료 무료의 함정',
				ja: 'ビッド・アスクと「手数料無料」のからくり',
				zh: '买入价、卖出价与“零佣金”的假象'
			},
			body: {
				en: `A dealer never quotes one price; it quotes two. The bid is what it pays when buying a currency from you, the ask is what it charges when selling that currency to you, and the dealer's margin lives in the gap between them. This is why a service can truthfully advertise zero commission or no fees while still earning 2% or more on every transaction: the profit is baked into the exchange rate itself rather than listed as a separate charge.

Fee structure determines who loses the most. A fixed 10 USD fee on a 100 USD transfer consumes 10% of the money, yet the same fee on a 10,000 USD transfer costs only 0.1%. Percentage spreads behave the opposite way: a 1.5% markup is trivial on 100 USD (1.50 USD) but substantial on 10,000 USD (150 USD). Small, frequent transfers therefore favor providers with low fixed fees, while large transfers favor tight spreads. Typical card-network FX markups run 1% to 3% once bank surcharges are included.

Travelers face one more trap: dynamic currency conversion, or DCC. When a foreign payment terminal offers to charge your card in your home currency, it applies its own conversion rate, commonly 3% to 8% worse than your card network's. Decline that offer and always choose to pay in the local currency.`,
				ko: `딜러는 결코 하나의 가격만 제시하지 않습니다. 항상 두 개를 제시합니다. 매수 호가(bid)는 딜러가 여러분에게서 통화를 사들일 때 지불하는 가격이고, 매도 호가(ask)는 그 통화를 여러분에게 팔 때 받는 가격이며, 딜러의 마진은 그 둘 사이의 간격에 숨어 있습니다. 수수료 무료나 커미션 제로를 내세우는 서비스가 거짓말 없이도 거래마다 2% 이상을 벌 수 있는 이유가 바로 이것입니다. 이익이 별도 항목이 아니라 환율 자체에 녹아 있기 때문입니다.

수수료 구조에 따라 가장 손해 보는 쪽이 달라집니다. 100달러 송금에 붙는 고정 수수료 10달러는 송금액의 10%를 잡아먹지만, 같은 수수료가 10,000달러 송금에서는 0.1%에 불과합니다. 비율형 스프레드는 정반대로 움직입니다. 1.5% 마크업은 100달러에서는 1.50달러로 미미하지만 10,000달러에서는 150달러로 상당합니다. 따라서 소액을 자주 보낼 때는 고정 수수료가 낮은 업체가, 큰 금액을 보낼 때는 스프레드가 좁은 업체가 유리합니다. 은행 추가 수수료까지 포함하면 카드 네트워크의 환전 마크업은 통상 1~3% 수준입니다.

여행자에게는 함정이 하나 더 있습니다. 바로 동적 통화 변환(DCC)입니다. 해외 결제 단말기가 카드를 자국 통화로 결제하라고 제안하면 단말기 측 환율이 적용되는데, 이는 보통 카드 네트워크 환율보다 3~8% 불리합니다. 그 제안을 거절하고 항상 현지 통화로 결제하세요.`,
				ja: `ディーラーは決して一つの価格だけを提示しません。必ず二つ提示します。ビッドはディーラーがあなたから通貨を買い取るときに支払う価格、アスクはその通貨をあなたに売るときに請求する価格で、ディーラーの利ざやは両者の差の中に潜んでいます。「手数料無料」「コミッションゼロ」を謳うサービスが嘘をつかずに取引ごとに2％以上を稼げるのはこのためです。利益は別項目としてではなく、為替レートそのものに織り込まれているのです。

手数料の構造によって、最も損をする層が変わります。100ドルの送金にかかる固定手数料10ドルは送金額の10％を食いつぶしますが、同じ手数料でも10,000ドルの送金ならわずか0.1％です。パーセンテージ型のスプレッドは逆に動きます。1.5％の上乗せは100ドルなら1.50ドルと些細ですが、10,000ドルでは150ドルと無視できません。したがって少額を頻繁に送るなら固定手数料の低い業者が、大きな金額を送るならスプレッドの狭い業者が有利です。銀行の上乗せ分を含めると、カードネットワークの為替マークアップは通常1～3％程度です。

旅行者にはもう一つ罠があります。ダイナミック・カレンシー・コンバージョン（DCC）です。海外の決済端末が自国通貨建てでの請求を提案してきた場合、端末側の換算レートが適用され、これはカードネットワークのレートより3～8％不利なのが普通です。その提案は断り、常に現地通貨での支払いを選んでください。`,
				zh: `交易商从不只报一个价格，而是同时报两个。买入价（bid）是它从您手中买入某种货币时支付的价格，卖出价（ask）是它把该货币卖给您时收取的价格，交易商的利润就藏在两者的差距之中。这就是为什么一家服务商可以名副其实地宣传“零佣金”“免手续费”，却仍能在每笔交易中赚取 2% 甚至更多：利润被直接嵌入汇率本身，而不是列为单独的收费项目。

费用结构决定了谁损失最大。一笔 100 美元的汇款若收取 10 美元固定费用，就吞掉了 10% 的资金；同样的费用放在 10,000 美元的汇款上只占 0.1%。百分比点差则正好相反：1.5% 的加价对 100 美元来说微不足道（1.50 美元），对 10,000 美元来说却相当可观（150 美元）。因此，小额高频汇款适合选择固定费用低的服务商，大额汇款则应优先考虑点差更窄的渠道。算上银行附加费后，卡组织的外汇加价通常在 1% 到 3% 之间。

旅行者还要当心另一个陷阱：动态货币转换（DCC）。当境外支付终端提出用您本国货币扣款时，它会套用自己的换算汇率，通常比卡组织的汇率差 3% 到 8%。请拒绝该选项，坚持始终以当地货币付款。`
			},
			code: {
				example: `Fixed fee vs percentage spread — who pays more?

Fixed 10 USD fee:     100 USD transfer -> 10 / 100    = 10.0% cost
                   10,000 USD transfer -> 10 / 10000  =  0.1% cost

1.5% spread:          100 USD transfer -> 1.50 USD    =  1.5% cost
                   10,000 USD transfer -> 150 USD     =  1.5% cost

Small transfers: minimize the fixed fee.
Large transfers: minimize the spread.`
			}
		},
		{
			heading: {
				en: 'ISO Codes, Quotation Conventions, and Rounding Rules',
				ko: 'ISO 통화 코드, 표기 관행, 반올림 규칙',
				ja: 'ISO通貨コード・表記慣行・端数処理のルール',
				zh: 'ISO 货币代码、报价惯例与舍入规则'
			},
			body: {
				en: `Currencies are identified by three-letter ISO 4217 codes: USD, EUR, JPY, KRW, and so on. The first two letters usually come from the country code and the third from the currency name, which is why a code survives redesigns of banknotes and even changes of central bank. Ambiguous symbols like the dollar sign, shared by dozens of currencies, make codes the only safe notation in invoices and contracts.

Quotation order matters more than newcomers expect. EUR/USD = 1.087 means one euro costs 1.087 dollars — the first currency in the pair is the unit being priced. USD/JPY = 149.5 prices one dollar in yen. Reversing a pair means taking the reciprocal, not swapping digits: if EUR/USD is 1.087, then USD/EUR is 1 ÷ 1.087 ≈ 0.92.

Decimal conventions also vary by currency. ISO 4217 assigns each currency a number of minor units: most use two (cents), but JPY and KRW are zero-decimal currencies with no subunit in practical use, and a few, such as BHD, use three. Payment systems reject or misinterpret amounts with the wrong precision — 1000.50 JPY is not a valid charge — so a correct converter must round per currency, not to a universal two decimal places.`,
				ko: `통화는 USD, EUR, JPY, KRW처럼 세 글자로 된 ISO 4217 코드로 식별됩니다. 보통 앞의 두 글자는 국가 코드에서, 마지막 글자는 통화 이름에서 따오기 때문에, 지폐 디자인이 바뀌거나 심지어 중앙은행이 교체되어도 코드는 그대로 유지됩니다. 달러 기호처럼 수십 개 통화가 함께 쓰는 모호한 기호가 존재하므로, 인보이스와 계약서에서 안전한 표기는 통화 코드뿐입니다.

호가 순서는 초보자가 생각하는 것보다 훨씬 중요합니다. EUR/USD = 1.087은 1유로의 가격이 1.087달러라는 뜻으로, 통화쌍에서 앞에 오는 통화가 가격이 매겨지는 단위입니다. USD/JPY = 149.5는 1달러를 엔화로 표시한 값입니다. 통화쌍을 뒤집으려면 숫자를 맞바꾸는 것이 아니라 역수를 취해야 합니다. EUR/USD가 1.087이면 USD/EUR는 1 ÷ 1.087 ≈ 0.92입니다.

소수점 관행도 통화마다 다릅니다. ISO 4217은 통화별로 보조 단위 자릿수를 정해 두었는데, 대부분은 두 자리(센트)를 쓰지만 JPY와 KRW는 실질적으로 보조 단위가 없는 0자리 통화이고, BHD처럼 세 자리를 쓰는 통화도 있습니다. 결제 시스템은 자릿수가 틀린 금액을 거부하거나 잘못 해석합니다. 1000.50엔은 유효한 청구 금액이 아니므로, 제대로 된 변환기는 일률적인 소수 둘째 자리가 아니라 통화별 규칙에 따라 반올림해야 합니다.`,
				ja: `通貨はUSD、EUR、JPY、KRWのような3文字のISO 4217コードで識別されます。通常、最初の2文字は国コードから、3文字目は通貨名から取られているため、紙幣のデザイン変更や中央銀行の交代があってもコードは生き残ります。ドル記号のように数十の通貨で共用される紛らわしい記号がある以上、請求書や契約書で安全に使える表記は通貨コードだけです。

表記の順序は、初心者が思う以上に重要です。EUR/USD = 1.087は1ユーロの価格が1.087ドルであることを意味し、ペアの最初に来る通貨が値付けの単位です。USD/JPY = 149.5は1ドルを円で表した値です。ペアを逆にするには数字を入れ替えるのではなく逆数を取ります。EUR/USDが1.087なら、USD/EURは1 ÷ 1.087 ≈ 0.92です。

小数点の慣行も通貨ごとに異なります。ISO 4217は通貨ごとに補助単位の桁数を定めており、多くは2桁（セント）ですが、JPYとKRWは実用上補助単位を持たないゼロ小数通貨で、BHDのように3桁を使う通貨もあります。決済システムは桁数の誤った金額を拒否するか誤って解釈します。1000.50円は有効な請求額ではないため、正しい換算ツールは一律の小数第2位ではなく、通貨ごとのルールに従って端数を処理する必要があります。`,
				zh: `货币以三个字母的 ISO 4217 代码标识：USD、EUR、JPY、KRW 等等。前两个字母通常取自国家代码，第三个取自货币名称，因此即使纸币改版、甚至中央银行更替，代码依然沿用。像美元符号这样被几十种货币共用的符号极易产生歧义，所以在发票和合同中，货币代码是唯一稳妥的写法。

报价顺序比新手想象的更重要。EUR/USD = 1.087 表示 1 欧元的价格是 1.087 美元——货币对中排在前面的货币是被定价的单位。USD/JPY = 149.5 则是用日元为 1 美元定价。要反转一个货币对，应取倒数而不是交换数字：若 EUR/USD 为 1.087，则 USD/EUR 为 1 ÷ 1.087 ≈ 0.92。

小数位惯例同样因货币而异。ISO 4217 为每种货币规定了辅币单位位数：大多数使用两位（分），但 JPY 和 KRW 是实际上没有辅币单位的零小数货币，还有少数货币（如 BHD）使用三位。支付系统会拒绝或错误解析精度不符的金额——1000.50 日元不是有效的扣款金额——因此合格的换算器必须按各货币的规则舍入，而不是一律保留两位小数。`
			}
		},
		{
			heading: {
				en: "Timing, Volatility, and Which Rate Counts as 'Official'",
				ko: '타이밍, 변동성, 그리고 공식 환율의 기준',
				ja: 'タイミング、ボラティリティ、そして「公式」レートとは',
				zh: '时机、波动性，以及哪种汇率才算“官方”'
			},
			body: {
				en: `Exchange rates are not daily constants. In the interbank market they update many times per second, and a quote you receive is typically guaranteed only for seconds or minutes. Volatility clusters around economic data releases, central bank decisions, and market opens. Outside normal trading hours — weekends and major holidays — the rates you see are indicative only, and providers widen their spreads to protect against the gap between Friday's close and Monday's open, so weekend conversions usually cost more.

Which rate counts also depends on purpose. For a casual price check, any recent mid-market snapshot is fine. For tax filings or company accounts, most jurisdictions require the official rate published by the relevant tax authority or central bank for a specific date — often a daily, monthly, or yearly average defined by regulation rather than whatever a converter happened to display. These rules differ by country and by transaction type, so consult a qualified tax or accounting professional before relying on any figure.

Finally, a note on this page itself: the converter above uses static reference rates chosen to illustrate the mechanics of conversion. Everything here is educational content only, not financial advice, and not a live trading feed. Treat the results as a starting point for understanding how rates work — then verify the actual rate with your bank or provider before moving real money.`,
				ko: `환율은 하루 단위로 고정된 상수가 아닙니다. 은행 간 시장에서는 1초에도 여러 번 갱신되며, 여러분이 받은 견적은 보통 몇 초에서 몇 분 동안만 유효합니다. 변동성은 경제 지표 발표, 중앙은행 결정, 시장 개장 시점 전후에 집중됩니다. 주말이나 주요 공휴일처럼 정규 거래 시간이 아닐 때 보이는 환율은 참고치일 뿐이며, 업체들은 금요일 종가와 월요일 시가 사이의 갭에 대비해 스프레드를 넓히므로 주말 환전은 대개 더 비쌉니다.

어떤 환율이 유효한지는 용도에 따라서도 달라집니다. 가벼운 가격 확인이라면 최근의 중간 시장 스냅숏이면 충분합니다. 그러나 세무 신고나 회사 회계에서는 대부분의 국가가 특정 날짜에 대해 세무 당국이나 중앙은행이 공시한 공식 환율(규정이 정한 일별·월별·연평균 환율인 경우가 많음)을 요구하며, 변환기에 우연히 표시된 값은 인정되지 않습니다. 이런 규칙은 국가와 거래 유형에 따라 다르므로, 어떤 수치든 신뢰하기 전에 반드시 자격을 갖춘 세무·회계 전문가와 상담하세요.

마지막으로 이 페이지 자체에 대한 안내입니다. 위의 변환기는 환전의 원리를 보여주기 위해 선정된 정적 참고 환율을 사용합니다. 여기의 모든 내용은 교육용 콘텐츠일 뿐 재무 자문이 아니며, 실시간 거래 시세도 아닙니다. 계산 결과는 환율이 작동하는 방식을 이해하는 출발점으로만 삼고, 실제 돈을 움직이기 전에는 반드시 은행이나 서비스 제공자의 실제 환율을 확인하세요.`,
				ja: `為替レートは一日単位で固定された定数ではありません。インターバンク市場では1秒間に何度も更新され、提示された見積もりが保証されるのは通常、数秒から数分だけです。ボラティリティは経済指標の発表、中央銀行の決定、市場のオープン前後に集中します。週末や主要な祝日など通常の取引時間外に見えるレートはあくまで参考値であり、業者は金曜の終値と月曜の始値の間のギャップに備えてスプレッドを広げるため、週末の両替はたいてい割高になります。

どのレートが「有効」かは用途によっても変わります。ちょっとした価格確認なら、直近のミッドマーケットのスナップショットで十分です。しかし税務申告や会社の会計では、多くの国・地域が特定の日付について税務当局や中央銀行が公表する公式レート（規則で定められた日次・月次・年間平均であることも多い）を要求し、換算ツールがたまたま表示した値は認められません。こうしたルールは国や取引の種類によって異なるため、数字を信頼する前に必ず資格を持つ税務・会計の専門家に相談してください。

最後に、このページ自体についてのご案内です。上の換算ツールは、両替の仕組みを説明するために選ばれた静的な参考レートを使用しています。ここにある内容はすべて教育目的のコンテンツであり、金融アドバイスでもリアルタイムの取引レートでもありません。計算結果はレートの仕組みを理解するための出発点として扱い、実際にお金を動かす前には必ず銀行やサービス提供者の実レートを確認してください。`,
				zh: `汇率不是按天固定的常数。在银行同业市场上，它每秒可能更新多次，您收到的报价通常只在数秒到数分钟内有效。波动往往集中在经济数据发布、央行决议和市场开盘前后。在周末和主要节假日等非正常交易时段，屏幕上的汇率仅具指示性，服务商还会为防范周五收盘价与周一开盘价之间的跳空而扩大点差，因此周末兑换通常更贵。

哪种汇率“作数”也取决于用途。若只是随手查个价格，取最近的中间市场快照即可。但用于报税或公司记账时，多数司法辖区要求使用税务机关或中央银行针对特定日期公布的官方汇率——往往是法规规定的每日、每月或年度平均汇率，而不是换算器碰巧显示的数值。这些规则因国家和交易类型而异，在依赖任何数字之前，请务必咨询具有资质的税务或会计专业人士。

最后，关于本页面本身的说明：上方的换算器使用为演示兑换原理而挑选的静态参考汇率。这里的全部内容仅为教育性内容，不构成财务建议，也不是实时交易行情。请把计算结果当作理解汇率运作方式的起点——在真正动用资金之前，务必与您的银行或服务商核实实际汇率。`
			}
		}
	];

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	const toolContent = {
		about: {
			en: 'The currency converter estimates the value of one currency in another using reference exchange rates. Real banks and exchange services typically apply spreads, commissions, and transfer fees that change the final amount you receive. This tool is provided for educational and reference purposes only and is not financial advice or a real-time trading rate.',
			ko: '환율 변환기는 참고용 환율을 사용해 한 통화의 다른 통화 환산 가치를 추정합니다. 실제 은행이나 환전 서비스는 스프레드, 수수료, 송금 비용을 적용하므로 실제 수령액은 달라집니다. 본 도구는 교육 및 참고 목적으로만 제공되며 재무 자문이나 실시간 거래 환율이 아닙니다.',
			ja: '通貨換算ツールは参考レートを使って、ある通貨の別通貨での価値を推定します。実際の銀行や両替サービスはスプレッド、手数料、送金費用を適用するため受取額は変わります。本ツールは教育・参考目的のみで提供され、金融アドバイスやリアルタイム取引レートではありません。',
			zh: '货币换算器使用参考汇率估算一种货币兑换为另一种货币的价值。实际银行和兑换服务通常会收取点差、佣金和手续费，会改变您最终收到的金额。本工具仅供教育和参考用途，不是财务建议或实时交易汇率。'
		},
		howTo: {
			en: [
				'Enter the amount in the source currency.',
				'Select the source (From) currency.',
				'Select the target (To) currency.',
				'Use the swap button to reverse the conversion direction.',
				'Compare the calculated rate with your bank or exchange service before transacting.'
			],
			ko: [
				'원본 통화 금액을 입력합니다.',
				'원본(From) 통화를 선택합니다.',
				'대상(To) 통화를 선택합니다.',
				'스왑 버튼으로 변환 방향을 바꿀 수 있습니다.',
				'거래 전에 은행이나 환전 서비스의 실제 적용 환율과 비교하세요.'
			],
			ja: [
				'元通貨の金額を入力します。',
				'元通貨(From)を選択します。',
				'対象通貨(To)を選択します。',
				'スワップボタンで方向を反転できます。',
				'取引前に銀行や両替サービスの実レートと比較してください。'
			],
			zh: [
				'输入源货币的金额。',
				'选择源货币 (From)。',
				'选择目标货币 (To)。',
				'使用切换按钮可以反转转换方向。',
				'交易前请与您的银行或兑换服务的实际汇率进行比较。'
			]
		},
		useCases: {
			en: [
				'Estimate the cost of an overseas purchase before checkout.',
				'Compare prices listed in different currencies during travel planning.',
				'Get a quick reference for invoice or freelance billing across borders.',
				'Educational examples for understanding foreign exchange concepts.',
				'Sanity-check the rate offered by your bank or remittance app.'
			],
			ko: [
				'결제 전 해외 구매 비용 추정',
				'여행 계획 시 서로 다른 통화로 표시된 가격 비교',
				'국가 간 인보이스나 프리랜서 청구의 빠른 참고',
				'외환 개념 학습을 위한 교육 예시',
				'은행이나 송금 앱이 제시한 환율 검토'
			],
			ja: [
				'決済前に海外購入の費用を推定',
				'旅行計画時に異なる通貨で表示された価格を比較',
				'国際的な請求書やフリーランス請求のクイックリファレンス',
				'外国為替の概念を理解するための教育例',
				'銀行や送金アプリが提示するレートの妥当性チェック'
			],
			zh: [
				'结账前估算海外购物的费用',
				'旅行规划时比较以不同货币标示的价格',
				'跨境发票或自由职业账单的快速参考',
				'用于理解外汇概念的教学示例',
				'对银行或汇款应用提供的汇率进行合理性检查'
			]
		},
		faq: {
			en: [
				{ q: 'Is this financial advice?', a: 'No. This converter is for educational and reference purposes only and is not financial, investment, or currency-trading advice.' },
				{ q: 'Are these real-time exchange rates?', a: 'No. The rates here are static reference values for illustration. Real market rates change every second and your bank will quote a different rate.' },
				{ q: 'Why is the amount I receive at my bank different?', a: 'Banks and remittance services add a spread, commission, or fixed fees on top of the mid-market rate, so the final amount you receive is typically lower than the calculated value.' },
				{ q: 'Can I use this for tax reporting?', a: 'No. For tax or accounting use, you must use the official rate published by your tax authority for the relevant date.' }
			],
			ko: [
				{ q: '이것은 재무 자문인가요?', a: '아닙니다. 본 변환기는 교육 및 참고 목적으로만 제공되며 재무, 투자, 외환 거래 자문이 아닙니다.' },
				{ q: '실시간 환율인가요?', a: '아니요. 표시된 환율은 예시용 정적 참고값입니다. 실제 시장 환율은 초 단위로 변동하며 은행이 제시하는 환율은 다릅니다.' },
				{ q: '은행에서 받는 금액이 왜 다른가요?', a: '은행과 송금 서비스는 중간 시장 환율에 스프레드, 수수료, 고정 비용을 더하므로 실제 수령액은 보통 계산값보다 낮습니다.' },
				{ q: '세무 신고에 사용할 수 있나요?', a: '아닙니다. 세무 또는 회계 용도로는 해당 날짜에 세무 당국이 공시한 공식 환율을 사용해야 합니다.' }
			],
			ja: [
				{ q: 'これは金融アドバイスですか?', a: 'いいえ。本ツールは教育・参考目的のみで、金融・投資・通貨取引のアドバイスではありません。' },
				{ q: 'リアルタイムレートですか?', a: 'いいえ。表示されているレートは例示用の静的な参考値です。実際の市場レートは秒単位で変動し、銀行が提示するレートも異なります。' },
				{ q: '銀行で受け取る金額が違うのはなぜですか?', a: '銀行や送金サービスはミッドマーケットレートにスプレッド、手数料、固定費用を上乗せするため、実受取額は計算値より低くなるのが通常です。' },
				{ q: '税務申告に使えますか?', a: 'いいえ。税務・会計用途では、該当日に税務当局が公表する公式レートを使用する必要があります。' }
			],
			zh: [
				{ q: '这是财务建议吗？', a: '不是。本换算器仅供教育和参考用途，不构成财务、投资或外汇交易建议。' },
				{ q: '这是实时汇率吗？', a: '不是。这里的汇率是用于说明的静态参考值。实际市场汇率每秒都在变化，银行报价也会不同。' },
				{ q: '为什么我在银行收到的金额不一样？', a: '银行和汇款服务会在中间市场汇率上加点差、佣金或固定手续费，所以实际收到的金额通常低于计算值。' },
				{ q: '可以用于报税吗？', a: '不可以。税务或会计用途必须使用税务机关在相关日期公布的官方汇率。' }
			]
		},
		related: [
			{ href: '/profit', label: { en: 'Profit Calculator', ko: '손익 계산기', ja: '損益計算機', zh: '盈亏计算器' } },
			{ href: '/roi', label: { en: 'ROI Calculator', ko: 'ROI 계산기', ja: 'ROI計算機', zh: 'ROI计算器' } },
			{ href: '/dca', label: { en: 'DCA Calculator', ko: 'DCA 계산기', ja: 'DCA計算機', zh: 'DCA计算器' } }
		],
		externalRefs: [
			{ href: 'https://www.iso.org/iso-4217-currency-codes.html', label: 'ISO 4217 Currency Codes' },
			{ href: 'https://www.imf.org/en/About/Factsheets/Sheets/2023/special-drawing-rights-sdr', label: 'IMF: Exchange Rates' }
		]
	};

	let amount = 1000;
	let fromCurrency = 'USD';
	let toCurrency = 'EUR';

	// Static exchange rates (in real app, would fetch from API)
	const rates: Record<string, number> = {
		USD: 1, EUR: 0.92, GBP: 0.79, JPY: 149.5, KRW: 1320,
		CNY: 7.24, CAD: 1.36, AUD: 1.53, CHF: 0.88, INR: 83.1
	};

	const currencies = Object.keys(rates);

	$: rate = rates[toCurrency] / rates[fromCurrency];
	$: result = amount * rate;

	function swap() {
		const temp = fromCurrency;
		fromCurrency = toCurrency;
		toCurrency = temp;
	}

	function formatNumber(value: number): string {
		return new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 4 }).format(value);
	}
</script>

<svelte:head>
	<title>{t('currency.title')} - SDK.bz</title>
	<meta name="description" content={t('currency.desc')} />
	<meta property="og:title" content="{t('currency.title')} - SDK.bz" />
	<meta property="og:description" content={t('currency.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('currency.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('currency.desc')}</p>
	</div>

	<div class="max-w-xl mx-auto space-y-6">
		<div class="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700">
			<div class="space-y-4">
				<div>
					<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('currency.amount')}</label>
					<input type="number" bind:value={amount} min="0" step="100"
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-pink-400 text-lg" />
				</div>

				<div class="flex items-center gap-4">
					<div class="flex-1">
						<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('currency.from')}</label>
						<select bind:value={fromCurrency}
							class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-pink-400">
							{#each currencies as c}
								<option value={c}>{c}</option>
							{/each}
						</select>
					</div>

					<button on:click={swap}
						class="mt-6 p-3 bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 rounded-xl transition-colors">
						<svg class="w-5 h-5 text-gray-600 dark:text-dark-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
						</svg>
					</button>

					<div class="flex-1">
						<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('currency.to')}</label>
						<select bind:value={toCurrency}
							class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-pink-400">
							{#each currencies as c}
								<option value={c}>{c}</option>
							{/each}
						</select>
					</div>
				</div>
			</div>
		</div>

		<div class="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-2xl border border-pink-200 dark:border-pink-800 text-center">
			<p class="text-sm text-pink-600 dark:text-pink-400 mb-2">{t('currency.result')}</p>
			<p class="text-4xl font-bold text-pink-700 dark:text-pink-300">{formatNumber(result)} {toCurrency}</p>
			<p class="text-sm text-pink-600 dark:text-pink-400 mt-2">1 {fromCurrency} = {formatNumber(rate)} {toCurrency}</p>
		</div>

		<p class="text-xs text-gray-500 dark:text-dark-500 text-center">Exchange rates are for reference only and may not reflect real-time market rates.</p>
	</div>

	<ToolContent
		{lang}
		toolName="Currency Converter"
		toolUrl="https://sdk.bz/{lang}/currency"
		lastUpdated="2026-04-30"
		category="Finance Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sdk.bz/${lang}` },
			{ name: 'Tools', url: `https://sdk.bz/${lang}` },
			{ name: 'Currency Converter', url: `https://sdk.bz/${lang}/currency` }
		]}
		content={toolContent}
	/>

	<ToolGuide {lang} sections={guideSections} />
</div>
