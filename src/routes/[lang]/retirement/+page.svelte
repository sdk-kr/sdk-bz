<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';
	import ToolGuide from '$lib/components/ToolGuide.svelte';

	const guideSections = [
		{
			heading: {
				en: 'How the Accumulation Math Works',
				ko: '적립 단계의 수학이 작동하는 방식',
				ja: '積立フェーズの数学の仕組み',
				zh: '积累阶段的数学原理'
			},
			body: {
				en: `Every projection this calculator makes rests on two pieces of compound-interest algebra. A lump sum you already hold grows to PV × (1 + i)^n, and a stream of level monthly contributions grows to the future value of an ordinary annuity: FV = PMT × ((1 + i)^n − 1) / i, where PMT is the monthly deposit, i is the annual rate divided by 12, and n is the number of months. The two results are simply added together.

Work one example by hand to see the scale involved. Contribute $500 per month for 30 years at a 7% nominal annual return. Then i = 0.07 / 12 ≈ 0.0058333 and n = 360. The growth factor (1.0058333)^360 ≈ 8.1165, so FV ≈ 500 × (8.1165 − 1) / 0.0058333 ≈ $609,985. You only deposited 500 × 360 = $180,000; the remaining $429,985 — about 70% of the final balance — is compound growth on money you set aside earlier.

Now start ten years later with everything else unchanged. With n = 240, (1.0058333)^240 ≈ 4.0387 and FV ≈ 500 × 3.0387 / 0.0058333 ≈ $260,463 — less than half the 30-year result, even though you still contributed two-thirds as much money. The final decade of compounding does the heaviest lifting, which is why delay is so expensive. One subtlety: this formula assumes end-of-month deposits; contributing at the start of each month (an annuity due) multiplies the result by (1 + i), a difference of about 0.58% here.`,
				ko: `이 계산기가 내놓는 모든 예측은 두 가지 복리 대수식 위에 서 있습니다. 이미 보유한 목돈은 PV × (1 + i)^n으로 불어나고, 매달 일정 금액을 적립하는 흐름은 기말급 연금의 미래가치 공식 FV = PMT × ((1 + i)^n − 1) / i 로 불어납니다. 여기서 PMT는 월 적립금, i는 연이율을 12로 나눈 값, n은 개월 수이며, 두 결과를 단순히 더하면 됩니다.

규모를 실감하기 위해 예 하나를 손으로 계산해 봅시다. 명목 연 7% 수익률로 30년 동안 매달 500달러를 적립하면 i = 0.07 / 12 ≈ 0.0058333, n = 360입니다. 성장 계수 (1.0058333)^360 ≈ 8.1165이므로 FV ≈ 500 × (8.1165 − 1) / 0.0058333 ≈ 609,985달러가 됩니다. 실제로 넣은 돈은 500 × 360 = 180,000달러뿐이고, 나머지 429,985달러 — 최종 잔액의 약 70% — 는 먼저 넣어 둔 돈에 붙은 복리 성장분입니다.

이제 다른 조건은 그대로 두고 10년 늦게 시작해 봅시다. n = 240이면 (1.0058333)^240 ≈ 4.0387이고 FV ≈ 500 × 3.0387 / 0.0058333 ≈ 260,463달러로, 여전히 3분의 2만큼의 돈을 넣었는데도 30년 결과의 절반에도 미치지 못합니다. 복리의 마지막 10년이 가장 무거운 짐을 지기 때문에 미루는 것이 그토록 비싼 것입니다. 한 가지 세부 사항: 이 공식은 월말 납입을 가정하며, 매달 초에 납입하면(기시급 연금) 결과에 (1 + i)를 곱하게 되어 여기서는 약 0.58% 차이가 납니다.`,
				ja: `この計算機が出すあらゆる予測は、2つの複利の代数式の上に成り立っています。すでに保有している一時金は PV × (1 + i)^n で増え、毎月一定額を積み立てるフローは期末払い年金の将来価値の公式 FV = PMT × ((1 + i)^n − 1) / i で増えます。ここで PMT は毎月の積立額、i は年利を12で割った値、n は月数で、2つの結果を単純に足し合わせます。

規模感をつかむために、1つの例を手計算してみましょう。名目年率7%で30年間、毎月500ドルを積み立てるとすると、i = 0.07 / 12 ≈ 0.0058333、n = 360 です。成長係数は (1.0058333)^360 ≈ 8.1165 なので、FV ≈ 500 × (8.1165 − 1) / 0.0058333 ≈ 609,985ドルになります。実際に入金したのは 500 × 360 = 180,000ドルだけで、残りの429,985ドル — 最終残高の約70% — は、早めに積み立てたお金に付いた複利の成長分です。

次に、他の条件はそのままで10年遅く始めてみます。n = 240 では (1.0058333)^240 ≈ 4.0387 となり、FV ≈ 500 × 3.0387 / 0.0058333 ≈ 260,463ドル。それでも3分の2の金額を入金したのに、30年の結果の半分にも届きません。複利の最後の10年が最も重い仕事をするため、先延ばしはこれほど高くつくのです。細かい点を1つ: この公式は月末の入金を仮定しており、月初に入金する場合(期首払い年金)は結果に (1 + i) を掛けることになり、ここでは約0.58%の差になります。`,
				zh: `这个计算器给出的每一个预测，都建立在两条复利代数公式之上。你已经持有的一笔本金按 PV × (1 + i)^n 增长，而每月定额投入的现金流按普通年金（期末年金）的终值公式增长：FV = PMT × ((1 + i)^n − 1) / i，其中 PMT 是每月投入额，i 是年利率除以12，n 是月数。把两个结果直接相加即可。

亲手算一个例子，感受一下其中的量级。以名义年化7%的收益率，每月投入500美元，坚持30年。那么 i = 0.07 / 12 ≈ 0.0058333，n = 360。增长系数 (1.0058333)^360 ≈ 8.1165，因此 FV ≈ 500 × (8.1165 − 1) / 0.0058333 ≈ 609,985美元。你实际存入的只有 500 × 360 = 180,000美元；其余的429,985美元——约占最终余额的70%——是早期存入资金带来的复利增长。

现在保持其他条件不变，把起点推迟十年。当 n = 240 时，(1.0058333)^240 ≈ 4.0387，FV ≈ 500 × 3.0387 / 0.0058333 ≈ 260,463美元——尽管仍然投入了三分之二的本金，结果却不到30年方案的一半。复利的最后十年承担着最重的工作，这正是拖延如此昂贵的原因。一个细节：该公式假设月末存入；若改为每月月初存入（期初年金），结果要乘以 (1 + i)，在本例中约相差0.58%。`
			},
			code: {
				lang: 'javascript',
				example: `const PMT = 500;         // monthly contribution
const i = 0.07 / 12;     // ≈ 0.0058333 monthly rate
const fv = (n) => PMT * ((1 + i) ** n - 1) / i;

fv(360); // ≈ 609,985  (30 years, $180,000 deposited)
fv(240); // ≈ 260,463  (20 years, $120,000 deposited)
// starting 10 years later costs ≈ $349,522 of final balance`
			}
		},
		{
			heading: {
				en: 'The 4% Rule and Safe Withdrawal Rates',
				ko: '4% 법칙과 안전 인출률',
				ja: '4%ルールと安全引き出し率',
				zh: '4%法则与安全提取率'
			},
			body: {
				en: `Accumulation is only half the problem; the other half is how much you can spend without outliving the money. The best-known answer comes from the Trinity study (Cooley, Hubbard, and Walz, 1998), which tested historical U.S. market data and found that withdrawing 4% of the portfolio in the first year of retirement, then adjusting that dollar amount for inflation each year, survived roughly 95% or more of all historical 30-year retirement periods when the portfolio held 50–75% stocks. Inverting the rule gives the popular savings target: a portfolio of about 25 times your planned annual spending. Someone who needs $40,000 per year from investments would aim for 40,000 × 25 = $1,000,000.

Treat that number as an anchor, not a guarantee. The study used past U.S. returns, a 30-year horizon, and ignored fees and taxes. More recent research — Morningstar's annual State of Retirement Income reports, for example — has suggested starting rates closer to 3.3–3.8% when expected returns are lower, fees are included, or the horizon is longer. An early retiree planning for 45 or 50 years should be especially cautious: at a 3.5% starting rate the target multiple rises to about 28.6 times spending, or roughly $1,142,857 for that same $40,000 budget. The gap between 25× and 28.6× is the price of an extra margin of safety.`,
				ko: `적립은 문제의 절반일 뿐이며, 나머지 절반은 돈보다 오래 살지 않으면서 얼마를 쓸 수 있는가입니다. 가장 잘 알려진 답은 트리니티 연구(Cooley, Hubbard, Walz, 1998)에서 나왔습니다. 이 연구는 미국 시장의 역사적 데이터를 검증하여, 은퇴 첫해에 포트폴리오의 4%를 인출하고 이후 매년 그 금액을 인플레이션에 맞춰 조정할 경우, 주식 비중이 50–75%인 포트폴리오에서는 역사상 모든 30년 은퇴 기간의 약 95% 이상에서 자금이 살아남았다는 사실을 발견했습니다. 이 법칙을 뒤집으면 널리 쓰이는 저축 목표가 나옵니다: 계획한 연간 지출의 약 25배에 해당하는 포트폴리오입니다. 투자에서 연 40,000달러가 필요한 사람은 40,000 × 25 = 1,000,000달러를 목표로 삼게 됩니다.

이 숫자는 보증이 아니라 기준점으로 취급하세요. 이 연구는 과거 미국 수익률과 30년 기간을 사용했고 수수료와 세금을 무시했습니다. 더 최근의 연구 — 예컨대 모닝스타의 연례 State of Retirement Income 보고서 — 는 기대 수익률이 낮거나, 수수료를 반영하거나, 기간이 더 길 때 시작 인출률을 3.3–3.8%에 가깝게 잡을 것을 제안했습니다. 45년이나 50년을 계획하는 조기 은퇴자는 특히 신중해야 합니다. 시작 인출률 3.5%에서는 목표 배수가 지출의 약 28.6배로 올라가며, 같은 40,000달러 예산 기준으로 약 1,142,857달러가 됩니다. 25배와 28.6배 사이의 격차가 곧 추가 안전 마진의 가격입니다.`,
				ja: `積立は問題の半分にすぎません。残りの半分は、資金より長生きしてしまわずにいくら使えるかです。最もよく知られた答えはトリニティ研究(Cooley, Hubbard, Walz, 1998)によるものです。この研究は米国市場の過去データを検証し、退職初年度にポートフォリオの4%を引き出し、その後は毎年その金額をインフレに合わせて調整した場合、株式比率50〜75%のポートフォリオでは、過去のあらゆる30年間の退職期間のおよそ95%以上で資金が持ちこたえたことを発見しました。このルールを逆算すると、広く使われる貯蓄目標が得られます: 計画する年間支出の約25倍のポートフォリオです。投資から年40,000ドルが必要な人は、40,000 × 25 = 1,000,000ドルを目指すことになります。

この数字は保証ではなく、目安として扱ってください。この研究は過去の米国リターンと30年の期間を用い、手数料と税金を無視しています。より新しい研究 — 例えばモーニングスターの年次レポート State of Retirement Income — は、期待リターンが低い場合、手数料を含める場合、期間がより長い場合には、開始引き出し率を3.3〜3.8%程度にすることを提案しています。45年や50年を計画する早期退職者は特に慎重であるべきです。開始率3.5%では目標倍率は支出の約28.6倍に上がり、同じ40,000ドルの予算なら約1,142,857ドルになります。25倍と28.6倍の差こそが、追加の安全余裕の値段です。`,
				zh: `积累只是问题的一半，另一半是：在不让钱先于人耗尽的前提下，每年能花多少。最著名的答案来自Trinity研究（Cooley、Hubbard和Walz，1998年）。该研究检验了美国市场的历史数据，发现在退休第一年提取投资组合的4%、此后每年按通胀调整该金额的情况下，若组合中股票占50%–75%，资金在历史上所有30年退休期中约95%以上都能撑到最后。把这条法则倒过来，就得到了流行的储蓄目标：约等于计划年支出25倍的投资组合。需要每年从投资中取出40,000美元的人，目标就是 40,000 × 25 = 1,000,000美元。

请把这个数字当作锚点，而不是保证。该研究使用的是美国过去的收益率和30年的期限，且忽略了费用和税收。更新的研究——例如晨星（Morningstar）每年发布的State of Retirement Income报告——建议在预期收益较低、计入费用或期限更长时，把初始提取率降到3.3%–3.8%左右。计划45年或50年退休期的提前退休者尤其要谨慎：初始提取率为3.5%时，目标倍数升至支出的约28.6倍，同样40,000美元的预算就需要约1,142,857美元。25倍与28.6倍之间的差距，就是额外安全边际的价格。`
			}
		},
		{
			heading: {
				en: 'Sequence-of-Returns Risk: Why Order Matters',
				ko: '수익률 순서 위험: 순서가 중요한 이유',
				ja: 'リターン順序リスク: 順番が重要な理由',
				zh: '收益顺序风险：为何顺序至关重要'
			},
			body: {
				en: `A subtle danger hides inside the phrase "average return." While you are only accumulating, the order of yearly returns does not matter: multiplication is commutative, so −20% followed by +30% ends at exactly the same place as +30% followed by −20%. The moment you begin withdrawing, that symmetry breaks, because each withdrawal permanently removes shares that can never participate in the recovery.

Follow the arithmetic. Two retirees each start with $1,000,000 and withdraw $40,000 at the beginning of every year. Retiree A hits a bear market immediately: (1,000,000 − 40,000) × 0.80 = $768,000 after year one, then (768,000 − 40,000) × 0.90 = $655,200 after year two. The unchanged $40,000 withdrawal is now 6.1% of the portfolio, so even a strong recovery has far less capital to work with. Retiree B experiences identical returns in reverse — good years first, the crash later — so the losses land on a larger base after years of smaller-percentage withdrawals. Historical simulations show the unlucky ordering can exhaust a portfolio a decade or more sooner despite an identical average return.

Standard mitigations attack the forced-selling problem directly: keep a cash or short-term bond buffer covering one to three years of spending; use flexible "guardrail" rules that trim withdrawals after bad years; or hold a temporarily higher bond allocation around the retirement date (a "bond tent") that glides back into stocks over the first decade.`,
				ko: `'평균 수익률'이라는 말 속에는 미묘한 위험이 숨어 있습니다. 적립만 하는 동안에는 연도별 수익률의 순서가 중요하지 않습니다. 곱셈은 교환법칙을 따르므로 −20% 뒤에 +30%가 오든, +30% 뒤에 −20%가 오든 결과는 정확히 같습니다. 그러나 인출을 시작하는 순간 이 대칭이 깨집니다. 매번의 인출이 회복 장세에 다시는 참여할 수 없는 지분을 영구히 제거하기 때문입니다.

산수를 따라가 봅시다. 두 은퇴자가 각각 1,000,000달러로 시작해 매년 초 40,000달러를 인출합니다. 은퇴자 A는 곧바로 약세장을 만납니다: 1년 차가 지나면 (1,000,000 − 40,000) × 0.80 = 768,000달러, 2년 차가 지나면 (768,000 − 40,000) × 0.90 = 655,200달러입니다. 변함없는 40,000달러 인출이 이제 포트폴리오의 6.1%가 되어, 강한 회복이 와도 일할 자본이 훨씬 적습니다. 은퇴자 B는 똑같은 수익률을 반대 순서로 겪습니다 — 좋은 해가 먼저 오고 폭락이 나중에 오므로, 손실은 수년간 더 낮은 비율로 인출된 뒤의 더 큰 원금 위에 떨어집니다. 역사적 시뮬레이션에 따르면 평균 수익률이 동일해도 운 나쁜 순서는 포트폴리오를 10년 이상 먼저 고갈시킬 수 있습니다.

표준적인 완화책은 강제 매도 문제를 직접 공략합니다: 1–3년 치 지출을 감당할 현금 또는 단기 채권 완충 자금을 유지하고, 나쁜 해 이후 인출을 줄이는 유연한 '가드레일' 규칙을 쓰거나, 은퇴 시점 전후에 일시적으로 채권 비중을 높였다가 첫 10년에 걸쳐 다시 주식으로 되돌리는 '본드 텐트' 전략을 활용하는 것입니다.`,
				ja: `「平均リターン」という言葉には、微妙な危険が潜んでいます。積立だけをしている間は、年ごとのリターンの順序は問題になりません。掛け算は可換なので、−20%の後に+30%が来ても、+30%の後に−20%が来ても、結果は完全に同じです。しかし引き出しを始めた瞬間、この対称性は崩れます。1回ごとの引き出しが、その後の回復相場に二度と参加できない持ち分を恒久的に取り除いてしまうからです。

計算を追ってみましょう。2人の退職者がそれぞれ1,000,000ドルでスタートし、毎年の初めに40,000ドルを引き出します。退職者Aはいきなり弱気相場に遭遇します: 1年目終了時は (1,000,000 − 40,000) × 0.80 = 768,000ドル、2年目終了時は (768,000 − 40,000) × 0.90 = 655,200ドル。変わらぬ40,000ドルの引き出しは、いまやポートフォリオの6.1%に相当し、力強い回復が来ても働ける資本はずっと少なくなっています。退職者Bは同じリターンを逆の順序で経験します — 良い年が先に来て暴落が後に来るため、損失は、より低い比率で引き出された数年を経た、より大きな元本の上に落ちます。過去データのシミュレーションによれば、平均リターンが同一でも、不運な順序はポートフォリオを10年以上早く枯渇させることがあります。

標準的な緩和策は、強制売却の問題を直接攻めます: 1〜3年分の支出をまかなう現金または短期債券のバッファーを持つこと、悪い年の後に引き出しを減らす柔軟な「ガードレール」ルールを使うこと、あるいは退職時点の前後で一時的に債券比率を高め、最初の10年をかけて株式へ戻していく「ボンド・テント」戦略を使うことです。`,
				zh: `“平均收益率”这个词里藏着一个微妙的陷阱。在只存不取的阶段，各年度收益的先后顺序无关紧要：乘法满足交换律，先亏20%再涨30%，与先涨30%再亏20%，终点完全相同。但一旦开始提取，这种对称性就被打破了，因为每一次提取都永久移走了一部分份额，它们再也无法参与之后的反弹。

跟着算一遍。两位退休者各自以1,000,000美元起步，每年年初提取40,000美元。退休者A一退休就遭遇熊市：第一年结束时 (1,000,000 − 40,000) × 0.80 = 768,000美元，第二年结束时 (768,000 − 40,000) × 0.90 = 655,200美元。不变的40,000美元提取额此时已占组合的6.1%，即使随后出现强劲反弹，可用来复利的资本也少了一大截。退休者B经历完全相同但顺序相反的收益——好年景在前、暴跌在后，因此亏损落在经过多年低比例提取后的更大本金上。历史模拟显示，在平均收益完全相同的情况下，不走运的顺序可能让组合提前十年以上耗尽。

标准的缓解手段直接针对被迫卖出的问题：保留能覆盖1–3年支出的现金或短期债券缓冲；采用灵活的“护栏”规则，在糟糕年份之后削减提取额；或在退休前后临时提高债券比例，再在最初十年里逐步滑回股票（所谓“债券帐篷”策略）。`
			}
		},
		{
			heading: {
				en: 'Plan in Real Dollars, Not Nominal',
				ko: '명목 금액이 아닌 실질 금액으로 계획하기',
				ja: '名目ではなく実質で計画する',
				zh: '用实际购买力而非名义金额做规划'
			},
			body: {
				en: `The single most common planning error is admiring a large nominal projection that inflation will quietly hollow out. A $1,000,000 balance 30 years from now is not $1,000,000 of today's spending power: at 3% average inflation the deflator is 1.03^30 ≈ 2.4273, so the real value is about 1,000,000 / 2.4273 ≈ $412,000. If your plan needs a million of today's dollars, the nominal target is actually about $2.43 million.

The clean fix is to run the whole projection in real terms. Convert your expected return with the Fisher equation: r_real = (1 + r_nominal) / (1 + inflation) − 1. At 7% nominal and 3% inflation that gives 1.07 / 1.03 − 1 ≈ 3.88% — noticeably less than the 4% you would get by naive subtraction, and the gap widens as inflation rises. Feed the real rate into the same annuity formula and every output is automatically expressed in today's money, which you can compare directly against today's rent, groceries, and health-care costs.

For diversified global equity portfolios, long-run real returns of roughly 4–5% per year are a common educational assumption; using 6–7% real is optimistic, and double-digit assumptions almost always signal a spreadsheet error waiting to happen. Whichever rate you pick, remember that contributions should also grow with your income over time, which real-terms models handle naturally.`,
				ko: `가장 흔한 계획 오류는 인플레이션이 조용히 갉아먹을 커다란 명목 예상치에 감탄하는 것입니다. 지금부터 30년 뒤의 1,000,000달러 잔액은 오늘의 구매력 기준 1,000,000달러가 아닙니다. 평균 인플레이션 3%에서 디플레이터는 1.03^30 ≈ 2.4273이므로 실질 가치는 약 1,000,000 / 2.4273 ≈ 412,000달러입니다. 오늘 기준으로 100만 달러가 필요한 계획이라면 명목 목표는 사실 약 243만 달러입니다.

깔끔한 해결책은 예측 전체를 실질 기준으로 돌리는 것입니다. 피셔 방정식 r_real = (1 + r_nominal) / (1 + inflation) − 1 로 기대 수익률을 변환하세요. 명목 7%, 인플레이션 3%라면 1.07 / 1.03 − 1 ≈ 3.88%로, 단순 뺄셈으로 얻는 4%보다 눈에 띄게 낮으며 인플레이션이 높아질수록 그 차이는 커집니다. 이 실질 수익률을 같은 연금 공식에 넣으면 모든 결과가 자동으로 오늘의 돈으로 표시되어, 오늘의 집세, 식비, 의료비와 직접 비교할 수 있습니다.

분산된 글로벌 주식 포트폴리오의 장기 실질 수익률로는 연 4–5% 정도가 흔히 쓰이는 교육용 가정입니다. 실질 6–7%는 낙관적이고, 두 자릿수 가정은 거의 언제나 곧 벌어질 스프레드시트 오류의 신호입니다. 어떤 수익률을 고르든, 적립금 역시 시간이 지나며 소득과 함께 늘어나야 한다는 점을 기억하세요. 실질 기준 모델은 이를 자연스럽게 처리합니다.`,
				ja: `最もよくある計画ミスは、インフレが静かに空洞化させていく大きな名目の予測額に見とれることです。今から30年後の1,000,000ドルの残高は、今日の購買力での1,000,000ドルではありません。平均インフレ率3%ではデフレーターは 1.03^30 ≈ 2.4273 となり、実質価値は約 1,000,000 / 2.4273 ≈ 412,000ドルです。今日の価値で100万ドルが必要な計画なら、名目の目標は実際には約243万ドルになります。

すっきりした解決策は、予測全体を実質ベースで行うことです。フィッシャー方程式 r_real = (1 + r_nominal) / (1 + inflation) − 1 で期待リターンを変換してください。名目7%・インフレ3%なら 1.07 / 1.03 − 1 ≈ 3.88% となり、単純な引き算で得られる4%より目に見えて低く、インフレが上がるほどその差は広がります。この実質レートを同じ年金公式に入れれば、すべての出力が自動的に今日のお金で表され、今日の家賃、食費、医療費と直接比較できます。

分散されたグローバル株式ポートフォリオでは、年4〜5%程度の長期実質リターンが教育目的でよく使われる仮定です。実質6〜7%は楽観的で、2桁の仮定はほぼ例外なく、これから起きるスプレッドシートの誤りの前兆です。どのレートを選ぶにせよ、積立額も時間とともに収入に合わせて増やしていくべきであり、実質ベースのモデルはそれを自然に扱えることを覚えておいてください。`,
				zh: `最常见的规划错误，是对一个终将被通胀悄悄掏空的巨大名义数字沾沾自喜。30年后的1,000,000美元余额并不等于今天1,000,000美元的购买力：在3%的平均通胀下，折算因子为 1.03^30 ≈ 2.4273，实际价值约为 1,000,000 / 2.4273 ≈ 412,000美元。如果你的计划需要今天口径下的一百万美元，名义目标实际上应是约243万美元。

干净利落的解决办法是把整个预测放在实际（扣除通胀）口径下进行。用费雪方程转换预期收益率：r_real = (1 + r_nominal) / (1 + inflation) − 1。名义收益7%、通胀3%时，1.07 / 1.03 − 1 ≈ 3.88%——明显低于简单相减得到的4%，而且通胀越高差距越大。把这个实际收益率代入同一个年金公式，所有输出就自动以今天的货币表示，可以直接与今天的房租、伙食和医疗开支对比。

对于分散的全球股票组合，长期实际收益率取每年4%–5%是常见的教学假设；假设实际收益6%–7%已属乐观，而两位数的假设几乎总是预示着一场即将发生的表格灾难。无论选哪个收益率，都请记住投入金额也应随收入增长，实际口径的模型能自然地处理这一点。`
			},
			code: {
				lang: 'javascript',
				example: `const nominal = 0.07, inflation = 0.03;
const real = (1 + nominal) / (1 + inflation) - 1; // ≈ 0.0388 → 3.88%

// purchasing power of $1,000,000 received in 30 years:
1000000 / 1.03 ** 30; // ≈ 412,000 in today's dollars

// nominal target that preserves $1M of today's spending power:
1000000 * 1.03 ** 30; // ≈ 2,427,262`
			}
		},
		{
			heading: {
				en: 'Savings Rate, Fees, and the Mistakes That Matter',
				ko: '저축률, 수수료, 그리고 정말 중요한 실수들',
				ja: '貯蓄率、手数料、そして本当に重大な間違い',
				zh: '储蓄率、费用与真正要紧的错误'
			},
			body: {
				en: `For most people the savings rate dwarfs every other input. The reason is a double effect: saving a larger share of income both grows the portfolio faster and shrinks the annual spending the portfolio must eventually replace. Under standard educational assumptions — a 5% real return and a 4% withdrawal target — someone saving 10% of income needs about 51 years of work, while someone saving 50% needs only about 17. No realistic improvement in investment returns can close a gap that large; the savings rate can.

Fees deserve the same respect. Paying 1% per year in fund and advisory costs turns a 7% return into 6%, and over a 40-year stream of steady contributions that reduces the final balance by roughly 22% — closer to a third for money invested early — because the fee compounds against you exactly as returns compound for you.

The recurring mistakes are worth naming: planning in nominal dollars; assuming 10%+ annual returns because a recent decade delivered them; ignoring health-care costs and the possibility of a 30+ year retirement; and forgetting that state or occupational pensions replace part of the target, so the portfolio only needs to fund the gap. Tax treatment of retirement accounts differs enormously between jurisdictions and account types, so consult a qualified tax or financial professional about your own situation. Finally, keep the output in perspective: this calculator and this guide are educational content only, not financial advice, and real markets deliver volatile, unpredictable returns rather than the smooth average a formula assumes.`,
				ko: `대부분의 사람에게는 저축률이 다른 모든 변수를 압도합니다. 이유는 이중 효과에 있습니다. 소득에서 더 큰 몫을 저축하면 포트폴리오가 더 빨리 자라는 동시에, 포트폴리오가 언젠가 대체해야 할 연간 지출 자체가 줄어들기 때문입니다. 표준적인 교육용 가정 — 실질 수익률 5%와 인출률 4% 목표 — 아래에서 소득의 10%를 저축하는 사람은 약 51년을 일해야 하지만, 50%를 저축하는 사람은 약 17년이면 됩니다. 투자 수익률을 현실적으로 아무리 개선해도 이만한 격차는 메울 수 없습니다. 저축률은 메울 수 있습니다.

수수료도 같은 무게로 존중해야 합니다. 펀드와 자문 비용으로 연 1%를 내면 7% 수익률이 6%가 되고, 40년간 꾸준히 적립하는 흐름에서는 최종 잔액이 약 22% 줄어듭니다 — 일찍 투자된 돈이라면 3분의 1에 가깝게 줄어듭니다. 수익률이 여러분을 위해 복리로 불어나는 것과 정확히 같은 방식으로, 수수료도 여러분에게 불리하게 복리로 작동하기 때문입니다.

반복되는 실수들은 이름을 붙여 둘 가치가 있습니다: 명목 금액으로 계획하기, 최근 10년이 그랬다는 이유로 연 10% 이상의 수익률을 가정하기, 의료비와 30년 이상 이어질 수 있는 은퇴 기간을 무시하기, 그리고 국가 연금이나 직역 연금이 목표의 일부를 대체하므로 포트폴리오는 그 격차만 메우면 된다는 사실을 잊기. 은퇴 계좌의 세금 처리 방식은 국가와 계좌 유형에 따라 크게 다르므로, 본인의 상황에 대해서는 자격을 갖춘 세무·재무 전문가와 상담하세요. 끝으로 결과를 관점 있게 바라보세요. 이 계산기와 이 가이드는 교육용 콘텐츠일 뿐 재무 자문이 아니며, 실제 시장은 공식이 가정하는 매끄러운 평균이 아니라 변동성이 크고 예측 불가능한 수익률을 안겨 줍니다.`,
				ja: `ほとんどの人にとって、貯蓄率は他のあらゆる変数を圧倒します。理由は二重の効果にあります。収入のより大きな割合を貯蓄すると、ポートフォリオがより速く育つと同時に、ポートフォリオがいずれ置き換えるべき年間支出そのものが小さくなるからです。標準的な教育用の仮定 — 実質リターン5%と引き出し率4%の目標 — の下では、収入の10%を貯蓄する人は約51年働く必要がありますが、50%を貯蓄する人は約17年で済みます。投資リターンを現実的にどれだけ改善しても、これほどの差は埋められません。貯蓄率なら埋められます。

手数料にも同じ敬意を払うべきです。ファンドと助言のコストとして年1%を払うと7%のリターンは6%になり、40年間の着実な積立フローでは最終残高が約22%減ります — 早い時期に投資されたお金なら3分の1近く減ります。リターンがあなたのために複利で働くのとまったく同じように、手数料もあなたに不利な方向へ複利で働くからです。

繰り返される間違いには名前を付けておく価値があります: 名目金額で計画すること、直近の10年がそうだったからと年10%超のリターンを仮定すること、医療費と30年を超えうる退職期間を無視すること、そして公的年金や職域年金が目標の一部を置き換えるため、ポートフォリオはその差額だけをまかなえばよいことを忘れること。退職口座の税制は国・地域や口座の種類によって大きく異なるため、ご自身の状況については資格を持つ税務・金融の専門家に相談してください。最後に、結果を冷静に受け止めてください。この計算機とこのガイドは教育目的のコンテンツにすぎず、金融アドバイスではありません。実際の市場は、公式が仮定する滑らかな平均ではなく、変動が大きく予測不可能なリターンをもたらします。`,
				zh: `对大多数人来说，储蓄率的作用压倒其他一切变量。原因在于双重效应：把收入中更大的比例存起来，既让组合增长得更快，又同时降低了组合最终需要替代的年度支出。在标准的教学假设下——实际收益率5%、目标提取率4%——储蓄率为收入10%的人大约需要工作51年，而储蓄率50%的人只需约17年。任何现实可及的投资收益改善都无法弥合这么大的差距；储蓄率可以。

费用也应得到同样的重视。每年为基金和顾问支付1%的成本，会把7%的收益变成6%；在40年持续定投的现金流中，这会让最终余额减少约22%——对早期投入的资金而言接近三分之一。因为正如收益为你复利增长一样，费用也以完全相同的方式对你复利做减法。

反复出现的错误值得逐一点名：用名义金额做计划；因为最近十年如此就假设每年10%以上的收益；忽视医疗开支和可能超过30年的退休期；以及忘记国家养老金或职业年金会替代目标的一部分，投资组合只需填补缺口。各地退休账户的税收规则差异极大，具体情况请咨询合格的税务或理财专业人士。最后，请以恰当的视角看待计算结果：本计算器与本指南仅为教育性内容，不构成财务建议；真实市场带来的是波动且不可预测的收益，而非公式假设的平滑平均值。`
			},
			code: {
				lang: 'text',
				example: `Years to retirement at 5% real return, 4% withdrawal target.
Save fraction S of income, spend (1 - S); need 25 x (1 - S).
Solve: S x ((1.05^n - 1) / 0.05) = 25 x (1 - S)

S = 10%:  1.05^n = 12.25  ->  n = ln(12.25)/ln(1.05) ~ 51 years
S = 50%:  1.05^n = 2.25   ->  n = ln(2.25)/ln(1.05)  ~ 17 years`
			}
		}
	];

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	const toolContent = {
		about: {
			en: 'The retirement calculator estimates how much your retirement savings could grow by combining current savings, monthly contributions, expected return, and time to retirement. It uses standard compound growth formulas and assumes consistent returns, which real markets do not offer. Withdrawals, taxes, fees, and inflation will affect the real outcome. This tool is provided for educational purposes only and is not financial advice.',
			ko: '은퇴 계산기는 현재 저축액, 월 적립금, 예상 수익률, 은퇴까지의 기간을 결합해 은퇴 자금이 얼마나 늘어날 수 있는지 추정합니다. 표준 복리 성장 공식을 사용하며 일정한 수익률을 가정하지만, 실제 시장은 그렇지 않습니다. 인출, 세금, 수수료, 인플레이션은 실제 결과에 영향을 줍니다. 본 도구는 교육 목적으로만 제공되며 재무 자문이 아닙니다.',
			ja: '退職計算機は、現在の貯蓄額、月々の拠出、期待リターン、退職までの期間を組み合わせ、退職資金がどれほど増えるかを推定します。標準的な複利成長公式を用い一定リターンを仮定しますが、実市場はそうではありません。引き出し、税金、手数料、インフレは実際の結果に影響します。本ツールは教育目的のみで、金融アドバイスではありません。',
			zh: '退休计算器结合当前储蓄、月度投入、预期收益和距退休年限，估算退休资金可能的增长。使用标准复利公式并假设收益恒定，但实际市场并非如此。提取、税收、费用和通胀都会影响真实结果。本工具仅供教育用途，不是财务建议。'
		},
		howTo: {
			en: [
				'Enter your current age.',
				'Enter your planned retirement age.',
				'Enter your current retirement savings.',
				'Enter the amount you plan to contribute every month.',
				'Set a conservative expected annual return and review the projected balance.'
			],
			ko: [
				'현재 나이를 입력합니다.',
				'계획 중인 은퇴 나이를 입력합니다.',
				'현재 은퇴 저축액을 입력합니다.',
				'매월 적립할 금액을 입력합니다.',
				'예상 연수익률을 보수적으로 설정하고 예상 잔액을 확인합니다.'
			],
			ja: [
				'現在の年齢を入力します。',
				'予定している退職年齢を入力します。',
				'現在の退職貯蓄額を入力します。',
				'毎月積立する金額を入力します。',
				'期待年利率を保守的に設定し、予想残高を確認します。'
			],
			zh: [
				'输入当前年龄。',
				'输入计划退休年龄。',
				'输入当前退休储蓄额。',
				'输入计划每月投入的金额。',
				'设置保守的年化收益率并查看预计余额。'
			]
		},
		useCases: {
			en: [
				'Estimate whether your current contribution rate is on track for your retirement goal.',
				'Compare scenarios with different monthly contributions or retirement ages.',
				'See the long-term effect of starting earlier vs later.',
				'Plan adjustments to monthly savings after a salary change.',
				'Educational example for understanding how compounding builds retirement assets.'
			],
			ko: [
				'현재 적립 속도가 은퇴 목표에 부합하는지 추정',
				'월 적립금이나 은퇴 나이가 다른 시나리오 비교',
				'일찍 시작하는 것과 늦게 시작하는 것의 장기 효과 확인',
				'급여 변동 후 월 저축액 조정 계획',
				'복리가 은퇴 자산을 형성하는 방식 학습'
			],
			ja: [
				'現在の拠出ペースが退職目標に合っているかの推定',
				'月拠出額や退職年齢が異なるシナリオ比較',
				'早く始める場合と遅く始める場合の長期効果の確認',
				'給与変動後の月貯蓄額調整の計画',
				'複利が退職資産を形成する仕組みの学習'
			],
			zh: [
				'估算当前缴存比例是否能实现退休目标',
				'比较不同月度投入或退休年龄的情景',
				'查看更早开始与较晚开始的长期效果',
				'薪资变化后调整月度储蓄的规划',
				'用于理解复利如何累积退休资产'
			]
		},
		faq: {
			en: [
				{ q: 'Is this financial advice?', a: 'No. This calculator is for educational purposes only and does not constitute financial, investment, or retirement-planning advice. Speak with a qualified advisor for personal recommendations.' },
				{ q: 'Does this account for inflation?', a: 'No. The result is in nominal dollars. To estimate purchasing power at retirement, subtract a long-term inflation assumption from your expected return.' },
				{ q: 'Are taxes included?', a: 'No. Taxes on contributions, growth, and withdrawals depend on the type of account (e.g., 401(k), IRA, taxable brokerage) and are not included.' },
				{ q: 'What return rate should I use?', a: 'Long-term equity returns have historically averaged 6-8% before inflation, but past performance does not predict the future. Use a conservative estimate.' }
			],
			ko: [
				{ q: '이것은 재무 자문인가요?', a: '아닙니다. 본 계산기는 교육 목적으로만 제공되며 재무, 투자, 은퇴 설계 자문이 아닙니다. 개인 맞춤 조언은 전문가와 상담하세요.' },
				{ q: '인플레이션이 반영되나요?', a: '아니요. 결과는 명목 금액입니다. 은퇴 시점의 구매력을 추정하려면 예상 수익률에서 장기 인플레이션 가정치를 차감하세요.' },
				{ q: '세금이 포함되나요?', a: '아니요. 적립, 성장, 인출 시점의 세금은 계좌 유형(예: 401(k), IRA, 일반 증권계좌)에 따라 다르며 포함되지 않습니다.' },
				{ q: '어떤 수익률을 사용해야 하나요?', a: '장기 주식 수익률은 인플레이션 이전 기준 역사적으로 6-8% 수준이었으나 과거 성과는 미래를 보장하지 않습니다. 보수적인 값을 사용하세요.' }
			],
			ja: [
				{ q: 'これは金融アドバイスですか?', a: 'いいえ。本計算機は教育目的のみで、金融・投資・退職設計のアドバイスではありません。個別の助言は専門家にご相談ください。' },
				{ q: 'インフレは反映されますか?', a: 'いいえ。結果は名目額です。退職時の購買力を推定するには、期待リターンから長期インフレ想定値を差し引いてください。' },
				{ q: '税金は含まれますか?', a: 'いいえ。拠出時・運用時・引き出し時の税金は口座種類(例: 401(k)、IRA、課税証券口座)によって異なり、含まれていません。' },
				{ q: 'どの利率を使うべきですか?', a: '長期の株式リターンは歴史的にインフレ前で6〜8%でしたが、過去実績は将来を保証しません。保守的な値を使ってください。' }
			],
			zh: [
				{ q: '这是财务建议吗？', a: '不是。本计算器仅供教育用途，不构成财务、投资或退休规划建议。请咨询合格顾问以获得个性化建议。' },
				{ q: '是否考虑通胀？', a: '没有。结果以名义金额表示。要估算退休时的购买力，请从预期收益中减去长期通胀假设。' },
				{ q: '是否包含税收？', a: '没有。缴存、增值和提取阶段的税收取决于账户类型（如401(k)、IRA、应税经纪账户），未包含在内。' },
				{ q: '应使用什么收益率？', a: '长期股票收益历史上在通胀前约为6-8%，但过去表现不代表未来。请使用保守估计。' }
			]
		},
		related: [
			{ href: '/compound', label: { en: 'Compound Interest', ko: '복리 계산기', ja: '複利計算機', zh: '复利计算器' } },
			{ href: '/dca', label: { en: 'DCA Calculator', ko: 'DCA 계산기', ja: 'DCA計算機', zh: 'DCA计算器' } },
			{ href: '/roi', label: { en: 'ROI Calculator', ko: 'ROI 계산기', ja: 'ROI計算機', zh: 'ROI计算器' } }
		],
		externalRefs: [
			{ href: 'https://www.ssa.gov/benefits/retirement/', label: 'Social Security: Retirement Benefits' },
			{ href: 'https://www.investopedia.com/terms/r/retirement-planning.asp', label: 'Investopedia: Retirement Planning' }
		]
	};

	let currentAge = 30;
	let retireAge = 65;
	let currentSavings = 50000;
	let monthlyContribution = 1000;
	let expectedReturn = 7;

	$: yearsToRetirement = retireAge - currentAge;
	$: r = expectedReturn / 100 / 12;
	$: n = yearsToRetirement * 12;
	$: futureValue = currentSavings * Math.pow(1 + r, n) + monthlyContribution * ((Math.pow(1 + r, n) - 1) / r);
	$: totalContributed = currentSavings + (monthlyContribution * 12 * yearsToRetirement);
	$: investmentGrowth = futureValue - totalContributed;

	function formatCurrency(value: number): string {
		return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
	}
