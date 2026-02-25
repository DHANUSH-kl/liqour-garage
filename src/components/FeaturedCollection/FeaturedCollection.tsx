'use client';

import { useRef, useState, useEffect } from 'react';
import styles from './FeaturedCollection.module.css';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const PRODUCTS = [
    { id: 1, name: 'Macallan 18', category: 'WHISKY', origin: 'SCOTLAND', image: 'https://images.unsplash.com/photo-1527281473222-793895bf660b?auto=format&fit=crop&q=80&w=800' },
    { id: 2, name: 'Hennessy X.O', category: 'COGNAC', origin: 'FRANCE', image: 'https://images.unsplash.com/photo-1595977437232-9a0426ebfe4c?auto=format&fit=crop&q=80&w=800' },
    { id: 3, name: 'Mount Gay 1703', category: 'RUM', origin: 'BARBADOS', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800' },
    { id: 4, name: 'Hendrick\'s Gin', category: 'GIN', origin: 'SCOTLAND', image: 'https://images.unsplash.com/photo-1600728613961-d602167af44d?auto=format&fit=crop&q=80&w=800' },
    { id: 5, name: 'Patrón Silver', category: 'TEQUILA', origin: 'MEXICO', image: 'https://images.unsplash.com/photo-1516535794938-6063878f08cc?auto=format&fit=crop&q=80&w=800' },
    { id: 6, name: 'Penfolds Grange', category: 'WINE', origin: 'AUSTRALIA', image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800' },
];

export default function FeaturedCollection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
        setScrollLeft(scrollRef.current?.scrollLeft || 0);
    };

    const handleMouseUp = () => setIsDragging(false);
    const handleMouseLeave = () => setIsDragging(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2;
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 344; // Card width (320) + gap (24)
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className={styles.featured}>
            <div className={styles.container}>
                <ScrollReveal direction="up">
                    <p className="text-label" style={{ color: 'var(--color-gold)', marginBottom: 'var(--space-4)' }}>
                        THE COLLECTION
                    </p>
                </ScrollReveal>

                <div
                    className={`${styles.scrollArea} ${isDragging ? styles.dragging : ''}`}
                    ref={scrollRef}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                >
                    {PRODUCTS.map((product, index) => (
                        <div key={product.id} className={styles.card}>
                            <ScrollReveal direction="up" delay={index * 0.1}>
                                <div className={styles.imageWrapper}>
                                    <img src={product.image} alt={product.name} className="cinematic-img" />
                                </div>
                                <div className={styles.details}>
                                    <p className="text-label" style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-1)' }}>
                                        {product.category}
                                    </p>
                                    <h3 className="serif-font" style={{ fontSize: '28px', color: 'var(--color-gold)' }}>
                                        {product.name}
                                    </h3>
                                    <p className="text-micro" style={{ color: 'var(--color-text-muted)', letterSpacing: '0.15em', marginTop: '4px' }}>
                                        {product.origin}
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>
                    ))}
                </div>

                <div className={styles.bottomControls}>
                    <div className={styles.dragLabel}>
                        <span>DRAG TO EXPLORE</span>
                    </div>
                    <div className={styles.navButtons}>
                        <button onClick={() => scroll('left')} className={styles.navBtn} aria-label="Scroll left">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M19 12H5M5 12L12 19M5 12L12 5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button onClick={() => scroll('right')} className={styles.navBtn} aria-label="Scroll right">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
