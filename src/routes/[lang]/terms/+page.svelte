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
					text: 'By using SDK.bz, you agree to these terms. If you do not agree, please do not use our services.'
				},
				{
					heading: 'Use of Services',
					text: 'SDK.bz provides financial and cryptocurrency calculators for informational purposes. You are responsible for verifying calculations and making your own financial decisions.'
				},
				{
					heading: 'Not Financial Advice',
					text: 'Our calculators provide estimates only. They should not be considered financial, investment, or tax advice. Always consult qualified professionals before making financial decisions.'
				},
				{
					heading: 'Accuracy',
					text: 'While we strive for accuracy, we cannot guarantee that all calculations are error-free. Exchange rates and cryptocurrency prices are approximations and may differ from real-time values.'
				},
				{
					heading: 'Disclaimer',
					text: 'Services are provided "as is" without warranties. We are not liable for any financial losses or damages arising from the use of our calculators.'
				},
				{
					heading: 'Changes',
					text: 'We may update these terms at any time. Continued use of SDK.bz constitutes acceptance of updated terms.'
				}
			]
		},
		ko: {
			title: '이용약관',
			lastUpdated: '최종 업데이트: 2025년 1월',
			sections: [
				{
					heading: '약관 동의',
					text: 'SDK.bz를 사용함으로써 이 약관에 동의하게 됩니다. 동의하지 않는 경우 서비스를 사용하지 마세요.'
				},
				{
					heading: '서비스 사용',
					text: 'SDK.bz는 정보 제공 목적으로 금융 및 암호화폐 계산기를 제공합니다. 계산 결과 확인과 재정 결정은 사용자의 책임입니다.'
				},
				{
					heading: '재정 조언 아님',
					text: '계산기는 추정치만 제공합니다. 재정, 투자 또는 세금 조언으로 간주되어서는 안 됩니다. 재정 결정 전에 항상 자격을 갖춘 전문가와 상담하세요.'
				},
				{
					heading: '정확성',
					text: '정확성을 위해 노력하지만 모든 계산에 오류가 없다고 보장할 수 없습니다. 환율과 암호화폐 가격은 근사치이며 실시간 값과 다를 수 있습니다.'
				},
				{
					heading: '면책 조항',
					text: '서비스는 보증 없이 "있는 그대로" 제공됩니다. 계산기 사용으로 인한 금전적 손실이나 손해에 대해 책임지지 않습니다.'
				},
				{
					heading: '변경',
					text: '언제든지 약관을 업데이트할 수 있습니다. SDK.bz를 계속 사용하면 업데이트된 약관에 동의하는 것입니다.'
				}
			]
		},
		ja: {
			title: '利用規約',
			lastUpdated: '最終更新: 2025年1月',
			sections: [
				{
					heading: '規約への同意',
					text: 'SDK.bzを使用することで、これらの規約に同意したことになります。同意しない場合は、サービスを使用しないでください。'
				},
				{
					heading: 'サービスの利用',
					text: 'SDK.bzは情報提供を目的として金融・暗号通貨計算機を提供しています。計算結果の確認と財務上の決定はユーザーの責任となります。'
				},
				{
					heading: '財務アドバイスではありません',
					text: '計算機は推定値のみを提供します。財務、投資、または税務アドバイスとして考慮されるべきではありません。財務上の決定を行う前に、必ず資格のある専門家に相談してください。'
				},
				{
					heading: '正確性',
					text: '正確性を期していますが、すべての計算にエラーがないことを保証することはできません。為替レートと暗号通貨価格は概算であり、リアルタイムの値と異なる場合があります。'
				},
				{
					heading: '免責事項',
					text: 'サービスは保証なしで「現状のまま」提供されます。計算機の使用から生じるいかなる金銭的損失や損害についても責任を負いません。'
				},
				{
					heading: '変更',
					text: 'これらの規約はいつでも更新される場合があります。SDK.bzの継続使用は、更新された規約への同意を意味します。'
				}
			]
		},
		zh: {
			title: '服务条款',
			lastUpdated: '最后更新：2025年1月',
			sections: [
				{
					heading: '接受条款',
					text: '使用 SDK.bz 即表示您同意这些条款。如果您不同意，请不要使用我们的服务。'
				},
				{
					heading: '服务使用',
					text: 'SDK.bz 提供用于信息目的的金融和加密货币计算器。您有责任验证计算结果并做出自己的财务决策。'
				},
				{
					heading: '非财务建议',
					text: '我们的计算器仅提供估算值。不应被视为财务、投资或税务建议。在做出财务决策之前，请务必咨询合格的专业人士。'
				},
				{
					heading: '准确性',
					text: '虽然我们力求准确，但无法保证所有计算都没有错误。汇率和加密货币价格是近似值，可能与实时值不同。'
				},
				{
					heading: '免责声明',
					text: '服务"按原样"提供，不提供任何保证。我们不对使用计算器造成的任何财务损失或损害承担责任。'
				},
				{
					heading: '变更',
					text: '我们可能随时更新这些条款。继续使用 SDK.bz 即表示接受更新后的条款。'
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
