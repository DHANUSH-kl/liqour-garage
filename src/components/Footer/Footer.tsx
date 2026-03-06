import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from "lucide-react";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            {/* Top Banner / Newsletter */}
            <div className={styles.newsletterSection}>
                <div className={styles.newsletterContainer}>
                    <h3 className={styles.newsletterTitle}>Join Our Private Collection</h3>
                    <p className={styles.newsletterText}>Subscribe to receive exclusive access to rare releases and event invitations.</p>
                    <form className={styles.form}>
                        <input type="email" placeholder="Your email address" className={styles.input} />
                        <button type="button" className={styles.submitBtn}>Subscribe</button>
                    </form>
                </div>
            </div>

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
                            <li><Link href="#" className={styles.link}>Premium Spirits</Link></li>
                            <li><Link href="#" className={styles.link}>Rare Collections</Link></li>
                            <li><Link href="#" className={styles.link}>Fine Wines</Link></li>
                            <li><Link href="#" className={styles.link}>Gifting</Link></li>
                            <li><Link href="#" className={styles.link}>Accessories</Link></li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className={styles.linksCol}>
                        <h4 className={styles.colTitle}>Company</h4>
                        <ul className={styles.linkList}>
                            <li><Link href="#" className={styles.link}>Our Story</Link></li>
                            <li><Link href="#" className={styles.link}>Tasting Events</Link></li>
                            <li><Link href="#" className={styles.link}>Careers</Link></li>
                            <li><Link href="#" className={styles.link}>Privacy Policy</Link></li>
                            <li><Link href="#" className={styles.link}>Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className={styles.contactCol}>
                        <h4 className={styles.colTitle}>Contact</h4>
                        <ul className={styles.contactList}>
                            <li className={styles.contactItem}>
                                <MapPin size={18} className={styles.contactIcon} />
                                <span>774, Kalidasa Rd, Vijayanagar 1st Stage, Mysuru</span>
                            </li>
                            <li className={styles.contactItem}>
                                <Phone size={18} className={styles.contactIcon} />
                                <span>+91 (0) 000 000 0000</span>
                            </li>
                            <li className={styles.contactItem}>
                                <Mail size={18} className={styles.contactIcon} />
                                <span>concierge@liquorgarage.com</span>
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
