<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';
	import ToolGuide from '$lib/components/ToolGuide.svelte';

	const guideSections = [
		{
			heading: {
				en: 'Time-Weighted vs Money-Weighted Returns (XIRR vs CAGR)',
				ko: '시간가중 수익률 vs 자금가중 수익률 (XIRR vs CAGR)'
			},
			body: {
				en: `Two investors hold the same fund and earn dramatically different "returns" — not because the fund performed differently for each, but because they used different return calculations. The choice between time-weighted return (TWR) and money-weighted return (MWR / IRR) is foundational, and getting it wrong distorts every comparison you make.

Time-Weighted Return measures the fund manager's skill — the actual investment performance free of cashflow timing. The calculation breaks the holding period into sub-periods, each ending when a deposit or withdrawal occurs, computes a return for each sub-period, and chains them: TWR = ((1 + r1)(1 + r2)...(1 + rn)) − 1. The Global Investment Performance Standards (GIPS) maintained by the CFA Institute mandate TWR for fund-manager performance reporting precisely because it neutralizes the effect of investor cashflows that the manager did not control. CAGR (Compound Annual Growth Rate) is the annualized form of TWR over a single uninterrupted period: CAGR = (Ending / Beginning)^(1/years) − 1.

Money-Weighted Return — also called Internal Rate of Return (IRR), or Extended IRR (XIRR) when cashflows are irregular — solves for the discount rate that makes the net present value of all cashflows equal zero: 0 = Σ CFi / (1 + r)^ti. It captures the actual return the investor experienced, including the impact of when they added or removed money. If you contributed heavily right before a market crash, your XIRR will be lower than the fund's TWR even though you held the same fund.

Concrete example. You start with $10,000 in a fund on January 1. The fund returns +30% in year 1 (your $10,000 becomes $13,000). On December 31, you contribute another $50,000 (now $63,000). In year 2 the fund loses −20% (your $63,000 becomes $50,400). At the end of year 2 your total contributions were $60,000 and your account is worth $50,400 — you lost $9,600. TWR for the period: (1.30)(0.80) − 1 = +4.0% total, or about +1.98% annualized. That is what the manager delivered. Your money-weighted return (XIRR) is approximately −10.7% annualized — disastrously different. The fund did not change; your timing did. Both numbers are correct; they answer different questions.

Use TWR / CAGR when comparing fund managers, comparing strategies, or assessing investment skill. Use MWR / IRR / XIRR when evaluating your personal returns, especially with irregular contributions, dollar-cost averaging, or rebalancing. The U.S. Securities and Exchange Commission requires fund prospectuses to report TWR-based annualized returns; brokerage account statements often show MWR for personal performance. Reading them as if they are the same is a common mistake that overstates or understates results substantially.

Practical computation: spreadsheet XIRR functions (Excel, Google Sheets) take an array of dates and cashflows. The math is iterative — Newton-Raphson root-finding — and rarely closed-form. Most public datasets (Morningstar, S&P Indices, MSCI) publish TWR/CAGR. Educational only — consult a licensed advisor for personalized analysis.`,
				ko: `같은 펀드를 보유한 두 투자자가 극적으로 다른 "수익률"을 보고할 수 있습니다 — 펀드 성과가 달라서가 아니라, 다른 수익률 계산법을 사용했기 때문입니다. 시간가중수익률(TWR)과 자금가중수익률(MWR / IRR) 사이의 선택은 근본적이며, 잘못 사용하면 모든 비교가 왜곡됩니다.

시간가중수익률은 펀드 매니저의 역량 — 자금흐름 타이밍을 제거한 순수 투자 성과 — 을 측정합니다. 보유 기간을 입출금 발생 시점마다 하위 기간으로 쪼개고, 각 하위 기간의 수익률을 계산해 연쇄 곱합니다: TWR = ((1 + r1)(1 + r2)...(1 + rn)) − 1. CFA Institute의 Global Investment Performance Standards(GIPS)는 펀드 매니저 성과 보고에 TWR을 의무화합니다 — 매니저가 통제하지 않는 투자자 자금흐름 효과를 제거하기 때문입니다. CAGR(연복리성장률)은 단일 연속 기간의 TWR을 연 환산한 형태입니다: CAGR = (기말/기초)^(1/년수) − 1.

자금가중수익률 — 내부수익률(IRR), 자금흐름이 불규칙할 때는 확장 IRR(XIRR) — 은 모든 자금흐름의 순현재가치를 0으로 만드는 할인율을 풉니다: 0 = Σ CFi / (1 + r)^ti. 투자자가 실제로 경험한 수익률을, 자금 투입/회수 시점의 영향을 포함해 포착합니다. 폭락 직전에 크게 추가 투자했다면, XIRR은 같은 펀드의 TWR보다 낮습니다.

구체적 예시 — 1월 1일 펀드에 $10,000 시작. 1년차 +30% (당신의 $10,000 → $13,000). 12월 31일 추가 $50,000 투입 (총 $63,000). 2년차 −20% ($63,000 → $50,400). 2년 말 총 투입 $60,000, 계좌가치 $50,400 — $9,600 손실. 해당 기간 TWR — (1.30)(0.80) − 1 = 누적 +4.0%, 연환산 약 +1.98%. 매니저가 제공한 성과입니다. 본인의 자금가중수익률(XIRR)은 연환산 약 −10.7% — 완전히 다른 그림. 펀드는 그대로였고 타이밍이 달랐습니다. 두 수치 모두 정확하며, 다른 질문에 답합니다.

펀드 매니저 비교, 전략 비교, 투자 역량 평가에는 TWR / CAGR 사용. 개인 수익률 평가 — 특히 불규칙 기여, DCA, 리밸런싱 — 에는 MWR / IRR / XIRR 사용. 미국 SEC는 펀드 투자설명서에 TWR 기반 연환산 수익률 보고를 요구합니다. 증권 계좌 명세서는 종종 MWR을 개인 성과로 보여줍니다. 같은 것으로 읽는 것이 흔한 오류이며, 결과를 크게 과장 또는 과소평가합니다.

실무 계산 — 스프레드시트 XIRR 함수(Excel, Google Sheets)는 날짜 배열과 자금흐름 배열을 받습니다. 수학은 반복적 — Newton-Raphson 근 찾기 — 이며 닫힌형 해는 드뭅니다. 대부분 공개 데이터셋(Morningstar, S&P Indices, MSCI)은 TWR/CAGR을 발표합니다. 본 콘텐츠는 교육용 — 개인 분석은 면허 있는 자문가와 상담하세요.`
			},
			code: {
				example: `// CAGR (annualized TWR over uninterrupted period)
function cagr(start, end, years) {
  return Math.pow(end/start, 1/years) - 1;
}
cagr(10000, 14641, 4); // 0.10 (10% per year)

// TWR with intermediate cashflows
function twr(periods) {
  return periods.reduce((acc, p) => acc * (1 + p), 1) - 1;
}
twr([0.30, -0.20]); // 0.04 (+4% cumulative)

// XIRR is iterative — Newton-Raphson on:
// f(r) = Σ CFi / (1+r)^(ti/365)
// Real implementations: Excel XIRR, scipy.optimize.brentq, etc.`
			}
		},
		{
			heading: {
				en: 'Why ROI Without Time Is Meaningless',
				ko: '시간이 빠진 ROI는 무의미합니다'
			},
			body: {
				en: `"I made 100% ROI on this investment" sounds like a brag. Then ask: "Over how long?" If the answer is one day, you are looking at a phenomenal trade. If it is forty years, you have been beaten by an inflation-only Treasury bill. Yet news headlines and investment pitches routinely report ROI without time, leaving readers to fill in optimistic assumptions.

Simple ROI = (Final Value − Initial Investment) / Initial Investment. It is dimensionless and silent on duration. To compare investments meaningfully, annualize: Annualized Return = (1 + ROI)^(1/years) − 1. A 100% ROI in 1 year is +100% annualized. A 100% ROI in 10 years is just +7.18% annualized — slightly above long-run inflation, slightly below the long-run S&P average. A 100% ROI in 40 years is +1.75% annualized — a real loss after inflation. Same ROI, four different stories.

The stakes get larger when leverage or compounding is involved. Real-estate marketing frequently advertises "200% returns" on leveraged property — a $100,000 down payment on a $500,000 property that appreciates to $700,000 produces a $200,000 gain on the original $100,000 stake (200% ROI), but if it took 15 years that is +7.6% annualized on the equity, before mortgage interest, taxes, insurance, maintenance, and vacancy. Subtracting these drops the annualized return into single digits and often into negative territory after inflation. Always demand the time horizon, then annualize.

Multiperiod aggregation introduces another trap: the average of annual returns is not the annualized return. If a fund returns +50% one year and −50% the next, the arithmetic mean is 0% but the actual end-of-period value is $100 × 1.50 × 0.50 = $75 — a 25% loss, or −13.4% annualized. The geometric mean is the only honest summary for compounding investments: GM = (Π(1 + ri))^(1/n) − 1. Reports that quote "average annual return" instead of "annualized return" exploit the gap. Volatility widens the gap further: variance drag = σ²/2 (approximately), where σ is the annual standard deviation. A fund averaging 8% with 20% standard deviation experiences roughly 6% annualized — the missing 2% is volatility tax.

Always look for: (1) the time period, (2) whether the number is annualized vs cumulative vs arithmetic average, (3) whether dividends or distributions are reinvested ("total return") or not, (4) whether the number is gross or net of fees and taxes. Mutual fund prospectuses are required by SEC Rule 482 to disclose 1-, 5-, and 10-year annualized returns net of fees, plus the SEC standardized yield for income funds. Use those — not glossy marketing — when comparing.

Educational only. Past performance does not guarantee future results.`,
				ko: `"이 투자에서 ROI 100% 봤어"는 자랑처럼 들립니다. 그러면 물으세요 — "얼마 동안?" 답이 1일이라면 환상적인 트레이드. 40년이라면 인플레이션 정도의 국채에 진 셈. 그런데 뉴스 헤드라인과 투자 권유에서는 시간 없는 ROI가 일상이며, 독자는 낙관적 가정으로 빈칸을 채웁니다.

단순 ROI = (최종가치 − 초기투자) / 초기투자. 무차원이며 기간을 말하지 않습니다. 의미 있는 비교를 위해 연환산하세요: 연환산수익률 = (1 + ROI)^(1/년수) − 1. 1년에 ROI 100%는 연환산 +100%. 10년에 ROI 100%는 연환산 +7.18% — 장기 인플레이션을 약간 상회, 장기 S&P 평균을 약간 하회. 40년에 ROI 100%는 연환산 +1.75% — 인플레이션 차감 시 실질 손실. 같은 ROI, 네 가지 다른 이야기.

레버리지나 복리가 끼면 판돈이 커집니다. 부동산 마케팅은 자주 레버리지 자산의 "200% 수익률"을 광고합니다 — $500,000 부동산에 $100,000 계약금, 가격이 $700,000로 상승하면 원래 $100,000 자본에 $200,000 이익(ROI 200%) — 그런데 15년이 걸렸다면 자본 기준 연환산 +7.6%, 그것도 모기지 이자, 세금, 보험, 유지보수, 공실을 빼기 전. 이를 차감하면 연환산이 한 자릿수, 인플레이션 차감 시 음수로 떨어지기 일쑤입니다. 항상 시간 지평을 요구하고, 연환산하세요.

다기간 집계는 또 다른 함정 — 연 수익률의 평균은 연환산 수익률이 아닙니다. 1년차 +50%, 2년차 −50% 펀드의 산술평균은 0%지만 실제 기말 가치는 $100 × 1.50 × 0.50 = $75 — 25% 손실, 연환산 −13.4%. 기하평균이 복리 투자의 유일한 정직한 요약입니다: GM = (Π(1 + ri))^(1/n) − 1. "평균 연수익률"을 말하면서 "연환산 수익률"이 아닌 보고서는 이 격차를 악용합니다. 변동성은 격차를 더 벌립니다 — variance drag = σ²/2 (근사), σ는 연 표준편차. 평균 8%, 표준편차 20%인 펀드는 연환산 약 6% — 사라진 2%가 변동성 세금입니다.

항상 확인 — (1) 기간, (2) 연환산 vs 누적 vs 산술평균, (3) 배당/분배의 재투자 여부("총수익률") , (4) 수수료와 세금 차감 여부. 미국 뮤추얼펀드 투자설명서는 SEC Rule 482에 따라 수수료 차감 후 1년/5년/10년 연환산 수익률, 그리고 인컴 펀드의 SEC 표준화 수익률 공시 의무가 있습니다. 비교 시에는 그 숫자를 — 광고 카피가 아닌 — 사용하세요.

본 콘텐츠는 교육용입니다. 과거 성과는 미래 결과를 보장하지 않습니다.`
			},
			code: {
				example: `// Annualize cumulative ROI
function annualize(roi, years) {
  return Math.pow(1 + roi, 1/years) - 1;
}
annualize(1.0, 1);  // 1.0000 (100% annualized)
annualize(1.0, 10); // 0.0718 (7.18%)
annualize(1.0, 40); // 0.0175 (1.75%)

// Geometric vs arithmetic mean
const returns = [0.50, -0.50];
const arith = returns.reduce((a,b)=>a+b)/returns.length;            // 0.00
const geom  = Math.pow(returns.reduce((a,b)=>a*(1+b), 1), 1/2) - 1; // -0.134`
			}
		},
		{
			heading: {
				en: 'Sharpe Ratio: Risk-Adjusted ROI',
				ko: '샤프 비율 — 위험조정 ROI'
			},
			body: {
				en: `Two funds returned 12% last year. Fund A had a quiet, steady ride — drawdowns under 5%, daily volatility minimal. Fund B was on a rollercoaster — 30% drawdowns, daily moves of ±3%. Both funds report the same ROI, but they are not the same investment. The Sharpe Ratio, introduced by Nobel laureate William F. Sharpe in 1966, measures excess return per unit of risk: Sharpe = (R_p − R_f) / σ_p, where R_p is the portfolio return, R_f is the risk-free rate (typically the 3-month U.S. Treasury bill), and σ_p is the standard deviation of the portfolio's excess returns. Higher is better.

Why subtract the risk-free rate? Any investor can earn R_f without taking risk. The Sharpe Ratio asks: how much extra return did you earn per unit of risk you accepted? A fund returning 12% in a 5% T-bill environment with 15% volatility has Sharpe = (12% − 5%) / 15% = 0.467. A fund returning 8% with 5% volatility has Sharpe = (8% − 5%) / 5% = 0.600 — better risk-adjusted, despite lower headline return.

Common interpretation benchmarks: Sharpe < 0.5 is generally considered weak; 0.5–1.0 is acceptable; 1.0–2.0 is good; 2.0+ is excellent (and rare); 3.0+ over multiyear periods is suspicious — Bernie Madoff reported a Sharpe of ~2.5 for years before the fraud unraveled, and post-mortem analysis showed his returns were too smooth to be real. Hedge fund auditors flag Sharpe ratios that look too good as a fraud indicator.

Limitations matter. (1) Sharpe assumes returns are normally distributed; real markets have fat tails. The 2008 crisis showed many "low-vol" credit strategies with high reported Sharpes whose risk was hidden in tail events. (2) Sharpe punishes upside volatility equally with downside volatility, even though investors only fear the latter. The Sortino Ratio addresses this by using only downside deviation: Sortino = (R_p − R_f) / σ_downside. (3) Sharpe is sensitive to the measurement horizon. Daily, monthly, and annual Sharpe ratios are not directly comparable; annualizing requires multiplying by sqrt(observations per year), which assumes IID returns — frequently violated.

Risk-free rate choice matters. The 3-month Treasury yield (DGS3MO on FRED) is standard for U.S.-domiciled comparisons. The St. Louis Fed publishes the rate daily at fred.stlouisfed.org/series/DGS3MO. Comparing a fund's reported Sharpe to the rate that was actually risk-free in that period — not the current rate — is essential. A 1990s Sharpe computed with 6% T-bills is not comparable to a 2020 Sharpe computed with 0.05% T-bills.

Practical use: when a fund or strategy advertises a return number, ask for the Sharpe over the same period. If the strategy refuses or uses a non-standard ratio (Calmar, Omega, MAR), pin down what they actually compute and against which benchmark. Educational only — consult a licensed financial advisor for portfolio decisions.`,
				ko: `두 펀드가 작년 12% 수익을 냈습니다. A 펀드는 조용하고 꾸준한 길 — 낙폭 5% 미만, 일일 변동성 최소. B 펀드는 롤러코스터 — 낙폭 30%, 일일 ±3%. ROI는 같지만 같은 투자가 아닙니다. 1990년 노벨경제학상 수상자 William F. Sharpe가 1966년 도입한 Sharpe Ratio는 위험 한 단위당 초과수익을 측정합니다: Sharpe = (R_p − R_f) / σ_p. R_p는 포트폴리오 수익률, R_f는 무위험 이자율(보통 3개월 미국 국채), σ_p는 포트폴리오 초과수익률의 표준편차. 높을수록 좋습니다.

왜 무위험 이자율을 뺄까요? 어떤 투자자든 위험 없이 R_f를 얻을 수 있습니다. Sharpe Ratio는 묻습니다 — 받아들인 위험 한 단위당 얼마나 추가 수익을 냈는가? 5% T-bill 환경에서 변동성 15%로 12% 낸 펀드의 Sharpe = (12% − 5%) / 15% = 0.467. 변동성 5%로 8% 낸 펀드의 Sharpe = (8% − 5%) / 5% = 0.600 — 헤드라인 수익은 낮아도 위험조정 기준은 더 우수.

일반적 해석 — Sharpe < 0.5는 약함; 0.5~1.0 수용 가능; 1.0~2.0 우수; 2.0 이상 탁월(흔치 않음); 다년간 3.0 이상은 의심스러움 — Bernie Madoff는 사기가 들통나기 전 수년간 Sharpe ~2.5를 보고했고, 사후 분석에서 그의 수익률은 실제이기에는 너무 매끄러웠습니다. 헤지펀드 감사인은 너무 좋아 보이는 Sharpe를 사기 지표로 주목합니다.

한계도 중요 — (1) Sharpe는 수익률 정규분포를 가정하지만 실제 시장은 꼬리가 두껍습니다. 2008년 위기는 보고된 Sharpe가 높았지만 위험이 꼬리 사건에 숨어 있던 "저변동성" 신용 전략들의 문제를 드러냈습니다. (2) Sharpe는 상방 변동성과 하방 변동성을 동등하게 처벌하지만, 투자자는 후자만 두려워합니다. Sortino Ratio는 하방 편차만 사용해 이를 보완합니다: Sortino = (R_p − R_f) / σ_하방. (3) Sharpe는 측정 주기에 민감합니다. 일/월/연 Sharpe는 직접 비교 불가하며 연환산은 sqrt(연 관측 수)를 곱해야 하고, 이는 IID 수익률 가정 — 자주 위배됩니다.

무위험 이자율 선택도 중요. 3개월 미국 국채 수익률(FRED 시리즈 DGS3MO)이 미국 비교의 표준입니다. 세인트루이스 연준은 fred.stlouisfed.org/series/DGS3MO 에서 일별 수치를 발표합니다. 펀드 보고 Sharpe를 비교할 때는 — 현재 금리가 아니라 — 해당 기간에 실제로 무위험이었던 금리와 매치해야 합니다. 1990년대 6% T-bill로 계산한 Sharpe는 2020년 0.05% T-bill로 계산한 Sharpe와 비교 불가능합니다.

실무 — 펀드나 전략이 수익률을 광고하면 같은 기간의 Sharpe를 요구하세요. 거부하거나 비표준 비율(Calmar, Omega, MAR)을 쓰면, 실제로 무엇을 어떤 벤치마크로 계산했는지 확정하세요. 본 콘텐츠는 교육용이며, 포트폴리오 의사결정은 면허 있는 재무 자문가와 상담하세요.`
			},
			code: {
				example: `// Sharpe Ratio
function sharpe(returns, riskFreeRate) {
  const mean = returns.reduce((a,b)=>a+b, 0) / returns.length;
  const variance = returns.reduce((s,r)=>s + (r - mean)**2, 0) / returns.length;
  const stdev = Math.sqrt(variance);
  return (mean - riskFreeRate) / stdev;
}

// Annualize a daily Sharpe (assumes IID returns)
function annualizedSharpe(dailySharpe) {
  return dailySharpe * Math.sqrt(252); // 252 trading days/yr
}

// Sortino — only downside deviation
function sortino(returns, riskFreeRate) {
  const mean = returns.reduce((a,b)=>a+b, 0) / returns.length;
  const downside = returns.filter(r => r < riskFreeRate);
  const dVar = downside.reduce((s,r)=>s + (r - riskFreeRate)**2, 0) / returns.length;
  return (mean - riskFreeRate) / Math.sqrt(dVar);
}`
			}
		}
	];

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	const toolContent = {
		about: {
			en: 'The ROI (Return on Investment) calculator estimates the simple and annualized rate of return between an initial and final investment value over a chosen number of years. It is useful for comparing investments with different time horizons on a like-for-like basis. ROI does not capture risk, volatility, fees, or taxes. This tool is for educational purposes only and is not financial advice.',
			ko: 'ROI(투자수익률) 계산기는 초기 투자금과 최종 가치, 기간(연수)을 사용해 단순 수익률과 연환산 수익률을 추정합니다. 기간이 다른 투자도 동일한 기준에서 비교할 수 있어 유용합니다. ROI는 위험, 변동성, 수수료, 세금을 반영하지 않습니다. 본 도구는 교육 목적으로만 제공되며 재무 자문이 아닙니다.',
			ja: 'ROI(投資収益率)計算機は、初期投資額・最終価値・年数からシンプルROIと年換算ROIを推定します。期間の異なる投資を同じ基準で比較するのに便利です。ROIはリスク、ボラティリティ、手数料、税金を反映しません。本ツールは教育目的のみで、金融アドバイスではありません。',
			zh: 'ROI(投资回报率)计算器根据初始投资、最终价值和年限估算简单ROI与年化ROI。便于在同一标准下比较不同期限的投资。ROI不反映风险、波动率、费用和税收。本工具仅供教育用途，不是财务建议。'
		},
		howTo: {
			en: [
				'Enter the initial investment amount.',
				'Enter the final value of the investment.',
				'Enter the holding period in years (use a decimal for partial years).',
				'Review the simple ROI percentage.',
				'Compare the annualized ROI to other investments with different durations.'
			],
			ko: [
				'초기 투자금을 입력합니다.',
				'최종 가치를 입력합니다.',
				'보유 기간(년)을 입력합니다(소수점 사용 가능).',
				'단순 ROI 백분율을 확인합니다.',
				'기간이 다른 투자와 비교할 때는 연환산 ROI를 사용합니다.'
			],
			ja: [
				'初期投資額を入力します。',
				'最終価値を入力します。',
				'保有期間(年)を入力します(小数可)。',
				'シンプルROIのパーセントを確認します。',
				'期間の異なる投資との比較には年換算ROIを使用します。'
			],
			zh: [
				'输入初始投资金额。',
				'输入最终价值。',
				'输入持有年限 (可使用小数)。',
				'查看简单ROI百分比。',
				'与不同期限的投资比较时请使用年化ROI。'
			]
		},
		useCases: {
			en: [
				'Compare a 3-year stock investment with a 10-year real-estate holding on an annualized basis.',
				'Evaluate the performance of a closed trade or a sold asset.',
				'Calculate the implied annual growth rate of a savings account or fund.',
				'Educational example for understanding the difference between simple and annualized return.',
				'Sanity-check returns reported by a fund or platform.'
			],
			ko: [
				'3년 주식 투자와 10년 부동산 투자를 연환산 기준으로 비교',
				'청산된 거래나 매도된 자산의 성과 평가',
				'예금이나 펀드의 내재 연 성장률 계산',
				'단순 수익률과 연환산 수익률의 차이 학습',
				'펀드나 플랫폼이 보고한 수익률 검토'
			],
			ja: [
				'3年の株式投資と10年の不動産保有を年換算で比較',
				'クローズドな取引や売却済み資産のパフォーマンス評価',
				'貯蓄口座や投信のインプライド年成長率の計算',
				'シンプルROIと年換算ROIの違いの学習',
				'ファンドやプラットフォーム公表値の妥当性チェック'
			],
			zh: [
				'按年化基准比较3年股票投资与10年房地产持有',
				'评估已平仓交易或已售资产的表现',
				'计算储蓄账户或基金的隐含年增长率',
				'用于学习简单收益与年化收益的差异',
				'核对基金或平台所报告收益的合理性'
			]
		},
		faq: {
			en: [
				{ q: 'Is this financial advice?', a: 'No. This calculator is for educational purposes only and does not constitute financial or investment advice.' },
				{ q: 'What is the difference between simple ROI and annualized ROI?', a: 'Simple ROI is the total percentage gain over the entire period. Annualized ROI converts that gain into an equivalent yearly rate, which is useful for comparing investments with different durations.' },
				{ q: 'Are fees, taxes, and inflation included?', a: 'No. ROI here is calculated before fees, taxes, and inflation. Real net returns will be lower.' },
				{ q: 'Does a higher ROI mean a better investment?', a: 'Not necessarily. ROI does not capture risk, volatility, or liquidity. Two investments with the same ROI can have very different risk profiles.' }
			],
			ko: [
				{ q: '이것은 재무 자문인가요?', a: '아닙니다. 본 계산기는 교육 목적으로만 제공되며 재무 또는 투자 자문이 아닙니다.' },
				{ q: '단순 ROI와 연환산 ROI의 차이는?', a: '단순 ROI는 전체 기간의 총 수익률입니다. 연환산 ROI는 이를 연 단위로 환산해 기간이 다른 투자 비교에 유용합니다.' },
				{ q: '수수료, 세금, 인플레이션이 포함되나요?', a: '아니요. ROI는 수수료, 세금, 인플레이션 차감 전 기준입니다. 실제 순수익률은 더 낮습니다.' },
				{ q: 'ROI가 높으면 더 좋은 투자인가요?', a: '꼭 그렇지 않습니다. ROI는 위험, 변동성, 유동성을 반영하지 않으므로 같은 ROI라도 위험 프로파일은 매우 다를 수 있습니다.' }
			],
			ja: [
				{ q: 'これは金融アドバイスですか?', a: 'いいえ。本計算機は教育目的のみで、金融・投資アドバイスではありません。' },
				{ q: 'シンプルROIと年換算ROIの違いは?', a: 'シンプルROIは期間全体の総リターンです。年換算ROIはこれを年率換算したもので、異なる期間の投資比較に便利です。' },
				{ q: '手数料、税金、インフレは含まれますか?', a: 'いいえ。ROIは手数料・税金・インフレ控除前の値で、実際の純リターンはより低くなります。' },
				{ q: 'ROIが高ければ良い投資ですか?', a: '必ずしもそうではありません。ROIはリスク、ボラティリティ、流動性を反映しないため、同じROIでもリスクプロファイルは大きく異なります。' }
			],
			zh: [
				{ q: '这是财务建议吗？', a: '不是。本计算器仅供教育用途，不构成财务或投资建议。' },
				{ q: '简单ROI与年化ROI有什么区别？', a: '简单ROI是整个期间的总收益百分比。年化ROI将其换算为等价的年化利率，便于比较不同期限的投资。' },
				{ q: '是否包含费用、税收和通胀？', a: '没有。这里的ROI在扣除费用、税收和通胀之前。真实净收益会更低。' },
				{ q: 'ROI越高就是越好的投资吗？', a: '不一定。ROI未反映风险、波动率和流动性。两笔ROI相同的投资，风险特征可能截然不同。' }
			]
		},
		related: [
			{ href: '/profit', label: { en: 'Profit Calculator', ko: '손익 계산기', ja: '損益計算機', zh: '盈亏计算器' } },
			{ href: '/compound', label: { en: 'Compound Interest', ko: '복리 계산기', ja: '複利計算機', zh: '复利计算器' } },
			{ href: '/dca', label: { en: 'DCA Calculator', ko: 'DCA 계산기', ja: 'DCA計算機', zh: 'DCA计算器' } }
		],
		externalRefs: [
			{ href: 'https://www.investopedia.com/terms/r/returnoninvestment.asp', label: 'Investopedia: Return on Investment (ROI)' },
			{ href: 'https://corporatefinanceinstitute.com/resources/accounting/return-on-investment-roi-formula/', label: 'CFI: ROI Formula' }
		]
	};

	let initial = 10000;
	let final = 15000;
	let years = 3;

	$: gain = final - initial;
	$: roi = initial > 0 ? ((final - initial) / initial) * 100 : 0;
	$: annualizedRoi = years > 0 ? (Math.pow(final / initial, 1 / years) - 1) * 100 : roi;

	function formatCurrency(value: number): string {
		return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
	}
