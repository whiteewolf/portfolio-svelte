import { writable } from "svelte/store";

export const theme = writable("dark-blue");

const themeColors = {
    "dark-blue": {
        "--bg-color": "#1b263b",
        "--text-color": "#ffffff",
        "--card-bg": "#2c3e50",
        "--button-bg": "#34495e",
        "--button-hover": "#4a6277"
    },
    "dark-gray": {
        "--bg-color": "#333",
        "--text-color": "#ffffff",
        "--card-bg": "#444",
        "--button-bg": "#555",
        "--button-hover": "#666"
    },
    "dark-red": {
        "--bg-color": "#3a0d0d",
        "--text-color": "#ffffff",
        "--card-bg": "#5a1a1a",
        "--button-bg": "#7a2525",
        "--button-hover": "#8b3030"
    },
    "white": {
        "--bg-color": "#ffffff",
        "--text-color": "#000000",
        "--card-bg": "#f0f0f0",
        "--button-bg": "#d9d9d9",
        "--button-hover": "#c0c0c0"
    }
};

// Прилагаме темата само в браузъра
theme.subscribe((value) => {
    if (typeof document !== "undefined") {
        const colors = themeColors[value];
        for (const key in colors) {
            document.documentElement.style.setProperty(key, colors[key]);
        }
    }
});
