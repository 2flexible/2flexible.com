import React from "react";
import { Icon } from "@iconify/react";

export default function GithubLink() {
    return (
        <a
            href="https://github.com/facebook/docusaurus"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
        >
            <Icon icon="mdi:github" width="24" />
        </a>
    );
}
