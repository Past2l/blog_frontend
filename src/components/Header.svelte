<script>
  import PageWrapper from '../components/PageWrapper.svelte';
  import { PUBLIC_WEBSITE_URL } from '$env/static/public';
  import theme from '../store/theme';

  $: isDark = $theme === 'dark';
</script>

<header>
  <PageWrapper>
    <div class="wrapper">
      <a on:click={() => (location.href = PUBLIC_WEBSITE_URL)}>
        <img class="icon" src="/favicon.png" alt="icon" />
      </a>
      <ul>
        <li>
          <a on:click={() => theme.set(isDark ? 'light' : 'dark')}>
            <img
              class="svg-color icon"
              src="/icons/{isDark ? 'light' : 'dark'}.svg"
              alt="change to {isDark ? 'light' : 'dark'}"
            />
          </a>
        </li>
        <li>
          <a>
            <img class="svg-color icon" src="/icons/search.svg" alt="search" />
          </a>
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
  }

  .icon {
    width: 40px;
    height: 40px;
    margin-block: 10px;
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

  a {
    cursor: pointer;
  }
</style>
