<script>
    import ProjectCard from '../../components/ProjectCard.svelte';
    import { projects } from '../../stores/projects';
    import { get } from 'svelte/store';
</script>

<main>
    <h1>My Projects</h1>
    <div class="projects-grid">
        {#each $projects as project, index}
            <ProjectCard {project}/>
            <!-- Add clearfix after every third project -->
            <!-- <element class="clearfix"></element> -->
        {/each}
    </div>
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

    .projects-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* Three projects per row */
        gap: 20px;
        padding: 20px;
    }

    /* Clearfix to fix grid layout */
    /* .clearfix {
        clear: both;
    } */

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