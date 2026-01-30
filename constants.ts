import { Product } from './types';

export const MOCK_PRODUCTS: Product[] = [
  // Original Items
  {
    id: 'p1',
    name: 'Lumina Noise-Cancelling Headphones',
    price: 299.99,
    description: 'Experience pure silence with our advanced active noise-cancelling technology. Designed for comfort and high-fidelity sound.',
    category: 'Electronics',
    image: 'https://picsum.photos/800/800?random=1',
    rating: 4.8,
    reviews: 124
  },
  {
    id: 'p2',
    name: 'Apex Mechanical Keyboard',
    price: 149.50,
    description: 'Tactile, responsive, and built to last. The Apex features custom blue switches and RGB backlighting for the ultimate typing experience.',
    category: 'Electronics',
    image: 'https://picsum.photos/800/800?random=2',
    rating: 4.9,
    reviews: 89
  },
  {
    id: 'p3',
    name: 'Urban Voyager Backpack',
    price: 89.00,
    description: 'Water-resistant, durable, and stylish. Fits a 15-inch laptop with plenty of room for your daily essentials.',
    category: 'Accessories',
    image: 'https://picsum.photos/800/800?random=3',
    rating: 4.6,
    reviews: 215
  },
  {
    id: 'p4',
    name: 'Zenith Smart Watch',
    price: 199.99,
    description: 'Track your fitness, heart rate, and sleep. Seamlessly connects to your phone for notifications on the go.',
    category: 'Wearables',
    image: 'https://picsum.photos/800/800?random=4',
    rating: 4.5,
    reviews: 340
  },
  {
    id: 'p5',
    name: 'ErgoComfort Office Chair',
    price: 350.00,
    description: 'Designed for all-day support. Adjustable lumbar support, breathable mesh back, and premium cushioning.',
    category: 'Furniture',
    image: 'https://picsum.photos/800/800?random=5',
    rating: 4.7,
    reviews: 56
  },
  {
    id: 'p6',
    name: 'Minimalist Desk Lamp',
    price: 45.00,
    description: 'Sleek design with adjustable brightness levels. Perfect for reading, working, or adding ambient light to your room.',
    category: 'Home',
    image: 'https://picsum.photos/800/800?random=6',
    rating: 4.3,
    reviews: 112
  },

  // New Electronics
  {
    id: 'p7',
    name: 'CrystalClear 55-Inch 4K Ultra HD Smart LED TV',
    price: 499.00,
    description: 'Stunning 4K resolution with HDR support. Smart functionality includes Netflix, YouTube, and voice control compatibility.',
    category: 'Electronics',
    image: 'https://picsum.photos/800/800?random=7',
    rating: 4.5,
    reviews: 842
  },
  {
    id: 'p8',
    name: 'BoomBass Portable Wireless Bluetooth Speaker',
    price: 45.99,
    description: 'Waterproof IPX7 design with 12 hours of playtime. Delivers deep bass and crisp highs for outdoor parties.',
    category: 'Electronics',
    image: 'https://picsum.photos/800/800?random=8',
    rating: 4.2,
    reviews: 320
  },
  {
    id: 'p9',
    name: 'ProShot DSLR Camera Kit with 18-55mm Lens',
    price: 899.00,
    description: 'Capture stunning photos with a 24.1 MP CMOS sensor. Includes Wi-Fi/NFC for easy sharing and Full HD video recording.',
    category: 'Electronics',
    image: 'https://picsum.photos/800/800?random=9',
    rating: 4.8,
    reviews: 56
  },
  {
    id: 'p10',
    name: 'Hyperion Gaming Laptop 15.6" FHD 144Hz',
    price: 1299.00,
    description: 'Powered by Intel Core i7 and NVIDIA GeForce RTX graphics. 16GB RAM and 512GB SSD for lightning-fast performance.',
    category: 'Electronics',
    image: 'https://picsum.photos/800/800?random=10',
    rating: 4.6,
    reviews: 112
  },

  // Fashion
  {
    id: 'p11',
    name: 'Essentials Men\'s Regular-Fit Cotton Polo Shirt',
    price: 19.99,
    description: 'Classic polo style made from 100% soft cotton. Features a two-button placket and ribbed cuffs.',
    category: 'Fashion',
    image: 'https://picsum.photos/800/800?random=11',
    rating: 4.1,
    reviews: 2300
  },
  {
    id: 'p12',
    name: 'StrideMax Women\'s Daily Running Shoes',
    price: 65.00,
    description: 'Lightweight breathable mesh upper with cushioned sole for all-day comfort. Perfect for jogging or walking.',
    category: 'Fashion',
    image: 'https://picsum.photos/800/800?random=12',
    rating: 4.4,
    reviews: 560
  },
  {
    id: 'p13',
    name: 'Retro Aviator Sunglasses UV400 Protection',
    price: 25.00,
    description: 'Timeless design suitable for men and women. Metal frame with scratch-resistant lenses blocking 100% of UVA/UVB rays.',
    category: 'Fashion',
    image: 'https://picsum.photos/800/800?random=13',
    rating: 4.3,
    reviews: 145
  },
  {
    id: 'p14',
    name: 'Genuine Leather RFID Blocking Bi-Fold Wallet',
    price: 35.00,
    description: 'Slim and stylish wallet with plenty of card slots. Built-in RFID blocking technology to protect your information.',
    category: 'Fashion',
    image: 'https://picsum.photos/800/800?random=14',
    rating: 4.7,
    reviews: 890
  },

  // Home & Kitchen
  {
    id: 'p15',
    name: 'ChefMaster 15-Piece Kitchen Knife Set with Block',
    price: 59.99,
    description: 'High-carbon stainless steel blades for precision cutting. Ergonomic handles and pine wood block included.',
    category: 'Home & Kitchen',
    image: 'https://picsum.photos/800/800?random=15',
    rating: 4.6,
    reviews: 450
  },
  {
    id: 'p16',
    name: 'BrewMate Programmable Coffee Maker 12-Cup',
    price: 39.99,
    description: 'Wake up to fresh coffee with programmable timer. Features auto-pause, glass carafe, and reusable filter.',
    category: 'Home & Kitchen',
    image: 'https://picsum.photos/800/800?random=16',
    rating: 4.2,
    reviews: 1200
  },
  {
    id: 'p17',
    name: 'AutoClean Robot Vacuum with Strong Suction',
    price: 199.00,
    description: 'Ideally suited for pet hair, hard floors, and carpets. Self-charging with drop-sensing technology.',
    category: 'Home & Kitchen',
    image: 'https://picsum.photos/800/800?random=17',
    rating: 4.4,
    reviews: 780
  },
  {
    id: 'p18',
    name: 'LuxSoft Microfiber Bed Sheet Set Queen Size',
    price: 29.99,
    description: 'Ultra-soft, wrinkle-resistant, and breathable. Deep pockets fit mattresses up to 16 inches deep.',
    category: 'Home & Kitchen',
    image: 'https://picsum.photos/800/800?random=18',
    rating: 4.5,
    reviews: 3400
  },

  // Books
  {
    id: 'p19',
    name: 'Modern Web Development: The Complete Guide',
    price: 45.00,
    description: 'A comprehensive guide to React, Node.js, and modern CSS patterns. Essential for aspiring developers.',
    category: 'Books',
    image: 'https://picsum.photos/800/800?random=19',
    rating: 4.9,
    reviews: 67
  },
  {
    id: 'p20',
    name: 'The Silent Echo: A Thrilling Mystery Novel',
    price: 12.99,
    description: 'A page-turning thriller about a detective solving a cold case in a small coastal town.',
    category: 'Books',
    image: 'https://picsum.photos/800/800?random=20',
    rating: 4.3,
    reviews: 210
  },
  {
    id: 'p21',
    name: 'Galactic Horizons: Science Fiction Anthology',
    price: 18.50,
    description: 'A collection of short stories exploring the future of humanity, space travel, and AI.',
    category: 'Books',
    image: 'https://picsum.photos/800/800?random=21',
    rating: 4.6,
    reviews: 95
  },

  // Beauty & Personal Care
  {
    id: 'p22',
    name: 'GlowBoost Vitamin C Serum with Hyaluronic Acid',
    price: 22.00,
    description: 'Brightens skin and reduces dark spots. Anti-aging formula suitable for all skin types.',
    category: 'Beauty',
    image: 'https://picsum.photos/800/800?random=22',
    rating: 4.4,
    reviews: 1500
  },
  {
    id: 'p23',
    name: 'PureNature Argan Oil Shampoo & Conditioner',
    price: 15.99,
    description: 'Sulfate-free set for dry and damaged hair. Restores shine and softness with natural ingredients.',
    category: 'Beauty',
    image: 'https://picsum.photos/800/800?random=23',
    rating: 4.5,
    reviews: 980
  },
  {
    id: 'p24',
    name: 'SonicClean Electric Toothbrush with 5 Modes',
    price: 49.99,
    description: 'Deep cleaning with ultrasonic technology. Includes 4 replacement heads and a travel case.',
    category: 'Beauty',
    image: 'https://picsum.photos/800/800?random=24',
    rating: 4.7,
    reviews: 430
  },

  // Sports & Outdoors
  {
    id: 'p25',
    name: 'EcoGrip Yoga Mat Extra Thick 6mm',
    price: 24.99,
    description: 'Non-slip texture for yoga, pilates, and floor exercises. Made from eco-friendly TPE material.',
    category: 'Sports & Outdoors',
    image: 'https://picsum.photos/800/800?random=25',
    rating: 4.6,
    reviews: 670
  },
  {
    id: 'p26',
    name: 'AdventureGear 4-Person Camping Tent',
    price: 120.00,
    description: 'Waterproof and windproof design. Easy setup in 5 minutes. Includes rainfly and carry bag.',
    category: 'Sports & Outdoors',
    image: 'https://picsum.photos/800/800?random=26',
    rating: 4.5,
    reviews: 210
  }
];

export const SHIPPING_COST = 15.00;
export const TAX_RATE = 0.08;
