<script lang="ts">
  import type { Post } from '../../types/Post';

  export let post: Post;
</script>

<div class="main">
  {#if post.image}
    <div class="top">
      <img
        class="img"
        src={post.image}
        alt="banner"
        on:click={() => (location.href = `/${post.id}`)}
      />
    </div>
  {/if}
  <div class="bottom">
    <h2 class="title" on:click={() => (location.href = `/${post.id}`)}>
      {post.title}
    </h2>
    <p class="content">
      {post.content.length > 150
        ? post.content.substring(0, 150) + '...'
        : post.content}
    </p>
  </div>
  {#if post.tag?.length > 0}
    <div class="tag">
      {#each post.tag as tag}
        <div class="tag-child">
          {tag}
        </div>
      {/each}
    </div>
  {/if}
  <div class="date">
    {post.date.getFullYear()}년
    {post.date.getMonth() + 1}월
    {post.date.getDate()}일 ·
    {post.comment}개의 댓글 ·
    {post.like}명의 좋아요
  </div>
</div>

<style>
  .main {
    margin: 40px;
    padding-inline: 24px;
    padding-bottom: 24px;
    box-shadow: 0 4px 20px rgba(96, 96, 96, 0.25);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
  }

  .img {
    margin-top: 24px;
    width: 100%;
    border-radius: 16px;
    cursor: pointer;
  }

  .title {
    font-size: 1.5rem;
    cursor: pointer;
  }

  .content {
    font-size: 1rem;
  }

  .tag {
    margin-bottom: 24px;
    margin-top: 8px;
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    gap: 16px;
  }

  .tag-child {
    border-radius: 16px;
    padding: 8px 16px;
    background-color: #eaeaea;
    cursor: pointer;
  }

  .date {
    font-size: 0.85rem;
    color: dimgray;
  }
</style>
