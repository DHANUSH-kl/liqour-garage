"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Discover.module.css";

// Sample liquor data using the existing assets
const liquors = [
    { id: 1, name: "The Highland Reserve", category: "Whiskey", image: "/lg1.jpg" },
    { id: 2, name: "Botanical Classic", category: "Gin", image: "/lg2.jpg" },
    { id: 3, name: "Double IPA Draft", category: "Beer", image: "/lg3.jpg" },
    { id: 4, name: "Caribbean Dark", category: "Rum", image: "/lg4.jpg" },
    { id: 5, name: "Aged Single Malt", category: "Whiskey", image: "/lg5.jpg" },
    { id: 6, name: "Pink Floral Infusion", category: "Gin", image: "/lg6.jpg" },
    { id: 7, name: "Stout Masterpiece", category: "Beer", image: "/lg7.jpg" },
    { id: 8, name: "Spiced Gold", category: "Rum", image: "/lg8.jpg" },
    { id: 9, name: "Oak Barrel Blend", category: "Whiskey", image: "/lg9.jpg" },
    { id: 10, name: "London Dry Elegance", category: "Gin", image: "/lg10.jpg" },
    { id: 11, name: "Craft Pilsner", category: "Beer", image: "/lg11.jpg" },
    { id: 12, name: "Navy Strength Reserve", category: "Rum", image: "/lg12.jpg" },
];

const categories = ["All", "Whiskey", "Gin", "Beer", "Rum"];

export default function DiscoverPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredLiquors = activeCategory === "All"
        ? liquors
        : liquors.filter(item => item.category === activeCategory);

    return (
        <main className={styles.page}>
            <section className={styles.heroSection}>
                <div className={styles.container}>
                    <h1 className={styles.title}>The Collection</h1>
                    <p className={styles.subtitle}>
                        Explore our meticulously curated selection of world-class spirits.
                    </p>

                    <div className={styles.filterTabs}>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`${styles.tab} ${activeCategory === category ? styles.activeTab : ""}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.gallerySection}>
                <div className={styles.container}>
                    <motion.div layout className={styles.masonryGrid}>
                        <AnimatePresence>
                            {filteredLiquors.map((item) => (
                                <motion.div
                                    layout
                                    key={item.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className={styles.card}
                                >
                                    <div className={styles.imageWrapper}>
                                        <img src={item.image} alt={item.name} className={styles.image} loading="lazy" />
                                        <div className={styles.overlay}>
                                            <span className={styles.viewText}>View Details</span>
                                        </div>
                                    </div>
                                    <div className={styles.cardInfo}>
                                        <span className={styles.categoryBadge}>{item.category}</span>
                                        <h3 className={styles.itemName}>{item.name}</h3>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredLiquors.length === 0 && (
                        <div className={styles.emptyState}>
                            <p>No items found in this category.</p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
