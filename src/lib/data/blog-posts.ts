import type { Locale } from '$lib/i18n';

export interface BlogPost {
	slug: string;
	title: Record<Locale, string>;
	description: Record<Locale, string>;
	content: Record<Locale, string>;
	date: string;
	category: string;
}

export const blogPosts: BlogPost[] = [
	{
		slug: 'dca-investment-strategy',
		title: { en: 'Dollar Cost Averaging (DCA) Investment Strategy Guide', ko: 'DCA 투자 전략 가이드', ja: 'ドルコスト平均法投資戦略ガイド', zh: '定投策略指南' },
		description: { en: 'Learn how DCA reduces risk and builds wealth over time.', ko: 'DCA가 어떻게 위험을 줄이고 시간이 지남에 따라 자산을 구축하는지 알아보세요.', ja: 'DCAがリスクを軽減し、時間とともに資産を築く方法を学びましょう。', zh: '了解定投如何降低风险并随时间积累财富。' },
		content: { en: `Dollar Cost Averaging (DCA) is an investment strategy where you invest a fixed amount regularly, regardless of market conditions.

## How DCA Works

Instead of investing a lump sum, you spread your investment over time:
- Invest $500 monthly
- Buy more shares when prices are low
- Buy fewer shares when prices are high
- Average out your purchase price

## Benefits of DCA

1. **Reduces timing risk** - No need to predict market movements
2. **Emotional discipline** - Removes fear and greed from decisions
3. **Accessibility** - Start with small amounts
4. **Compound growth** - Regular investments compound over time

## DCA Calculator Example

Monthly investment: $500
Duration: 10 years
Average return: 8%

**Result**: ~$91,000 (invested $60,000)

## When to Use DCA

- Long-term investing (5+ years)
- Volatile markets
- Building retirement funds
- Cryptocurrency investing

Use our DCA Calculator to plan your investment strategy.`, ko: `적립식 투자(DCA)는 시장 상황에 관계없이 정기적으로 일정 금액을 투자하는 전략입니다.

## DCA 작동 방식

일시불 투자 대신 시간에 걸쳐 투자를 분산합니다:
- 매월 50만원 투자
- 가격이 낮을 때 더 많은 주식 매수
- 가격이 높을 때 더 적은 주식 매수
- 평균 매수가 형성

## DCA의 장점

1. **타이밍 리스크 감소** - 시장 예측 불필요
2. **감정적 규율** - 두려움과 탐욕 제거
3. **접근성** - 소액으로 시작 가능
4. **복리 성장** - 정기 투자의 복리 효과

## DCA 계산 예시

월 투자금: 50만원
기간: 10년
평균 수익률: 8%

**결과**: 약 9,100만원 (투자금 6,000만원)

## DCA 활용 시기

- 장기 투자 (5년 이상)
- 변동성 큰 시장
- 은퇴 자금 마련
- 암호화폐 투자

DCA 계산기를 사용하여 투자 전략을 계획하세요.`, ja: `ドルコスト平均法（DCA）は、市場状況に関係なく定期的に一定額を投資する戦略です。

## DCAの仕組み

一括投資の代わりに、時間をかけて投資を分散：
- 毎月5万円投資
- 価格が低いときはより多くの株式を購入
- 価格が高いときはより少ない株式を購入
- 平均購入価格を形成

## DCAのメリット

1. **タイミングリスクの軽減** - 市場予測不要
2. **感情的規律** - 恐怖と欲を排除
3. **アクセシビリティ** - 少額から開始可能
4. **複利成長** - 定期投資の複利効果

DCA計算機を使って投資戦略を計画しましょう。`, zh: `定投（DCA）是一种无论市场状况如何都定期投资固定金额的策略。

## DCA 工作原理

不是一次性投资，而是分散投资：
- 每月投资 500 元
- 价格低时买入更多
- 价格高时买入更少
- 平均购买成本

## DCA 的优势

1. **降低择时风险** - 无需预测市场
2. **情绪纪律** - 消除恐惧和贪婪
3. **可及性** - 小额起步
4. **复利增长** - 定期投资的复利效应

使用我们的定投计算器规划您的投资策略。` },
		date: '2025-01-20', category: 'investment'
	},
	{
		slug: 'power-of-compound-interest',
		title: { en: 'The Power of Compound Interest in Investing', ko: '투자에서 복리의 힘', ja: '投資における複利の力', zh: '投资中复利的力量' },
		description: { en: 'Discover how compound interest can exponentially grow your investments.', ko: '복리가 어떻게 투자를 기하급수적으로 성장시키는지 알아보세요.', ja: '複利が投資をどのように指数関数的に成長させるかを発見しましょう。', zh: '了解复利如何让您的投资呈指数增长。' },
		content: { en: `Compound interest is interest earned on both principal and accumulated interest.

## The Compound Interest Formula

A = P(1 + r/n)^(nt)

- A = Final amount
- P = Principal
- r = Annual interest rate
- n = Compounding frequency
- t = Time in years

## Example: $10,000 at 7% for 30 years

| Compounding | Final Amount |
|-------------|--------------|
| Annually | $76,123 |
| Monthly | $81,165 |
| Daily | $81,662 |

## The Rule of 72

Years to double = 72 / Interest Rate

At 8%, your money doubles in ~9 years.

## Key Takeaways

1. Start early - time is crucial
2. Reinvest earnings
3. Higher frequency = more growth
4. Be patient

Use our Compound Interest Calculator to see your potential growth.`, ko: `복리는 원금과 누적 이자 모두에서 이자가 발생하는 것입니다.

## 복리 공식

A = P(1 + r/n)^(nt)

- A = 최종 금액
- P = 원금
- r = 연이율
- n = 복리 빈도
- t = 기간(년)

## 예시: 1,000만원을 7%로 30년

| 복리 빈도 | 최종 금액 |
|----------|----------|
| 연간 | 7,612만원 |
| 월간 | 8,117만원 |
| 일간 | 8,166만원 |

## 72의 법칙

두 배 소요 기간 = 72 / 이자율

8%에서 약 9년 만에 두 배가 됩니다.

복리 계산기를 사용하여 잠재적 성장을 확인하세요.`, ja: `複利とは、元本と蓄積された利息の両方に利息がつくことです。

## 複利の公式

A = P(1 + r/n)^(nt)

72の法則：2倍になる年数 = 72 / 金利

複利計算機を使って、潜在的な成長を確認しましょう。`, zh: `复利是本金和累积利息都产生利息。

## 复利公式

A = P(1 + r/n)^(nt)

72法则：翻倍年数 = 72 / 利率

使用我们的复利计算器查看您的潜在增长。` },
		date: '2025-01-19', category: 'finance'
	},
	{
		slug: 'roi-calculation-methods',
		title: { en: 'ROI Calculation Methods Explained', ko: 'ROI 계산 방법 설명', ja: 'ROI計算方法の解説', zh: 'ROI 计算方法详解' },
		description: { en: 'Learn different methods to calculate Return on Investment.', ko: '투자수익률을 계산하는 다양한 방법을 알아보세요.', ja: '投資収益率を計算するさまざまな方法を学びましょう。', zh: '学习计算投资回报率的不同方法。' },
		content: { en: `ROI (Return on Investment) measures the profitability of an investment.

## Basic ROI Formula

ROI = (Gain - Cost) / Cost × 100%

Example: Invest $1,000, sell for $1,500
ROI = ($1,500 - $1,000) / $1,000 × 100% = 50%

## Annualized ROI

For comparing investments of different durations:
Annualized ROI = ((1 + ROI)^(1/years) - 1) × 100%

## ROI vs Other Metrics

- **ROI**: Simple percentage return
- **IRR**: Accounts for time value of money
- **CAGR**: Smoothed annual growth rate

## Limitations of ROI

1. Doesn't account for time
2. Ignores risk
3. Can be manipulated
4. Doesn't include opportunity cost

Use our ROI Calculator for quick analysis.`, ko: `ROI(투자수익률)는 투자의 수익성을 측정합니다.

## 기본 ROI 공식

ROI = (이익 - 비용) / 비용 × 100%

예시: 100만원 투자, 150만원에 판매
ROI = (150만 - 100만) / 100만 × 100% = 50%

## 연환산 ROI

다른 기간의 투자를 비교하기 위해:
연환산 ROI = ((1 + ROI)^(1/년수) - 1) × 100%

ROI 계산기를 사용하여 빠르게 분석하세요.`, ja: `ROI（投資収益率）は投資の収益性を測定します。

## 基本的なROI公式

ROI = (利益 - コスト) / コスト × 100%

ROI計算機を使って素早く分析しましょう。`, zh: `ROI（投资回报率）衡量投资的盈利能力。

## 基本 ROI 公式

ROI = (收益 - 成本) / 成本 × 100%

使用我们的 ROI 计算器进行快速分析。` },
		date: '2025-01-18', category: 'finance'
	},
	{
		slug: 'staking-rewards-explained',
		title: { en: 'Understanding Cryptocurrency Staking Rewards', ko: '암호화폐 스테이킹 수익 이해하기', ja: '暗号通貨ステーキング報酬の理解', zh: '理解加密货币质押奖励' },
		description: { en: 'Learn how staking works and how to calculate your potential rewards.', ko: '스테이킹 작동 방식과 잠재적 수익 계산 방법을 알아보세요.', ja: 'ステーキングの仕組みと潜在的な報酬の計算方法を学びましょう。', zh: '了解质押的工作原理以及如何计算潜在奖励。' },
		content: { en: `Staking is the process of locking cryptocurrency to support network operations and earn rewards.

## How Staking Works

1. Lock your tokens in a staking contract
2. Validators use staked tokens to secure the network
3. Earn rewards proportional to your stake
4. Rewards are typically paid in the same token

## Staking Reward Calculation

Annual Reward = Staked Amount × APY

Example: 10 ETH staked at 5% APY
Annual Reward = 10 × 0.05 = 0.5 ETH

## Factors Affecting Rewards

- **APY**: Annual Percentage Yield
- **Lock-up period**: Longer = higher rewards
- **Network inflation**: Affects real returns
- **Validator performance**: Uptime matters

## Risks to Consider

1. Price volatility
2. Lock-up periods
3. Slashing penalties
4. Smart contract risks

Use our Staking Calculator to estimate your rewards.`, ko: `스테이킹은 네트워크 운영을 지원하고 보상을 얻기 위해 암호화폐를 잠그는 과정입니다.

## 스테이킹 작동 방식

1. 스테이킹 컨트랙트에 토큰 잠금
2. 검증자가 스테이킹된 토큰으로 네트워크 보안
3. 스테이킹 비율에 따른 보상 획득
4. 보상은 일반적으로 같은 토큰으로 지급

## 스테이킹 보상 계산

연간 보상 = 스테이킹 금액 × APY

예시: 10 ETH를 5% APY로 스테이킹
연간 보상 = 10 × 0.05 = 0.5 ETH

스테이킹 계산기를 사용하여 보상을 예측하세요.`, ja: `ステーキングは、ネットワーク運営をサポートし報酬を得るために暗号通貨をロックするプロセスです。

ステーキング計算機を使って報酬を見積もりましょう。`, zh: `质押是锁定加密货币以支持网络运营并获得奖励的过程。

使用我们的质押计算器估算您的奖励。` },
		date: '2025-01-17', category: 'crypto'
	},
	{
		slug: 'mining-profitability-analysis',
		title: { en: 'Cryptocurrency Mining Profitability Analysis', ko: '암호화폐 마이닝 수익성 분석', ja: '暗号通貨マイニング収益性分析', zh: '加密货币挖矿盈利能力分析' },
		description: { en: 'Calculate if crypto mining is profitable for you.', ko: '암호화폐 마이닝이 수익성이 있는지 계산해보세요.', ja: '暗号通貨マイニングが収益性があるかどうかを計算しましょう。', zh: '计算加密货币挖矿对您是否有利可图。' },
		content: { en: `Mining profitability depends on several factors that you need to calculate carefully.

## Profitability Formula

Daily Profit = (Hash Rate × Block Reward × Coin Price) / Network Difficulty - Electricity Cost

## Key Factors

1. **Hash rate**: Your mining power
2. **Electricity cost**: Major expense
3. **Hardware cost**: Initial investment
4. **Difficulty**: Network competition
5. **Coin price**: Market volatility

## Break-even Analysis

Calculate how long to recover your investment:
Break-even = Hardware Cost / Daily Profit

## Tips for Miners

- Compare electricity rates
- Consider hardware efficiency
- Account for cooling costs
- Monitor difficulty changes
- Diversify mining pools

Use our Mining Calculator to analyze profitability.`, ko: `마이닝 수익성은 신중하게 계산해야 하는 여러 요소에 따라 달라집니다.

## 수익성 공식

일일 수익 = (해시레이트 × 블록 보상 × 코인 가격) / 네트워크 난이도 - 전기료

## 주요 요소

1. **해시레이트**: 마이닝 파워
2. **전기료**: 주요 비용
3. **하드웨어 비용**: 초기 투자
4. **난이도**: 네트워크 경쟁
5. **코인 가격**: 시장 변동성

마이닝 계산기를 사용하여 수익성을 분석하세요.`, ja: `マイニングの収益性は、慎重に計算する必要がある複数の要因に依存します。

マイニング計算機を使って収益性を分析しましょう。`, zh: `挖矿盈利能力取决于需要仔细计算的几个因素。

使用我们的挖矿计算器分析盈利能力。` },
		date: '2025-01-16', category: 'crypto'
	},
	{
		slug: 'loan-repayment-strategies',
		title: { en: 'Effective Loan Repayment Strategies', ko: '효과적인 대출 상환 전략', ja: '効果的なローン返済戦略', zh: '有效的贷款还款策略' },
		description: { en: 'Learn strategies to pay off loans faster and save on interest.', ko: '대출을 더 빨리 갚고 이자를 절약하는 전략을 알아보세요.', ja: 'ローンをより早く返済し、利息を節約する戦略を学びましょう。', zh: '学习更快还清贷款并节省利息的策略。' },
		content: { en: `Smart repayment strategies can save you thousands in interest.

## Popular Strategies

### 1. Avalanche Method
Pay off highest interest rate first
- Saves most money
- Mathematically optimal

### 2. Snowball Method
Pay off smallest balance first
- Quick wins for motivation
- Psychological benefit

### 3. Bi-weekly Payments
Make half payments every two weeks
- 26 half payments = 13 full payments/year
- Reduces principal faster

## Extra Payment Impact

$200,000 loan at 6% for 30 years:
- Regular: $1,199/month, total interest $231,640
- Extra $200/month: Paid off in 22 years, saves $68,000

Use our Loan Calculator to compare strategies.`, ko: `현명한 상환 전략으로 수천만원의 이자를 절약할 수 있습니다.

## 인기 전략

### 1. 눈사태 방식
높은 이자율 대출 먼저 상환
- 가장 많은 돈 절약
- 수학적으로 최적

### 2. 눈덩이 방식
작은 잔액 먼저 상환
- 동기 부여를 위한 빠른 성과
- 심리적 이점

### 3. 격주 상환
2주마다 절반씩 상환
- 연간 26회 = 13회 전액 상환
- 원금 더 빠르게 감소

대출 계산기를 사용하여 전략을 비교하세요.`, ja: `スマートな返済戦略で利息を大幅に節約できます。

ローン計算機を使って戦略を比較しましょう。`, zh: `明智的还款策略可以为您节省大量利息。

使用我们的贷款计算器比较策略。` },
		date: '2025-01-15', category: 'finance'
	},
	{
		slug: 'investment-returns-comparison',
		title: { en: 'Comparing Investment Returns Across Asset Classes', ko: '자산 클래스별 투자 수익률 비교', ja: '資産クラス別投資収益率の比較', zh: '跨资产类别的投资回报比较' },
		description: { en: 'Compare historical returns of stocks, bonds, real estate, and crypto.', ko: '주식, 채권, 부동산, 암호화폐의 역사적 수익률을 비교하세요.', ja: '株式、債券、不動産、暗号通貨の過去のリターンを比較しましょう。', zh: '比较股票、债券、房地产和加密货币的历史回报。' },
		content: { en: `Understanding historical returns helps make informed investment decisions.

## Average Annual Returns (Historical)

| Asset Class | 10-Year Avg | Risk Level |
|-------------|-------------|------------|
| S&P 500 | 10-12% | Medium |
| Bonds | 3-5% | Low |
| Real Estate | 8-10% | Medium |
| Crypto | Highly Variable | Very High |

## Risk vs Return

Higher potential returns = Higher risk

## Diversification Benefits

Don't put all eggs in one basket:
- Reduce overall portfolio risk
- Smooth out returns over time
- Capture gains from multiple sources

## Key Metrics to Compare

1. **CAGR**: Compound Annual Growth Rate
2. **Sharpe Ratio**: Risk-adjusted returns
3. **Max Drawdown**: Largest peak-to-trough decline

Use our Investment Calculator to compare scenarios.`, ko: `역사적 수익률을 이해하면 현명한 투자 결정을 내릴 수 있습니다.

## 평균 연간 수익률 (역사적)

| 자산 클래스 | 10년 평균 | 위험 수준 |
|------------|----------|----------|
| S&P 500 | 10-12% | 중간 |
| 채권 | 3-5% | 낮음 |
| 부동산 | 8-10% | 중간 |
| 암호화폐 | 매우 변동적 | 매우 높음 |

투자 계산기를 사용하여 시나리오를 비교하세요.`, ja: `過去のリターンを理解することで、情報に基づいた投資判断ができます。

投資計算機を使ってシナリオを比較しましょう。`, zh: `了解历史回报有助于做出明智的投资决策。

使用我们的投资计算器比较不同情景。` },
		date: '2025-01-14', category: 'investment'
	},
	{
		slug: 'crypto-tax-calculation',
		title: { en: 'Cryptocurrency Tax Calculation Guide', ko: '암호화폐 세금 계산 가이드', ja: '暗号通貨税金計算ガイド', zh: '加密货币税务计算指南' },
		description: { en: 'Understand how cryptocurrency taxes work and how to calculate them.', ko: '암호화폐 세금이 어떻게 작동하는지, 어떻게 계산하는지 이해하세요.', ja: '暗号通貨の税金の仕組みと計算方法を理解しましょう。', zh: '了解加密货币税收如何运作以及如何计算。' },
		content: { en: `Cryptocurrency transactions may be taxable events. Here's what you need to know.

## Taxable Events

1. **Selling crypto for fiat**
2. **Trading crypto for crypto**
3. **Using crypto for purchases**
4. **Receiving mining/staking rewards**

## Capital Gains Calculation

Gain/Loss = Sale Price - Cost Basis

Cost Basis Methods:
- FIFO (First In, First Out)
- LIFO (Last In, First Out)
- Specific Identification

## Short-term vs Long-term

- **Short-term**: Held < 1 year (ordinary income rates)
- **Long-term**: Held > 1 year (lower capital gains rates)

## Record Keeping

Track for each transaction:
- Date acquired
- Cost basis
- Date sold
- Sale price
- Fees

Use our Crypto Tax Calculator to estimate your liability.`, ko: `암호화폐 거래는 과세 대상이 될 수 있습니다. 알아야 할 사항입니다.

## 과세 대상 이벤트

1. **암호화폐를 법정화폐로 판매**
2. **암호화폐 간 거래**
3. **암호화폐로 구매**
4. **마이닝/스테이킹 보상 수령**

## 자본이득 계산

이득/손실 = 판매가 - 취득원가

암호화폐 세금 계산기를 사용하여 납부액을 추정하세요.`, ja: `暗号通貨取引は課税対象となる場合があります。

暗号通貨税金計算機を使って納税額を見積もりましょう。`, zh: `加密货币交易可能是应税事件。

使用我们的加密货币税务计算器估算您的纳税义务。` },
		date: '2025-01-13', category: 'crypto'
	},
	{
		slug: 'portfolio-rebalancing',
		title: { en: 'Portfolio Rebalancing: When and How', ko: '포트폴리오 리밸런싱: 시기와 방법', ja: 'ポートフォリオリバランス：いつ、どのように', zh: '投资组合再平衡：何时以及如何' },
		description: { en: 'Learn when to rebalance your portfolio and the best methods.', ko: '포트폴리오를 언제 리밸런싱해야 하는지와 최선의 방법을 알아보세요.', ja: 'ポートフォリオをいつリバランスすべきか、最善の方法を学びましょう。', zh: '了解何时重新平衡您的投资组合以及最佳方法。' },
		content: { en: `Rebalancing maintains your target asset allocation over time.

## Why Rebalance?

As investments grow at different rates, your allocation drifts from targets:
- 60/40 stocks/bonds might become 70/30
- Risk profile changes unintentionally
- Rebalancing restores your plan

## Rebalancing Strategies

### Time-based
- Quarterly, semi-annually, or annually
- Simple and consistent

### Threshold-based
- Rebalance when allocation drifts 5%+
- More responsive to market moves

### Hybrid
- Check quarterly, act on 5% threshold
- Best of both approaches

## Tax Considerations

- Use new contributions to rebalance
- Rebalance in tax-advantaged accounts first
- Consider tax-loss harvesting

Use our Portfolio Calculator to track your allocation.`, ko: `리밸런싱은 시간이 지남에 따라 목표 자산 배분을 유지합니다.

## 왜 리밸런싱할까?

투자가 다른 속도로 성장하면 배분이 목표에서 벗어납니다:
- 60/40 주식/채권이 70/30이 될 수 있음
- 의도치 않게 리스크 프로필 변경
- 리밸런싱으로 계획 복원

## 리밸런싱 전략

### 시간 기반
- 분기별, 반기별 또는 연간
- 간단하고 일관됨

### 임계값 기반
- 배분이 5% 이상 벗어나면 리밸런싱
- 시장 움직임에 더 민감하게 대응

포트폴리오 계산기를 사용하여 배분을 추적하세요.`, ja: `リバランスは、時間の経過とともに目標資産配分を維持します。

ポートフォリオ計算機を使って配分を追跡しましょう。`, zh: `再平衡可以在一段时间内保持您的目标资产配置。

使用我们的投资组合计算器跟踪您的配置。` },
		date: '2025-01-12', category: 'investment'
	},
	{
		slug: 'financial-goal-setting',
		title: { en: 'Setting and Achieving Financial Goals', ko: '금융 목표 설정 및 달성', ja: '財務目標の設定と達成', zh: '设定和实现财务目标' },
		description: { en: 'Learn the SMART framework for setting achievable financial goals.', ko: '달성 가능한 금융 목표를 설정하기 위한 SMART 프레임워크를 알아보세요.', ja: '達成可能な財務目標を設定するためのSMARTフレームワークを学びましょう。', zh: '学习用于设定可实现财务目标的 SMART 框架。' },
		content: { en: `Clear financial goals are the foundation of wealth building.

## SMART Goals Framework

- **S**pecific: "Save $50,000 for down payment"
- **M**easurable: Track progress monthly
- **A**chievable: Based on income and expenses
- **R**elevant: Aligned with life priorities
- **T**ime-bound: "By December 2026"

## Common Financial Goals

1. Emergency fund (3-6 months expenses)
2. Debt payoff
3. Down payment for home
4. Retirement savings
5. Children's education
6. Investment portfolio

## Goal Prioritization

1. Basic emergency fund first
2. High-interest debt payoff
3. Full emergency fund
4. Retirement contributions
5. Other goals

## Tracking Progress

- Review monthly
- Celebrate milestones
- Adjust as needed
- Stay motivated

Use our Financial Calculator to plan your goals.`, ko: `명확한 금융 목표는 자산 구축의 기초입니다.

## SMART 목표 프레임워크

- **S**pecific (구체적): "계약금으로 5천만원 저축"
- **M**easurable (측정 가능): 매월 진행 상황 추적
- **A**chievable (달성 가능): 수입과 지출 기반
- **R**elevant (관련성): 삶의 우선순위와 일치
- **T**ime-bound (기한): "2026년 12월까지"

## 일반적인 금융 목표

1. 비상 자금 (3-6개월 지출)
2. 부채 상환
3. 주택 계약금
4. 은퇴 저축
5. 자녀 교육
6. 투자 포트폴리오

금융 계산기를 사용하여 목표를 계획하세요.`, ja: `明確な財務目標は、資産形成の基盤です。

財務計算機を使って目標を計画しましょう。`, zh: `明确的财务目标是财富积累的基础。

使用我们的财务计算器规划您的目标。` },
		date: '2025-01-11', category: 'finance'
	}
];

export function getBlogPost(slug: string): BlogPost | undefined {
	return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
	return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
