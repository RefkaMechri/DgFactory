"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import heroImage from "../image/homepage.jpg";

type Lang = "FR" | "EN";

const content = {
  FR: {
    nav: {
      home: "Accueil",
      about: "À propos",
      features: "Fonctionnalités",
      resources: "Ressources",
      contact: "Contact",
      login: "Se connecter ↗",
    },
    badge: "PILOTER, INNOVER, PERFORMER",
    title1: "Piloter votre",
    titleAccent: "innovation",
    title2: "Accélérer votre impact",
    text: "La plateforme de pilotage de la Digital Factory vous offre une vision unifiée de votre portefeuille digital, de vos équipes agiles et de la performance de vos initiatives.",
    primary: "Accéder à la plateforme ↗",
    secondary: "Découvrir la plateforme ↗",
  },
  EN: {
    nav: {
      home: "Home",
      about: "About",
      features: "Features",
      resources: "Resources",
      contact: "Contact",
      login: "Sign in ↗",
    },
    badge: "LEAD, INNOVATE, PERFORM",
    title1: "Drive your",
    titleAccent: "innovation",
    title2: "Accelerate your impact",
    text: "The Digital Factory management platform gives you a unified view of your digital portfolio, agile teams, and initiative performance.",
    primary: "Access the platform ↗",
    secondary: "Discover the platform ↗",
  },
};

export default function HomePage() {
  const pathname = usePathname();
  const [lang, setLang] = useState<Lang>("FR");

  const t = content[lang];

  const toggleLang = () => {
    setLang((current) => (current === "FR" ? "EN" : "FR"));
  };

  return (
    <main className="homePage">
      <nav className="homeNavbar">
        <div className="homeLogo">
          <span className="homeLogoMark">✦</span>
          <div className="homeLogoText">
            <strong>YK DIGITAL</strong>
            <em>DIGITAL FACTORY</em>
          </div>
        </div>

        <div className="homeLinks">
          <Link href="/" className={pathname === "/" ? "activeLink" : ""}>
            {t.nav.home}
          </Link>

          <Link href="/about" className={pathname === "/about" ? "activeLink" : ""}>
            {t.nav.about}
          </Link>

          <Link href="#">{t.nav.features}</Link>
          <Link href="#">{t.nav.resources}</Link>
          <Link href="#">{t.nav.contact}</Link>
        </div>

        <div className="homeActions">
      <select
  className="languageSelect"
  value={lang}
  onChange={(e) => setLang(e.target.value as Lang)}
>
  <option value="FR">FR</option>
  <option value="EN">EN</option>
</select>
          <Link href="/login" className="openAccountBtn">
            {t.nav.login}
          </Link>
        </div>
      </nav>

      <section className="heroSection">
        <div className="heroBackdrop">
          <Image
            src={heroImage}
            alt="Croissance digitale et données financières"
            className="heroBgImage"
            fill
            sizes="100vw"
            priority
          />
        </div>

        <div className="heroText">
          <div className="heroBadge">{t.badge}</div>

          <h1>
            {t.title1} <span>{t.titleAccent}</span> <br />
            {t.title2}
          </h1>

          <p>{t.text}</p>

          <div className="heroButtons">
            <Link href="/login" className="primaryBtn">
              {t.primary}
            </Link>

            <button className="secondaryBtn">{t.secondary}</button>
          </div>
        </div>
      </section>
    </main>
  );
}