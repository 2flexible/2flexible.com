import type { ReactNode } from "react";
import { useRef, useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import { Block, Canvas, LayoutBlock, RectangleBlock } from "@2flexible/2flex";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    const ref = useRef(null);
    useEffect(() => {
        const initCanvas = new Canvas("canvas", 2000, 600);
        const blocks = [];
        const layout = new LayoutBlock({
            width: "100%",
            height: "100%",
            flexWrap: "wrap",
        });
        // const bg = new ImageBlock(bgnew, {
        //     width: "100%",
        //     height: "100%",
        //     opacity: "1",
        //     objectFit: "fill",
        // });
        initCanvas.add(layout);
    }, [ref]);
    return (
        <header style={{ overflow: "hidden" }}>
            <canvas
                ref={ref}
                id={"canvas"}
                width={2000}
                height={800}
                style={{
                    backgroundColor: "rgba(78, 78, 78, 0.2)",
                }}
            ></canvas>
            {/* <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div> */}
        </header>
    );
}

export default function Home(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
        >
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
