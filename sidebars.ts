import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    tutorialSidebar: [
        {
            type: "category",
            label: "Getting Started",
            collapsible: true,
            items: ["documentation/introduction", "documentation/installation"],
        },
        {
            type: "category",
            label: "Guide",
            collapsible: true,
            items: [
                "documentation/guide/the-block",
                "documentation/guide/transformation",
                "documentation/guide/positions",
                "documentation/guide/responsibility",
                "documentation/guide/events",
                {
                    type: "category",
                    label: "Shapes",
                    collapsible: true,
                    items: [
                        "documentation/shapes/rectangle",
                        "documentation/shapes/text",
                        "documentation/shapes/circle",
                        "documentation/shapes/line",
                        "documentation/shapes/image",
                        "documentation/shapes/video",
                    ],
                },
                "documentation/guide/animation",
                {
                    type: "category",
                    label: "Advanced",
                    collapsible: true,
                    items: ["documentation/advanced_features/history"],
                },
            ],
        },
    ],
    apiSidebar: [
        {
            type: "category",
            label: "Api Reference",
            collapsible: false,
            items: [
                "api/Canvas",
                "api/Block",
                "api/LayoutBlock",
                "api/ShapeBlock",
                "api/RectangleBlock",
                "api/TextBlock",
                "api/CircleBlock",
                "api/LineBlock",
                "api/ImageBlock",
                "api/VideoBlock",
            ],
        },
    ],

    // But you can create a sidebar manually
    /*
    tutorialSidebar: [
      'intro',
      'hello',
      {
        type: 'category',
        label: 'Tutorial',
        items: ['tutorial-basics/create-a-document'],
      },
    ],
     */
};

export default sidebars;
