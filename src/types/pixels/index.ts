export interface PixelStateProps {
    pixels: Pixel[];
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