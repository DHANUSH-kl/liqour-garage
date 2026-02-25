import styles from './Marquee.module.css';

export default function Marquee() {
    const items = [
        'WHISKY', 'COGNAC', 'RUM', 'GIN', 'WINE', 'TEQUILA',
        'CRAFT BEER', 'LIQUEUR', 'AGED SPIRITS', 'IMPORTED LABELS'
    ];

    return (
        <div className={styles.marquee}>
            <div className={styles.track}>
                {[...Array(4)].map((_, i) => (
                    <div key={i} className={styles.group}>
                        {items.map((item, index) => (
                            <span key={index} className={styles.item}>
                                {item}
                                <span className={styles.dot}>·</span>
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
