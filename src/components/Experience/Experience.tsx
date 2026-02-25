// Experience.jsx
import styles from './Experience.module.css';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const EXPERIENCES = [
    {
        id: 'rare-imports',
        title: 'Rare Imports',
        description: 'Directly sourced labels from global distilleries, bringing exclusive collections to Mysore.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
        )
    },
    {
        id: 'expert-curation',
        title: 'Expert Curation',
        description: 'Every spirit on our shelf is tasted and vetted by our in-house connoisseurs.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
        )
    },
    {
        id: 'personal-recommendations',
        title: 'Personal Recommendations',
        description: 'Tailored advice to help you find the perfect bottle for any occasion or mood.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
        )
    }
];

export default function Experience() {
    return (
        <section className={styles.experience}>
            <div className={styles.container}>
                <ScrollReveal direction="up" delay={0}>
                    <h2 className={styles.title}>
                        THE EXPERIENCE
                    </h2>
                </ScrollReveal>

                <div className={styles.grid}>
                    {EXPERIENCES.map((exp, index) => (
                        <ScrollReveal 
                            key={exp.id} 
                            direction="up" 
                            delay={0.1 + (index * 0.1)}
                        >
                            <div className={styles.panel}>
                                <div className={styles.iconWrapper}>
                                    <div className={styles.icon}>
                                        {exp.icon}
                                    </div>
                                </div>
                                <h3 className={styles.panelTitle}>
                                    {exp.title}
                                </h3>
                                <p className={styles.panelDescription}>
                                    {exp.description}
                                </p>
                                <div className={styles.panelDecoration} />
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}