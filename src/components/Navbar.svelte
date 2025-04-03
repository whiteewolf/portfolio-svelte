<script>
    import { auth } from "../firebase";
    import { goto } from "$app/navigation"
    import { fade, scale } from "svelte/transition";

    async function handleLogout() {
      try {
        await signOut(auth);
        goto('/auth'); // Redirect to the auth page after logout
      } catch (error) {
        console.error('Error logging out:', error);
      }
    }
    import { theme } from "../stores/themeStore";
    import { onClickOutside } from "../utils/onClickOutside"; // Helper to close menu when clicking outside

    let menuOpen = false;
    let dropdown;

    // Close dropdown when clicking outside
    onClickOutside(dropdown, () => menuOpen = false);

    const themes = [
        { name: "Dark Blue", value: "dark-blue", hoverColor: "#2c3e50" },
        { name: "Dark Gray", value: "dark-gray", hoverColor: "#555" },
        { name: "Dark Red", value: "dark-red", hoverColor: "#8b0000" },
        { name: "White", value: "white", hoverColor: "#ddd" },
        { name: "Forest Green", value: "forest-green", hoverColor: "#2E8B57" },
{ name: "Sunset Orange", value: "sunset-orange", hoverColor: "#FF4500" },
{ name: "Ocean Breeze", value: "ocean-breeze", hoverColor: "#4682B4" },
// { name: "Lavender Bliss", value: "lavender-bliss", hoverColor: "#9370DB" },
{ name: "Earthy Tones", value: "earthy-tones", hoverColor: "#8B4513" }

    ];

    function switchTheme(newTheme) {
        theme.set(newTheme);
        menuOpen = false; // Close menu after selection
    }
</script>
<nav class="navbar">
        <!-- <img src="/images/me.png" alt="Emil Ilieff" class="nav-image"> -->
        <div class="brand-name">Emil Ilieff</div>
    <div class="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
        <a href="/socials">Socials</a>
        <a href="/techs">Technologies</a>
    </div>
    <div class="theme-menu">
        <button class="theme-button" on:click={() => (menuOpen = !menuOpen)}>
            Change Theme ⬇
        </button>
        {#if menuOpen}
            <div class="dropdown" transition:fade={{ duration: 150 }}>
                {#each themes as t}
                    <button 
                        on:click={() => switchTheme(t.value)}
                        style="--hover-color: {t.hoverColor};"
                        on:mouseover="{(e) => e.target.style.background = t.hoverColor}"
                        on:mouseout="{(e) => e.target.style.background = 'none'}"
                        on:focus="{(e) => e.target.style.background = t.hoverColor}"
                        on:blur="{(e) => e.target.style.background = t.hoverColor}"
                    >
                    <span class="theme-circle" style="background-color: {t.hoverColor};"></span>
                        {t.name}
                    </button>
                {/each}
            </div>
        {/if}
    </div>
</nav>

<style>
     .navbar {
        display: flex;
        align-items: center;
        padding: 20px;
        background-color: #464646; /* Dark background */
        color: var(--text-color); /* Light text color */
    }
    /* .navbar .nav-image {
        border-radius: 80%;
    }
    .navbar img {
        height: 40px;
        margin-right: 10px;
    } */
    .navbar .brand-name {
        font-size: 1.5rem;
        color: #66c0ff; /* Futuristic blue */
    }

    .navbar .nav-links {
        margin-left: 50px;
        display: flex;
        gap: 15px;
    }

    .navbar a {
        color: var(--text-color);
        text-decoration: none;
        font-size: 1rem;
    }

    .navbar a:hover {
        color: #66c0ff;
    }

    a {
        color: var(--text-color);
        text-decoration: none;
        font-size: 1.2rem;
        position: relative;
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
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        background-color: var(--card-bg);
    }

    .theme-menu {
        position: relative;
    }

    .dropdown {
        position: absolute;
        top: 30px;
        right: 0;
        background: var(--card-bg);
        border: 1px solid var(--button-hover);
        border-radius: 5px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        z-index: 100;
        min-width: 170px; /* Adjusted width to fit names and circles */
    }

    .dropdown button {
        background: none;
        border: none;
        color: var(--text-color);
        padding: 5px 10px;
        text-align: left;
        width: 100%;
        cursor: pointer;
        display: flex; /* Ensures the circle and text are aligned */
        align-items: center;
        gap: 10px; /* Space between the circle and the text */
        transition: background 0.2s ease-in-out;
    }

    .dropdown button:hover {
        background: var(--button-hover);
    }

    .theme-circle {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        display: inline-block;
    }
    .theme-button {
        background: var(--button-bg);
        color: var(--text-color);
        border: none;
        padding: 8px 12px;
        border-radius: 5px;
        cursor: pointer;
        font-weight: bold;
    }

    .theme-button:hover {
        background: var(--button-hover);
    }
</style>