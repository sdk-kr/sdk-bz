<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';
	import ToolGuide from '$lib/components/ToolGuide.svelte';

	const guideSections = [
		{
			heading: {
				en: 'PITI: The Real Monthly Payment You Hadn\'t Calculated',
				ko: 'PITI — 당신이 계산하지 않은 진짜 월 비용'
			},
			body: {
				en: `Most mortgage calculators show the principal-and-interest payment and stop there. Lenders, by contrast, qualify you on PITI — Principal, Interest, Taxes, and Insurance — because that is the actual cash leaving your account each month. Skip the T and the I and you can underestimate your real housing cost by 25–40%.

Principal and Interest (PI) is the amortizing payment from the standard formula. On a $400,000 mortgage at 6.5% over 30 years, PI = $2,528.27/month. This is the only number most online calculators surface.

Property Taxes (T) vary enormously by jurisdiction. The Tax Foundation's annual property-tax rankings (taxfoundation.org) show effective rates from 0.27% in Hawaii to 2.33% in New Jersey on owner-occupied housing. The U.S. national median is roughly 1.10% of home value per year. On a $500,000 home in New Jersey, that is $11,650/year, or $971/month — almost as large as the principal portion of the early payments. Even modest 1.10% taxes on a $500,000 home add $458/month. Lenders escrow this and remit to the taxing authority, so it appears in your monthly statement whether you think about it or not.

Homeowners Insurance (HOI / I) protects the lender's collateral and your dwelling. The Insurance Information Institute (iii.org) reports the U.S. average annual HOI premium at roughly $1,400 — but Florida, Louisiana, and Oklahoma frequently exceed $4,000 due to hurricane and tornado risk. California earthquake riders, Texas wind/hail riders, and flood insurance (mandatory in FEMA-designated zones via the National Flood Insurance Program) all stack on top.

Private Mortgage Insurance (PMI) applies when your loan-to-value ratio (LTV) exceeds 80% — i.e., you put down less than 20%. Conventional PMI rates run 0.30%–1.50% of the loan amount annually, depending on credit score and LTV. On a $400,000 loan at 0.50% PMI, that adds $167/month. Federal law (Homeowners Protection Act of 1998) requires automatic PMI cancellation when the LTV reaches 78% based on the original amortization schedule, and you can request cancellation at 80% with a fresh appraisal. FHA loans use Mortgage Insurance Premium (MIP) instead, which behaves differently — for most FHA loans originated after June 2013, MIP cannot be canceled and remains for the loan's life.

Real-world worked example. $500,000 home, $50,000 down (10% LTV = 90%), 6.5% rate, 30-year term. PI = $2,844; property tax @ 1.10% = $458/month; HOI @ $1,400/year = $117/month; PMI @ 0.50% on $450,000 = $188/month. Total PITI = $3,607/month — that is 27% above the $2,844 number you would see on a basic calculator. Plus HOA fees if applicable, which the Community Associations Institute reports at a national average of ~$200–400/month for homes in HOA communities.

Educational only. Tax rates and insurance premiums are jurisdiction-specific — consult a local lender, real-estate attorney, or housing counselor for actual numbers.`,
				ko: `대부분의 모기지 계산기는 원리금(P&I)만 보여주고 끝냅니다. 반면 대출자는 PITI — 원금, 이자, 세금, 보험 — 으로 자격을 심사합니다. 매달 통장에서 실제로 빠져나가는 돈이 PITI이기 때문입니다. T와 I를 건너뛰면 실제 주거비를 25~40% 과소평가하게 됩니다.

원리금(PI)은 표준 공식의 분할상환 금액입니다. 6.5% 금리 30년 만기 $400,000 모기지의 PI는 $2,528.27/월. 대부분 온라인 계산기가 보여주는 유일한 숫자입니다.

재산세(T)는 지역에 따라 크게 다릅니다. Tax Foundation의 연간 재산세 순위(taxfoundation.org)에 따르면 자가 주택의 실효 세율은 하와이 0.27%부터 뉴저지 2.33%까지 분포합니다. 미국 중위값은 연 약 1.10%(주택 가격 대비). 뉴저지에서 $500,000 주택이라면 연 $11,650, 월 $971 — 초기 원금 상환분에 맞먹는 규모입니다. 1.10%만 적용해도 $500,000 주택은 월 $458이 추가됩니다. 대출자는 에스크로로 징수해 과세 당국에 송금하므로 의식 여부와 무관하게 월 명세서에 표시됩니다.

주택 보험(HOI / I)은 대출자의 담보와 거주자의 주거를 보호합니다. Insurance Information Institute(iii.org)에 따르면 미국 평균 연 보험료는 약 $1,400 — 단 플로리다, 루이지애나, 오클라호마는 허리케인과 토네이도 위험으로 자주 $4,000을 넘습니다. 캘리포니아 지진 특약, 텍사스 풍수해 특약, 그리고 FEMA 지정 구역에서 의무인 홍수 보험(National Flood Insurance Program)이 모두 위에 쌓입니다.

민간 모기지 보험(PMI)은 LTV(담보대출비율)가 80%를 초과하면 적용됩니다 — 즉 계약금이 20% 미만일 때. 컨벤셔널 PMI는 신용등급과 LTV에 따라 연 0.30~1.50%. $400,000 대출에 0.50% PMI면 월 $167. 1998년 Homeowners Protection Act에 따라 원래 상환 일정 기준 LTV 78% 도달 시 자동 해지됩니다. 80% 도달 시 새 감정으로 직접 해지를 요청할 수도 있습니다. FHA 대출은 MIP를 사용하며 — 2013년 6월 이후 대부분 FHA 대출의 MIP는 해지 불가, 대출 만기까지 유지됩니다.

실제 사례 — $500,000 주택, $50,000 계약금(LTV 90%), 6.5% 금리, 30년 만기. PI = $2,844; 재산세 1.10% = 월 $458; HOI 연 $1,400 = 월 $117; PMI 0.50%(잔액 $450,000) = 월 $188. 총 PITI = 월 $3,607 — 단순 계산기 숫자보다 27% 높습니다. HOA 단지라면 추가로 HOA 회비가 붙습니다. Community Associations Institute는 미국 HOA 단지 평균 회비를 월 약 $200~400으로 보고합니다.

본 콘텐츠는 교육용입니다. 세율과 보험료는 지역 의존적입니다 — 지역 대출자, 부동산 변호사, 주택 상담사와 상담해 실제 숫자를 확인하세요.`
			},
			code: {
				example: `// PITI breakdown for a $500k home, 10% down
const home = 500000, down = 50000;
const loan = home - down;             // 450000
const rate = 0.065, years = 30;

const r = rate/12, n = years*12;
const PI = loan * r * Math.pow(1+r,n) / (Math.pow(1+r,n) - 1);  // 2844
const tax = home * 0.011 / 12;        //  458 (1.10% effective)
const hoi = 1400 / 12;                //  117 (national avg)
const pmi = loan * 0.005 / 12;        //  188 (0.50%, LTV>80%)

const PITI = PI + tax + hoi + pmi;    // 3607 — 27% > PI alone`
			}
		},
		{
			heading: {
				en: 'ARM vs Fixed: When Each Wins (Historical Data 1990-2025)',
				ko: 'ARM vs 고정금리 — 각자 유리한 시점 (1990~2025 역사 데이터)'
			},
			body: {
				en: `An adjustable-rate mortgage (ARM) charges a lower initial rate that resets on a schedule — typically a 5/1, 7/1, or 10/1 ARM where the first number is the fixed-rate period and the second is the reset frequency in years. After the fixed period, the rate equals an index (most ARMs since 2023 use SOFR — Secured Overnight Financing Rate — which replaced LIBOR) plus a margin (typically 2.25%–2.75%). Caps limit how much the rate can move per reset and over the loan's life.

Historical 30-year fixed mortgage rates (Freddie Mac PMMS, freddiemac.com/pmms): the 30-year average since the survey began in 1971 is roughly 7.7%. Specific decade averages: 1980s: 12.7%; 1990s: 8.1%; 2000s: 6.5%; 2010s: 4.1%; 2020–2024: 5.8% (with a 2021 low of 2.65% and 2023 high of 7.79%). The 1980s show why ARMs gained popularity — borrowers in 1981 facing 18% fixed rates and a 5/1 ARM at 14% would have benefitted dramatically as Volcker's anti-inflation policy reversed in subsequent years.

When ARMs win mathematically: (1) When you will sell or refinance before the fixed period ends. The median U.S. homeowner stays in their home about 13 years per the National Association of Realtors, but among first-time buyers and frequent movers it is 5–7. A 5/1 ARM at 5.5% beats a 30-year fixed at 6.5% by ~$240/month on $400k for the first 5 years — roughly $14,400 saved if you sell on time. (2) When you have high confidence rates will fall. Buyers in late 2023 with 7.5% fixed offers and 5/1 ARMs at 6.5% bet that rates would normalize — a reasonable bet given the historical mean reverts toward 5–6%.

When fixed wins: (1) When you intend to stay 15+ years. The 1980s borrower who took a 10% fixed kept that rate while neighbors on ARMs faced 12–18% resets. (2) When your budget cannot absorb a payment increase. Lifetime caps allow a 5% rise from initial — a 5.5% ARM can reset to 10.5%, doubling principal-and-interest. (3) When refinancing back to fixed will likely be expensive (closing costs of 2–5% of loan balance plus appraisal, title, etc.).

The 2008 cautionary tale: many ARM borrowers from 2003–2007 took 2/28 or 3/27 ARMs with extremely low teaser rates and were unable to refinance after housing prices collapsed and credit tightened — many lost homes to foreclosure. The Dodd-Frank Act of 2010 banned the most predatory ARM structures, but standard ARMs remain available and reset risk is still real.

Decision rule: take an ARM if (years you will keep the loan) < (fixed-period years) + buffer. Otherwise, lock fixed. Educational only — consult a licensed loan officer.`,
				ko: `변동금리 모기지(ARM)는 초기 낮은 금리를 적용하고 정해진 주기로 리셋합니다 — 일반적으로 5/1, 7/1, 10/1 ARM. 첫 숫자는 고정 기간, 두 번째는 리셋 주기(연 단위)입니다. 고정 기간 후 금리는 지수(2023년 이후 대부분 ARM은 LIBOR를 대체한 SOFR — Secured Overnight Financing Rate 사용) + 마진(일반적으로 2.25~2.75%)이 됩니다. 캡(cap)이 리셋당, 그리고 대출 전 기간의 금리 변동 폭을 제한합니다.

역사적 30년 고정 모기지 금리(Freddie Mac PMMS, freddiemac.com/pmms) — 1971년 이후 평균은 약 7.7%. 10년 단위 평균은 1980년대 12.7%, 1990년대 8.1%, 2000년대 6.5%, 2010년대 4.1%, 2020~2024년 5.8% (2021년 최저 2.65%, 2023년 최고 7.79%). 1980년대 데이터가 ARM 인기 확산의 배경입니다 — 1981년 18% 고정 vs 14% 5/1 ARM 차주 중 후자는 Volcker의 반인플레 정책이 풀리며 큰 이득을 봤습니다.

ARM이 수학적으로 유리한 경우 — (1) 고정 기간 종료 전에 매각하거나 재대출할 계획. 미국 자가 거주자 중위 거주 기간은 전미부동산중개인협회(NAR) 기준 약 13년이지만, 초보 매수자와 잦은 이동자는 5~7년입니다. 5.5% 5/1 ARM은 6.5% 30년 고정보다 $400k 기준 첫 5년간 월 약 $240 저렴 — 5년 안에 매각하면 약 $14,400 절약. (2) 금리 하락 확신이 높을 때. 2023년 후반에 7.5% 고정 vs 6.5% 5/1 ARM 중 후자를 택한 매수자는 금리 정상화에 베팅한 것 — 역사적 평균이 5~6%로 수렴한다는 점에서 합리적 베팅이었습니다.

고정금리가 유리한 경우 — (1) 15년 이상 거주 의도. 1980년대에 10% 고정을 잡은 차주는 ARM 차주들이 12~18%로 리셋되는 동안 그 금리를 유지했습니다. (2) 예산이 상승을 흡수할 수 없을 때. 라이프타임 캡은 초기 대비 5% 상승을 허용 — 5.5% ARM이 10.5%까지 리셋되어 P&I가 두 배 가까이 될 수 있습니다. (3) 고정으로 재대출이 비쌀 가능성이 높을 때 (클로징 비용 2~5%, 감정·등기 등 추가).

2008년의 경고 — 2003~2007년 다수 차주가 2/28 또는 3/27 ARM을 매우 낮은 티저 금리로 받았다가, 집값 붕괴와 신용 경색 후 재대출 불가능 상태에 빠져 — 다수가 압류로 집을 잃었습니다. 2010년 Dodd-Frank 법은 가장 약탈적인 ARM 구조를 금지했지만, 표준 ARM은 여전히 가능하며 리셋 위험은 실재합니다.

판단 기준 — (대출 보유 예상 연수) < (고정 기간) + 여유분 → ARM. 그 외에는 고정 잠금. 본 콘텐츠는 교육용 — 면허 있는 대출 담당자와 상담하세요.`
			}
		},
		{
			heading: {
				en: 'Refinance Math: When the Closing Costs Pay Off',
				ko: '재대출(리파이) 수학 — 클로징 비용을 회수하는 시점'
			},
			body: {
				en: `Refinancing replaces your existing mortgage with a new one — usually to lower the rate, change the term, switch from ARM to fixed (or vice versa), or extract equity (cash-out refi). The math question is simple: do the monthly savings exceed the closing costs within the time you plan to keep the loan?

Standard refinance closing costs are 2–5% of the new loan amount, per Freddie Mac and CFPB consumer guidance. On a $400,000 refi, that is $8,000–$20,000. Specific line items: lender origination 0.5–1.5%; appraisal $300–700; title insurance 0.3–0.5% of loan; recording fees and transfer taxes (varies by state, sometimes 0.5–1.0%); settlement/escrow $300–800; prepaid interest, taxes, and insurance reserves. Some lenders advertise "no-closing-cost" refinances — the costs are rolled into a slightly higher rate (typically +0.25% to +0.50%), which means you pay through the rate over the loan's life rather than upfront.

Break-even formula: closing costs ÷ monthly savings = months to break even. Example: refinancing a $400,000 mortgage from 7.0% to 5.5% on a 30-year term reduces P&I from $2,661 to $2,271 — savings of $390/month. With $9,000 in closing costs, break-even is $9,000 / $390 = 23 months. If you stay in the home longer than 23 months, the refi pays off; shorter, you lose money.

The lifetime savings calculation is more nuanced. Cutting the rate from 7.0% to 5.5% over a fresh 30-year term saves $140,400 in interest IF you keep the new loan to maturity ($957,978 total payments vs $817,576). But you also restart amortization — the first years again skew heavily toward interest. If you were already 8 years into the original mortgage, refinancing to a fresh 30-year extends total payoff to 38 years from origination, partially offsetting the rate savings. Refinancing into a 22-year term (matching remaining tenure) preserves the payoff date and captures pure rate savings — many lenders offer custom terms for this reason.

Cash-out refinances behave differently. Pulling $50,000 of equity at 5.5% replaces lower-rate primary mortgage debt with new debt at the cash-out's rate. The IRS distinguishes between cash used for "buy, build, or substantially improve" the home (interest deductible, with limits) and cash used for other purposes (interest not deductible) per Tax Cuts and Jobs Act of 2017 and IRS Publication 936. Confirm the tax treatment before assuming a deduction.

Rule-of-thumb triggers: refinance when the rate drop is at least 0.75–1.00 percentage points and you will stay 24+ months. With small drops (0.25–0.50 points), break-evens push past 5 years and the calculus rarely justifies the friction. Federal Housing Finance Agency (fhfa.gov) tracks national refi volume and can hint at when rate environments shift. Educational content only — consult a licensed loan officer and tax professional for your specific situation.`,
				ko: `재대출(리파이)은 기존 모기지를 새 모기지로 대체하는 것으로 — 보통 금리 인하, 기간 변경, ARM↔고정 전환, 또는 자산 인출(캐시아웃 리파이)이 목적입니다. 수학적 질문은 단순 — 월 절약액이 대출 보유 기간 내에 클로징 비용을 회수하는가?

표준 리파이 클로징 비용은 신규 대출액의 2~5%(Freddie Mac, CFPB 가이드 기준). $400,000 리파이라면 $8,000~$20,000. 세부 항목 — 대출자 오리지네이션 0.5~1.5%; 감정 $300~700; 권원보험 대출액의 0.3~0.5%; 등기·이전세(주에 따라 종종 0.5~1.0%); 정산·에스크로 $300~800; 선지급 이자·세금·보험 적립금. 일부 대출자는 "클로징 비용 없음" 리파이를 광고합니다 — 비용이 약간 더 높은 금리(보통 +0.25~+0.50%)로 전가되어, 선납 대신 대출 기간 전체에 걸쳐 갚는 구조입니다.

손익분기 공식 — 클로징 비용 ÷ 월 절약액 = 손익분기 개월수. 예시 — $400,000 30년 만기 모기지를 7.0%에서 5.5%로 리파이하면 P&I가 $2,661에서 $2,271로 감소, 월 $390 절약. 클로징 비용 $9,000 가정 시 손익분기 = $9,000 / $390 = 23개월. 23개월보다 오래 보유하면 이득, 짧으면 손해.

전 생애 절약 계산은 더 미묘합니다. 30년 신규 만기로 7.0%→5.5% 인하 시 — 만기까지 보유하면 이자 $140,400 절약 ($957,978 vs $817,576 총 상환). 그러나 분할상환이 다시 시작됩니다 — 초반은 다시 이자에 치우칩니다. 원래 모기지 8년 차에 30년 신규로 리파이하면 원 시작점부터 총 상환 기간이 38년으로 늘어 — 금리 절약을 일부 상쇄합니다. 잔여 기간(22년)에 맞춰 리파이하면 상환 종료일을 보존하면서 순수 금리 절약을 얻습니다 — 많은 대출자가 이 이유로 사용자 정의 기간을 제공합니다.

캐시아웃 리파이는 다릅니다. $50,000 자산을 5.5%로 인출하면 — 더 낮은 금리의 1차 모기지 부채를 캐시아웃 금리의 신규 부채로 대체하는 것입니다. IRS는 "주택 매입, 건축, 또는 실질적 개량"에 사용한 자금(이자 공제, 한도 있음)과 다른 용도(이자 공제 불가)를 구분합니다 — 2017년 Tax Cuts and Jobs Act, IRS Publication 936. 공제를 가정하기 전에 세제 처리를 확인하세요.

경험 법칙 — 0.75~1.00%p 이상 인하되고 24개월 이상 보유할 때 리파이. 0.25~0.50%p 인하의 경우 손익분기가 5년을 넘어가며 마찰비용 대비 이득이 거의 없습니다. 연방주택금융청(FHFA, fhfa.gov)은 미국 리파이 거래량을 추적하며 금리 환경 변화의 신호를 제공합니다. 본 콘텐츠는 교육용 — 면허 있는 대출 담당자와 세무 전문가와 상담하세요.`
			},
			code: {
				example: `// Refi break-even
function refiBreakeven(loan, oldRate, newRate, years, closingCosts) {
  const r0 = oldRate/12, r1 = newRate/12, n = years*12;
  const PI_old = loan * r0 * Math.pow(1+r0,n) / (Math.pow(1+r0,n)-1);
  const PI_new = loan * r1 * Math.pow(1+r1,n) / (Math.pow(1+r1,n)-1);
  const monthlySavings = PI_old - PI_new;
  return { monthlySavings, breakevenMonths: closingCosts / monthlySavings };
}

refiBreakeven(400000, 0.07, 0.055, 30, 9000);
// monthlySavings ≈ 390, breakeven ≈ 23 months`
			}
		}
	];

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	const toolContent = {
		about: {
			en: 'The mortgage calculator estimates the monthly principal and interest payment of a fixed-rate home loan based on home price, down payment, interest rate, and term. It excludes property taxes, homeowners insurance, HOA fees, and PMI, which can add significantly to the real monthly cost. This tool is for educational purposes only and is not financial advice or a binding loan offer.',
			ko: '주택담보대출 계산기는 주택 가격, 계약금, 금리, 기간을 기준으로 고정 금리 주택 대출의 월 원리금 상환액을 추정합니다. 재산세, 주택 보험, 관리비, PMI는 포함되지 않으며 이들은 실제 월 비용을 크게 늘릴 수 있습니다. 본 도구는 교육 목적으로만 제공되며 재무 자문이나 구속력 있는 대출 제안이 아닙니다.',
			ja: '住宅ローン計算機は、物件価格、頭金、金利、期間に基づき固定金利住宅ローンの月々の元利返済額を推定します。固定資産税、住宅保険、管理費、PMIは含まれず、これらは実際の月額コストを大きく増やす可能性があります。本ツールは教育目的のみで、金融アドバイスや拘束力のあるローンオファーではありません。',
			zh: '房贷计算器根据房价、首付、利率和期限估算固定利率房贷的月供本息。不包含房产税、房屋保险、物业费和PMI，这些会显著增加实际月度成本。本工具仅供教育用途，不构成财务建议或具有约束力的贷款要约。'
		},
		howTo: {
			en: [
				'Enter the total home price.',
				'Enter your planned down payment.',
				'Enter the annual interest rate as a percentage.',
				'Choose the loan term (commonly 15, 20, or 30 years).',
				'Review the monthly payment, total cost, and total interest.'
			],
			ko: [
				'주택 가격을 입력합니다.',
				'계획 중인 계약금을 입력합니다.',
				'연이율을 백분율로 입력합니다.',
				'대출 기간(일반적으로 15, 20, 30년)을 선택합니다.',
				'월 상환액, 총 비용, 총 이자를 확인합니다.'
			],
			ja: [
				'物件価格を入力します。',
				'予定している頭金を入力します。',
				'年利率をパーセントで入力します。',
				'返済期間(一般的に15、20、30年)を選択します。',
				'月々の返済額、総コスト、総利息を確認します。'
			],
			zh: [
				'输入房屋总价。',
				'输入计划的首付金额。',
				'输入年利率百分比。',
				'选择贷款期限 (常见为15、20或30年)。',
				'查看月供、总成本和总利息。'
			]
		},
		useCases: {
			en: [
				'Estimate whether a target home price fits your monthly budget.',
				'Compare 15-year vs 30-year mortgage cost over time.',
				'See how a larger down payment lowers the monthly payment and total interest.',
				'Plan how an interest-rate change affects affordability.',
				'Educational example of how amortization works for a long-term loan.'
			],
			ko: [
				'목표 주택 가격이 월 예산에 맞는지 추정',
				'15년과 30년 모기지 총 비용 비교',
				'계약금을 늘리면 월 상환액과 총 이자가 어떻게 줄어드는지 확인',
				'금리 변동이 구매력에 미치는 영향 계획',
				'장기 대출 상환 방식 학습'
			],
			ja: [
				'目標物件価格が月の予算に合うかの推定',
				'15年と30年住宅ローンの総コスト比較',
				'頭金を増やすと月返済額と総利息がどう減るか確認',
				'金利変動が購入余力に与える影響の計画',
				'長期ローンの償却の仕組みの学習'
			],
			zh: [
				'估算目标房价是否符合月度预算',
				'比较15年和30年房贷的总成本',
				'查看更高的首付如何降低月供和总利息',
				'规划利率变化对购房能力的影响',
				'用于学习长期贷款的摊销方式'
			]
		},
		faq: {
			en: [
				{ q: 'Is this financial advice?', a: 'No. This calculator is for educational purposes only and is not financial, lending, or real-estate advice. Speak with a licensed mortgage broker for actual loan terms.' },
				{ q: 'Does this include taxes, insurance, and PMI?', a: 'No. The result reflects only principal and interest. Property taxes, homeowners insurance, HOA fees, and PMI add to the real monthly cost.' },
				{ q: 'What is the difference between APR and interest rate?', a: 'The interest rate is the cost of the loan itself, while APR also includes fees and points. Lenders quote both, and APR is generally higher.' },
				{ q: 'Should I choose a 15-year or 30-year mortgage?', a: 'A 15-year loan has a higher monthly payment but lower total interest. A 30-year loan has a lower monthly payment but more interest over time. The right choice depends on your budget and goals.' }
			],
			ko: [
				{ q: '이것은 재무 자문인가요?', a: '아닙니다. 본 계산기는 교육 목적으로만 제공되며 재무, 대출, 부동산 자문이 아닙니다. 실제 대출 조건은 정식 모기지 중개인과 상담하세요.' },
				{ q: '세금, 보험, PMI가 포함되나요?', a: '아니요. 결과는 원금과 이자만 반영합니다. 재산세, 주택 보험, 관리비, PMI는 실제 월 비용에 추가됩니다.' },
				{ q: 'APR과 이자율의 차이는?', a: '이자율은 대출 자체 비용이고 APR은 수수료와 포인트까지 포함합니다. 대출 기관은 둘 다 표시하며 보통 APR이 더 높습니다.' },
				{ q: '15년과 30년 중 어느 것을 선택해야 하나요?', a: '15년 대출은 월 상환액이 높지만 총 이자가 적습니다. 30년 대출은 월 상환액이 낮지만 총 이자가 많습니다. 예산과 목표에 따라 선택하세요.' }
			],
			ja: [
				{ q: 'これは金融アドバイスですか?', a: 'いいえ。本計算機は教育目的のみで、金融・融資・不動産アドバイスではありません。実際の融資条件は正式な仲介者にご相談ください。' },
				{ q: '税金、保険、PMIは含まれますか?', a: 'いいえ。結果は元金と利息のみを反映します。固定資産税、住宅保険、管理費、PMIは実際の月額コストに加算されます。' },
				{ q: 'APRと金利の違いは?', a: '金利はローン自体のコストで、APRは手数料やポイントも含みます。貸し手は両方を提示し、通常はAPRの方が高くなります。' },
				{ q: '15年と30年どちらを選ぶべき?', a: '15年ローンは月返済額が高いが総利息は低く、30年ローンは月返済額が低いが総利息は高くなります。予算と目標次第です。' }
			],
			zh: [
				{ q: '这是财务建议吗？', a: '不是。本计算器仅供教育用途，不构成财务、信贷或房地产建议。请与持牌房贷经纪人讨论实际贷款条件。' },
				{ q: '是否包含税费、保险和PMI？', a: '不包含。结果仅反映本金和利息。房产税、房屋保险、物业费和PMI都会加到实际月度成本上。' },
				{ q: 'APR与利率有什么区别？', a: '利率是贷款本身的成本，而APR还包含费用和点数。贷款机构通常同时报这两个数字，APR一般更高。' },
				{ q: '应该选15年还是30年房贷？', a: '15年贷款月供较高但总利息较低，30年贷款月供较低但总利息较高。具体取决于您的预算和目标。' }
			]
		},
		related: [
			{ href: '/loan', label: { en: 'Loan Calculator', ko: '대출 계산기', ja: 'ローン計算機', zh: '贷款计算器' } },
			{ href: '/compound', label: { en: 'Compound Interest', ko: '복리 계산기', ja: '複利計算機', zh: '复利计算器' } },
			{ href: '/retirement', label: { en: 'Retirement Calculator', ko: '은퇴 계산기', ja: '退職計算機', zh: '退休计算器' } }
		],
		externalRefs: [
			{ href: 'https://www.consumerfinance.gov/owning-a-home/', label: 'CFPB: Owning a Home' },
			{ href: 'https://www.investopedia.com/terms/m/mortgage.asp', label: 'Investopedia: Mortgage' }
		]
	};

	let homePrice = 400000;
	let downPayment = 80000;
	let rate = 6.5;
	let term = 30;

	$: loanAmount = homePrice - downPayment;
	$: monthlyRate = rate / 100 / 12;
	$: numPayments = term * 12;
	$: monthlyPayment = monthlyRate > 0
		? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1)
		: loanAmount / numPayments;
	$: totalCost = monthlyPayment * numPayments + downPayment;
	$: totalInterest = totalCost - homePrice;

	function formatCurrency(value: number): string {
		return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
	}
