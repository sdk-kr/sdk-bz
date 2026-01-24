<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	const content: Record<Locale, {
		title: string;
		subtitle: string;
		metaDesc: string;
		faqs: { q: string; a: string }[]
	}> = {
		en: {
			title: 'Frequently Asked Questions',
			subtitle: 'Find answers to common questions about SDK.bz',
			metaDesc: 'Frequently asked questions about SDK.bz financial and cryptocurrency calculators. Learn about our loan, mortgage, crypto profit, DCA, staking, and mining calculators.',
			faqs: [
				{
					q: 'What is SDK.bz?',
					a: 'SDK.bz is a comprehensive collection of free financial and cryptocurrency calculators designed to help you make informed decisions. Our tools include loan calculators, compound interest calculators, mortgage planners, retirement planners, ROI calculators, currency converters, crypto profit calculators, DCA simulators, staking reward calculators, and mining profitability tools. All calculators are completely free to use with no registration required.'
				},
				{
					q: 'Are the calculators free to use?',
					a: 'Yes, all calculators on SDK.bz are completely free with no hidden costs or premium features locked behind paywalls. We believe financial tools should be accessible to everyone. You can use our loan calculator, compound interest calculator, crypto profit calculator, and all other tools unlimited times without paying anything.'
				},
				{
					q: 'Is my financial data safe?',
					a: 'Absolutely. All calculations happen entirely in your browser using JavaScript. We do not store, track, transmit, or analyze any of your financial data. Your numbers never leave your device. This privacy-first approach means you can confidently enter sensitive financial information without worrying about data breaches or third-party access.'
				},
				{
					q: 'How accurate are the calculators?',
					a: 'Our calculators use standard financial formulas and are designed to provide accurate estimates. However, they are for informational purposes only and should not be considered financial advice. Real-world results may vary due to factors like fees, taxes, market fluctuations, and changing interest rates. Always consult with a qualified financial advisor for important financial decisions.'
				},
				{
					q: 'Do the calculators work on mobile devices?',
					a: 'Yes, SDK.bz is fully responsive and works on all devices including smartphones, tablets, and desktop computers. Our calculators are optimized for touch screens and work seamlessly on iOS and Android devices. You can calculate loan payments, track crypto profits, or plan your retirement from anywhere.'
				},
				{
					q: 'Can I use the calculators offline?',
					a: 'Our calculators work entirely in your browser and don\'t require server communication for calculations. Once the page is loaded, you can perform calculations even with limited connectivity. However, you need an internet connection to initially load the page and access the latest features.'
				},
				{
					q: 'What cryptocurrencies do your crypto calculators support?',
					a: 'Our crypto calculators are designed to work with any cryptocurrency. You can input values for Bitcoin, Ethereum, Solana, or any other crypto asset. The profit calculator, DCA simulator, staking calculator, and mining profitability tools all accept custom inputs, making them versatile for any cryptocurrency investment analysis.'
				},
				{
					q: 'How do I report a bug or calculation error?',
					a: 'If you find a bug or believe a calculation is incorrect, please email us at support@sdk.bz with details about the issue. Include the calculator you were using, the input values, the result you got, and what you expected. We take accuracy seriously and typically fix reported issues within 24-48 hours.'
				},
				{
					q: 'Can I suggest a new calculator?',
					a: 'Yes! We love hearing from users. Send your calculator ideas to hello@sdk.bz. We regularly review suggestions and prioritize development based on user demand. Many of our current calculators were created based on user requests, including the DCA simulator and staking reward calculator.'
				},
				{
					q: 'Is there an API available for developers?',
					a: 'We are working on providing API access for developers who want to integrate our calculators into their applications. If you\'re interested in API access or have specific integration needs, please contact us at business@sdk.bz to discuss partnership opportunities and early access.'
				}
			]
		},
		ko: {
			title: '자주 묻는 질문',
			subtitle: 'SDK.bz에 대한 일반적인 질문에 대한 답변',
			metaDesc: 'SDK.bz 금융 및 암호화폐 계산기에 대한 자주 묻는 질문. 대출, 모기지, 크립토 수익, DCA, 스테이킹, 채굴 계산기에 대해 알아보세요.',
			faqs: [
				{
					q: 'SDK.bz란 무엇인가요?',
					a: 'SDK.bz는 현명한 결정을 내릴 수 있도록 설계된 무료 금융 및 암호화폐 계산기의 종합 컬렉션입니다. 대출 계산기, 복리 계산기, 모기지 플래너, 은퇴 플래너, ROI 계산기, 환율 변환기, 크립토 수익 계산기, DCA 시뮬레이터, 스테이킹 보상 계산기, 채굴 수익성 도구를 포함합니다. 모든 계산기는 등록 없이 완전히 무료로 사용할 수 있습니다.'
				},
				{
					q: '계산기는 무료인가요?',
					a: '네, SDK.bz의 모든 계산기는 숨겨진 비용이나 유료 벽 뒤에 잠긴 프리미엄 기능 없이 완전히 무료입니다. 금융 도구는 모든 사람이 접근할 수 있어야 한다고 믿습니다. 대출 계산기, 복리 계산기, 크립토 수익 계산기 및 기타 모든 도구를 비용 지불 없이 무제한으로 사용할 수 있습니다.'
				},
				{
					q: '제 금융 데이터는 안전한가요?',
					a: '물론입니다. 모든 계산은 JavaScript를 사용하여 브라우저에서 완전히 이루어집니다. 금융 데이터를 저장, 추적, 전송 또는 분석하지 않습니다. 숫자는 기기를 떠나지 않습니다. 이러한 개인정보 우선 접근 방식은 데이터 유출이나 제3자 액세스에 대한 걱정 없이 민감한 금융 정보를 자신 있게 입력할 수 있음을 의미합니다.'
				},
				{
					q: '계산기는 얼마나 정확한가요?',
					a: '계산기는 표준 금융 공식을 사용하며 정확한 추정치를 제공하도록 설계되었습니다. 그러나 정보 제공 목적으로만 사용되며 재정적 조언으로 간주되어서는 안 됩니다. 수수료, 세금, 시장 변동, 금리 변동 등의 요인으로 인해 실제 결과는 다를 수 있습니다. 중요한 재정 결정은 항상 자격을 갖춘 재정 고문과 상담하세요.'
				},
				{
					q: '계산기가 모바일 기기에서 작동하나요?',
					a: '네, SDK.bz는 완전히 반응형이며 스마트폰, 태블릿, 데스크톱 컴퓨터를 포함한 모든 기기에서 작동합니다. 계산기는 터치 스크린에 최적화되어 있으며 iOS 및 Android 기기에서 원활하게 작동합니다. 어디서든 대출 상환액을 계산하고, 크립토 수익을 추적하거나, 은퇴를 계획할 수 있습니다.'
				},
				{
					q: '계산기를 오프라인에서 사용할 수 있나요?',
					a: '계산기는 브라우저에서 완전히 작동하며 계산을 위해 서버 통신이 필요하지 않습니다. 페이지가 로드되면 제한된 연결 상태에서도 계산을 수행할 수 있습니다. 그러나 페이지를 처음 로드하고 최신 기능에 액세스하려면 인터넷 연결이 필요합니다.'
				},
				{
					q: '크립토 계산기는 어떤 암호화폐를 지원하나요?',
					a: '크립토 계산기는 모든 암호화폐와 함께 작동하도록 설계되었습니다. 비트코인, 이더리움, 솔라나 또는 기타 암호화 자산에 대한 값을 입력할 수 있습니다. 수익 계산기, DCA 시뮬레이터, 스테이킹 계산기, 채굴 수익성 도구는 모두 사용자 정의 입력을 허용하여 모든 암호화폐 투자 분석에 다용도로 사용할 수 있습니다.'
				},
				{
					q: '버그나 계산 오류를 어떻게 신고하나요?',
					a: '버그를 발견하거나 계산이 잘못되었다고 생각되면 문제에 대한 세부 정보와 함께 support@sdk.bz로 이메일을 보내주세요. 사용 중인 계산기, 입력 값, 얻은 결과, 예상한 결과를 포함하세요. 정확성을 중요하게 생각하며 일반적으로 신고된 문제를 24-48시간 내에 수정합니다.'
				},
				{
					q: '새 계산기를 제안할 수 있나요?',
					a: '네! 사용자 의견을 듣는 것을 좋아합니다. 계산기 아이디어를 hello@sdk.bz로 보내주세요. 정기적으로 제안을 검토하고 사용자 수요에 따라 개발 우선순위를 정합니다. DCA 시뮬레이터와 스테이킹 보상 계산기를 포함한 현재 계산기 중 많은 것이 사용자 요청을 기반으로 만들어졌습니다.'
				},
				{
					q: '개발자용 API가 있나요?',
					a: '계산기를 애플리케이션에 통합하려는 개발자를 위한 API 액세스를 제공하기 위해 작업 중입니다. API 액세스에 관심이 있거나 특정 통합 요구 사항이 있으면 business@sdk.bz로 연락하여 파트너십 기회와 조기 액세스에 대해 논의하세요.'
				}
			]
		},
		ja: {
			title: 'よくある質問',
			subtitle: 'SDK.bzに関する一般的な質問への回答',
			metaDesc: 'SDK.bzの金融・暗号通貨計算機に関するよくある質問。ローン、住宅ローン、暗号通貨利益、DCA、ステーキング、マイニング計算機について。',
			faqs: [
				{
					q: 'SDK.bzとは？',
					a: 'SDK.bzは、賢明な判断ができるよう設計された無料の金融・暗号通貨計算機の総合コレクションです。ローン計算機、複利計算機、住宅ローンプランナー、退職プランナー、ROI計算機、通貨換算、暗号通貨利益計算機、DCAシミュレーター、ステーキング報酬計算機、マイニング収益性ツールを含みます。すべての計算機は登録不要で完全無料でご利用いただけます。'
				},
				{
					q: '計算機は無料ですか？',
					a: 'はい、SDK.bzのすべての計算機は隠れた費用やペイウォールの後ろにロックされたプレミアム機能なしで完全に無料です。金融ツールは誰もがアクセスできるべきだと考えています。ローン計算機、複利計算機、暗号通貨利益計算機、その他すべてのツールを無制限に無料で使用できます。'
				},
				{
					q: '金融データは安全ですか？',
					a: 'もちろんです。すべての計算はJavaScriptを使用してブラウザ内で完全に行われます。金融データの保存、追跡、送信、分析は一切行いません。数字はデバイスから離れることはありません。このプライバシー優先のアプローチにより、データ漏洩やサードパーティのアクセスを心配することなく、機密性の高い金融情報を自信を持って入力できます。'
				},
				{
					q: '計算機はどのくらい正確ですか？',
					a: '計算機は標準的な金融公式を使用し、正確な見積もりを提供するよう設計されています。ただし、情報提供のみを目的としており、財務アドバイスとして考慮されるべきではありません。手数料、税金、市場変動、金利変動などの要因により、実際の結果は異なる場合があります。重要な財務決定については、常に資格のある財務アドバイザーにご相談ください。'
				},
				{
					q: '計算機はモバイルデバイスで動作しますか？',
					a: 'はい、SDK.bzは完全にレスポンシブで、スマートフォン、タブレット、デスクトップコンピューターを含むすべてのデバイスで動作します。計算機はタッチスクリーン向けに最適化されており、iOSおよびAndroidデバイスでシームレスに動作します。どこからでもローン支払いを計算し、暗号通貨の利益を追跡したり、退職を計画したりできます。'
				},
				{
					q: '計算機はオフラインで使用できますか？',
					a: '計算機は完全にブラウザ内で動作し、計算にサーバー通信を必要としません。ページが読み込まれると、接続が制限されていても計算を実行できます。ただし、ページを最初に読み込んだり、最新の機能にアクセスするにはインターネット接続が必要です。'
				},
				{
					q: '暗号通貨計算機はどの暗号通貨をサポートしていますか？',
					a: '暗号通貨計算機はあらゆる暗号通貨で動作するよう設計されています。ビットコイン、イーサリアム、ソラナ、その他の暗号資産の値を入力できます。利益計算機、DCAシミュレーター、ステーキング計算機、マイニング収益性ツールはすべてカスタム入力を受け付けるため、あらゆる暗号通貨投資分析に多用途に使用できます。'
				},
				{
					q: 'バグや計算エラーはどのように報告しますか？',
					a: 'バグを発見したり、計算が正しくないと思われる場合は、問題の詳細とともにsupport@sdk.bzまでメールでお送りください。使用していた計算機、入力値、得られた結果、期待していた結果を含めてください。正確性を重視しており、通常24〜48時間以内に報告された問題を修正します。'
				},
				{
					q: '新しい計算機を提案できますか？',
					a: 'はい！ユーザーからのご意見をお待ちしています。計算機のアイデアをhello@sdk.bzまでお送りください。定期的に提案を確認し、ユーザーの需要に基づいて開発の優先順位を決定しています。DCAシミュレーターやステーキング報酬計算機など、現在の計算機の多くはユーザーリクエストに基づいて作成されました。'
				},
				{
					q: '開発者向けAPIはありますか？',
					a: '計算機をアプリケーションに統合したい開発者向けにAPIアクセスを提供する準備を進めています。APIアクセスに興味がある場合や、特定の統合ニーズがある場合は、business@sdk.bzまでご連絡いただき、パートナーシップの機会や早期アクセスについてご相談ください。'
				}
			]
		},
		zh: {
			title: '常见问题',
			subtitle: '查找有关SDK.bz的常见问题解答',
			metaDesc: 'SDK.bz金融和加密货币计算器的常见问题。了解我们的贷款、抵押贷款、加密货币利润、DCA、质押和挖矿计算器。',
			faqs: [
				{
					q: '什么是SDK.bz？',
					a: 'SDK.bz是一个全面的免费金融和加密货币计算器集合，旨在帮助您做出明智的决策。我们的工具包括贷款计算器、复利计算器、抵押贷款规划器、退休规划器、ROI计算器、货币转换器、加密货币利润计算器、DCA模拟器、质押奖励计算器和挖矿盈利能力工具。所有计算器无需注册即可完全免费使用。'
				},
				{
					q: '计算器免费使用吗？',
					a: '是的，SDK.bz上的所有计算器完全免费，没有隐藏费用或付费墙后锁定的高级功能。我们相信金融工具应该对每个人都可访问。您可以无限次免费使用我们的贷款计算器、复利计算器、加密货币利润计算器和所有其他工具。'
				},
				{
					q: '我的财务数据安全吗？',
					a: '绝对安全。所有计算完全使用JavaScript在您的浏览器中进行。我们不存储、跟踪、传输或分析您的任何财务数据。您的数字永远不会离开您的设备。这种隐私优先的方法意味着您可以放心地输入敏感的财务信息，而无需担心数据泄露或第三方访问。'
				},
				{
					q: '计算器有多准确？',
					a: '我们的计算器使用标准金融公式，旨在提供准确的估算。但是，它们仅供参考，不应被视为财务建议。由于费用、税收、市场波动和利率变化等因素，实际结果可能会有所不同。重要的财务决策请始终咨询合格的财务顾问。'
				},
				{
					q: '计算器在移动设备上工作吗？',
					a: '是的，SDK.bz完全响应式，适用于所有设备，包括智能手机、平板电脑和台式电脑。我们的计算器针对触摸屏进行了优化，可在iOS和Android设备上无缝工作。您可以随时随地计算贷款还款、跟踪加密货币利润或规划退休。'
				},
				{
					q: '计算器可以离线使用吗？',
					a: '我们的计算器完全在浏览器中运行，不需要服务器通信来进行计算。页面加载后，即使在连接受限的情况下也可以执行计算。但是，您需要互联网连接才能首次加载页面并访问最新功能。'
				},
				{
					q: '加密货币计算器支持哪些加密货币？',
					a: '我们的加密货币计算器设计为可与任何加密货币配合使用。您可以输入比特币、以太坊、Solana或任何其他加密资产的值。利润计算器、DCA模拟器、质押计算器和挖矿盈利能力工具都接受自定义输入，使它们可用于任何加密货币投资分析。'
				},
				{
					q: '如何报告错误或计算错误？',
					a: '如果您发现错误或认为计算不正确，请将问题详情发送至support@sdk.bz。请包含您使用的计算器、输入值、得到的结果以及您期望的结果。我们非常重视准确性，通常在24-48小时内修复报告的问题。'
				},
				{
					q: '我可以建议新的计算器吗？',
					a: '可以！我们很乐意听取用户的意见。请将您的计算器想法发送至hello@sdk.bz。我们定期审查建议，并根据用户需求确定开发优先级。我们目前的许多计算器，包括DCA模拟器和质押奖励计算器，都是根据用户请求创建的。'
				},
				{
					q: '有开发者API吗？',
					a: '我们正在为希望将计算器集成到其应用程序中的开发者提供API访问。如果您对API访问感兴趣或有特定的集成需求，请联系business@sdk.bz讨论合作机会和早期访问。'
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

	<div class="space-y-4">
		{#each t.faqs as faq}
			<details class="group bg-white dark:bg-dark-800 rounded-2xl border border-gray-200 dark:border-dark-700">
				<summary class="flex justify-between items-center cursor-pointer p-6 font-semibold text-gray-900 dark:text-dark-100">
					<span>{faq.q}</span>
					<svg class="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
					</svg>
				</summary>
				<div class="px-6 pb-6">
					<p class="text-gray-600 dark:text-dark-400 leading-relaxed">{faq.a}</p>
				</div>
			</details>
		{/each}
	</div>
</div>
