import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';
// types
import type { BioFormStateProps } from '@/types/profile/bioform';

interface IUpdateUser {
  name: string;
  email: string;
  telegram: string;
  password: string;
  role: string;
  pages: number[];
  users: number[];
  all_users: boolean;
  tariffs: number;
  tariff_expiration_date: string;
  balance: number;
  credit_limit: number;
  referral_percent: number;
}

export const useBioForm = defineStore({
  id: 'bioform',
  state: (): BioFormStateProps => ({
    photo_profile: '',
    name: '',
    email: '',
    telegram_id: '',
    telegram_key: '',
    two_factor_confirmed_at: false
  }),
  getters: {
    // Get Data
    getData(state) {
      return state;
    }
  },
  actions: {
    // Fetch User Data from action
    async fetchUserData() {
      try {
        const response = await axios.get(`/api/user`);
        this.name = response.data.user.name;
        this.telegram_id = response.data.user.telegram;
        this.telegram_key = response.data.user.tg_key;
        this.email = response.data.user.email;
        this.photo_profile = response.data.user.profile_photo_url;
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },

    // Update User from action
    async updateUser(id: string, body: IUpdateUser) {
      try {
        const data = await axios.put(`/api/users/${id}`, body);
        await this.fetchUserData();
        return data.data;
      } catch (err) {
        console.log(err);
      }
    },

    // // Update User from action
    // async updatePassword(id: string, body: IUpdateUser) {
    //   try {
    //     const data = await axios.put(`/api/users/${id}`, body);
    //     await this.fetchUserData();
    //     return data.data;
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },

    // Enable Two Factor from action
    async activeTwoFactor() {
      try {
        const data = await axios.post(`/api/two-factor-authentication`);
        return data;
      } catch (err) {
        console.log(err);
      }
    },
    // Deactivate from action
    async deactiveTwoFactor() {
      try {
        const data = await axios.delete(`/api/two-factor-authentication`);
        return data;
      } catch (err) {
        console.log(err);
      }
    }
  }
});
