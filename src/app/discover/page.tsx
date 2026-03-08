"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Discover.module.css";

// Sample liquor data using category-appropriate images
const liquors = [
    { id: 1, name: "The Highland Reserve", category: "Whiskey", image: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?q=80&w=800&auto=format&fit=crop" },
    { id: 2, name: "Botanical Classic", category: "Gin", image: "https://images.unsplash.com/photo-1609342475528-796791e813a3?q=80&w=800&auto=format&fit=crop" },
    { id: 3, name: "Double IPA Draft", category: "Beer", image: "https://images.unsplash.com/photo-1580828369136-15db55b7ecde?q=80&w=800&auto=format&fit=crop" },
    { id: 4, name: "Caribbean Dark", category: "Rum", image: "https://images.unsplash.com/photo-1614313662998-cdbd19d80d28?q=80&w=800&auto=format&fit=crop" },
    { id: 5, name: "Aged Single Malt", category: "Whiskey", image: "https://images.unsplash.com/photo-1582222194639-66de1d061803?q=80&w=800&auto=format&fit=crop" },
    { id: 6, name: "Pink Floral Infusion", category: "Gin", image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?q=80&w=800&auto=format&fit=crop" },
    { id: 7, name: "Stout Masterpiece", category: "Beer", image: "https://images.unsplash.com/photo-1535958631405-c14d9ddc8fdf?q=80&w=800&auto=format&fit=crop" },
    { id: 8, name: "Spiced Gold", category: "Rum", image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop" },
    { id: 9, name: "Oak Barrel Blend", category: "Whiskey", image: "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=800&auto=format&fit=crop" },
    { id: 10, name: "London Dry Elegance", category: "Gin", image: "https://images.unsplash.com/photo-1563223771-417122a762d1?q=80&w=800&auto=format&fit=crop" },
    { id: 11, name: "Craft Pilsner", category: "Beer", image: "https://images.unsplash.com/photo-1615332579037-3c44b3660b53?q=80&w=800&auto=format&fit=crop" },
    { id: 12, name: "Navy Strength Reserve", category: "Rum", image: "https://images.unsplash.com/photo-1593006437989-1fcb80145c2f?q=80&w=800&auto=format&fit=crop" },
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
