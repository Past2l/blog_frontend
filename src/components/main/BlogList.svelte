<script lang="ts">
    export let title: string;
    export let content: string;
    export let image: string | null;
    export let tag: string[] | null;
    export let date: Date | null;
    export let comment: number | null;
    export let like: number | null;

    if (!comment)
      comment = 0;
    if (!like)
      like = 0;
    if (!date)
      date = new Date();
</script>

<div class="main">
    {#if image}
        <div class="top">
            <img class="img" src={image} alt="banner">
        </div>
    {/if}
    <div class="bottom">
        <h2 class="title">
            {title}
        </h2>
        <p class="content">
            {content}
        </p>
    </div>
    {#if tag && tag.length > 0}
        <div>
        </div>
    {/if}
    <div class="date">
        {date.getFullYear()}년 {date.getMonth()+1}월 {date.getDate()}일
        &nbsp;&nbsp;·&nbsp;&nbsp;
        {comment}개의 댓글
        &nbsp;&nbsp;·&nbsp;&nbsp;
        {like}명의 좋아요
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
    }

    .title {
        font-size: 1.5rem;
    }

    .content {
        font-size: 1rem;
    }

    .date {
        font-size: 0.85rem;
        color: dimgray;
    }
</style>