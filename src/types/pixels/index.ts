export interface PixelStateProps {
  pixels: Pixel[];
  metadata: Metadata;
  error?: object | string | null;
}

export type Pixel = {
  id: number;
  pixel: string;
  token: string;
  user: number;
  created_date: string;
  updated_date: string;
};

export type Metadata = {
  countries: {
    id: number;
    name: string;
    code: string;
    countries_tier: number;
  }[];
  events: string[];
};

export interface ICreatePixel {
  pixel: string;
  token: string;
}

export interface IUpdatePixel {
  token: string;
}

export interface ICreateEventPixel {
  geoId: number;
  event: string;
  pixel_id: number;
}
