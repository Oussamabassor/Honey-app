import React, { useState } from 'react';
import '../styles/Cart.css';
import { useLanguage } from '../src/LanguageContext';
import { useCart } from '../src/CartContext';
import { ShoppingBag, X, Plus, Minus, Trash2 } from 'lucide-react';

function Cart() {
  const { t } = useLanguage();
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.selectedSize.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <>
      <button className="cart-toggle" onClick={toggleCart}>
        <ShoppingBag className="cart-icon" />
        <span className="cart-count">{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
      </button>

      {isOpen && (
        <div className="cart-overlay" onClick={toggleCart}>
          <div className="cart" onClick={e => e.stopPropagation()}>
            <div className="cart-header">
              <h2>{t('yourCart')}</h2>
              <button className="close-cart" onClick={toggleCart}>
                <X size={24} />
              </button>
            </div>

            {cartItems.length === 0 ? (
              <div className="cart-empty">
                <ShoppingBag size={48} />
                <p>{t('cartEmpty')}</p>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {cartItems.map(item => (
                    <div key={`${item.id}-${item.selectedSize.quantity}`} className="cart-item">
                      <div className="item-image">
                        <img src={item.image} alt={t(item.name)} />
                      </div>
                      <div className="item-details">
                        <div className="item-header">
                          <h3>{t(item.name)}</h3>
                          <button 
                            className="remove-item" 
                            onClick={() => removeFromCart(item.id, item.selectedSize.quantity)}
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                        <p className="item-size">{item.selectedSize.quantity}</p>
                        <div className="item-price-quantity">
                          <span className="item-price">{item.selectedSize.price} {t('currency')}</span>
                          <div className="quantity-controls">
                            <button 
                              onClick={() => updateQuantity(item.id, item.selectedSize.quantity, Math.max(1, item.quantity - 1))}
                              className="quantity-btn"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="quantity-display">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.selectedSize.quantity, item.quantity + 1)}
                              className="quantity-btn"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="cart-footer">
                  <div className="cart-summary">
                    <div className="summary-row">
                      <span>{t('subtotal')}</span>
                      <span>{subtotal.toFixed(2)} {t('currency')}</span>
                    </div>
                    <div className="summary-row">
                      <span>{t('tax')}</span>
                      <span>{tax.toFixed(2)} {t('currency')}</span>
                    </div>
                    <div className="summary-row total">
                      <span>{t('total')}</span>
                      <span>{total.toFixed(2)} {t('currency')}</span>
                    </div>
                  </div>

                  <div className="cart-actions">
                    <button className="checkout-button">
                      <span>{t('proceedToCheckout')}</span>
                      <span className="checkout-total">{total.toFixed(2)} {t('currency')}</span>
                    </button>
                    <button className="clear-cart" onClick={clearCart}>
                      <Trash2 size={18} />
                      <span>{t('clearCart')}</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;