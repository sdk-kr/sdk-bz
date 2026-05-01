<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';

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
</div>
