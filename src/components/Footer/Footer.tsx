import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from "lucide-react";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.mainContent}>
                <div className={styles.grid}>
                    {/* Brand Column */}
                    <div className={styles.brandCol}>
                        <Link href="/" className={styles.logo}>
                            LIQUOR<br />
                            <span className={styles.logoLight}>GARAGE</span>
                        </Link>
                        <p className={styles.brandDesc}>
                            Mysuru's premier destination for high-end spirits, curated wines, and exclusive tasting experiences.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialIcon}><Instagram size={20} /></a>
                            <a href="#" className={styles.socialIcon}><Facebook size={20} /></a>
                            <a href="#" className={styles.socialIcon}><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Explore Links */}
                    <div className={styles.linksCol}>
                        <h4 className={styles.colTitle}>Explore</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="/discover" className={styles.link}>Discover Spirits</Link></li>
                            <li><Link href="/#why-us" className={styles.link}>Why Liquor Garage</Link></li>
                            <li><Link href="#impact" className={styles.link}>Our Impact</Link></li>
                            <li><Link href="#membership" className={styles.link}>Exclusive Membership</Link></li>
                            <li><Link href="#gallery" className={styles.link}>Premium Gallery</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className={styles.contactCol}>
                        <h4 className={styles.colTitle}>Contact</h4>
                        <ul className={styles.contactList}>
                            <li className={styles.contactItem} style={{ alignItems: "flex-start" }}>
                                <MapPin size={18} className={styles.contactIcon} style={{ marginTop: "4px" }} />
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                    <span><strong>Hebbalu:</strong> No. 287, Shop No. 1, Mahadeshwara Extension, Hebbalu, Mysore, India 570016</span>
                                    <span><strong>Ring Rd:</strong> 7JJ4+CJQ, Ring Rd, Kanakadasa Nagar, Somanath Nagar, Mysuru, Karnataka 570033</span>
                                </div>
                            </li>
                            <li className={styles.contactItem}>
                                <Phone size={18} className={styles.contactIcon} />
                                <span>+91 78996 13040</span>
                            </li>
                            <li className={styles.contactItem}>
                                <Mail size={18} className={styles.contactIcon} />
                                <span>liquorgaragemysore@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className={styles.bottomBar}>
                <div className={styles.bottomContainer}>
                    <p>&copy; {new Date().getFullYear()} Liquor Garage. All rights reserved.</p>
                    <div className={styles.legalLinks}>
                        Drink Responsibly. Must be 21+ to enter.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
