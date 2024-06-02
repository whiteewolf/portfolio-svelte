<script>
    import { onMount } from 'svelte';
    import { projects } from '../../stores/projects.js';
    import { writable } from 'svelte/store';
    import { getProjects, updateProjectStatus } from '../../firestore.js';
    import { user } from '../../stores/auth';
    import { goto } from '$app/navigation';
  
    let autoUpdate = writable(false);
  
    // Load projects from Firestore on component mount
    onMount(async () => {
      const loadedProjects = await getProjects();
      projects.set(loadedProjects);
    });
  
    // Redirect to the auth page if the user is not logged in
    onMount(() => {
      user.subscribe((u) => {
        if (!u) {
          goto('/auth');
        }
      });
    });
  
    function updateStatus(index, status) {
      projects.update(projs => {
        projs[index].status = status;
        return projs;
      });
    }
  
    async function saveStatuses() {
  const projs = $projects;
  for (const proj of projs) {
    await updateProjectStatus(proj.id, proj.status); // Ensure proj.id is correctly provided
  }
}
  
    function toggleAutoUpdate() {
      autoUpdate.update(value => !value);
    }
    const statusColors = {
        'online': 'green',
        'some outages': 'orange',
        'offline': 'gray',
        'undergoing rework': 'cyan'
    };
  </script>
  
  <main>
    <h1>Admin Page</h1>
    <div class="auto-update">
      <label>
        <input type="checkbox" bind:checked={$autoUpdate} on:change={toggleAutoUpdate} />
        <span>Auto Update</span>
      </label>
    </div>
    {#each $projects as project, index}
      <div class="project-control">
        <h2>{project.title}</h2>
        <div class="status">
          <span class="status-dot" style="background-color: {statusColors[project.status]}"></span>
          <span class="status-text" style="color: {statusColors[project.status]}">{project.status}</span>
        </div>
        <select on:change="{(event) => updateStatus(index, event.target.value)}" bind:value={project.status}>
          <option value="online">Online</option>
          <option value="some outages">Some Outages</option>
          <option value="offline">Offline</option>
          <option value="undergoing rework">Undergoing Rework</option>
        </select>
      </div>
    {/each}
    <button on:click={saveStatuses}>Save Statuses</button>
  </main>
  
  <style>
    main {
      padding: 20px;
      text-align: center;
      background: #121212; /* Dark background */
      color: #e0e0e0; /* Light text color */
      font-family: 'Roboto', sans-serif;
    }
  
    h1 {
      font-size: 2.5rem;
      color: #66c0ff; /* Futuristic blue */
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
      animation: fadeInUp 1s ease;
      margin-bottom: 20px;
    }
  
    .auto-update {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
    }
  
    .auto-update label {
      display: flex;
      align-items: center;
      color: #66c0ff;
      font-size: 1.2rem;
    }
  
    .auto-update input[type="checkbox"] {
      margin-right: 10px;
      accent-color: #66c0ff; /* Customize checkbox color */
    }
  
    .project-control {
      margin: 20px 0;
      background: #1e1e1e; /* Slightly lighter background for contrast */
      padding: 15px;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  
    h2 {
      margin: 0 0 10px;
      font-size: 1.5rem;
      color: #66c0ff;
    }
  
    select {
      padding: 10px;
      font-size: 1rem;
      margin-top: 10px;
      border: 1px solid #444;
      border-radius: 5px;
      background: #1e1e1e;
      color: #e0e0e0;
      appearance: none;
      cursor: pointer;
      transition: border-color 0.3s ease;
    }
  
    select:hover, select:focus {
      border-color: #66c0ff;
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
  