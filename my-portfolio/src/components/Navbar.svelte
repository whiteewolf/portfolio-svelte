<script>
    import { user } from "../stores/auth";
    import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup } from 'firebase/auth';
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
<nav>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
</nav>

<style>
    nav {
        width: 100%;
        position: fixed;
        top: 0;
        background-color: #333; /* Adjust as needed */
        padding: 10px 0;
        z-index:1000; /* Ensure it's above other content */
    }
    /* button {
        margin: 10px 0;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      background-color: #4e73df;
      color: white;
      cursor: pointer;
      font-size: 1rem;
      width: 100%;
      max-width: 150px;
      transition: background-color 0.3s ease;
    } */
    /* button:hover {
        background-color:#3a57c4;
    } */
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: center; /* Center the items horizontally */
    }

    li {
        margin: 0 15px;
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