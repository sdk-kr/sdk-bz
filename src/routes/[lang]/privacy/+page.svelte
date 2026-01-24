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
					text: 'SDK.ac does not collect, store, or transmit any personal data. All processing happens locally in your browser.'
				},
				{
					heading: 'Local Storage',
					text: 'We use browser local storage only for saving your preferences (theme, language). This data never leaves your device.'
				},
				{
					heading: 'Analytics',
					text: 'We may use privacy-respecting analytics to understand general usage patterns. No personally identifiable information is collected.'
				},
				{
					heading: 'Cookies',
					text: 'SDK.ac does not use tracking cookies. Essential cookies may be used for basic functionality only.'
				},
				{
					heading: 'Third-Party Services',
					text: 'We may display advertisements through Google AdSense. Please refer to Google\'s privacy policy for information about their data practices.'
				},
				{
					heading: 'Contact',
					text: 'For privacy-related questions, contact us at hello@sdk.ac'
				}
			]
		},
		ko: {
			title: '개인정보 처리방침',
			lastUpdated: '최종 업데이트: 2025년 1월',
			sections: [
				{
					heading: '데이터 수집',
					text: 'SDK.ac는 개인 데이터를 수집, 저장 또는 전송하지 않습니다. 모든 처리는 브라우저에서 로컬로 이루어집니다.'
				},
				{
					heading: '로컬 스토리지',
					text: '브라우저 로컬 스토리지는 환경설정(테마, 언어)을 저장하는 데만 사용됩니다. 이 데이터는 기기를 벗어나지 않습니다.'
				},
				{
					heading: '분석',
					text: '일반적인 사용 패턴을 이해하기 위해 개인정보를 존중하는 분석을 사용할 수 있습니다. 개인 식별 정보는 수집되지 않습니다.'
				},
				{
					heading: '쿠키',
					text: 'SDK.ac는 추적 쿠키를 사용하지 않습니다. 기본 기능을 위한 필수 쿠키만 사용될 수 있습니다.'
				},
				{
					heading: '제3자 서비스',
					text: 'Google AdSense를 통해 광고를 표시할 수 있습니다. 데이터 관행에 대한 정보는 Google의 개인정보 보호정책을 참조하세요.'
				},
				{
					heading: '연락처',
					text: '개인정보 관련 질문은 hello@sdk.ac로 문의해 주세요.'
				}
			]
		},
		ja: {
			title: 'プライバシーポリシー',
			lastUpdated: '最終更新: 2025年1月',
			sections: [
				{
					heading: 'データ収集',
					text: 'SDK.acは個人データを収集、保存、または送信しません。すべての処理はブラウザ内でローカルに行われます。'
				},
				{
					heading: 'ローカルストレージ',
					text: 'ブラウザのローカルストレージは、設定（テーマ、言語）の保存にのみ使用されます。このデータがデバイスから出ることはありません。'
				},
				{
					heading: '分析',
					text: '一般的な使用パターンを理解するために、プライバシーを尊重した分析を使用する場合があります。個人を特定できる情報は収集されません。'
				},
				{
					heading: 'クッキー',
					text: 'SDK.acはトラッキングクッキーを使用しません。基本機能のための必須クッキーのみ使用される場合があります。'
				},
				{
					heading: 'サードパーティサービス',
					text: 'Google AdSenseを通じて広告を表示する場合があります。データプラクティスについてはGoogleのプライバシーポリシーをご参照ください。'
				},
				{
					heading: 'お問い合わせ',
					text: 'プライバシーに関するご質問はhello@sdk.acまでご連絡ください。'
				}
			]
		},
		zh: {
			title: '隐私政策',
			lastUpdated: '最后更新：2025年1月',
			sections: [
				{
					heading: '数据收集',
					text: 'SDK.ac 不收集、存储或传输任何个人数据。所有处理都在您的浏览器中本地进行。'
				},
				{
					heading: '本地存储',
					text: '我们仅使用浏览器本地存储来保存您的偏好设置（主题、语言）。这些数据永远不会离开您的设备。'
				},
				{
					heading: '分析',
					text: '我们可能使用尊重隐私的分析来了解一般使用模式。不收集任何个人身份信息。'
				},
				{
					heading: 'Cookies',
					text: 'SDK.ac 不使用跟踪 cookies。仅可能使用基本功能所需的必要 cookies。'
				},
				{
					heading: '第三方服务',
					text: '我们可能通过 Google AdSense 展示广告。有关其数据实践的信息，请参阅 Google 的隐私政策。'
				},
				{
					heading: '联系方式',
					text: '如有隐私相关问题，请联系 hello@sdk.ac'
				}
			]
		}
	};

	$: t = content[lang] || content.en;
</script>

<svelte:head>
	<title>{t.title} - SDK.ac</title>
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
