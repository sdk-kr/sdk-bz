<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';
	import ToolGuide from '$lib/components/ToolGuide.svelte';

	const guideSections = [
		{
			heading: {
				en: 'Slashing — How Validators Lose Your Money',
				ko: '슬래싱 — 검증자가 당신의 자산을 잃는 방식'
			},
			body: {
				en: `In Proof-of-Stake networks, slashing is the protocol-enforced mechanism that destroys staked tokens when validators misbehave. It is the reason a "10% APY" advertisement is never the whole story — the realized return must be discounted by the probability and severity of slashing events. Most retail stakers are unaware of the magnitude of this risk because the marketing copy never mentions it.

Ethereum's slashing rules are codified in the consensus specification (github.com/ethereum/consensus-specs). Three offenses trigger penalties: (1) double-proposing — signing two different blocks for the same slot; (2) double-attesting — voting for two conflicting blocks; (3) surround voting — submitting an attestation that surrounds another attestation. The minimum slashing penalty is 1/32 of the validator's effective balance (about 1 ETH on a 32 ETH stake), and the validator is forced to exit. A correlation penalty applies when many validators are slashed in the same epoch — if 33% of total stake is slashed within ~36 days, the correlation penalty can destroy 100% of the staked balance. This is intentional: the network punishes coordinated attacks more harshly than isolated mistakes.

Real-world incidents have happened. In June 2023, Coinbase Prime acknowledged that a configuration error led to a small slashing event affecting Ethereum validators it operated. In May 2023, more than 70 Ethereum validators were slashed simultaneously due to a misconfigured key signer. In January 2024, a Lido node operator (Launchnodes) had ~20 validators slashed due to a sentry-node error. Each of these reduced retail stakers' balances. The Beaconcha.in dashboard (beaconcha.in) maintains a public registry of every slashing event on Ethereum, with cumulative count exceeding 500 by mid-2024.

Other PoS chains have different rules. Cosmos (Cosmos Hub, Osmosis, etc.) uses a 5% slashing penalty for double-signing and 0.01% for being offline beyond a threshold; the validator is jailed and must manually unjail. Polkadot levies up to 100% slashing for severe offenses, with parameters set by governance. Solana does not currently slash but levies opportunity-cost penalties for missing votes; slashing has been a roadmap item since 2022. Avalanche, Near, and Algorand each have their own enforcement curves. Read the protocol's whitepaper or governance proposals before delegating.

Mitigation strategies for retail stakers: (1) Diversify across multiple validators and operators — concentration of stake with a single operator increases correlation risk. (2) Use insured staking products (Lido has a slashing reimbursement fund; Coinbase has internal insurance for institutional clients but not retail). (3) Avoid validators with low uptime histories or recent slashing incidents. Public dashboards like Rated Network (rated.network) score validator performance. (4) Understand that "non-custodial" staking via a delegation does not transfer slashing risk to the operator — the staked tokens are yours and they are slashed.

Educational only. Cryptocurrency investments carry significant risk including total loss. Not financial advice — consult a licensed advisor and review the specific protocol's documentation before staking.`,
				ko: `Proof-of-Stake 네트워크에서 슬래싱은 검증자가 잘못된 행위를 했을 때 스테이킹된 토큰을 프로토콜이 강제로 소각하는 메커니즘입니다. "10% APY" 광고가 결코 전부가 아닌 이유 — 실현 수익은 슬래싱 이벤트의 확률과 강도로 할인되어야 합니다. 마케팅 문구가 언급하지 않기 때문에, 대부분의 소매 스테이커는 이 리스크의 규모를 모릅니다.

Ethereum의 슬래싱 규칙은 합의 명세(github.com/ethereum/consensus-specs)에 명문화되어 있습니다. 세 가지 위반이 처벌됩니다 — (1) 더블 프로포저 — 같은 슬롯에 다른 두 블록 서명; (2) 더블 어테스트 — 충돌하는 두 블록에 투표; (3) 서라운드 보팅 — 다른 어테스테이션을 둘러싸는 어테스테이션 제출. 최소 슬래싱은 검증자 유효 잔액의 1/32(32 ETH 스테이크 기준 약 1 ETH)이고 검증자는 강제 퇴출됩니다. 같은 epoch에 다수 검증자가 슬래싱되면 상관 페널티가 적용 — 약 36일 안에 전체 스테이크의 33%가 슬래싱되면 상관 페널티가 잔액 100%를 파괴할 수 있습니다. 의도적입니다 — 네트워크는 조직적 공격을 고립된 실수보다 훨씬 가혹하게 처벌합니다.

실제 사례가 있습니다. 2023년 6월, Coinbase Prime은 운영 중인 Ethereum 검증자에 영향을 준 작은 슬래싱이 설정 오류로 발생했음을 인정했습니다. 2023년 5월, 잘못 설정된 키 서명자로 인해 Ethereum 검증자 70여 개가 동시에 슬래싱되었습니다. 2024년 1월, Lido 노드 운영사(Launchnodes)의 검증자 약 20개가 sentry-node 오류로 슬래싱되었습니다. 각 사건이 소매 스테이커의 잔액을 줄였습니다. Beaconcha.in 대시보드(beaconcha.in)는 Ethereum의 모든 슬래싱 이벤트 공개 레지스트리를 유지하며, 2024년 중반 누적 500건을 넘었습니다.

다른 PoS 체인은 규칙이 다릅니다. Cosmos(Cosmos Hub, Osmosis 등)는 더블 서명 5%, 임계 초과 오프라인 0.01% 슬래싱 — 검증자는 jailed 되며 수동으로 unjail 해야 합니다. Polkadot은 중대 위반에 최대 100% 슬래싱, 파라미터는 거버넌스로 설정. Solana는 현재 슬래싱하지 않지만 누락 투표에 기회비용 페널티를 부과 — 슬래싱은 2022년 이후 로드맵 항목. Avalanche, Near, Algorand 각자 고유한 처벌 곡선을 갖습니다. 위임 전 프로토콜의 백서나 거버넌스 제안을 읽으세요.

소매 스테이커의 완화 전략 — (1) 여러 검증자와 운영사로 분산 — 단일 운영사 집중은 상관 위험을 키웁니다. (2) 보험형 스테이킹 상품 사용(Lido는 슬래싱 보상 기금 운영, Coinbase는 기관 고객 내부 보험은 있지만 소매는 없음). (3) 가동률이 낮거나 최근 슬래싱 이력이 있는 검증자는 회피. Rated Network(rated.network) 같은 공개 대시보드가 검증자 성과를 점수화합니다. (4) 위임을 통한 "비커스터디" 스테이킹은 슬래싱 위험을 운영사로 이전하지 않음을 이해하세요 — 스테이킹된 토큰은 당신 것이며, 그것이 슬래싱됩니다.

본 콘텐츠는 교육용입니다. 암호화폐 투자는 전액 손실 가능성을 포함한 중대한 위험을 수반합니다. 재무 자문이 아니므로, 면허 있는 자문가와 상담하고 해당 프로토콜의 문서를 검토한 후 스테이킹하세요.`
			}
		},
		{
			heading: {
				en: 'Liquid Staking vs Native Staking — Lido / Rocket Pool',
				ko: 'Liquid Staking vs Native Staking — Lido / Rocket Pool'
			},
			body: {
				en: `Native staking on Ethereum requires running (or delegating to) a validator with 32 ETH locked. The capital cost (~$80,000+ at common ETH prices) and technical complexity exclude most retail users. Liquid staking solves both — pool small amounts together, hand operations to professional node operators, and issue a transferable token (LST) that represents your stake plus accrued rewards. The LST trades freely while the underlying ETH stays locked.

Lido (lido.fi) is the dominant liquid staking protocol — issuing stETH for Ethereum staking. As of 2026, Lido controls roughly 28% of all staked Ethereum, totaling more than 9 million ETH. Users deposit ETH, receive stETH 1:1, and the stETH balance rebases daily to reflect accrued rewards. Lido charges a 10% fee on staking rewards (split between node operators and the DAO treasury). The protocol uses ~30 professional node operators distributed globally; concentration concerns have led the community to push for "DVT" (Distributed Validator Technology) to spread keys across multiple machines.

Rocket Pool (rocketpool.net) takes a different approach — anyone with 8 ETH (lowered from 16 ETH after the Atlas upgrade) can run a node, with Rocket Pool topping up to 32 ETH from the rETH pool. Node operators stake additional RPL tokens as collateral against slashing. Users deposit ETH, receive rETH at a non-rebasing exchange rate that accrues value over time. Rocket Pool fees are 5–20% (operator-controlled) plus a small protocol cut. The decentralization story is stronger than Lido's — over 3,000 distinct node operators — but TVL is smaller (~1.2M ETH).

Trade-offs vs native: (1) Convenience — deposits in seconds, no node operations, no minimum 32 ETH; (2) Liquidity — LSTs trade on DEXes (Curve, Uniswap), letting you exit without waiting in the protocol's exit queue; (3) Composability — stETH/rETH can be deposited as collateral on Aave, Maker, Spark, etc. for additional yield, though this adds liquidation risk. The trade-offs: (1) Smart contract risk — bugs in the staking contract can drain funds, with no recovery (Lido has been audited extensively but is not risk-free); (2) Depeg risk — stETH famously traded down to 0.94 ETH during the Three Arrows Capital and Celsius collapse in June 2022, recovering only after the Shapella upgrade enabled withdrawals in April 2023; (3) Governance / centralization — LDO and RPL token holders set parameters, and a hostile governance takeover could change incentives.

Centralization concerns are real. Ethereum researchers including Vitalik Buterin have written extensively that Lido approaching 33% of total stake creates systemic risk — at 33%+ a coordinating actor can prevent finality, at 50%+ they can censor transactions, at 66%+ they can finalize fraudulent blocks. The Lido DAO has explicitly committed to a "self-limit" target but has not implemented hard caps. EigenLayer-based "restaking" adds yet another layer where LST holders can re-pledge tokens for additional yield — multiplying both rewards and slashing exposure.

Educational only. The cryptocurrency staking landscape changes monthly. Read each protocol's documentation, recent audits, and governance forum before allocating. Not financial advice — past returns do not predict future yields. Consult a licensed advisor.`,
				ko: `Ethereum 네이티브 스테이킹은 검증자(직접 또는 위임)에 32 ETH 잠금이 필요합니다. 자본 비용(통상 ETH 가격에서 약 $80,000+)과 기술적 복잡성으로 대부분의 소매 사용자는 배제됩니다. Liquid staking이 둘 다 해결합니다 — 작은 단위를 풀로 합치고, 운영을 전문 노드 운영사에 맡기고, 스테이크와 누적 보상을 나타내는 양도 가능한 토큰(LST)을 발행합니다. LST는 자유롭게 거래되고 기초 ETH는 잠긴 상태입니다.

Lido(lido.fi)는 Ethereum 스테이킹 분야의 지배적 프로토콜로 — stETH를 발행합니다. 2026년 기준 Lido는 전체 스테이킹된 ETH의 약 28%를 점유하며 9백만 ETH를 넘습니다. 사용자는 ETH를 예치하고 stETH 1:1로 받으며, stETH 잔액은 매일 리베이스되어 누적 보상을 반영합니다. Lido는 스테이킹 보상의 10% 수수료(노드 운영사와 DAO 트레저리에 분배). 프로토콜은 전 세계에 분산된 약 30개의 전문 노드 운영사를 사용합니다 — 집중 우려로 커뮤니티는 "DVT"(분산 검증자 기술)로 키를 다수 머신에 분산하는 방향을 추진합니다.

Rocket Pool(rocketpool.net)은 다른 접근입니다 — 8 ETH(Atlas 업그레이드 이후 16 ETH에서 인하)만 있으면 누구나 노드를 운영할 수 있고, Rocket Pool이 rETH 풀에서 32 ETH까지 채워줍니다. 노드 운영사는 슬래싱에 대비해 RPL 토큰을 추가 담보로 스테이킹합니다. 사용자는 ETH를 예치하고 시간에 따라 가치가 누적되는 비리베이스 환율의 rETH를 받습니다. Rocket Pool 수수료는 5~20%(운영사 결정) + 작은 프로토콜 컷. 탈중앙화 스토리는 Lido보다 강합니다 — 3,000개 이상의 별도 노드 운영사 — TVL은 더 작습니다(약 120만 ETH).

네이티브와의 트레이드오프 — (1) 편의성 — 초 단위 예치, 노드 운영 없음, 32 ETH 최소 한도 없음; (2) 유동성 — LST는 DEX(Curve, Uniswap)에서 거래되어 프로토콜 퇴출 큐를 기다리지 않고 빠져나갈 수 있음; (3) 컴포저빌리티 — stETH/rETH를 Aave, Maker, Spark 등에 담보로 예치해 추가 수익 — 단 청산 위험 추가. 단점 — (1) 스마트컨트랙트 위험 — 스테이킹 컨트랙트 버그로 자금 유출 가능, 회수 불가(Lido는 광범위한 감사를 받았지만 무위험은 아님); (2) 디페그 위험 — 2022년 6월 Three Arrows Capital, Celsius 붕괴 시 stETH가 0.94 ETH까지 거래되었고 — 2023년 4월 Shapella 업그레이드로 인출이 활성화된 후 회복; (3) 거버넌스/집중화 — LDO와 RPL 토큰 보유자가 파라미터를 설정하며, 적대적 거버넌스 인수가 인센티브를 변경할 수 있음.

집중화 우려는 실재합니다. Vitalik Buterin을 포함한 Ethereum 연구자들은 Lido가 전체 스테이크의 33%에 접근하면 시스템 위험이 생긴다고 광범위하게 기록했습니다 — 33%+ 시 조정 행위자가 finality를 막을 수 있고, 50%+ 시 거래 검열, 66%+ 시 사기 블록 finalize 가능. Lido DAO는 명시적으로 "자체 제한" 목표를 약속했지만 하드캡은 구현하지 않았습니다. EigenLayer 기반 "restaking"은 또 다른 층을 추가 — LST 보유자가 토큰을 재서약하여 추가 수익을 얻을 수 있으며, 보상과 슬래싱 노출이 동시에 증식됩니다.

본 콘텐츠는 교육용입니다. 암호화폐 스테이킹 환경은 매달 변합니다. 자금 배분 전 각 프로토콜의 문서, 최근 감사, 거버넌스 포럼을 읽으세요. 재무 자문이 아니며, 과거 수익은 미래 이자율을 예측하지 않습니다. 면허 있는 자문가와 상담하세요.`
			}
		},
		{
			heading: {
				en: 'Tax Treatment of Staking Rewards (US/KR)',
				ko: '스테이킹 보상의 세제 처리 (미국/한국)'
			},
			body: {
				en: `Staking rewards generate two distinct tax events in most jurisdictions, and confusing them is the most common compliance mistake among retail crypto holders. Get this wrong and you can owe tax on phantom income, miss legitimate cost-basis adjustments, or face penalties on amended returns.

United States. The IRS issued Revenue Ruling 2023-14 (irs.gov) which definitively states that staking rewards are taxable as ordinary income at the time the taxpayer gains "dominion and control" — meaning the moment the rewards become spendable, transferable, or sellable. The fair market value (FMV) on the date of receipt becomes both the income amount and the cost basis for the rewarded tokens. When you later dispose of those tokens, capital gain or loss is computed against that cost basis. Lido's stETH rebasing model and Rocket Pool's rETH appreciating model trigger income at different moments per most tax practitioner readings — daily for Lido, on disposal for Rocket Pool — though IRS has not issued specific guidance on rebasing tokens.

Forms involved: Schedule 1 (Additional Income) for the ordinary-income recognition; Schedule D and Form 8949 for the capital gain/loss when sold. The IRS expanded the digital asset question on Form 1040 starting tax year 2022, and brokers must issue Form 1099-DA starting in 2025 (originally 2024 — delayed). Self-custody stakers must track their own basis. Software like CoinTracker, Koinly, and TaxBit imports staking transaction histories, but the underlying tax positions are the taxpayer's responsibility.

A landmark case to know: Jarrett v. United States. Joshua Jarrett sued the IRS in 2021 arguing that staking rewards he created via Tezos should be treated like crops or manufactured goods (taxable on disposal, not creation). The IRS issued him a refund without conceding the legal point, and the court dismissed for mootness. The IRS Revenue Ruling 2023-14 was issued partly in response and explicitly rejects the Jarrett theory — staking is taxable as income on receipt, not on disposal. Some tax attorneys believe the issue may eventually return to court, but as of 2026 the IRS position is binding for compliance purposes.

Korea. South Korea has repeatedly delayed the implementation of cryptocurrency taxation. The Income Tax Act amendment originally scheduled crypto gains to be taxed at 20% (above a 2.5M KRW annual exemption) starting 2022, but successive deferrals have pushed implementation to 2027 (per the 2024 tax-law amendment). When implemented, staking rewards will likely be classified as "기타소득" (other income) under Article 21 of the Income Tax Act, taxed at the time of receipt at fair market value. The National Tax Service (NTS, hometax.go.kr) has issued informal guidance suggesting parallel treatment to U.S. rules, but until the law takes effect formal guidance is limited.

International considerations: Germany's BMF treats staking rewards as taxable on receipt but offers a 1-year holding period exemption for the staked tokens themselves (zero capital gains if held > 1 year and not actively traded). The U.K. HMRC published guidance in 2022 distinguishing between "miscellaneous income" (most retail) and "trading income" (frequent commercial activity). Singapore taxes staking rewards as ordinary income for trading entities but typically not for hobbyist individuals. Australia's ATO treats rewards as ordinary income at receipt, similar to U.S.

Practical compliance: keep timestamped records of every staking reward (timestamp, USD or local-currency FMV at that moment, the source protocol, and your wallet address). Use multiple data sources — exchange-reported numbers do not always match on-chain records. Reconcile annually before filing. This is educational only — not tax advice. Consult a CPA, tax attorney, or registered tax professional before filing returns involving staking activity.`,
				ko: `스테이킹 보상은 대부분의 관할권에서 두 가지 별도 과세 사건을 발생시키며, 이를 혼동하는 것이 소매 암호화폐 보유자의 가장 흔한 컴플라이언스 실수입니다. 잘못하면 가상의 소득에 세금을 내거나, 정당한 취득원가 조정을 놓치거나, 수정 신고에서 가산세를 부담할 수 있습니다.

미국. IRS는 Revenue Ruling 2023-14(irs.gov)에서 스테이킹 보상이 납세자가 "지배와 통제권"을 얻는 시점 — 즉 보상이 사용·이전·매도 가능해지는 순간 — 에 일반 소득으로 과세된다고 명시했습니다. 수령일의 공정시장가치(FMV)가 그 시점의 소득금액이자 보상 토큰의 취득원가가 됩니다. 이후 처분 시점에는 그 취득원가 기준으로 자본이득/손실을 계산합니다. Lido의 stETH 리베이스 모델과 Rocket Pool의 rETH 가치 상승 모델은 — 대부분의 세무 전문가 해석상 — 다른 시점에 소득을 트리거합니다. Lido는 매일, Rocket Pool은 처분 시 — 다만 IRS는 리베이스 토큰에 대한 구체 가이드를 아직 발표하지 않았습니다.

관련 양식 — Schedule 1(추가 소득)은 일반소득 인식, Schedule D와 Form 8949는 매도 시 자본이득/손실. IRS는 2022년 과세연도부터 Form 1040의 디지털 자산 질문을 확장했고, 중개인은 2025년부터(원래 2024년 — 연기) Form 1099-DA를 발급해야 합니다. 자기 보관 스테이커는 본인의 취득원가를 직접 관리해야 합니다. CoinTracker, Koinly, TaxBit 같은 소프트웨어가 스테이킹 거래 이력을 가져오지만, 기저 세무 입장은 납세자의 책임입니다.

알아둘 판례 — Jarrett v. United States. Joshua Jarrett은 2021년 Tezos로 만든 스테이킹 보상이 농작물이나 제조품처럼 — 생성이 아닌 처분 시 과세 — 처리되어야 한다고 IRS를 상대로 소송했습니다. IRS는 법리를 인정하지 않고 환급해주었고, 법원은 무쟁점으로 기각했습니다. IRS Revenue Ruling 2023-14은 부분적으로 이에 대한 응답이며 — 스테이킹은 처분이 아닌 수령 시 소득 과세 — Jarrett 이론을 명시적으로 거부합니다. 일부 세무 변호사는 이슈가 다시 법정으로 돌아올 수 있다고 보지만, 2026년 기준 IRS 입장이 컴플라이언스에 구속력 있습니다.

대한민국. 한국은 암호화폐 과세 시행을 반복적으로 연기해왔습니다. 소득세법 개정안은 원래 2022년부터 암호화폐 양도소득에 20% 세율(연 250만 원 기본공제 초과분) 과세를 예정했으나, 연속 유예로 2027년까지 미뤄졌습니다(2024년 세법 개정 기준). 시행되면 스테이킹 보상은 소득세법 제21조의 "기타소득"으로 분류되어 수령 시점 시가로 과세될 가능성이 높습니다. 국세청(NTS, hometax.go.kr)은 미국 규정과 평행한 처리를 시사하는 비공식 가이드를 냈지만, 법 시행 전에는 공식 지침이 제한적입니다.

국제 고려 사항 — 독일 BMF는 스테이킹 보상을 수령 시 과세하지만 스테이킹된 토큰 자체에는 1년 보유 면제(1년 이상 보유 + 활발한 거래 없음 시 자본이득 0) 제공. 영국 HMRC는 2022년 가이드에서 "기타 소득"(소매 대부분)과 "거래 소득"(빈번한 상업적 활동)을 구분. 싱가포르는 거래 법인의 스테이킹 보상을 일반 소득으로 과세하지만 취미 개인은 보통 비과세. 호주 ATO는 미국과 유사하게 수령 시 일반 소득으로 처리.

실무 컴플라이언스 — 모든 스테이킹 보상의 타임스탬프 기록(시각, 그 시점의 USD 또는 자국 통화 FMV, 출처 프로토콜, 지갑 주소)을 유지하세요. 거래소 보고 숫자가 항상 온체인 기록과 일치하지는 않으므로 다중 데이터 소스 사용. 신고 전 연간 대조. 본 콘텐츠는 교육용이며 세무 자문이 아닙니다. 스테이킹 활동이 포함된 신고서 제출 전 회계사, 세무 변호사, 또는 등록 세무 전문가와 상담하세요.`
			}
		}
	];

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	const toolContent = {
		about: {
			en: 'The staking calculator estimates token rewards over a chosen period given a staked amount, current token price, and APY (annual percentage yield). It supports both simple and compounded reward modes. Real APY varies with network conditions, validator performance, lock-up rules, and slashing risk. This tool is provided for educational purposes only and is not financial advice or a guarantee of staking yield.',
			ko: '스테이킹 계산기는 스테이킹 수량, 현재 토큰 가격, APY(연 환산 수익률)를 사용해 선택한 기간 동안의 보상을 추정합니다. 단순 보상과 복리 보상 모드를 지원합니다. 실제 APY는 네트워크 상황, 검증자 성과, 락업 정책, 슬래싱 위험에 따라 달라집니다. 본 도구는 교육 목적으로만 제공되며 재무 자문이나 스테이킹 수익 보장이 아닙니다.',
			ja: 'ステーキング計算機は、ステーク量、現在のトークン価格、APY(年率)から選択期間の報酬を推定します。単利と複利の両モードに対応。実際のAPYはネットワーク状況、バリデーター成績、ロック規則、スラッシングリスクで変動します。本ツールは教育目的のみで、金融アドバイスやステーキング利回りの保証ではありません。',
			zh: '质押计算器根据质押数量、当前代币价格和APY(年化收益率)估算所选期间的代币奖励，支持简单与复利两种模式。真实APY受网络状况、验证者表现、锁定规则和罚没风险影响。本工具仅供教育用途，不是财务建议或质押收益保证。'
		},
		howTo: {
			en: [
				'Enter the amount of tokens you plan to stake.',
				'Enter the current token price in USD.',
				'Enter the APY (annual percentage yield) advertised by the network or validator.',
				'Set the staking period in days.',
				'Toggle compound rewards if rewards are auto-restaked, then review the projection.'
			],
			ko: [
				'스테이킹할 토큰 수량을 입력합니다.',
				'현재 토큰 가격(USD)을 입력합니다.',
				'네트워크나 검증자가 제시한 APY를 입력합니다.',
				'스테이킹 기간(일)을 설정합니다.',
				'보상이 자동 재스테이킹되면 복리 옵션을 켜고 결과를 확인합니다.'
			],
			ja: [
				'ステーキングするトークン数量を入力します。',
				'現在のトークン価格(USD)を入力します。',
				'ネットワークやバリデーターが提示するAPYを入力します。',
				'ステーキング期間(日数)を設定します。',
				'報酬が自動再ステーキングされる場合は複利オプションをオンにして結果を確認します。'
			],
			zh: [
				'输入计划质押的代币数量。',
				'输入当前代币价格 (美元)。',
				'输入网络或验证者公布的APY (年化收益率)。',
				'设定质押天数。',
				'若奖励自动复投请开启复利选项，然后查看预测结果。'
			]
		},
		useCases: {
			en: [
				'Estimate staking yield for popular networks like Ethereum, Solana, or Cardano.',
				'Compare an exchange staking program with self-custody validator staking.',
				'See how compounding rewards changes total return over a year.',
				'Plan staking allocation as part of a broader portfolio strategy.',
				'Educational example for understanding APY versus APR in DeFi.'
			],
			ko: [
				'이더리움, 솔라나, 카르다노 등 주요 네트워크의 스테이킹 수익 추정',
				'거래소 스테이킹과 자체 검증인 스테이킹 비교',
				'복리 보상이 1년 총 수익에 미치는 영향 확인',
				'포트폴리오 전략 내 스테이킹 비중 계획',
				'DeFi의 APY와 APR 차이 학습'
			],
			ja: [
				'イーサリアム、ソラナ、カルダノなど主要ネットワークのステーキング利回り推定',
				'取引所ステーキングと自己保管バリデーターステーキングの比較',
				'複利が年間総リターンに与える影響の確認',
				'ポートフォリオ戦略内のステーキング配分の計画',
				'DeFiにおけるAPYとAPRの違いの学習'
			],
			zh: [
				'估算以太坊、Solana、Cardano等主流网络的质押收益',
				'比较交易所质押与自托管验证者质押',
				'查看复利奖励对一年总回报的影响',
				'在整体组合策略中规划质押配比',
				'用于理解DeFi中APY与APR的差异'
			]
		},
		faq: {
			en: [
				{ q: 'Is this financial advice?', a: 'No. This calculator is for educational purposes only and does not constitute financial, investment, or crypto advice. Staking can result in loss of principal due to slashing, lock-ups, or token price decline.' },
				{ q: 'Is APY guaranteed?', a: 'No. APY changes with network participation, validator performance, and protocol parameters. Quoted APY is a snapshot, not a guarantee.' },
				{ q: 'Are slashing and lock-up risks included?', a: 'No. This calculator does not model validator slashing, withdrawal queues, or unbonding periods, which can significantly affect real returns.' },
				{ q: 'What is the difference between APY and APR?', a: 'APR is the simple annual rate without compounding. APY assumes rewards are reinvested and compounded, so APY is typically higher than APR for the same protocol.' }
			],
			ko: [
				{ q: '이것은 재무 자문인가요?', a: '아닙니다. 본 계산기는 교육 목적으로만 제공되며 재무, 투자, 암호화폐 자문이 아닙니다. 슬래싱, 락업, 토큰 가격 하락 등으로 원금 손실이 발생할 수 있습니다.' },
				{ q: 'APY는 보장되나요?', a: '아니요. APY는 네트워크 참여도, 검증자 성과, 프로토콜 파라미터에 따라 변동하며 표시값은 한 시점의 스냅샷에 불과합니다.' },
				{ q: '슬래싱과 락업 위험이 포함되나요?', a: '아니요. 본 계산기는 검증자 슬래싱, 인출 대기열, 언본딩 기간을 모델링하지 않으며 이들은 실제 수익에 큰 영향을 줍니다.' },
				{ q: 'APY와 APR의 차이는?', a: 'APR은 복리를 적용하지 않은 단순 연이율입니다. APY는 보상이 재투자되고 복리화된다고 가정하므로 같은 프로토콜에서도 APY가 보통 더 높습니다.' }
			],
			ja: [
				{ q: 'これは金融アドバイスですか?', a: 'いいえ。本計算機は教育目的のみで、金融・投資・暗号資産のアドバイスではありません。スラッシング、ロックアップ、価格下落で元本損失が生じる可能性があります。' },
				{ q: 'APYは保証されますか?', a: 'いいえ。APYはネットワーク参加率、バリデーター成績、プロトコルパラメータで変動し、表示値は一時点のスナップショットです。' },
				{ q: 'スラッシングやロックアップリスクは含まれますか?', a: 'いいえ。本計算機はバリデータースラッシング、出金キュー、アンボンディング期間をモデル化しておらず、これらは実リターンに大きな影響を与えます。' },
				{ q: 'APYとAPRの違いは?', a: 'APRは複利を適用しない単純年率です。APYは報酬が再投資・複利化される前提なので、同じプロトコルでもAPYの方が通常高くなります。' }
			],
			zh: [
				{ q: '这是财务建议吗？', a: '不是。本计算器仅供教育用途，不构成财务、投资或加密货币建议。质押可能因罚没、锁定或币价下跌而导致本金损失。' },
				{ q: 'APY有保证吗？', a: '没有。APY随网络参与度、验证者表现和协议参数变化，所示值仅为某一时点的快照。' },
				{ q: '是否包含罚没和锁定风险？', a: '没有。本计算器未对验证者罚没、提款队列、解绑期建模，而这些会显著影响实际收益。' },
				{ q: 'APY与APR有何区别？', a: 'APR是不计复利的简单年化利率。APY假设奖励再投资并复利计算，所以同一协议下APY通常高于APR。' }
			]
		},
		related: [
			{ href: '/mining', label: { en: 'Mining Calculator', ko: '채굴 계산기', ja: 'マイニング計算機', zh: '挖矿计算器' } },
			{ href: '/compound', label: { en: 'Compound Interest', ko: '복리 계산기', ja: '複利計算機', zh: '复利计算器' } },
			{ href: '/profit', label: { en: 'Profit Calculator', ko: '손익 계산기', ja: '損益計算機', zh: '盈亏计算器' } }
		],
		externalRefs: [
			{ href: 'https://ethereum.org/en/staking/', label: 'Ethereum.org: Staking' },
			{ href: 'https://www.investopedia.com/what-is-staking-5211386', label: 'Investopedia: What Is Crypto Staking?' }
		]
	};

	let amount = 1000;
	let price = 50;
	let apy = 5;
	let period = 365;
	let compound = true;

	$: dailyRate = apy / 100 / 365;
	$: totalRewards = compound
		? amount * (Math.pow(1 + dailyRate, period) - 1)
		: amount * dailyRate * period;
	$: totalAfterPeriod = amount + totalRewards;
	$: dailyRewards = compound ? totalRewards / period : amount * dailyRate;
	$: monthlyRewards = dailyRewards * 30;
	$: yearlyRewards = amount * (apy / 100);
	$: valueUSD = totalAfterPeriod * price;

	function formatNumber(value: number, decimals: number = 4): string {
		return value.toLocaleString('en-US', { maximumFractionDigits: decimals });
	}
	function formatCurrency(value: number): string {
		return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
	}
