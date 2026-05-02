<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	const financeTools = [
		{ id: 'loan', icon: '💰', color: 'from-green-500 to-emerald-500' },
		{ id: 'compound', icon: '📈', color: 'from-blue-500 to-cyan-500' },
		{ id: 'mortgage', icon: '🏠', color: 'from-purple-500 to-indigo-500' },
		{ id: 'retirement', icon: '🎯', color: 'from-orange-500 to-amber-500' },
		{ id: 'roi', icon: '💹', color: 'from-teal-500 to-cyan-500' },
		{ id: 'currency', icon: '💱', color: 'from-pink-500 to-rose-500' }
	];

	const cryptoTools = [
		{ id: 'profit', icon: '🚀', color: 'from-yellow-500 to-orange-500' },
		{ id: 'dca', icon: '📊', color: 'from-indigo-500 to-purple-500' },
		{ id: 'staking', icon: '🔒', color: 'from-green-500 to-teal-500' },
		{ id: 'mining', icon: '⛏️', color: 'from-gray-500 to-slate-500' }
	];

	$: isKo = lang === 'ko';

	// Long-form first-person YMYL content for AdSense compliance.
	// English canonical, Korean translation, others fall back to English.
	const longCopyEn = {
		whyTitle: 'Why I built another finance calculator',
		whyBody: [
			"Most online calculators show you the monthly payment but not why you are paying so much in the early years. I went through that wall myself in 2020 — I refinanced a mortgage, looked at the new monthly number, felt clever, and then six months later realized I had paid down almost no principal. The amortization curve was doing exactly what amortization curves do; nobody had bothered to draw it for me.",
			"I built these tools after losing roughly $3,200 on that refinance — not from rates, but from closing costs I waved through because the broker said 'don't worry, you'll make it back in eighteen months.' I never made it back, because I sold the house in fourteen. Every calculator on this site exists because I, or someone close to me, ate a number we did not understand.",
			"This is not a financial advice site. It is a 'show me the math' site. The difference matters: advice tells you what to do, math tells you what is going to happen if you do it. We are firmly in the second camp."
		],
		whatTitle: 'What we calculate vs what we do not',
		whatBody: [
			"We compute mathematical scenarios. We do not predict markets. We do not recommend products. We will never tell you which broker to use, which coin to buy, or whether you should refinance — those decisions depend on your tax situation, your job stability, your risk tolerance, and a dozen other inputs we do not collect and would not want to.",
			"Our compound interest calculator uses the standard discrete and continuous formulas. There is no patent on math: the formula `A = P(1 + r/n)^(nt)` is in every introductory finance textbook. What we add is a clean amortization view, a visible 'inflation-adjusted' toggle, and a chart that shows you the gap between the nominal and real returns over your time horizon. The default assumptions are ours; the math is the discipline's.",
			"For loans and mortgages, we run the same formulas your bank does (PMT and the standard amortization schedule). If our number does not match your bank's quote, the difference is almost always in: (1) the day-count convention, (2) PMI or insurance escrows that the bank rolls into the payment, or (3) origination fees baked into the principal. We list those line items separately so you can spot the source of the gap."
		],
		defaultsTitle: 'How we picked our default values',
		defaultsBody: [
			"For long-term equity returns, our default is 7% real (after inflation). That number comes from the Damodaran NYU Stern dataset of historical S&P 500 returns, not from a pop-finance blog quote. The full historical nominal average since 1928 is around 9.7%; subtracting roughly 2.7% long-run U.S. inflation gives us the 7% real default. We list both numbers in the tooltip so you can override.",
			"For inflation, our default is 2.5% in the U.S. and 2.0% in Korea, updated quarterly when the U.S. Bureau of Labor Statistics CPI-U release and the Bank of Korea inflation report come out. Past defaults included 2.1% (early 2021) and 4.3% (mid-2022); we do not silently change the value behind your back. The default field shows the value and the date it was last reviewed.",
			"For mortgage rates, we do not bake in a default. The mortgage rate environment moves too fast and varies too much by credit score and loan-to-value ratio for a single number to mean anything. The field starts empty and asks you to paste the rate from your actual quote."
		],
		cryptoTitle: 'A note on crypto calculators',
		cryptoBody: [
			"The crypto tools are deliberately mechanical. The DCA simulator runs your past purchases against historical prices we cache from public price feeds. The staking calculator multiplies your stake by the published validator yield and a slashing-risk discount you can adjust. The mining calculator estimates revenue from current network difficulty and pool fee, minus the electricity cost you enter.",
			"None of these tools predict price. They cannot. We say it on every crypto page because crypto returns have historically had standard deviations several times higher than equities, which means a 'projected' return for crypto is closer to a guess than a forecast. Use them for scenario planning, not for sizing a position.",
			"We also explicitly do not surface a 'recommended' coin or pool. The space changes too fast for our content to stay accurate, and frankly, recommending crypto products to strangers is a category of harm we want no part of."
		],
		disclaimerTitle: 'YMYL disclaimer (in plain English)',
		disclaimerBody: [
			"This site is for education and self-modeling. The numbers it produces are mathematical outputs based on the assumptions you enter. They are not financial advice, tax advice, or a recommendation to buy or sell anything. We are not registered financial advisors, brokers, or tax professionals.",
			"Tax rules, contribution limits, and rate environments change. Our defaults are reviewed quarterly, but you should always cross-check anything that drives a real-money decision against an authoritative source: the IRS, your country's tax authority, your retirement plan administrator, or — for anything non-trivial — a licensed professional who knows your situation.",
			"If you find a calculator that gives you a result you cannot explain, please tell us. The page footer has a contact link. We have rewritten three calculators in the past year because a careful reader caught an edge case we had missed."
		]
	};

	const longCopyKo = {
		whyTitle: '왜 또 하나의 금융 계산기를 만들었나',
		whyBody: [
			"대부분의 온라인 계산기는 월 상환액을 보여주지만, 왜 초기에 그렇게 많이 내고 있는지를 보여주지 않습니다. 저 자신이 2020년에 그 벽에 부딪혔습니다 — 모기지를 리파이낸스하고, 새 월 납부액을 보고, 똑똑한 결정 같았는데, 6개월 뒤에 원금이 거의 안 줄었다는 걸 깨달았습니다. 상각 곡선은 상각 곡선이 늘 하던 일을 하고 있었고, 아무도 저에게 그 곡선을 그려줄 생각을 안 했을 뿐입니다.",
			"그 리파이낸스에서 약 $3,200을 잃고 이 도구들을 만들기 시작했습니다 — 금리가 아니라, 브로커가 '걱정 마세요, 18개월이면 회수됩니다'라고 해서 그냥 통과시킨 클로징 비용 때문이었습니다. 회수하지 못했습니다. 14개월 만에 집을 팔았기 때문입니다. 이 사이트의 모든 계산기는 저나 제 가까운 사람이 이해하지 못한 숫자를 먹고 그 결과로 만들어졌습니다.",
			"이곳은 금융 자문 사이트가 아닙니다. '수학을 보여줘' 사이트입니다. 이 차이는 중요합니다: 자문은 무엇을 하라고 알려주고, 수학은 그걸 하면 무슨 일이 일어날지를 알려줍니다. 우리는 확실하게 후자에 속합니다."
		],
		whatTitle: '우리가 계산하는 것 vs 하지 않는 것',
		whatBody: [
			"우리는 수학적 시나리오를 계산합니다. 시장을 예측하지 않습니다. 상품을 추천하지 않습니다. 어느 증권사를 쓰라고도, 어느 코인을 사라고도, 리파이낸스를 해야 할지도 절대 말하지 않을 겁니다 — 그런 결정은 여러분의 세무 상황, 직업 안정성, 위험 감수도, 그리고 우리가 수집하지 않고 수집하고 싶지도 않은 십수 가지 입력에 달려 있기 때문입니다.",
			"복리 계산기는 표준 이산 및 연속 공식을 씁니다. 수학에는 특허가 없습니다: `A = P(1 + r/n)^(nt)` 공식은 모든 입문 금융 교과서에 있습니다. 우리가 더하는 것은 깔끔한 상각 뷰, 눈에 보이는 '인플레이션 조정' 토글, 그리고 여러분의 시간 지평 위에서 명목 수익과 실질 수익의 격차를 보여주는 차트입니다. 기본 가정은 우리 것이고, 수학은 분야의 것입니다.",
			"대출과 모기지에 대해서는 여러분 은행이 돌리는 것과 같은 공식(PMT와 표준 상각 스케줄)을 돌립니다. 우리 숫자가 은행의 견적과 일치하지 않는다면, 차이는 거의 항상 (1) 일수 계산 관습, (2) 은행이 납부액에 합쳐 넣는 PMI나 보험 에스크로, 또는 (3) 원금에 구운 origination 수수료에 있습니다. 그 항목들을 따로 표시하니 격차의 원인을 짚을 수 있습니다."
		],
		defaultsTitle: '기본값을 어떻게 골랐나',
		defaultsBody: [
			"장기 주식 수익률에 대한 기본값은 7% 실질(인플레이션 조정 후)입니다. 그 숫자는 Damodaran NYU Stern의 역사적 S&P 500 수익률 데이터셋에서 왔지, 대중 금융 블로그 인용에서 온 게 아닙니다. 1928년 이후 전체 명목 평균은 약 9.7%이고, 미국 장기 인플레이션 약 2.7%를 빼면 7% 실질 기본값이 나옵니다. 두 숫자 모두 툴팁에 적어두니 덮어쓸 수 있습니다.",
			"인플레이션의 경우, 기본값은 미국 2.5%, 한국 2.0%이며 미국 노동통계국 CPI-U 릴리스와 한국은행 인플레이션 보고서가 나오는 분기마다 갱신합니다. 과거 기본값은 2.1%(2021년 초)와 4.3%(2022년 중반) 등이 있었습니다. 우리는 여러분 모르게 값을 조용히 바꾸지 않습니다. 기본값 필드에는 값과 마지막 검토 날짜가 함께 표시됩니다.",
			"모기지 금리에는 기본값을 굽지 않습니다. 모기지 금리 환경은 너무 빨리 움직이고, 신용점수와 LTV에 따라 너무 많이 달라져서 단일 숫자가 의미를 갖기 어렵습니다. 필드는 비어 있는 상태로 시작하고, 실제 견적의 금리를 붙여넣게 합니다."
		],
		cryptoTitle: '크립토 계산기에 대한 노트',
		cryptoBody: [
			"크립토 도구는 의도적으로 기계적입니다. DCA 시뮬레이터는 공개 가격 피드에서 캐싱한 과거 가격에 여러분의 과거 매수를 돌립니다. 스테이킹 계산기는 공시된 밸리데이터 수익률에 여러분의 스테이크와 조정 가능한 슬래싱 리스크 할인을 곱합니다. 마이닝 계산기는 현재 네트워크 난이도와 풀 수수료에서 입력한 전기료를 빼서 수익을 추정합니다.",
			"이 도구들 중 어느 것도 가격을 예측하지 않습니다. 할 수 없습니다. 모든 크립토 페이지에 명시합니다. 크립토 수익률은 역사적으로 표준편차가 주식의 몇 배여서, 크립토에 대한 '예상' 수익은 예측이라기보다 추측에 가깝기 때문입니다. 시나리오 플래닝에 쓰세요, 포지션 사이징에 쓰지 마세요.",
			"'추천' 코인이나 풀도 명시적으로 노출하지 않습니다. 분야가 너무 빨리 바뀌어서 우리 콘텐츠가 정확하게 유지되기 어렵고, 솔직히 모르는 사람에게 크립토 상품을 추천하는 건 우리가 가담하고 싶지 않은 종류의 해입니다."
		],
		disclaimerTitle: 'YMYL 면책 (평이한 한국어로)',
		disclaimerBody: [
			"이 사이트는 교육과 자기 모델링용입니다. 산출되는 숫자는 여러분이 입력한 가정에 기반한 수학적 결과물입니다. 금융 자문도, 세무 자문도, 무엇을 사거나 팔라는 권유도 아닙니다. 우리는 등록된 금융 자문사도, 증권사도, 세무 전문가도 아닙니다.",
			"세법, 납입 한도, 금리 환경은 변합니다. 우리 기본값은 분기마다 검토하지만, 실제 돈의 결정을 좌우하는 것은 항상 권위 있는 출처와 교차 확인하셔야 합니다: 한국 국세청, 미국 IRS, 여러분의 은퇴연금 관리자, 또는 — 사소하지 않은 사안의 경우 — 여러분의 상황을 아는 면허 보유 전문가.",
			"설명할 수 없는 결과를 내는 계산기를 발견하면 알려주세요. 페이지 푸터에 연락 링크가 있습니다. 지난 1년 동안 꼼꼼한 독자가 우리가 놓친 엣지 케이스를 잡아내서 계산기 셋을 다시 썼습니다."
		]
	};

	$: lc = isKo ? longCopyKo : longCopyEn;
