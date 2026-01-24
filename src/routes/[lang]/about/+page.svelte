<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	const content: Record<Locale, { title: string; sections: { heading: string; text: string }[] }> = {
		en: {
			title: 'About SDK.bz',
			sections: [
				{
					heading: 'Our Mission',
					text: 'SDK.bz provides free financial and cryptocurrency calculators to help you make informed decisions. From loans to crypto mining, we simplify complex calculations.'
				},
				{
					heading: 'What We Offer',
					text: 'Our suite includes loan calculators, compound interest calculators, mortgage planners, retirement planners, ROI calculators, currency converters, crypto profit calculators, DCA simulators, staking reward calculators, and mining profitability tools.'
				},
				{
					heading: 'Privacy First',
					text: 'All calculations happen in your browser. We do not store, track, or analyze any of your financial data. Your numbers stay private.'
				},
				{
					heading: 'Disclaimer',
					text: 'These calculators are for informational purposes only. They should not be considered financial advice. Please consult a professional for financial decisions.'
				},
				{
					heading: 'Contact',
					text: 'For questions, feedback, or partnership inquiries, please reach out to us at hello@sdk.bz'
				}
			]
		},
		ko: {
			title: 'SDK.bz 소개',
			sections: [
				{
					heading: '우리의 미션',
					text: 'SDK.bz는 현명한 결정을 내릴 수 있도록 무료 금융 및 암호화폐 계산기를 제공합니다. 대출부터 채굴까지 복잡한 계산을 간단하게 만듭니다.'
				},
				{
					heading: '제공 서비스',
					text: '대출 계산기, 복리 계산기, 모기지 플래너, 은퇴 플래너, ROI 계산기, 환율 변환기, 크립토 수익 계산기, DCA 시뮬레이터, 스테이킹 보상 계산기, 채굴 수익성 도구를 제공합니다.'
				},
				{
					heading: '개인정보 우선',
					text: '모든 계산은 브라우저에서 이루어집니다. 금융 데이터를 저장, 추적, 분석하지 않습니다. 숫자는 비공개로 유지됩니다.'
				},
				{
					heading: '면책 조항',
					text: '이 계산기는 정보 제공 목적으로만 사용됩니다. 재정적 조언으로 간주되어서는 안 됩니다. 재정 결정은 전문가와 상담하세요.'
				},
				{
					heading: '연락처',
					text: '질문, 피드백, 파트너십 문의는 hello@sdk.bz로 연락해 주세요.'
				}
			]
		},
		ja: {
			title: 'SDK.bzについて',
			sections: [
				{
					heading: '私たちの使命',
					text: 'SDK.bzは、賢明な判断ができるよう無料の金融・暗号通貨計算機を提供しています。ローンからマイニングまで、複雑な計算をシンプルにします。'
				},
				{
					heading: '提供サービス',
					text: 'ローン計算機、複利計算機、住宅ローンプランナー、退職プランナー、ROI計算機、通貨換算、暗号通貨利益計算機、DCAシミュレーター、ステーキング報酬計算機、マイニング収益性ツールを提供しています。'
				},
				{
					heading: 'プライバシー優先',
					text: 'すべての計算はブラウザ内で行われます。金融データの保存、追跡、分析は一切行いません。数字はプライベートに保たれます。'
				},
				{
					heading: '免責事項',
					text: 'これらの計算機は情報提供のみを目的としています。財務アドバイスとして考慮されるべきではありません。財務上の決定については専門家にご相談ください。'
				},
				{
					heading: 'お問い合わせ',
					text: 'ご質問、フィードバック、パートナーシップのお問い合わせはhello@sdk.bzまでご連絡ください。'
				}
			]
		},
		zh: {
			title: '关于 SDK.bz',
			sections: [
				{
					heading: '我们的使命',
					text: 'SDK.bz 提供免费的金融和加密货币计算器，帮助您做出明智的决策。从贷款到挖矿，我们简化复杂的计算。'
				},
				{
					heading: '服务内容',
					text: '我们提供贷款计算器、复利计算器、抵押贷款规划器、退休规划器、ROI计算器、货币转换器、加密货币利润计算器、DCA模拟器、质押奖励计算器和挖矿盈利能力工具。'
				},
				{
					heading: '隐私优先',
					text: '所有计算都在您的浏览器中进行。我们不存储、跟踪或分析您的任何财务数据。您的数字保持私密。'
				},
				{
					heading: '免责声明',
					text: '这些计算器仅供参考。不应被视为财务建议。有关财务决策，请咨询专业人士。'
				},
				{
					heading: '联系我们',
					text: '如有问题、反馈或合作咨询，请通过 hello@sdk.bz 联系我们。'
				}
			]
		}
	};

	$: t = content[lang] || content.en;
</script>

<svelte:head>
	<title>{t.title} - SDK.bz</title>
</svelte:head>

<div class="max-w-3xl mx-auto px-4 py-12">
	<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-8">{t.title}</h1>

	<div class="space-y-8">
		{#each t.sections as section}
			<div>
				<h2 class="text-xl font-semibold text-gray-800 dark:text-dark-200 mb-3">{section.heading}</h2>
				<p class="text-gray-600 dark:text-dark-400 leading-relaxed">{section.text}</p>
			</div>
		{/each}
	</div>
</div>
