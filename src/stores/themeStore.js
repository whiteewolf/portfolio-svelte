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
    },
    "forest-green": {
        "--bg-color": "#2E8B57", // Sea Green
        "--text-color": "#ffffff", // White for contrast
        "--card-bg": "#256b45", // Darker shade of bg-color
        "--button-bg": "#556B2F", // Dark Olive Green
        "--button-hover": "#4CAF50" // Green
    },
    "sunset-orange": {
        "--bg-color": "#FF4500", // Orange Red
        "--text-color": "#ffffff", // White for contrast
        "--card-bg": "#cc3700", // Darker shade of bg-color
        "--button-bg": "#FF6347", // Tomato
        "--button-hover": "#FF7F50" // Coral
    },
    "ocean-breeze": {
        "--bg-color": "#4682B4", // Steel Blue
        "--text-color": "#ffffff", // White for contrast
        "--card-bg": "#365f8c", // Darker shade of bg-color
        "--button-bg": "#5F9EA0", // Cadet Blue
        "--button-hover": "#20B2AA" // Light Sea Green
    },
    "lavender-bliss": {
        "--bg-color": "#9370DB", // Medium Purple
        "--text-color": "#ffffff", // White for contrast
        "--card-bg": "#7459af", // Darker shade of bg-color
        "--button-bg": "#BA55D3", // Orchid
        "--button-hover": "#DA70D6" // Orchid
    },
    "earthy-tones": {
        "--bg-color": "#8B4513", // Saddle Brown
        "--text-color": "#ffffff", // White for contrast
        "--card-bg": "#6e3610", // Darker shade of bg-color
        "--button-bg": "#D2B48C", // Tan
        "--button-hover": "#CD853F" // Peru
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
