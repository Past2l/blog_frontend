<script lang="ts">
  import PageWrapper from '../../components/PageWrapper.svelte';

  export let data;
  let post = data.post;
</script>

<div>
  {#if post}
    <PageWrapper>
      <p>
        {post.title}
      </p>
      <p>
        {post.content}
      </p>
    </PageWrapper>
  {:else}
    <p>404 Not Found</p>
  {/if}
</div>
