// Navigation.jsx
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}>
                <div className={styles.container}>
                    <Link href="/" className={styles.logo}>
                        LIQUOR GARAGE
                    </Link>

                    {/* Desktop Navigation */}
                    <div className={styles.desktopLinks}>
                        <Link 
                            href="/collection" 
                            className={`${styles.link} ${pathname === '/collection' ? styles.active : ''}`}
                        >
                            THE COLLECTION
                        </Link>
                        <Link 
                            href="/about" 
                            className={`${styles.link} ${pathname === '/about' ? styles.active : ''}`}
                        >
                            ABOUT
                        </Link>
                        <Link 
                            href="/visit" 
                            className={`${styles.link} ${pathname === '/visit' ? styles.active : ''}`}
                        >
                            VISIT
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.open : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation Overlay */}
            <div className={`${styles.mobileOverlay} ${isMobileMenuOpen ? styles.open : ''}`}>
                <div className={styles.mobileLinks}>
                    <Link 
                        href="/collection" 
                        className={`${styles.mobileLink} ${pathname === '/collection' ? styles.active : ''}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        THE COLLECTION
                    </Link>
                    <Link 
                        href="/about" 
                        className={`${styles.mobileLink} ${pathname === '/about' ? styles.active : ''}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        ABOUT
                    </Link>
                    <Link 
                        href="/visit" 
                        className={`${styles.mobileLink} ${pathname === '/visit' ? styles.active : ''}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        VISIT
                    </Link>
                </div>
            </div>
        </>
    );
}