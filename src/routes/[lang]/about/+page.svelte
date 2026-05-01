<script lang="ts">
	import { page } from '$app/stores';
	import type { Locale } from '$lib/i18n';

	type AboutContent = {
		title: string;
		subtitle: string;
		intro: string;
		mission: { heading: string; text: string };
		whoWeAre: {
			heading: string;
			text: string;
			company: string;
			companyName: string;
			founded: string;
			foundedYear: string;
			focus: string;
			focusArea: string;
		};
		offer: { heading: string; intro: string; items: string[] };
		principles: { heading: string; items: { title: string; description: string }[] };
		privacy: { heading: string; text: string };
		disclaimer: { heading: string; text: string };
		contact: { heading: string; text: string; email: string };
	};

	$: lang = ($page.params.lang || 'en') as Locale;

	const content: Record<Locale, AboutContent> = {
		en: {
			title: 'About SDK.bz',
			subtitle: 'Free Financial & Crypto Calculators',
			intro: 'SDK.bz provides free financial and cryptocurrency calculators that help you model decisions before making them. Every calculation runs in your browser — your numbers stay private.',
			mission: {
				heading: 'Our Mission',
				text: 'SDK.bz was built to demystify the math behind everyday financial decisions — loans, mortgages, investment returns, crypto staking and mining. We believe accurate, transparent calculators should be free, fast, and respect your privacy. Whether you are budgeting your first home, comparing investment strategies, or modeling staking rewards, our tools give you the numbers without the noise.'
			},
			whoWeAre: {
				heading: 'Who We Are',
				text: 'SDK.bz is operated by SDK Co., Ltd. — a software company founded in 2024 that builds developer-focused tools and free online utilities. Our team combines a software engineering background with hands-on experience in personal finance and cryptocurrency, and every formula on this site is documented and reviewed against authoritative sources.',
				company: 'Company',
				companyName: 'SDK Co., Ltd.',
				founded: 'Founded',
				foundedYear: '2024',
				focus: 'Focus',
				focusArea: 'Developer tools, calculators, free utilities'
			},
			offer: {
				heading: 'What We Offer',
				intro: '10 financial and crypto calculators — all free, all client-side.',
				items: [
					'Loan Calculator — monthly payment, total interest, amortization schedule',
					'Mortgage Calculator — principal, interest, taxes, insurance breakdown',
					'Compound Interest Calculator — model long-term growth with periodic contributions',
					'ROI Calculator — return on investment with annualized rate',
					'Retirement Planner — project nest egg growth and required savings',
					'Currency Converter — live FX-rate conversion across major currencies',
					'Crypto Profit Calculator — entry/exit price scenarios with fees',
					'DCA Simulator — backtest dollar-cost averaging strategies',
					'Staking Reward Calculator — APY, compounding, and lock-period modeling',
					'Mining Profitability Calculator — hashrate, electricity cost, and pool fee inputs'
				]
			},
			principles: {
				heading: 'Our Principles',
				items: [
					{ title: 'Free Forever', description: 'Every calculator is free. No paywalls, no premium tier, no signup required.' },
					{ title: 'Privacy-First', description: 'All calculations run in your browser. We never see, store, or analyze your numbers.' },
					{ title: 'Fast by Default', description: 'Deployed on Cloudflare’s global edge for instant load times worldwide.' },
					{ title: 'Transparent Math', description: 'Every formula is documented so you can verify the calculation yourself.' },
					{ title: 'Open Access', description: 'No login, no email, no tracking of your inputs. Just open and calculate.' }
				]
			},
			privacy: {
				heading: 'Privacy & Data',
				text: 'All calculations happen in your browser. We do not store, transmit, track, or analyze any of the financial data you enter — your loan amounts, salaries, portfolio values, and wallet addresses never leave your device. The only data we collect is standard, aggregated analytics (page views, country, device type) and AdSense-related cookies as described in our Privacy Policy. We never sell or share personal data.'
			},
			disclaimer: {
				heading: 'Disclaimer',
				text: 'These calculators are provided for educational and informational purposes only. They are not financial advice, investment advice, tax advice, or a recommendation to buy or sell any asset. Cryptocurrency markets are highly volatile and can result in total loss of capital. Always consult a licensed financial advisor, tax professional, or other qualified expert before making financial decisions. SDK Co., Ltd. is not a registered investment advisor and is not liable for decisions made based on output from these calculators.'
			},
			contact: {
				heading: 'Contact',
				text: 'For questions, feedback, bug reports, or partnership inquiries, please reach out at',
				email: 'contact@sdk.bz'
			}
		},
		ko: {
			title: 'SDK.bz 소개',
			subtitle: '무료 금융 & 암호화폐 계산기',
			intro: 'SDK.bz는 결정을 내리기 전에 시뮬레이션할 수 있는 무료 금융 및 암호화폐 계산기를 제공합니다. 모든 계산은 브라우저에서 실행되며 — 숫자는 비공개로 유지됩니다.',
			mission: {
				heading: '우리의 미션',
				text: 'SDK.bz는 일상 속 금융 결정 — 대출, 모기지, 투자 수익, 크립토 스테이킹 및 채굴 — 뒤에 숨은 수학을 알기 쉽게 만들기 위해 만들어졌습니다. 정확하고 투명한 계산기는 무료이고, 빠르며, 개인정보를 존중해야 한다고 믿습니다. 첫 집을 위한 예산을 짜든, 투자 전략을 비교하든, 스테이킹 보상을 모델링하든, 우리 도구는 잡음 없이 숫자만 제공합니다.'
			},
			whoWeAre: {
				heading: '운영 정보',
				text: 'SDK.bz는 2024년 설립된 소프트웨어 회사 SDK Co., Ltd.가 운영합니다. 우리 팀은 소프트웨어 엔지니어링 배경에 개인 금융 및 암호화폐 실무 경험을 결합하고 있으며, 사이트의 모든 공식은 권위 있는 출처와 대조하여 문서화되고 검토됩니다.',
				company: '회사',
				companyName: 'SDK Co., Ltd.',
				founded: '설립',
				foundedYear: '2024',
				focus: '주력 분야',
				focusArea: '개발자 도구, 계산기, 무료 유틸리티'
			},
			offer: {
				heading: '제공 도구',
				intro: '10개의 금융 및 크립토 계산기 — 모두 무료, 모두 클라이언트 측 실행.',
				items: [
					'대출 계산기 — 월 상환액, 총 이자, 상환 스케줄',
					'모기지 계산기 — 원금, 이자, 세금, 보험 분해',
					'복리 계산기 — 정기 납입을 포함한 장기 성장 모델링',
					'ROI 계산기 — 투자 수익률 및 연환산 수익률',
					'은퇴 플래너 — 노후 자금 성장 및 필요 저축액 예측',
					'환율 변환기 — 주요 통화 실시간 환율 변환',
					'크립토 수익 계산기 — 수수료를 포함한 진입/청산 시나리오',
					'DCA 시뮬레이터 — 적립식 매수 전략 백테스트',
					'스테이킹 보상 계산기 — APY, 복리, 락업 기간 모델링',
					'채굴 수익성 계산기 — 해시레이트, 전기료, 풀 수수료 입력'
				]
			},
			principles: {
				heading: '우리의 원칙',
				items: [
					{ title: '영원히 무료', description: '모든 계산기는 무료입니다. 페이월, 프리미엄 등급, 가입 불필요.' },
					{ title: '개인정보 우선', description: '모든 계산은 브라우저에서. 숫자는 절대 보지도, 저장하지도, 분석하지도 않습니다.' },
					{ title: '기본적으로 빠름', description: 'Cloudflare 글로벌 엣지에 배포되어 전 세계 즉시 로딩.' },
					{ title: '투명한 계산식', description: '모든 공식이 문서화되어 직접 검증할 수 있습니다.' },
					{ title: '오픈 액세스', description: '로그인 없음, 이메일 없음, 입력 데이터 추적 없음. 열고 바로 계산.' }
				]
			},
			privacy: {
				heading: '개인정보 및 데이터',
				text: '모든 계산은 브라우저에서 이루어집니다. 입력한 금융 데이터 — 대출 금액, 급여, 포트폴리오 가치, 지갑 주소 — 는 절대 저장, 전송, 추적, 분석되지 않으며 기기를 떠나지 않습니다. 우리가 수집하는 데이터는 표준 집계 분석(페이지뷰, 국가, 기기 유형)과 개인정보처리방침에 명시된 AdSense 관련 쿠키뿐입니다. 개인정보를 절대 판매하거나 공유하지 않습니다.'
			},
			disclaimer: {
				heading: '면책 조항',
				text: '이 계산기들은 교육 및 정보 제공 목적으로만 제공됩니다. 재정 자문, 투자 자문, 세무 자문 또는 자산 매매 권유가 아닙니다. 암호화폐 시장은 변동성이 매우 크며 자본의 전액 손실로 이어질 수 있습니다. 재정 결정을 내리기 전에 반드시 면허를 보유한 재무 자문가, 세무 전문가 또는 기타 자격 있는 전문가와 상담하세요. SDK Co., Ltd.는 등록된 투자 자문업자가 아니며, 이 계산기들의 출력에 기반한 결정에 대해 책임지지 않습니다.'
			},
			contact: {
				heading: '연락처',
				text: '질문, 피드백, 버그 제보, 파트너십 문의는 다음으로 연락해 주세요',
				email: 'contact@sdk.bz'
			}
		},
		ja: {
			title: 'SDK.bzについて',
			subtitle: '無料金融・暗号通貨計算機',
			intro: 'SDK.bzは決定を下す前にシミュレーションできる無料の金融・暗号通貨計算機を提供します。すべての計算はブラウザで実行され — 数字はプライベートに保たれます。',
			mission: {
				heading: '私たちのミッション',
				text: 'SDK.bzは日常の金融判断 — ローン、住宅ローン、投資リターン、暗号通貨ステーキング・マイニング — の背後にある数学をわかりやすくするために作られました。正確で透明な計算機は無料・高速で、プライバシーを尊重すべきだと信じています。初めての住宅予算、投資戦略の比較、ステーキング報酬のモデリング — 私たちのツールはノイズなしで数字だけを提供します。'
			},
			whoWeAre: {
				heading: '運営情報',
				text: 'SDK.bzは、2024年に設立されたソフトウェア会社SDK Co., Ltd.が運営しています。チームはソフトウェアエンジニアリングの背景と個人金融・暗号通貨の実務経験を組み合わせ、サイト上のすべての計算式は権威ある情報源と照合して文書化・レビューされています。',
				company: '会社',
				companyName: 'SDK Co., Ltd.',
				founded: '設立',
				foundedYear: '2024年',
				focus: '注力分野',
				focusArea: '開発者ツール、計算機、無料ユーティリティ'
			},
			offer: {
				heading: '提供ツール',
				intro: '10種類の金融・暗号通貨計算機 — すべて無料、すべてクライアント側で実行。',
				items: [
					'ローン計算機 — 月々の返済額、総利息、返済スケジュール',
					'住宅ローン計算機 — 元本、利息、税金、保険の内訳',
					'複利計算機 — 定期積立を含む長期成長モデリング',
					'ROI計算機 — 投資収益率と年率換算',
					'退職プランナー — 老後資金の成長と必要貯蓄額を予測',
					'通貨換算 — 主要通貨のリアルタイム為替換算',
					'暗号通貨利益計算機 — 手数料を含むエントリー/イグジットシナリオ',
					'DCAシミュレーター — ドルコスト平均法戦略のバックテスト',
					'ステーキング報酬計算機 — APY、複利、ロック期間モデリング',
					'マイニング収益性計算機 — ハッシュレート、電気代、プール手数料入力'
				]
			},
			principles: {
				heading: '私たちの原則',
				items: [
					{ title: '永久無料', description: 'すべての計算機は無料です。ペイウォール、プレミアム、サインアップ不要。' },
					{ title: 'プライバシー優先', description: 'すべての計算はブラウザで。数字を見たり保存したり分析したりしません。' },
					{ title: 'デフォルトで高速', description: 'Cloudflareのグローバルエッジに展開、世界中で即時ロード。' },
					{ title: '透明な計算式', description: 'すべての計算式が文書化されており、自分で検証できます。' },
					{ title: 'オープンアクセス', description: 'ログイン不要、メール不要、入力データ追跡なし。開いてすぐ計算。' }
				]
			},
			privacy: {
				heading: 'プライバシーとデータ',
				text: 'すべての計算はブラウザで行われます。入力した金融データ — ローン額、給与、ポートフォリオ評価額、ウォレットアドレス — は決して保存・送信・追跡・分析されず、デバイスから出ません。収集するデータは標準的な集計分析(ページビュー・国・デバイスタイプ)とプライバシーポリシーに記載のAdSense関連クッキーのみです。個人データを販売・共有することは一切ありません。'
			},
			disclaimer: {
				heading: '免責事項',
				text: 'これらの計算機は教育および情報提供のみを目的として提供されます。財務アドバイス、投資アドバイス、税務アドバイス、または資産の売買推奨ではありません。暗号通貨市場は非常に変動が大きく、資本の全損失につながる可能性があります。財務上の決定を下す前に、必ず免許を持つファイナンシャルアドバイザー、税理士、その他の資格ある専門家にご相談ください。SDK Co., Ltd.は登録投資顧問業者ではなく、これらの計算機の出力に基づく決定について責任を負いません。'
			},
			contact: {
				heading: 'お問い合わせ',
				text: 'ご質問、フィードバック、バグ報告、パートナーシップのお問い合わせは下記まで',
				email: 'contact@sdk.bz'
			}
		},
		zh: {
			title: '关于 SDK.bz',
			subtitle: '免费金融与加密货币计算器',
			intro: 'SDK.bz 提供免费的金融和加密货币计算器，让您在做出决策前进行建模。所有计算都在您的浏览器中运行 — 您的数字保持私密。',
			mission: {
				heading: '我们的使命',
				text: 'SDK.bz 旨在揭开日常金融决策背后的数学 — 贷款、抵押、投资回报、加密货币质押和挖矿。我们相信准确、透明的计算器应当免费、快速并尊重您的隐私。无论您是为首套房做预算、比较投资策略，还是为质押奖励建模，我们的工具都为您提供没有噪音的数字。'
			},
			whoWeAre: {
				heading: '运营信息',
				text: 'SDK.bz 由成立于 2024 年的软件公司 SDK Co., Ltd. 运营。我们的团队将软件工程背景与个人金融和加密货币的实战经验相结合，本站所有公式均与权威来源核对、记录并审核。',
				company: '公司',
				companyName: 'SDK Co., Ltd.',
				founded: '成立',
				foundedYear: '2024 年',
				focus: '专注领域',
				focusArea: '开发者工具、计算器、免费实用工具'
			},
			offer: {
				heading: '我们提供',
				intro: '10 款金融与加密货币计算器 — 全部免费，全部客户端运行。',
				items: [
					'贷款计算器 — 月供、总利息、还款计划',
					'抵押贷款计算器 — 本金、利息、税费、保险明细',
					'复利计算器 — 含定期投入的长期增长建模',
					'ROI 计算器 — 投资回报率与年化收益',
					'退休规划器 — 预测养老金增长与所需储蓄',
					'货币转换器 — 主要货币实时汇率换算',
					'加密货币利润计算器 — 含手续费的入场/退场情境',
					'DCA 模拟器 — 定投策略回测',
					'质押奖励计算器 — APY、复利、锁仓期建模',
					'挖矿盈利计算器 — 哈希率、电费、矿池手续费输入'
				]
			},
			principles: {
				heading: '我们的原则',
				items: [
					{ title: '永久免费', description: '所有计算器均免费。无付费墙、无高级版、无需注册。' },
					{ title: '隐私优先', description: '所有计算在浏览器中进行。我们绝不查看、存储或分析您的数字。' },
					{ title: '默认快速', description: '部署在 Cloudflare 全球边缘节点，全球即时加载。' },
					{ title: '透明的计算', description: '每个公式都有文档说明，您可以自行验证计算结果。' },
					{ title: '开放访问', description: '无需登录、无需邮箱、不追踪您的输入。打开即算。' }
				]
			},
			privacy: {
				heading: '隐私与数据',
				text: '所有计算都在您的浏览器中进行。您输入的金融数据 — 贷款金额、薪资、投资组合价值、钱包地址 — 永不被存储、传输、追踪或分析，也不会离开您的设备。我们仅收集标准的聚合分析数据（页面浏览量、国家、设备类型）以及隐私政策中所述的 AdSense 相关 Cookie。我们绝不出售或共享个人数据。'
			},
			disclaimer: {
				heading: '免责声明',
				text: '这些计算器仅供教育和信息参考。它们不构成财务建议、投资建议、税务建议或买卖任何资产的推荐。加密货币市场波动极大，可能导致资金的全部损失。在做出任何财务决策之前，请务必咨询持牌财务顾问、税务专业人士或其他合格专家。SDK Co., Ltd. 不是注册投资顾问，对基于这些计算器输出做出的决策不承担任何责任。'
			},
			contact: {
				heading: '联系我们',
				text: '如有问题、反馈、错误报告或合作咨询，请联系',
				email: 'contact@sdk.bz'
			}
		}
	};

	$: t = content[lang] || content.en;