</script>

<svelte:head>
	<title>{t('roi.title')} - SDK.bz</title>
	<meta name="description" content={t('roi.desc')} />
	<meta property="og:title" content="{t('roi.title')} - SDK.bz" />
	<meta property="og:description" content={t('roi.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('roi.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('roi.desc')}</p>
	</div>

	<div class="grid md:grid-cols-2 gap-8">
		<div class="space-y-6 bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700">
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('roi.initial')}</label>
				<input type="number" bind:value={initial} min="0" step="1000"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-teal-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('roi.final')}</label>
				<input type="number" bind:value={final} min="0" step="1000"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-teal-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('roi.years')}</label>
				<input type="number" bind:value={years} min="0.5" max="50" step="0.5"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-teal-400" />
			</div>
		</div>

		<div class="space-y-4">
			<div class="p-6 rounded-2xl border {roi >= 0 ? 'bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800' : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'}">
				<p class="text-sm {roi >= 0 ? 'text-teal-600 dark:text-teal-400' : 'text-red-600 dark:text-red-400'} mb-1">{t('roi.roi')}</p>
				<p class="text-3xl font-bold {roi >= 0 ? 'text-teal-700 dark:text-teal-300' : 'text-red-700 dark:text-red-300'}">{roi >= 0 ? '+' : ''}{roi.toFixed(2)}%</p>
			</div>
			<div class="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700 space-y-3">
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('roi.annualized')}</span>
					<span class="font-semibold {annualizedRoi >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}">{annualizedRoi >= 0 ? '+' : ''}{annualizedRoi.toFixed(2)}%</span>
				</div>
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('roi.gain')}</span>
					<span class="font-semibold {gain >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}">{formatCurrency(gain)}</span>
				</div>
			</div>
		</div>
	</div>

	<ToolContent
		{lang}
		toolName="ROI Calculator"
		toolUrl="https://sdk.bz/{lang}/roi"
		lastUpdated="2026-04-30"
		category="Finance Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sdk.bz/${lang}` },
			{ name: 'Tools', url: `https://sdk.bz/${lang}` },
			{ name: 'ROI Calculator', url: `https://sdk.bz/${lang}/roi` }
		]}
		content={toolContent}
	/>

	<ToolGuide {lang} sections={guideSections} />
</div>
