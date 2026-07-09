import Link from "next/link";
import Image from "next/image";
import heroImage from "../../image/about.jpg";
import "../../CSS/about.css";

export default function AboutPage() {
  return (
    <main className="aboutPage">
      <nav className="aboutNavbar">
        <div className="aboutLogo">
          <span className="aboutLogoMark">✦</span>
          <div className="aboutLogoText">
            <strong>YK DIGITAL</strong>
            <em>Digital Factory</em>
          </div>
        </div>

        <div className="aboutLinks">
          <Link href="/">Accueil</Link>
          <Link href="/about">À propos</Link>
          <a href="#">Fonctionnalités</a>
          <a href="#">Ressources</a>
          <a href="#">Contact</a>
        </div>

        <Link href="/login" className="aboutLoginBtn">
          Se connecter ↗
        </Link>
      </nav>

      <section className="aboutHero">
        <div className="aboutText">
          <span>À PROPOS DE LA PLATEFORME</span>

          <h1>
            Piloter l’innovation.
            <br />
            Accélérer la valeur.
          </h1>

          <p>
            La plateforme de pilotage de la Digital Factory a été conçue pour
            accompagner les organisations bancaires dans la gestion intégrée de
            leurs initiatives digitales, de l’idée à la mise en production, en
            favorisant la collaboration, la performance et la maîtrise des risques.
          </p>

          <div className="aboutInfo">
            Une solution centralisée pour aligner la stratégie, les équipes et
            les ressources autour d’objectifs communs et mesurables.
          </div>
        </div>

        <div className="aboutImage">
          <Image src={heroImage} alt="Digital Factory" fill priority />
        </div>
      </section>

     <section className="aboutStats">
  <div className="statItem">
    <span className="statIcon blue">▣</span>
    <div>
      <strong>24+</strong>
      <p>Initiatives pilotées</p>
      <small>Portefeuille actif</small>
    </div>
  </div>

  <div className="statItem">
    <span className="statIcon green">♧</span>
    <div>
      <strong>120+</strong>
      <p>Utilisateurs</p>
      <small>Acteurs engagés</small>
    </div>
  </div>

  <div className="statItem">
    <span className="statIcon orange">🚀</span>
    <div>
      <strong>15+</strong>
      <p>MVP en cours</p>
      <small>De l’idée au marché</small>
    </div>
  </div>

  <div className="statItem">
    <span className="statIcon purple">▥</span>
    <div>
      <strong>78%</strong>
      <p>Budget réalisé</p>
      <small>Taux d’exécution moyen</small>
    </div>
  </div>

  <div className="statItem">
    <span className="statIcon blue">☆</span>
    <div>
      <strong>4.6/5</strong>
      <p>Satisfaction métier</p>
      <small>Score global</small>
    </div>
  </div>
</section>

<section className="aboutCards">
  <article className="aboutCard missionCard">
    <h3>Notre mission</h3>
    <div className="cardContent">
      <span className="cardIcon orange">◎</span>
      <p>
        Offrir une plateforme intégrée et intelligente permettant de piloter
        efficacement le portefeuille d’innovation, d’optimiser l’allocation
        des ressources, de suivre la performance en temps réel et d’assurer
        la conformité et la maîtrise des risques.
      </p>
    </div>
  </article>

  <article className="aboutCard valuesCard">
    <h3>Nos valeurs</h3>

    <div className="valuesRow">
      <div>
        <span className="cardIcon blue">♙</span>
        <strong>Collaboration</strong>
        <p>Travailler ensemble pour plus d’impact</p>
      </div>

      <div>
        <span className="cardIcon orange">☼</span>
        <strong>Innovation</strong>
        <p>Encourager la créativité et l’expérimentation</p>
      </div>

      <div>
        <span className="cardIcon green">▥</span>
        <strong>Performance</strong>
        <p>Mesurer, apprendre et s’améliorer en continu</p>
      </div>

      <div>
        <span className="cardIcon purple">◇</span>
        <strong>Intégrité</strong>
        <p>Agir avec transparence et responsabilité</p>
      </div>
    </div>
  </article>

  <article className="aboutCard engagementCard">
    <h3>Notre engagement</h3>
    <p>
      Nous nous engageons à fournir une plateforme sécurisée, évolutive et
      centrée sur les besoins métiers, en garantissant la confidentialité des
      données et le respect des normes réglementaires.
    </p>

    <a href="#">En savoir plus →</a>
  </article>
</section>
    </main>
  );
}