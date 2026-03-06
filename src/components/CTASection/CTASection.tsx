"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Star } from "lucide-react";
import styles from "./CTASection.module.css";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const CTASection = () => {
    const ctaRef = useRef<HTMLElement>(null);

    useGSAP(
        () => {
            const elements = gsap.utils.toArray(`.animateUpCta`);

            elements.forEach((el: any, i) => {
                gsap.from(el, {
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    delay: i * 0.15,
                });
            });
        },
        { scope: ctaRef }
    );

    return (
        <section className={styles.section} ref={ctaRef}>
            <div className={styles.container}>
                <div className={styles.contentWrapper}>
                    <div className={`${styles.badge} animateUpCta`}>
                        <Star size={14} className={styles.starIcon} />
                        Premium Experience
                    </div>

                    <h2 className={`${styles.title} animateUpCta`}>
                        Looking for a Rare Bottle?
                    </h2>

                    <p className={`${styles.description} animateUpCta`}>
                        Whether you're searching for a limited edition whiskey, a premium gift, or a special bottle for your personal collection, our team is here to help. Speak with our experts and discover premium spirits that match your taste and occasion.
                    </p>

                    <div className={`${styles.buttonGroup} animateUpCta`}>
                        <button className={`${styles.btn} ${styles.btnPrimary}`}>
                            Call Now
                        </button>
                        <button className={`${styles.btn} ${styles.btnSecondary}`}>
                            Visit Liquor Garage
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
