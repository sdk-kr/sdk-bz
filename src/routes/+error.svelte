<script lang="ts">
	import { page } from '$app/stores';

	$: status = $page.status;
	$: lang = ($page.params.lang as string) || 'en';
	$: isKo = lang === 'ko';

	const popularTools = [
		{ href: '/loan', en: 'Loan Calculator', ko: '대출 계산기' },
		{ href: '/mortgage', en: 'Mortgage Calculator', ko: '주택담보대출 계산기' },
		{ href: '/compound', en: 'Compound Interest', ko: '복리 계산기' },
		{ href: '/dca', en: 'DCA Calculator', ko: '적립식 투자' },
		{ href: '/retirement', en: 'Retirement Planner', ko: '은퇴 설계' },
		{ href: '/roi', en: 'ROI Calculator', ko: 'ROI 계산기' },
		{ href: '/staking', en: 'Crypto Staking', ko: '암호화폐 스테이킹' },
		{ href: '/mining', en: 'Bitcoin Mining', ko: '비트코인 채굴' }
	];
</script>

<svelte:head>
	<title>{status} - SDK.bz</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<div class="max-w-3xl mx-auto px-4 py-16">
	<div class="text-center mb-12">
		<h1 class="text-7xl font-bold text-green-500 mb-4">{status}</h1>
		<p class="text-2xl text-gray-900 dark:text-dark-100 mb-2">
			{#if status === 404}
				{isKo ? '페이지를 찾을 수 없습니다' : 'Page Not Found'}
			{:else}
				{$page.error?.message || (isKo ? '오류가 발생했습니다' : 'Something went wrong')}
			{/if}
		</p>
		<p class="text-gray-600 dark:text-dark-400">
			{isKo ? '요청하신 페이지가 이동되었을 수 있습니다.' : 'The page you requested may have moved.'}
		</p>
	</div>

	<div class="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 p-8">
		<h2 class="text-xl font-semibold text-gray-900 dark:text-dark-100 mb-6">
			{isKo ? '인기 금융 계산기' : 'Popular Calculators'}
		</h2>
		<div class="grid sm:grid-cols-2 gap-3">
			{#each popularTools as link}
				<a
					href="/{lang}{link.href}"
					class="flex items-center gap-3 px-4 py-3 bg-gray-50 dark:bg-dark-900 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-lg transition-colors group"
				>
					<span class="text-green-500 group-hover:text-green-400">→</span>
					<span class="text-gray-900 dark:text-dark-100 font-medium">{isKo ? link.ko : link.en}</span>
				</a>
			{/each}
		</div>

		<div class="mt-6 pt-6 border-t border-gray-200 dark:border-dark-700">
			<a
				href="/{lang}"
				class="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-400 text-white font-semibold rounded-lg transition-colors"
			>
				{isKo ? '🏠 홈으로 돌아가기' : '🏠 Back to Home'}
			</a>
		</div>
	</div>
</div>
