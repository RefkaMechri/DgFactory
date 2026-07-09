import Link from "next/link";
import Image from "next/image";
import heroImage from "../image/homepage.jpg";

export default function HomePage() {
  return (
    <main className="homePage">
      <nav className="homeNavbar">
        <div className="homeLogo">
          <span className="homeLogoMark">✦</span>
          <div className="homeLogoText">
            <strong>YK DIGITAL</strong>
            <em>Digital Factory</em>
          </div>
        </div>

        <div className="homeLinks">
          <a href="#">Accueil</a>
          <a href="#">À propos</a>
          <a href="#">Fonctionnalités</a>
          <a href="#">Ressources</a>
          <a href="#">Contact</a>
        </div>

        <div className="homeActions">
          <Link href="/login" className="openAccountBtn">
            Se connecter ↗
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
          <div className="heroBadge">
            Pilotez vos produits digitaux, du concept au déploiement
          </div>

          <h1>
            Votre transformation <span>bancaire digitale</span> <br />
            commence ici.
          </h1>

          <p>
            Pilotez les produits digitaux, suivez les KPIs et accompagnez les
            squads de YK Factory depuis une plateforme moderne et sécurisée.
          </p>

          <div className="heroButtons">
            <Link href="/login" className="primaryBtn">
              Accéder à la plateforme ↗
            </Link>

            <button className="secondaryBtn">
              Découvrir la plateforme ↗
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}