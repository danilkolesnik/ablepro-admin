import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';
import type { CreatePwaApplication, PwaApplication, PwaApplicationStateProps } from '@/types/pwa/application';
// types

export const usePwaApplications = defineStore({
  id: 'pwa',
  state: (): PwaApplicationStateProps => ({
    pwa_applications: [],
    drafts: []
  }),
  getters: {
    // Get Applications from Getters
    getApplications(state) {
      return state.pwa_applications;
    },
    getDrafts(state) {
      return state.drafts;
    }
  },
  actions: {
    // Fetch Applications from action
    async fetchApplications() {
      try {
        const response = await axios.get(`/api/pwa`);

        this.pwa_applications = response.data.data.data;
      } catch (error) {
        console.error(error);
      }
    },

    // Get Drafts from action
    async getDraftsData() {
      try {
        const response = await axios.get('/api/pwa/drafts');
        this.drafts = response.data.data.data;
      } catch (err) {
        console.log(err);
      }
    },

    // Create Application from action
    async createApplications(body: CreatePwaApplication) {
      try {
        await axios.post('/api/pwa', body);
        await this.fetchApplications();
      } catch (err) {
        console.log(err);
      }
    },

    // Get Data for Create Application from action
    async getDataCreateApplication() {
      try {
        const data = await axios.get('/api/pwa/create');
        return data.data;
      } catch (err) {
        console.log(err);
      }
    },

    // Update Application action
    async updateApplication(id: number, body: PwaApplication) {
      try {
        await axios.put(`/api/pwa/${id}`, body);
        await this.fetchApplications();
      } catch (err) {
        console.log(err);
      }
    },

    // Delete Application
    async deleteApplication(id: number) {
      try {
        await axios.delete(`/api/pwa/${id}`);
        this.pwa_applications = this.pwa_applications.filter((object) => {
          return object.id !== id;
        });
      } catch (err) {
        console.log(err);
      }
    },

    // Restore Application
    async restoreApplication(id: number) {
      try {
        await axios.patch(`/api/pwa/restore/${id}`);
      } catch (err) {
        console.log(err);
      }
    }
  }
});
