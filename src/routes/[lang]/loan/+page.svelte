<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';

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
</div>
