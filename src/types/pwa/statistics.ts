export interface PwaStatisticsStateProps {
    pwa_statistics: PwaStatistic[];
    pwa_statistics_details: PwaStatistic | object;
    error?: object | string | null;
  }
  
  export interface PwaStatistic {
    id: number;
    uniq_key: string;
    pwa_ids: Record<string, number>;
    domain_list: number;
    user: number;
    created_at: string;
    updated_at: string;
  }
  
  
  export interface ParamsPwaStatisticsAll {
    limit: number
    offset: number;
    pwa_ids: number[];
    from: string;
    to: string;
  }
  

  export interface ParamsPwaStatisticsDetails {
    limit: number
    from: string;
    to: string;
  }