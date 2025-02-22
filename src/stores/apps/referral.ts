import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';
// types
import type { CreateLink, ReferralStateProps } from '@/types/referral';

//USERS TAB STORE
export const useReferral = defineStore({
  id: 'referral',
  state: (): ReferralStateProps => ({
    links: [],
    stats: [],
  }),
  getters: {
    // Get domains from Getters
    getLinks(state) {
      return state.links;
    },
    // Get Whitelist from Getters
    getStats(state) {
      return state.stats;
    }
  },
  actions: {
    // Fetch Links from action
    async fetchLinks() {
      try {
        const response = await axios.get(`/api/referral-links`);

        this.links = response.data.data;
      } catch (error) {
        console.error(error);
      }
    },

    // Create Links from action
    async createLink(body: CreateLink) {
      try {
        await axios.post('/api/referral-links', body);
        await this.fetchLinks();
      } catch (err) {
        console.log(err);
      }
    },

    // Fetch Stats from action
    async fetchStats() {
      try {
        const data = await axios.get(`/api/referral-links/stats`);
        this.stats = data.data;
      } catch (err) {
        console.log(err);
      }
    },
  }
});
