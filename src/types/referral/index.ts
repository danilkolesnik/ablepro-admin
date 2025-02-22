export interface ReferralStateProps {
  links: Link[];
  stats: Stat[];
  error?: object | string | null;
}

export type Link = {
  id: number;
  name: string;
  uuid: number;
  user_id: number;
  created_at?: string;
};

export type Stat = {
  referralTransactions: {
    id: number;
    amount: number;
    master_user_id: number;
    user_id: number;
    finance_id: number;
    created_at: string;
    updated_at: string;
  }[];
  users: {
    id: number;
    name: string;
    email: string;
    telegram: string;
    role: string;
    balance: number;
    credit_limit: number;
    referral_percent: number;
    tariff_expiration_date: string;
    created_at: string;
    updated_at: string;
  }[];
  referrals: {
    id: number;
    name: string;
    email: string;
    telegram: string;
    role: string;
    balance: number;
    credit_limit: number;
    referral_percent: number;
    tariff_expiration_date: string;
    created_at: string;
    updated_at: string;
  }[];
};

export type CreateLink = {
  name: string;
  link: string;
};
