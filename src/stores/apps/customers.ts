import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';
// types
import type { CustomerStateProps } from '@/types/customers/index';

interface ICreateCustomer {
  name: string;
  email: string;
  telegram: string;
  password: string;
  role: string;
  pages: number[];
  users: number[];
  balance: number | null;
  credit_limit: number | null;
  referral_percent: number | null;
}

//USERS TAB STORE
export const useCustomers = defineStore({
  id: 'customers',
  state: (): CustomerStateProps => ({
    customers: [],
    orders: [],
    products: [],
    productreviews: []
  }),
  getters: {
    // Get Customers from Getters
    getCustomers(state) {
      return state.customers;
    }
  },
  actions: {
    // Fetch Customers from action
    async fetchCustomers() {
      try {
        const response = await axios.get('/api/users');

        this.customers = response.data.data;
        return response.data.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error(error);
      }
    },

    async createCustomer(body: ICreateCustomer) {
      try {
        const response = await axios.post('/api/users/create', body);
        await this.fetchCustomers();
        return response.data.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error(error);
      }
    },

    async loginCustomer(id: string) {
      try {
        const response = await axios.post(`/api/users/${id}/login`);
        await this.fetchCustomers();

        return response.data.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error(error);
      }
    }
  }
});
