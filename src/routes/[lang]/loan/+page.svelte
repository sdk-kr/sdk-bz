<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';
	import ToolGuide from '$lib/components/ToolGuide.svelte';

	const guideSections = [
		{
			heading: {
				en: 'Why You Pay More Interest in the First Years (Amortization Math)',
				ko: '대출 초반에 이자를 더 많이 내는 이유 (분할상환 수학)'
			},
			body: {
				en: `An amortizing loan keeps the monthly payment constant, but the split between interest and principal shifts every month. The fixed-payment formula is M = P × r × (1+r)^n / ((1+r)^n − 1), where P is the principal, r is the periodic rate (annual rate / 12 for monthly payments), and n is the total number of payments. This formula derives from setting the present value of an annuity equal to the borrowed amount; it is not arbitrary and not negotiable.

Consider a 30-year, $300,000 mortgage at 6.5% APR. Monthly payment is $1,896.20. In month 1, interest accrues on the full $300,000 at 6.5%/12 = 0.5417% per month, so the interest portion is $1,625.00 — meaning only $271.20 of the first payment reduces principal. By month 360 (final payment), the remaining principal is so small that the interest portion is just $10.22 and the principal portion is $1,885.98. The same payment dollar buys 7× more principal reduction at the end as at the start.

Aggregate the first 5 years vs the last 5 years and the asymmetry becomes visceral. Months 1–60 of that loan: total interest paid = $94,738.60, total principal paid = $19,033.40 — interest is 4.98× principal. Months 301–360: total interest paid = $4,025.30, total principal paid = $109,746.70 — principal is 27.3× interest. Over the full 30 years you pay $382,633 in interest on a $300,000 loan, or 127.5% of principal. This is not a flaw or hidden fee — it is the mathematical consequence of borrowing for a long time at a meaningful rate.

The intuition that helps: interest is always charged on the outstanding balance. Early in the loan, the balance is huge, so interest dominates. As principal works down, the same rate generates less interest, so more of each payment kills principal. The acceleration is exponential, not linear. This is why a single extra payment in year 2 saves dramatically more total interest than the same payment in year 25 — the early prepayment removes principal that would otherwise generate interest for decades.

Quick sanity check: a 30-year loan's "break-even" point (where principal portion finally exceeds interest portion in a single payment) at 6.5% APR is around month 224, or year 18.7. At 4.0% it shifts earlier to month 154 (year 12.8). Lower rates compress the asymmetry; higher rates exaggerate it. The Consumer Financial Protection Bureau (consumerfinance.gov) provides standardized amortization disclosures lenders must give borrowers under TILA/RESPA — read them.

Educational only — not financial advice. Consult a licensed lender or housing counselor for your specific loan.`,
				ko: `분할상환 대출은 매월 같은 금액을 내지만, 이자와 원금의 비율은 매달 바뀝니다. 고정 상환 공식은 M = P × r × (1+r)^n / ((1+r)^n − 1) 입니다. P는 원금, r은 기간 이율(월 상환이면 연이율 / 12), n은 총 상환 횟수입니다. 이 공식은 연금의 현재가치를 차입액과 같게 두고 도출된 것으로, 임의의 규칙이 아니며 협상 대상도 아닙니다.

30년 만기 $300,000 모기지를 6.5% APR로 받았다고 합시다. 월 상환액은 $1,896.20. 1개월 차에는 전체 $300,000에 6.5%/12 = 월 0.5417%가 부과되므로 이자는 $1,625.00, 원금 상환은 $271.20에 불과합니다. 360개월(마지막 회차)에는 잔여 원금이 거의 없어 이자는 $10.22, 원금은 $1,885.98. 같은 1달러가 후반부에는 초반부의 7배만큼 원금을 갚습니다.

처음 5년과 마지막 5년을 합산해보면 비대칭이 더 분명해집니다. 1~60회차 누적 이자 $94,738.60 vs 누적 원금 $19,033.40 — 이자가 원금의 4.98배. 301~360회차 누적 이자 $4,025.30 vs 누적 원금 $109,746.70 — 원금이 이자의 27.3배. 30년 전체로는 $300,000 대출에 이자 $382,633를 내며, 이는 원금의 127.5%에 달합니다. 이것은 결함이나 숨겨진 수수료가 아니라 — 오래, 의미 있는 금리로 빌렸을 때의 수학적 결과입니다.

직관적으로 — 이자는 항상 미상환 잔액에 부과됩니다. 대출 초기에는 잔액이 크므로 이자가 지배적입니다. 원금이 줄어들면 같은 금리로도 발생 이자가 줄어들어, 매 상환액 중 원금 비율이 커집니다. 이 가속은 선형이 아니라 지수적입니다. 그래서 2년차의 추가 1회 선납이 25년차의 같은 선납보다 훨씬 많은 총 이자를 절약합니다 — 초기 선납은 향후 수십 년간 이자를 발생시킬 원금을 제거하기 때문입니다.

빠른 점검 — 30년 대출의 "전환점"(단일 상환에서 원금 비율이 처음으로 이자 비율을 초과하는 시점)은 6.5% APR에서 약 224개월차(18.7년)입니다. 4.0%에서는 154개월차(12.8년)로 앞당겨집니다. 낮은 금리는 비대칭을 압축하고, 높은 금리는 과장합니다. 미국 소비자금융보호국(consumerfinance.gov)은 TILA/RESPA에 따라 대출자가 차주에게 의무적으로 제공해야 하는 표준 상환 일정 공시 양식을 운영합니다 — 반드시 읽으세요.

본 콘텐츠는 교육용이며 재무 자문이 아닙니다. 본인의 대출 상황은 면허 있는 대출 전문가나 주택 상담사와 협의하세요.`
			},
			code: {
				example: `// Standard amortization
function monthlyPayment(P, annualRate, years) {
  const r = annualRate / 12, n = years * 12;
  return P * r * Math.pow(1+r, n) / (Math.pow(1+r, n) - 1);
}

// Build amortization schedule
function schedule(P, annualRate, years) {
  const M = monthlyPayment(P, annualRate, years);
  const r = annualRate / 12;
  let balance = P;
  const rows = [];
  for (let m = 1; m <= years*12; m++) {
    const interest = balance * r;
    const principal = M - interest;
    balance -= principal;
    rows.push({ m, interest, principal, balance });
  }
  return rows;
}

const s = schedule(300000, 0.065, 30);
// s[0]:   interest = 1625.00, principal = 271.20
// s[359]: interest =   10.22, principal = 1885.98`
			}
		},
		{
			heading: {
				en: 'Should You Pay Off Early? The Opportunity Cost',
				ko: '조기 상환해야 하나? 기회비용의 관점'
			},
			body: {
				en: `The "pay off the mortgage early" debate is a battle between behavioral finance and mathematical optimization. Mathematically, prepayment is a guaranteed risk-free return equal to your loan rate. If your mortgage is 4.0% fixed, every dollar of prepayment earns a guaranteed 4.0% pre-tax (less if mortgage interest is deductible). Compare that to expected returns elsewhere: long-run S&P 500 nominal return is roughly 10% with ~19% annual standard deviation; long-run high-grade corporate bonds yield 5–6% nominal. On expected-value terms, equities historically beat a 4% mortgage rate handily.

The catch: that 10% expected return is not guaranteed and not stable. The S&P had decade-long stretches with near-zero returns (2000–2009 was −0.95% annualized including dividends, per Damodaran's NYU dataset). Sequence-of-returns risk matters: a bear market in years 1–3 of your "invest instead of prepay" plan can permanently destroy the math. Mortgage prepayment, by contrast, returns the rate with zero variance.

Tax treatment changes the picture. In the US, the standard deduction since the Tax Cuts and Jobs Act of 2017 has risen high enough that fewer than 10% of households itemize, per IRS data — meaning the mortgage interest deduction does not apply to most borrowers. If you do itemize, the after-tax cost of a 6% mortgage at a 24% marginal bracket is 6% × (1 − 0.24) = 4.56%. Run your real comparison against this after-tax rate.

Behavioral truth: most households do not actually invest the difference. Studies of 401(k) and brokerage flows show that consumers who choose lower mortgage payments overwhelmingly spend the freed cash, not invest it. If your alternative to prepayment is consumption, the mathematical argument collapses — prepayment becomes the strictly better choice. Prepayment is also psychologically valuable: a debt-free home reduces anxiety, increases willingness to take career risk, and provides a hard floor under retirement housing costs. These benefits do not show up in spreadsheets but are real.

Practical decision framework: (1) Always max employer 401(k) match first — that is a 50–100% guaranteed return. (2) Pay off all debt above your mortgage rate (credit cards typically 18–24% APR, per Federal Reserve G.19 data). (3) Build 3–6 months emergency fund. (4) Then choose between additional retirement contributions and prepayment based on your discipline, marginal bracket, and risk tolerance. Either choice is defensible.

Educational only. Consult a licensed financial planner or CPA for your specific tax and cashflow situation.`,
				ko: `"조기 상환해야 하느냐"의 논쟁은 행동 재무와 수학적 최적화의 대결입니다. 수학적으로 — 선납은 대출 금리와 같은, 보장된 무위험 수익을 줍니다. 4.0% 고정 모기지라면 선납 1달러마다 세전 보장 4.0% 수익입니다(주택담보 이자 공제가 있다면 더 낮음). 다른 곳의 기대수익과 비교하면 — S&P 500 장기 명목 수익률은 약 10%, 연 표준편차 ~19%; 장기 우량 회사채는 명목 5~6%. 기대값 기준으로 주식은 4% 모기지를 역사적으로 압도해 왔습니다.

문제 — 그 10% 기대수익은 보장도, 안정도 되지 않습니다. S&P는 2000~2009년처럼 연환산 약 −0.95%(배당 포함)로 10년이 흘러간 시기가 있습니다(NYU Damodaran 데이터). "선납 대신 투자" 계획의 1~3년차에 약세장이 닥치면 수익률 순서 위험(sequence-of-returns risk)으로 수학이 영구적으로 깨질 수 있습니다. 반면 모기지 선납은 분산 0으로 금리 그대로를 회수합니다.

세제 처리도 그림을 바꿉니다. 미국에서는 2017년 Tax Cuts and Jobs Act 이후 표준공제가 크게 인상되어 IRS 통계상 가구의 10% 미만만이 항목별 공제를 합니다 — 대부분 차주에게 모기지 이자 공제는 적용되지 않습니다. 항목별 공제 대상이라면, 한계세율 24%에서 6% 모기지의 세후 비용은 6% × (1 − 0.24) = 4.56%입니다. 실질 비교는 이 세후 금리를 기준으로 해야 합니다.

행동적 진실 — 실제로 대부분의 가구는 차액을 투자하지 않습니다. 401(k)와 증권계좌 자금 흐름 연구에 따르면, 모기지 상환액을 줄여 현금을 확보한 소비자는 압도적으로 그 돈을 소비합니다(투자 아님). 선납의 대안이 소비라면 수학적 논증은 무너집니다 — 선납이 명백히 더 낫습니다. 또한 선납은 심리적 가치가 있습니다 — 부채 없는 집은 불안을 줄이고, 커리어 위험 감수를 늘리며, 은퇴기 주거비의 하한선을 보장합니다. 스프레드시트에는 보이지 않지만 실재합니다.

실무 의사결정 — (1) 고용주 401(k) 매칭은 항상 우선 — 이건 50~100% 보장 수익. (2) 모기지보다 금리 높은 부채는 모두 상환(미국 신용카드 평균 18~24% APR, Federal Reserve G.19). (3) 3~6개월 비상자금 구축. (4) 이후에 추가 은퇴 기여와 선납 중 선택 — 본인의 자기통제력, 한계세율, 리스크 허용도 기준. 어느 쪽도 합리적 선택입니다.

본 콘텐츠는 교육용이며, 본인의 세금과 현금흐름 상황은 면허 있는 재무 설계사나 회계사와 상담하세요.`
			}
		},
		{
			heading: {
				en: 'APR vs APY vs Note Rate — They Are All Different',
				ko: 'APR vs APY vs 표면 금리 — 모두 다른 숫자입니다'
			},
			body: {
				en: `Lenders advertise three different rate concepts and consumers conflate them constantly. Understanding the gap protects you from overpaying.

Note Rate (also called the contract rate or nominal rate) is the bare interest rate written on the loan agreement. A 30-year fixed mortgage with a 6.0% note rate will accrue interest at 0.5% per month on the outstanding balance. Note rate ignores fees, points, and the timing of cashflows.

Annual Percentage Rate (APR) is mandated by the U.S. Truth in Lending Act (Regulation Z, 12 CFR Part 1026). APR rolls origination fees, discount points, mortgage insurance, and certain other charges into a single number expressing the true cost of borrowing as if it were just interest. The standard mortgage APR uses the actuarial method: solve for the rate that, applied to the actual amount you receive (note amount minus prepaid finance charges), equals the contractual payment stream. APR will always be higher than note rate when there are upfront costs. A 6.0% note rate with 1 discount point and $3,000 in fees on a $300,000 loan typically yields an APR around 6.15%–6.25%. The 25-basis-point gap is real money: $750/year on this loan.

Annual Percentage Yield (APY) is mandated by the Truth in Savings Act (Regulation DD) for deposits. APY captures intra-year compounding: APY = (1 + r/n)^n − 1, where r is the nominal rate and n is the compounding frequency. A 5.00% nominal savings rate compounded daily yields APY ≈ 5.127%. For loans, the analogous concept is Effective Annual Rate (EAR), and lenders are not required to disclose it directly — but you can compute it from the APR and compounding frequency.

Critical asymmetry: APR understates the true cost of high-frequency-compounded loans because APR is a simple-interest annualization. Credit cards illustrate this. A "23.99% APR" credit card that compounds daily has an EAR of (1 + 0.2399/365)^365 − 1 ≈ 27.10%. The 311 basis points of compounding effect are invisible in the APR disclosure. The Consumer Financial Protection Bureau has flagged this gap for years; consumer advocates argue EAR should be required disclosure on revolving credit. It is not, yet.

When comparing loan offers, demand APR (not just note rate). When comparing deposit accounts, demand APY (not just nominal rate). When considering a credit card, compute the EAR yourself if balances will revolve. Federal regulations exist to standardize comparisons — use them.

Educational only. The Federal Reserve, CFPB, and your state attorney general all publish guidance on rate disclosures.`,
				ko: `대출 광고에는 세 가지 다른 금리 개념이 등장하며, 소비자는 이를 자주 혼동합니다. 차이를 이해하면 과지급을 막을 수 있습니다.

표면금리(Note Rate, 계약 금리, 명목 금리)는 대출 계약서에 기재된 순수 금리입니다. 6.0% 표면금리 30년 고정 모기지는 미상환 잔액에 매월 0.5%의 이자를 부과합니다. 표면금리는 수수료, 포인트, 현금흐름 타이밍을 무시합니다.

연 환산 금리(APR)는 미국 Truth in Lending Act(Regulation Z, 12 CFR Part 1026)가 의무화합니다. APR은 대출실행수수료, 할인 포인트, 모기지 보험 등 일정 항목을 하나의 숫자로 합산해, "마치 이자만 있는 것처럼" 차입의 진짜 비용을 표현합니다. 표준 모기지 APR은 보험계리 방법(actuarial method)을 사용합니다 — 실제로 받는 금액(표면금액 − 선지급 금융 비용)에 적용했을 때 계약상 상환 흐름과 동일해지는 금리를 역산합니다. 선지급 비용이 있으면 APR은 항상 표면금리보다 높습니다. 6.0% 표면금리, 1 할인 포인트, $3,000 수수료의 $300,000 대출은 보통 APR 6.15~6.25% 수준이 나옵니다. 25bp 차이는 실제 돈입니다 — 이 대출에서 연 $750.

연수익률(APY)은 예금에 대해 Truth in Savings Act(Regulation DD)가 의무화합니다. APY는 연 내 복리 효과를 반영합니다: APY = (1 + r/n)^n − 1. r은 명목 금리, n은 복리 횟수. 명목 5.00% 예금을 매일 복리하면 APY ≈ 5.127%. 대출 측 대응 개념은 실효연이자율(EAR)이며, 대출자는 직접 공시 의무가 없습니다 — 하지만 APR과 복리 빈도로 직접 계산할 수 있습니다.

중요한 비대칭 — APR은 고빈도 복리 대출의 진짜 비용을 과소평가합니다. APR은 단리식 연환산이기 때문입니다. 신용카드가 이를 잘 보여줍니다. "23.99% APR" 신용카드를 매일 복리 처리하면 EAR = (1 + 0.2399/365)^365 − 1 ≈ 27.10%. 311bp의 복리 효과가 APR 공시에는 보이지 않습니다. 미국 소비자금융보호국(CFPB)은 수년간 이 격차를 지적해왔으며, 소비자 단체들은 회전 신용에 EAR 공시를 의무화해야 한다고 주장합니다. 아직 의무화는 아닙니다.

대출 견적 비교 시 — 표면금리가 아닌 APR을 요구하세요. 예금 비교 시 — 명목 금리가 아닌 APY를 요구하세요. 잔액이 회전될 신용카드는 EAR을 직접 계산하세요. 연방 규제가 비교를 표준화한 이유가 있으니 — 활용하세요.

본 콘텐츠는 교육용입니다. Federal Reserve, CFPB, 각 주 검찰총장 사무소 모두 금리 공시 가이드를 발간합니다.`
			},
			code: {
				example: `// EAR from APR with daily compounding
function ear(apr, periodsPerYear) {
  return Math.pow(1 + apr/periodsPerYear, periodsPerYear) - 1;
}

ear(0.2399, 365);  // 0.27097 (credit card EAR ≈ 27.10%)
ear(0.06,   12);   // 0.06168 (mortgage 6% monthly → EAR 6.17%)

// APR from note rate + fees (simplified Newton-Raphson)
// Real APR calc requires solving for the rate that equates
// the discounted payment stream to (note - upfront fees).
// Lenders use TILA-mandated actuarial method — see CFPB Reg Z.`
			}
		}
	];

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	const toolContent = {
		about: {
			en: 'The loan calculator estimates the monthly payment, total payment, and total interest of a fixed-rate amortizing loan. It uses the standard amortization formula and helps you compare loan offers, plan a budget, or understand how much of each payment goes to interest versus principal. This tool is for educational purposes only and is not financial advice or a binding loan quote.',
			ko: '대출 계산기는 고정 금리 원리금 균등 상환 대출의 월 상환액, 총 상환액, 총 이자를 추정합니다. 표준 상환 공식을 사용해 대출 조건 비교, 예산 계획, 매월 이자와 원금 비율을 이해하는 데 도움을 줍니다. 본 도구는 교육 목적으로만 제공되며 재무 자문이나 구속력 있는 대출 견적이 아닙니다.',
			ja: 'ローン計算機は固定金利の元利均等返済ローンの月々の返済額、総返済額、総利息を推定します。標準的な償却公式を用い、ローン条件の比較、予算計画、毎月の利息と元金の内訳を理解するのに役立ちます。本ツールは教育目的のみで、金融アドバイスや拘束力のあるローン見積もりではありません。',
			zh: '贷款计算器估算固定利率等额本息贷款的月供、总还款额和总利息。使用标准摊销公式，帮助您比较贷款条件、规划预算或了解每期还款中本金与利息的比例。本工具仅供教育用途，不是财务建议或具有约束力的贷款报价。'
		},
		howTo: {
			en: [
				'Enter the loan principal (the amount you plan to borrow).',
				'Enter the annual interest rate as a percentage (APR).',
				'Set the loan term in years.',
				'Review the calculated monthly payment.',
				'Check the total interest cost over the full loan term.'
			],
			ko: [
				'대출 원금(차입할 금액)을 입력합니다.',
				'연이율(APR)을 백분율로 입력합니다.',
				'대출 기간(년)을 설정합니다.',
				'계산된 월 상환액을 확인합니다.',
				'대출 기간 전체의 총 이자 비용을 확인합니다.'
			],
			ja: [
				'ローン元金(借入額)を入力します。',
				'年利率(APR)をパーセントで入力します。',
				'返済期間(年)を設定します。',
				'計算された月々の返済額を確認します。',
				'返済期間全体の総利息コストを確認します。'
			],
			zh: [
				'输入贷款本金 (您计划借入的金额)。',
				'输入年利率百分比 (APR)。',
				'设定贷款期限 (年)。',
				'查看计算出的月供。',
				'查看整个贷款期间的总利息成本。'
			]
		},
		useCases: {
			en: [
				'Estimate monthly payments for a personal, auto, or small business loan.',
				'Compare offers with different rates or term lengths side by side.',
				'Decide whether a shorter term with higher payments saves overall interest.',
				'Plan whether a loan fits within your monthly budget.',
				'Educational example of how amortization splits payments into interest and principal.'
			],
			ko: [
				'개인, 자동차, 소상공인 대출의 월 상환액 추정',
				'금리나 기간이 다른 대출 조건 비교',
				'기간을 짧게 해 월 상환액은 늘리되 총 이자를 줄일지 판단',
				'대출 상환액이 월 예산에 맞는지 확인',
				'상환액의 이자와 원금 분할 방식 학습'
			],
			ja: [
				'個人ローン、自動車ローン、小規模事業ローンの月返済額推定',
				'金利や期間が異なるローン条件の比較',
				'期間を短くして月返済額を増やし総利息を抑えるかの判断',
				'返済額が月の予算に合うかの確認',
				'返済額の利息と元金の内訳学習'
			],
			zh: [
				'估算个人贷款、汽车贷款或小企业贷款的月供',
				'对比不同利率或期限的贷款方案',
				'判断缩短期限增加月供是否能节省总利息',
				'确认贷款是否符合月度预算',
				'用于学习摊销如何将还款拆分为利息和本金'
			]
		},
		faq: {
			en: [
				{ q: 'Is this financial advice?', a: 'No. This calculator is for educational purposes only and is not financial, lending, or legal advice. Speak with a licensed loan officer for actual loan terms.' },
				{ q: 'Does this include fees and insurance?', a: 'No. The calculation only reflects principal and interest. Origination fees, insurance, and other charges will increase the real cost.' },
				{ q: 'What if my interest rate is variable?', a: 'This calculator assumes a fixed rate. Variable rates change over time and the actual payment may rise or fall.' },
				{ q: 'Why does early payment have so much interest?', a: 'In an amortizing loan, interest is calculated on the remaining balance, so early payments are mostly interest while later payments are mostly principal.' }
			],
			ko: [
				{ q: '이것은 재무 자문인가요?', a: '아닙니다. 본 계산기는 교육 목적으로만 제공되며 재무, 대출, 법률 자문이 아닙니다. 실제 대출 조건은 정식 대출 담당자와 상담하세요.' },
				{ q: '수수료와 보험이 포함되나요?', a: '아니요. 계산은 원금과 이자만 반영합니다. 취급 수수료, 보험료 등은 실제 비용을 늘립니다.' },
				{ q: '변동 금리라면 어떻게 되나요?', a: '본 계산기는 고정 금리를 가정합니다. 변동 금리는 시간이 지남에 따라 변하며 실제 상환액이 오르거나 내릴 수 있습니다.' },
				{ q: '초기 상환에 이자가 많은 이유는?', a: '원리금 균등 상환에서 이자는 잔여 잔액에 부과되므로 초기에는 이자 비중이 크고 후기에는 원금 비중이 큽니다.' }
			],
			ja: [
				{ q: 'これは金融アドバイスですか?', a: 'いいえ。本計算機は教育目的のみで、金融・融資・法的アドバイスではありません。実際の融資条件は正式な担当者にご相談ください。' },
				{ q: '手数料や保険は含まれますか?', a: 'いいえ。計算は元金と利息のみです。取扱手数料、保険料などは実際のコストを増加させます。' },
				{ q: '変動金利の場合は?', a: '本計算機は固定金利を仮定します。変動金利は時間とともに変化し、実際の返済額が上下することがあります。' },
				{ q: '初期の返済で利息が多いのはなぜ?', a: '元利均等返済では利息は残高に対して計算されるため、初期は利息比率が高く、後期は元金比率が高くなります。' }
			],
			zh: [
				{ q: '这是财务建议吗？', a: '不是。本计算器仅供教育用途，不构成财务、信贷或法律建议。请与持牌信贷专员讨论实际贷款条件。' },
				{ q: '是否包含费用和保险？', a: '没有。计算仅反映本金和利息。手续费、保险等会增加真实成本。' },
				{ q: '如果我的利率是浮动的怎么办？', a: '本计算器假设固定利率。浮动利率会随时间变化，实际还款金额可能上下波动。' },
				{ q: '为什么前期还款的利息很多？', a: '等额本息贷款的利息按剩余本金计算，所以前期还款大部分是利息，后期才主要还本金。' }
			]
		},
		related: [
			{ href: '/mortgage', label: { en: 'Mortgage Calculator', ko: '주택담보대출 계산기', ja: '住宅ローン計算機', zh: '房贷计算器' } },
			{ href: '/compound', label: { en: 'Compound Interest', ko: '복리 계산기', ja: '複利計算機', zh: '复利计算器' } },
			{ href: '/retirement', label: { en: 'Retirement Calculator', ko: '은퇴 계산기', ja: '退職計算機', zh: '退休计算器' } }
		],
		externalRefs: [
			{ href: 'https://www.investopedia.com/terms/a/amortization.asp', label: 'Investopedia: Amortization' },
			{ href: 'https://www.consumerfinance.gov/owning-a-home/loan-options/', label: 'CFPB: Loan Options' }
		]
	};

	let amount = 100000;
	let rate = 5;
	let term = 30;

	$: monthlyRate = rate / 100 / 12;
	$: numPayments = term * 12;
	$: monthlyPayment = monthlyRate > 0
		? (amount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1)
		: amount / numPayments;
	$: totalPayment = monthlyPayment * numPayments;
	$: totalInterest = totalPayment - amount;

	function formatCurrency(value: number): string {
		return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
	}
