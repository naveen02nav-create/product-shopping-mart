import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { SHIPPING_COST, TAX_RATE } from '../constants';
import { CheckCircle, Lock } from 'lucide-react';

export const Checkout = () => {
  const { 
    cart, cartTotal, checkoutState, setCheckoutStep, 
    updateShipping, updatePayment, clearCart, resetCheckout
  } = useShop();
  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length === 0 && checkoutState.step !== 'CONFIRMATION') {
      navigate('/');
    }
  }, [cart, navigate, checkoutState.step]);

  const subtotal = cartTotal;
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax + SHIPPING_COST;

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutStep('PAYMENT');
    window.scrollTo(0, 0);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutStep('REVIEW');
    window.scrollTo(0, 0);
  };

  const handlePlaceOrder = () => {
    setCheckoutStep('CONFIRMATION');
    clearCart();
    window.scrollTo(0, 0);
  };

  if (checkoutState.step === 'CONFIRMATION') {
    return (
      <div className="min-h-screen flex flex-col items-center justify-start pt-12 bg-white px-4 text-center">
        <div className="text-[#067D62] mb-4">
          <CheckCircle size={64} />
        </div>
        <h1 className="text-2xl font-bold text-[#0F1111] mb-2">Order placed, thank you!</h1>
        <p className="text-[#565959] mb-6">
          Confirmation will be sent to your email.
        </p>
        <div className="bg-[#F0F2F2] p-4 rounded-md w-full max-w-md text-left mb-6">
            <p className="font-bold text-sm mb-1">Shipping to:</p>
            <p className="text-sm">{checkoutState.shipping.fullName}</p>
            <p className="text-sm">{checkoutState.shipping.address}</p>
        </div>
        <button 
          onClick={() => {
            resetCheckout();
            navigate('/');
          }}
          className="px-6 py-2 amazon-button-yellow rounded-lg text-sm shadow-sm"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Checkout Header */}
      <div className="bg-gradient-to-b from-[#f7f7f7] to-[#e7e7e7] border-b border-[#aeb1b1] py-3 px-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">Product<span className="text-sm font-normal">ShoppingMart</span> <span className="text-xl font-normal text-[#565959]">Checkout</span></div>
          <div className="text-[#565959] text-sm flex items-center gap-1">
              <Lock size={14} />
              Secure Checkout
          </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Main Column - Accordion Style */}
        <div className="lg:col-span-2 space-y-4">
            
            {/* Step 1: Shipping */}
            <div className={`border rounded-md ${checkoutState.step === 'SHIPPING' ? 'border-[#d5d9d9]' : 'border-transparent'}`}>
                <div className="flex gap-4 p-4">
                    <span className={`font-bold ${checkoutState.step === 'SHIPPING' ? 'text-[#c45500]' : 'text-[#565959]'}`}>1</span>
                    <div className="flex-grow">
                         <h2 className={`font-bold ${checkoutState.step === 'SHIPPING' ? 'text-[#c45500]' : 'text-[#0F1111]'}`}>Delivery Address</h2>
                         {checkoutState.step !== 'SHIPPING' && (
                             <div className="text-sm mt-1 text-[#0F1111]">
                                 {checkoutState.shipping.fullName}, {checkoutState.shipping.address}...
                             </div>
                         )}
                    </div>
                    {checkoutState.step !== 'SHIPPING' && (
                        <button onClick={() => setCheckoutStep('SHIPPING')} className="text-sm link-blue hover:underline">Change</button>
                    )}
                </div>

                {checkoutState.step === 'SHIPPING' && (
                    <div className="px-4 pb-4 ml-8">
                         <form onSubmit={handleShippingSubmit} className="space-y-4 max-w-md">
                            <div>
                                <label className="block text-sm font-bold text-[#0F1111] mb-1">Full name</label>
                                <input required type="text" value={checkoutState.shipping.fullName} onChange={e => updateShipping({...checkoutState.shipping, fullName: e.target.value})} className="w-full border border-[#888c8c] rounded-[3px] px-2 py-1.5 focus:border-[#e77600] focus:ring-1 focus:ring-[#e77600] shadow-[0_1px_2px_rgba(15,17,17,0.15)_inset] outline-none"/>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-[#0F1111] mb-1">Address</label>
                                <input required type="text" value={checkoutState.shipping.address} onChange={e => updateShipping({...checkoutState.shipping, address: e.target.value})} className="w-full border border-[#888c8c] rounded-[3px] px-2 py-1.5 focus:border-[#e77600] focus:ring-1 focus:ring-[#e77600] shadow-[0_1px_2px_rgba(15,17,17,0.15)_inset] outline-none"/>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-[#0F1111] mb-1">City</label>
                                    <input required type="text" value={checkoutState.shipping.city} onChange={e => updateShipping({...checkoutState.shipping, city: e.target.value})} className="w-full border border-[#888c8c] rounded-[3px] px-2 py-1.5 focus:border-[#e77600] focus:ring-1 focus:ring-[#e77600] shadow-[0_1px_2px_rgba(15,17,17,0.15)_inset] outline-none"/>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-[#0F1111] mb-1">ZIP Code</label>
                                    <input required type="text" value={checkoutState.shipping.postalCode} onChange={e => updateShipping({...checkoutState.shipping, postalCode: e.target.value})} className="w-full border border-[#888c8c] rounded-[3px] px-2 py-1.5 focus:border-[#e77600] focus:ring-1 focus:ring-[#e77600] shadow-[0_1px_2px_rgba(15,17,17,0.15)_inset] outline-none"/>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-[#0F1111] mb-1">Phone</label>
                                <input required type="tel" value={checkoutState.shipping.phone} onChange={e => updateShipping({...checkoutState.shipping, phone: e.target.value})} className="w-full border border-[#888c8c] rounded-[3px] px-2 py-1.5 focus:border-[#e77600] focus:ring-1 focus:ring-[#e77600] shadow-[0_1px_2px_rgba(15,17,17,0.15)_inset] outline-none"/>
                            </div>
                            <button type="submit" className="amazon-button-yellow px-4 py-1.5 rounded-lg text-sm shadow-sm">Use this address</button>
                         </form>
                    </div>
                )}
            </div>

            {/* Step 2: Payment */}
             <div className={`border rounded-md ${checkoutState.step === 'PAYMENT' ? 'border-[#d5d9d9]' : 'border-transparent'}`}>
                <div className="flex gap-4 p-4">
                    <span className={`font-bold ${checkoutState.step === 'PAYMENT' ? 'text-[#c45500]' : 'text-[#565959]'}`}>2</span>
                    <div className="flex-grow">
                         <h2 className={`font-bold ${checkoutState.step === 'PAYMENT' ? 'text-[#c45500]' : 'text-[#0F1111]'}`}>Payment method</h2>
                         {checkoutState.step === 'REVIEW' && (
                             <div className="text-sm mt-1 text-[#0F1111]">
                                 Ending in {checkoutState.payment.cardNumber.slice(-4)}
                             </div>
                         )}
                    </div>
                     {checkoutState.step === 'REVIEW' && (
                        <button onClick={() => setCheckoutStep('PAYMENT')} className="text-sm link-blue hover:underline">Change</button>
                    )}
                </div>

                {checkoutState.step === 'PAYMENT' && (
                    <div className="px-4 pb-4 ml-8">
                        <form onSubmit={handlePaymentSubmit} className="space-y-4 max-w-md">
                            <div className="flex items-center gap-2 mb-2 p-3 border border-[#d5d9d9] bg-gray-50 rounded-md">
                                <input type="radio" checked readOnly className="text-[#e77600] focus:ring-[#e77600]" />
                                <span className="text-sm font-bold">Credit or Debit Card</span>
                            </div>
                            <div className="pl-6 space-y-3">
                                <input required type="text" placeholder="Card number" value={checkoutState.payment.cardNumber} onChange={e => {
                                    let val = e.target.value.replace(/\D/g, '');
                                    val = val.replace(/(\d{4})(?=\d)/g, '$1 ');
                                    updatePayment({...checkoutState.payment, cardNumber: val});
                                }} className="w-full border border-[#888c8c] rounded-[3px] px-2 py-1.5 outline-none"/>
                                
                                <div className="grid grid-cols-2 gap-4">
                                     <input required type="text" placeholder="Name on card" value={checkoutState.payment.nameOnCard} onChange={e => updatePayment({...checkoutState.payment, nameOnCard: e.target.value})} className="w-full border border-[#888c8c] rounded-[3px] px-2 py-1.5 outline-none"/>
                                     <div className="flex gap-2">
                                        <input required type="text" placeholder="MM/YY" maxLength={5} value={checkoutState.payment.expiry} onChange={e => updatePayment({...checkoutState.payment, expiry: e.target.value})} className="w-full border border-[#888c8c] rounded-[3px] px-2 py-1.5 outline-none"/>
                                        <input required type="password" placeholder="CVV" maxLength={3} value={checkoutState.payment.cvc} onChange={e => updatePayment({...checkoutState.payment, cvc: e.target.value})} className="w-full border border-[#888c8c] rounded-[3px] px-2 py-1.5 outline-none"/>
                                     </div>
                                </div>
                            </div>
                            <button type="submit" className="amazon-button-yellow px-4 py-1.5 rounded-lg text-sm shadow-sm">Use this payment method</button>
                        </form>
                    </div>
                )}
             </div>

             {/* Step 3: Review */}
             <div className={`border rounded-md ${checkoutState.step === 'REVIEW' ? 'border-[#d5d9d9]' : 'border-transparent'}`}>
                <div className="flex gap-4 p-4">
                    <span className={`font-bold ${checkoutState.step === 'REVIEW' ? 'text-[#c45500]' : 'text-[#565959]'}`}>3</span>
                    <div className="flex-grow">
                         <h2 className={`font-bold ${checkoutState.step === 'REVIEW' ? 'text-[#c45500]' : 'text-[#0F1111]'}`}>Review items and delivery</h2>
                    </div>
                </div>

                {checkoutState.step === 'REVIEW' && (
                    <div className="px-4 pb-4 ml-8">
                        <div className="border border-[#d5d9d9] rounded-md p-4 mb-4">
                            {cart.map(item => (
                                <div key={item.id} className="flex gap-4 mb-4 last:mb-0">
                                    <img src={item.image} className="w-16 h-16 object-contain" alt="" />
                                    <div>
                                        <div className="font-bold text-sm">{item.name}</div>
                                        <div className="text-[#B12704] font-bold text-sm">₹{item.price.toFixed(2)}</div>
                                        <div className="text-xs">Qty: {item.quantity}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button onClick={handlePlaceOrder} className="w-full md:w-auto amazon-button-yellow px-6 py-2 rounded-lg text-sm shadow-sm">Place your order</button>
                         <div className="mt-2 text-xs text-[#565959]">
                            By placing your order, you agree to Product Shopping Mart's privacy notice and conditions of use.
                        </div>
                    </div>
                )}
             </div>

        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1">
            <div className="border border-[#d5d9d9] rounded-md p-4 sticky top-4 bg-white">
                <button 
                  onClick={handlePlaceOrder}
                  disabled={checkoutState.step !== 'REVIEW'} 
                  className={`w-full py-2 rounded-lg text-sm shadow-sm mb-4 ${checkoutState.step === 'REVIEW' ? 'amazon-button-yellow' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
                >
                    Place your order
                </button>
                <h3 className="font-bold text-lg mb-2">Order Summary</h3>
                <div className="text-sm space-y-1">
                    <div className="flex justify-between">
                        <span>Items:</span>
                        <span>₹{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Delivery:</span>
                        <span>₹{SHIPPING_COST.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Total:</span>
                        <span>₹{total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-[#B12704] text-lg border-t border-[#d5d9d9] pt-2 mt-2">
                        <span>Order Total:</span>
                        <span>₹{total.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};