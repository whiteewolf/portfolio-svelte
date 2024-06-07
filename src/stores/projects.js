import { writable } from 'svelte/store';

export const projects = writable([
    {
        title: 'AntiRaid',
        description: 'With our services, you can easily protect your Discord Server in a matter of seconds!',
        imageUrl: '/images/antiraid_new_banner.png',
        Url: 'https://antiraid.xyz/',
        status: 'online',
        projectId: 1
    },
    {
        title: 'Event Management System',
        description: 'Will be updated.',
        imageUrl: '/images/EVMS_Banner.png',
        Url: 'https://eventm.antiraid.xyz/',
        status: 'undergoing rework',
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