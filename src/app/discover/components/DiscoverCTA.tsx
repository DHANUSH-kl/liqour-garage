"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./DiscoverCTA.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function DiscoverCTA() {
    const ctaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ctaRef.current) return;

        gsap.fromTo(
            ctaRef.current,
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ctaRef.current,
                    start: "top 85%",
                }
            }
        );
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.container} ref={ctaRef}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Looking for a Specific Bottle?</h2>
                    <p className={styles.text}>
                        With over 1200+ premium bottles, Liquor Garage offers one of the largest curated selections of spirits.
                        Our team can help you find the perfect bottle for any occasion.
                    </p>
                    <div className={styles.buttons}>
                        <a href="tel:9900447762" className={styles.primaryBtn}>Call Now</a>
                        <a href="#location" className={styles.secondaryBtn}>Store Location</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
