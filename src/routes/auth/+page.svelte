<script>
    import { auth, googleProvider } from '../../firebase';
    import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup } from 'firebase/auth';
    import { user } from '../../stores/auth';
    import { goto } from '$app/navigation';
  
    let email = '';
    let password = '';
  
    async function handleRegister() {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        console.error('Error registering:', error);
      }
    }
  
    async function handleLogin() {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        goto('/'); // Redirect to the home page or dashboard after login
      } catch (error) {
        console.error('Error logging in:', error);
      }
    }
  
    async function handleGoogleLogin() {
      try {
        await signInWithPopup(auth, googleProvider);
        goto('/'); // Redirect to the home page or dashboard after login
      } catch (error) {
        console.error('Error logging in with Google:', error);
      }
    }
  
    async function handleLogout() {
      try {
        await signOut(auth);
        goto('/auth'); // Redirect to the auth page after logout
      } catch (error) {
        console.error('Error logging out:', error);
      }
    }
  </script>
  
  {#if $user}
    <div class="auth-card">
      <p>Welcome, {$user.email}</p>
      <button on:click={handleLogout}>Logout</button>
    </div>
  {:else}
    <div class="auth-card">
      <div class="auth-form">
        <input type="email" bind:value={email} placeholder="Email" />
        <input type="password" bind:value={password} placeholder="Password" />
        <button on:click={handleRegister}>Register</button>
        <button on:click={handleLogin}>Login</button>
        <button on:click={handleGoogleLogin}>Login with Google</button>
      </div>
    </div>
  {/if}
  
  <style>
    .auth-card {
      background: #333;
      padding: 20px;
      border-radius: 10px;
      text-align: center;
      color: #fff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      max-width: 400px;
      margin: 50px auto;
    }
  
    .auth-form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  
    input {
      margin: 10px 0;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      width: 100%;
      max-width: 300px;
    }
  
    button {
      margin: 10px 0;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      background-color: #4e73df;
      color: white;
      cursor: pointer;
      font-size: 1rem;
      width: 100%;
      max-width: 300px;
      transition: background-color 0.3s ease;
    }
  
    button:hover {
      background-color: #3a57c4;
    }
  </style>
  