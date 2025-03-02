export interface TelegramAlertsStateProps {
telegram_bots: TelegramAlert[];
  error?: object | string | null;
}

export interface TelegramAlert {
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

export interface CreateTelegramAlert {
  message: string;
  bot_id: number | null;
  image: string;
  video: string;
}
