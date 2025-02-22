import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';
import type { CreatePwaSplit, PwaSplitsStateProps } from '@/types/pwa/splits';
// types

export const usePwaSplits = defineStore({
  id: 'pwaSplits',
  state: (): PwaSplitsStateProps => ({
    pwa_splits: [],
    pwa_split_one: {}
  }),
  getters: {
    // Get Splits from Getters
    getSplits(state) {
      return state.pwa_splits;
    },
    getSplit(state) {
      return state.pwa_split_one;
    }
  },
  actions: {
    // Get Splits from action
    async getSplitsData() {
      try {
        const response = await axios.get(`/api/pwa/splits`);

        this.pwa_splits = response.data.data;
      } catch (error) {
        console.error(error);
      }
    },

    // Create Split from action
    async createSplit(body: CreatePwaSplit) {
      try {
        await axios.post('/api/splits', body);
        await this.getSplitsData();
      } catch (err) {
        console.log(err);
      }
    },

    // Get Data for Create Split from action
    async getDataCreateSplit() {
      try {
        const data = await axios.get('/api/pwa/splits/create');
        return data.data;
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
