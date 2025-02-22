import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';
import type { CreatePwaPush, PwaPushStateProps } from '@/types/pwa/push';
// types

export const usePwaPush = defineStore({
  id: 'pwaPush',
  state: (): PwaPushStateProps => ({
    pwa_push: []
  }),
  getters: {
    // Get Pushes from Getters
    getPushes(state) {
      return state.pwa_push;
    }
  },
  actions: {
    // Get Data for Create Push from action
    async getDataCreatePush() {
      try {
        const data = await axios.get('/api/pushes/create');
        return data.data;
      } catch (err) {
        console.log(err);
      }
    },

    // Get Pushes from action
    async getPushesData() {
      try {
        const response = await axios.get(`/api/pushes`);

        this.pwa_push = response.data.data.data;
      } catch (error) {
        console.error(error);
      }
    },

    // Create Push from action
    async createPush(body: CreatePwaPush) {
      try {
        await axios.post('/api/pushes', body);
        await this.getPushesData();
      } catch (err) {
        console.log(err);
      }
    },

    // Update Push from action
    async updatePush(id: number, body: CreatePwaPush) {
      try {
        await axios.put(`/api/pushes/${id}`, body);
        await this.getPushesData();
      } catch (err) {
        console.log(err);
      }
    }
  }
});
