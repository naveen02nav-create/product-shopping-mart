import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, MapPin } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Navbar = () => {
  const { cartCount } = useShop();

  return (
    <div className="flex flex-col z-50">
      {/* Main Header */}
      <nav className="bg-[#131921] text-white py-2">
        <div className="flex items-center gap-2 px-4 flex-wrap md:flex-nowrap">
          {/* Logo */}
          <Link to="/" className="flex items-start pt-2 px-2 hover:outline hover:outline-1 hover:outline-white rounded-sm mr-2">
            <span className="text-xl md:text-2xl font-bold tracking-tight leading-none">
              Product<span className="text-sm font-normal">ShoppingMart</span>
            </span>
          </Link>

          {/* Location (Hidden on small mobile) */}
          <div className="hidden md:flex flex-col items-start px-2 hover:outline hover:outline-1 hover:outline-white rounded-sm cursor-pointer leading-tight">
            <span className="text-gray-300 text-xs ml-4">Deliver to</span>
            <div className="flex items-center font-bold text-sm">
              <MapPin size={15} className="mr-1" />
              <span>India</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-grow flex h-10 rounded-md overflow-hidden mx-4 focus-within:ring-3 focus-within:ring-[#fa8900]">
            <button className="bg-[#f3f3f3] text-gray-600 px-3 text-xs border-r border-gray-300 hover:bg-[#dadada] transition-colors hidden sm:block">
              All
            </button>
            <input 
              type="text" 
              className="flex-grow px-3 text-black outline-none placeholder-gray-500"
              placeholder="Search Product Shopping Mart"
            />
            <button className="bg-[#febd69] hover:bg-[#f3a847] px-4 flex items-center justify-center text-gray-800 transition-colors">
              <Search size={22} />
            </button>
          </div>

          {/* Account & Lists */}
          <div className="hidden sm:flex flex-col items-start px-2 hover:outline hover:outline-1 hover:outline-white rounded-sm cursor-pointer leading-tight">
            <span className="text-xs text-white">Hello, sign in</span>
            <span className="font-bold text-sm">Account & Lists</span>
          </div>

          {/* Returns & Orders */}
          <div className="hidden sm:flex flex-col items-start px-2 hover:outline hover:outline-1 hover:outline-white rounded-sm cursor-pointer leading-tight">
            <span className="text-xs text-white">Returns</span>
            <span className="font-bold text-sm">& Orders</span>
          </div>

          {/* Cart */}
          <Link to="/cart" className="flex items-end px-2 hover:outline hover:outline-1 hover:outline-white rounded-sm relative pb-1">
            <div className="relative">
              <ShoppingCart size={32} />
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-[#f08804] font-bold text-base">
                {cartCount}
              </span>
            </div>
            <span className="font-bold text-sm mb-1 hidden md:inline">Cart</span>
          </Link>
        </div>
      </nav>

      {/* Sub Header */}
      <div className="bg-[#232f3e] text-white flex items-center px-4 py-1.5 text-sm gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <button className="flex items-center gap-1 font-bold hover:outline hover:outline-1 hover:outline-white px-1 rounded-sm">
          <Menu size={20} /> All
        </button>
        <a href="#" className="hover:outline hover:outline-1 hover:outline-white px-1 rounded-sm">Fresh</a>
        <a href="#" className="hover:outline hover:outline-1 hover:outline-white px-1 rounded-sm">Today's Deals</a>
        <a href="#" className="hover:outline hover:outline-1 hover:outline-white px-1 rounded-sm">Sell</a>
        <a href="#" className="hover:outline hover:outline-1 hover:outline-white px-1 rounded-sm">Best Sellers</a>
        <a href="#" className="hover:outline hover:outline-1 hover:outline-white px-1 rounded-sm">Mobiles</a>
        <a href="#" className="hover:outline hover:outline-1 hover:outline-white px-1 rounded-sm">Electronics</a>
        <a href="#" className="hover:outline hover:outline-1 hover:outline-white px-1 rounded-sm">Customer Service</a>
        <a href="#" className="hover:outline hover:outline-1 hover:outline-white px-1 rounded-sm">New Releases</a>
      </div>
    </div>
  );
};