</script>

<svelte:head>
	<title>{t('staking.title')} - SDK.bz</title>
	<meta name="description" content={t('staking.desc')} />
	<meta property="og:title" content="{t('staking.title')} - SDK.bz" />
	<meta property="og:description" content={t('staking.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('staking.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('staking.desc')}</p>
	</div>

	<div class="grid md:grid-cols-2 gap-8">
		<div class="space-y-6 bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700">
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('staking.amount')}</label>
				<input type="number" bind:value={amount} min="0" step="100"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-green-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('staking.price')}</label>
				<input type="number" bind:value={price} min="0" step="1"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-green-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('staking.apy')}</label>
				<input type="number" bind:value={apy} min="0" max="200" step="0.5"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-green-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('staking.period')}</label>
				<input type="number" bind:value={period} min="1" max="3650"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-green-400" />
			</div>
			<div class="flex items-center gap-3">
				<input type="checkbox" bind:checked={compound} id="compound"
					class="w-5 h-5 rounded border-gray-300 text-green-500 focus:ring-green-400" />
				<label for="compound" class="text-sm font-medium text-gray-700 dark:text-dark-300">{t('staking.compound')}</label>
			</div>
		</div>

		<div class="space-y-4">
			<div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl border border-green-200 dark:border-green-800">
				<p class="text-sm text-green-600 dark:text-green-400 mb-1">{t('staking.total')}</p>
				<p class="text-3xl font-bold text-green-700 dark:text-green-300">{formatNumber(totalAfterPeriod, 4)} tokens</p>
				<p class="text-lg text-green-600 dark:text-green-400">{formatCurrency(valueUSD)}</p>
			</div>
			<div class="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700 space-y-3">
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('staking.daily')}</span>
					<span class="font-semibold text-gray-900 dark:text-dark-100">{formatNumber(dailyRewards, 6)} tokens</span>
				</div>
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('staking.monthly')}</span>
					<span class="font-semibold text-gray-900 dark:text-dark-100">{formatNumber(monthlyRewards, 4)} tokens</span>
				</div>
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('staking.yearly')}</span>
					<span class="font-semibold text-gray-900 dark:text-dark-100">{formatNumber(yearlyRewards, 4)} tokens</span>
				</div>
			</div>
		</div>
	</div>

	<ToolContent
		{lang}
		toolName="Staking Calculator"
		toolUrl="https://sdk.bz/{lang}/staking"
		lastUpdated="2026-04-30"
		category="Finance Calculator"
		breadcrumb={[
			{ name: 'Home', url: `https://sdk.bz/${lang}` },
			{ name: 'Tools', url: `https://sdk.bz/${lang}` },
			{ name: 'Staking Calculator', url: `https://sdk.bz/${lang}/staking` }
		]}
		content={toolContent}
	/>

	<ToolGuide {lang} sections={guideSections} />
</div>
