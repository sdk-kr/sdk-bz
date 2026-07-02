<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';
	import ToolGuide from '$lib/components/ToolGuide.svelte';

	const guideSections = [
		{
			heading: {
				en: 'How Proof-of-Work Mining Revenue Actually Works',
				ko: '작업증명 채굴 수익의 실제 구조',
				ja: 'プルーフ・オブ・ワーク採掘収益の実際の仕組み',
				zh: '工作量证明挖矿收益的真实原理'
			},
			body: {
				en: `Bitcoin mining is a lottery in which your number of tickets equals your share of the global hashrate. Every ~10 minutes one miner (or pool) wins the right to append a block and collect the block subsidy plus the transaction fees inside it. Your expected share of blocks is simply your hashrate divided by network hashrate, so expected BTC per day = (your hashrate / network hashrate) × 144 blocks × the 3.125 BTC subsidy, plus a fee component that fluctuates with on-chain congestion.

Work the numbers for a single 100 TH/s machine against a 600 EH/s network. The share is 100e12 / 600e18 ≈ 1.667e-7, or about one block in six million. Multiply by 144 blocks per day and the 3.125 BTC subsidy and you expect roughly 0.000075 BTC per day. At $60,000 per BTC that is about $4.50 of gross revenue per day, before electricity, pool fees, and hardware costs.

Two things follow immediately: no input in this calculation is under your control except your own hashrate, and the two biggest ones — network hashrate and price — move constantly.`,
				ko: `비트코인 채굴은 전 세계 해시레이트에서 내가 차지하는 비중만큼 복권을 들고 있는 추첨과 같습니다. 약 10분마다 한 명의 채굴자(또는 풀)가 블록을 추가할 권리를 얻어 블록 보조금과 그 블록에 담긴 거래 수수료를 가져갑니다. 기대 블록 점유율은 단순히 내 해시레이트를 네트워크 해시레이트로 나눈 값이므로, 하루 기대 BTC = (내 해시레이트 ÷ 네트워크 해시레이트) × 144블록 × 3.125 BTC 보조금에, 온체인 혼잡도에 따라 변동하는 수수료 수익이 더해집니다.

100 TH/s 장비 한 대를 600 EH/s 네트워크에 대입해 계산해 봅시다. 점유율은 100e12 ÷ 600e18 ≈ 1.667e-7, 약 600만 블록 중 1개꼴입니다. 여기에 하루 144블록과 3.125 BTC 보조금을 곱하면 하루 약 0.000075 BTC가 기대됩니다. BTC당 60,000달러라면 전기료, 풀 수수료, 하드웨어 비용을 빼기 전 하루 약 4.50달러의 총수익입니다.

여기서 두 가지가 바로 도출됩니다. 이 계산에서 내가 통제할 수 있는 입력값은 내 해시레이트뿐이며, 가장 큰 두 변수인 네트워크 해시레이트와 가격은 끊임없이 움직인다는 점입니다.`,
				ja: `ビットコインのマイニングは、世界のハッシュレートに占める自分の割合の分だけくじ券を持つ抽選のようなものです。約10分ごとに一人のマイナー（またはプール）がブロックを追加する権利を勝ち取り、ブロック補助金とそのブロックに含まれる取引手数料を受け取ります。期待できるブロックの取り分は、自分のハッシュレートをネットワーク全体のハッシュレートで割っただけの値なので、1日あたりの期待BTC＝（自分のハッシュレート÷ネットワークハッシュレート）×144ブロック×補助金3.125 BTCに、オンチェーンの混雑に応じて変動する手数料収入が加わります。

100 TH/sのマシン1台を600 EH/sのネットワークに当てはめて計算してみましょう。取り分は100e12÷600e18≈1.667e-7、およそ600万ブロックに1個の割合です。これに1日144ブロックと補助金3.125 BTCを掛けると、1日あたり約0.000075 BTCが期待できます。1 BTC＝60,000ドルなら、電気代・プール手数料・ハードウェア費用を差し引く前で1日約4.50ドルの粗収入です。

ここから直ちに2つのことが分かります。この計算で自分がコントロールできる入力は自分のハッシュレートだけであり、最も大きな2つの変数であるネットワークハッシュレートと価格は絶えず動いているということです。`,
				zh: `比特币挖矿就像一场抽奖，你手中彩票的数量等于你在全球算力中所占的份额。大约每10分钟，就有一名矿工（或矿池）赢得追加区块的权利，获得区块补贴以及该区块中包含的交易手续费。你的期望出块份额就是你的算力除以全网算力，因此每日期望BTC =（你的算力 ÷ 全网算力）× 144个区块 × 3.125 BTC补贴，再加上随链上拥堵程度波动的手续费收入。

用一台100 TH/s的矿机对照600 EH/s的全网算力来算一算：份额为100e12 ÷ 600e18 ≈ 1.667e-7，约合600万个区块中的1个。乘以每天144个区块和3.125 BTC补贴，每天期望约0.000075 BTC。按每BTC 60,000美元计算，在扣除电费、矿池费和硬件成本之前，每天毛收入约4.50美元。

由此立刻可以得出两点：这个计算中你唯一能控制的输入是自己的算力，而影响最大的两个变量——全网算力和币价——始终在变动。`
			},
			code: {
				lang: 'javascript',
				example: `// Expected daily revenue: 100 TH/s vs a 600 EH/s network
const myHashrate  = 100e12;                 // 100 TH/s in H/s
const netHashrate = 600e18;                 // 600 EH/s in H/s
const share = myHashrate / netHashrate;     // 1.667e-7
const btcPerDay = share * 144 * 3.125;      // 0.000075 BTC
const usdPerDay = btcPerDay * 60000;        // $4.50 gross`
			}
		},
		{
			heading: {
				en: 'Difficulty: The Thermostat That Erodes Your Earnings',
				ko: '난이도: 수익을 갉아먹는 자동 조절 장치',
				ja: '難易度：収益を削る自動調整機構',
				zh: '难度：不断侵蚀收益的自动调节器'
			},
			body: {
				en: `Difficulty is the protocol's thermostat. Every 2,016 blocks — roughly two weeks — Bitcoin compares how long those blocks actually took against the 10-minutes-per-block target and rescales difficulty so blocks keep arriving at the same pace no matter how much hardware joins. The direct consequence for a miner is that revenue per TH/s falls in proportion to network hashrate growth: if global hashrate rises 20% and your rig stays the same, your expected BTC per day drops by roughly one-sixth (1 − 1/1.2 ≈ 16.7%).

This is the single most common modeling error. A projection that holds today's difficulty flat for 12 or 24 months will badly overstate earnings, because network hashrate has historically grown by double-digit percentages per year as newer, more efficient machines ship. A more honest approach is to run scenarios: flat difficulty as the optimistic bound, plus 2–5% average monthly growth as base and pessimistic cases, and check whether the machine still pays for itself in the worst one.`,
				ko: `난이도는 프로토콜의 온도조절기입니다. 2,016블록마다 — 약 2주 — 비트코인은 실제 블록 생성에 걸린 시간을 블록당 10분 목표와 비교해 난이도를 재조정하며, 얼마나 많은 장비가 새로 들어오든 블록이 같은 속도로 나오게 만듭니다. 채굴자 입장에서 직접적인 결과는 TH/s당 수익이 네트워크 해시레이트 증가에 비례해 감소한다는 것입니다. 전 세계 해시레이트가 20% 늘고 내 장비가 그대로라면, 하루 기대 BTC는 약 6분의 1(1 − 1/1.2 ≈ 16.7%) 줄어듭니다.

이것이 가장 흔한 모델링 오류입니다. 오늘의 난이도를 12~24개월 동안 고정해 두는 예측은 수익을 크게 과장하게 되는데, 더 새롭고 효율적인 장비가 출하되면서 네트워크 해시레이트는 역사적으로 연간 두 자릿수 퍼센트씩 성장해 왔기 때문입니다. 더 정직한 접근은 시나리오를 돌려 보는 것입니다. 난이도 고정을 낙관적 상한으로 두고, 월평균 2~5% 성장을 기본 및 비관 시나리오로 잡아, 최악의 경우에도 장비가 본전을 뽑는지 확인하세요.`,
				ja: `難易度はプロトコルのサーモスタットです。2,016ブロックごと — およそ2週間 — にビットコインは実際にかかった時間をブロックあたり10分の目標と比較して難易度を再調整し、どれだけハードウェアが参入してもブロックが同じペースで生成され続けるようにします。マイナーにとっての直接的な帰結は、TH/sあたりの収益がネットワークハッシュレートの成長に比例して低下することです。世界のハッシュレートが20%増えて自分のリグがそのままなら、1日あたりの期待BTCはおよそ6分の1（1 − 1/1.2 ≈ 16.7%）減少します。

これが最もよくあるモデリングの誤りです。今日の難易度を12〜24か月間据え置く予測は収益を大幅に過大評価します。より新しく効率的なマシンが出荷されるにつれ、ネットワークハッシュレートは歴史的に年率二桁パーセントで成長してきたからです。より誠実なアプローチはシナリオを走らせることです。難易度据え置きを楽観的上限とし、月平均2〜5%の成長を基本ケースと悲観ケースに置いて、最悪のケースでもマシンが元を取れるかを確かめてください。`,
				zh: `难度是协议的恒温器。每2,016个区块——大约两周——比特币会把这些区块实际耗费的时间与每块10分钟的目标进行比较并重新调整难度，使区块无论有多少硬件加入都以相同节奏产出。对矿工的直接后果是：每TH/s的收益随全网算力的增长成比例下降。如果全球算力上升20%而你的矿机不变，你的每日期望BTC大约减少六分之一（1 − 1/1.2 ≈ 16.7%）。

这是最常见的建模错误。把今天的难度固定12到24个月的预测会严重高估收益，因为随着更新、更高效的矿机不断出货，全网算力在历史上以每年两位数百分比的速度增长。更诚实的做法是跑多种情景：把难度不变作为乐观上限，把月均2%至5%的增长作为基准和悲观情形，看看在最差情形下矿机是否仍能回本。`
			}
		},
		{
			heading: {
				en: 'Electricity, Efficiency, and the Break-Even Price',
				ko: '전기 요금, 효율, 그리고 손익분기 전력 단가',
				ja: '電気料金、効率、損益分岐電力価格',
				zh: '电费、能效与盈亏平衡电价'
			},
			body: {
				en: `Electricity is the cost that decides whether a miner lives or dies. Daily power cost = watts ÷ 1,000 × 24 × price per kWh. An S19-class machine drawing about 3,250 W at 100 TH/s consumes 78 kWh per day. At a retail rate of $0.10/kWh that is $7.80 per day — more than the ~$4.50 of daily revenue from the previous example, a loss of about $3.30 per machine per day. The identical machine at an industrial rate of $0.05/kWh costs $3.90 per day and ekes out roughly $0.60 of daily margin. Nothing about the hardware changed; only the power contract did.

The metric that captures this is efficiency in joules per terahash: watts divided by TH/s. The example machine runs 3,250 / 100 = 32.5 J/TH, typical of the S19 generation; newer S21-class machines reach roughly 17.5 J/TH, meaning nearly half the electricity per unit of work. Each hardware generation resets the survival bar for everyone.

A useful sanity check is the break-even electricity price: daily revenue ÷ daily kWh. Here, $4.50 / 78 kWh ≈ $0.058/kWh — pay more than that for power and this rig loses money under these assumptions.`,
				ko: `전기는 채굴자의 생사를 결정하는 비용입니다. 일일 전력 비용 = 와트 ÷ 1,000 × 24 × kWh당 요금. 100 TH/s에서 약 3,250W를 소비하는 S19급 장비는 하루 78kWh를 씁니다. 가정용 요금 $0.10/kWh라면 하루 $7.80로, 앞선 예시의 하루 수익 약 $4.50를 넘어서 장비당 하루 약 $3.30의 손실입니다. 똑같은 장비가 산업용 $0.05/kWh에서는 하루 $3.90의 비용으로 하루 약 $0.60의 얇은 마진을 남깁니다. 하드웨어는 아무것도 바뀌지 않았고, 전력 계약만 달라졌습니다.

이를 포착하는 지표가 테라해시당 줄(J/TH) 효율, 즉 와트를 TH/s로 나눈 값입니다. 예시 장비는 3,250 ÷ 100 = 32.5 J/TH로 S19 세대의 전형이며, 더 새로운 S21급 장비는 약 17.5 J/TH에 도달해 같은 작업량에 전기를 거의 절반만 씁니다. 하드웨어 세대가 바뀔 때마다 모두의 생존 기준선이 다시 설정됩니다.

유용한 점검 지표는 손익분기 전력 단가, 즉 일일 수익 ÷ 일일 kWh입니다. 여기서는 $4.50 ÷ 78kWh ≈ $0.058/kWh로, 이보다 비싸게 전기를 사면 이 가정에서 이 장비는 손해를 봅니다.`,
				ja: `電気代はマイナーの生死を分けるコストです。1日の電力コスト＝ワット÷1,000×24×kWh単価。100 TH/sで約3,250Wを消費するS19級マシンは1日78 kWhを使います。小売料金$0.10/kWhなら1日$7.80で、先の例の1日約$4.50の収入を上回り、1台あたり1日約$3.30の損失です。同じマシンが産業用$0.05/kWhなら1日$3.90のコストで、1日約$0.60の薄い利益をひねり出します。ハードウェアは何も変わっておらず、電力契約だけが違うのです。

これを捉える指標がテラハッシュあたりジュール（J/TH）の効率、すなわちワットをTH/sで割った値です。例のマシンは3,250÷100＝32.5 J/THでS19世代の典型であり、より新しいS21級マシンは約17.5 J/THに達し、同じ仕事量に対して電力がほぼ半分で済みます。ハードウェアの世代交代のたびに、全員の生存ラインが引き直されます。

有用な検算が損益分岐電力単価、すなわち日次収入÷日次kWhです。ここでは$4.50÷78 kWh≈$0.058/kWhで、これより高い電気を買えば、この前提ではこのリグは赤字になります。`,
				zh: `电费是决定矿工生死的成本。每日电力成本 = 瓦数 ÷ 1,000 × 24 × 每kWh电价。一台100 TH/s、功耗约3,250瓦的S19级矿机每天消耗78 kWh。按零售电价$0.10/kWh计算，每天电费$7.80——超过了前面例子中每天约$4.50的收入，每台每天亏损约$3.30。同一台矿机若使用$0.05/kWh的工业电价，每天成本$3.90，勉强挤出每天约$0.60的微薄利润。硬件没有任何变化，变的只是电力合同。

刻画这一点的指标是每太哈希焦耳数（J/TH）的能效，即瓦数除以TH/s。例中矿机为3,250 ÷ 100 = 32.5 J/TH，属于S19世代的典型水平；更新的S21级矿机可达约17.5 J/TH，意味着相同工作量的耗电量接近减半。每一代新硬件都会重新划定所有人的生存线。

一个有用的检验指标是盈亏平衡电价：每日收入 ÷ 每日kWh。此处$4.50 ÷ 78 kWh ≈ $0.058/kWh——电价高于此值时，在这些假设下这台矿机就是亏钱的。`
			},
			code: {
				lang: 'javascript',
				example: `// Power cost and break-even electricity price (S19-class rig)
const watts = 3250, terahash = 100;
const kwhPerDay = (watts / 1000) * 24;      // 78 kWh/day
const costRetail = kwhPerDay * 0.10;        // $7.80/day -> loss vs $4.50 revenue
const costIndustrial = kwhPerDay * 0.05;    // $3.90/day -> ~$0.60/day margin
const efficiency = watts / terahash;        // 32.5 J/TH
const breakEvenKwh = 4.50 / kwhPerDay;      // ~$0.058 per kWh`
			}
		},
		{
			heading: {
				en: 'Halving Economics: Revenue Cut in Half Overnight',
				ko: '반감기 경제학: 하룻밤 사이 절반이 되는 수익',
				ja: '半減期の経済学：一夜で半分になる収益',
				zh: '减半经济学：一夜之间腰斩的收入'
			},
			body: {
				en: `Every 210,000 blocks — about four years — the block subsidy is cut in half: 50 → 25 → 12.5 → 6.25 → 3.125 BTC, with the next step to 1.5625 BTC already on the schedule. From a miner's perspective this is an overnight event: revenue per TH/s halves the moment the halving block is found, unless the BTC price rises or transaction fee revenue expands enough to compensate. Neither is guaranteed, and fees have historically covered only a small fraction of the subsidy outside of short congestion spikes.

Halvings are when marginal miners capitulate. Operators paying retail electricity who were barely profitable become clearly unprofitable and switch off; difficulty then adjusts downward somewhat, redistributing revenue to survivors with cheaper power. When you evaluate a machine with a claimed 12–36 month payback, check the calendar: if a halving falls inside that window, the projection must survive a 50% revenue cut mid-stream. Most optimistic vendor payback claims quietly assume it will not happen.`,
				ko: `210,000블록마다 — 약 4년 — 블록 보조금은 절반으로 줄어듭니다: 50 → 25 → 12.5 → 6.25 → 3.125 BTC이며, 다음 단계인 1.5625 BTC도 이미 일정에 올라 있습니다. 채굴자 관점에서 이는 하룻밤 사이의 사건입니다. 반감기 블록이 발견되는 순간 TH/s당 수익이 절반이 되며, BTC 가격이 오르거나 거래 수수료 수익이 충분히 늘어 상쇄해 주지 않는 한 그대로입니다. 둘 다 보장되지 않으며, 수수료는 짧은 혼잡 급등기를 제외하면 역사적으로 보조금의 작은 일부만 감당해 왔습니다.

반감기는 한계 채굴자들이 항복하는 시점입니다. 가정용 전기로 간신히 수익을 내던 운영자는 명백한 적자로 전환되어 장비를 끄고, 그러면 난이도가 다소 하향 조정되어 더 싼 전력을 가진 생존자들에게 수익이 재분배됩니다. 12~36개월 회수를 내세우는 장비를 평가할 때는 달력을 확인하세요. 그 기간 안에 반감기가 있다면, 예측은 중간에 수익 50% 삭감을 견뎌내야 합니다. 낙관적인 판매사 회수 주장 대부분은 그런 일이 일어나지 않으리라고 조용히 가정합니다.`,
				ja: `210,000ブロックごと — 約4年 — にブロック補助金は半分になります：50 → 25 → 12.5 → 6.25 → 3.125 BTC。次の1.5625 BTCへの引き下げもすでにスケジュールに載っています。マイナーの視点では、これは一夜にして起きる出来事です。半減期のブロックが発見された瞬間にTH/sあたりの収益は半分になり、BTC価格の上昇か取引手数料収入の拡大が十分に補ってくれない限りそのままです。どちらも保証はなく、手数料は短い混雑の急騰期を除けば、歴史的に補助金のごく一部しかカバーしてきませんでした。

半減期は限界的なマイナーが撤退する時期です。小売電気料金でかろうじて黒字だった事業者は明確な赤字に転落して電源を落とし、その後に難易度がやや下方調整され、より安い電力を持つ生き残りに収益が再分配されます。回収期間12〜36か月をうたうマシンを評価するときはカレンダーを確認してください。その期間内に半減期があるなら、予測は途中で収益50%カットを乗り越えなければなりません。楽観的なベンダーの回収試算の多くは、それが起きないことを暗黙のうちに仮定しています。`,
				zh: `每210,000个区块——约4年——区块补贴减半一次：50 → 25 → 12.5 → 6.25 → 3.125 BTC，下一次降至1.5625 BTC也已在时间表上。从矿工视角看，这是一夜之间发生的事件：减半区块被挖出的那一刻，每TH/s的收益就腰斩，除非BTC价格上涨或交易手续费收入扩大到足以弥补。两者都没有保证，而且除了短暂的拥堵高峰之外，手续费在历史上只覆盖了补贴的一小部分。

减半正是边际矿工投降的时刻。用零售电价勉强盈利的运营者会转为明显亏损而关机；随后难度会有所下调，把收益重新分配给拥有更便宜电力的幸存者。当你评估一台号称12至36个月回本的矿机时，先看看日历：如果回本窗口内包含一次减半，这个预测就必须挺过中途50%的收入削减。大多数乐观的厂商回本宣传都在默默假设这不会发生。`
			}
		},
		{
			heading: {
				en: 'Pools, Payout Schemes, and Variance',
				ko: '채굴 풀, 정산 방식, 그리고 분산',
				ja: 'マイニングプール、支払い方式、そして分散',
				zh: '矿池、结算方式与波动性'
			},
			body: {
				en: `With 100 TH/s your expected block find rate is about 0.000024 blocks per day — one block every ~114 years on average. The expected value is identical to the pool case, but the variance is unlivable: you would most likely earn nothing for decades and then 3.125 BTC at once. Pools exist to trade that variance away: members combine hashrate, and payouts are smoothed into small regular payments proportional to submitted shares.

Payout schemes matter. FPPS (full pay per share) pays you the expected value of both subsidy and transaction fees for every share, giving the smoothest income; the pool carries the luck risk and charges the highest fee, commonly 2–4%. PPS is similar but typically covers the subsidy only. PPLNS pays out of what the pool actually mined over a recent window, so your income tracks pool luck — lower fees, more variance, and loyalty matters, since hopping between pools forfeits pending shares.

The fee comes straight off the top: at 2% FPPS, the $4.50/day example becomes $4.41 before electricity. Always enter net-of-fee revenue in profitability projections.`,
				ko: `100 TH/s의 기대 블록 발견율은 하루 약 0.000024블록 — 평균 약 114년에 1블록입니다. 기대값 자체는 풀에 참여할 때와 동일하지만 분산은 감당할 수 없는 수준입니다. 수십 년간 아무것도 벌지 못하다가 한 번에 3.125 BTC를 받을 가능성이 가장 높습니다. 풀은 이 분산을 맞바꾸기 위해 존재합니다. 참여자들이 해시레이트를 합치고, 제출한 셰어에 비례하는 작고 규칙적인 지급으로 수익이 평탄화됩니다.

정산 방식이 중요합니다. FPPS(full pay per share)는 모든 셰어에 대해 보조금과 거래 수수료의 기대값을 지급해 가장 매끄러운 수입을 주며, 운(luck) 리스크를 풀이 떠안는 대신 통상 2~4%의 가장 높은 수수료를 받습니다. PPS는 유사하지만 보통 보조금만 보전합니다. PPLNS는 최근 구간에서 풀이 실제로 채굴한 것에서 지급하므로 수입이 풀의 운을 따라갑니다 — 수수료는 낮고 분산은 크며, 풀을 옮기면 대기 중인 셰어를 잃으므로 충성도가 중요합니다.

수수료는 수익 맨 위에서 바로 빠집니다. 2% FPPS라면 하루 $4.50 예시는 전기료를 빼기 전 $4.41이 됩니다. 수익성 예측에는 항상 수수료 차감 후 수익을 입력하세요.`,
				ja: `100 TH/sの期待ブロック発見率は1日約0.000024ブロック — 平均でおよそ114年に1ブロックです。期待値そのものはプール参加時と同一ですが、分散は耐えられる水準ではありません。何十年も何も得られず、あるとき突然3.125 BTCを受け取る、という展開が最も起こりやすいのです。プールはこの分散を交換するために存在します。参加者はハッシュレートを持ち寄り、提出したシェアに比例した小さく規則的な支払いへと収入が平準化されます。

支払い方式は重要です。FPPS（full pay per share）はすべてのシェアに対して補助金と取引手数料の期待値を支払い、最も滑らかな収入をもたらします。運のリスクはプールが負い、その分手数料は通常2〜4%と最も高くなります。PPSは類似ですが、通常は補助金分のみを補償します。PPLNSは直近の期間にプールが実際に採掘した分から支払うため、収入はプールの運に連動します — 手数料は低く、分散は大きく、プールを渡り歩くと未確定のシェアを失うため定着が重要になります。

手数料は収入の頭から直接引かれます。2%のFPPSなら、1日$4.50の例は電気代を引く前に$4.41になります。収益予測には常に手数料控除後の収入を入力してください。`,
				zh: `以100 TH/s计算，你的期望出块率约为每天0.000024个区块——平均约114年才出一个块。期望值与加入矿池时完全相同，但波动性令人无法承受：最可能的情形是几十年颗粒无收，然后一次性获得3.125 BTC。矿池的存在就是为了置换这种波动：成员合并算力，收益被平滑成与提交份额成比例的小额定期支付。

结算方式很重要。FPPS（full pay per share）按每个份额支付补贴加交易手续费的期望值，收入最平滑；矿池承担运气风险，因此收取最高的费率，通常为2%至4%。PPS与之类似，但通常只覆盖补贴部分。PPLNS则从矿池最近一段窗口内实际挖到的收益中支付，你的收入跟随矿池的运气波动——费率更低、波动更大，而且跳池会损失待结算的份额，因此忠诚度很重要。

矿池费直接从收入顶上扣除：按2%的FPPS计算，每天$4.50的例子在扣电费之前变成$4.41。做盈利预测时，务必填入扣除矿池费后的净收入。`
			},
			code: {
				lang: 'javascript',
				example: `// Solo-mining variance vs pool fee impact (100 TH/s)
const blocksPerDay = 1.667e-7 * 144;        // 0.000024 blocks/day
const daysPerBlock = 1 / blocksPerDay;      // ~41,667 days
const yearsPerBlock = daysPerBlock / 365;   // ~114 years between blocks
const netRevenue = 4.50 * (1 - 0.02);       // $4.41/day after 2% FPPS fee`
			}
		},
		{
			heading: {
				en: 'Total Cost of Ownership, Common Mistakes, and Taxes',
				ko: '총소유비용, 흔한 실수, 그리고 세금',
				ja: '総所有コスト、よくある間違い、そして税金',
				zh: '总拥有成本、常见错误与税务'
			},
			body: {
				en: `A machine that mines $0.60 of daily margin is not making money if it cost $3,000 and will be obsolete in three years. Total cost of ownership includes hardware depreciation (ASICs lose resale value fast — often most of it within a single generation cycle), cooling and ventilation, hosting or rack fees, and downtime. Uptime cuts asymmetrically: 5% downtime removes 5% of revenue but none of your fixed costs, so thin margins get hit disproportionately. Firmware tuning adds another lever: underclocking lowers J/TH and can turn a loss into a small profit at high power prices, while overclocking does the reverse.

The recurring mistakes are consistent: projecting with today's difficulty and today's price fixed for years, forgetting pool fees and downtime, ignoring the collapse in ASIC resale value, and treating vendor payback claims as guarantees. Run pessimistic scenarios first.

Taxes deserve their own line: in many jurisdictions mined coins are taxable as income at fair market value when received, and again on any gain or loss when sold. Rules differ widely by country — consult a qualified tax professional. Everything on this page, calculator included, is educational content only, not financial advice; mining involves a substantial risk of loss.`,
				ko: `하루 $0.60의 마진을 캐는 장비라도 구입가가 $3,000이고 3년 뒤 구형이 된다면 돈을 버는 것이 아닙니다. 총소유비용에는 하드웨어 감가상각(ASIC은 재판매 가치를 빠르게 잃습니다 — 한 세대 주기 안에 대부분을 잃는 경우가 흔합니다), 냉각과 환기, 호스팅·랙 비용, 그리고 다운타임이 포함됩니다. 가동률은 비대칭적으로 작용합니다. 5%의 다운타임은 수익의 5%를 없애지만 고정비는 전혀 줄이지 않으므로, 얇은 마진일수록 타격이 불균형하게 큽니다. 펌웨어 튜닝은 또 하나의 지렛대입니다. 언더클럭은 J/TH를 낮춰 높은 전력 단가에서 손실을 작은 이익으로 바꿀 수 있고, 오버클럭은 그 반대로 작동합니다.

반복되는 실수는 한결같습니다. 오늘의 난이도와 가격을 몇 년간 고정해 예측하기, 풀 수수료와 다운타임 잊기, ASIC 재판매 가치 붕괴 무시하기, 판매사의 회수 기간 주장을 보증으로 취급하기. 비관적 시나리오부터 먼저 돌려 보세요.

세금은 따로 짚어야 합니다. 많은 국가에서 채굴한 코인은 수령 시점의 공정시장가치로 소득 과세되고, 매도 시 손익에 대해 다시 과세됩니다. 규정은 나라마다 크게 다르므로 자격을 갖춘 세무 전문가와 상담하세요. 계산기를 포함해 이 페이지의 모든 내용은 교육 목적의 콘텐츠일 뿐 재무 자문이 아니며, 채굴에는 상당한 손실 위험이 따릅니다.`,
				ja: `1日$0.60の利益を掘るマシンでも、購入価格が$3,000で3年後に旧式化するなら儲かってはいません。総所有コストには、ハードウェアの減価償却（ASICは再販価値を急速に失います — 一世代のサイクルの内にその大半を失うことも珍しくありません）、冷却と換気、ホスティングやラックの費用、そしてダウンタイムが含まれます。稼働率は非対称に効きます。5%のダウンタイムは収入の5%を消しますが固定費は一切減らさないため、薄い利益ほど不釣り合いに大きな打撃を受けます。ファームウェア調整はもう一つのレバーです。アンダークロックはJ/THを下げ、高い電力単価では損失を小さな利益に変えられる一方、オーバークロックはその逆に働きます。

繰り返される間違いは一貫しています。今日の難易度と価格を何年も固定して予測すること、プール手数料とダウンタイムを忘れること、ASICの再販価値の崩落を無視すること、そしてベンダーの回収期間の主張を保証として扱うことです。まず悲観シナリオから走らせてください。

税金は別枠で述べておく必要があります。多くの法域では、採掘したコインは受領時の公正市場価値で所得として課税され、売却時の損益に対して再び課税されます。ルールは国によって大きく異なるため、資格を持つ税務専門家に相談してください。この計算機を含め、このページのすべては教育目的のコンテンツであり、金融アドバイスではありません。マイニングには重大な損失リスクが伴います。`,
				zh: `一台每天挖出$0.60利润的矿机，如果购机价$3,000且三年后就会过时，其实并没有在赚钱。总拥有成本包括硬件折旧（ASIC的转售价值跌得很快——常常在一个世代周期内损失大半）、散热与通风、托管或机架费用，以及停机时间。在线率的影响是不对称的：5%的停机会砍掉5%的收入，却不减少任何固定成本，因此利润越薄受创越重。固件调校是另一个杠杆：降频可降低J/TH，在高电价下能把亏损变成小幅盈利；超频则正好相反。

反复出现的错误始终如一：用今天的难度和币价固定推算多年、忘记矿池费和停机、忽视ASIC转售价值的崩塌、把厂商的回本宣传当成保证。请先跑悲观情景。

税务需要单独强调：在许多司法辖区，挖到的币在收到时按公允市场价值作为收入课税，出售时的损益还要再次课税。各国规则差异很大——请咨询有资质的税务专业人士。本页面的全部内容（包括计算器）仅为教育性内容，不构成财务建议；挖矿存在重大亏损风险。`
			}
		}
	];

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	const toolContent = {
		about: {
			en: 'The Bitcoin mining calculator estimates daily and monthly mining revenue, electricity cost, and net profit based on your hashrate, power draw, electricity price, coin price, and current network difficulty. Mining economics change constantly with difficulty adjustments and price swings, so any projection is only a snapshot. This tool is provided for educational purposes only and is not financial advice or a guarantee of mining profitability.',
			ko: '비트코인 채굴 계산기는 해시레이트, 소비 전력, 전기 요금, 코인 가격, 네트워크 난이도를 기준으로 일일/월간 채굴 수익, 전기 비용, 순이익을 추정합니다. 채굴 경제성은 난이도 조정과 가격 변동에 따라 끊임없이 바뀌므로 모든 예측은 한 시점의 스냅샷에 불과합니다. 본 도구는 교육 목적으로만 제공되며 재무 자문이나 수익 보장이 아닙니다.',
			ja: 'ビットコインマイニング計算機は、ハッシュレート、消費電力、電気料金、コイン価格、現在のネットワーク難易度に基づき、日次・月次のマイニング収益、電気代、純利益を推定します。難易度調整と価格変動でマイニング経済性は常に変化するため、予測は一時点のスナップショットに過ぎません。本ツールは教育目的のみで、金融アドバイスや収益保証ではありません。',
			zh: '比特币挖矿计算器根据您的算力、功耗、电价、币价和当前网络难度估算日/月挖矿收入、电费和净利润。挖矿经济性随难度调整和价格波动持续变化，任何预测都只是某个时点的快照。本工具仅供教育用途，不是财务建议或挖矿盈利保证。'
		},
		howTo: {
			en: [
				'Enter your mining hardware hashrate and select the unit (TH/s, GH/s, MH/s).',
				'Enter the power consumption in watts.',
				'Enter your electricity cost per kWh in USD.',
				'Enter the current Bitcoin price.',
				'Review the daily profit, monthly profit, and electricity cost breakdown.'
			],
			ko: [
				'채굴 장비의 해시레이트와 단위(TH/s, GH/s, MH/s)를 입력합니다.',
				'소비 전력(W)을 입력합니다.',
				'kWh당 전기 요금(USD)을 입력합니다.',
				'현재 비트코인 가격을 입력합니다.',
				'일일 수익, 월 수익, 전기 비용 내역을 확인합니다.'
			],
			ja: [
				'マイニング機器のハッシュレートと単位(TH/s, GH/s, MH/s)を入力します。',
				'消費電力(W)を入力します。',
				'kWhあたりの電気料金(USD)を入力します。',
				'現在のビットコイン価格を入力します。',
				'日次利益、月次利益、電気代の内訳を確認します。'
			],
			zh: [
				'输入挖矿硬件算力并选择单位 (TH/s、GH/s、MH/s)。',
				'输入功耗 (瓦特)。',
				'输入每千瓦时的电费 (美元)。',
				'输入当前比特币价格。',
				'查看日利润、月利润和电费的明细。'
			]
		},
		useCases: {
			en: [
				'Estimate whether a specific ASIC miner is profitable in your region.',
				'Compare profitability across different electricity prices or hardware.',
				'Decide whether to mine, buy and hold, or join a mining pool.',
				'Educational example of how difficulty and energy cost shape mining economics.',
				'Stress-test profitability under different Bitcoin price scenarios.'
			],
			ko: [
				'특정 ASIC 채굴기가 본인 지역에서 수익성이 있는지 추정',
				'전기 요금이나 하드웨어가 다른 경우의 수익성 비교',
				'채굴, 매수 후 보유, 채굴 풀 참여 중 무엇이 유리한지 판단',
				'난이도와 에너지 비용이 채굴 경제성에 미치는 영향 학습',
				'다양한 비트코인 가격 시나리오에서 수익성 스트레스 테스트'
			],
			ja: [
				'特定のASICマイナーが地域で採算が取れるかの推定',
				'異なる電気料金やハードウェアでの収益性比較',
				'マイニング、現物保有、マイニングプール参加の比較',
				'難易度とエネルギーコストがマイニング経済性に与える影響の学習',
				'異なるビットコイン価格シナリオでの収益性ストレステスト'
			],
			zh: [
				'估算特定ASIC矿机在您所在地区是否有利可图',
				'比较不同电价或硬件下的收益情况',
				'决定是挖矿、买入持有还是加入矿池',
				'用于学习难度和能源成本如何影响挖矿经济性',
				'对不同比特币价格场景下的盈利能力进行压力测试'
			]
		},
		faq: {
			en: [
				{ q: 'Is this financial advice?', a: 'No. This calculator is for educational purposes only and does not constitute financial or investment advice. Mining can result in losses, especially when difficulty rises or price falls.' },
				{ q: 'Why does the result not match real mining?', a: 'Real revenue depends on pool fees, transaction fee revenue, ongoing difficulty adjustments, hardware downtime, cooling costs, and price volatility, which are not all captured here.' },
				{ q: 'Does this include hardware cost?', a: 'No. Capital cost of the miner itself is not amortized. To find true ROI you must factor in hardware purchase price and expected lifetime.' },
				{ q: 'How often should I update difficulty?', a: 'Bitcoin difficulty adjusts roughly every two weeks. For accurate estimates, refresh the difficulty value to the latest published number.' }
			],
			ko: [
				{ q: '이것은 재무 자문인가요?', a: '아닙니다. 본 계산기는 교육 목적으로만 제공되며 재무 또는 투자 자문이 아닙니다. 난이도 상승이나 가격 하락 시 채굴은 손실을 초래할 수 있습니다.' },
				{ q: '실제 채굴 결과와 다른 이유는?', a: '실제 수익은 풀 수수료, 거래 수수료 수익, 지속적인 난이도 조정, 하드웨어 가동 중단, 냉각 비용, 가격 변동성에 영향을 받으며 여기서 모두 반영되지는 않습니다.' },
				{ q: '하드웨어 비용이 포함되나요?', a: '아니요. 채굴기 자체의 자본 비용은 상각되지 않습니다. 실제 ROI를 보려면 하드웨어 구매가와 예상 수명을 함께 고려해야 합니다.' },
				{ q: '난이도는 얼마나 자주 갱신해야 하나요?', a: '비트코인 난이도는 약 2주마다 조정됩니다. 정확한 추정을 위해 최신 공시값으로 갱신하세요.' }
			],
			ja: [
				{ q: 'これは金融アドバイスですか?', a: 'いいえ。本計算機は教育目的のみで、金融・投資アドバイスではありません。難易度上昇や価格下落時には損失となり得ます。' },
				{ q: '実際のマイニング結果と異なる理由は?', a: '実収益はプール手数料、取引手数料収入、継続的な難易度調整、ハードウェア停止、冷却コスト、価格変動の影響を受け、ここではすべて反映されていません。' },
				{ q: 'ハードウェアコストは含まれますか?', a: 'いいえ。マイナー本体の資本コストは償却されていません。実際のROIを見るには購入価格と耐用年数も考慮してください。' },
				{ q: '難易度はどのくらいの頻度で更新すべき?', a: 'ビットコインの難易度は約2週間ごとに調整されます。正確な推定には最新値に更新してください。' }
			],
			zh: [
				{ q: '这是财务建议吗？', a: '不是。本计算器仅供教育用途，不构成财务或投资建议。挖矿可能导致亏损，尤其是难度上升或币价下跌时。' },
				{ q: '为什么结果与真实挖矿不一致？', a: '真实收益取决于矿池费、交易手续费收入、持续的难度调整、硬件停机、散热成本以及价格波动，这些并未完全体现。' },
				{ q: '是否包含硬件成本？', a: '没有。矿机本身的资本成本未做摊销。要计算真实ROI，需考虑硬件采购价和预期使用年限。' },
				{ q: '难度多久更新一次？', a: '比特币难度大约每两周调整一次。为获得准确估算，请使用最新公布的难度值。' }
			]
		},
		related: [
			{ href: '/staking', label: { en: 'Staking Calculator', ko: '스테이킹 계산기', ja: 'ステーキング計算機', zh: '质押计算器' } },
			{ href: '/profit', label: { en: 'Profit Calculator', ko: '손익 계산기', ja: '損益計算機', zh: '盈亏计算器' } },
			{ href: '/roi', label: { en: 'ROI Calculator', ko: 'ROI 계산기', ja: 'ROI計算機', zh: 'ROI计算器' } }
		],
		externalRefs: [
			{ href: 'https://en.wikipedia.org/wiki/Bitcoin_mining', label: 'Bitcoin mining - Wikipedia' },
			{ href: 'https://www.investopedia.com/terms/b/bitcoin-mining.asp', label: 'Investopedia: Bitcoin Mining' }
		]
	};

	let hashrate = 100;
	let unit: 'TH/s' | 'GH/s' | 'MH/s' = 'TH/s';
	let power = 3000;
	let electricityCost = 0.10;
	let coinPrice = 45000;
	let blockReward = 6.25;
	let networkDifficulty = 75000000000000;

	// Simplified mining calculation
	const unitMultipliers = { 'TH/s': 1e12, 'GH/s': 1e9, 'MH/s': 1e6 };

	$: hashrateInHashes = hashrate * unitMultipliers[unit];
	$: blocksPerDay = (hashrateInHashes * 86400) / (networkDifficulty * Math.pow(2, 32));
	$: dailyCoins = blocksPerDay * blockReward;
	$: dailyRevenue = dailyCoins * coinPrice;
	$: dailyElectricityCost = (power / 1000) * 24 * electricityCost;
	$: dailyProfit = dailyRevenue - dailyElectricityCost;
	$: monthlyProfit = dailyProfit * 30;

	function formatCurrency(value: number): string {
		return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 }).format(value);
	}
