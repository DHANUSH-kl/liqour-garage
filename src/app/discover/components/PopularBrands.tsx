"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { popularBrands } from "@/data/discoverData";
import styles from "./PopularBrands.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function PopularBrands() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;
        const logos = sectionRef.current.querySelectorAll(`.${styles.brandCard}`);

        gsap.fromTo(
            logos,
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            }
        );
    }, []);

    return (
        <section className={styles.section} ref={sectionRef}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Popular Brands You May Discover</h2>
                    <p className={styles.subtitle}>
                        A glimpse into the globally recognized houses available in our extensive collection.
                    </p>
                </div>

                <div className={styles.grid}>
                    {popularBrands.map((brand) => (
                        <div key={brand.id} className={styles.brandCard}>
                            {/* Premium typography fallback for missing logos */}
                            <span className={styles.brandName}>{brand.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
