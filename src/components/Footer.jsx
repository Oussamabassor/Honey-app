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
        <p>&copy; 2023 7or100. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
