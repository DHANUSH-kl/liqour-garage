"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import styles from "./Membership.module.css";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const Membership = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
                toggleActions: "play none none reverse",
            },
        });

        // Left text animation
        tl.from(`.${styles.badge}`, { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" })
            .from(`.${styles.title}`, { y: 30, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
            .from(`.${styles.description}`, { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
            .from(`.${styles.ctaButton}`, { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.2");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className={styles.section} id="membership">
            <div className={styles.glowEffect}></div>
            <div className={styles.container}>
                {/* Left Side: Copy & CTA */}
                <div className={styles.textContent}>
                    <span className={styles.badge}>Liquor Garage</span>
                    <h2 className={styles.title}>
                        Exclusive<br /><span>Membership</span>
                    </h2>
                    <p className={styles.description}>
                        Elevate your experience. Take the membership and earn exclusive redeemable tokens with every alcohol purchase. Use your tokens to claim premium gifts and special offers.
                    </p>
                    <Link href="tel:7899613040" className={styles.ctaButton}>
                        Get Your Membership
                    </Link>
                </div>

                {/* Right Side: Features */}
                <div className={styles.featuresGrid}>
                    <div className={styles.featureCard}>
                        <div className={styles.iconWrapper}>
                            {/* SVG glass/drink icon */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z" /><path d="M6 12h12" /></svg>
                        </div>
                        <div>
                            <h3 className={styles.featureTitle}>Purchase & Earn</h3>
                            <p className={styles.featureDesc}>Earn tokens automatically with every premium alcohol purchase made at our store.</p>
                        </div>
                    </div>

                    <div className={styles.featureCard}>
                        <div className={styles.iconWrapper}>
                            {/* SVG award/token icon */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" /></svg>
                        </div>
                        <div>
                            <h3 className={styles.featureTitle}>Collect Tokens</h3>
                            <p className={styles.featureDesc}>Watch your balance grow. The more you explore, the more you earn.</p>
                        </div>
                    </div>

                    <div className={styles.featureCard}>
                        <div className={styles.iconWrapper}>
                            {/* SVG gift icon */}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="4" rx="1" /><path d="M12 8v13" /><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" /><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" /></svg>
                        </div>
                        <div>
                            <h3 className={styles.featureTitle}>Redeem Gifts</h3>
                            <p className={styles.featureDesc}>Exchange your tokens for exclusive gifts, rare bottles, and special premium offers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Membership;
