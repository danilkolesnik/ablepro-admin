export interface BioFormStateProps {
  photo_profile: string;
  name: string;
  email: string;
  telegram_id: string;
  telegram_key: string;
  two_factor_confirmed_at: boolean | null;
  error?: object | string | null;
}