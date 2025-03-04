import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';
import type { CreateTemplate, AdminsTemplatesStateProps, CreateTemplateCustom } from '@/types/admins/templates';
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
    }
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
        const formData = new FormData();

        formData.append('status', String(body.status ?? ''));
        formData.append('category_id', String(body.category_id ?? ''));
        formData.append('subcategory_id', String(body.subcategory_id ?? ''));
        formData.append('user_id', String(body.user_id ?? ''));
        formData.append('is_available_for_team', String(body.is_available_for_team));

        if (body.icon) formData.append('icon', body.icon);
        if (body.banner_1) formData.append('banner_1', body.banner_1);
        if (body.banner_2) formData.append('banner_2', body.banner_2);
        if (body.banner_3) formData.append('banner_3', body.banner_3);
        if (body.banner_4) formData.append('banner_4', body.banner_4);
        if (body.banner_5) formData.append('banner_5', body.banner_5);
        if (body.banner_6) formData.append('banner_6', body.banner_6);

        await axios.post('/api/pwa-template', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });

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

    // Create Template from action
    async createTemplateCustom(body: CreateTemplateCustom) {
      console.log(body);
      try {
        if (!body.icon || body.banners.length < 3 || body.banners.length > 6) {
          alert('Please select an icon and 3 to 6 banners!');
          return;
        }

        const formData = new FormData();
        formData.append('icon', body.icon);

        body.banners.forEach((file, index) => {
          formData.append(`banners[${index}]`, file);
        });

        await axios.post('/api/pwa-template/custom', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        await this.getTemplatesData();
      } catch (err) {
        console.log(err);
      }
    }

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