</script>

<svelte:head>
	<title>{t('mining.title')} - SDK.bz</title>
	<meta name="description" content={t('mining.desc')} />
	<meta property="og:title" content="{t('mining.title')} - SDK.bz" />
	<meta property="og:description" content={t('mining.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('mining.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('mining.desc')}</p>
	</div>

	<div class="grid md:grid-cols-2 gap-8">
		<div class="space-y-6 bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700">
			<div class="flex gap-4">
				<div class="flex-1">
					<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('mining.hashrate')}</label>
					<input type="number" bind:value={hashrate} min="0" step="10"
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-gray-400" />
				</div>
				<div class="w-32">
					<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('mining.unit')}</label>
					<select bind:value={unit}
						class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-gray-400">
						<option value="TH/s">TH/s</option>
						<option value="GH/s">GH/s</option>
						<option value="MH/s">MH/s</option>
					</select>
				</div>
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('mining.power')}</label>
				<input type="number" bind:value={power} min="0" step="100"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-gray-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('mining.cost')}</label>
				<input type="number" bind:value={electricityCost} min="0" step="0.01"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-gray-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('mining.price')}</label>
				<input type="number" bind:value={coinPrice} min="0" step="1000"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-gray-400" />
			</div>
		</div>

		<div class="space-y-4">
			<div class="p-6 rounded-2xl border {dailyProfit >= 0 ? 'bg-gray-100 dark:bg-gray-800/50 border-gray-300 dark:border-gray-700' : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'}">
				<p class="text-sm {dailyProfit >= 0 ? 'text-gray-600 dark:text-gray-400' : 'text-red-600 dark:text-red-400'} mb-1">{t('mining.daily')}</p>
				<p class="text-3xl font-bold {dailyProfit >= 0 ? 'text-gray-900 dark:text-gray-100' : 'text-red-700 dark:text-red-300'}">{formatCurrency(dailyProfit)}</p>
			</div>
			<div class="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700 space-y-3">
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('mining.monthly')}</span>
					<span class="font-semibold {monthlyProfit >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}">{formatCurrency(monthlyProfit)}</span>
				</div>
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('mining.electricity')}</span>
					<span class="font-semibold text-red-600 dark:text-red-400">-{formatCurrency(dailyElectricityCost)}/day</span>
				</div>
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">Daily Revenue</span>
					<span class="font-semibold text-gray-900 dark:text-dark-100">{formatCurrency(dailyRevenue)}</span>
				</div>
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">Daily Coins</span>
					<span class="font-semibold text-gray-900 dark:text-dark-100">{dailyCoins.toFixed(8)} BTC</span>
				</div>
			</div>
		</div>
	</div>

	<ToolContent
		{lang}
		toolName="Mining Profit Calculator"
		toolUrl="https://sdk.bz/{lang}/mining"
		lastUpdated="2026-04-30"
		category="Finance Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sdk.bz/${lang}` },
			{ name: 'Tools', url: `https://sdk.bz/${lang}` },
			{ name: 'Mining Profit Calculator', url: `https://sdk.bz/${lang}/mining` }
		]}
		content={toolContent}
	/>

	<ToolGuide {lang} sections={guideSections} />
</div>
