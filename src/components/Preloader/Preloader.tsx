'use client';

import { useEffect, useState } from 'react';
import { usePreloader } from './PreloaderContext';
import styles from './Preloader.module.css';

export default function Preloader() {
    const { finishLoading } = usePreloader();
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Artificial delay for cinematic effect
        const timer = setTimeout(() => {
            setIsExiting(true);
            // Wait for exit animation to complete before finishing
            setTimeout(() => {
                finishLoading();
            }, 800);
        }, 2500);

        return () => clearTimeout(timer);
    }, [finishLoading]);

    return (
        <div className={`${styles.overlay} ${isExiting ? styles.exit : ''}`}>
            <div className={styles.content}>
                <div className={styles.textWrapper}>
                    <h1 className={styles.brandName}>LIQUOR GARAGE</h1>
                </div>
                <div className={styles.progressBar}>
                    <div className={styles.progressFill} />
                </div>
            </div>
        </div>
    );
}
