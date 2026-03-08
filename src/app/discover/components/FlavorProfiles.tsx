"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { flavorProfiles } from "@/data/discoverData";
import styles from "./FlavorProfiles.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function FlavorProfiles() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;
        const cards = sectionRef.current.querySelectorAll(`.${styles.card}`);

        gsap.fromTo(
            cards,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                }
            }
        );
    }, []);

    return (
        <section className={styles.section} ref={sectionRef}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Flavor Profiles</h2>
                    <p className={styles.subtitle}>
                        Understand the key tasting notes that define different spirits, helping you find your perfect match.
                    </p>
                </div>

                <div className={styles.grid}>
                    {flavorProfiles.map((profile) => (
                        <div key={profile.id} className={styles.card}>
                            <div className={styles.cardInner}>
                                <h3 className={styles.cardTitle}>{profile.title}</h3>
                                <p className={styles.cardDesc}>{profile.description}</p>
                                <div className={styles.decorativeLine} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
