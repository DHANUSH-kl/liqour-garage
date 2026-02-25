import styles from './About.module.css';
import ScrollReveal from '@/components/ScrollReveal/ScrollReveal';
import Footer from '@/components/Footer/Footer';

export default function AboutPage() {
    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <div className={styles.container}>
                    <ScrollReveal direction="up">
                        <h1 className="text-hero" style={{ fontSize: '96px' }}>
                            WE KNOW OUR SPIRITS
                        </h1>
                    </ScrollReveal>
                </div>
            </header>

            <section className={styles.section}>
                <div className={styles.container}>
                    <div className={styles.editorialRow}>
                        <div className={styles.imageCol}>
                            <ScrollReveal direction="left">
                                <div className={styles.imageWrapper}>
                                    <img src="https://images.unsplash.com/photo-1516535794938-6063878f08cc?auto=format&fit=crop&q=80&w=1200" alt="About 1" className="cinematic-img" />
                                </div>
                            </ScrollReveal>
                        </div>
                        <div className={styles.textCol}>
                            <ScrollReveal direction="up" delay={0.2}>
                                <blockquote className="serif-font" style={{ fontSize: '32px', color: 'var(--color-gold)', marginBottom: 'var(--space-4)' }}>
                                    &quot;Tasting is an art form, and curation is its gallery.&quot;
                                </blockquote>
                                <p className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                                    Liquor Garage was founded on the principle that finding the right spirit
                                    should be an experience in itself. Located in the heart of Mysore, our
                                    boutique store offers more than just labels; we offer a journey through
                                    the world&apos;s most storied distilleries.
                                </p>
                                <p className="text-body" style={{ color: 'var(--color-text-muted)', marginTop: 'var(--space-2)' }}>
                                    Our team spends months identifying unique profiles that represent the
                                    pinnacle of their category. Whether it&apos;s a peat-heavy Islay malt or a
                                    velvety French cognac, our collection is curated for the true connoisseur.
                                </p>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            <div className={styles.valuesStrip}>
                <div className={styles.container}>
                    <div className={styles.values}>
                        <span>RARE</span>
                        <span className={styles.dot}>·</span>
                        <span>CURATED</span>
                        <span className={styles.dot}>·</span>
                        <span>GENUINE</span>
                        <span className={styles.dot}>·</span>
                        <span>BOLD</span>
                    </div>
                </div>
            </div>

            <section className={styles.section} style={{ background: 'var(--color-surface)' }}>
                <div className={styles.container}>
                    <div className={styles.editorialRow} style={{ flexDirection: 'row-reverse' }}>
                        <div className={styles.imageCol}>
                            <ScrollReveal direction="right">
                                <div className={styles.imageWrapper}>
                                    <img src="https://images.unsplash.com/photo-1569529465841-dfecdab7503b?auto=format&fit=crop&q=80&w=1200" alt="About 2" className="cinematic-img" />
                                </div>
                            </ScrollReveal>
                        </div>
                        <div className={styles.textCol} style={{ paddingLeft: 0, paddingRight: 'var(--space-8)' }}>
                            <ScrollReveal direction="up" delay={0.2}>
                                <h3 className="serif-font" style={{ fontSize: '48px', marginBottom: 'var(--space-4)' }}>
                                    The Mysore Legacy
                                </h3>
                                <p className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                                    Over the years, we have become a landmark for those who appreciate
                                    the finer things in life. Our store interior reflects our philosophy:
                                    minimalist, luxurious, and focused entirely on the bottles that grace
                                    our shelves.
                                </p>
                                <p className="text-body" style={{ color: 'var(--color-text-muted)', marginTop: 'var(--space-2)' }}>
                                    We invite you to visit us and engage with our knowledgeable staff who
                                    can guide you through our latest arrivals and rare finds.
                                </p>
                            </ScrollReveal>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