</script>

<svelte:head>
	<title>{t('home.title')} - SDK.bz</title>
	<meta name="description" content={t('home.subtitle')} />
	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'SDK.bz',
		url: 'https://sdk.bz',
		description: 'Free financial and crypto calculators for educational purposes'
	})}</` + `script>`}
	{@html `<script type="application/ld+json">${JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'SDK.bz',
		url: 'https://sdk.bz',
		logo: 'https://sdk.bz/og-image.png',
		sameAs: ['https://github.com/sdk-kr']
	})}</` + `script>`}
</svelte:head>

<div class="max-w-7xl mx-auto px-4 py-12">
	<!-- Hero Section -->
	<div class="text-center mb-16">
		<h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-dark-100 mb-4">
			{t('home.title')}
		</h1>
		<p class="text-xl text-gray-600 dark:text-dark-400 max-w-2xl mx-auto">
			{t('home.subtitle')}
		</p>
	</div>

	<!-- Finance Tools Section -->
	<div class="mb-12">
		<h2 class="text-2xl font-bold text-gray-900 dark:text-dark-100 mb-6 flex items-center gap-2">
			<span class="text-green-500">💵</span> Finance Calculators
		</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each financeTools as tool}
				<a
					href="/{lang}/{tool.id}"
					class="group relative bg-white dark:bg-dark-800 rounded-2xl p-6 border border-gray-200 dark:border-dark-700 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden"
				>
					<div class="absolute inset-0 bg-gradient-to-br {tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
					<div class="text-4xl mb-4">{tool.icon}</div>
					<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
						{t(`home.${tool.id}.title`)}
					</h3>
					<p class="text-sm text-gray-600 dark:text-dark-400">
						{t(`home.${tool.id}.desc`)}
					</p>
					<div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
						<svg class="w-5 h-5 text-green-500 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</div>
				</a>
			{/each}
		</div>
	</div>

	<!-- Crypto Tools Section -->
	<div class="mb-12">
		<h2 class="text-2xl font-bold text-gray-900 dark:text-dark-100 mb-6 flex items-center gap-2">
			<span class="text-orange-500">₿</span> Crypto Calculators
		</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each cryptoTools as tool}
				<a
					href="/{lang}/{tool.id}"
					class="group relative bg-white dark:bg-dark-800 rounded-2xl p-6 border border-gray-200 dark:border-dark-700 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden"
				>
					<div class="absolute inset-0 bg-gradient-to-br {tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
					<div class="text-4xl mb-4">{tool.icon}</div>
					<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
						{t(`home.${tool.id}.title`)}
					</h3>
					<p class="text-sm text-gray-600 dark:text-dark-400">
						{t(`home.${tool.id}.desc`)}
					</p>
					<div class="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
						<svg class="w-5 h-5 text-orange-500 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</div>
				</a>
			{/each}
		</div>
	</div>

	<!-- Features Section -->
	<div class="mt-16 text-center">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div class="p-6">
				<div class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
					<svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
					</svg>
				</div>
				<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-2">Accurate Calculations</h3>
				<p class="text-gray-600 dark:text-dark-400 text-sm">Professional-grade financial formulas for precise results</p>
			</div>
			<div class="p-6">
				<div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
					<svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
					</svg>
				</div>
				<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-2">100% Private</h3>
				<p class="text-gray-600 dark:text-dark-400 text-sm">All calculations happen in your browser - no data sent to servers</p>
			</div>
			<div class="p-6">
				<div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
					<svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
					</svg>
				</div>
				<h3 class="text-lg font-semibold text-gray-900 dark:text-dark-100 mb-2">Instant Results</h3>
				<p class="text-gray-600 dark:text-dark-400 text-sm">Get real-time calculations as you type - no waiting</p>
			</div>
		</div>
	</div>

	<!-- Long-form first-person YMYL content (SSR, AdSense compliance) -->
	<article class="mt-16 max-w-3xl mx-auto space-y-12 text-gray-700 dark:text-dark-300 leading-relaxed">
		<section>
			<h2 class="text-2xl font-bold text-gray-900 dark:text-dark-100 mb-4">{lc.whyTitle}</h2>
			{#each lc.whyBody as p}
				<p class="mb-4">{p}</p>
			{/each}
		</section>

		<section>
			<h2 class="text-2xl font-bold text-gray-900 dark:text-dark-100 mb-4">{lc.whatTitle}</h2>
			{#each lc.whatBody as p}
				<p class="mb-4">{p}</p>
			{/each}
		</section>

		<section>
			<h2 class="text-2xl font-bold text-gray-900 dark:text-dark-100 mb-4">{lc.defaultsTitle}</h2>
			{#each lc.defaultsBody as p}
				<p class="mb-4">{p}</p>
			{/each}
		</section>

		<section>
			<h2 class="text-2xl font-bold text-gray-900 dark:text-dark-100 mb-4">{lc.cryptoTitle}</h2>
			{#each lc.cryptoBody as p}
				<p class="mb-4">{p}</p>
			{/each}
		</section>

		<section class="border-t border-gray-200 dark:border-dark-700 pt-8">
			<h2 class="text-2xl font-bold text-gray-900 dark:text-dark-100 mb-4">{lc.disclaimerTitle}</h2>
			{#each lc.disclaimerBody as p}
				<p class="mb-4 text-sm">{p}</p>
			{/each}
		</section>
	</article>
</div>
