"use client"
import Image from "next/image"
import styles from "./Navbar.module.scss"
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({behavior:'smooth'});
    setIsMenuOpen(false);
  }

  return(
    <nav className={styles.navbar}>
      <Image
        src="https://jasonsamaxx.s3.eu-north-1.amazonaws.com/one-piece/sanji/icones/icone-sanji.png"
        alt="Icone Sanji"
        width={50}
        height={50}
        className={styles.icon}
      />

      <div className={styles.links}>
        <p onClick={() => scrollTo('Profil')}>Profil</p>
        <p onClick={() => scrollTo('Plats')}>Plat</p>
      </div>
      
      <Image
        src="https://jasonsamaxx.s3.eu-north-1.amazonaws.com/one-piece/one-piece-logo.png"
        alt="Logo One piece"
        width={175}
        height={62}
        className={styles.logo}
      />

      {/* Menu burger pour mobile */}
      <button
        className={styles.burger}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Menu déroulant mobile */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <p onClick={() => scrollTo('Profil')}>Profil</p>
          <p onClick={() => scrollTo('Plats')}>Plat</p>
        </div>
      )}
    </nav>
  )
}