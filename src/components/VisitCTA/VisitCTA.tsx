import styles from './VisitCTA.module.css';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

export default function VisitCTA() {
    return (
        <section className={styles.visitCta}>
            <div className={styles.container}>
                <ScrollReveal direction="up">
                    <p className="text-label" style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-4)' }}>
                        VISIT US
                    </p>
                    <h2 className="text-hero" style={{ lineHeight: '1', color: 'var(--color-text-primary)' }}>
                        COME IN.<br />STAY AWHILE.
                    </h2>
                    <p className="serif-font" style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginTop: 'var(--space-6)', letterSpacing: '0.05em' }}>
                        No. 42, Vani Vilas Road, Mysore, Karnataka 570004
                    </p>
                    <button className={styles.cta}>
                        GET DIRECTIONS
                    </button>
                </ScrollReveal>
            </div>
        </section>
    );
}
