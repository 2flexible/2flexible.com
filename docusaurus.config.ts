import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: "Too flexible",
    tagline: "Your too flexible canvas library",
    favicon: "img/favicon1.svg",

    // Future flags, see https://docusau  rus.io/docs/api/docusaurus-config#future
    // future: {
    //     v4: true,   // Improv e comp atibility with the upcoming Docusaurus v4
    // },

    // Set the production url of your site here
    url: "https://2flexible.com",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "2flexible", // Usually your GitHub org/user name.
    projectName: "2flexible", // Usually your repo name.

    onBrokenLinks: "throw",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: "./sidebars.ts",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    // editUrl:
                    //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ["rss", "atom"],
                        xslt: true,
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
                    // Useful options to enforce blogging best practices
                    onInlineTags: "warn",
                    onInlineAuthors: "warn",
                    onUntruncatedBlogPosts: "warn",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: "img/docusaurus-social-card.jpg",
        colorMode: {
            respectPrefersColorScheme: true,
        },
        algolia: {
            // The application ID provided by Algolia
            appId: "YOUR_APP_ID",

            // Public API key: it is safe to commit it
            apiKey: "YOUR_SEARCH_API_KEY",

            indexName: "YOUR_INDEX_NAME",

            // Optional: see doc section below
            contextualSearch: true,

            // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
            externalUrlRegex: "external\\.com|domain\\.com",

            // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
            replaceSearchResultPathname: {
                from: "/docs/", // or as RegExp: /\/docs\//
                to: "/",
            },

            // Optional: Algolia search parameters
            searchParameters: {},

            // Optional: path for search page that enabled by default (`false` to disable it)
            searchPagePath: "search",

            // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
            insights: false,

            // Optional: whether you want to use the new Ask AI feature (undefined by default)
            askAi: "YOUR_ALGOLIA_ASK_AI_ASSISTANT_ID",

            //... other Algolia params
        },
        navbar: {
            title: "Too Flexible",
            logo: {
                alt: "2flexible Logo",
                src: "img/logo.svg",
            },
            items: [
                {
                    type: "docSidebar",
                    sidebarId: "tutorialSidebar",
                    position: "right",
                    label: "Documentation",
                },
                {
                    type: "docSidebar",
                    sidebarId: "apiSidebar",
                    position: "right",
                    label: "API",
                },
                { to: "/blocks", label: "Blocks", position: "right" },
                // {to: '/blog', label: 'Blog', position: 'left'},
                {
                    href: "https://github.com/2flexible/2flex",
                    label: "GitHub",
                    position: "right",
                    target: "_blank",
                },
                {
                    type: "search",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "dark",
            links: [
                {
                    title: "Docs",
                    items: [
                        {
                            label: "Tutorial",
                            to: "/docs/documentation/introduction",
                        },
                    ],
                },
                {
                    title: "Community",
                    items: [
                        {
                            label: "X",
                            href: "https://x.com/2flexiible",
                        },
                    ],
                },
                {
                    title: "More",
                    items: [
                        {
                            label: "GitHub",
                            href: "https://github.com/2flexible/2flex",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} 2flexible, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
