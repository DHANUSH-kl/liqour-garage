// SignaturePick.jsx
"use client"

import { useState } from 'react';
import styles from './SignaturePick.module.css';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

export default function SignaturePick() {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    return (
        <section className={styles.signature}>
            <div className={styles.container}>
                <div className={styles.layout}>
                    {/* Image Section */}
                    <div className={styles.imageSection}>
                        <ScrollReveal direction="left" delay={0}>
                            <div className={styles.imageWrapper}>
                                {!isImageLoaded && (
                                    <div className={styles.imageSkeleton} />
                                )}
                                <img
                                    src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1200"
                                    alt="Hibiki Harmony Japanese whisky with elegant bottle design"
                                    className={`${styles.image} ${isImageLoaded ? styles.loaded : ''}`}
                                    onLoad={() => setIsImageLoaded(true)}
                                    loading="eager"
                                />
                                <div className={styles.imageOverlay} />
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Content Section */}
                    <div className={styles.contentSection}>
                        <ScrollReveal direction="right" delay={0.2}>
                            <div className={styles.content}>
                                {/* Label */}
                                <span className={styles.label}>
                                    HOUSE FAVOURITE
                                </span>

                                {/* Title */}
                                <h2 className={styles.title}>
                                    HIBIKI
                                    <span className={styles.titleAccent}>HARMONY</span>
                                </h2>

                                {/* Distillery */}
                                <div className={styles.distillery}>
                                    <span className={styles.distilleryName}>SUNTORY DISTILLERY</span>
                                    <span className={styles.distilleryLocation}>OSAKA, JAPAN</span>
                                </div>

                                {/* Description */}
                                <p className={styles.description}>
                                    A luminous symphony of at least 10 malt and grain whiskies, 
                                    meticulously blended from the Yamazaki, Hakushu, and Chita 
                                    distilleries. A profile that is both complex and impeccably 
                                    smooth, aged in five different types of casks for unparalleled 
                                    depth.
                                </p>

                                {/* Footer */}
                                <div className={styles.footer}>
                                    <div className={styles.price}>
                                        <span className={styles.priceLabel}>Reserve now</span>
                                        <span className={styles.priceValue}>₹24,500</span>
                                    </div>
                                    <button className={styles.button}>
                                        <span className={styles.buttonText}>Explore the blend</span>
                                        <span className={styles.buttonIcon}>→</span>
                                    </button>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}