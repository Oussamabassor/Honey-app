
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../imgs/7or-logo.png';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../src/LanguageContext';
// ..............................

function Header() {
  const { language, changeLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        <div className="header-main">
          <Link href="/" className="logo">
            <img src={logo} alt="7or" />
            {/* <span className="logo-text">7or</span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <Link to="/" className="nav-link">{t('home')}</Link>
            <Link to="/products" className="nav-link">{t('products')}</Link>
            <Link to="/contact" className="nav-link">{t('contact')}</Link>
          </nav>

          {/* Language Switcher */}
          <div className="language-switcher">
            {['ar', 'en', 'fr'].map((lang) => (
              <button
                key={lang}
                onClick={() => changeLanguage(lang)}
                className={`lang-btn ${language === lang ? 'active' : ''}`}
              >
                {lang === 'ar' ? 'عربي' : lang === 'en' ? 'English' : 'Français'}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-btn"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="mobile-menu">
          <nav className="mobile-nav">
            <a href="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              {t('home')}
            </a>
            <a href="/products" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              {t('products')}
            </a>
            <a href="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              {t('contact')}
            </a>
          </nav>
          
          <div className="mobile-language-switcher">
            {['ar', 'en', 'fr'].map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  changeLanguage(lang);
                  setIsMenuOpen(false);
                }}
                className={`lang-btn ${language === lang ? 'active' : ''}`}
              >
                {lang === 'ar' ? 'عربي' : lang === 'en' ? 'English' : 'Français'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;