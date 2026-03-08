"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./PageIntro.module.css";

export default function PageIntro() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        gsap.fromTo(
            containerRef.current.children,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
        );
    }, []);

    return (
        <section className={styles.introSection}>
            <div className={styles.container} ref={containerRef}>
                <h1 className={styles.title}>Discover the World of Fine Spirits</h1>
                <p className={styles.description}>
                    Explore a curated guide to the world’s most celebrated spirits. From bold whiskies to refined wines,
                    discover the styles, origins, and characteristics that define each category.
                </p>
            </div>
        </section>
    );
}
