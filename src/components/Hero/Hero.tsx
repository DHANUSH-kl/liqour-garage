// app/components/Hero/Hero.tsx
"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Hero.module.css";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yMove1 = useTransform(scrollYProgress, [0, 0.8], ["0%", "-80%"]);
  const yMove2 = useTransform(scrollYProgress, [0.15, 0.9], ["0%", "-60%"]);
  const yMove3 = useTransform(scrollYProgress, [0.25, 0.95], ["0%", "-70%"]);

  const rotateMove1 = useTransform(scrollYProgress, [0, 0.8], ["0deg", "18deg"]);
  const rotateMove2 = useTransform(scrollYProgress, [0.15, 0.9], ["0deg", "-12deg"]);
  const rotateMove3 = useTransform(scrollYProgress, [0.25, 0.95], ["0deg", "15deg"]);

  const yMoveMobile1 = useTransform(scrollYProgress, [0, 0.8], ["0%", "-65%"]);
  const yMoveMobile2 = useTransform(scrollYProgress, [0.15, 0.9], ["0%", "-45%"]);
  const yMoveMobile3 = useTransform(scrollYProgress, [0.25, 0.95], ["0%", "-55%"]);

  const rotateMoveMobile1 = useTransform(scrollYProgress, [0, 0.8], ["0deg", "12deg"]);
  const rotateMoveMobile2 = useTransform(scrollYProgress, [0.15, 0.9], ["0deg", "-8deg"]);
  const rotateMoveMobile3 = useTransform(scrollYProgress, [0.25, 0.95], ["0deg", "10deg"]);

  const yMoveScooter = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const rotateScooter = useTransform(scrollYProgress, [0, 1], ["0deg", "-6deg"]);

  return (
    <section ref={containerRef} className={styles.heroSection}>
      <div className={styles.bgWrapper}>
        <Image
          src="/hero-bg-v2.png"
          alt="Liquor Garage Interior"
          fill
          priority
          className={styles.bgImage}
          quality={100}
        />
        <div className={styles.vignette}></div>
        <div className={styles.overlay}></div>
      </div>

      <motion.div
        className={styles.scooterWrapper}
        style={!isMounted ? {} : {
          y: yMoveScooter,
          rotate: rotateScooter,
          transformOrigin: "bottom center"
        }}
        initial={{ y: -80, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <Image
          src="/scooter-hanging-v2.png"
          alt="Vintage Hanging Scooter"
          width={1800}
          height={1200}
          priority
          className={styles.scooterImage}
          quality={100}
        />
      </motion.div>

      <motion.div
        className={styles.barrelWrapperMain}
        style={!isMounted ? {} : {
          y: isMobile ? yMoveMobile1 : yMove1,
          rotate: isMobile ? rotateMoveMobile1 : rotateMove1,
        }}
        initial={{ y: "20%", opacity: 0, scale: 0.9 }}
        animate={{ y: "0%", opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.barrelShadow}></div>
        <Image
          src="/wooden-barrel.png"
          alt="Wooden Barrel"
          width={900}
          height={900}
          priority
          className={styles.barrelImage}
          quality={100}
        />
      </motion.div>

      <motion.div
        className={styles.barrelWrapperLeft}
        style={!isMounted ? {} : {
          y: isMobile ? yMoveMobile2 : yMove2,
          rotate: isMobile ? rotateMoveMobile2 : rotateMove2,
        }}
        initial={{ x: "-15%", y: "15%", opacity: 0, scale: 0.9 }}
        animate={{ x: "0%", y: "0%", opacity: 0.7, scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        <div className={styles.barrelShadow}></div>
        <Image
          src="/wooden-barrel.png"
          alt="Wooden Barrel"
          width={600}
          height={600}
          priority
          className={styles.barrelImage}
          quality={100}
        />
      </motion.div>

      <motion.div
        className={styles.barrelWrapperRight}
        style={!isMounted ? {} : {
          y: isMobile ? yMoveMobile3 : yMove3,
          rotate: isMobile ? rotateMoveMobile3 : rotateMove3,
        }}
        initial={{ x: "15%", y: "15%", opacity: 0, scale: 0.9 }}
        animate={{ x: "0%", y: "0%", opacity: 0.7, scale: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      >
        <div className={styles.barrelShadow}></div>
        <Image
          src="/wooden-barrel.png"
          alt="Wooden Barrel"
          width={650}
          height={650}
          priority
          className={styles.barrelImage}
          quality={100}
        />
      </motion.div>

      <div className={styles.contentContainer}>
        <motion.div
          className={styles.textContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className={styles.premium}>PREMIUM</div>
          <h1 className={styles.title}>SPIRITS</h1>
          
          <div className={styles.divider}>
            <span className={styles.dividerLine}></span>
            <span className={styles.dividerIcon}>✦</span>
            <span className={styles.dividerLine}></span>
          </div>
          
          <p className={styles.description}>
            DISCOVER OUR CURATED COLLECTION OF <span>FINEST</span> LIQUORS
          </p>
          
          <div className={styles.ctaWrapper}>
            <motion.button
              className={`${styles.ctaButton} ${styles.ctaButtonPrimary}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              EXPLORE
            </motion.button>
            <motion.button
              className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              DISCOVER
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span>Scroll</span>
        <div className={styles.scrollLine}></div>
      </motion.div>
    </section>
  );
};

export default Hero;