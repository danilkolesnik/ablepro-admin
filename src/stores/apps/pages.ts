import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';
// types
import type { PageStateProps } from '@/types/pages/index';

//USERS TAB STORE
export const usePages = defineStore({
  id: 'pixels',
  state: (): PageStateProps => ({
    pagesList: [],
    pageGroups: [],
  }),
  getters: {
    // Get pages from Getters
    getPagesList(state) {
      return state.pagesList;
    },
    getPageGroups(state) {
      return state.pageGroups;
    }
  },
  actions: {
    // Fetch Pages from action
    async fetchPages() {
      try {
        const response = await axios.get(`/api/pages`);
        console.log('response', response);
        this.pagesList = response.data.data.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error(error);
      }
    },
    async fetchPageGroups() {
      try {
        const response = await axios.get(`/api/page-groups`);
        console.log('response groups', response);
        this.pageGroups = response.data.data.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error(error);
      }
    },
  }
});
