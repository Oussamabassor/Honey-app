import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from '../src/LanguageContext';
import l3gber from '../imgs/3gber.jpg';
import amlo_loz from '../imgs/amlo-loz.jpg';
import dghmouss from '../imgs/dghmouss.jpg';
import khroub from '../imgs/khroub.jpg';
import limon from '../imgs/limon.jpg';
import ocaliptus from '../imgs/ocaliptus.jpg';
import ssidr from '../imgs/ssidr.jpg';
import z3fran from '../imgs/z3fran.jpg';
import z3ter from '../imgs/z3ter.jpg';
import zit_argan from '../imgs/zit-argan.jpg';
import zkoum from '../imgs/zkoum.jpg';
import hoboub_li9a7 from '../imgs/7boub-li9a7.jpg';

const products = [
  {
    id: 1,
    name: "عسل الدغموس",
    description: "عسل الدغموس هو نوع فريد من العسل المعروف بفوائده الصحية العديدة.",
    image: dghmouss,
  },
  {
    id: 2,
    name: "عسل الخروب",
    description: "عسل الخروب يتميز بنكهته اللذيذة وفوائده الصحية المتعددة.",
    image: khroub,
  },
  {
    id: 3,
    name: "عسل السدر",
    description: "عسل السدر يُعرف بجودته العالية ونكهته المميزة.",
    image: ssidr,
  },
  {
    id: 4,
    name: "زيت أركان للأكل",
    description: "زيت أركان للأكل غني بالفوائد الصحية للبشرة والشعر.",
    image: zit_argan,
  },
  {
    id: 5,
    name: "عسل الزعتر",
    description: "عسل الزعتر يتميز بنكهته العطرية وفوائده الصحية المتعددة.",
    image: z3ter,
  }
];

function HomePage() {
  const { t } = useLanguage();
  const [currentProduct, setCurrentProduct] = useState(products[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      setCurrentProduct(randomProduct);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-background"></div>
        <div className="overlay"></div>

        <div className="slider-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProduct.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="slide"
            >
              <div className="content-wrapper">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-content"
                >
                  <div className="text-wrapper">
                    <div className="highlight-badge">Featured Product</div>
                    <motion.h1>{t(currentProduct.name)}</motion.h1>
                    <motion.p>{t(currentProduct.description)}</motion.p>
                    <Link to={`/product/${currentProduct.id}`} className="cta-button">
                      {t('viewDetails')}
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="image-container"
                >
                  <div className="image-glow"></div>
                  <motion.img
                    src={currentProduct.image}
                    alt={t(currentProduct.name)}
                    className="product-image"
                  />
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

