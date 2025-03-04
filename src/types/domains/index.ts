export interface DomainStateProps {
  domains: Domain[];
  whitelist: Whitelist;
  error?: object | string | null;
}

export type Domain = {
  id: number;
  domain: string;
  price: number;
  user_id: number;
  category: string;
  created_at: string;
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

export type BuyDomain = {
  domain: string;
  price: number
};


// Whitelist
export type Whitelist = {
  domains: {id: number, domain: string,user: number,created_at: string;}[];
  users: {id: number, name: string, email: string,created_at: string;}[]
};


export type CreateWhitelist = {
  user: number;
  domain: string;
};