</script>

<svelte:head>
	<title>{t.title} - SDK.bz</title>
	<meta name="description" content={t.intro} />
</svelte:head>

<div class="max-w-3xl mx-auto px-4 py-12">
	<h1 class="text-3xl font-bold text-gray-900 dark:text-dark-100 mb-2">{t.title}</h1>
	<p class="text-lg text-primary-500 mb-6">{t.subtitle}</p>
	<p class="text-gray-700 dark:text-dark-300 leading-relaxed mb-10">{t.intro}</p>

	<div class="space-y-10">
		<section>
			<h2 class="text-xl font-semibold text-gray-800 dark:text-dark-200 mb-3">{t.mission.heading}</h2>
			<p class="text-gray-600 dark:text-dark-400 leading-relaxed">{t.mission.text}</p>
		</section>

		<section>
			<h2 class="text-xl font-semibold text-gray-800 dark:text-dark-200 mb-3">{t.whoWeAre.heading}</h2>
			<p class="text-gray-600 dark:text-dark-400 leading-relaxed mb-4">{t.whoWeAre.text}</p>
			<dl class="grid sm:grid-cols-3 gap-4 bg-gray-50 dark:bg-dark-800 rounded-xl p-5 border border-gray-200 dark:border-dark-700">
				<div>
					<dt class="text-xs text-primary-500 uppercase tracking-wide mb-1">{t.whoWeAre.company}</dt>
					<dd class="text-gray-900 dark:text-dark-100 font-semibold">{t.whoWeAre.companyName}</dd>
				</div>
				<div>
					<dt class="text-xs text-primary-500 uppercase tracking-wide mb-1">{t.whoWeAre.founded}</dt>
					<dd class="text-gray-900 dark:text-dark-100 font-semibold">{t.whoWeAre.foundedYear}</dd>
				</div>
				<div>
					<dt class="text-xs text-primary-500 uppercase tracking-wide mb-1">{t.whoWeAre.focus}</dt>
					<dd class="text-gray-900 dark:text-dark-100 font-semibold">{t.whoWeAre.focusArea}</dd>
				</div>
			</dl>
		</section>

		<section>
			<h2 class="text-xl font-semibold text-gray-800 dark:text-dark-200 mb-3">{t.offer.heading}</h2>
			<p class="text-gray-600 dark:text-dark-400 leading-relaxed mb-4">{t.offer.intro}</p>
			<ul class="space-y-2">
				{#each t.offer.items as item}
					<li class="flex items-start gap-2 text-gray-600 dark:text-dark-400">
						<span class="text-primary-500 mt-1">•</span>
						<span>{item}</span>
					</li>
				{/each}
			</ul>
		</section>

		<section>
			<h2 class="text-xl font-semibold text-gray-800 dark:text-dark-200 mb-3">{t.principles.heading}</h2>
			<div class="space-y-3">
				{#each t.principles.items as principle}
					<div class="bg-gray-50 dark:bg-dark-800 rounded-lg p-4 border-l-4 border-primary-500">
						<h3 class="font-semibold text-gray-900 dark:text-dark-100 mb-1">{principle.title}</h3>
						<p class="text-gray-600 dark:text-dark-400 text-sm">{principle.description}</p>
					</div>
				{/each}
			</div>
		</section>

		<section>
			<h2 class="text-xl font-semibold text-gray-800 dark:text-dark-200 mb-3">{t.privacy.heading}</h2>
			<p class="text-gray-600 dark:text-dark-400 leading-relaxed">{t.privacy.text}</p>
		</section>

		<section class="bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 rounded-xl p-5">
			<h2 class="text-xl font-semibold text-amber-900 dark:text-amber-200 mb-3 flex items-center gap-2">
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
				</svg>
				{t.disclaimer.heading}
			</h2>
			<p class="text-amber-900 dark:text-amber-100 text-sm leading-relaxed">{t.disclaimer.text}</p>
		</section>

		<section>
			<h2 class="text-xl font-semibold text-gray-800 dark:text-dark-200 mb-3">{t.contact.heading}</h2>
			<p class="text-gray-600 dark:text-dark-400">
				{t.contact.text}
				<a href="mailto:{t.contact.email}" class="text-primary-500 hover:text-primary-400 underline">{t.contact.email}</a>
			</p>
		</section>
	</div>
</div>
