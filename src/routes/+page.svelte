<script lang="ts">
  import BlogList from '../components/main/BlogList.svelte';
  import PageWrapper from '../components/PageWrapper.svelte';
  import { post } from '../test/data';
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
    {#each post as data}
      {#if !data.private || false}
        <BlogList post={data} />
      {/if}
    {/each}
  </PageWrapper>
</section>
