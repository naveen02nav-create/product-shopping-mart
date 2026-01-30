import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem, Product, CheckoutState, ShippingInfo, PaymentInfo } from '../types';

interface ShopContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  
  checkoutState: CheckoutState;
  setCheckoutStep: (step: CheckoutState['step']) => void;
  updateShipping: (info: ShippingInfo) => void;
  updatePayment: (info: PaymentInfo) => void;
  resetCheckout: () => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

const INITIAL_CHECKOUT_STATE: CheckoutState = {
  step: 'SHIPPING',
  shipping: { fullName: '', address: '', city: '', postalCode: '', phone: '' },
  payment: { cardNumber: '', expiry: '', cvc: '', nameOnCard: '' },
};

export const ShopProvider = ({ children }: React.PropsWithChildren) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [checkoutState, setCheckoutState] = useState<CheckoutState>(INITIAL_CHECKOUT_STATE);

  // Load cart from local storage on mount (optional enhancement, kept simple here)
  
  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev => prev.map(item => 
      item.id === productId ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  const setCheckoutStep = (step: CheckoutState['step']) => {
    setCheckoutState(prev => ({ ...prev, step }));
  };

  const updateShipping = (info: ShippingInfo) => {
    setCheckoutState(prev => ({ ...prev, shipping: info }));
  };

  const updatePayment = (info: PaymentInfo) => {
    setCheckoutState(prev => ({ ...prev, payment: info }));
  };
  
  const resetCheckout = () => {
    setCheckoutState(INITIAL_CHECKOUT_STATE);
  };

  return (
    <ShopContext.Provider value={{
      cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount,
      checkoutState, setCheckoutStep, updateShipping, updatePayment, resetCheckout
    }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (!context) throw new Error("useShop must be used within a ShopProvider");
  return context;
};