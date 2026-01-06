"use client";
import styles from "./HeroSection.module.scss"
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SplitText from "gsap/SplitText"

gsap.registerPlugin(SplitText)

export default function HeroSection() {
  const textRef = useRef(null);

  useEffect(() => {
    const split = new SplitText(textRef.current, {
      type: 'words',
    });

    gsap.from(split.words, {
      opacity: 0,
      y: 50,
      stagger: 0.3,
      duration: 1,
    });
  }, []);

  return(
    <section className={styles.heroSection}>
      <p ref={textRef}>“La cuisine est un don de Dieu, les épices un don du diable”</p>
    </section>
  )
}