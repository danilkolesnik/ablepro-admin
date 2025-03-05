export interface BioFormStateProps {
  profile_photo_path: string;
  name: string;
  email: string;
  telegram: string;
  two_factor_confirmed_at: boolean | null;
  balance: number | null;
  tariff_expiration_date: string | null;
  error?: object | string | null;
}