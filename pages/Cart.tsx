import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { CheckCircle } from 'lucide-react';

export const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useShop();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-start py-12 px-4 bg-white max-w-[1500px] mx-auto">
        <div className="bg-white p-8 rounded-lg w-full max-w-4xl flex items-center gap-8 shadow-sm border border-gray-100">
             <div className="w-64">
                <img src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg" alt="Empty Cart" className="w-full" />
             </div>
             <div>
                <h2 className="text-2xl font-bold text-[#0F1111] mb-2">Your Shopping Mart Cart is empty</h2>
                <Link to="/" className="text-[#007185] hover:text-[#C7511F] hover:underline text-sm font-medium">Shop today's deals</Link>
                <div className="mt-4 flex gap-3">
                    <Link 
                    to="/" 
                    className="px-4 py-2 amazon-button-yellow rounded-lg text-sm shadow-sm"
                    >
                    Sign in to your account
                    </Link>
                    <Link 
                    to="/" 
                    className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 shadow-sm"
                    >
                    Sign up now
                    </Link>
                </div>
             </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#E3E6E6] py-6 px-4">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Left Column: Cart Items */}
        <div className="lg:col-span-3 bg-white p-6 rounded-sm shadow-sm">
          <h1 className="text-3xl font-medium text-[#0F1111] mb-1">Shopping Cart</h1>
          <p className="text-sm link-blue mb-4 border-b border-gray-200 pb-2 text-right">Price</p>
          
          <div className="space-y-6">
            {cart.map(item => (
              <div key={item.id} className="flex gap-4 border-b border-gray-200 pb-6 last:border-0">
                <div className="w-32 h-32 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                </div>
                
                <div className="flex-grow">
                   <div className="flex justify-between">
                       <Link to={`/product/${item.id}`}>
                         <h3 className="font-medium text-lg text-[#0F1111] link-blue line-clamp-2 w-3/4">{item.name}</h3>
                       </Link>
                       <span className="font-bold text-lg text-[#0F1111]">₹{item.price.toFixed(2)}</span>
                   </div>
                   
                   <p className="text-xs text-[#007600] mb-1">In Stock</p>
                   <p className="text-xs text-[#565959] mb-2">Eligible for FREE Shipping</p>
                   <div className="flex items-center gap-2 mb-2">
                        <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png" alt="Fulfilled by Shopping Mart" className="h-4" />
                   </div>

                   <div className="flex items-center gap-4 mt-2">
                       <div className="flex items-center border border-gray-300 rounded-md shadow-sm bg-[#F0F2F2]">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-l-md text-sm">-</button>
                          <span className="px-4 py-1 bg-white text-sm border-x border-gray-300">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-r-md text-sm">+</button>
                       </div>
                       <div className="h-4 border-l border-gray-300"></div>
                       <button onClick={() => removeFromCart(item.id)} className="text-xs text-[#007185] hover:underline">Delete</button>
                       <div className="h-4 border-l border-gray-300"></div>
                       <button className="text-xs text-[#007185] hover:underline">Save for later</button>
                       <div className="h-4 border-l border-gray-300"></div>
                       <button className="text-xs text-[#007185] hover:underline">See more like this</button>
                   </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 text-right">
              <span className="text-lg">Subtotal ({cartCount} items): </span>
              <span className="text-lg font-bold">₹{cartTotal.toFixed(2)}</span>
          </div>
        </div>

        {/* Right Column: Checkout Box */}
        <div className="lg:col-span-1">
          <div className="bg-white p-4 rounded-sm shadow-sm sticky top-4">
             <div className="flex items-center gap-2 text-[#067D62] text-sm mb-4">
                 <CheckCircle size={16} fill="#067D62" stroke="white" />
                 <span>Part of your order qualifies for FREE Delivery.</span>
             </div>
             
             <div className="mb-4 text-lg">
                <span>Subtotal ({cartCount} items): </span>
                <span className="font-bold">₹{cartTotal.toFixed(2)}</span>
             </div>

             <div className="flex items-center gap-2 mb-4">
                 <input type="checkbox" className="rounded text-[#e77600] focus:ring-[#e77600]" />
                 <span className="text-sm">This order contains a gift</span>
             </div>

             <button 
                onClick={() => navigate('/checkout')}
                className="w-full amazon-button-yellow py-2 rounded-lg shadow-sm text-sm"
             >
                 Proceed to Buy
             </button>
          </div>
          
          {/* Recommendations Box Simulated */}
          <div className="bg-white p-4 rounded-sm shadow-sm mt-4">
              <h3 className="font-bold text-sm mb-2">Recommended for you</h3>
              <div className="flex gap-2">
                  <div className="w-16 h-16 bg-gray-100"></div>
                  <div className="flex-1">
                      <div className="text-xs link-blue line-clamp-2">Understanding Shopping Mart Designs</div>
                      <div className="text-xs text-[#B12704] font-medium">₹299.00</div>
                      <button className="text-xs amazon-button-yellow px-2 py-0.5 rounded-full mt-1 border border-[#FCD200]">Add to Cart</button>
                  </div>
              </div>
          </div>
        </div>

      </div>
    </div>
  );
};