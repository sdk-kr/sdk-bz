<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	interface Guide {
		slug: string;
		title: string;
		description: string;
		icon: string;
	}

	const content: Record<Locale, {
		title: string;
		subtitle: string;
		metaDesc: string;
		financeTitle: string;
		cryptoTitle: string;
		guides: Guide[];
	}> = {
		en: {
			title: 'Calculator Guides',
			subtitle: 'Learn how to use our financial and cryptocurrency calculators effectively',
			metaDesc: 'Comprehensive guides for SDK.bz calculators. Learn how to use loan, mortgage, compound interest, ROI, crypto profit, DCA, staking, and mining calculators.',
			financeTitle: 'Finance Calculators',
			cryptoTitle: 'Crypto Calculators',
			guides: [
				{ slug: 'loan', title: 'Loan Calculator Guide', description: 'Master loan calculations including principal, interest rates, and monthly payments. Learn how to compare different loan options and understand amortization schedules.', icon: '1F4B0' },
				{ slug: 'compound', title: 'Compound Interest Guide', description: 'Understand the power of compound interest and how it grows your investments over time. Learn about compounding frequency, APY vs APR, and investment strategies.', icon: '1F4C8' },
				{ slug: 'mortgage', title: 'Mortgage Calculator Guide', description: 'Navigate home financing with confidence. Learn about down payments, mortgage terms, property taxes, insurance, and how to calculate your total homeownership costs.', icon: '1F3E0' },
				{ slug: 'retirement', title: 'Retirement Planning Guide', description: 'Plan for a secure financial future. Learn about retirement savings goals, withdrawal rates, inflation adjustments, and how to calculate your retirement readiness.', icon: '1F3D6' },
				{ slug: 'roi', title: 'ROI Calculator Guide', description: 'Measure and compare investment returns accurately. Learn about ROI calculations, annualized returns, and how to evaluate different investment opportunities.', icon: '1F4CA' },
				{ slug: 'currency', title: 'Currency Converter Guide', description: 'Convert between world currencies with ease. Learn about exchange rates, currency pairs, and how to track currency fluctuations for travel or trading.', icon: '1F4B1' },
				{ slug: 'profit', title: 'Crypto Profit Calculator Guide', description: 'Calculate your cryptocurrency gains and losses accurately. Learn about cost basis, realized vs unrealized gains, and tax implications of crypto trading.', icon: '1F4B8' },
				{ slug: 'dca', title: 'DCA Calculator Guide', description: 'Master Dollar Cost Averaging strategy for crypto investments. Learn how DCA reduces volatility risk and helps build wealth consistently over time.', icon: '1F4C9' },
				{ slug: 'staking', title: 'Staking Calculator Guide', description: 'Maximize your staking rewards. Learn about APY, staking periods, validator selection, and how to calculate your potential passive income from staking.', icon: '1F512' },
				{ slug: 'mining', title: 'Mining Calculator Guide', description: 'Evaluate mining profitability before investing in hardware. Learn about hash rates, electricity costs, difficulty adjustments, and break-even analysis.', icon: '26CF' }
			]
		},
		ko: {
			title: '계산기 가이드',
			subtitle: '금융 및 암호화폐 계산기를 효과적으로 사용하는 방법을 알아보세요',
			metaDesc: 'SDK.bz 계산기를 위한 종합 가이드. 대출, 모기지, 복리, ROI, 크립토 수익, DCA, 스테이킹, 채굴 계산기 사용법을 알아보세요.',
			financeTitle: '금융 계산기',
			cryptoTitle: '크립토 계산기',
			guides: [
				{ slug: 'loan', title: '대출 계산기 가이드', description: '원금, 이자율, 월 상환액을 포함한 대출 계산을 마스터하세요. 다양한 대출 옵션을 비교하고 상환 일정을 이해하는 방법을 배웁니다.', icon: '1F4B0' },
				{ slug: 'compound', title: '복리 이자 가이드', description: '복리의 힘과 시간이 지남에 따라 투자가 어떻게 성장하는지 이해하세요. 복리 주기, APY 대 APR, 투자 전략에 대해 알아봅니다.', icon: '1F4C8' },
				{ slug: 'mortgage', title: '모기지 계산기 가이드', description: '자신감을 갖고 주택 금융을 탐색하세요. 계약금, 모기지 기간, 재산세, 보험, 총 주택 소유 비용 계산 방법을 알아봅니다.', icon: '1F3E0' },
				{ slug: 'retirement', title: '은퇴 계획 가이드', description: '안전한 재정적 미래를 계획하세요. 은퇴 저축 목표, 인출률, 인플레이션 조정, 은퇴 준비도 계산 방법을 알아봅니다.', icon: '1F3D6' },
				{ slug: 'roi', title: 'ROI 계산기 가이드', description: '투자 수익을 정확하게 측정하고 비교하세요. ROI 계산, 연간 수익률, 다양한 투자 기회 평가 방법을 알아봅니다.', icon: '1F4CA' },
				{ slug: 'currency', title: '환율 변환기 가이드', description: '세계 통화 간 쉽게 변환하세요. 환율, 통화쌍, 여행이나 거래를 위한 환율 변동 추적 방법을 알아봅니다.', icon: '1F4B1' },
				{ slug: 'profit', title: '크립토 수익 계산기 가이드', description: '암호화폐 이익과 손실을 정확하게 계산하세요. 원가 기준, 실현 대 미실현 이익, 크립토 거래의 세금 영향을 알아봅니다.', icon: '1F4B8' },
				{ slug: 'dca', title: 'DCA 계산기 가이드', description: '크립토 투자를 위한 달러 비용 평균화 전략을 마스터하세요. DCA가 변동성 위험을 줄이고 시간이 지남에 따라 일관되게 부를 쌓는 데 어떻게 도움이 되는지 알아봅니다.', icon: '1F4C9' },
				{ slug: 'staking', title: '스테이킹 계산기 가이드', description: '스테이킹 보상을 극대화하세요. APY, 스테이킹 기간, 검증자 선택, 스테이킹에서 잠재적인 수동 소득을 계산하는 방법을 알아봅니다.', icon: '1F512' },
				{ slug: 'mining', title: '채굴 계산기 가이드', description: '하드웨어 투자 전에 채굴 수익성을 평가하세요. 해시레이트, 전기 비용, 난이도 조정, 손익분기점 분석에 대해 알아봅니다.', icon: '26CF' }
			]
		},
		ja: {
			title: '計算機ガイド',
			subtitle: '金融および暗号通貨計算機を効果的に使用する方法を学びましょう',
			metaDesc: 'SDK.bz計算機の総合ガイド。ローン、住宅ローン、複利、ROI、暗号通貨利益、DCA、ステーキング、マイニング計算機の使い方。',
			financeTitle: '金融計算機',
			cryptoTitle: '暗号通貨計算機',
			guides: [
				{ slug: 'loan', title: 'ローン計算機ガイド', description: '元金、金利、月々の支払いを含むローン計算をマスターしましょう。さまざまなローンオプションを比較し、返済スケジュールを理解する方法を学びます。', icon: '1F4B0' },
				{ slug: 'compound', title: '複利ガイド', description: '複利の力と時間とともに投資がどのように成長するかを理解しましょう。複利頻度、APY対APR、投資戦略について学びます。', icon: '1F4C8' },
				{ slug: 'mortgage', title: '住宅ローン計算機ガイド', description: '自信を持って住宅ファイナンスをナビゲートしましょう。頭金、住宅ローン期間、固定資産税、保険、総住宅所有コストの計算方法を学びます。', icon: '1F3E0' },
				{ slug: 'retirement', title: '退職計画ガイド', description: '安全な財務的未来を計画しましょう。退職貯蓄目標、引き出し率、インフレ調整、退職準備度の計算方法を学びます。', icon: '1F3D6' },
				{ slug: 'roi', title: 'ROI計算機ガイド', description: '投資リターンを正確に測定・比較しましょう。ROI計算、年率リターン、さまざまな投資機会の評価方法を学びます。', icon: '1F4CA' },
				{ slug: 'currency', title: '通貨換算ガイド', description: '世界の通貨間を簡単に変換しましょう。為替レート、通貨ペア、旅行や取引のための通貨変動の追跡方法を学びます。', icon: '1F4B1' },
				{ slug: 'profit', title: '暗号通貨利益計算機ガイド', description: '暗号通貨の利益と損失を正確に計算しましょう。原価基準、実現対未実現利益、暗号通貨取引の税金への影響を学びます。', icon: '1F4B8' },
				{ slug: 'dca', title: 'DCA計算機ガイド', description: '暗号通貨投資のためのドルコスト平均法戦略をマスターしましょう。DCAがボラティリティリスクを軽減し、時間をかけて一貫して資産を構築するのにどう役立つかを学びます。', icon: '1F4C9' },
				{ slug: 'staking', title: 'ステーキング計算機ガイド', description: 'ステーキング報酬を最大化しましょう。APY、ステーキング期間、バリデーター選択、ステーキングからの潜在的な受動収入の計算方法を学びます。', icon: '1F512' },
				{ slug: 'mining', title: 'マイニング計算機ガイド', description: 'ハードウェア投資前にマイニングの収益性を評価しましょう。ハッシュレート、電気代、難易度調整、損益分岐点分析について学びます。', icon: '26CF' }
			]
		},
		zh: {
			title: '计算器指南',
			subtitle: '学习如何有效使用我们的金融和加密货币计算器',
			metaDesc: 'SDK.bz计算器综合指南。了解如何使用贷款、抵押贷款、复利、ROI、加密货币利润、DCA、质押和挖矿计算器。',
			financeTitle: '金融计算器',
			cryptoTitle: '加密货币计算器',
			guides: [
				{ slug: 'loan', title: '贷款计算器指南', description: '掌握贷款计算，包括本金、利率和月还款额。学习如何比较不同的贷款选项并理解摊还计划。', icon: '1F4B0' },
				{ slug: 'compound', title: '复利指南', description: '了解复利的力量以及投资如何随时间增长。学习复利频率、APY与APR以及投资策略。', icon: '1F4C8' },
				{ slug: 'mortgage', title: '抵押贷款计算器指南', description: '自信地掌握住房融资。了解首付、抵押贷款期限、房产税、保险以及如何计算总拥房成本。', icon: '1F3E0' },
				{ slug: 'retirement', title: '退休规划指南', description: '规划安全的财务未来。了解退休储蓄目标、提取率、通胀调整以及如何计算退休准备程度。', icon: '1F3D6' },
				{ slug: 'roi', title: 'ROI计算器指南', description: '准确衡量和比较投资回报。了解ROI计算、年化回报以及如何评估不同的投资机会。', icon: '1F4CA' },
				{ slug: 'currency', title: '货币转换器指南', description: '轻松在世界货币之间转换。了解汇率、货币对以及如何跟踪货币波动以用于旅行或交易。', icon: '1F4B1' },
				{ slug: 'profit', title: '加密货币利润计算器指南', description: '准确计算您的加密货币收益和损失。了解成本基础、已实现与未实现收益以及加密货币交易的税务影响。', icon: '1F4B8' },
				{ slug: 'dca', title: 'DCA计算器指南', description: '掌握加密货币投资的美元成本平均策略。了解DCA如何降低波动风险并帮助随时间持续积累财富。', icon: '1F4C9' },
				{ slug: 'staking', title: '质押计算器指南', description: '最大化您的质押奖励。了解APY、质押期、验证者选择以及如何计算质押的潜在被动收入。', icon: '1F512' },
				{ slug: 'mining', title: '挖矿计算器指南', description: '在投资硬件之前评估挖矿盈利能力。了解哈希率、电力成本、难度调整和盈亏平衡分析。', icon: '26CF' }
			]
		}
	};

	$: t = content[lang] || content.en;
	$: financeGuides = t.guides.slice(0, 6);
	$: cryptoGuides = t.guides.slice(6);
