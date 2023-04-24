<script lang="ts">
	import BlogList from "../components/main/BlogList.svelte";
	import PageWrapper from "../components/PageWrapper.svelte";

	export let data;

	let test = [
		{
			title: "1",
			content: "1",
			image: "https://velog.velcdn.com/images/hyunju/post/e68de810-1276-4a83-bdbb-6391f18d1983/naipo-de-k24rOBJ2D_0-unsplash.jpg"
		},
		{
			title: "2",
			content: "2"
		},
		{
			title: "3",
			content: "3"
		},
		{
			title: "4",
			content: "4"
		}
	]
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
	<link rel="canonical" href="https://dohyun.it">
</svelte:head>

<section>
	<PageWrapper>
		{#each test as data}
			<BlogList
				title={data.title}
				content={data.content}
				image={data.image}
				tag={data.tag}
			/>
		{/each}
	</PageWrapper>
</section>
