import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';
// types
import type { BioFormStateProps } from '@/types/profile/bioform';

interface IUpdateUser {
  name: string;
  email: string;
  telegram: string;
  profile_photo: string;
}

interface IUpdatePassword {
  current_password: string;
  password: string;
}

export const useBioForm = defineStore({
  id: 'bioform',
  state: (): BioFormStateProps => ({
    name: '',
    email: '',
    telegram: '',
    balance: 0,
    tariff_expiration_date: '',
    profile_photo_path: '',
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
        const response = await axios.get(`/api/users/profile`);
        this.name = response.data.user.name;
        this.telegram = response.data.user.telegram;
        this.email = response.data.user.email;
        this.balance = response.data.user.balance;
        this.tariff_expiration_date = response.data.user.tariff_expiration_date;
        this.profile_photo_path = response.data.user.profile_photo_path;
        return response.data;
      } catch (error) {
        console.error(error);
      }
    },

    // Update User from action
    async updateUser(body: IUpdateUser) {
      try {
        const data = await axios.put(`/api/users/profile`, body);
        await this.fetchUserData();
        return data.data;
      } catch (err) {
        console.log(err);
      }
    },

    // Update User from action
    async updatePassword(body: IUpdatePassword) {
      try {
        const data = await axios.put(`/api/users/password/`, body);
        await this.fetchUserData();
        return data.data;
      } catch (err) {
        console.log(err);
      }
    },

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
