<script>
    import { writable } from 'svelte/store';

let name = '';
let email = '';
let message = '';

let responseMessage = writable('');

async function handleSubmit(event) {
    event.preventDefault();
    const contact = { name, email, message };

    try {
        const res = await fetch('https://portfolio-api-2ls9.vercel.app/api/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contact),
        });

        if (res.ok) {
            responseMessage.set('Contact information sent successfully!');
            // Reset form fields
            name = '';
            email = '';
            message = '';
        } else {
            responseMessage.set('Failed to send contact information.');
        }
    } catch (error) {
        console.error('Error:', error);
        responseMessage.set('An error occurred. Please try again later.');
    }
}
</script>

<main>
    <h1>Contact Me</h1>
    <form on:submit|preventDefault={handleSubmit}>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" bind:value={name} required />
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" bind:value={email} required />
        </div>
        <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" bind:value={message} required></textarea>
        </div>
        <button type="submit">Send</button>
    </form>
    {#if $responseMessage}
    <p>{$responseMessage}</p>
    {/if}
</main>

<style>
    main {
        padding: 20px;
        text-align: center;
    }

    h1 {
        font-size: 2.5rem;
        color: #fff;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        animation: fadeInUp 1s ease;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 500px;
        margin: 0 auto;
        animation: fadeInUp 1.5s ease;
    }

    .form-group {
        margin-bottom: 15px;
        width: 100%;
    }

    label {
        display: block;
        margin-bottom: 5px;
        color: #ccc;
    }

    input, textarea {
        width: 100%;
        padding: 10px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 4px;
        background: rgba(255, 255, 255, 0.1);
        color: #fff;
        outline: none;
    }

    input:focus, textarea:focus {
        border-color: #66c0ff;
    }

    button {
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        background: #66c0ff;
        color: #fff;
        font-size: 1rem;
        cursor: pointer;
        transition: background 0.3s ease;
    }

    button:hover {
        background: #559edf;
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