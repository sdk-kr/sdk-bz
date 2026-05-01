<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';
	import { common } from '$lib/i18n/translations';
	import ToolContent from '$lib/components/ToolContent.svelte';

	$: lang = ($page.params.lang || 'en') as Locale;
	$: t = (key: string) => common[lang]?.[key] || common['en'][key] || key;

	const toolContent = {
		about: {
			en: 'The retirement calculator estimates how much your retirement savings could grow by combining current savings, monthly contributions, expected return, and time to retirement. It uses standard compound growth formulas and assumes consistent returns, which real markets do not offer. Withdrawals, taxes, fees, and inflation will affect the real outcome. This tool is provided for educational purposes only and is not financial advice.',
			ko: '은퇴 계산기는 현재 저축액, 월 적립금, 예상 수익률, 은퇴까지의 기간을 결합해 은퇴 자금이 얼마나 늘어날 수 있는지 추정합니다. 표준 복리 성장 공식을 사용하며 일정한 수익률을 가정하지만, 실제 시장은 그렇지 않습니다. 인출, 세금, 수수료, 인플레이션은 실제 결과에 영향을 줍니다. 본 도구는 교육 목적으로만 제공되며 재무 자문이 아닙니다.',
			ja: '退職計算機は、現在の貯蓄額、月々の拠出、期待リターン、退職までの期間を組み合わせ、退職資金がどれほど増えるかを推定します。標準的な複利成長公式を用い一定リターンを仮定しますが、実市場はそうではありません。引き出し、税金、手数料、インフレは実際の結果に影響します。本ツールは教育目的のみで、金融アドバイスではありません。',
			zh: '退休计算器结合当前储蓄、月度投入、预期收益和距退休年限，估算退休资金可能的增长。使用标准复利公式并假设收益恒定，但实际市场并非如此。提取、税收、费用和通胀都会影响真实结果。本工具仅供教育用途，不是财务建议。'
		},
		howTo: {
			en: [
				'Enter your current age.',
				'Enter your planned retirement age.',
				'Enter your current retirement savings.',
				'Enter the amount you plan to contribute every month.',
				'Set a conservative expected annual return and review the projected balance.'
			],
			ko: [
				'현재 나이를 입력합니다.',
				'계획 중인 은퇴 나이를 입력합니다.',
				'현재 은퇴 저축액을 입력합니다.',
				'매월 적립할 금액을 입력합니다.',
				'예상 연수익률을 보수적으로 설정하고 예상 잔액을 확인합니다.'
			],
			ja: [
				'現在の年齢を入力します。',
				'予定している退職年齢を入力します。',
				'現在の退職貯蓄額を入力します。',
				'毎月積立する金額を入力します。',
				'期待年利率を保守的に設定し、予想残高を確認します。'
			],
			zh: [
				'输入当前年龄。',
				'输入计划退休年龄。',
				'输入当前退休储蓄额。',
				'输入计划每月投入的金额。',
				'设置保守的年化收益率并查看预计余额。'
			]
		},
		useCases: {
			en: [
				'Estimate whether your current contribution rate is on track for your retirement goal.',
				'Compare scenarios with different monthly contributions or retirement ages.',
				'See the long-term effect of starting earlier vs later.',
				'Plan adjustments to monthly savings after a salary change.',
				'Educational example for understanding how compounding builds retirement assets.'
			],
			ko: [
				'현재 적립 속도가 은퇴 목표에 부합하는지 추정',
				'월 적립금이나 은퇴 나이가 다른 시나리오 비교',
				'일찍 시작하는 것과 늦게 시작하는 것의 장기 효과 확인',
				'급여 변동 후 월 저축액 조정 계획',
				'복리가 은퇴 자산을 형성하는 방식 학습'
			],
			ja: [
				'現在の拠出ペースが退職目標に合っているかの推定',
				'月拠出額や退職年齢が異なるシナリオ比較',
				'早く始める場合と遅く始める場合の長期効果の確認',
				'給与変動後の月貯蓄額調整の計画',
				'複利が退職資産を形成する仕組みの学習'
			],
			zh: [
				'估算当前缴存比例是否能实现退休目标',
				'比较不同月度投入或退休年龄的情景',
				'查看更早开始与较晚开始的长期效果',
				'薪资变化后调整月度储蓄的规划',
				'用于理解复利如何累积退休资产'
			]
		},
		faq: {
			en: [
				{ q: 'Is this financial advice?', a: 'No. This calculator is for educational purposes only and does not constitute financial, investment, or retirement-planning advice. Speak with a qualified advisor for personal recommendations.' },
				{ q: 'Does this account for inflation?', a: 'No. The result is in nominal dollars. To estimate purchasing power at retirement, subtract a long-term inflation assumption from your expected return.' },
				{ q: 'Are taxes included?', a: 'No. Taxes on contributions, growth, and withdrawals depend on the type of account (e.g., 401(k), IRA, taxable brokerage) and are not included.' },
				{ q: 'What return rate should I use?', a: 'Long-term equity returns have historically averaged 6-8% before inflation, but past performance does not predict the future. Use a conservative estimate.' }
			],
			ko: [
				{ q: '이것은 재무 자문인가요?', a: '아닙니다. 본 계산기는 교육 목적으로만 제공되며 재무, 투자, 은퇴 설계 자문이 아닙니다. 개인 맞춤 조언은 전문가와 상담하세요.' },
				{ q: '인플레이션이 반영되나요?', a: '아니요. 결과는 명목 금액입니다. 은퇴 시점의 구매력을 추정하려면 예상 수익률에서 장기 인플레이션 가정치를 차감하세요.' },
				{ q: '세금이 포함되나요?', a: '아니요. 적립, 성장, 인출 시점의 세금은 계좌 유형(예: 401(k), IRA, 일반 증권계좌)에 따라 다르며 포함되지 않습니다.' },
				{ q: '어떤 수익률을 사용해야 하나요?', a: '장기 주식 수익률은 인플레이션 이전 기준 역사적으로 6-8% 수준이었으나 과거 성과는 미래를 보장하지 않습니다. 보수적인 값을 사용하세요.' }
			],
			ja: [
				{ q: 'これは金融アドバイスですか?', a: 'いいえ。本計算機は教育目的のみで、金融・投資・退職設計のアドバイスではありません。個別の助言は専門家にご相談ください。' },
				{ q: 'インフレは反映されますか?', a: 'いいえ。結果は名目額です。退職時の購買力を推定するには、期待リターンから長期インフレ想定値を差し引いてください。' },
				{ q: '税金は含まれますか?', a: 'いいえ。拠出時・運用時・引き出し時の税金は口座種類(例: 401(k)、IRA、課税証券口座)によって異なり、含まれていません。' },
				{ q: 'どの利率を使うべきですか?', a: '長期の株式リターンは歴史的にインフレ前で6〜8%でしたが、過去実績は将来を保証しません。保守的な値を使ってください。' }
			],
			zh: [
				{ q: '这是财务建议吗？', a: '不是。本计算器仅供教育用途，不构成财务、投资或退休规划建议。请咨询合格顾问以获得个性化建议。' },
				{ q: '是否考虑通胀？', a: '没有。结果以名义金额表示。要估算退休时的购买力，请从预期收益中减去长期通胀假设。' },
				{ q: '是否包含税收？', a: '没有。缴存、增值和提取阶段的税收取决于账户类型（如401(k)、IRA、应税经纪账户），未包含在内。' },
				{ q: '应使用什么收益率？', a: '长期股票收益历史上在通胀前约为6-8%，但过去表现不代表未来。请使用保守估计。' }
			]
		},
		related: [
			{ href: '/compound', label: { en: 'Compound Interest', ko: '복리 계산기', ja: '複利計算機', zh: '复利计算器' } },
			{ href: '/dca', label: { en: 'DCA Calculator', ko: 'DCA 계산기', ja: 'DCA計算機', zh: 'DCA计算器' } },
			{ href: '/roi', label: { en: 'ROI Calculator', ko: 'ROI 계산기', ja: 'ROI計算機', zh: 'ROI计算器' } }
		]
	};

	let currentAge = 30;
	let retireAge = 65;
	let currentSavings = 50000;
	let monthlyContribution = 1000;
	let expectedReturn = 7;

	$: yearsToRetirement = retireAge - currentAge;
	$: r = expectedReturn / 100 / 12;
	$: n = yearsToRetirement * 12;
	$: futureValue = currentSavings * Math.pow(1 + r, n) + monthlyContribution * ((Math.pow(1 + r, n) - 1) / r);
	$: totalContributed = currentSavings + (monthlyContribution * 12 * yearsToRetirement);
	$: investmentGrowth = futureValue - totalContributed;

	function formatCurrency(value: number): string {
		return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);
	}
