<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';
	import ToolGuide from '$lib/components/ToolGuide.svelte';

	const guideSections = [
		{
			heading: {
				en: 'Compound Frequency: Daily vs Monthly vs Continuous (Math Comparison)',
				ko: '복리 주기: 일별 vs 월별 vs 연속 복리 (수학적 비교)'
			},
			body: {
				en: `The compounding frequency dictates how often accrued interest is folded back into the principal. The discrete-compound formula is A = P(1 + r/n)^(nt), where P is the principal, r is the nominal annual rate, n is the number of compounding periods per year, and t is the time in years. As n grows toward infinity, the formula converges to its continuous form: A = Pe^(rt). The constant e ≈ 2.71828 is the natural exponential base; the limit comes from (1 + r/n)^n → e^r.

Run the numbers on a 10-year, $10,000 deposit at a 7% nominal rate. With annual compounding (n=1) you finish at $19,671.51. With monthly compounding (n=12) you finish at $20,096.61. With daily compounding (n=365) you finish at $20,134.83. With continuous compounding you finish at $20,137.53. The gap between annual and continuous is $466 — meaningful. The gap between daily and continuous is $2.70 — essentially noise. This is why "compounded daily" is a marketing flag that delivers almost nothing extra over "compounded monthly," yet banks advertise it heavily because consumers perceive higher frequency as a better product.

The Annual Percentage Yield (APY) folds frequency into a single comparable number: APY = (1 + r/n)^n - 1. A 5.00% nominal rate compounded daily yields APY ≈ 5.127%. The same 5.00% compounded annually yields APY = 5.000%. When comparing two savings accounts, do not compare nominal rates — compare APYs. The U.S. Truth in Savings Act (Regulation DD, 12 CFR Part 1030) requires depository institutions to disclose APY, precisely because nominal-rate comparisons mislead consumers.

For loans, the analog is APR (annual percentage rate), and lenders are governed by Regulation Z. APR includes certain fees but generally does not compound — a 6% APR mortgage paid monthly has an effective annual cost slightly above 6%. APY for borrowers, sometimes called APR Yield or EAR (effective annual rate), reveals the real number. The arithmetic gap between APR and EAR widens with frequency: a 12% APR on a credit card compounded daily produces an EAR of about 12.747%.

Educational only — this is not financial advice. Consult a licensed financial advisor for personalized guidance.`,
				ko: `복리 주기는 발생한 이자가 원금에 얼마나 자주 합쳐지는지를 결정합니다. 이산 복리 공식은 A = P(1 + r/n)^(nt) 입니다. P는 원금, r은 명목 연이율, n은 연간 복리 횟수, t는 연수입니다. n이 무한히 커지면 공식은 연속 복리 형태인 A = Pe^(rt) 로 수렴합니다. e ≈ 2.71828은 자연지수의 밑이며, 극한 (1 + r/n)^n → e^r 에서 도출됩니다.

10년간 $10,000을 명목 7%로 예치한 사례를 봅시다. 연 복리(n=1)는 $19,671.51, 월 복리(n=12)는 $20,096.61, 일 복리(n=365)는 $20,134.83, 연속 복리는 $20,137.53로 끝납니다. 연 복리와 연속 복리의 차이는 $466 — 의미 있습니다. 그러나 일 복리와 연속 복리의 차이는 $2.70 — 사실상 노이즈입니다. 그래서 "매일 복리"는 월 복리 대비 거의 추가 가치가 없는데도 마케팅 도구로 강조됩니다. 소비자가 "더 자주 = 더 좋은 상품"으로 인식하기 때문입니다.

연수익률(APY)은 주기를 단일 비교 수치로 합쳐줍니다: APY = (1 + r/n)^n - 1. 명목 5.00%를 매일 복리하면 APY ≈ 5.127%, 연 복리는 APY = 5.000%. 두 예금 상품을 비교할 때는 명목 금리가 아니라 APY를 비교해야 합니다. 미국 Truth in Savings Act(Regulation DD, 12 CFR Part 1030)는 예금취급기관이 APY를 공시하도록 의무화하고 있는데, 이는 명목 금리 비교가 소비자를 오도하기 때문입니다.

대출에서는 APR이 동일한 역할을 하며 Regulation Z의 규제를 받습니다. APR은 일부 수수료를 포함하지만 일반적으로 복리 효과를 반영하지 않습니다 — 월 분할 6% APR 모기지의 실질 연 비용은 6%보다 약간 높습니다. 차주의 APY(EAR, 실효연이자율)가 진짜 숫자입니다. 신용카드 12% APR을 매일 복리로 계산하면 EAR은 약 12.747%가 됩니다.

본 콘텐츠는 교육 목적이며 재무 자문이 아닙니다. 개인적 의사결정 전 면허 있는 재무 전문가와 상담하세요.`
			},
			code: {
				example: `// $10,000 @ 7% for 10 years across compounding frequencies
const P = 10000, r = 0.07, t = 10;
const A_annual    = P * Math.pow(1 + r/1,   1*t);   // 19671.51
const A_monthly   = P * Math.pow(1 + r/12,  12*t);  // 20096.61
const A_daily     = P * Math.pow(1 + r/365, 365*t); // 20134.83
const A_continuous = P * Math.exp(r * t);           // 20137.53

// APY comparison for a 5% nominal rate
const APY_daily   = Math.pow(1 + 0.05/365, 365) - 1; // 0.05127 (5.127%)
const APY_annual  = Math.pow(1 + 0.05/1,   1)   - 1; // 0.05000 (5.000%)`
			}
		},
		{
			heading: {
				en: 'Rule of 72 — Why It Works and When It Breaks',
				ko: '72의 법칙 — 작동 원리와 한계'
			},
			body: {
				en: `The Rule of 72 says that money doubles in approximately 72 / r years, where r is the rate expressed as a whole number (so 8% gives 9 years). It is one of the most cited heuristics in personal finance, but few users know where the 72 comes from or where it fails.

Start with the exact doubling-time formula. Setting 2P = P(1+r)^t and solving for t gives t = ln(2) / ln(1+r). For small r, ln(1+r) ≈ r — Taylor expansion truncated at first order. So t ≈ ln(2) / r ≈ 0.6931 / r. Multiplying numerator and denominator by 100 gives t ≈ 69.31 / R where R is the percentage. The "true" rule is the Rule of 69.3, but 69.3 has only one factor (3 × 23.1) and is awkward to divide mentally. 72 has six divisors that matter (1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72), so 72/4, 72/6, 72/8, 72/9 are all clean integer answers. The trade-off is small: 72 systematically over-predicts doubling time at low rates and under-predicts at high rates, but the error is acceptable in the 6%–10% range where it is most often used.

Quantitative accuracy: At r = 8%, exact = 9.006 years vs Rule of 72 = 9.000 years (-0.07% error). At r = 10%, exact = 7.273 vs Rule = 7.200 (-1.0% error). At r = 1%, exact = 69.66 vs Rule = 72.0 (+3.4% error). At r = 25%, exact = 3.106 vs Rule = 2.880 (-7.3% error). The rule is quite accurate from 5%–11% and degrades at the extremes. For continuous compounding, the Rule of 69.3 is exact (since ln(2) = 0.6931). For typical savings products that compound monthly, the Rule of 72 is closer to reality.

Variant rules exist. The Rule of 70 (closer to ln(2) × 100) is preferred by epidemiologists and demographers analyzing population doubling. The Rule of 114 estimates tripling time (ln(3) × 100 ≈ 109.86, rounded to a divisor-friendly 114). The Rule of 144 estimates quadrupling. All share the same Taylor-expansion logic.

Important caveat: doubling time tells you nothing about real purchasing power. If your nominal return is 8% and inflation is 3%, the rule says nominal doubling at year 9 — but real doubling takes 14.4 years (using net 5%). Always pair Rule of 72 with the Fisher real-rate adjustment.

Educational content only — not personalized financial advice.`,
				ko: `72의 법칙은 자산이 약 72 / r 년에 두 배가 된다고 말합니다. r은 정수 백분율(8%면 9년)입니다. 개인 재무에서 가장 자주 인용되는 휴리스틱이지만, 72라는 숫자가 어디서 왔는지, 언제 깨지는지를 아는 사람은 드뭅니다.

정확한 두 배 시간 공식부터 시작합시다. 2P = P(1+r)^t 에서 t를 풀면 t = ln(2) / ln(1+r) 입니다. r이 작을 때 ln(1+r) ≈ r — 1차 Taylor 전개입니다. 따라서 t ≈ ln(2) / r ≈ 0.6931 / r. 분자와 분모에 100을 곱하면 t ≈ 69.31 / R 가 되고, R은 백분율입니다. "참된" 법칙은 69.3의 법칙이지만 69.3은 약수가 적어 (3 × 23.1) 암산이 어렵습니다. 72는 의미 있는 약수 (1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72)가 많아 72/4, 72/6, 72/8, 72/9가 모두 깔끔한 정수입니다. 트레이드오프는 작습니다 — 72는 낮은 이율에서 두 배 시간을 과대 예측하고 높은 이율에서 과소 예측하지만, 6%~10% 구간에서는 오차가 미미합니다.

정량적 정확도: r = 8%, 정확값 9.006년 vs 법칙 9.000년 (-0.07% 오차). r = 10%, 정확값 7.273 vs 법칙 7.200 (-1.0%). r = 1%, 정확값 69.66 vs 법칙 72.0 (+3.4%). r = 25%, 정확값 3.106 vs 법칙 2.880 (-7.3%). 5%~11%에서 매우 정확하고 양 극단으로 갈수록 부정확해집니다. 연속 복리에서는 69.3의 법칙이 정확합니다(ln(2) = 0.6931). 월 복리 상품에서는 72의 법칙이 현실에 더 가깝습니다.

변형 법칙도 존재합니다. 70의 법칙(ln(2) × 100에 더 가까움)은 인구 두 배 시간을 분석하는 인구학자와 역학자가 선호합니다. 114의 법칙은 세 배 시간 (ln(3) × 100 ≈ 109.86, 약수 친화적인 114로 반올림)을 추정합니다. 144의 법칙은 네 배. 모두 같은 Taylor 전개 논리를 공유합니다.

중요한 주의 — 두 배 시간은 실질 구매력에 대해 아무것도 말하지 않습니다. 명목 수익률이 8%이고 인플레이션이 3%라면 법칙은 9년차에 명목 두 배라고 말하지만, 실질 두 배는 14.4년 걸립니다(순 5% 사용). 72의 법칙은 항상 Fisher 실질 이자율 보정과 함께 사용해야 합니다.

본 콘텐츠는 교육용이며 개인 맞춤형 재무 자문이 아닙니다.`
			},
			code: {
				example: `// Rule of 72 vs exact doubling time
function exactDoubling(r) { return Math.log(2) / Math.log(1 + r); }
function rule72(r)        { return 72 / (r * 100); }

console.log(exactDoubling(0.08), rule72(0.08)); // 9.006 vs 9.000
console.log(exactDoubling(0.10), rule72(0.10)); // 7.273 vs 7.200
console.log(exactDoubling(0.01), rule72(0.01)); // 69.66 vs 72.00
console.log(exactDoubling(0.25), rule72(0.25)); // 3.106 vs 2.880`
			}
		},
		{
			heading: {
				en: 'Real Returns: Why Inflation-Adjusted Math Matters',
				ko: '실질 수익률 — 인플레이션 보정 수학이 중요한 이유'
			},
			body: {
				en: `A 7% nominal return in a 4% inflation environment is not a 3% real return — it is closer to 2.88%. The naive subtraction (nominal − inflation) is a first-order approximation; the exact relationship is the Fisher equation: (1 + r_nominal) = (1 + r_real)(1 + inflation). Solving for the real rate: r_real = (1 + r_nominal) / (1 + inflation) − 1. At 7% nominal and 4% inflation, the exact real rate is 1.07/1.04 − 1 = 0.02885, or 2.885%. The 0.115 percentage-point gap from the naive estimate is small in any single year but compounds dramatically over decades.

Why this matters in practice: the Federal Reserve targets 2% inflation as measured by Personal Consumption Expenditures (PCE). The Bureau of Labor Statistics publishes the Consumer Price Index (CPI), which has historically run slightly above PCE due to methodology (CPI uses fixed weights, PCE adjusts for substitution). If you plan retirement on nominal returns alone, you systematically overstate your future purchasing power. A $1 million nominal portfolio in 2026 has roughly the purchasing power of a $552,000 portfolio in 1996, given the cumulative CPI rise of about 81%.

Long-term equity data tells the real story. The S&P 500's total return (with dividends reinvested) from 1928–2024 averaged ~10% nominal annually, per data compiled by NYU professor Aswath Damodaran from CRSP and S&P Global. Over the same span, U.S. CPI averaged ~3% annually. Compounding these correctly gives a real annualized return near 7% — a number widely cited in retirement planning. But year-to-year volatility is huge (standard deviation ~19%), so the 7% real average is only meaningful over multi-decade horizons. Robert Shiller's online dataset (econ.yale.edu/~shiller/data.htm) provides month-by-month CPI-adjusted S&P returns from 1871, the gold standard for academic work.

Treasury Inflation-Protected Securities (TIPS) provide a market-implied real rate. Subtracting the TIPS yield from the comparable nominal Treasury yield gives the "breakeven inflation rate" — what markets expect inflation to average over that horizon. As of 2026, 10-year breakeven hovers around 2.3%, suggesting markets price moderate inflation. The St. Louis Fed (FRED) publishes daily breakeven series at fred.stlouisfed.org/series/T10YIE.

Rule of thumb when planning: use 4–5% real for diversified equity exposure, 0–1% real for high-grade bonds, and assume cash loses ~1–2% real per year. These are educational ranges, not guarantees of future results. Past performance does not predict future returns. Consult a licensed financial advisor before making investment decisions.`,
				ko: `4% 인플레이션 환경에서 7% 명목 수익률은 3% 실질 수익률이 아닙니다 — 약 2.88%에 가깝습니다. 단순 뺄셈(명목 − 인플레)은 1차 근사이며, 정확한 관계는 Fisher 방정식입니다: (1 + r_명목) = (1 + r_실질)(1 + 인플레). 실질 이율로 풀면: r_실질 = (1 + r_명목) / (1 + 인플레) − 1. 명목 7%, 인플레 4%에서 정확한 실질은 1.07/1.04 − 1 = 0.02885, 즉 2.885%입니다. 단순 추정과의 0.115%p 차이는 단일 연도에서 작아 보이지만 수십 년 복리되면 극적으로 커집니다.

실무적 의미 — 미국 연준은 개인소비지출(PCE) 기준 2% 인플레이션을 목표로 합니다. 노동통계국(BLS)은 소비자물가지수(CPI)를 발표하는데, 방법론상 CPI는 PCE보다 약간 높게 측정됩니다(CPI는 고정 가중치, PCE는 대체효과 반영). 명목 수익률만으로 은퇴 계획을 세우면 미래 구매력을 체계적으로 과대평가하게 됩니다. 1996년 이후 누적 CPI 상승률 약 81%를 적용하면, 2026년의 $1,000,000 명목 포트폴리오는 1996년 가치 기준으로 약 $552,000 수준의 구매력입니다.

장기 주식 데이터가 진짜 이야기를 들려줍니다. S&P 500 총수익(배당 재투자 포함)은 1928~2024년 연평균 약 10% 명목이었으며, 이는 NYU 교수 Aswath Damodaran이 CRSP와 S&P Global에서 집계한 데이터입니다. 같은 기간 미국 CPI는 연평균 약 3%였습니다. 정확히 복리 계산하면 실질 연환산 수익률은 약 7% — 은퇴 계획에서 널리 인용되는 숫자입니다. 그러나 연도별 변동성이 매우 큽니다(표준편차 약 19%). 7% 실질 평균은 수십 년 단위에서만 의미가 있습니다. Robert Shiller의 공개 데이터(econ.yale.edu/~shiller/data.htm)는 1871년부터의 월별 CPI 보정 S&P 수익률을 제공하며 학술 표준입니다.

물가연동국채(TIPS)는 시장이 함의하는 실질 이율을 제공합니다. 동일 만기 명목 국채 수익률에서 TIPS 수익률을 빼면 "breakeven 인플레이션율" — 시장이 해당 기간 인플레이션 평균으로 예상하는 값이 나옵니다. 2026년 기준 10년 breakeven은 약 2.3% 수준이며, 시장이 완만한 인플레이션을 가격에 반영하고 있음을 시사합니다. 세인트루이스 연준(FRED)은 일별 breakeven 시리즈를 fred.stlouisfed.org/series/T10YIE 에서 공개합니다.

계획 시 경험 법칙 — 분산된 주식 노출은 실질 4~5%, 우량 채권은 실질 0~1%, 현금은 매년 실질 -1~-2% 정도를 가정하세요. 이는 교육용 범위이며 미래 수익 보장이 아닙니다. 과거 성과는 미래 수익을 예측하지 않습니다. 투자 결정 전 면허 있는 재무 전문가와 상담하세요.`
			},
			code: {
				example: `// Fisher equation: nominal-to-real conversion
function realRate(nominal, inflation) {
  return (1 + nominal) / (1 + inflation) - 1;
}

realRate(0.07, 0.04); // 0.02885 (2.885%, NOT 3%)
realRate(0.10, 0.03); // 0.06796 (6.796%, NOT 7%)

// Cumulative purchasing-power loss over 30 years at 3% inflation
const lossFactor = 1 / Math.pow(1.03, 30); // 0.4120
// $1,000,000 nominal in 30 years = $412,000 in today's dollars`
			}
		}
	];

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	const toolContent = {
		about: {
			en: 'The compound interest calculator estimates how an initial principal grows over time when interest is reinvested. By visualizing the long-term effect of compounding, regular contributions, and different compounding frequencies, you can better understand the time value of money. This tool is provided for educational purposes only and does not constitute financial advice or a guarantee of future returns.',
			ko: '복리 계산기는 원금에 이자가 재투자되며 시간이 지남에 따라 자산이 어떻게 성장하는지 추정합니다. 복리 효과, 정기 적립, 복리 주기에 따른 차이를 시각적으로 보여주어 시간이 돈에 미치는 영향을 이해하는 데 도움이 됩니다. 본 도구는 교육 목적으로만 제공되며 재무 자문이나 수익 보장이 아닙니다.',
			ja: '複利計算機は、利息が再投資されることで元本が時間とともにどのように成長するかを推定します。複利の長期的影響、定期積立、複利頻度の違いを視覚化し、お金の時間価値を理解するのに役立ちます。本ツールは教育目的のみで提供され、金融アドバイスや将来の収益を保証するものではありません。',
			zh: '复利计算器估算本金在利息再投资的情况下随时间的增长。通过可视化复利的长期效应、定期投入和不同复利频率的差异，可以更好地理解货币的时间价值。本工具仅供教育用途，不构成财务建议或未来收益的保证。'
		},
		howTo: {
			en: [
				'Enter your initial principal (the starting amount you plan to invest).',
				'Add your monthly contribution if you plan to invest regularly.',
				'Set the expected annual interest rate (use a conservative estimate).',
				'Choose the time horizon in years and the compounding frequency.',
				'Review the future value, total contributions, and interest earned breakdown.'
			],
			ko: [
				'초기 원금(투자를 시작할 금액)을 입력합니다.',
				'정기 투자 계획이 있다면 월 적립금을 입력합니다.',
				'예상 연이율을 보수적으로 설정합니다.',
				'투자 기간(년)과 복리 주기를 선택합니다.',
				'미래 가치, 총 투자금, 이자 수익 구성을 확인합니다.'
			],
			ja: [
				'初期元本(投資を開始する金額)を入力します。',
				'定期投資の予定がある場合は月々の積立額を入力します。',
				'期待年利率を保守的に設定します。',
				'投資期間(年)と複利頻度を選択します。',
				'将来価値、総拠出額、利息収益の内訳を確認します。'
			],
			zh: [
				'输入初始本金(您计划投资的起始金额)。',
				'如果计划定期投资，请输入每月投入金额。',
				'设置预期年利率(建议使用保守估计)。',
				'选择投资年限和复利频率。',
				'查看未来价值、总投入和利息收益的分解。'
			]
		},
		useCases: {
			en: [
				'Compare a lump-sum investment with regular monthly contributions over 10-30 years.',
				'Estimate how a savings account or index fund could grow before taxes and inflation.',
				'Visualize how starting earlier can dramatically change long-term outcomes.',
				'Educational classroom demonstration of exponential growth.',
				'Sanity-check long-term projections from advisors or planning tools.'
			],
			ko: [
				'10-30년에 걸친 일시금 투자와 월 적립 투자 비교',
				'세금과 인플레이션 이전 예금이나 인덱스 펀드의 성장 추정',
				'일찍 시작하는 것이 장기 결과에 미치는 영향 시각화',
				'지수적 성장에 대한 교육용 시연',
				'재무 설계사의 장기 전망에 대한 검토용 비교'
			],
			ja: [
				'10〜30年にわたる一括投資と毎月積立投資の比較',
				'税金やインフレ前の貯蓄や投信の成長を推定',
				'早く始めることが長期結果に与える影響を可視化',
				'指数関数的成長の教育的デモンストレーション',
				'アドバイザーの長期予測の妥当性チェック'
			],
			zh: [
				'比较10-30年间的一次性投资与定期月度投入',
				'估算税前和通胀前储蓄账户或指数基金的增长',
				'可视化越早开始对长期结果的显著影响',
				'指数增长的课堂教学演示',
				'对财务顾问的长期预测进行合理性检查'
			]
		},
		faq: {
			en: [
				{ q: 'Is this financial advice?', a: 'No. This calculator is provided for educational and illustrative purposes only and does not constitute financial, investment, or tax advice. Consult a qualified professional before making decisions.' },
				{ q: 'What compounding frequency should I use?', a: 'It depends on the product. Many bank accounts compound daily or monthly while bonds may compound semi-annually. Use the frequency that matches your specific account.' },
				{ q: 'Does this account for inflation or taxes?', a: 'No. Results are nominal and do not subtract inflation, fees, or taxes. Real returns are typically lower.' },
				{ q: 'Are returns guaranteed?', a: 'No. Past performance does not predict future results. The interest rate you enter is an assumption, not a guarantee.' }
			],
			ko: [
				{ q: '이것은 재무 자문인가요?', a: '아닙니다. 본 계산기는 교육 및 참고용으로만 제공되며 재무, 투자, 세무 자문이 아닙니다. 결정을 내리기 전에 전문가와 상담하세요.' },
				{ q: '어떤 복리 주기를 사용해야 하나요?', a: '상품에 따라 다릅니다. 많은 은행 계좌는 일별 또는 월별 복리이며 채권은 반기 복리일 수 있습니다. 본인 계좌에 맞는 주기를 선택하세요.' },
				{ q: '인플레이션이나 세금이 반영되나요?', a: '아니요. 결과는 명목 금액으로 인플레이션, 수수료, 세금이 차감되지 않습니다. 실질 수익률은 보통 더 낮습니다.' },
				{ q: '수익이 보장되나요?', a: '아니요. 과거 성과는 미래 결과를 보장하지 않습니다. 입력한 이율은 가정값이며 보장이 아닙니다.' }
			],
			ja: [
				{ q: 'これは金融アドバイスですか?', a: 'いいえ。本計算機は教育・例示目的のみで提供され、金融・投資・税務アドバイスではありません。意思決定前に専門家にご相談ください。' },
				{ q: 'どの複利頻度を使うべきですか?', a: '商品によります。多くの銀行口座は日次または月次複利、債券は半年複利の場合があります。ご自身の口座に合わせてください。' },
				{ q: 'インフレや税金は考慮されますか?', a: 'いいえ。結果は名目値であり、インフレ、手数料、税金は差し引かれません。実質リターンは通常これより低くなります。' },
				{ q: 'リターンは保証されますか?', a: 'いいえ。過去の実績は将来の結果を予測するものではありません。入力した利率は仮定であり保証ではありません。' }
			],
			zh: [
				{ q: '这是财务建议吗？', a: '不是。本计算器仅供教育和说明用途，不构成财务、投资或税务建议。决策前请咨询合格的专业人士。' },
				{ q: '应该使用什么复利频率？', a: '取决于产品。许多银行账户按日或按月复利，债券可能按半年复利。请使用与您账户相匹配的频率。' },
				{ q: '是否考虑了通胀或税收？', a: '没有。结果为名义值，未扣除通胀、费用或税收。实际回报通常更低。' },
				{ q: '收益有保证吗？', a: '没有。过往表现不代表未来结果。您输入的利率是一个假设，并非保证。' }
			]
		},
		related: [
			{ href: '/dca', label: { en: 'DCA Calculator', ko: 'DCA 계산기', ja: 'DCA計算機', zh: 'DCA计算器' } },
			{ href: '/retirement', label: { en: 'Retirement Calculator', ko: '은퇴 계산기', ja: '退職計算機', zh: '退休计算器' } },
			{ href: '/roi', label: { en: 'ROI Calculator', ko: 'ROI 계산기', ja: 'ROI計算機', zh: 'ROI计算器' } }
		],
		externalRefs: [
			{ href: 'https://www.investopedia.com/terms/c/compoundinterest.asp', label: 'Investopedia: Compound Interest' },
			{ href: 'https://www.sec.gov/about/reports-publications/investor-publications/compound-interest-calculator', label: 'SEC: Compound Interest Calculator' }
		]
	};

	let principal = 10000;
	let rate = 7;
	let time = 10;
	let monthlyContribution = 500;
	let frequency: 'annual' | 'semi' | 'quarter' | 'monthly' = 'monthly';

	const frequencies = { annual: 1, semi: 2, quarter: 4, monthly: 12 };

	$: n = frequencies[frequency];
	$: r = rate / 100;
	$: futureValue = principal * Math.pow(1 + r/n, n * time) +
		monthlyContribution * ((Math.pow(1 + r/n, n * time) - 1) / (r/n)) * (1 + r/n);
	$: totalContributed = principal + (monthlyContribution * 12 * time);
	$: interestEarned = futureValue - totalContributed;

	function formatCurrency(value: number): string {
		return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
	}
