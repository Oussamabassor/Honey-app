import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProductsGrid.css';
import { useLanguage } from '../src/LanguageContext';
import { useCart } from '../src/CartContext';
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
    sizes: [
      { quantity: "ربع كيلو", price: 90 },
      { quantity: "نصف كيلو", price: 175 },
      { quantity: "1 كيلو", price: 350 }
    ]
  },
  {
    id: 2,
    name: "عسل الخروب",
    description: "عسل الخروب يتميز بنكهته اللذيذة وفوائده الصحية المتعددة.",
    image: khroub,
    sizes: [
      { quantity: "ربع كيلو", price: 60 },
      { quantity: "نصف كيلو", price: 110 },
      { quantity: "1 كيلو", price: 220 }
    ]
  },
  {
    id: 3,
    name: "عسل السدر",
    description: "عسل السدر يُعرف بجودته العالية ونكهته المميزة.",
    image: ssidr,
    sizes: [
      { quantity: "ربع كيلو", price: 65 },
      { quantity: "نصف كيلو", price: 125 },
      { quantity: "1 كيلو", price: 250 }
    ]
  },
  {
    id: 4,
    name: "زيت أركان للأكل",
    description: "زيت أركان للأكل غني بالفوائد الصحية للبشرة والشعر.",
    image: zit_argan,
    sizes: [
      { quantity: "ربع لتر", price: 140 },
      { quantity: "نصف لتر", price: 275 },
      { quantity: "1 لتر", price: 550 }
    ]
  },
  {
    id: 5,
    name: "عسل الزعتر",
    description: "عسل الزعتر يتميز بنكهته العطرية وفوائده الصحية المتعددة.",
    image: z3ter,
    sizes: [
      { quantity: "ربع كيلو", price: 110 },
      { quantity: "نصف كيلو", price: 200 },
      { quantity: "1 كيلو", price: 400 }
    ]
  },
  {
    id: 6,
    name: "عسل الليمون",
    description: "عسل الليمون يتميز بنكهته المنعشة وفوائده الصحية المتعددة.",
    image: limon,
    sizes: [
      { quantity: "ربع كيلو", price: 35 },
      { quantity: "نصف كيلو", price: 60 },
      { quantity: "1 كيلو", price: 120 }
    ]
  },
  {
    id: 7,
    name: "عسل الأوكالبتوس",
    description: "عسل الأوكالبتوس يُعرف بفوائده الصحية للجهاز التنفسي.",
    image: ocaliptus,
    sizes: [
      { quantity: "ربع كيلو", price: 55 },
      { quantity: "نصف كيلو", price: 100 },
      { quantity: "1 كيلو", price: 200 }
    ]
  },
  {
    id: 8,
    name: "عسل الزقوم",
    description: "عسل الزقوم يتميز بنكهته المميزة وفوائده الصحية المتعددة.",
    image: zkoum,
    sizes: [
      { quantity: "ربع كيلو", price: 80 },
      { quantity: "نصف كيلو", price: 150 },
      { quantity: "1 كيلو", price: 300 }
    ]
  },
  {
    id: 9,
    name: "العكبر",
    description: "العكبر يُعرف بفوائده الصحية المتعددة.",
    image: l3gber,
    sizes: [
      { quantity: "1 غرام", price: 7 },
      { quantity: "10 غرام", price: 70 },
      { quantity: "50 غرام", price: 350 }
    ]
  },
  {
    id: 10,
    name: "حبوب اللقاح",
    description: "حبوب اللقاح غنية بالفوائد الصحية.",
    image: hoboub_li9a7,
    sizes: [
      { quantity: "ربع كيلو", price: 100 },
      { quantity: "نصف كيلو", price: 200 },
      { quantity: "1 كيلو", price: 400 }
    ]
  },
  {
    id: 11,
    name: "زعفران",
    description: "الزعفران يُعرف بفوائده الصحية المتعددة.",
    image: z3fran,
    sizes: [
      { quantity: "1 غرام", price: 40 },
      { quantity: "2 غرام", price: 70 },
      { quantity: "4 غرام", price: 140 }
    ]
  },
  {
    id: 12,
    name: "أملو لوز",
    description: "أملو اللوز غني بالفوائد الصحية.",
    image: amlo_loz,
    sizes: [
      { quantity: "ربع كيلو", price: 60 },
      { quantity: "نصف كيلو", price: 110 },
      { quantity: "1 كيلو", price: 220 }
    ]
  }
];

function ProductsGrid() {
  const { t } = useLanguage();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState({});

  const handleSizeChange = (productId, size) => {
    setSelectedSize({
      ...selectedSize,
      [productId]: size
    });
  };

  const handleAddToCart = (product) => {
    const size = selectedSize[product.id] || product.sizes[0];
    addToCart({ ...product, selectedSize: size });
  };

  return (
    <div className="products-grid">
      <div className="container">
        <h2>{t('ourProducts')}</h2>
        <div className="grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={t(product.name)} />
              <h3>{t(product.name)}</h3>
              <p className="description">{product.description}</p>
              <div className="sizes">
                <select 
                  value={selectedSize[product.id]?.quantity || product.sizes[0].quantity} 
                  onChange={(e) => handleSizeChange(product.id, product.sizes.find(s => s.quantity === e.target.value))}
                >
                  {product.sizes.map((size) => (
                    <option key={size.quantity} value={size.quantity}>
                      {size.quantity} - {size.price} dhs
                    </option>
                  ))}
                </select>
              </div>
              <div className="product-actions">
                <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
                  {t('addToCart')}
                </button>
                <Link to={`/product/${product.id}`} className="view-details">
                  {t('viewDetails')}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsGrid;

