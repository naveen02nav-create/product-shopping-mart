export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  reviews: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ShippingInfo {
  fullName: string;
  address: string;
  city: string;
  postalCode: string;
  phone: string;
}

export interface PaymentInfo {
  cardNumber: string;
  expiry: string;
  cvc: string;
  nameOnCard: string;
}

export type CheckoutStep = 'SHIPPING' | 'PAYMENT' | 'REVIEW' | 'CONFIRMATION';

export interface CheckoutState {
  step: CheckoutStep;
  shipping: ShippingInfo;
  payment: PaymentInfo;
}