</script>

<svelte:head>
	<title>{t.title} - SDK.bz</title>
	<meta name="description" content={t.metaDesc} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-12">
	<div class="text-center mb-12">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t.title}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t.subtitle}</p>
	</div>

	<!-- Finance Calculators -->
	<div class="mb-12">
		<h2 class="text-2xl font-bold text-gray-900 dark:text-dark-100 mb-6">{t.financeTitle}</h2>
		<div class="grid md:grid-cols-2 gap-4">
			{#each financeGuides as guide}
				<a href="/{lang}/guide/{guide.slug}"
					class="block bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700 hover:border-green-400 dark:hover:border-green-500 transition-colors group">
					<div class="flex items-start gap-4">
						<span class="text-3xl">{String.fromCodePoint(parseInt(guide.icon, 16))}</span>
						<div>
							<h3 class="font-semibold text-gray-900 dark:text-dark-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-2">
								{guide.title}
							</h3>
							<p class="text-sm text-gray-600 dark:text-dark-400 line-clamp-2">{guide.description}</p>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>

	<!-- Crypto Calculators -->
	<div>
		<h2 class="text-2xl font-bold text-gray-900 dark:text-dark-100 mb-6">{t.cryptoTitle}</h2>
		<div class="grid md:grid-cols-2 gap-4">
			{#each cryptoGuides as guide}
				<a href="/{lang}/guide/{guide.slug}"
					class="block bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700 hover:border-green-400 dark:hover:border-green-500 transition-colors group">
					<div class="flex items-start gap-4">
						<span class="text-3xl">{String.fromCodePoint(parseInt(guide.icon, 16))}</span>
						<div>
							<h3 class="font-semibold text-gray-900 dark:text-dark-100 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-2">
								{guide.title}
							</h3>
							<p class="text-sm text-gray-600 dark:text-dark-400 line-clamp-2">{guide.description}</p>
						</div>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>
