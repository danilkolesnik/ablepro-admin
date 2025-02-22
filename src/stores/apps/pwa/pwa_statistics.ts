import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';
import type { ParamsPwaStatisticsAll, ParamsPwaStatisticsDetails, PwaStatisticsStateProps } from '@/types/pwa/statistics';
// types

export const usePwaStatistics = defineStore({
  id: 'pwaPush',
  state: (): PwaStatisticsStateProps => ({
    pwa_statistics: [],
    pwa_statistics_details: {}
  }),
  getters: {
    // Get Statistics from Getters
    getStatisticsAll(state) {
      return state.pwa_statistics;
    },
    // Get Statistics Details from Getters
    getStatisticsDetails(state) {
        return state.pwa_statistics_details;
      }
  },
  actions: {
    // Get Data All Statistics from action
    async getDataAllStatistics(params: ParamsPwaStatisticsAll) {
      try {
        const data = await axios.get('/api/pwa/statistics/all', {
          params: {
            limit: params.limit,
            offset: params.offset,
            pwa_ids: params.pwa_ids,
            from: params.from,
            to: params.to
          }
        });
        this.pwa_statistics = data.data;
      } catch (err) {
        console.log(err);
      }
    },

    // Get Pushes from action
    async getDataOneStatistics(params: ParamsPwaStatisticsDetails) {
      try {
        const data = await axios.get(`/api/statistics/details`,{params: {
            limit: params.limit,
            from: params.from,
            to: params.to
        }});

        this.pwa_statistics_details = data.data;
      } catch (error) {
        console.error(error);
      }
    }
  }
});
