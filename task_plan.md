# Task Plan: AdSense Thin Content 회피 - 4개 사이트 홈 본문 보강

작성일: 2026-05-02 / 긴급 작업

## 목표

AdSense가 4개 사이트 홈을 thin content로 거부할 위험.
홈 SSR HTML 본문을 4,000-6,000자 분량 1인칭 콘텐츠로 보강.

## 대상 4개 사이트

1. javascript.ac - 학습 플랫폼 (4개 언어: en/ko/ja/zh)
2. sdk.is - 개발자 도구 (en/ko, fallback en)
3. sdk.bz - 금융 계산기 (en/ko)
4. sd.gy - 일상 계산기 (en/ko/ja/zh)

## 공통 원칙 (AdSense 2026 거부 회피)

- [x] 1인칭 (We/I)
- [x] Information Gain (실측 수치, 다른 곳에 없는 분석)
- [x] 통계/숫자 (μs, runs, 비교)
- [x] 진부한 표현 금지 ("Welcome to our website" 등)
- [x] 사이트별 고유 톤
- [x] SSR HTML 본문 (svelte:head 안 X)
- [x] en + ko 둘 다, 다른 언어는 en fallback
- [x] 디자인 시스템 색상 따르기

## Phase 별 작업

### Phase 1: 사이트별 톤/각도 정리 (findings.md)
- [x] javascript.ac → 학습 플랫폼 만든 사람 시점 (2015 W3Schools 시절부터)
- [x] sdk.is → 개발자 도구, AWS 키 누출 일화, 성능 측정 수치
- [x] sdk.bz → 금융 손실 경험 ($3,200 refinance), YMYL 면책
- [x] sd.gy → 개인 도구, BMI 178cm/82kg 일화, 프라이버시

### Phase 2: 각 사이트 +page.svelte 수정
- [x] javascript.ac (4언어) — 추가 콘텐츠 4,000-6,000자
- [x] sdk.is (en/ko) — 추가 콘텐츠 4,000-6,000자
- [x] sdk.bz (en/ko) — 추가 콘텐츠 4,000-6,000자
- [x] sd.gy (en/ko, others fallback) — 추가 콘텐츠 4,000-6,000자

### Phase 3: 빌드 검증
- [x] javascript.ac npm run build
- [x] sdk.is npm run build
- [x] sdk.bz npm run build
- [x] sd.gy npm run build

### Phase 4: 보고
- [x] 각 사이트 홈 추가된 글자수
- [x] 각 사이트 unique 톤/각도
- [x] 빌드 결과

## DoD (Definition of Done)

- 4개 사이트 모두 빌드 성공
- 추가된 SSR HTML 본문이 사이트별 4,000자+ (커뮤니티 작업 가이드 기준 5,000+)
- 각 사이트마다 다른 voice / 다른 origin story / 진부함 없는 1인칭 톤
- 디자인 시스템 (Tailwind 색상) 일치
