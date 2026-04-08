import { useRef, useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
// import CanvasInit from "../playground/playground";
// import { ContextMenu } from "../playground/contextMenu";
// import { NavbarMenu } from "../playground/navbar";
// import { SaveAnimation } from "../playground/animationSave";
// import { BlockOptions } from "../playground/editPropertiesBar";
import Stock3 from "@site/static/video/stock3.webm";
// import Stock5 from "@site/static/video/stock5.mp4";
import Logo from "@site/static/img/logo.svg";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    const ref = useRef(null);

    // document.title = localStorage.getItem("title") || document.title;

    return (
        <header style={{ overflow: "hidden", height: "100vh" }}>
            {/* <CanvasInit>
                <NavbarMenu />
                <ContextMenu />
                <BlockOptions />
                <SaveAnimation />
            </CanvasInit> */}
            <div
                className="container"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    alignContent: "center",
                    flexDirection: "column",
                    height: "100%",
                }}
            >
                <video
                    autoPlay
                    muted
                    playsInline
                    width={900}
                    height={700}
                    loop
                    style={{
                        width: "100%",
                        height: "120%",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: -99,
                        opacity: "50%",
                        objectFit: "cover",
                    }}
                >
                    <source src={Stock3} type="video/mp4"></source>
                </video>
                <Heading
                    as="h1"
                    className="hero__title"
                    style={{ display: "flex", alignItems: "center", gap: 20 }}
                >
                    <Logo width={60} height={60}></Logo>
                    Your too flexible infinite canvas library
                </Heading>
                <p className="hero__subtitle">Easy to setup, use, and build.</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/documentation/introduction"
                    >
                        Documentation
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Too flexible infinite canvas library"
        >
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
