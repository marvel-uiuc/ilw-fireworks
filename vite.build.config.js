import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist",
        lib: {
            name: "ilw-fireworks",
            entry: "ilw-fireworks.js",
            fileName: "ilw-fireworks",
            formats: ["es", "cjs", "umd"],
        },
        rollupOptions: {
            output: {
                assetFileNames: (chunkInfo) => {
                    if (chunkInfo.name === "style.css") return "ilw-fireworks.css";
                },
            },
        },
    },
    server: {
        hmr: false,
    },
});
