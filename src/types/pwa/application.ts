export interface PwaApplicationStateProps {
    pwa_applications: PwaApplication[];
    drafts: []
    error?: object | string | null;
  }
  

  
  export interface PwaApplication {
    id: number;
    name: {
      "1": string;
      [key:number]: string;
    };
    status: string;
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

  export interface CreatePwaApplication {
    name: string[];
  user_tag: string;
  description: string[];
  flow_id: number;
  template_id: number;
  author: string[];
  rating: number[];
  reviews_count: number[];
  installs_quantity: string[];
  five_rating_quantity: number[];
  four_rating_quantity: number[];
  three_rating_quantity: number[];
  two_rating_quantity: number[];
  one_rating_quantity: number[];
  domain_id: number;
  reviews_array: Review[];
  youtube_video: string[];
  video: string[];
  selected_versions: number[];
  related_pwas: number[];
  installs_text: string[];
  reviews_text: string[];
  ad_info: string[];
  subject_id: number;
  pixel_id: number;
  related_pushes: number[];
  }
  