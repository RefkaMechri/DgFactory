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
            PILOTER, INNOVER, PERFORMER
          </div>

          <h1>
            Piloter votre <span>innovation</span> <br />
            Accélérer votre impact
          </h1>

          <p>
            La plateforme de pilotage de la Digital Factory vous offre une vision unifiée 
            de votre portefeuille digital, de vos équipes agiles et de la performance de vos initiatives.
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