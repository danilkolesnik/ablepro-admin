export interface PwaSplitsStateProps {
    pwa_splits: PwaSplit[];
    pwa_split_one: PwaSplit | object;
    error?: object | string | null;
  }
  
  export interface PwaSplit {
    id: number;
    uniq_key: string;
    pwa_ids: Record<string, number>;
    domain_list: number;
    user: number;
    created_at: string;
    updated_at: string;
  }
  
  
  export interface CreatePwaSplit {
    id: number;
    uniq_key: string;
    pwa_ids: Record<string, number>;
    domain_list: number;
    user: number;
  }
  