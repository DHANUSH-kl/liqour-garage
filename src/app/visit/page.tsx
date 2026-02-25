import styles from './Visit.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import Footer from '@/components/Footer/Footer';

export default function VisitPage() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className={styles.container}>
                    <ScrollReveal direction="up">
                        <h1 className="text-hero" style={{ fontSize: '80px' }}>
                            FIND US IN MYSORE
                        </h1>
                    </ScrollReveal>
                </div>
            </header>

            <section className={styles.infoSection}>
                <div className={styles.container}>
                    <div className={styles.grid}>
                        <div className={styles.infoCol}>
                            <ScrollReveal direction="up">
                                <div className={styles.infoItem}>
                                    <p className="text-label" style={{ color: 'var(--color-gold)' }}>ADDRESS</p>
                                    <p className="text-body" style={{ marginTop: '8px' }}>
                                        No. 42, Vani Vilas Road, Lakshmipuram,<br />
                                        Mysore, Karnataka 570004
                                    </p>
                                </div>
                                <div className={styles.infoItem} style={{ marginTop: 'var(--space-8)' }}>
                                    <p className="text-label" style={{ color: 'var(--color-gold)' }}>HOURS</p>
                                    <p className="text-body" style={{ marginTop: '8px' }}>
                                        MONDAY – SUNDAY<br />
                                        10:00 AM – 10:00 PM
                                    </p>
                                </div>
                                <div className={styles.infoItem} style={{ marginTop: 'var(--space-8)' }}>
                                    <p className="text-label" style={{ color: 'var(--color-gold)' }}>CONTACT</p>
                                    <p className="text-body" style={{ marginTop: '8px' }}>
                                        +91 821 2345 678<br />
                                        info@liquorgarage.com
                                    </p>
                                </div>
                            </ScrollReveal>
                        </div>

                        <div className={styles.mapCol}>
                            <ScrollReveal direction="up" delay={0.2}>
                                <div className={styles.mapPlaceholder}>
                                    {/* Placeholder for Google Map */}
                                    <div className={styles.mapOverlay}>
                                        <p className="text-label">GOOGLE MAPS EMBED</p>
                                    </div>
                                    <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" alt="Map View" />
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.photoSection}>
                <div className={styles.imageWrapper}>
                    <img src="https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?auto=format&fit=crop&q=80&w=1600" alt="Storefront" className="cinematic-img" />
                </div>
            </section>

            <section className={styles.contactSection}>
                <div className={styles.container}>
                    <div className={styles.formGrid}>
                        <div className={styles.formTitle}>
                            <ScrollReveal direction="up">
                                <h2 className="serif-font" style={{ fontSize: '48px' }}>Send us a message</h2>
                                <p className="text-body" style={{ color: 'var(--color-text-muted)', marginTop: 'var(--space-2)' }}>
                                    Inquiries about rare labels or private events.
                                </p>
                            </ScrollReveal>
                        </div>

                        <form className={styles.form}>
                            <ScrollReveal direction="up" delay={0.1}>
                                <div className={styles.inputGroup}>
                                    <input type="text" placeholder="NAME" className={styles.input} />
                                </div>
                                <div className={styles.inputGroup}>
                                    <input type="email" placeholder="EMAIL" className={styles.input} />
                                </div>
                                <div className={styles.inputGroup}>
                                    <textarea placeholder="MESSAGE" className={styles.input} rows={4} />
                                </div>
                                <button type="button" className={styles.submit}>SEND MESSAGE</button>
                            </ScrollReveal>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
