"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import styles from "./Collection.module.css";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const Collection = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            let mm = gsap.matchMedia();

            mm.add("(min-width: 769px)", () => {
                // Wait for hero to scroll down to intro, animating bottle scale and rotation
                gsap.to(`.${styles.heroBottle}`, {
                    rotate: 0,
                    scale: 0.8,
                    scrollTrigger: {
                        trigger: `.${styles.hero}`,
                        start: "top top",
                        endTrigger: `.${styles.sectionIntro}`,
                        end: "top top",
                        scrub: true,
                        pin: `.${styles.heroBottleWrapper}`,
                        pinSpacing: false,
                        invalidateOnRefresh: true,
                    },
                });
            });

            mm.add("(max-width: 768px)", () => {
                // Mobile Animation Logic: Clean exit without pinning
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: `.${styles.hero}`,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                        invalidateOnRefresh: true,
                    },
                });

                // Gently straighten, move up, and fade out so it never overlaps the section below
                tl.to(`.${styles.heroBottle}`, { rotate: 0, y: -100, opacity: 0 }, 0);
                tl.to(`.${styles.heroContent}`, { opacity: 0, y: -50 }, 0);
            });

            // Premium Text Reveal for Intro Section (Blur + Slide Up)
            const leftElements = gsap.utils.toArray(`.${styles.introLeft} > *`);
            gsap.from(leftElements, {
                scrollTrigger: {
                    trigger: `.${styles.sectionIntro}`,
                    start: "top 75%",
                    toggleActions: "play none none reverse",
                },
                y: 40,
                opacity: 0,
                filter: "blur(10px)",
                duration: 1.2,
                stagger: 0.15,
                ease: "power3.out",
            });

            const rightElements = gsap.utils.toArray(`.${styles.ingredientsTitle}, .${styles.ingredientItem}`);
            gsap.from(rightElements, {
                scrollTrigger: {
                    trigger: `.${styles.introRight}`,
                    start: "top 75%",
                    toggleActions: "play none none reverse",
                },
                x: 30,
                y: 20,
                opacity: 0,
                filter: "blur(10px)",
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out",
            });

            return () => mm.revert();
        },
        { scope: containerRef }
    );

    return (
        <div ref={containerRef} className={styles.mainContainer} id="collection">
            {/* Hero Bottle Overlay Wrapper */}
            <div className={styles.heroBottleWrapper}>
                <Image
                    src="/bl bottle.png"
                    alt="Premium Collection Bottle"
                    width={400}
                    height={900}
                    className={styles.heroBottle}
                    quality={100}
                    priority
                />
            </div>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>
                        <span className={styles.line}>Premium</span>
                        <span className={`${styles.line} ${styles.highlight}`}>Collection</span>
                    </h1>
                </div>
            </section>

            {/* Introduction Section */}
            <section className={styles.sectionIntro}>
                <div className={styles.introGrid}>
                    {/* Left Side */}
                    <div className={styles.introLeft}>
                        <p className={styles.smallTitle}>Our Selection</p>
                        <h2 className={styles.mainHeading}>The Premium Collection</h2>
                        <p className={styles.description}>
                            Discover our exclusive range of premium spirits, curated with unmatched precision. Explore flavors that define luxury.
                        </p>
                        <div>
                            <Link href="/collection" className={styles.ctaBox}>Explore Collection</Link>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className={styles.introRight}>
                        <div className={styles.ingredientsLog}>
                            <h3 className={styles.ingredientsTitle}>WHY THIS COLLECTION</h3>

                            <div className={styles.ingredientItem}>
                                <div className={styles.ingredientText}>
                                    <strong>Curated Quality</strong>
                                    <p>Each bottle is selected for its craftsmanship, heritage, and exceptional character.</p>
                                </div>
                            </div>

                            <div className={styles.ingredientItem}>
                                <div className={styles.ingredientText}>
                                    <strong>Global Icons</strong>
                                    <p>Featuring internationally celebrated whiskies, wines, and premium spirits.</p>
                                </div>
                            </div>

                            <div className={styles.ingredientItem}>
                                <div className={styles.ingredientText}>
                                    <strong>Timeless Indulgence</strong>
                                    <p>Bottles designed to elevate special moments and memorable celebrations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Collection;