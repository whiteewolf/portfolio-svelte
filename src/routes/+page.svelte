<script>
    // Add any JavaScript logic here
</script>

<main>
    <h1>Welcome to My Portfolio!</h1>
    <p>Explore my projects and get to know more about me.</p>
        <button class="button">
            <a href="/projects">Projects</a>
        </button>
        <button class="button">
            <a href="/contact">Contact Me</a>
        </button>
        <!-- <button class="button">
            <a href="/socials">Social Media</a>
        </button> -->
    <!-- <button class="theme-button"> -->
    <!-- </button> -->
</main>

<style>
    main {
        padding: 50px;
        flex-direction: column;
        justify-content:left;
        align-items: center;
        text-align: center;
        flex: 1;
    }
    h1 {
        font-size: 3rem;
        color: var(--text-color);
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        animation: fadeInUp 2s ease;
    }
    .button {
        background: var(--button-bg);
        color: var(--text-color);
        border: none;
        padding: 10px 20px;
        font-size: 1rem;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
        /* transition: background 0.3s ease, transform 0.2s ease; */
        animation: fadeInUp 3s ease;
    }

    .button:hover {
        background: var(--button-hover);
    }

    .button:active {
        transform: scale(0.95);
    }
    a {
        color: var(--text-color);
        text-decoration: none;
        font-size: 1.2rem;
        position: relative;
        animation: fadeInUp 2s ease;
    }

    a::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        display: block;
        margin-top: 5px;
        right: 0;
        background: #66c0ff; /* Adjust as needed */
        transition: width 0.3s ease;
        -webkit-transition: width 0.3s ease;
    }

    a:hover::after {
        width: 100%;
        left: 0;
        background-color: #66c0ff; /* Adjust as needed */
    }
    p {
        font-size: 1.2rem;
        color: var(--text-color);
        animation: fadeInUp 2.5s ease;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(100px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>