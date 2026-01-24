<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	const content: Record<Locale, { title: string; lastUpdated: string; sections: { heading: string; text: string }[] }> = {
		en: {
			title: 'Privacy Policy',
			lastUpdated: 'Last updated: January 2025',
			sections: [
				{
					heading: 'Data Collection',
					text: 'SDK.bz does not collect, store, or transmit any personal or financial data. All calculations happen locally in your browser.'
				},
				{
					heading: 'Local Storage',
					text: 'We use browser local storage only for saving your preferences (theme, language). This data never leaves your device.'
				},
				{
					heading: 'Financial Data',
					text: 'Your financial inputs (loan amounts, interest rates, crypto values, etc.) are processed entirely in your browser and are never sent to our servers.'
				},
				{
					heading: 'Analytics',
					text: 'We may use privacy-respecting analytics to understand general usage patterns. No personally identifiable information is collected.'
				},
				{
					heading: 'Third-Party Services',
					text: 'We may display advertisements through Google AdSense. Please refer to Google\'s privacy policy for information about their data practices.'
				},
				{
					heading: 'Contact',
					text: 'For privacy-related questions, contact us at hello@sdk.bz'
				}
			]
		},
		ko: {
			title: '개인정보 처리방침',
			lastUpdated: '최종 업데이트: 2025년 1월',
			sections: [
				{
					heading: '데이터 수집',
					text: 'SDK.bz는 개인 또는 금융 데이터를 수집, 저장, 전송하지 않습니다. 모든 계산은 브라우저에서 로컬로 처리됩니다.'
				},
				{
					heading: '로컬 스토리지',
					text: '브라우저 로컬 스토리지는 환경설정(테마, 언어)을 저장하는 데만 사용됩니다. 이 데이터는 기기를 벗어나지 않습니다.'
				},
				{
					heading: '금융 데이터',
					text: '금융 입력값(대출 금액, 이자율, 암호화폐 가치 등)은 브라우저에서만 처리되며 서버로 전송되지 않습니다.'
				},
				{
					heading: '분석',
					text: '일반적인 사용 패턴을 이해하기 위해 개인정보를 존중하는 분석을 사용할 수 있습니다. 개인 식별 정보는 수집되지 않습니다.'
				},
				{
					heading: '제3자 서비스',
					text: 'Google AdSense를 통해 광고를 표시할 수 있습니다. 데이터 관행에 대한 정보는 Google의 개인정보 보호정책을 참조하세요.'
				},
				{
					heading: '연락처',
					text: '개인정보 관련 질문은 hello@sdk.bz로 문의해 주세요.'
				}
			]
		},
		ja: {
			title: 'プライバシーポリシー',
			lastUpdated: '最終更新: 2025年1月',
			sections: [
				{
					heading: 'データ収集',
					text: 'SDK.bzは個人データや金融データを収集、保存、送信しません。すべての計算はブラウザ内でローカルに行われます。'
				},
				{
					heading: 'ローカルストレージ',
					text: 'ブラウザのローカルストレージは、設定（テーマ、言語）の保存にのみ使用されます。このデータがデバイスから出ることはありません。'
				},
				{
					heading: '金融データ',
					text: '金融入力（ローン金額、金利、暗号通貨価値など）は完全にブラウザ内で処理され、サーバーに送信されることはありません。'
				},
				{
					heading: '分析',
					text: '一般的な使用パターンを理解するために、プライバシーを尊重した分析を使用する場合があります。個人を特定できる情報は収集されません。'
				},
				{
					heading: 'サードパーティサービス',
					text: 'Google AdSenseを通じて広告を表示する場合があります。データプラクティスについてはGoogleのプライバシーポリシーをご参照ください。'
				},
				{
					heading: 'お問い合わせ',
					text: 'プライバシーに関するご質問はhello@sdk.bzまでご連絡ください。'
				}
			]
		},
		zh: {
			title: '隐私政策',
			lastUpdated: '最后更新：2025年1月',
			sections: [
				{
					heading: '数据收集',
					text: 'SDK.bz 不收集、存储或传输任何个人或财务数据。所有计算都在您的浏览器中本地进行。'
				},
				{
					heading: '本地存储',
					text: '我们仅使用浏览器本地存储来保存您的偏好设置（主题、语言）。这些数据永远不会离开您的设备。'
				},
				{
					heading: '财务数据',
					text: '您的财务输入（贷款金额、利率、加密货币价值等）完全在浏览器中处理，不会发送到我们的服务器。'
				},
				{
					heading: '分析',
					text: '我们可能使用尊重隐私的分析来了解一般使用模式。不收集任何个人身份信息。'
				},
				{
					heading: '第三方服务',
					text: '我们可能通过 Google AdSense 展示广告。有关其数据实践的信息，请参阅 Google 的隐私政策。'
				},
				{
					heading: '联系方式',
					text: '如有隐私相关问题，请联系 hello@sdk.bz'
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
	<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t.title}</h1>
	<p class="text-sm text-gray-500 dark:text-dark-500 mb-8">{t.lastUpdated}</p>

	<div class="space-y-8">
		{#each t.sections as section}
			<div>
				<h2 class="text-xl font-semibold text-gray-800 dark:text-dark-200 mb-3">{section.heading}</h2>
				<p class="text-gray-600 dark:text-dark-400 leading-relaxed">{section.text}</p>
			</div>
		{/each}
	</div>
</div>
