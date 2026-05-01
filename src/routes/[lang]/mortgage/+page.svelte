<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';

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
</div>
