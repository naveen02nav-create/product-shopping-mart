import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout = ({ children }: React.PropsWithChildren) => {
  const location = useLocation();
  const isCheckout = location.pathname === '/checkout';

  return (
    <div className="flex flex-col min-h-screen">
      {!isCheckout && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!isCheckout && (
        <footer className="bg-[#232f3e] text-white py-10 mt-8">
            <div className="text-center mb-8">
                 <button onClick={() => window.scrollTo(0, 0)} className="w-full bg-[#37475a] py-4 text-sm font-bold hover:bg-[#485769]">Back to top</button>
            </div>
            <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
                <div>
                    <h3 className="font-bold mb-2">Get to Know Us</h3>
                    <ul className="space-y-1 text-gray-300">
                        <li className="hover:underline cursor-pointer">About Us</li>
                        <li className="hover:underline cursor-pointer">Careers</li>
                        <li className="hover:underline cursor-pointer">Press Releases</li>
                        <li className="hover:underline cursor-pointer">Science</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold mb-2">Connect with Us</h3>
                    <ul className="space-y-1 text-gray-300">
                        <li className="hover:underline cursor-pointer">Facebook</li>
                        <li className="hover:underline cursor-pointer">Twitter</li>
                        <li className="hover:underline cursor-pointer">Instagram</li>
                    </ul>
                </div>
                 <div>
                    <h3 className="font-bold mb-2">Make Money with Us</h3>
                    <ul className="space-y-1 text-gray-300">
                        <li className="hover:underline cursor-pointer">Sell on Product Shopping Mart</li>
                        <li className="hover:underline cursor-pointer">Sell under Accelerator</li>
                        <li className="hover:underline cursor-pointer">Protect and Build Your Brand</li>
                        <li className="hover:underline cursor-pointer">Global Selling</li>
                    </ul>
                </div>
                 <div>
                    <h3 className="font-bold mb-2">Let Us Help You</h3>
                    <ul className="space-y-1 text-gray-300">
                        <li className="hover:underline cursor-pointer">COVID-19 and Shopping Mart</li>
                        <li className="hover:underline cursor-pointer">Your Account</li>
                        <li className="hover:underline cursor-pointer">Returns Centre</li>
                        <li className="hover:underline cursor-pointer">100% Purchase Protection</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-[#3a4553] mt-10 pt-6 text-center text-xs text-gray-300">
                 <div className="flex justify-center gap-4 mb-2">
                     <span>© 2025, Product Shopping Mart, Inc. or its affiliates</span>
                 </div>
                 <p>This is a portfolio demo. Not a real shopping site.</p>
            </div>
        </footer>
      )}
    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Layout>
      </Router>
    </ShopProvider>
  );
}