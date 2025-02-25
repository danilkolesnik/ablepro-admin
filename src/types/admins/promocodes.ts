export interface AdminsPromocodesStateProps {
    admins_promocodes: Promocode[];
    error?: object | string | null;
  }
  
  export type Promocode = {
    id: number;
    domain: string;
    price: number;
    user_id: number;
    category: string;
    created_at: string;
    status: string;
  };
  
  export type CreatePromocode = {
    price: number;
    domains: string;
    category: string;
  };