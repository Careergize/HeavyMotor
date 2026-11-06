export type VehicleCategoryId = 
  | 'heavy-truck'
  | 'bus-transport'
  | 'jcb-earthmover'
  | 'car-lmv'
  | 'bike-autorickshaw'
  | 'trailer-articulated'
  | 'mvd-badge';

export interface VehicleCategory {
  id: VehicleCategoryId;
  name: string;
  shortName: string;
  tagline: string;
  iconName: string;
  badge: string;
  vehicleModel: string;
  image: string;
  description: string;
}

export interface CoursePackage {
  id: string;
  categoryId: VehicleCategoryId;
  tier: 'ground' | 'road' | 'complete';
  tierLabel: string;
  title: string;
  subTitle: string;
  price: number;
  originalPrice?: number;
  duration: string;
  hours: string;
  popular?: boolean;
  features: string[];
  vehicleType: string;
  suitableFor: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  licenseCategory: string;
  badgeCleared: string;
  currentRole: string;
  avatar: string;
  rating: number;
  review: string;
  date: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'license' | 'eligibility' | 'training' | 'gulf';
}

