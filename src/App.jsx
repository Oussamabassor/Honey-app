import React from "react";
import { createBrowserRouter, RouterProvider, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ProductsGrid from "./components/ProductsGrid";
import ProductDescription from "./components/ProductDescription";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import "./App.css";
import { LanguageProvider } from './src/LanguageContext';
import { CartProvider } from './src/CartContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsGrid />} />
          <Route path="/product/:id" element={<ProductDescription />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Cart />
        <Footer />
      </>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsGrid /> },
      { path: "/product/:id", element: <ProductDescription /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
], {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});

function App() {
  return (
    <LanguageProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </LanguageProvider>
  );
}

export default App;

