import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <h2 className={styles.wordmark}>LIQUOR GARAGE</h2>
                        <p className="text-micro" style={{ color: 'var(--color-text-muted)', marginTop: '8px' }}>
                            ESTABLISHED 2024 · MYSORE
                        </p>
                    </div>

                    <div className={styles.nav}>
                        <Link href="/collection" className={styles.link}>THE COLLECTION</Link>
                        <Link href="/about" className={styles.link}>ABOUT</Link>
                        <Link href="/visit" className={styles.link}>VISIT</Link>
                    </div>

                    <div className={styles.socials}>
                        <a href="#" className={styles.link}>INSTAGRAM</a>
                        <a href="#" className={styles.link}>FACEBOOK</a>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className="text-micro" style={{ color: 'var(--color-text-muted)' }}>
                        © 2025 LIQUOR GARAGE, MYSORE. ALL RIGHTS RESERVED.
                    </p>
                    <p className="text-micro" style={{ color: 'var(--color-text-muted)', letterSpacing: '0.2em' }}>
                        CRAFTED FOR CONNOISSEURS
                    </p>
                </div>
            </div>
        </footer>
    );
}
