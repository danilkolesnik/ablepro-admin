import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';
import type { CreateTelegramAlert, TelegramAlertsStateProps } from '@/types/telegram/alerts';
// types

export const useTelegramAlerts = defineStore({
  id: 'telegramAlerts',
  state: (): TelegramAlertsStateProps => ({
    telegram_bots: []
  }),
  getters: {
    // Get Telegram Alerts from Getters
    getTelegramBots(state) {
      return state.telegram_bots;
    }
  },
  actions: {
    // Get Telegram Alerts from action
    async getTelegramAlertsData() {
      try {
        const response = await axios.get(`/api/telegram-alerts`);

        this.telegram_bots = response.data;
      } catch (error) {
        console.error(error);
      }
    },

    // Create Telegram Alert from action
    async createTelegramAlert(body: CreateTelegramAlert) {
      try {
        await axios.post('/api/telegram-alerts', body);
        await this.getTelegramAlertsData();
      } catch (err) {
        console.log(err);
      }
    }
  }
});