</script>

<svelte:head>
	<title>{t('loan.title')} - SDK.bz</title>
	<meta name="description" content={t('loan.desc')} />
	<meta property="og:title" content="{t('loan.title')} - SDK.bz" />
	<meta property="og:description" content={t('loan.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('loan.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('loan.desc')}</p>
	</div>

	<div class="grid md:grid-cols-2 gap-8">
		<!-- Input Section -->
		<div class="space-y-6 bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700">
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('loan.amount')}</label>
				<input type="number" bind:value={amount} min="0" step="1000"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-green-400 focus:border-transparent" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('loan.rate')}</label>
				<input type="number" bind:value={rate} min="0" max="30" step="0.1"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-green-400 focus:border-transparent" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('loan.term')}</label>
				<input type="number" bind:value={term} min="1" max="50"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-green-400 focus:border-transparent" />
			</div>
		</div>

		<!-- Result Section -->
		<div class="space-y-4">
			<div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl border border-green-200 dark:border-green-800">
				<p class="text-sm text-green-600 dark:text-green-400 mb-1">{t('loan.monthly')}</p>
				<p class="text-3xl font-bold text-green-700 dark:text-green-300">{formatCurrency(monthlyPayment)}</p>
			</div>
			<div class="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700">
				<div class="flex justify-between mb-4">
					<span class="text-gray-600 dark:text-dark-400">{t('loan.total')}</span>
					<span class="font-semibold text-gray-900 dark:text-dark-100">{formatCurrency(totalPayment)}</span>
				</div>
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('loan.interest')}</span>
					<span class="font-semibold text-red-600 dark:text-red-400">{formatCurrency(totalInterest)}</span>
				</div>
			</div>
			<!-- Visual breakdown -->
			<div class="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700">
				<div class="h-4 rounded-full overflow-hidden flex">
					<div class="bg-green-500" style="width: {(amount / totalPayment) * 100}%"></div>
					<div class="bg-red-500" style="width: {(totalInterest / totalPayment) * 100}%"></div>
				</div>
				<div class="flex justify-between mt-2 text-xs">
					<span class="text-green-600 dark:text-green-400">Principal: {((amount / totalPayment) * 100).toFixed(1)}%</span>
					<span class="text-red-600 dark:text-red-400">Interest: {((totalInterest / totalPayment) * 100).toFixed(1)}%</span>
				</div>
			</div>
		</div>
	</div>

	<ToolContent
		{lang}
		toolName="Loan Calculator"
		toolUrl="https://sdk.bz/{lang}/loan"
		lastUpdated="2026-04-30"
		category="Finance Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sdk.bz/${lang}` },
			{ name: 'Tools', url: `https://sdk.bz/${lang}` },
			{ name: 'Loan Calculator', url: `https://sdk.bz/${lang}/loan` }
		]}
		content={toolContent}
	/>

	<ToolGuide {lang} sections={guideSections} />
</div>
