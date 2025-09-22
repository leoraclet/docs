// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightAutoDrafts from 'starlight-auto-drafts'
import starlightAutoSidebar from 'starlight-auto-sidebar'



import markdoc from '@astrojs/markdoc';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://leoraclet.github.io/docs',
    integrations: [starlight({
        title: 'My Docs',
        tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 5 },
        lastUpdated: true,
        plugins: [
            starlightAutoDrafts(),
            starlightAutoSidebar(),
        ],
        // Set English as the default language for this site.
        defaultLocale: 'root',
        locales: {
            // English docs in `src/content/docs/en/`
            root: {
                label: 'English',
                lang: 'en'
            },
            // French docs in `src/content/docs/zh-cn/`
            fr: {
                label: 'Français',
                lang: 'fr'
            },
        },
        editLink: {
            baseUrl: 'https://github.com/leoraclet/docs/edit/main/docs/',
        },
        customCss: [
            // Path to your Tailwind base styles:
            './src/styles/global.css',
        ],
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
        sidebar: [
            {
                label: 'Guides',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Example Guide', slug: 'guides/example' },
                ],
            },
            {
                label: 'Reference',
                autogenerate: { directory: 'reference' },
            },
        ],
    }), markdoc()],

    vite: {
        plugins: [tailwindcss()],
    },
});