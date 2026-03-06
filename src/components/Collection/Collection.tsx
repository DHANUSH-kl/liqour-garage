"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import styles from "./Collection.module.css";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const Collection = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            let mm = gsap.matchMedia();

            function pinAndAnimate({
                trigger,
                endTrigger,
                pin,
                animations,
                markers = false,
                headerOffset = 0,
            }: {
                trigger: string;
                endTrigger: string;
                pin: string;
                animations: { target: string; vars: gsap.TweenVars; position?: number | string }[];
                markers?: boolean;
                headerOffset?: number;
            }) {
                const end = `top top+=${headerOffset}`;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger,
                        start: `top top+=${headerOffset}`,
                        endTrigger,
                        end,
                        scrub: true,
                        pin,
                        pinSpacing: false,
                        markers: markers,
                        invalidateOnRefresh: true,
                    },
                });

                animations.forEach(({ target, vars, position = 0 }) => {
                    tl.to(target, vars, position);
                });
            }

            const headerOffset = 0; // Assuming no fixed header offset needed or adjust if Navbar is sticky

            mm.add("(min-width: 769px)", () => {
                // 1. Bottle animates on scroll from hero to intro
                pinAndAnimate({
                    trigger: `.${styles.hero}`,
                    endTrigger: `.${styles.sectionIntro}`,
                    pin: `.${styles.heroBottleWrapper}`,
                    animations: [
                        { target: `.${styles.heroBottle}`, vars: { rotate: 0, scale: 0.8 } },
                    ],
                    headerOffset,
                });

                // 2. Bottle shifts right during intro section
                pinAndAnimate({
                    trigger: `.${styles.sectionIntro}`,
                    endTrigger: `.${styles.timelineEntryFirst}`,
                    pin: `.${styles.heroBottleWrapper}`,
                    animations: [
                        { target: `.${styles.heroBottle}`, vars: { rotate: 10, scale: 0.7 } },
                        { target: `.${styles.heroBottleWrapper}`, vars: { x: "30%" } },
                    ],
                    headerOffset,
                });

                // 3. Bottle shifts left during the first timeline entry
                pinAndAnimate({
                    trigger: `.${styles.timelineEntryFirst}`,
                    endTrigger: `.${styles.timelineEntrySecond}`,
                    pin: `.${styles.heroBottleWrapper}`,
                    animations: [
                        { target: `.${styles.heroBottle}`, vars: { rotate: -10, scale: 0.7 } },
                        { target: `.${styles.heroBottleWrapper}`, vars: { x: "-25%" } },
                    ],
                    headerOffset,
                });
            });

            mm.add("(max-width: 768px)", () => {
                // Mobile Animation Logic: Vertical Scaling

                // 1. Scroll from Hero to Intro: Bottle scales down and shifts up a bit to make room
                pinAndAnimate({
                    trigger: `.${styles.hero}`,
                    endTrigger: `.${styles.sectionIntro}`,
                    pin: `.${styles.heroBottleWrapper}`,
                    animations: [
                        { target: `.${styles.heroBottle}`, vars: { rotate: 0, scale: 0.5, y: "-20vh" } },
                        { target: `.${styles.heroContent}`, vars: { opacity: 0 } },
                    ],
                    headerOffset,
                });

                // 2. Scroll through Intro: Bottle fades back slightly so text remains readable
                pinAndAnimate({
                    trigger: `.${styles.sectionIntro}`,
                    endTrigger: `.${styles.timelineEntryFirst}`,
                    pin: `.${styles.heroBottleWrapper}`,
                    animations: [
                        { target: `.${styles.heroBottle}`, vars: { y: "-10vh", opacity: 0.3 } },
                    ],
                    headerOffset,
                });

                // 3. Scroll to Timeline: Bottle fades away completely to let Timeline take over
                pinAndAnimate({
                    trigger: `.${styles.timelineEntryFirst}`,
                    endTrigger: `.${styles.timelineEntrySecond}`,
                    pin: `.${styles.heroBottleWrapper}`,
                    animations: [
                        { target: `.${styles.heroBottle}`, vars: { opacity: 0 } },
                    ],
                    headerOffset,
                });
            });


            return () => mm.revert();
        },
        { scope: containerRef }
    );

    return (
        <div ref={containerRef} className={styles.mainContainer}>
            {/* Hero Bottle Overlay Wrapper */}
            <div className={styles.heroBottleWrapper}>
                <Image
                    src="/bl bottle.png"
                    alt="Premium Collection Bottle"
                    width={400}
                    height={900}
                    className={styles.heroBottle}
                    quality={100}
                    priority
                />
            </div>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>
                        <span className={styles.line}>Premium</span>
                        <span className={`${styles.line} ${styles.highlight}`}>Collection</span>
                    </h1>
                </div>
            </section>

            {/* Introduction Section */}
            <section className={styles.sectionIntro}>
                <div className={styles.introGrid}>
                    {/* Left Side */}
                    <div className={styles.introLeft}>
                        <p className={styles.smallTitle}>Our Selection</p>
                        <h2 className={styles.mainHeading}>The Heritage Line</h2>
                        <p className={styles.description}>
                            Discover our exclusive range of premium spirits, crafted with unmatched precision and legacy. Explore flavors that define luxury.
                        </p>
                        <Link href="/discover" className={styles.ctaBox}>Explore All</Link>
                    </div>

                    {/* Right Side */}
                    <div className={styles.introRight}>
                        <div className={styles.ingredientsLog}>
                            <h3 className={styles.ingredientsTitle}>Tasting Notes</h3>

                            <div className={styles.ingredientItem}>
                                <div className={styles.ingredientQty}>Nose</div>
                                <div className={styles.ingredientText}>
                                    <strong>Rich & Smoky</strong>
                                    <p>A subtle hint of peat smoke balanced with sweet vanilla and oak.</p>
                                </div>
                            </div>

                            <div className={styles.ingredientItem}>
                                <div className={styles.ingredientQty}>Palate</div>
                                <div className={styles.ingredientText}>
                                    <strong>Complex Spice</strong>
                                    <p>Layers of dark chocolate, dried fruits, and a touch of black pepper.</p>
                                </div>
                            </div>

                            <div className={styles.ingredientItem}>
                                <div className={styles.ingredientQty}>Finish</div>
                                <div className={styles.ingredientText}>
                                    <strong>Long & Warm</strong>
                                    <p>Lingering notes of caramel and deep oak warmth.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className={styles.timelineSection}>
                <h2 className={styles.timelineMainTitle}>Our Legacy</h2>

                <div className={styles.timelineEntriesContainer}>
                    {/* First Timeline Entry */}
                    <div className={`${styles.timelineEntry} ${styles.timelineEntryFirst}`}>
                        <div className={styles.timelineLeft}>
                            <div className={styles.timelineDate}>1984</div>
                            <div className={styles.timelineImgWrapper}>
                                <Image
                                    src="/wooden-barrel.png"
                                    alt="Vintage Barrel"
                                    width={240}
                                    height={240}
                                    className={styles.timelineImg}
                                />
                            </div>
                        </div>
                        <div className={styles.timelineRight}>
                            <h3 className={styles.timelineTitle}>The First Batch</h3>
                            <p className={styles.timelineDescription}>
                                Our journey began in a wooden barn nestled among oak trees. The first batch was brewed with hand-milled barley and patience, setting the standard for decades to come.
                            </p>
                        </div>
                    </div>

                    {/* Second Timeline Entry */}
                    <div className={`${styles.timelineEntry} ${styles.timelineEntrySecond}`}>
                        <div className={styles.timelineLeft}>
                            <div className={styles.timelineDate}>1989</div>
                            <div className={styles.timelineImgWrapper}>
                                <Image
                                    src="/wooden-barrel.png"
                                    alt="Vintage Barrel"
                                    width={240}
                                    height={240}
                                    className={styles.timelineImg}
                                />
                            </div>
                        </div>
                        <div className={styles.timelineRight}>
                            <h3 className={styles.timelineTitle}>The Fire Oak Revival</h3>
                            <p className={styles.timelineDescription}>
                                A lightning storm sparked a fire that nearly ended our legacy. But from the ashes, we rebuilt — charred oak barrels, reclaimed tools, and a vow to never compromise the craft.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Collection;