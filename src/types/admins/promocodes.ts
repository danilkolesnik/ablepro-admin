export interface AdminsPromocodesStateProps {
  admins_promocodes: Promocode[];
  error?: object | string | null;
}

export type Promocode = {
  id: number;
  code: string;
  expired_at: string;
  discount: string;
};

export type CreatePromocode = {
  quantity: string;
  discount: string;
  expired_at: string;
};
