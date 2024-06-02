import { writable } from 'svelte/store';

export const projects = writable([
    {
        title: 'AntiRaid',
        description: 'Description of project one.',
        imageUrl: '/images/AR_banner.jpg',
        Url: 'https://antiraid.xyz/',
        status: 'online',
        projectId: 1
    },
    {
        title: 'Event Management System',
        description: 'Description of project two.',
        imageUrl: '/images/EVMS_Banner.png',
        Url: 'https://eventm.antiraid.xyz/',
        status: 'online',
        projectId: 2
    },
    {
        title: 'Noteys',
        description: "Abandoned Project. Not even a website was made for it before it was abandoned.",
        imageUrl: "/images/noteys_banner.png",
        Url: "https://github.com/whiteewolf/Noteys",
        status: 'offline',
        projectId: 3
    }
    // Add more projects as needed
]);