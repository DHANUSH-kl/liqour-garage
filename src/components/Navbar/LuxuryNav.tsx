"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./LuxuryNav.module.css";

export default function LuxuryNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navbarRef = useRef<HTMLElement | null>(null);

    /* ---------------- scroll behavior ---------------- */
    useEffect(() => {
        const onScroll = () => {
            if (!navbarRef.current || isMenuOpen) return;

            if (window.scrollY > 50) {
                navbarRef.current.classList.add(styles.navScrolled);
            } else {
                navbarRef.current.classList.remove(styles.navScrolled);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [isMenuOpen]);

    /* ---------------- menu open / close navbar override ---------------- */
    useEffect(() => {
        if (!navbarRef.current) return;

        if (isMenuOpen) {
            navbarRef.current.classList.remove(styles.navScrolled);
            navbarRef.current.classList.add(styles.navOpen);
        } else {
            navbarRef.current.classList.remove(styles.navOpen);
            // Re-trigger scroll check
            if (window.scrollY > 50) {
                navbarRef.current.classList.add(styles.navScrolled);
            }
        }
    }, [isMenuOpen]);

    return (
        <>
            {/* NAVBAR */}
            <nav ref={navbarRef} className={styles.nav}>
                <div className={styles.navContainer}>
                    {/* Logo */}
                    <Link
                        href="#home"
                        className={`${styles.logoOuter} ${isMenuOpen ? styles.logoOuterOpen : ""}`}
                    >
                        <div className={styles.logoInner}>
                            <span className={styles.logoTitle}>LIQUOR</span>
                            <span className={styles.logoSubtitle}>GARAGE</span>
                        </div>
                    </Link>

                    {/* Menu Button */}
                    <button
                        onClick={() => {
                            setIsMenuOpen((v) => !v);
                            document.body.style.overflow = !isMenuOpen ? "hidden" : "";
                        }}
                        className={`${styles.menuBtn} ${isMenuOpen ? styles.menuBtnOpen : ""}`}
                        aria-label="Toggle menu"
                    >
                        <span className={styles.menuText}>
                            {isMenuOpen ? "CLOSE" : "MENU"}
                        </span>

                        <div className={styles.hamburger}>
                            <span
                                className={`${styles.line} ${styles.lineTop} ${isMenuOpen ? styles.lineTopOpen : ""
                                    }`}
                            />
                            <span
                                className={`${styles.line} ${styles.lineMiddle} ${isMenuOpen ? styles.lineMiddleOpen : ""
                                    }`}
                            />
                            <span
                                className={`${styles.line} ${styles.lineBottom} ${isMenuOpen ? styles.lineBottomOpen : ""
                                    }`}
                            />
                        </div>
                    </button>
                </div>
            </nav>

            {/* MENU OVERLAY */}
            <div
                className={`${styles.overlay} ${isMenuOpen ? styles.overlayOpen : ""}`}
            >
                <div className={styles.overlayInner}>
                    <div className={styles.linksContainer}>
                        {[
                            { label: "HOME", href: "#home" },
                            { label: "ABOUT", href: "#about" },
                            { label: "SERVICES", href: "#services" },
                            { label: "TESTIMONIALS", href: "#testimonials" },
                            { label: "CONTACT", href: "#contact" },
                        ].map((item, i) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={styles.navLink}
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    document.body.style.overflow = "";
                                }}
                            >
                                <div style={{ transitionDelay: `${150 + i * 50}ms` }}>
                                    <span className={styles.navLinkText}>{item.label}</span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className={styles.footer}>
                        <span>EST2024</span>
                        <span>LIQUOR GARAGE</span>
                        <span>PREMIUM SPIRITS</span>
                    </div>
                </div>
            </div>
        </>
    );
}