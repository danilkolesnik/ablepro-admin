import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';
// types
import type { PixelStateProps } from '@/types/pixels/index';

//USERS TAB STORE
export const usePixels = defineStore({
  id: 'pixels',
  state: (): PixelStateProps => ({
    pixels: [],
  }),
  getters: {
    // Get pixels from Getters
    getPixels(state) {
      return state.pixels;
    },
  },
  actions: {
    // Fetch Pixels from action
    async fetchPixels() {
      try {
        const response = await axios.get(`/api/pixels`);
        console.log('response', response);
        this.pixels = response.data.pixels.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error(error);
      }
    },

    // Create Domains from action
  }
});
