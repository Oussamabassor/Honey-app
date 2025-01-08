import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductDescription.css";
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

const products = {
  1: {
    id: 1,
    name: "عسل الدغموس",
    arabicName: "عسل الدغموس",
    englishName: "Daghmous Honey",
    frenchName: "Miel de Daghmous",
    description: "عسل الدغموس هو نوع فريد من العسل المعروف بفوائده الصحية العديدة.",
    englishDescription: "Daghmous honey is a unique type of honey known for its numerous health benefits.",
    frenchDescription: "Le miel de Daghmous est un type unique de miel connu pour ses nombreux bienfaits pour la santé.",
    image: dghmouss,
    benefits: [
      {
        ar: "يقوي المناعة",
        en: "Strengthens the immune system",
        fr: "Renforce le système immunitaire"
      },
      {
        ar: "يعالج مشاكل الجهاز التنفسي",
        en: "Treats respiratory system problems",
        fr: "Traite les problèmes du système respiratoire"
      },
      {
        ar: "مضاد للالتهابات",
        en: "Anti-inflammatory",
        fr: "Anti-inflammatoire"
      }
    ],
    sizes: [
      { quantity: "ربع كيلو", price: 90 },
      { quantity: "نصف كيلو", price: 175 },
      { quantity: "1 كيلو", price: 350 }
    ],
    origin: "المغرب",
    englishOrigin: "Morocco",
    frenchOrigin: "Maroc",
    texture: "كريمي",
    englishTexture: "Creamy",
    frenchTexture: "Crémeux",
    color: "ذهبي فاتح",
    englishColor: "Light golden",
    frenchColor: "Doré clair",
    tasteProfile: "حلو مع لمسة مرة خفيفة",
    englishTasteProfile: "Sweet with a slight bitter note",
    frenchTasteProfile: "Sucré avec une légère note amère",
    harvestSeason: "الربيع",
    englishHarvestSeason: "Spring",
    frenchHarvestSeason: "Printemps"
  },
  2: {
    id: 2,
    name: "عسل الخروب",
    arabicName: "عسل الخروب",
    englishName: "Carob Honey",
    frenchName: "Miel de Caroube",
    description: "عسل الخروب يتميز بنكهته اللذيذة وفوائده الصحية المتعددة.",
    englishDescription: "Carob honey is distinguished by its delicious flavor and multiple health benefits.",
    frenchDescription: "Le miel de caroube se distingue par sa saveur délicieuse et ses multiples bienfaits pour la santé.",
    image: khroub,
    benefits: [
      {
        ar: "يحسن الهضم",
        en: "Improves digestion",
        fr: "Améliore la digestion"
      },
      {
        ar: "مصدر للطاقة",
        en: "Source of energy",
        fr: "Source d'énergie"
      },
      {
        ar: "يهدئ الأعصاب",
        en: "Calms the nerves",
        fr: "Calme les nerfs"
      }
    ],
    sizes: [
      { quantity: "ربع كيلو", price: 60 },
      { quantity: "نصف كيلو", price: 110 },
      { quantity: "1 كيلو", price: 220 }
    ],
    origin: "المغرب",
    englishOrigin: "Morocco",
    frenchOrigin: "Maroc",
    texture: "سائل",
    englishTexture: "Liquid",
    frenchTexture: "Liquide",
    color: "بني داكن",
    englishColor: "Dark brown",
    frenchColor: "Brun foncé",
    tasteProfile: "حلو مع نكهة الخروب المميزة",
    englishTasteProfile: "Sweet with distinctive carob flavor",
    frenchTasteProfile: "Sucré avec une saveur distinctive de caroube",
    harvestSeason: "الصيف",
    englishHarvestSeason: "Summer",
    frenchHarvestSeason: "Été"
  },
  3: {
    id: 3,
    name: "عسل السدر",
    arabicName: "عسل السدر",
    englishName: "Sidr Honey",
    frenchName: "Miel de Jujubier",
    description: "عسل السدر يُعرف بجودته العالية ونكهته المميزة.",
    englishDescription: "Sidr honey is known for its high quality and distinctive flavor.",
    frenchDescription: "Le miel de jujubier est connu pour sa haute qualité et sa saveur distinctive.",
    image: ssidr,
    benefits: [
      {
        ar: "يعزز المناعة",
        en: "Boosts immunity",
        fr: "Renforce l'immunité"
      },
      {
        ar: "يحسن صحة القلب",
        en: "Improves heart health",
        fr: "Améliore la santé cardiaque"
      },
      {
        ar: "مفيد لالتئام الجروح",
        en: "Beneficial for wound healing",
        fr: "Bénéfique pour la cicatrisation des plaies"
      }
    ],
    sizes: [
      { quantity: "ربع كيلو", price: 65 },
      { quantity: "نصف كيلو", price: 125 },
      { quantity: "1 كيلو", price: 250 }
    ],
    origin: "المغرب",
    englishOrigin: "Morocco",
    frenchOrigin: "Maroc",
    texture: "كثيف",
    englishTexture: "Thick",
    frenchTexture: "Épais",
    color: "ذهبي غامق",
    englishColor: "Dark golden",
    frenchColor: "Doré foncé",
    tasteProfile: "حلو مع نكهة قوية",
    englishTasteProfile: "Sweet with a strong flavor",
    frenchTasteProfile: "Sucré avec une saveur forte",
    harvestSeason: "الخريف",
    englishHarvestSeason: "Autumn",
    frenchHarvestSeason: "Automne"
  },
  4: {
    id: 4,
    name: "زيت أركان للأكل",
    arabicName: "زيت أركان للأكل",
    englishName: "Edible Argan Oil",
    frenchName: "Huile d'Argan Alimentaire",
    description: "زيت أركان للأكل غني بالفوائد الصحية للبشرة والشعر.",
    englishDescription: "Edible Argan oil is rich in health benefits for skin and hair.",
    frenchDescription: "L'huile d'argan alimentaire est riche en bienfaits pour la peau et les cheveux.",
    image: zit_argan,
    benefits: [
      {
        ar: "يعزز صحة البشرة",
        en: "Promotes skin health",
        fr: "Favorise la santé de la peau"
      },
      {
        ar: "يخفض نسبة الكوليسترول",
        en: "Lowers cholesterol levels",
        fr: "Abaisse le taux de cholestérol"
      },
      {
        ar: "يحتوي على مضادات أكسدة",
        en: "Contains antioxidants",
        fr: "Contient des antioxydants"
      }
    ],
    sizes: [
      { quantity: "ربع لتر", price: 140 },
      { quantity: "نصف لتر", price: 275 },
      { quantity: "1 لتر", price: 550 }
    ],
    origin: "المغرب",
    englishOrigin: "Morocco",
    frenchOrigin: "Maroc",
    texture: "زيتي",
    englishTexture: "Oily",
    frenchTexture: "Huileux",
    color: "ذهبي فاتح",
    englishColor: "Light golden",
    frenchColor: "Doré clair",
    tasteProfile: "نكهة خفيفة مع لمسة من المكسرات",
    englishTasteProfile: "Mild flavor with a nutty note",
    frenchTasteProfile: "Saveur douce avec une note de noix",
    harvestSeason: "الصيف",
    englishHarvestSeason: "Summer",
    frenchHarvestSeason: "Été"
  },
  5: {
    id: 5,
    name: "عسل الزعتر",
    arabicName: "عسل الزعتر",
    englishName: "Thyme Honey",
    frenchName: "Miel de Thym",
    description: "عسل الزعتر يتميز بنكهته العطرية وفوائده الصحية المتعددة.",
    englishDescription: "Thyme honey is characterized by its aromatic flavor and multiple health benefits.",
    frenchDescription: "Le miel de thym se caractérise par sa saveur aromatique et ses multiples bienfaits pour la santé.",
    image: z3ter,
    benefits: [
      {
        ar: "يعالج التهابات الحلق",
        en: "Treats throat infections",
        fr: "Traite les infections de la gorge"
      },
      {
        ar: "مضاد للبكتيريا",
        en: "Antibacterial",
        fr: "Antibactérien"
      },
      {
        ar: "يعزز صحة الجهاز التنفسي",
        en: "Promotes respiratory health",
        fr: "Favorise la santé respiratoire"
      }
    ],
    sizes: [
      { quantity: "ربع كيلو", price: 110 },
      { quantity: "نصف كيلو", price: 200 },
      { quantity: "1 كيلو", price: 400 }
    ],
    origin: "المغرب",
    englishOrigin: "Morocco",
    frenchOrigin: "Maroc",
    texture: "سائل",
    englishTexture: "Liquid",
    frenchTexture: "Liquide",
    color: "ذهبي",
    englishColor: "Golden",
    frenchColor: "Doré",
    tasteProfile: "حلو مع نكهة الزعتر المميزة",
    englishTasteProfile: "Sweet with distinctive thyme flavor",
    frenchTasteProfile: "Sucré avec une saveur distinctive de thym",
    harvestSeason: "الربيع",
    englishHarvestSeason: "Spring",
    frenchHarvestSeason: "Printemps"
  },
  6: {
    id: 6,
    name: "عسل الليمون",
    arabicName: "عسل الليمون",
    englishName: "Lemon Honey",
    frenchName: "Miel de Citron",
    description: "عسل الليمون يتميز بنكهته المنعشة وفوائده الصحية المتعددة.",
    englishDescription: "Lemon honey is known for its refreshing flavor and numerous health benefits.",
    frenchDescription: "Le miel de citron est connu pour sa saveur rafraîchissante et ses nombreux bienfaits pour la santé.",
    image: limon,
    benefits: [
      {
        ar: "يعزز جهاز المناعة",
        en: "Boosts the immune system",
        fr: "Renforce le système immunitaire"
      },
      {
        ar: "يساعد في علاج نزلات البرد",
        en: "Helps treat colds",
        fr: "Aide à traiter les rhumes"
      },
      {
        ar: "مضاد للأكسدة",
        en: "Antioxidant",
        fr: "Antioxydant"
      }
    ],
    sizes: [
      { quantity: "ربع كيلو", price: 35 },
      { quantity: "نصف كيلو", price: 60 },
      { quantity: "1 كيلو", price: 120 }
    ],
    origin: "المغرب",
    englishOrigin: "Morocco",
    frenchOrigin: "Maroc",
    texture: "سائل",
    englishTexture: "Liquid",
    frenchTexture: "Liquide",
    color: "ذهبي فاتح",
    englishColor: "Light golden",
    frenchColor: "Doré clair",
    tasteProfile: "حلو مع نكهة حمضية منعشة",
    englishTasteProfile: "Sweet with a refreshing citrus note",
    frenchTasteProfile: "Sucré avec une note d'agrumes rafraîchissante",
    harvestSeason: "الربيع",
    englishHarvestSeason: "Spring",
    frenchHarvestSeason: "Printemps"
  },
  7: {
    id: 7,
    name: "عسل الأوكالبتوس",
    arabicName: "عسل الأوكالبتوس",
    englishName: "Eucalyptus Honey",
    frenchName: "Miel d'Eucalyptus",
    description: "عسل الأوكالبتوس يُعرف بفوائده الصحية للجهاز التنفسي.",
    englishDescription: "Eucalyptus honey is known for its health benefits for the respiratory system.",
    frenchDescription: "Le miel d'eucalyptus est connu pour ses bienfaits pour le système respiratoire.",
    image: ocaliptus,
    benefits: [
      {
        ar: "يساعد في علاج مشاكل الجهاز التنفسي",
        en: "Helps treat respiratory issues",
        fr: "Aide à traiter les problèmes respiratoires"
      },
      {
        ar: "مضاد للبكتيريا",
        en: "Antibacterial",
        fr: "Antibactérien"
      },
      {
        ar: "يخفف الآلام والالتهابات",
        en: "Reduces pain and inflammation",
        fr: "Réduit la douleur et l'inflammation"
      }
    ],
    sizes: [
      { quantity: "ربع كيلو", price: 55 },
      { quantity: "نصف كيلو", price: 100 },
      { quantity: "1 كيلو", price: 200 }
    ],
    origin: "المغرب",
    englishOrigin: "Morocco",
    frenchOrigin: "Maroc",
    texture: "سائل",
    englishTexture: "Liquid",
    frenchTexture: "Liquide",
    color: "ذهبي غامق",
    englishColor: "Dark golden",
    frenchColor: "Doré foncé",
    tasteProfile: "حلو مع نكهة الأوكالبتوس المميزة",
    englishTasteProfile: "Sweet with a distinctive eucalyptus flavor",
    frenchTasteProfile: "Sucré avec une saveur d'eucalyptus distinctive",
    harvestSeason: "الصيف",
    englishHarvestSeason: "Summer",
    frenchHarvestSeason: "Été"
  },
  8: {
    id: 8,
    name: "عسل الزقوم",
    arabicName: "عسل الزقوم",
    englishName: "Zaqum Honey",
    frenchName: "Miel de Zaqum",
    description: "عسل الزقوم يتميز بنكهته المميزة وفوائده الصحية المتعددة.",
    englishDescription: "Zaqum honey is distinguished by its unique flavor and multiple health benefits.",
    frenchDescription: "Le miel de zaqum se distingue par sa saveur unique et ses multiples bienfaits pour la santé.",
    image: zkoum,
    benefits: [
      {
        ar: "يساعد في علاج مشاكل الجهاز الهضمي",
        en: "Helps treat digestive issues",
        fr: "Aide à traiter les problèmes digestifs"
      },
      {
        ar: "مضاد للأكسدة",
        en: "Antioxidant",
        fr: "Antioxydant"
      },
      {
        ar: "يعزز صحة البشرة",
        en: "Promotes skin health",
        fr: "Favorise la santé de la peau"
      }
    ],
    sizes: [
      { quantity: "ربع كيلو", price: 80 },
      { quantity: "نصف كيلو", price: 150 },
      { quantity: "1 كيلو", price: 300 }
    ],
    origin: "المغرب",
    englishOrigin: "Morocco",
    frenchOrigin: "Maroc",
    texture: "كثيف",
    englishTexture: "Thick",
    frenchTexture: "Épais",
    color: "بني داكن",
    englishColor: "Dark brown",
    frenchColor: "Brun foncé",
    tasteProfile: "حلو مع نكهة قوية ومميزة",
    englishTasteProfile: "Sweet with a strong and distinctive flavor",
    frenchTasteProfile: "Sucré avec une saveur forte et distinctive",
    harvestSeason: "الخريف",
    englishHarvestSeason: "Autumn",
    frenchHarvestSeason: "Automne"
  },
  9: {
    id: 9,
    name: "العكبر",
    arabicName: "العكبر",
    englishName: "Propolis",
    frenchName: "Propolis",
    description: "العكبر يُعرف بفوائده الصحية المتعددة.",
    englishDescription: "Propolis is known for its numerous health benefits.",
    frenchDescription: "La propolis est connue pour ses nombreux bienfaits pour la santé.",
    image: l3gber,
    benefits: [
      {
        ar: "مضاد للبكتيريا والفيروسات",
        en: "Antibacterial and antiviral",
        fr: "Antibactérien et antiviral"
      },
      {
        ar: "يعزز جهاز المناعة",
        en: "Boosts the immune system",
        fr: "Renforce le système immunitaire"
      },
      {
        ar: "مضاد للالتهابات",
        en: "Anti-inflammatory",
        fr: "Anti-inflammatoire"
      }
    ],
    sizes: [
      { quantity: "1 غرام", price: 7 },
      { quantity: "10 غرام", price: 70 },
      { quantity: "50 غرام", price: 350 }
    ],
    origin: "المغرب",
    englishOrigin: "Morocco",
    frenchOrigin: "Maroc",
    texture: "صلب",
    englishTexture: "Solid",
    frenchTexture: "Solide",
    color: "بني داكن",
    englishColor: "Dark brown",
    frenchColor: "Brun foncé",
    tasteProfile: "مر قليلاً مع نكهة راتنجية",
    englishTasteProfile: "Slightly bitter with a resinous flavor",
    frenchTasteProfile: "Légèrement amer avec une saveur résineuse",
    harvestSeason: "طوال السنة",
    englishHarvestSeason: "Year-round",
    frenchHarvestSeason: "Toute l'année"
  },
  10: {
    id: 10,
    name: "حبوب اللقاح",
    arabicName: "حبوب اللقاح",
    englishName: "Bee Pollen",
    frenchName: "Pollen d'Abeille",
    description: "حبوب اللقاح غنية بالفوائد الصحية.",
    englishDescription: "Bee pollen is rich in health benefits.",
    frenchDescription: "Le pollen d'abeille est riche en bienfaits pour la santé.",
    image: hoboub_li9a7,
    benefits: [
      {
        ar: "مصدر غني بالفيتامينات والمعادن",
        en: "Rich source of vitamins and minerals",
        fr: "Source riche en vitamines et minéraux"
      },
      {
        ar: "يعزز الطاقة والتحمل",
        en: "Boosts energy and endurance",
        fr: "Augmente l'énergie et l'endurance"
      },
      {
        ar: "يدعم صحة الجهاز المناعي",
        en: "Supports immune system health",
        fr: "Soutient la santé du système immunitaire"
      }
    ],
    sizes: [
      { quantity: "ربع كيلو", price: 100 },
      { quantity: "نصف كيلو", price: 200 },
      { quantity: "1 كيلو", price: 400 }
    ],
    origin: "المغرب",
    englishOrigin: "Morocco",
    frenchOrigin: "Maroc",
    texture: "حبيبات",
    englishTexture: "Granules",
    frenchTexture: "Granulés",
    color: "متعدد الألوان",
    englishColor: "Multi-colored",
    frenchColor: "Multicolore",
    tasteProfile: "حلو قليلاً مع نكهة زهرية",
    englishTasteProfile: "Slightly sweet with a floral flavor",
    frenchTasteProfile: "Légèrement sucré avec une saveur florale",
    harvestSeason: "الربيع والصيف",
    englishHarvestSeason: "Spring and Summer",
    frenchHarvestSeason: "Printemps et Été"
  },
  11: {
    id: 11,
    name: "زعفران",
    arabicName: "زعفران",
    englishName: "Saffron",
    frenchName: "Safran",
    description: "الزعفران يُعرف بفوائده الصحية المتعددة.",
    englishDescription: "Saffron is known for its numerous health benefits.",
    frenchDescription: "Le safran est connu pour ses nombreux bienfaits pour la santé.",
    image: z3fran,
    benefits: [
      {
        ar: "مضاد للاكتئاب",
        en: "Antidepressant",
        fr: "Antidépresseur"
      },
      {
        ar: "يحسن الذاكرة والتركيز",
        en: "Improves memory and concentration",
        fr: "Améliore la mémoire et la concentration"
      },
      {
        ar: "مضاد للأكسدة",
        en: "Antioxidant",
        fr: "Antioxydant"
      }
    ],
    sizes: [
      { quantity: "1 غرام", price: 40 },
      { quantity: "2 غرام", price: 70 },
      { quantity: "4 غرام", price: 140 }
    ],
    origin: "المغرب",
    englishOrigin: "Morocco",
    frenchOrigin: "Maroc",
    texture: "خيوط",
    englishTexture: "Threads",
    frenchTexture: "Filaments",
    color: "أحمر داكن",
    englishColor: "Deep red",
    frenchColor: "Rouge profond",
    tasteProfile: "نكهة مميزة وعطرية",
    englishTasteProfile: "Distinctive and aromatic flavor",
    frenchTasteProfile: "Saveur distinctive et aromatique",
    harvestSeason: "الخريف",
    englishHarvestSeason: "Autumn",
    frenchHarvestSeason: "Automne"
  },
  12: {
    id: 12,
    name: "أملو لوز",
    arabicName: "أملو لوز",
    englishName: "Almond Amlou",
    frenchName: "Amlou aux Amandes",
    description: "أملو اللوز غني بالفوائد الصحية.",
    englishDescription: "Almond Amlou is rich in health benefits.",
    frenchDescription: "L'Amlou aux amandes est riche en bienfaits pour la santé.",
    image: amlo_loz,
    benefits: [
      {
        ar: "غني بالبروتين والدهون الصحية",
        en: "Rich in protein and healthy fats",
        fr: "Riche en protéines et en graisses saines"
      },
      {
        ar: "يوفر الطاقة",
        en: "Provides energy",
        fr: "Fournit de l'énergie"
      },
      {
        ar: "يحسن صحة القلب",
        en: "Improves heart health",
        fr: "Améliore la santé cardiaque"
      }
    ],
    sizes: [
      { quantity: "ربع كيلو", price: 60 },
      { quantity: "نصف كيلو", price: 110 },
      { quantity: "1 كيلو", price: 220 }
    ],
    origin: "المغرب",
    englishOrigin: "Morocco",
    frenchOrigin: "Maroc",
    texture: "كريمي",
    englishTexture: "Creamy",
    frenchTexture: "Crémeux",
    color: "بني فاتح",
    englishColor: "Light brown",
    frenchColor: "Brun clair",
    tasteProfile: "حلو ولذيذ مع نكهة اللوز",
    englishTasteProfile: "Sweet and delicious with almond flavor",
    frenchTasteProfile: "Sucré et délicieux avec une saveur d'amande",
    harvestSeason: "طوال السنة",
    englishHarvestSeason: "Year-round",
    frenchHarvestSeason: "Toute l'année"
  }
};

