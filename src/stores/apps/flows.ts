import { defineStore } from 'pinia';
// project imports
import axios from '@/utils/axios';
// types
import type { FlowStateProps } from '@/types/flows/index';

// interface ICreateTransaction {
//   id: number;
//   currency_network: number;
// }

// interface ICreateTopUp {
//   amount: number;
//   currency_network_id: number;
// }

// interface IParamsWriteOffs {
//   user: number;
//   start_date: string;
//   end_date: string;
//   flow: number;
//   platform_id: number;
// }

//USERS TAB STORE
export const useFlows = defineStore({
  id: 'flows',
  state: (): FlowStateProps => ({
    flows: [],
  }),
  getters: {
    // Get Flows from Getters
    getFlows(state) {
      return state.flows;
    }
  },
  actions: {
    // Fetch Flows from action
    async fetchFlows() {
      try {
        const response = await axios.get('/api/flow');

        this.flows = response.data.data;
        return response.data.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        console.error(error);
      }
    },

    // async createTransaction(body: ICreateTransaction) {
    //   try {
    //     const response = await axios.post('/api/finance', body);
    //     await this.fetchTransactions();
    //     return response.data.data;
    //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //   } catch (error: any) {
    //     console.error(error);
    //   }
    // },

    // async createTopUp(body: ICreateTopUp) {
    //   try {
    //     const response = await axios.post('/api/finance/top-up', body);
    //     await this.fetchTransactions();
    //     return response.data.data;
    //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //   } catch (error: any) {
    //     console.error(error);
    //   }
    // },

    // async fetchWriteOffs(params: IParamsWriteOffs) {
    //   try {
    //     const response = await axios.get(
    //       `/api/finance/write-offs?user=${params.user}&start_date=${params.start_date}&end_date=${params.end_date}&flow=${params.flow}&platform_id=${params.platform_id}`
    //     );

    //     return response.data;
    //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //   } catch (error: any) {
    //     console.error(error);
    //   }
    // }
  }
});
