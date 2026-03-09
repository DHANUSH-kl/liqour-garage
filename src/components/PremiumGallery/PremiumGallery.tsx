"use client";

import React, { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import styles from "./PremiumGallery.module.css";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// Local images directly from public directory - exactly 4 to avoid duplication
const images = [
    { id: 1, url: '/lg1-.jpg' },
    { id: 2, url: '/lg2-.jpg' },
    { id: 3, url: '/lg3-.jpg' },
    { id: 4, url: '/lg4-.jpg' },
];

const PremiumGallery = () => {
    const containerRef = useRef<HTMLElement>(null);
    const column1Ref = useRef<HTMLDivElement>(null);
    const column2Ref = useRef<HTMLDivElement>(null);
    const column3Ref = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            let mm = gsap.matchMedia();

            mm.add("(min-width: 769px)", () => {
                // Reverse Parallax Effect for Desktop
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1, // Smooth scrubbing
                    },
                });

                // Outer columns move slower/upwards
                tl.to(column1Ref.current, { y: "-15%", ease: "none" }, 0);
                tl.to(column3Ref.current, { y: "-15%", ease: "none" }, 0);

                // Center column moves faster/downwards, creating depth
                tl.to(column2Ref.current, { y: "15%", ease: "none" }, 0);
            });

            mm.add("(max-width: 768px)", () => {
                // Sequential fade-up for mobile
                const items = gsap.utils.toArray(`.${styles.galleryItem}`);
                items.forEach((item: any, i) => {
                    gsap.from(item, {
                        scrollTrigger: {
                            trigger: item,
                            start: "top 85%",
                        },
                        y: 30,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power2.out",
                    });
                });
            });

            return () => mm.revert();
        },
        { scope: containerRef }
    );

    return (
        <section className={styles.section} ref={containerRef} id="gallery">
            <div className={styles.header}>
                <h2 className={styles.title}>The Art of Pouring</h2>
                <p className={styles.subtitle}>Discover the essence of our curated experiences.</p>
            </div>

            <div className={styles.galleryGrid}>
                {/* Column 1 */}
                <div className={`${styles.column} ${styles.colOuter}`} ref={column1Ref}>
                    {images.slice(0, 1).map((img) => (
                        <div key={img.id} className={styles.galleryItem}>
                            <img src={img.url} alt="Premium Experience" className={styles.image} loading="lazy" />
                            <div className={styles.overlay}></div>
                        </div>
                    ))}
                </div>

                {/* Column 2 (Center) */}
                <div className={`${styles.column} ${styles.colCenter}`} ref={column2Ref}>
                    {images.slice(1, 3).map((img) => (
                        <div key={img.id} className={styles.galleryItem}>
                            <img src={img.url} alt="Premium Experience" className={styles.image} loading="lazy" />
                            <div className={styles.overlay}></div>
                        </div>
                    ))}
                </div>

                {/* Column 3 */}
                <div className={`${styles.column} ${styles.colOuter}`} ref={column3Ref}>
                    {images.slice(3, 4).map((img) => (
                        <div key={img.id} className={styles.galleryItem}>
                            <img src={img.url} alt="Premium Experience" className={styles.image} loading="lazy" />
                            <div className={styles.overlay}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PremiumGallery;
