<script>
    // Add any JavaScript logic here
</script>

<main>
    <h1>Welcome to My Portfolio!</h1>
    <p>Explore my projects and get to know more about me.</p>
</main>

<style>
    main {
        flex-direction: column;
        justify-content:left;
        align-items: center;
        text-align: center;
        flex: 1;
    }

    h1 {
        font-size: 3rem;
        color: #fff;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        animation: fadeInUp 1s ease;
    }

    p {
        font-size: 1.2rem;
        color: #ccc;
        animation: fadeInUp 1.5s ease;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>