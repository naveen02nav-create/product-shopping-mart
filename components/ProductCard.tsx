import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Product } from '../types';
import { useShop } from '../context/ShopContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useShop();

  // Helper to split price for formatting
  const priceParts = product.price.toFixed(2).split('.');

  return (
    <div className="bg-white border border-gray-200 flex flex-col h-full hover:shadow-lg transition-shadow duration-200 rounded-sm overflow-hidden">
      <Link to={`/product/${product.id}`} className="block relative bg-gray-50 p-4 pb-0 flex items-center justify-center h-52">
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-contain max-h-48 w-full mix-blend-multiply"
        />
      </Link>
      
      <div className="p-3 flex flex-col flex-grow">
        <Link to={`/product/${product.id}`} className="mb-1 group">
          <h3 className="text-base font-medium text-[#0F1111] group-hover:text-[#C7511F] line-clamp-3 leading-snug">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center gap-1 mb-1">
          <div className="flex text-[#F0C14B]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} strokeWidth={i < Math.floor(product.rating) ? 0 : 1} className={i < Math.floor(product.rating) ? "" : "text-[#F0C14B]"} />
            ))}
          </div>
          <span className="text-xs text-[#007185] hover:text-[#C7511F] hover:underline cursor-pointer">{product.reviews}</span>
        </div>

        <div className="mb-2">
          <span className="text-xs align-top font-medium">₹</span>
          <span className="text-2xl font-medium text-[#0F1111]">{priceParts[0]}</span>
          <span className="text-xs align-top font-medium">{priceParts[1]}</span>
        </div>

        <div className="text-xs text-[#565959] mb-3">
          Get it by <span className="font-bold text-[#0F1111]">Tomorrow, 8PM</span>
          <br/>
          FREE Delivery by Amazon
        </div>
        
        <div className="mt-auto">
          <button 
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="w-full text-sm py-1.5 rounded-full amazon-button-yellow text-[#0F1111] shadow-sm hover:shadow active:scale-[0.98] transition-all"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};