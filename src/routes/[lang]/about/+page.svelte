<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	$: lang = ($page.params.lang || 'en') as Locale;

	const content: Record<Locale, { title: string; sections: { heading: string; text: string }[] }> = {
		en: {
			title: 'About SDK.ac',
			sections: [
				{
					heading: 'Our Mission',
					text: 'SDK.ac provides free AI-powered tools designed to help creators, developers, and professionals work more efficiently. We believe AI should be accessible to everyone.'
				},
				{
					heading: 'What We Offer',
					text: 'Our suite includes prompt generators, image prompt builders, text summarizers, translators, code explainers, email writers, hashtag generators, and writing assistants. All tools are free to use with no registration required.'
				},
				{
					heading: 'Privacy First',
					text: 'Your data stays in your browser. We do not store, track, or analyze any of your inputs. What you create is yours alone.'
				},
				{
					heading: 'Contact',
					text: 'For questions, feedback, or partnership inquiries, please reach out to us at hello@sdk.ac'
				}
			]
		},
		ko: {
			title: 'SDK.ac 소개',
			sections: [
				{
					heading: '우리의 미션',
					text: 'SDK.ac는 크리에이터, 개발자, 전문가들이 더 효율적으로 일할 수 있도록 무료 AI 도구를 제공합니다. AI는 모든 사람이 접근할 수 있어야 한다고 믿습니다.'
				},
				{
					heading: '제공 서비스',
					text: '프롬프트 생성기, 이미지 프롬프트 빌더, 텍스트 요약기, 번역기, 코드 설명기, 이메일 작성기, 해시태그 생성기, 글쓰기 도우미를 제공합니다. 모든 도구는 가입 없이 무료로 사용할 수 있습니다.'
				},
				{
					heading: '개인정보 우선',
					text: '데이터는 브라우저에만 저장됩니다. 사용자의 입력을 저장, 추적, 분석하지 않습니다. 만든 것은 오직 본인의 것입니다.'
				},
				{
					heading: '연락처',
					text: '질문, 피드백, 파트너십 문의는 hello@sdk.ac로 연락해 주세요.'
				}
			]
		},
		ja: {
			title: 'SDK.acについて',
			sections: [
				{
					heading: '私たちの使命',
					text: 'SDK.acは、クリエイター、開発者、プロフェッショナルがより効率的に作業できるよう、無料のAIツールを提供しています。AIはすべての人がアクセスできるべきだと考えています。'
				},
				{
					heading: '提供サービス',
					text: 'プロンプト生成、画像プロンプトビルダー、テキスト要約、翻訳、コード説明、メール作成、ハッシュタグ生成、文章アシスタントを提供しています。すべてのツールは登録不要で無料です。'
				},
				{
					heading: 'プライバシー優先',
					text: 'データはブラウザ内に留まります。入力の保存、追跡、分析は一切行いません。作成したものはあなただけのものです。'
				},
				{
					heading: 'お問い合わせ',
					text: 'ご質問、フィードバック、パートナーシップのお問い合わせはhello@sdk.acまでご連絡ください。'
				}
			]
		},
		zh: {
			title: '关于 SDK.ac',
			sections: [
				{
					heading: '我们的使命',
					text: 'SDK.ac 提供免费的 AI 工具，帮助创作者、开发者和专业人士更高效地工作。我们相信 AI 应该对每个人开放。'
				},
				{
					heading: '服务内容',
					text: '我们提供提示词生成器、图像提示词构建器、文本摘要、翻译、代码解释、邮件写作、标签生成和写作助手。所有工具免费使用，无需注册。'
				},
				{
					heading: '隐私优先',
					text: '您的数据保留在浏览器中。我们不存储、跟踪或分析您的任何输入。您创建的内容完全属于您。'
				},
				{
					heading: '联系我们',
					text: '如有问题、反馈或合作咨询，请通过 hello@sdk.ac 联系我们。'
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
