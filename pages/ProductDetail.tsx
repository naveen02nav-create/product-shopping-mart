import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../constants';
import { useShop } from '../context/ShopContext';
import { Star, MapPin, Lock, ArrowLeft } from 'lucide-react';
import { AIAssistant } from '../components/AIAssistant';

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useShop();
  
  const product = MOCK_PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4 bg-white">
        <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
        <button onClick={() => navigate('/')} className="text-[#007185] font-medium hover:underline">
          Back to Shopping Mart
        </button>
      </div>
    );
  }

  const priceParts = product.price.toFixed(2).split('.');

  return (
    <div className="min-h-screen bg-white">
      {/* Sub-nav back button */}
      <div className="bg-[#f0f2f2] border-b border-gray-200 py-2 px-4 text-sm text-[#565959]">
        <button onClick={() => navigate(-1)} className="hover:underline flex items-center">
            <ArrowLeft size={14} className="mr-1"/> Back to results
        </button>
      </div>

      <div className="max-w-[1500px] mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Column: Images */}
          <div className="lg:w-5/12 sticky top-4 self-start">
             <div className="flex gap-4">
                 <div className="flex flex-col gap-3">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className={`w-12 h-12 border rounded-md overflow-hidden cursor-pointer hover:shadow-md ${i===0 ? 'border-[#e77600] shadow-sm' : 'border-gray-200'}`}>
                             <img src={product.image} className="w-full h-full object-contain p-1" alt="" />
                        </div>
                    ))}
                 </div>
                 <div className="flex-grow">
                    <img src={product.image} alt={product.name} className="w-full max-h-[500px] object-contain" />
                 </div>
             </div>
          </div>

          {/* Middle Column: Details */}
          <div className="lg:w-4/12">
            <h1 className="text-2xl font-medium text-[#0F1111] mb-2 leading-tight">{product.name}</h1>
            
            <div className="flex items-center gap-2 mb-2 text-sm">
                <div className="flex text-[#F0C14B] text-sm">
                    {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} className={i < Math.floor(product.rating) ? "" : "text-[#F0C14B]"} />
                    ))}
                </div>
                <span className="link-blue cursor-pointer">{product.reviews} ratings</span>
            </div>
            
            <div className="border-t border-b border-gray-200 py-3 mb-4">
                <div className="flex items-start gap-1">
                    <span className="text-sm mt-1">₹</span>
                    <span className="text-3xl font-medium text-[#0F1111]">{priceParts[0]}</span>
                    <span className="text-sm mt-1">{priceParts[1]}</span>
                </div>
                <div className="text-sm text-[#565959]">Inclusive of all taxes</div>
            </div>

            {/* Simulated Offers */}
            <div className="mb-6">
                <h3 className="font-bold text-[#0F1111] mb-2">Offers</h3>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="min-w-[140px] border border-gray-300 rounded-md p-2 shadow-sm">
                            <h4 className="font-bold text-sm mb-1">Bank Offer</h4>
                            <p className="text-xs text-[#565959] line-clamp-2">Upto ₹500.00 discount on select Credit Cards</p>
                            <span className="text-xs link-blue font-medium mt-1 block">2 offers &gt;</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Description */}
            <div className="mb-8">
                <h3 className="font-bold text-[#0F1111] mb-2">About this item</h3>
                <ul className="list-disc pl-5 text-sm text-[#0F1111] space-y-1">
                    {product.description.split('. ').map((point, i) => (
                        point && <li key={i}>{point}.</li>
                    ))}
                    <li>Premium quality build designed for longevity.</li>
                    <li>Official warranty covered by manufacturer.</li>
                </ul>
            </div>
          </div>

          {/* Right Column: Buy Box */}
          <div className="lg:w-3/12">
            <div className="border border-[#d5d9d9] rounded-lg p-4 shadow-sm bg-white sticky top-24">
                <div className="flex items-start gap-1 mb-2">
                    <span className="text-sm mt-1">₹</span>
                    <span className="text-2xl font-medium text-[#0F1111]">{priceParts[0]}</span>
                    <span className="text-sm mt-1">{priceParts[1]}</span>
                </div>

                <div className="text-sm text-[#007185] mb-2">
                    FREE delivery <span className="text-[#0F1111] font-bold">Tomorrow, 8 PM</span>.
                    <br/>
                    <span className="link-blue">Details</span>
                </div>

                <div className="flex items-center gap-1 text-sm text-[#007185] mb-4">
                    <MapPin size={16} />
                    <span>Deliver to India</span>
                </div>

                <div className="text-lg text-[#007600] font-medium mb-4">In Stock</div>

                <div className="space-y-3">
                    <button 
                        onClick={() => addToCart(product)}
                        className="w-full amazon-button-yellow rounded-full py-2 text-sm shadow-sm hover:shadow"
                    >
                        Add to Cart
                    </button>
                    <button 
                         onClick={() => {
                             addToCart(product);
                             navigate('/cart');
                         }}
                        className="w-full amazon-button-orange rounded-full py-2 text-sm shadow-sm hover:shadow"
                    >
                        Buy Now
                    </button>
                </div>

                <div className="text-xs text-[#565959] mt-4 space-y-1">
                    <div className="flex">
                        <span className="w-24 text-[#565959]">Ships from</span>
                        <span className="text-[#0F1111]">Product Shopping Mart</span>
                    </div>
                    <div className="flex">
                        <span className="w-24 text-[#565959]">Sold by</span>
                        <span className="link-blue">Appario Retail Private Ltd</span>
                    </div>
                </div>

                 <div className="flex items-center gap-2 mt-4 text-xs text-[#007185]">
                     <Lock size={12} />
                     <span>Secure transaction</span>
                 </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* AI Assistant Context */}
      <AIAssistant product={product} />
    </div>
  );
};