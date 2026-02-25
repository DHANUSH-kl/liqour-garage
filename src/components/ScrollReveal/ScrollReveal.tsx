'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import styles from './ScrollReveal.module.css';

interface ScrollRevealProps {
    children: ReactNode;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
    className?: string;
}

export default function ScrollReveal({
    children,
    delay = 0,
    direction = 'up',
    className = ''
}: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.15 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const getDirectionClass = () => {
        switch (direction) {
            case 'up': return styles.revealUp;
            case 'down': return styles.revealDown;
            case 'left': return styles.revealLeft;
            case 'right': return styles.revealRight;
            default: return styles.revealUp;
        }
    };

    return (
        <div
            ref={ref}
            className={`${styles.reveal} ${isVisible ? styles.visible : ''} ${getDirectionClass()} ${className}`}
            style={{ transitionDelay: `${delay}s` }}
        >
            {children}
        </div>
    );
}
