<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import { auth } from '../firebase';
    import { register, login, logout } from '../auth';
    import { onAuthStateChanged } from 'firebase/auth';

    let user = writable(null);
    let email = '';
    let password = '';

    const handleRegister = async () => {
        try {
            await register(email, password);
        } catch (error) {
            console.error('Registration error:', error);
        }
    };

    const handleLogin = async () => {
        try {
            await login(email, password);
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const handleLogout = async () => {
        try {
            await logout();
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    onMount(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            user.set(firebaseUser);
        });
        return () => unsubscribe();
    });
</script>

<div class="auth-container">
    {#if $user}
        <p>Welcome, {$user.email}</p>
        <button on:click={handleLogout}>Logout</button>
    {:else}
        <div class="auth-form">
            <input type="email" bind:value={email} placeholder="Email" />
            <input type="password" bind:value={password} placeholder="Password" />
            <button on:click={handleRegister}>Register</button>
            <button on:click={handleLogin}>Login</button>
        </div>
    {/if}
</div>

<style>
    .auth-container {
        text-align: center;
        margin-top: 50px;
    }

    .auth-form {
        display: inline-block;
        text-align: left;
    }

    input {
        display: block;
        margin-bottom: 10px;
        padding: 10px;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    button {
        margin-right: 10px;
        padding: 10px 20px;
        font-size: 1rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        background: #4e73df;
        color: white;
        transition: background 0.3s ease;
    }

    button:hover {
        background: #224abe;
    }
</style>
