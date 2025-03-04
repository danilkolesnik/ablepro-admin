import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';
import type { CreateTelegramKey, TelegramKeysStateProps } from '@/types/telegram/keys';
// types

export const useTelegramKeys = defineStore({
  id: 'telegramKeys',
  state: (): TelegramKeysStateProps => ({
    telegram_keys: []
  }),
  getters: {
    // Get Telegram Keys from Getters
    getTelegramKeys(state) {
      return state.telegram_keys;
    }
  },
  actions: {
    // Get Telegram Keys from action
    async getTelegramKeysData() {
      try {
        const response = await axios.get(`/api/telegram-keys`);

        this.telegram_keys = response.data.data;
      } catch (error) {
        console.error(error);
      }
    },

    // Create Telegram Key from action
    async createSplit(body: CreateTelegramKey) {
      try {
        await axios.post('/api/telegram-keys', body);
        await this.getTelegramKeysData();
      } catch (err) {
        console.log(err);
      }
    }
  }
});
