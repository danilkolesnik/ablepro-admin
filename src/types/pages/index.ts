export interface PageStateProps {
    pagesList: PagesList[];
    pageGroups: PageGroups[];
    error?: object | string | null;
  }
  
  export type PagesList = {
    id: number;
    name: string;
    route: string;
    is_visible: boolean;
    icon: string;
    roles: any[];
    page_group_id: number;
  };

  export type PageGroups = {
    id: number;
    name: string;
    created_date: string;
    updated_date: string;
  };