'use client'

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Crown, BadgeCheck, Star, Sparkles, Users, Gift } from "lucide-react";
import styles from "./OurDifference.module.css";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const cardsData = [
    {
        id: 1,
        title: "100% Authentic Spirits",
        description:
            "Every bottle at Liquor Garage is sourced from trusted distributors and verified suppliers, ensuring complete authenticity and uncompromised quality.",
        image: "https://images.unsplash.com/photo-1582222194639-66de1d061803?q=80&w=800&auto=format&fit=crop",
        Icon: BadgeCheck,
    },
    {
        id: 2,
        title: "Curated Premium Selection",
        description:
            "Our collection is carefully selected to showcase some of the finest spirits from renowned distilleries across the world.",
        image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=800&auto=format&fit=crop",
        Icon: Star,
    },
    {
        id: 3,
        title: "Rare & Limited Bottles",
        description:
            "Discover exclusive releases, collector's editions, and rare bottles that are difficult to find elsewhere.",
        image: "https://images.unsplash.com/photo-1614313662998-cdbd19d80d28?q=80&w=800&auto=format&fit=crop",
        Icon: Sparkles,
    },
    {
        id: 4,
        title: "Expert Recommendations",
        description:
            "Our knowledgeable team is always ready to help you choose the perfect bottle based on taste, occasion, or collection goals.",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
        Icon: Users,
    },
    {
        id: 5,
        title: "Perfect Gift Options",
        description:
            "From celebrations to corporate gifting, our premium spirits make unforgettable gifts for every special occasion.",
        image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800&auto=format&fit=crop",
        Icon: Gift,
    },
];

const OurDifference = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const carouselWrapperRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            // 1. Text reveal animations
            const texts = gsap.utils.toArray(`.revealTextDiff`);

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

            // 2. Horizontal Scroll for Carousel
            if (carouselRef.current && carouselWrapperRef.current) {
                let mm = gsap.matchMedia();

                mm.add("(min-width: 769px)", () => {
                    const totalWidth = carouselRef.current!.scrollWidth - window.innerWidth;

                    gsap.to(carouselRef.current, {
                        x: -totalWidth,
                        ease: "none",
                        scrollTrigger: {
                            trigger: carouselWrapperRef.current,
                            start: "top top",
                            end: () => `+=${totalWidth * 3}`,
                            pin: true,
                            scrub: 1,
                            anticipatePin: 1,
                            invalidateOnRefresh: true,
                        },
                    });
                });

                mm.add("(max-width: 768px)", () => {
                    const totalWidth = carouselRef.current!.scrollWidth - window.innerWidth;

                    gsap.to(carouselRef.current, {
                        x: -totalWidth,
                        ease: "none",
                        scrollTrigger: {
                            trigger: carouselWrapperRef.current,
                            start: "top top",
                            end: () => `+=${totalWidth * 2}`,
                            pin: true,
                            scrub: 1,
                            anticipatePin: 1,
                            invalidateOnRefresh: true,
                        },
                    });
                });

                return () => mm.revert();
            }
        },
        { scope: containerRef }
    );

    return (
        <section className={styles.section} ref={containerRef}>
            <div className={styles.headerContent} ref={textRef}>
                <div className={`${styles.badge} revealTextDiff`}>
                    <Crown className={styles.crownIcon} size={16} />
                    <span>Our Difference</span>
                </div>

                <h2 className={`${styles.title} revealTextDiff`}>Why Liquor Garage</h2>

                <p className={`${styles.description} revealTextDiff`}>
                    Experience excellence in every bottle. Discover what sets us apart in
                    the premium spirits industry.
                </p>

                <div className="revealTextDiff">
                    <button className={styles.ctaButton}>Learn More</button>
                </div>
            </div>

            <div className={styles.carouselWrapper} ref={carouselWrapperRef}>
                <div className={styles.carousel} ref={carouselRef}>
                    {cardsData.map((card) => (
                        <div key={card.id} className={styles.card}>
                            <div className={styles.cardImageWrapper}>
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className={styles.cardImage}
                                    sizes="(max-width: 768px) 80vw, 400px"
                                />
                                <div className={styles.overlay}></div>
                            </div>

                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{card.title}</h3>
                                <p className={styles.cardDescription}>{card.description}</p>
                                <div className={styles.iconCircle}>
                                    <card.Icon size={20} className={styles.cardIcon} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurDifference;