</script>

<svelte:head>
	<title>{t('retirement.title')} - SDK.bz</title>
	<meta name="description" content={t('retirement.desc')} />
	<meta property="og:title" content="{t('retirement.title')} - SDK.bz" />
	<meta property="og:description" content={t('retirement.desc')} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-8">
	<div class="text-center mb-8">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t('retirement.title')}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t('retirement.desc')}</p>
	</div>

	<div class="grid md:grid-cols-2 gap-8">
		<div class="space-y-6 bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700">
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('retirement.age')}</label>
				<input type="number" bind:value={currentAge} min="18" max="80"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-orange-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('retirement.retireAge')}</label>
				<input type="number" bind:value={retireAge} min="40" max="90"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-orange-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('retirement.savings')}</label>
				<input type="number" bind:value={currentSavings} min="0" step="5000"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-orange-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('retirement.monthly')}</label>
				<input type="number" bind:value={monthlyContribution} min="0" step="100"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-orange-400" />
			</div>
			<div>
				<label class="block text-sm font-medium text-gray-700 dark:text-dark-300 mb-2">{t('retirement.rate')}</label>
				<input type="number" bind:value={expectedReturn} min="0" max="15" step="0.5"
					class="w-full px-4 py-3 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-dark-700 rounded-xl text-gray-900 dark:text-dark-100 focus:ring-2 focus:ring-orange-400" />
			</div>
		</div>

		<div class="space-y-4">
			<div class="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-2xl border border-orange-200 dark:border-orange-800">
				<p class="text-sm text-orange-600 dark:text-orange-400 mb-1">{t('retirement.total')}</p>
				<p class="text-3xl font-bold text-orange-700 dark:text-orange-300">{formatCurrency(futureValue)}</p>
				<p class="text-sm text-orange-600 dark:text-orange-400 mt-2">in {yearsToRetirement} years</p>
			</div>
			<div class="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700 space-y-3">
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('retirement.contributed')}</span>
					<span class="font-semibold text-gray-900 dark:text-dark-100">{formatCurrency(totalContributed)}</span>
				</div>
				<div class="flex justify-between">
					<span class="text-gray-600 dark:text-dark-400">{t('retirement.growth')}</span>
					<span class="font-semibold text-green-600 dark:text-green-400">{formatCurrency(investmentGrowth)}</span>
				</div>
			</div>
			<div class="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700">
				<div class="h-4 rounded-full overflow-hidden flex">
					<div class="bg-orange-500" style="width: {(totalContributed / futureValue) * 100}%"></div>
					<div class="bg-green-500" style="width: {(investmentGrowth / futureValue) * 100}%"></div>
				</div>
				<div class="flex justify-between mt-2 text-xs">
					<span class="text-orange-600">Contributions: {((totalContributed / futureValue) * 100).toFixed(1)}%</span>
					<span class="text-green-600">Growth: {((investmentGrowth / futureValue) * 100).toFixed(1)}%</span>
				</div>
			</div>
		</div>
	</div>

	<ToolContent {lang} content={toolContent} />
</div>
