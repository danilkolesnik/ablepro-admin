export interface DomainStateProps {
  domains: Domain[];
  whilelist: Whilelist[];
  products: Product[];
  productreviews: ProductReview[];
  error?: object | string | null;
}

export type Domain = {
  id: number;
  domain: string;
  price: number;
  user_id: number;
  category: string;
  created_date: string;
  status: string;
};

export type Whilelist = {
  id: number;
  name: string;
  company: string;
  type: string;
  qty: number;
  date: string;
  status: number;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  date: string;
  qty: number;
};

export type ProductReview = {
  name: string;
  author: string;
  review: string;
  rating: number;
  date: string;
  status: number;
};
