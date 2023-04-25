<script lang="ts">
  import PageWrapper from '../../components/PageWrapper.svelte';
  import Header from '../../components/Header.svelte';
  import type { Post } from '../../types/Post';

  export let data;
  const post: Post | null = data.post;
</script>

<div>
  {#if post}
    <Header />
    <PageWrapper>
      <div class="post">
        <p>
          {post.title}
        </p>
        <p>
          {post.content}
        </p>
      </div>
    </PageWrapper>
  {:else}
    404 Not Found
  {/if}
</div>

<style>
  .post {
    margin-inline: 40px;
  }
</style>
