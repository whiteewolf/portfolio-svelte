<script>
    import Navbar from '../components/Navbar.svelte';
    import Footer from '../components/Footer.svelte';
</script>

<div class="container">
    <header>
        <Navbar />
    </header>

    <main>
        <slot />
    </main>

    <footer>
        <Footer />
    </footer>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        justify-content: space-between;
    }

    header, footer {
        width: 100%;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
    }

    header {
        position: fixed;
        top: 0;
        z-index: 1000;
        padding: 10px 0;
    }

    footer {
        position: fixed;
        bottom: 0;
        z-index: 1000;
        padding: 20px 0;
        text-align: center;
    }

    main {
        flex: 1;
        padding-top: 70px; /* Adjust based on header height */
        padding-bottom: 70px; /* Adjust based on footer height */
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>