<script lang="ts">
  import type { Introduce } from '../../types/Introduce';

  export let data: Introduce;
</script>

<div class="introduce">
  <img class="img" src={data.image || '/user.png'} alt="user" />
  <div>
    <h2>{data.name}</h2>
    {#if data.content}
      <p>{data.content}</p>
    {/if}
  </div>
</div>

<style>
  .introduce {
    margin-top: 40px;
    margin-inline: 40px;
    display: flex;
    flex-direction: row;
    gap: 32px;
    box-shadow: 0 4px 20px rgba(96, 96, 96, 0.25);
    border-radius: 16px;
    padding: 24px;
  }

  .img {
    width: 10em;
  }
</style>
