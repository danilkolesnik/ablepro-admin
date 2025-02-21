export interface ReferralStateProps {
  links: [];
  stats: [];
  error?: object | string | null;
}

export type Link = {
  id: number;
  name: string;
  uuid: number;
  user_id: 10;
  created_at: '2024-06-01T12:00:00Z';
  updated_at: '2024-06-02T15:30:00Z';
};

export type CreateDomains = {
  price: number;
  domains: string;
  category: string;
};

export type CreateCustomDomains = {
  domains: string;
};

export type BuyDomain = {
  domains: string;
  price: number;
};

// Whitelist
export type Whitelist = {
  domains: { id: number; domain: string; user: number; created_at: string }[];
  users: { id: number; name: string; email: string; created_at: string }[];
};

export type CreateWhitelist = {
  user: number;
  domain: string;
};
