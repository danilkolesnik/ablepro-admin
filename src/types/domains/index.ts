export interface DomainStateProps {
  domains: Domain[];
  whitelist: Whitelist[];
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

export type CreateDomains = {
  price: number;
  domains: string;
  category: string;
};

export type CreateCustomDomains = {
  domains: string;
};

export type Whitelist = {
  id: number;
  name: string;
  company: string;
  type: string;
  qty: number;
  date: string;
  status: number;
};


export type CreateWhitelist = {
  user: number;
  domain: string;
};
