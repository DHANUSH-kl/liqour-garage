"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import styles from "./Location.module.css";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const Location = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const leftColRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            // 1. Text elements reveal from left
            const texts = gsap.utils.toArray(`.animateLeft`);

            texts.forEach((el: any, i) => {
                gsap.from(el, {
                    scrollTrigger: {
                        trigger: leftColRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                    x: -40,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    delay: i * 0.15,
                });
            });

            // 2. Map reveals from right/bottom
            gsap.from(mapRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    toggleActions: "play none none reverse",
                },
                y: 40,
                opacity: 0,
                scale: 0.95,
                duration: 1,
                ease: "power3.out",
                delay: 0.2,
            });
        },
        { scope: sectionRef }
    );

    return (
        <section className={styles.section} ref={sectionRef}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Left Column: Details */}
                    <div className={styles.leftCol} ref={leftColRef}>
                        <div className={`${styles.badge} animateLeft`}>
                            <MapPin size={16} />
                            Visit Us
                        </div>

                        <h2 className={`${styles.title} animateLeft`}>Store Location</h2>

                        <div className={`${styles.infoCard} animateLeft`}>
                            <div className={styles.infoRow}>
                                <div className={styles.iconCircle}>
                                    <MapPin size={20} className={styles.icon} />
                                </div>
                                <div>
                                    <h3 className={styles.infoTitle}>Address</h3>
                                    <div className={styles.infoText}>
                                        <p style={{ marginBottom: "1rem" }}>
                                            <strong style={{ color: "#ff7a33" }}>Hebbalu Store:</strong><br />
                                            No. 287, Shop No. 1, <br />
                                            Mahadeshwara Extension, <br />
                                            Hebbalu, Mysore, India 570016
                                        </p>
                                        <p>
                                            <strong style={{ color: "#ff7a33" }}>Ring Rd Store:</strong><br />
                                            7JJ4+CJQ, Ring Rd, Kanakadasa Nagar, <br />
                                            Somanath Nagar, Mysuru, Karnataka 570033
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.infoRow}>
                                <div className={styles.iconCircle}>
                                    <Clock size={20} className={styles.icon} />
                                </div>
                                <div>
                                    <h3 className={styles.infoTitle}>Opening Hours</h3>
                                    <p className={styles.infoText}>
                                        Mon - Sun: 10:00 AM - 10:30 PM
                                    </p>
                                </div>
                            </div>

                            <div className={styles.infoRow}>
                                <div className={styles.iconCircle}>
                                    <Phone size={20} className={styles.icon} />
                                </div>
                                <div>
                                    <h3 className={styles.infoTitle}>Contact</h3>
                                    <p className={styles.infoText}>+91 78996 13040</p>
                                </div>
                            </div>

                        </div>

                        <div className="animateLeft" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                            <a
                                href="https://maps.google.com/?q=No.+287,+Shop+No.+1,+Mahadeshwara+Extension,+Hebbalu,+Mysore,+Karnataka+570016"
                                target="_blank"
                                rel="noreferrer"
                                className={styles.directionsBtn}
                            >
                                Hebbalu Store Location
                            </a>
                            <a
                                href="https://maps.google.com/?q=7JJ4+CJQ,+Ring+Rd,+Kanakadasa+Nagar,+Somanath+Nagar,+Mysuru,+Karnataka+570033"
                                target="_blank"
                                rel="noreferrer"
                                className={styles.directionsBtn}
                            >
                                Dattagalli Store Location
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Map */}
                    <div className={styles.rightCol} ref={mapRef}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", height: "100%" }}>
                            <div className={styles.mapWrapper} style={{ flex: 1 }}>
                                <iframe
                                    title="Hebbalu Store Location"
                                    src="https://www.google.com/maps?q=No.+287,+Shop+No.+1,+Mahadeshwara+Extension,+Hebbalu,+Mysore,+Karnataka+570016&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className={styles.iframe}
                                ></iframe>
                            </div>
                            <div className={styles.mapWrapper} style={{ flex: 1 }}>
                                <iframe
                                    title="Ring Rd Store Location"
                                    src="https://www.google.com/maps?q=7JJ4+CJQ,+Ring+Rd,+Kanakadasa+Nagar,+Somanath+Nagar,+Mysuru,+Karnataka+570033&output=embed"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className={styles.iframe}
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
