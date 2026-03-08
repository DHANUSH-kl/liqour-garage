"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import styles from "./OurImpact.module.css";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const OurImpact = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            // 1. Text Reveal Animation
            const texts = gsap.utils.toArray(`.revealText`);
            texts.forEach((text: any, i) => {
                gsap.from(text, {
                    scrollTrigger: {
                        trigger: text,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    delay: i * 0.1,
                });
            });

            // 2. Card Animation (Entrance)
            gsap.from(`.${styles.card}`, {
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
                y: 60,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                stagger: 0.2,
            });

            // 3. Card Parallax (Move slightly above while scrolling)
            gsap.to(`.${styles.card}`, {
                scrollTrigger: {
                    trigger: cardsRef.current,
                    start: "top center",
                    end: "bottom top",
                    scrub: 1,
                },
                y: -40,
                ease: "none",
            });

            // 4. Number Counter Animation
            const numbers = gsap.utils.toArray(`.impactNumber`);
            numbers.forEach((numText: any) => {
                const targetNumber = parseInt(numText.getAttribute("data-target") || "0");

                gsap.to(numText, {
                    scrollTrigger: {
                        trigger: cardsRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                    innerText: targetNumber,
                    duration: 2,
                    snap: { innerText: 1 },
                    ease: "power2.out",
                    onUpdate: function () {
                        // Re-append the '+' sign on update
                        numText.innerHTML = Math.round(Number(this.targets()[0].innerText)) + "+";
                    },
                });
            });
        },
        { scope: sectionRef }
    );

    return (
        <section className={styles.section} ref={sectionRef} id="impact">
            <div className={styles.container}>
                {/* Top Header Section */}
                <div className={styles.header} ref={textRef}>
                    <div className={`${styles.badge} revealText`}>
                        Our Impact
                    </div>
                    <h2 className={`${styles.title} revealText`}>
                        Trusted by spirits enthusiasts and collectors worldwide. Our commitment to quality is reflected in every bottle we offer.
                    </h2>
                </div>

                {/* Stats Cards Section */}
                <div className={styles.cardsContainer} ref={cardsRef}>
                    <div className={styles.card}>
                        <div className={styles.cardNumber}>
                            <span className="impactNumber" data-target="1200">0</span>
                        </div>
                        <div className={styles.cardDivider}></div>
                        <p className={styles.cardText}>
                            Premium bottles in our carefully curated collection
                        </p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardNumber}>
                            <span className="impactNumber" data-target="50">0</span>
                        </div>
                        <div className={styles.cardDivider}></div>
                        <p className={styles.cardText}>
                            Countries represented from our global sourcing network
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurImpact;
