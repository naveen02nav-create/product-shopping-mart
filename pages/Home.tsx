import React, { useState } from 'react';
import { MOCK_PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { AIAssistant } from '../components/AIAssistant';

export const Home = () => {
  const [category, setCategory] = useState('All');
  const categories = ['All', ...Array.from(new Set(MOCK_PRODUCTS.map(p => p.category)))];

  const filteredProducts = MOCK_PRODUCTS.filter(product => {
    return category === 'All' || product.category === category;
  });

  return (
    <div className="min-h-screen pb-20 bg-[#E3E6E6]">
      {/* Banner Section */}
      <div className="relative w-full max-w-[1500px] mx-auto">
        <div className="relative bg-gradient-to-t from-[#E3E6E6] to-transparent h-64 md:h-80 w-full z-10 -mb-32 md:-mb-40 pointer-events-none"></div>
        <div className="bg-gray-800 h-64 md:h-80 w-full overflow-hidden flex items-center justify-center">
            {/* Simulated Carousel Image */}
            <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-80"></div>
        </div>
      </div>

      <div className="relative z-20 max-w-[1500px] mx-auto px-4 sm:px-6">
        {/* Category Chips (Simulated as a card) */}
        <div className="flex gap-4 overflow-x-auto pb-4 mb-4 scrollbar-hide">
             {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors shadow-sm ${
                  category === cat 
                    ? 'bg-white text-[#007185] border-b-2 border-[#007185]' 
                    : 'bg-white text-gray-700 hover:text-[#C7511F]'
                }`}
              >
                {cat}
              </button>
            ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
          {/* Filler cards to make the grid look full */}
           <div className="bg-white p-4 flex flex-col justify-center items-center text-center gap-2 rounded-sm border border-gray-200">
               <h3 className="font-bold text-xl">Sign in for your best experience</h3>
               <button className="amazon-button-yellow w-full py-2 rounded-md text-sm shadow-sm">Sign in securely</button>
           </div>
        </div>
      </div>
      <AIAssistant />
    </div>
  );
};