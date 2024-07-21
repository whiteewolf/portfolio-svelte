<script>
    import { auth } from "../firebase";
    import { goto } from "$app/navigation"

    async function handleLogout() {
      try {
        await signOut(auth);
        goto('/auth'); // Redirect to the auth page after logout
      } catch (error) {
        console.error('Error logging out:', error);
      }
    }
</script>
<nav class="navbar">
        <img src="/images/me.png" alt="Emil Ilieff" class="nav-image">
        <div class="brand-name">Emil Ilieff</div>
    <div class="nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
        <a href="/socials">Socials</a>
        <a href="/techs">Technologies</a>
    </div>
</nav>

<style>
     .navbar {
        display: flex;
        align-items: center;
        padding: 20px;
        background-color: #464646; /* Dark background */
        color: #e0e0e0; /* Light text color */
    }
    .navbar .nav-image {
        border-radius: 80%;
    }
    .navbar img {
        height: 40px;
        margin-right: 10px;
    }

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
        color: #e0e0e0;
        text-decoration: none;
        font-size: 1rem;
    }

    .navbar a:hover {
        color: #66c0ff;
    }

    a {
        color: #fff;
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
</style>