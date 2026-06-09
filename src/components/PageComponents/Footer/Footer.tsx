import { NavLink } from 'react-router-dom';
import './Footer.scss';
import mainLogo from '../../../assets/Logo-ODogNextDoor.svg';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer__wrapper">
      <div className="footer__container">
        <div className="footer__brand">
          <img className="footer__logo" src={mainLogo} alt="O'Dog Next Door" />
          <p className="footer__tagline">
            La garde d&apos;animaux de confiance, près de chez vous.
          </p>
        </div>

        <div className="footer__columns">
          <div className="footer__column">
            <h3 className="footer__column-title">Découvrir</h3>
            <NavLink className="footer__link" to="/search">
              Rechercher un gardien
            </NavLink>
            <NavLink className="footer__link" to="/subscribe">
              Devenir gardien
            </NavLink>
          </div>
          <div className="footer__column">
            <h3 className="footer__column-title">Aide</h3>
            <span className="footer__link">À propos</span>
            <span className="footer__link">Besoin d&apos;aide&nbsp;?</span>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span className="footer__rights">
          © {year} O&apos;Dog Next Door — Tous droits réservés
        </span>
      </div>
    </footer>
  );
}

export default Footer;
