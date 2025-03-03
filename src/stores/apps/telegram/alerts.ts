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
    
    async createTelegramAlert(body: CreateTelegramAlert) {
      try {
        const formData = new FormData();
        
        formData.append('message', body.message);
        formData.append('bot_id', body.bot_id ? body.bot_id.toString() : '');
        
        if (body.image) {
          formData.append('image', body.image);
        }
        
        if (body.video) {
          formData.append('video', body.video);
        }
        
        await axios.post('/api/telegram-alerts', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
    
        await this.getTelegramAlertsData();
      } catch (err) {
        console.log(err);
      }
    }
    
  }
});
