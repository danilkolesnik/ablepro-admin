import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';
import type { CreatePromocode, AdminsPromocodesStateProps } from '@/types/admins/promocodes';
// types

export const useAdminsPromocodes = defineStore({
  id: 'adminsPromocodes',
  state: (): AdminsPromocodesStateProps => ({
    admins_promocodes: [],
  }),
  getters: {
    // Get Promocodes from Getters
    getPromocodes(state) {
      return state.admins_promocodes;
    },
  },
  actions: {
    // Get Promocodes from action
    async getPromocodesData() {
      try {
        const response = await axios.get(`/api/promocodes`);
        this.admins_promocodes = response.data.data.data;
      } catch (error) {
        console.error(error);
      }
    },

    // Create Promocode from action
    async createPromocode(body: CreatePromocode) {
      console.log(body)
      try {
        await axios.post('/api/promocodes', body);
        await this.getPromocodesData();
      } catch (err) {
        console.log(err);
      }
    },

  }
});
