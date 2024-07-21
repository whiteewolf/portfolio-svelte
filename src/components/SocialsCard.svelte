<script>
    import { socials } from "../stores/socials";
    export let social;
    const statusColors = {
        'online': 'green',
        'some outages': 'orange',
        'offline': 'gray',
        'undergoing rework': 'cyan'
    };
</script>

<div class="card">
    <img src={social.imageUrl} alt={social.title} />
    <div class="info">
        <h2>{social.title}</h2>
        <br>
        <button class="blue-gradient-button"><a href="{social.Url}" target="_blank" style="color: whitesmoke;">My Profile!</a></button>
    </div>
</div>


<style>
    .card {
        background: #333;
        padding: 20px;
        border-radius: 10px;
        text-align: center;
        color: #fff;
        transition: transform 0.5s ease;
    }
    .card:hover {
        transform: translateY(-20px) translateX(5px);
    }
    .blue-gradient-button {
        background-image: linear-gradient(to right, #4e73df, #224abe);
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        transition: background-color 0.9s ease;
    }

    .blue-gradient-button:hover {
        background-image: linear-gradient(to right, #224abe, #4e73df);
    }
    img {
        max-width: 100%;
        height: 200px;
        border-radius: 10px;
        margin-bottom: 10px;
    }

    .info {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h2 {
        margin: 0;
        font-size: 1.5rem;
        color: #66c0ff;
    }
</style>
