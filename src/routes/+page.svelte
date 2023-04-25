<script lang="ts">
	import BlogList from '../components/main/BlogList.svelte';
	import PageWrapper from '../components/PageWrapper.svelte';
	import type { Post } from '../types/Post';

	let test: Post[] = [
		{
			id: 1,
			title: '1',
			content: '1',
			date: new Date(),
			comment: 0,
			like: 0,
			image:
				'https://velog.velcdn.com/images/hyunju/post/e68de810-1276-4a83-bdbb-6391f18d1983/naipo-de-k24rOBJ2D_0-unsplash.jpg'
		},
		{
			id: 2,
			title: '2',
			content: '2',
			date: new Date(),
			comment: 0,
			like: 0
		},
		{
			id: 3,
			title: '3',
			content: '3',
			date: new Date(),
			comment: 0,
			like: 0
		},
		{
			id: 4,
			title: '4',
			content: '4',
			date: new Date(),
			comment: 0,
			like: 0
		}
	];
</script>

<svelte:head>
	<title>Past2l's Blog</title>
	<meta name="description" content="Past2l's Blog" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="/" />
	<meta property="og:title" content="Past2l's Blog" />
	<meta property="og:description" content="개발자 Past2l의 블로그입니다." />
	<meta property="og:image" content="/favicon.png" />
	<meta property="og:locale" content="ko_KR" />
	<meta name="twitter:card" content="website" />
	<meta name="twitter:title" content="Past2l's Blog" />
	<meta name="twitter:description" content="개발자 Past2l의 블로그입니다." />
	<meta name="twitter:image" content="/favicon.png" />
	<link rel="canonical" href="https://dohyun.it" />
</svelte:head>

<section>
	<PageWrapper>
		{#each test as data}
			<BlogList post={data} />
		{/each}
	</PageWrapper>
</section>
