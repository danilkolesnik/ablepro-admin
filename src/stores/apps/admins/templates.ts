import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';
import type { CreateTemplate, AdminsTemplatesStateProps } from '@/types/admins/templates';
// types

export const useAdminsTemplates = defineStore({
  id: 'adminsTemplates',
  state: (): AdminsTemplatesStateProps => ({
    admins_templates: [],
    admin_data_edit: {}
  }),
  getters: {
    // Get Templates from Getters
    getTemplates(state) {
      return state.admins_templates;
    },
  },
  actions: {
    // Get Templates from action
    async getTemplatesData() {
      try {
        const response = await axios.get(`/api/pwa-template`);

        this.admins_templates = response.data.data.data;
      } catch (error) {
        console.error(error);
      }
    },

    // Create Template from action
    async createTemplate(body: CreateTemplate) {
      try {
        await axios.post('/api/pwa-template', body);
        await this.getTemplatesData();
      } catch (err) {
        console.log(err);
      }
    },

    // Get Data for Create Template from action
    async getDataCreateTemplate(id: number) {
      try {
        const data = await axios.get(`/api/pwa-template/${id}/edit`);
        return data.data;
      } catch (err) {
        console.log(err);
      }
    },

        // // Create Template from action
        // async createTemplateCustom(body: CreateTemplateCustom) {
        //   try {
        //     await axios.post('/api/pwa-template', body);
        //     await this.getTemplatesData();
        //   } catch (err) {
        //     console.log(err);
        //   }
        // },

  //   // Update Template from action
  //   async updateTemplate(id: number, body: CreateAdminsTemplate) {
  //     try {
  //       await axios.put(`/api/pwa-template/${id}`, body);
  //       await this.getAdminsTemplatesData();
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   },
  // }
  }
});
