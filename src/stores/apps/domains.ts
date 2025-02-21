import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';
// types
import type { CreateCustomDomains, CreateDomains, CreateWhitelist, DomainStateProps } from '@/types/domains/index';

//USERS TAB STORE
export const useDomains = defineStore({
  id: 'domains',
  state: (): DomainStateProps => ({
    domains: [],
    whitelist: []
  }),
  getters: {
    // Get domains from Getters
    getDomains(state) {
      return state.domains;
    },
    // Get orders from Getters
    getWhilelist(state) {
      return state.whitelist;
    }
  },
  actions: {
    // Fetch Domains from action
    async fetchDomains() {
      try {
        const response = await axios.get(`/api/domains`);

        this.domains = response.data.data.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error(error);
      }
    },

    // Create Domains from action
    async createDomains(body: CreateDomains) {
      try {
        await axios.post('/api/domains', body);
        await this.fetchDomains();
      } catch (err) {
        console.log(err);
      }
    },

    // Create Custom Domains from action
    async createCustomDomains(body: CreateCustomDomains) {
      try {
        await axios.post('/api/domains/custom', body);
        await this.fetchDomains();
      } catch (err) {
        console.log(err);
      }
    },

    // Fetch Whilelist from action
    async fetchWhitelist() {
      try {
        const data = await axios.get(`/api/whitelist`);
        this.whitelist = data.data;
      } catch (err) {
        console.log(err);
      }
    },

    async createWhitelist(body: CreateWhitelist) {
      try {
        await axios.post('/api/whitelist', body);
      } catch (err) {
        console.log(err);
      }
    },

    // Delete Whilelist
    async deleteWhitelist(itemId: number) {
      try {
        await axios.delete(`/api/whitelist/${itemId}`);
        this.whitelist = this.whitelist.filter((object) => {
          return object.id !== itemId;
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
});
