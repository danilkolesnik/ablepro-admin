import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';
// types
import type { BuyDomain, CreateCustomDomains, CreateDomains, CreateWhitelist, DomainStateProps } from '@/types/domains/index';

//USERS TAB STORE
export const useReferral = defineStore({
  id: 'domains',
  state: (): DomainStateProps => ({
    
  }),
  getters: {
    // Get domains from Getters
    getDomains(state) {
      return state.domains;
    },
    // Get Whitelist from Getters
    getWhitelist(state) {
      return state.whitelist;
    }
  },
  actions: {
    // Fetch Domains from action
    async fetchDomains() {
      try {
        const response = await axios.get(`/api/domains`);

        this.domains = response.data.data.data;
      } catch (error) {
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

    // Buy Domain from action
    async buyDomain(body: BuyDomain) {
      try {
        await axios.post('/api/domains/buy', body);
      } catch (err) {
        console.log(err);
      }
    },

    // Fetch Whilelist from action
    async fetchWhitelist() {
      try {
        const data = await axios.get(`/api/whitelist`);
        const users = data.data.users;
        const domains = data.data.domains.data;
        this.whitelist = {users: users, domains: domains};
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
        this.whitelist.domains = this.whitelist.domains.filter((object) => {
          return object.id !== itemId;
        });
      } catch (err) {
        console.log(err);
      }
    }
  }
});
