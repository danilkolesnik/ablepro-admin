export interface TelegramKeysStateProps {
    telegram_keys: TelegramKey[];
      error?: object | string | null;
    }
    
    export interface TelegramKey {
      id: number;
      name: string;
      link: string;
      api_key: string;
      main: boolean;
      web_hook: string;
      send_balance_notification: boolean;
      language_id: number;
      language: {
        id: number;
        code: string;
        name: string;
      };
    }
    
    export interface CreateTelegramKey {
      number: number;
      user: string;
    }
    