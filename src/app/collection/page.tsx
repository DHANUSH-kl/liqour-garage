'use client';

import { useState } from 'react';
import styles from './Collection.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import Footer from '@/components/Footer/Footer';

const CATEGORIES = ['ALL', 'WHISKY', 'RUM', 'COGNAC', 'GIN', 'WINE', 'TEQUILA'];

const PRODUCTS = [
    { id: 1, name: 'Macallan 18', category: 'WHISKY', origin: 'SCOTLAND', price: '₹42,500', image: 'https://images.unsplash.com/photo-1527281473222-793895bf660b?auto=format&fit=crop&q=80&w=800' },
    { id: 2, name: 'Hennessy X.O', category: 'COGNAC', origin: 'FRANCE', price: '₹28,900', image: 'https://images.unsplash.com/photo-1595977437232-9a0426ebfe4c?auto=format&fit=crop&q=80&w=800' },
    { id: 3, name: 'Mount Gay 1703', category: 'RUM', origin: 'BARBADOS', price: '₹18,500', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800' },
    { id: 4, name: 'Hendrick\'s Gin', category: 'GIN', origin: 'SCOTLAND', price: '₹7,800', image: 'https://images.unsplash.com/photo-1600728613961-d602167af44d?auto=format&fit=crop&q=80&w=800' },
    { id: 5, name: 'Patrón Silver', category: 'TEQUILA', origin: 'MEXICO', price: '₹12,400', image: 'https://images.unsplash.com/photo-1516535794938-6063878f08cc?auto=format&fit=crop&q=80&w=800' },
    { id: 6, name: 'Penfolds Grange', category: 'WINE', origin: 'AUSTRALIA', price: '₹65,000', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800' },
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
        <div className={styles.page}>
            <header className={styles.header}>
                <div className={styles.container}>
                    <ScrollReveal direction="up">
                        <h1 className="text-hero" style={{ fontSize: '96px', marginBottom: 'var(--space-8)' }}>
                            THE COLLECTION
                        </h1>
                    </ScrollReveal>

                    <nav className={styles.filterTabs}>
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                className={`${styles.tab} ${activeTab === cat ? styles.active : ''}`}
                                onClick={() => setActiveTab(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </nav>
                </div>
            </header>

            <main className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        {filteredProducts.map((product, index) => (
                            <ScrollReveal key={product.id} direction="up" delay={(index % 3) * 0.1}>
                                <div className={styles.card}>
                                    <div className={styles.imageWrapper}>
                                        <img src={product.image} alt={product.name} className="cinematic-img" />
                                    </div>
                                    <div className={styles.details}>
                                        <p className="text-label" style={{ color: 'var(--color-text-muted)', marginBottom: '4px' }}>
                                            {product.category}
                                        </p>
                                        <h3 className="serif-font" style={{ fontSize: '28px', color: 'var(--color-gold)' }}>
                                            {product.name}
                                        </h3>
                                        <div className={styles.meta}>
                                            <span className="text-micro" style={{ color: 'var(--color-text-muted)', letterSpacing: '0.15em' }}>
                                                {product.origin}
                                            </span>
                                            <span className="text-body" style={{ color: 'var(--color-gold)', fontSize: '15px', fontWeight: 500 }}>
                                                {product.price}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
