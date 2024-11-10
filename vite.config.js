// vite.config.js
import { defineConfig } from 'vite';
import astro from '@astrojs/astro';

export default defineConfig({
    plugins: [astro()],
    resolve: {
        alias: {
            '@': '/src' // 例として `@/` を `/src` にエイリアス
        }
    }
});
