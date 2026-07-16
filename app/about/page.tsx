"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import heroImage from "../../image/about2.jpg";
import "../../CSS/about.css";

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
    badge: "À PROPOS DE LA PLATEFORME",
    title: (
      <>
        Piloter l’innovation.
        <br />
        Accélérer la valeur.
      </>
    ),
    description:
      "La plateforme de pilotage de la Digital Factory a été conçue pour accompagner la banque dans la gestion intégrée de leurs initiatives digitales, de l’idée à la mise en production, en favorisant la collaboration, la performance et la maîtrise des risques.",
    info:
      "Une solution centralisée pour aligner la stratégie, les équipes et les ressources autour d’objectifs communs et mesurables.",
    stats: [
      ["24+", "Initiatives pilotées", "Portefeuille actif"],
      ["120+", "Utilisateurs", "Acteurs engagés"],
      ["15+", "MVP en cours", "De l’idée au marché"],
      ["78%", "Budget réalisé", "Taux d’exécution moyen"],
      ["4.6/5", "Satisfaction métier", "Score global"],
    ],
    missionTitle: "Notre mission",
    missionText:
      "Offrir une plateforme intégrée et intelligente permettant de piloter efficacement le portefeuille d’innovation, d’optimiser l’allocation des ressources, de suivre la performance en temps réel et d’assurer la conformité et la maîtrise des risques.",
    valuesTitle: "Nos valeurs",
    values: [
      ["Collaboration", "Travailler ensemble pour plus d’impact"],
      ["Innovation", "Encourager la créativité et l’expérimentation"],
      ["Performance", "Mesurer, apprendre et s’améliorer en continu"],
      ["Intégrité", "Agir avec transparence et responsabilité"],
    ],
    engagementTitle: "Notre engagement",
    engagementText:
      "Nous nous engageons à fournir une plateforme sécurisée, évolutive et centrée sur les besoins métiers, en garantissant la confidentialité des données et le respect des normes réglementaires.",
    learnMore: "En savoir plus →",
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
    badge: "ABOUT THE PLATFORM",
    title: (
      <>
        Drive innovation.
        <br />
        Accelerate value.
      </>
    ),
    description:
      "The Digital Factory management platform was designed to support banking organizations in the integrated management of their digital initiatives, from idea to production, while promoting collaboration, performance, and risk control.",
    info:
      "A centralized solution to align strategy, teams, and resources around shared and measurable objectives.",
    stats: [
      ["24+", "Initiatives managed", "Active portfolio"],
      ["120+", "Users", "Engaged contributors"],
      ["15+", "MVPs in progress", "From idea to market"],
      ["78%", "Budget achieved", "Average execution rate"],
      ["4.6/5", "Business satisfaction", "Overall score"],
    ],
    missionTitle: "Our mission",
    missionText:
      "Provide an integrated and intelligent platform to effectively manage the innovation portfolio, optimize resource allocation, track performance in real time, and ensure compliance and risk control.",
    valuesTitle: "Our values",
    values: [
      ["Collaboration", "Work together for greater impact"],
      ["Innovation", "Encourage creativity and experimentation"],
      ["Performance", "Measure, learn, and continuously improve"],
      ["Integrity", "Act with transparency and responsibility"],
    ],
    engagementTitle: "Our commitment",
    engagementText:
      "We are committed to providing a secure, scalable, and business-focused platform, ensuring data confidentiality and compliance with regulatory standards.",
    learnMore: "Learn more →",
  },
};

export default function AboutPage() {
  const pathname = usePathname();
  const [lang, setLang] = useState<Lang>("FR");

  const t = content[lang];

  return (
    <main className="aboutPage">
      <nav className="aboutNavbar">
        <div className="aboutLogo">
          <span className="aboutLogoMark">✦</span>
          <div className="aboutLogoText">
            <strong>YK DIGITAL</strong>
            <em>DIGITAL FACTORY</em>
          </div>
        </div>

        <div className="aboutLinks">
          <Link href="/" className={pathname === "/" ? "activeLink" : ""}>
            {t.nav.home}
          </Link>

          <Link href="/about" className={pathname === "/about" ? "activeLink" : ""}>
            {t.nav.about}
          </Link>

          <a href="#">{t.nav.features}</a>
          <a href="#">{t.nav.resources}</a>
          <a href="#">{t.nav.contact}</a>
        </div>

        <div className="aboutActions">
          <select
            className="aboutLanguageSelect"
            value={lang}
            onChange={(e) => setLang(e.target.value as Lang)}
          >
            <option value="FR">FR</option>
            <option value="EN">EN</option>
          </select>

          <Link href="/login" className="aboutLoginBtn">
            {t.nav.login}
          </Link>
        </div>
      </nav>

      <section className="aboutHero">
        <div className="aboutText">
          <span>{t.badge}</span>

          <h1>{t.title}</h1>

          <p>{t.description}</p>

          <div className="aboutInfo">{t.info}</div>
        </div>

        <div className="aboutImage">
          <Image src={heroImage} alt="Digital Factory" fill priority />
        </div>
      </section>

      <section className="aboutStats">
        {t.stats.map((stat, index) => (
          <div className="statItem" key={index}>
            <span className={`statIcon ${["blue", "green", "orange", "purple", "blue"][index]}`}>
              {["▣", "♧", "🚀", "▥", "☆"][index]}
            </span>
            <div>
              <strong>{stat[0]}</strong>
              <p>{stat[1]}</p>
              <small>{stat[2]}</small>
            </div>
          </div>
        ))}
      </section>

      <section className="aboutCards">
        <article className="aboutCard missionCard">
          <h3>{t.missionTitle}</h3>
          <div className="cardContent">
            <span className="cardIcon orange">◎</span>
            <p>{t.missionText}</p>
          </div>
        </article>

        <article className="aboutCard valuesCard">
          <h3>{t.valuesTitle}</h3>

          <div className="valuesRow">
            {t.values.map((value, index) => (
              <div key={index}>
                <span className={`cardIcon ${["blue", "orange", "green", "purple"][index]}`}>
                  {["♙", "☼", "▥", "◇"][index]}
                </span>
                <strong>{value[0]}</strong>
                <p>{value[1]}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="aboutCard engagementCard">
          <h3>{t.engagementTitle}</h3>
          <p>{t.engagementText}</p>

          <a href="#">{t.learnMore}</a>
        </article>
      </section>
    </main>
  );
}