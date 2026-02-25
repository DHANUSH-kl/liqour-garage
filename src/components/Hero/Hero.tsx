'use client';

import { usePreloader } from '../Preloader/PreloaderContext';
import styles from './Hero.module.css';

export default function Hero() {
    const { isLoading } = usePreloader();

    return (
        <section className={`${styles.hero} ${!isLoading ? styles.visible : ''}`}>
            <div className={styles.videoWrapper}>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={styles.video}
                >
                    <source src="/HERO-section-vid.mp4" type="video/mp4" />
                </video>
            </div>
            <div className={styles.overlay} />
            <div className={styles.container}>
                <div className={styles.centeredContent}>
                    <p className={`${styles.revealItem} text-label`} style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)' }}>
                        MYSORE&apos;S FINEST SPIRITS
                    </p>
                    <h1 className={`${styles.revealItem} text-hero`} style={{ transitionDelay: '0.2s' }}>
                        LIQUOR<br />GARAGE
                    </h1>
                    <p className={`${styles.revealItem} ${styles.tagline} serif-font`} style={{ transitionDelay: '0.4s' }}>
                        Where connoisseurs find their pour.
                    </p>
                    <div className={styles.revealItem} style={{ transitionDelay: '0.6s' }}>
                        <button className={styles.cta}>
                            EXPLORE THE COLLECTION
                        </button>
                    </div>
                </div>
            </div>

            <div className={`${styles.revealItem} ${styles.bottomLeft}`} style={{ transitionDelay: '0.8s' }}>
                <div className={styles.verticalLine} />
            </div>

            <div className={`${styles.revealItem} ${styles.bottomRight}`} style={{ transitionDelay: '0.8s' }}>
                <p className="text-micro" style={{ letterSpacing: '0.1em', color: 'var(--color-text-muted)' }}>
                    MON–SUN · 10AM – 10PM
                </p>
            </div>

            <div className={styles.scrollIndicator}>
                <div className={styles.scrollLine} />
            </div>
        </section>
    );
}
