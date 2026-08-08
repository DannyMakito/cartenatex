
import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface ServiceItem {
  title: string;
  image: string;
  items?: string[];
}

export interface ServiceDetailData {
  id: string;
  title: string;
  image: string;
  bannerImage: string;
  shortDescription: string;
  detailedDescription: string;
  services: string[];
  faqs: FAQItem[];
  link: string;
  category?: string;
  icon?: string;
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FeatureBoxProps {
  title: string;
  subtitle: string;
  buttonText: string;
  delay?: number;
}

export interface BrandData {
  id: string;
  name: string;
  image: string;
  bannerImage: string;
  title: string;
  description: string;
  services: string[];
  faqs: FAQItem[];
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  gallery?: string[];
  description: string;
  features: string[];
  packingList?: string[];
  techSpecs?: string[];
  reviewVideo?: string;
  detailLink?: string;
}

export interface CartItem extends Product {
  quantity: number;
}