</script>

<svelte:head>
	<title>{t('compound.title')} - SDK.bz</title>
	<meta name="description" content={t('compound.desc')} />
	<meta property="og:title" content="{t('compound.title')} - SDK.bz" />
	<meta property="og:description" content={t('compound.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('compound.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('compound.desc')}</p>
	</div>

	<div class="grid md:grid-cols-2 gap-8">
		<div class="space-y-6 bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700">
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('compound.principal')}</label>
				<input type="number" bind:value={principal} min="0" step="1000"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-blue-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('compound.monthly')}</label>
				<input type="number" bind:value={monthlyContribution} min="0" step="100"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-blue-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('compound.rate')}</label>
				<input type="number" bind:value={rate} min="0" max="30" step="0.5"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-blue-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('compound.time')}</label>
				<input type="number" bind:value={time} min="1" max="50"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-blue-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('compound.frequency')}</label>
				<select bind:value={frequency}
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-blue-400">
					<option value="annual">{t('compound.freq.annual')}</option>
					<option value="semi">{t('compound.freq.semi')}</option>
					<option value="quarter">{t('compound.freq.quarter')}</option>
					<option value="monthly">{t('compound.freq.monthly')}</option>
				</select>
			</div>
		</div>

		<div class="space-y-4">
			<div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-800">
				<p class="text-sm text-blue-600 dark:text-blue-400 mb-1">{t('compound.future')}</p>
				<p class="text-3xl font-bold text-blue-700 dark:text-blue-300">{formatCurrency(futureValue)}</p>
			</div>
			<div class="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700">
				<div class="flex justify-between mb-4">
					<span class="text-gray-600 dark:text-dark-400">{t('compound.contributed')}</span>
					<span class="font-semibold text-gray-900 dark:text-dark-100">{formatCurrency(totalContributed)}</span>
				</div>
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('compound.earned')}</span>
					<span class="font-semibold text-green-600 dark:text-green-400">{formatCurrency(interestEarned)}</span>
				</div>
			</div>
			<div class="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700">
				<div class="h-4 rounded-full overflow-hidden flex">
					<div class="bg-blue-500" style="width: {(totalContributed / futureValue) * 100}%"></div>
					<div class="bg-green-500" style="width: {(interestEarned / futureValue) * 100}%"></div>
				</div>
				<div class="flex justify-between mt-2 text-xs">
					<span class="text-blue-600 dark:text-blue-400">Contributions: {((totalContributed / futureValue) * 100).toFixed(1)}%</span>
					<span class="text-green-600 dark:text-green-400">Interest: {((interestEarned / futureValue) * 100).toFixed(1)}%</span>
				</div>
			</div>
		</div>
	</div>

	<ToolContent
		{lang}
		toolName="Compound Interest Calculator"
		toolUrl="https://sdk.bz/{lang}/compound"
		lastUpdated="2026-04-30"
		category="Finance Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sdk.bz/${lang}` },
			{ name: 'Tools', url: `https://sdk.bz/${lang}` },
			{ name: 'Compound Interest Calculator', url: `https://sdk.bz/${lang}/compound` }
		]}
		content={toolContent}
	/>

	<ToolGuide {lang} sections={guideSections} />
</div>
