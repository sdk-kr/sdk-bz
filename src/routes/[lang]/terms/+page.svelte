<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	const content: Record<Locale, { title: string; lastUpdated: string; sections: { heading: string; text: string }[] }> = {
		en: {
			title: 'Terms of Service',
			lastUpdated: 'Last updated: January 2025',
			sections: [
				{
					heading: 'Acceptance of Terms',
					text: 'By using SDK.ac, you agree to these terms. If you do not agree, please do not use our services.'
				},
				{
					heading: 'Use of Services',
					text: 'SDK.ac provides AI-powered tools for personal and commercial use. You are responsible for how you use the generated content.'
				},
				{
					heading: 'Intellectual Property',
					text: 'Content you create using our tools belongs to you. The SDK.ac platform, branding, and code remain our intellectual property.'
				},
				{
					heading: 'Prohibited Uses',
					text: 'Do not use our tools to generate illegal, harmful, or deceptive content. We reserve the right to restrict access for violations.'
				},
				{
					heading: 'Disclaimer',
					text: 'Services are provided "as is" without warranties. We are not liable for any damages arising from the use of our tools.'
				},
				{
					heading: 'Changes',
					text: 'We may update these terms at any time. Continued use of SDK.ac constitutes acceptance of updated terms.'
				}
			]
		},
		ko: {
			title: '이용약관',
			lastUpdated: '최종 업데이트: 2025년 1월',
			sections: [
				{
					heading: '약관 동의',
					text: 'SDK.ac를 사용함으로써 이 약관에 동의하게 됩니다. 동의하지 않는 경우 서비스를 사용하지 마세요.'
				},
				{
					heading: '서비스 사용',
					text: 'SDK.ac는 개인 및 상업적 용도로 AI 도구를 제공합니다. 생성된 콘텐츠의 사용에 대한 책임은 사용자에게 있습니다.'
				},
				{
					heading: '지적 재산권',
					text: '도구를 사용하여 만든 콘텐츠는 사용자의 것입니다. SDK.ac 플랫폼, 브랜딩 및 코드는 당사의 지적 재산입니다.'
				},
				{
					heading: '금지된 사용',
					text: '불법적, 유해하거나 기만적인 콘텐츠를 생성하는 데 도구를 사용하지 마세요. 위반 시 접근을 제한할 수 있습니다.'
				},
				{
					heading: '면책 조항',
					text: '서비스는 보증 없이 "있는 그대로" 제공됩니다. 도구 사용으로 인한 손해에 대해 책임지지 않습니다.'
				},
				{
					heading: '변경',
					text: '언제든지 약관을 업데이트할 수 있습니다. SDK.ac를 계속 사용하면 업데이트된 약관에 동의하는 것입니다.'
				}
			]
		},
		ja: {
			title: '利用規約',
			lastUpdated: '最終更新: 2025年1月',
			sections: [
				{
					heading: '規約への同意',
					text: 'SDK.acを使用することで、これらの規約に同意したことになります。同意しない場合は、サービスを使用しないでください。'
				},
				{
					heading: 'サービスの利用',
					text: 'SDK.acは個人および商用利用向けのAIツールを提供しています。生成されたコンテンツの使用方法については、ユーザーの責任となります。'
				},
				{
					heading: '知的財産',
					text: '当社のツールを使用して作成したコンテンツはあなたのものです。SDK.acプラットフォーム、ブランディング、コードは当社の知的財産です。'
				},
				{
					heading: '禁止事項',
					text: '違法、有害、または欺瞞的なコンテンツを生成するために当社のツールを使用しないでください。違反に対してアクセスを制限する権利を留保します。'
				},
				{
					heading: '免責事項',
					text: 'サービスは保証なしで「現状のまま」提供されます。当社のツールの使用から生じるいかなる損害についても責任を負いません。'
				},
				{
					heading: '変更',
					text: 'これらの規約はいつでも更新される場合があります。SDK.acの継続使用は、更新された規約への同意を意味します。'
				}
			]
		},
		zh: {
			title: '服务条款',
			lastUpdated: '最后更新：2025年1月',
			sections: [
				{
					heading: '接受条款',
					text: '使用 SDK.ac 即表示您同意这些条款。如果您不同意，请不要使用我们的服务。'
				},
				{
					heading: '服务使用',
					text: 'SDK.ac 提供用于个人和商业用途的 AI 工具。您对生成内容的使用方式负责。'
				},
				{
					heading: '知识产权',
					text: '使用我们的工具创建的内容属于您。SDK.ac 平台、品牌和代码仍是我们的知识产权。'
				},
				{
					heading: '禁止用途',
					text: '请勿使用我们的工具生成非法、有害或欺骗性内容。我们保留限制违规访问的权利。'
				},
				{
					heading: '免责声明',
					text: '服务"按原样"提供，不提供任何保证。我们不对使用工具造成的任何损害承担责任。'
				},
				{
					heading: '变更',
					text: '我们可能随时更新这些条款。继续使用 SDK.ac 即表示接受更新后的条款。'
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
