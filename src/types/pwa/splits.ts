export interface PwaSplitsStateProps {
    pwa_splits: PwaSplit[];
    pwa_split_one: PwaSplit | object;
    error?: object | string | null;
  }
  
  export interface PwaSplit {
      id: number;
      uniq_key: string;
      count_clicks: number;
      domain: { domain: string };
      pwa_data: { pwa: { id: number; name: Record<string, string>; user_tag: string }; percentage: number }[];
      created_at: string;
      updated_at: string;
  }

  interface Pwa {
    id: number;
    name: Record<string, string>;
    user_tag: string;
  }
  
  export interface PwaData {
    pwa: Pwa;
    percentage: number;
  }
  
  
  export interface CreatePwaSplit {
    id: number;
    uniq_key: string;
    pwa_ids: Record<string, number>;
    domain_list: number;
    user: number;
  }
  