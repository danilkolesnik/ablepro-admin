import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';
// types
import type { PixelStateProps, ICreatePixel, ICreateEventPixel, IUpdatePixel } from '@/types/pixels/index';

//USERS TAB STORE
export const usePixels = defineStore({
  id: 'pixels',
  state: (): PixelStateProps => ({
    pixels: [],
    metadata: {
      countries: [],
      events: []
    }
  }),
  getters: {
    // Get pixels from Getters
    getPixels(state) {
      return state.pixels;
    },
    getMetaData(state){
      return state.metadata
    }
  },
  actions: {
    // Fetch Pixels from action
    async fetchPixels() {
      try {
        const response = await axios.get(`/api/pixels`);
        this.pixels = response.data.pixels.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error(error);
      }
    },
    async fetchMetaData() {
      try {
        const response = await axios.get(`/api/pixels/metadata`);
        this.metadata = response.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error(error);
      }
    },
    async createPixel(body: ICreatePixel) {
      try {
        const response = await axios.post(`/api/pixels`, body);
        await this.fetchPixels();
        return response.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error(error);
      }
    },
    async createEventPixel(body: ICreateEventPixel) {
      try {
        const response = await axios.post(`/api/pixels/submit`, body);
        await this.fetchPixels();
        return response.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error(error);
      }
    },

    async updatePixel(id:string, body: IUpdatePixel) {
      try {
        const response = await axios.put(`/api/pixels/${id}`, body);
        await this.fetchPixels();
        return response.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error(error);
      }
    },

    async deletePixel(id:string) {
      try {
        const response = await axios.delete(`/api/pixels/${id}`);
        await this.fetchPixels();
        return response.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error(error);
      }
    }
  }
});
