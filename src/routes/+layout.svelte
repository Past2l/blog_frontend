<script>
    import PageWrapper from "../components/PageWrapper.svelte";
</script>

<header>
    <PageWrapper>
        <div class="wrapper">
            <img src="/favicon.png" alt="icon">
            <ul>
                <li>DARKMODE</li>
                <li>SEARCH</li>
            </ul>
        </div>
    </PageWrapper>
</header>

<div class="app">
    <slot></slot>
</div>

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

    img {
        width: 40px;
        height: 40px;
        margin-block: 10px;
    }

    ul {
        display: flex;
        align-items: center;
        list-style: none;
        gap: 36px;
    }
</style>
