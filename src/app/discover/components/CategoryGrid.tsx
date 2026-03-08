"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { categories } from "@/data/discoverData";
import styles from "./CategoryGrid.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function CategoryGrid() {
    const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!gridRef.current) return;
        const cards = gridRef.current.querySelectorAll(`.${styles.categoryCard}`);

        gsap.fromTo(
            cards,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 80%",
                }
            }
        );
    }, []);

    const handleExplore = (id: string) => {
        setActiveCategoryId(prev => (prev === id ? null : id));
        // Scroll a bit so the types are in view if needed
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid} ref={gridRef}>
                    {categories.map((category) => (
                        <div key={category.id} className={styles.categoryCard}>
                            <div className={styles.imageWrapper}>
                                <img src={category.image} alt={category.name} className={styles.image} loading="lazy" />
                                <div className={styles.overlay}>
                                    <h2 className={styles.categoryName}>{category.name}</h2>
                                    <p className={styles.categoryDesc}>{category.shortDescription}</p>
                                    <button
                                        className={styles.exploreBtn}
                                        onClick={() => handleExplore(category.id)}
                                    >
                                        {activeCategoryId === category.id ? "Close" : "Explore"}
                                    </button>
                                </div>
                            </div>

                            <AnimatePresence>
                                {activeCategoryId === category.id && category.subTypes && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className={styles.subTypesContainer}
                                    >
                                        <div className={styles.subTypesGrid}>
                                            {category.subTypes.map(sub => (
                                                <div key={sub.id} className={styles.subTypeCard}>
                                                    <h4 className={styles.subTypeTitle}>{sub.title}</h4>
                                                    <p className={styles.subTypeDesc}>{sub.description}</p>
                                                    <div className={styles.subTypeChar}>
                                                        <span className={styles.charLabel}>Profile:</span> {sub.characteristics}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
