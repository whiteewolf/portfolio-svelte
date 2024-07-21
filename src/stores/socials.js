import { writable } from 'svelte/store';

export const socials = writable([
    {
        title: 'Instagram',
        imageUrl: '/images/ig_logo.png',
        Url: 'https://www.instagram.com/_ilieff_e/',
    },
    {
        title: 'Github',
        imageUrl: '/images/gh_logo.png',
        Url: 'https://github.com/whiteewolf',
    },
    {
        title: 'Discord Server',
        imageUrl: '/images/discord_logo.png',
        Url: 'https://discord.gg/Qrh7acYMyA',
    }
    // Add more projects as needed
]);