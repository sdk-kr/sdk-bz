<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	const content: Record<Locale, {
		title: string;
		subtitle: string;
		metaDesc: string;
		sections: { heading: string; text: string }[]
	}> = {
		en: {
			title: 'Contact Us',
			subtitle: 'We\'d love to hear from you',
			metaDesc: 'Contact SDK.bz for questions, feedback, or support regarding our financial and cryptocurrency calculators.',
			sections: [
				{
					heading: 'General Inquiries',
					text: 'For general questions, feedback, or suggestions about our financial and cryptocurrency calculators, please email us at hello@sdk.bz. Whether you want to share your experience with our loan calculator, suggest improvements for our crypto profit calculator, or simply say hello, we\'re always happy to hear from our users. Our tools are designed to help you make better financial decisions, and your input helps us improve them continuously.'
				},
				{
					heading: 'Technical Support',
					text: 'If you encounter any issues with our calculators, please describe the problem in detail and send it to support@sdk.bz. Include information about your browser, device, and the specific calculator you were using. Screenshots are helpful if applicable. Our technical team reviews all support tickets and typically responds within 24-48 hours. We\'re committed to ensuring our calculators work flawlessly across all devices and browsers.'
				},
				{
					heading: 'Feature Requests',
					text: 'Have an idea for a new calculator or feature? We\'d love to hear it! Send your suggestions to hello@sdk.bz. We regularly review user feedback and prioritize features based on demand. Some of our most popular calculators, including the DCA simulator and staking reward calculator, were created based on user requests. Your ideas help shape the future of SDK.bz.'
				},
				{
					heading: 'Partnership & Business',
					text: 'For business partnerships, collaborations, API access, or advertising inquiries, contact us at business@sdk.bz. We\'re open to working with financial institutions, cryptocurrency platforms, educational organizations, and content creators. If you\'re interested in integrating our calculators into your platform or exploring other partnership opportunities, we\'d love to discuss how we can work together.'
				},
				{
					heading: 'Bug Reports',
					text: 'Found a bug or calculation error? Please report it immediately to support@sdk.bz. Accurate calculations are critical in financial tools, and we take every bug report seriously. Include the input values you used, the result you got, and what you expected to see. We typically fix critical bugs within 24 hours and deploy updates promptly.'
				},
				{
					heading: 'Response Time',
					text: 'We typically respond to all inquiries within 24-48 hours during business days. For urgent technical issues, please include "URGENT" in your email subject line. We value every piece of feedback and strive to provide helpful, timely responses. Thank you for your patience and for being part of the SDK.bz community.'
				}
			]
		},
		ko: {
			title: '문의하기',
			subtitle: '여러분의 의견을 기다립니다',
			metaDesc: '금융 및 암호화폐 계산기에 관한 질문, 피드백, 지원은 SDK.bz로 연락해 주세요.',
			sections: [
				{
					heading: '일반 문의',
					text: '금융 및 암호화폐 계산기에 대한 일반적인 질문, 피드백 또는 제안은 hello@sdk.bz로 이메일을 보내주세요. 대출 계산기 사용 경험을 공유하거나, 크립토 수익 계산기 개선 사항을 제안하거나, 단순히 인사를 건네고 싶으실 때 언제든 환영합니다. 저희 도구는 더 나은 재정 결정을 내리는 데 도움을 주기 위해 설계되었으며, 여러분의 의견은 지속적인 개선에 큰 도움이 됩니다.'
				},
				{
					heading: '기술 지원',
					text: '계산기 사용 중 문제가 발생하면 문제를 자세히 설명하여 support@sdk.bz로 보내주세요. 브라우저, 기기, 사용 중인 특정 계산기에 대한 정보를 포함해 주세요. 해당되는 경우 스크린샷도 도움이 됩니다. 기술팀은 모든 지원 티켓을 검토하며 일반적으로 24-48시간 내에 답변드립니다. 모든 기기와 브라우저에서 계산기가 완벽하게 작동하도록 최선을 다하고 있습니다.'
				},
				{
					heading: '기능 요청',
					text: '새로운 계산기나 기능에 대한 아이디어가 있으신가요? 꼭 들려주세요! hello@sdk.bz로 제안을 보내주세요. 정기적으로 사용자 피드백을 검토하고 수요에 따라 기능의 우선순위를 정합니다. DCA 시뮬레이터와 스테이킹 보상 계산기를 포함한 가장 인기 있는 계산기 중 일부는 사용자 요청을 기반으로 만들어졌습니다. 여러분의 아이디어가 SDK.bz의 미래를 만들어 갑니다.'
				},
				{
					heading: '파트너십 & 비즈니스',
					text: '비즈니스 파트너십, 협업, API 액세스 또는 광고 문의는 business@sdk.bz로 연락해 주세요. 금융 기관, 암호화폐 플랫폼, 교육 기관, 콘텐츠 크리에이터와 함께 일할 수 있습니다. 계산기를 플랫폼에 통합하거나 다른 파트너십 기회를 탐색하는 데 관심이 있으시면 어떻게 함께 일할 수 있는지 논의하고 싶습니다.'
				},
				{
					heading: '버그 신고',
					text: '버그나 계산 오류를 발견하셨나요? support@sdk.bz로 즉시 신고해 주세요. 금융 도구에서 정확한 계산은 매우 중요하며, 모든 버그 신고를 진지하게 받아들입니다. 사용한 입력 값, 얻은 결과, 예상했던 결과를 포함해 주세요. 일반적으로 중요한 버그는 24시간 내에 수정하고 신속하게 업데이트를 배포합니다.'
				},
				{
					heading: '응답 시간',
					text: '영업일 기준 24-48시간 내에 모든 문의에 답변드립니다. 긴급한 기술 문제의 경우 이메일 제목에 "긴급"을 포함해 주세요. 모든 피드백을 소중히 여기며 도움이 되고 시기적절한 답변을 제공하기 위해 노력합니다. 인내심에 감사드리며 SDK.bz 커뮤니티의 일원이 되어 주셔서 감사합니다.'
				}
			]
		},
		ja: {
			title: 'お問い合わせ',
			subtitle: 'ご連絡をお待ちしております',
			metaDesc: '金融・暗号通貨計算機に関するご質問、フィードバック、サポートはSDK.bzまでお問い合わせください。',
			sections: [
				{
					heading: '一般的なお問い合わせ',
					text: '金融および暗号通貨計算機に関する一般的なご質問、フィードバック、ご提案はhello@sdk.bzまでメールでお送りください。ローン計算機の使用体験を共有したり、暗号通貨利益計算機の改善を提案したり、単にご挨拶をしたい場合でも、いつでも歓迎いたします。私たちのツールはより良い財務決定を下すお手伝いをするために設計されており、皆様からのご意見は継続的な改善に役立ちます。'
				},
				{
					heading: '技術サポート',
					text: '計算機で問題が発生した場合は、問題を詳しく説明してsupport@sdk.bzまでお送りください。ブラウザ、デバイス、使用している特定の計算機に関する情報を含めてください。該当する場合はスクリーンショットも役立ちます。技術チームはすべてのサポートチケットを確認し、通常24〜48時間以内に返信いたします。すべてのデバイスとブラウザで計算機が完璧に動作するよう努めています。'
				},
				{
					heading: '機能リクエスト',
					text: '新しい計算機や機能のアイデアがありますか？ぜひお聞かせください！hello@sdk.bzまでご提案をお送りください。定期的にユーザーフィードバックを確認し、需要に基づいて機能の優先順位を決定しています。DCAシミュレーターやステーキング報酬計算機など、最も人気のある計算機の一部はユーザーリクエストに基づいて作成されました。皆様のアイデアがSDK.bzの未来を形作ります。'
				},
				{
					heading: 'パートナーシップ & ビジネス',
					text: 'ビジネスパートナーシップ、コラボレーション、APIアクセス、広告に関するお問い合わせはbusiness@sdk.bzまでご連絡ください。金融機関、暗号通貨プラットフォーム、教育機関、コンテンツクリエイターとの協業を歓迎いたします。計算機をプラットフォームに統合したり、他のパートナーシップの機会を探ることに興味がある場合は、どのように協力できるかぜひご相談ください。'
				},
				{
					heading: 'バグ報告',
					text: 'バグや計算エラーを発見されましたか？すぐにsupport@sdk.bzまでご報告ください。金融ツールでは正確な計算が非常に重要であり、すべてのバグ報告を真剣に受け止めています。使用した入力値、得られた結果、期待していた結果を含めてください。通常、重大なバグは24時間以内に修正し、速やかにアップデートを配信します。'
				},
				{
					heading: '返信時間',
					text: '営業日の24〜48時間以内にすべてのお問い合わせに返信いたします。緊急の技術的な問題については、メールの件名に「緊急」を含めてください。すべてのフィードバックを大切にし、役立つタイムリーな返答を提供するよう努めています。ご理解いただきありがとうございます。SDK.bzコミュニティの一員でいてくださり感謝いたします。'
				}
			]
		},
		zh: {
			title: '联系我们',
			subtitle: '期待您的来信',
			metaDesc: '如有关于金融和加密货币计算器的问题、反馈或支持需求，请联系SDK.bz。',
			sections: [
				{
					heading: '一般咨询',
					text: '如有关于金融和加密货币计算器的一般问题、反馈或建议，请发送邮件至hello@sdk.bz。无论您是想分享贷款计算器的使用体验、建议改进加密货币利润计算器，还是只是想打个招呼，我们都非常欢迎。我们的工具旨在帮助您做出更好的财务决策，您的反馈有助于我们不断改进。'
				},
				{
					heading: '技术支持',
					text: '如果您在使用计算器时遇到任何问题，请详细描述问题并发送至support@sdk.bz。请包含您的浏览器、设备以及您正在使用的具体计算器的信息。如果适用，屏幕截图会很有帮助。我们的技术团队会审查所有支持工单，通常在24-48小时内回复。我们致力于确保计算器在所有设备和浏览器上完美运行。'
				},
				{
					heading: '功能请求',
					text: '有新计算器或功能的想法吗？我们很想听听！请将您的建议发送至hello@sdk.bz。我们定期审查用户反馈，并根据需求确定功能优先级。我们最受欢迎的一些计算器，包括DCA模拟器和质押奖励计算器，都是根据用户请求创建的。您的想法帮助塑造SDK.bz的未来。'
				},
				{
					heading: '合作与商务',
					text: '如有商业合作、协作、API访问或广告咨询，请联系business@sdk.bz。我们愿意与金融机构、加密货币平台、教育机构和内容创作者合作。如果您有兴趣将我们的计算器集成到您的平台或探索其他合作机会，我们很乐意讨论如何合作。'
				},
				{
					heading: '错误报告',
					text: '发现了错误或计算错误？请立即向support@sdk.bz报告。在金融工具中，准确的计算至关重要，我们认真对待每一份错误报告。请包含您使用的输入值、得到的结果以及您期望看到的结果。我们通常在24小时内修复关键错误并及时部署更新。'
				},
				{
					heading: '响应时间',
					text: '我们通常在工作日的24-48小时内回复所有咨询。如有紧急技术问题，请在邮件主题中注明"紧急"。我们重视每一条反馈，并努力提供有帮助的及时回复。感谢您的耐心等待，感谢您成为SDK.bz社区的一员。'
				}
			]
		}
	};

	$: t = content[lang] || content.en;
</script>

<svelte:head>
	<title>{t.title} - SDK.bz</title>
	<meta name="description" content={t.metaDesc} />
</svelte:head>

<div class="max-w-3xl mx-auto px-4 py-12">
	<div class="text-center mb-12">
		<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t.title}</h1>
		<p class="text-gray-600 dark:text-dark-400">{t.subtitle}</p>
	</div>

	<div class="space-y-6">
		{#each t.sections as section}
			<div class="bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-200 dark:border-dark-700">
				<h2 class="text-xl font-semibold text-gray-800 dark:text-dark-200 mb-3">{section.heading}</h2>
				<p class="text-gray-600 dark:text-dark-400 leading-relaxed">{section.text}</p>
			</div>
		{/each}
	</div>

	<div class="mt-12 text-center">
		<p class="text-sm text-gray-500 dark:text-dark-500">
			SDK.bz - Free Financial & Crypto Calculators
		</p>
	</div>
</div>
