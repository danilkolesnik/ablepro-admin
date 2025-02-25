import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';
import type { CreateAdminsPromocode, AdminsPromocodesStateProps } from '@/types/admins/promocodes';
// types

export const useAdminsPromocodes = defineStore({
  id: 'adminsPromocodes',
  state: (): AdminsPromocodesStateProps => ({
    admins_promocodes: [],
  }),
  getters: {
    // Get Promocodes from Getters
    getPromocodes(state) {
      return state.pwa_splits;
    },
    getSplit(state) {
      return state.pwa_split_one;
    }
  },
  actions: {
    // Get Promocodes from action
    async getPromocodesData() {
      try {
        const response = await axios.get(`/api/admins/promocodes`);

        this.admins_promocodes = response.data.data;
      } catch (error) {
        console.error(error);
      }
    },

    // Create Promocode from action
    async createPromocode(body: CreateAdminsPromocode) {
      try {
        await axios.post('/api/admins/promocodes', body);
        await this.getPromocodesData();
      } catch (err) {
        console.log(err);
      }
    },

    // Get Split from action
    async getSplitOneData(id: number) {
      try {
        const response = await axios.get(`/api/pwa/splits/${id}`);

        this.pwa_split_one = response.data.data;
      } catch (error) {
        console.error(error);
      }
    },

    // Update Split from action
    async updateSplit(id: number, body: CreatePwaSplit) {
      try {
        await axios.put(`/api/pwa/splits/${id}`, body);
        await this.getSplitsData();
      } catch (err) {
        console.log(err);
      }
    },

    // Delete Split from action
    async deleteSplit(id: number) {
      try {
        await axios.delete(`/api/pwa/splits/${id}`);
        await this.getSplitsData();
      } catch (err) {
        console.log(err);
      }
    }
  }
});
