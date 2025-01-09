import React from "react";
import "../styles/Footer.css";
import logo from "../imgs/7or-logo.png";
import { useLanguage } from '../src/LanguageContext';



function Footer() {
    const { t } = useLanguage();
  
  return (
    <footer className="footer">
      <section className="introduction">
        <div className="container">
          <h2>{t('ourPromise')}</h2>
          <p className="promise-description">
            {t('promiseDescription')}
          </p>
        </div>
      </section>
      <div className="footer-container">
        <div className="footer-features">
          <div className="feature-item">
            <span className="feature-icon">🌿</span>
            <span className="feature-text">{t('natural')}</span>
          </div>
          
          <div className="feature-item">
            <span className="feature-icon">📍</span>
            <span className="feature-text">{t('casablanca')}</span>
          </div>
          
          <div className="feature-logo">
            <img src={logo} alt="7or" className="footer-logo" />
          </div>
          
          <div className="feature-item">
            <span className="feature-icon">🚚</span>
            <span className="feature-text">{t('fast_delivery')}</span>
          </div>
          
          <div className="feature-item">
            <span className="feature-icon">💝</span>
            <span className="feature-text">{t('trust_products')}</span>
          </div>
        </div>
      </div>
      <div className="container">
      <p>&copy; 2025 7or100. {t('allRightsReserved')}</p>
      <p>{t('foundedBy')} <span className="founder">Oussama Bassor</span></p>
        <div className="social-links">
          <a href="https://github.com/Oussamabassor" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/oussama-bassor-054a58312/overlay/about-this-profile/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BNeDJiRoXSYyvPezA%2FZR7tw%3D%3D" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
