'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Collection.module.css';
import Footer from '@/components/Footer/Footer';
import LuxuryNav from '@/components/Navbar/LuxuryNav';

const CATEGORIES = ['ALL', 'WHISKY', 'RUM', 'COGNAC', 'GIN', 'WINE', 'TEQUILA'];

const PRODUCTS = [
    { id: 1, name: 'Macallan 18', category: 'WHISKY', origin: 'SCOTLAND', price: '₹42,500', image: 'https://www.theraremalt.com/cdn/shop/files/macallan-18-year-old-2017-257696.jpg?v=1741969329', tag: 'Rare' },
    { id: 2, name: 'Hennessy X.O', category: 'COGNAC', origin: 'FRANCE', price: '₹28,900', image: 'https://images.unsplash.com/photo-1595977437232-9a0426ebfe4c?auto=format&fit=crop&q=80&w=800', tag: 'Premium' },
    { id: 3, name: 'Mount Gay 1703', category: 'RUM', origin: 'BARBADOS', price: '₹18,500', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800', tag: 'Aged' },
    { id: 4, name: 'Hendrick\'s Gin', category: 'GIN', origin: 'SCOTLAND', price: '₹7,800', image: 'https://images.unsplash.com/photo-1600728613961-d602167af44d?auto=format&fit=crop&q=80&w=800' },
    { id: 5, name: 'Patrón Silver', category: 'TEQUILA', origin: 'MEXICO', price: '₹12,400', image: 'https://images.unsplash.com/photo-1516535794938-6063878f08cc?auto=format&fit=crop&q=80&w=800' },
    { id: 6, name: 'Penfolds Grange', category: 'WINE', origin: 'AUSTRALIA', price: '₹65,000', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800', tag: 'Exclusive' },
    { id: 7, name: 'Glenfiddich 21', category: 'WHISKY', origin: 'SCOTLAND', price: '₹34,000', image: 'https://images.unsplash.com/photo-1582819509237-d5b75f20ff7c?auto=format&fit=crop&q=80&w=800' },
    { id: 8, name: 'Rémy Martin XO', category: 'COGNAC', origin: 'FRANCE', price: '₹31,000', image: 'https://images.unsplash.com/photo-1614313511387-1436a4480ebb?auto=format&fit=crop&q=80&w=800' },
    { id: 9, name: 'Botanist Islay', category: 'GIN', origin: 'SCOTLAND', price: '₹6,500', image: 'https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&q=80&w=800' },
];

export default function CollectionPage() {
    const [activeTab, setActiveTab] = useState('ALL');

    const filteredProducts = activeTab === 'ALL'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === activeTab);

    return (
        <div className={styles.pageWrap}>
            <LuxuryNav />
            <div className={styles.page}>
                {/* Stunning Hero Section */}
                <section className={styles.heroSection}>
                    <div className={styles.heroBg}>
                        <Image src="/hero-bg-v2.png" fill alt="Background" className={styles.bgImage} />
                        <div className={styles.bgOverlay}></div>
                    </div>
                    <div className={styles.heroContent}>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className={styles.title}
                        >
                            THE COLLECTION
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className={styles.subtitle}
                        >
                            A curated selection of the world's finest spirits, hand-picked for the ultimate connoisseur.
                        </motion.p>

                        <motion.nav
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            className={styles.filterTabs}
                        >
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    className={`${styles.tab} ${activeTab === cat ? styles.active : ''}`}
                                    onClick={() => setActiveTab(cat)}
                                >
                                    {cat}
                                </button>
                            ))}
                        </motion.nav>
                    </div>
                </section>

                <main className={styles.main}>
                    <div className={styles.container}>
                        <motion.div layout className={styles.grid}>
                            <AnimatePresence>
                                {filteredProducts.map((product) => (
                                    <motion.div
                                        layout
                                        key={product.id}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className={styles.card}
                                    >
                                        <div className={styles.imageWrapper}>
                                            <img src={product.image} alt={product.name} className={styles.productImg} loading="lazy" />
                                            {product.tag && (
                                                <div className={styles.tag}>{product.tag}</div>
                                            )}
                                            <div className={styles.cardOverlay}>
                                                <span className={styles.viewDetails}>View Details</span>
                                            </div>
                                        </div>
                                        <div className={styles.details}>
                                            <div className={styles.detailsHeader}>
                                                <p className={styles.categoryInfo}>{product.category} &bull; {product.origin}</p>
                                            </div>
                                            <h3 className={styles.productName}>{product.name}</h3>
                                            <div className={styles.meta}>
                                                <span className={styles.price}>{product.price}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>

                        {filteredProducts.length === 0 && (
                            <div className={styles.emptyState}>
                                <p>No selections found for this category at the moment.</p>
                            </div>
                        )}
                    </div>
                </main>

                <Footer />
            </div>
        </div>
    );
}
