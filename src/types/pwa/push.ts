export interface PwaPushStateProps {
  pwa_push: PwaPush[];
  error?: object | string | null;
}

export interface PwaPush {
  id: number;
  name: {
    en: string;
    ru: string;
  };
  description: Record<string, unknown>;
  flow_id: number;
  domain_id: number;
  template_id: number;
  user_id: number;
  uniq_key: string;
  selected_versions: string[];
  reviews_count: {
    en: number;
    ru: number;
  };
  rating: {
    en: number;
    ru: number;
  };
  installs_quantity: {
    en: string;
    ru: string;
  };
  category: {
    en: string;
    ru: string;
  };
  intervals: {
    id: string;
    type: string;
    time: string;
    interval: string;
  }[];
  reviews: Review[];
  template: Template;
  flow: Flow;
  domain: Domain;
}

interface Review {
  id?: number;
  author: string;
  rating: number;
  body: string;
  date: string;
  useful: number;
  pfp: string;
  language_id: number;
}

interface Template {
  id: number;
  icon: string;
  banner_1: string;
  banner_2: string;
  banner_3: string;
  banner_4: string;
  banner_5: string;
  banner_6: string;
  status: boolean;
  category: number;
  user_id: number;
  is_available_for_team: boolean;
}

interface Flow {
  id: number;
  created_at: string;
  updated_at: string;
}

interface Domain {
  id: number;
  domain: string;
  price: number;
  push_id: number;
  push_api: string;
  category: string;
  user: number;
}

export interface CreatePwaPush {
  progressive_web_apps: number[];
}