</script>

<svelte:head>
	<title>{t('mortgage.title')} - SDK.bz</title>
	<meta name="description" content={t('mortgage.desc')} />
	<meta property="og:title" content="{t('mortgage.title')} - SDK.bz" />
	<meta property="og:description" content={t('mortgage.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('mortgage.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('mortgage.desc')}</p>
	</div>

	<div class="grid md:grid-cols-2 gap-8">
		<div class="space-y-6 bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700">
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('mortgage.price')}</label>
				<input type="number" bind:value={homePrice} min="0" step="10000"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-purple-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('mortgage.down')}</label>
				<input type="number" bind:value={downPayment} min="0" step="5000"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-purple-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('mortgage.rate')}</label>
				<input type="number" bind:value={rate} min="0" max="20" step="0.125"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-purple-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('mortgage.term')}</label>
				<select bind:value={term}
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-purple-400">
					<option value={15}>15 years</option>
					<option value={20}>20 years</option>
					<option value={30}>30 years</option>
				</select>
			</div>
		</div>

		<div class="space-y-4">
			<div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-800">
				<p class="text-sm text-purple-600 dark:text-purple-400 mb-1">{t('mortgage.monthly')}</p>
				<p class="text-3xl font-bold text-purple-700 dark:text-purple-300">{formatCurrency(monthlyPayment)}</p>
			</div>
			<div class="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700 space-y-3">
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('mortgage.loanAmount')}</span>
					<span class="font-semibold text-gray-900 dark:text-dark-100">{formatCurrency(loanAmount)}</span>
				</div>
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('mortgage.total')}</span>
					<span class="font-semibold text-gray-900 dark:text-dark-100">{formatCurrency(totalCost)}</span>
				</div>
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('loan.interest')}</span>
					<span class="font-semibold text-red-600 dark:text-red-400">{formatCurrency(totalInterest)}</span>
				</div>
			</div>
		</div>
	</div>

	<ToolContent
		{lang}
		toolName="Mortgage Calculator"
		toolUrl="https://sdk.bz/{lang}/mortgage"
		lastUpdated="2026-04-30"
		category="Finance Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sdk.bz/${lang}` },
			{ name: 'Tools', url: `https://sdk.bz/${lang}` },
			{ name: 'Mortgage Calculator', url: `https://sdk.bz/${lang}/mortgage` }
		]}
		content={toolContent}
	/>

	<ToolGuide {lang} sections={guideSections} />
</div>
