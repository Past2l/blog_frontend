<script>
  import PageWrapper from '../components/PageWrapper.svelte';
  import { PUBLIC_WEBSITE_URL } from '$env/static/public';
  import theme from '../store/theme';

  $: isDark = $theme === 'dark';
</script>

<header>
  <PageWrapper>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="wrapper">
      <img
        on:click={() => (location.href = PUBLIC_WEBSITE_URL)}
        class="icon-40 clickable"
        src="/favicon.png"
        alt="icon"
      />
      <ul>
        <li>
          <img
            on:click={() => theme.set(isDark ? 'light' : 'dark')}
            class="svg-color icon-32 clickable"
            src="/icons/{isDark ? 'light' : 'dark'}.svg"
            alt="change to {isDark ? 'light' : 'dark'}"
          />
        </li>
        <li>
          <img
            class="svg-color icon-32 clickable"
            src="/icons/search.svg"
            alt="search"
          />
        </li>
      </ul>
    </div>
  </PageWrapper>
</header>

<style>
  header {
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    height: 60px;
    background: white;
    box-shadow: 0 4px 20px rgba(96, 96, 96, 0.25);
    z-index: 5;
  }

  .wrapper {
    padding-inline: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }

  .clickable {
    cursor: pointer;
  }

  .icon-32 {
    width: 32px;
    height: 32px;
  }

  .icon-40 {
    width: 40px;
    height: 40px;
  }

  .svg-color {
    filter: invert(56%) sepia(2%) saturate(0%) hue-rotate(205deg)
      brightness(89%) contrast(88%);
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 24px;
    margin: 0;
  }
</style>
