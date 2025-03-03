export interface AdminsTemplatesStateProps {
  admins_templates: Template[];
  admin_data_edit: GetDataTemplateCreate | object;
  error?: object | string | null;
}

export type Template = {
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
};

export type GetDataTemplateCreate = {
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

export type CreateTemplate = {
  status: number | null;
  icon: File | null;
  banner_1: File | null;
  banner_2: File | null;
  banner_3: File | null;
  banner_4: File | null;
  banner_5: File | null;
  banner_6: File | null;
  category_id: number | null;
  subcategory_id: number | null;
  user_id: number | null;
  is_available_for_team: boolean;
};


export type CreateTemplateCustom = { icon: File | null; banners: File[] }