function ProductDescription() {
  const { id } = useParams();
  const { t, language } = useLanguage();
  const { addToCart } = useCart();
  const product = products[id];
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  if (!product) {
    return <div className="container">Product not found</div>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, selectedSize });
  };

  const getLocalizedName = () => {
    switch (language) {
      case 'ar':
        return product.arabicName;
      case 'en':
        return product.englishName;
      case 'fr':
        return product.frenchName;
      default:
        return product.name;
    }
  };

  const getLocalizedDescription = () => {
    switch (language) {
      case 'ar':
        return product.description;
      case 'en':
        return product.englishDescription;
      case 'fr':
        return product.frenchDescription;
      default:
        return product.description;
    }
  };

  const getLocalizedOrigin = () => {
    switch (language) {
      case 'ar':
        return product.origin;
      case 'en':
        return product.englishOrigin;
      case 'fr':
        return product.frenchOrigin;
      default:
        return product.origin;
    }
  };

  const getLocalizedTexture = () => {
    switch (language) {
      case 'ar':
        return product.texture;
      case 'en':
        return product.englishTexture;
      case 'fr':
        return product.frenchTexture;
      default:
        return product.texture;
    }
  };

  const getLocalizedColor = () => {
    switch (language) {
      case 'ar':
        return product.color;
      case 'en':
        return product.englishColor;
      case 'fr':
        return product.frenchColor;
      default:
        return product.color;
    }
  };

  const getLocalizedTasteProfile = () => {
    switch (language) {
      case 'ar':
        return product.tasteProfile;
      case 'en':
        return product.englishTasteProfile;
      case 'fr':
        return product.frenchTasteProfile;
      default:
        return product.tasteProfile;
    }
  };

  const getLocalizedHarvestSeason = () => {
    switch (language) {
      case 'ar':
        return product.harvestSeason;
      case 'en':
        return product.englishHarvestSeason;
      case 'fr':
        return product.frenchHarvestSeason;
      default:
        return product.harvestSeason;
    }
  };

  return (
    <div className="product-description">
      <div className="container">
        <div className="product-details">
          <img src={product.image} alt={getLocalizedName()} />
          <div className="product-info">
            <h2>{getLocalizedName()}</h2>
            <p className="description">{getLocalizedDescription()}</p>
            <div className="benefits">
              <h3>{t('benefits')}</h3>
              <ul>
                {product.benefits.map((benefit, index) => (
                  <li key={index}>{benefit[language]}</li>
                ))}
              </ul>
            </div>
            <div className="additional-info">
              <p><strong>{t('origin')}:</strong> {getLocalizedOrigin()}</p>
              <p><strong>{t('texture')}:</strong> {getLocalizedTexture()}</p>
              <p><strong>{t('color')}:</strong> {getLocalizedColor()}</p>
              <p><strong>{t('tasteProfile')}:</strong> {getLocalizedTasteProfile()}</p>
              <p><strong>{t('harvestSeason')}:</strong> {getLocalizedHarvestSeason()}</p>
            </div>
            <div className="sizes">
              <h3>{t('sizes')}</h3>
              <select 
                value={selectedSize.quantity}
                onChange={(e) => setSelectedSize(product.sizes.find(s => s.quantity === e.target.value))}
              >
                {product.sizes.map((size) => (
                  <option key={size.quantity} value={size.quantity}>
                    {size.quantity} - {size.price} dhs
                  </option>
                ))}
              </select>
            </div>
            <button className="add-to-cart" onClick={handleAddToCart}>
              {t('addToCart')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;

