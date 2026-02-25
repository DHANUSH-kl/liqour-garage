import styles from './BrandStatement.module.css';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

export default function BrandStatement() {
    return (
        <section className={styles.brandStatement}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.leftCol}>
                        <ScrollReveal direction="up">
                            <h2 className="text-section">
                                NOT JUST A STORE.<br />
                                AN EDUCATION IN TASTE.
                            </h2>
                        </ScrollReveal>
                    </div>
                    <div className={styles.rightCol}>
                        <ScrollReveal direction="up" delay={0.2}>
                            <div className={styles.content}>
                                <p className="text-body">
                                    At Liquor Garage, we believe that every bottle tells a story of heritage,
                                    craftsmanship, and character. Our curation process is rigorous, ensuring
                                    that only the finest expressions from around the globe make it to our
                                    shelves.
                                </p>
                                <p className="text-body" style={{ marginTop: 'var(--space-2)' }}>
                                    From rare single malts to artisanal small-batch gins, we provide an
                                    unrivaled selection for the discerning palate right here in Mysore.
                                    Step into an environment where luxury meets expertise.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