</script>

<svelte:head>
	<title>{t('retirement.title')} - SDK.bz</title>
	<meta name="description" content={t('retirement.desc')} />
	<meta property="og:title" content="{t('retirement.title')} - SDK.bz" />
	<meta property="og:description" content={t('retirement.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('retirement.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('retirement.desc')}</p>
	</div>

	<div class="grid md:grid-cols-2 gap-8">
		<div class="space-y-6 bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700">
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('retirement.age')}</label>
				<input type="number" bind:value={currentAge} min="18" max="80"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-orange-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('retirement.retireAge')}</label>
				<input type="number" bind:value={retireAge} min="40" max="90"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-orange-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('retirement.savings')}</label>
				<input type="number" bind:value={currentSavings} min="0" step="5000"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-orange-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('retirement.monthly')}</label>
				<input type="number" bind:value={monthlyContribution} min="0" step="100"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-orange-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('retirement.rate')}</label>
				<input type="number" bind:value={expectedReturn} min="0" max="15" step="0.5"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-orange-400" />
			</div>
		</div>

		<div class="space-y-4">
			<div class="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-2xl border border-orange-200 dark:border-orange-800">
				<p class="text-sm text-orange-600 dark:text-orange-400 mb-1">{t('retirement.total')}</p>
				<p class="text-3xl font-bold text-orange-700 dark:text-orange-300">{formatCurrency(futureValue)}</p>
				<p class="text-sm text-orange-600 dark:text-orange-400 mt-2">in {yearsToRetirement} years</p>
			</div>
			<div class="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700 space-y-3">
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('retirement.contributed')}</span>
					<span class="font-semibold text-gray-900 dark:text-dark-100">{formatCurrency(totalContributed)}</span>
				</div>
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('retirement.growth')}</span>
					<span class="font-semibold text-green-600 dark:text-green-400">{formatCurrency(investmentGrowth)}</span>
				</div>
			</div>
			<div class="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700">
				<div class="h-4 rounded-full overflow-hidden flex">
					<div class="bg-orange-500" style="width: {(totalContributed / futureValue) * 100}%"></div>
					<div class="bg-green-500" style="width: {(investmentGrowth / futureValue) * 100}%"></div>
				</div>
				<div class="flex justify-between mt-2 text-xs">
					<span class="text-orange-600">Contributions: {((totalContributed / futureValue) * 100).toFixed(1)}%</span>
					<span class="text-green-600">Growth: {((investmentGrowth / futureValue) * 100).toFixed(1)}%</span>
				</div>
			</div>
		</div>
	</div>

	<ToolContent
		{lang}
		toolName="Retirement Calculator"
		toolUrl="https://sdk.bz/{lang}/retirement"
		lastUpdated="2026-04-30"
		category="Finance Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sdk.bz/${lang}` },
			{ name: 'Tools', url: `https://sdk.bz/${lang}` },
			{ name: 'Retirement Calculator', url: `https://sdk.bz/${lang}/retirement` }
		]}
		content={toolContent}
	/>

	<ToolGuide {lang} sections={guideSections} />
</div>
