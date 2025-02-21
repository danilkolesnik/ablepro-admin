import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';
// types
import type { DomainStateProps } from '@/types/domains/index';

const API_URL = await import.meta.env.VITE_API_URL;

//USERS TAB STORE
export const useDomains = defineStore({
  id: 'domains',
  state: (): DomainStateProps => ({
    domains: [],
    whilelist: [],
    products: [],
    productreviews: []
  }),
  getters: {
    // Get domains from Getters
    getDomains(state) {
      return state.domains;
    },
    // Get orders from Getters
    getWhilelist(state) {
      return state.whilelist;
    },
    // Get orders from Getters
    getProducts(state) {
      return state.products;
    },
    // Get orders from Getters
    getProductsreviews(state) {
      return state.productreviews;
    }
  },
  actions: {
    // Fetch Domains from action
    async fetchDomains() {
      try {
        const response = await axios.get(`/api/domains`)

        this.domains = response.data.data.data;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error('Ошибка при получении доменов:', error);
        alert(error.message);
      }
    },

    // Fetch Whilelist from action
    async fetchWhilelist() {
      try {
        const data = await axios.get(`${API_URL}/api/whilelist`);
        this.whilelist = data.data;
      } catch (error) {
        alert(error);
      }
    },

    // Fetch products from action
    async fetchProducts() {
      try {
        const data = await axios.get('/api/data/products');
        this.products = data.data;
      } catch (error) {
        alert(error);
      }
    },

    // Fetch products from action
    async fetchReviews() {
      try {
        const data = await axios.get('/api/data/productreviews');
        this.productreviews = data.data;
      } catch (error) {
        alert(error);
      }
    },

    // Delete Domain
    deleteDomain(itemId: number) {
      this.domains = this.domains.filter((object) => {
        return object.id !== itemId;
      });
    },

    // Delete Whilelist
    deleteWhilelist(itemId: number) {
      this.whilelist = this.whilelist.filter((object) => {
        return object.id !== itemId;
      });
    }
  }
});
