<script setup lang="ts">
import { ref, computed, onMounted, shallowRef } from 'vue';
import { useCustomers } from '@/stores/apps/customers';

import SvgSprite from '@/components/shared/SvgSprite.vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import type { Header, Item } from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

const page = ref({ title: 'Flows' });

const breadcrumbs = shallowRef([
  {
    title: 'Dashboard',
    disabled: false,
    href: '/dashboard'
  },
  {
    title: 'Flows',
    disabled: true,
    href: '#'
  }
]);

const store = useCustomers();

const getCustomers = computed(() => {
  return store.getCustomers;
});

onMounted(() => {
  store.fetchCustomers();
});

// watch(getCustomers, (newCustomers) => {
//   console.log('Users:', newCustomers);
// });

const searchField = ref('name');
const searchValue = ref('');

const headers: Header[] = [
  { text: 'ID', value: 'id', sortable: true },
  { text: 'Flow ID', value: 'flow_id', sortable: true },
  { text: 'URL', value: 'url', sortable: true },
  { text: 'Webmaster', value: 'webmaster', sortable: true },
  { text: 'Date', value: 'date', sortable: true },
  { text: 'System pushes on/off', value: 'pushes' }
];

const items = computed(() => getCustomers.value);
const themeColor = ref('rgb(var(--v-theme-primary))');
const { deleteCustomer } = store;

const itemsSelected = ref<Item[]>([]);

const dialog = ref(false);
</script>

<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
  <v-row>
    <v-col cols="12" md="12">
      <v-card elevation="0" variant="outlined" class="bg-surface overflow-hidden" rounded="lg">
        <v-card-item>
          <v-row justify="space-between" class="align-center">
            <v-col cols="12" md="3">
              <v-text-field
                type="text"
                variant="outlined"
                persistent-placeholder
                placeholder="Search 200 records..."
                v-model="searchValue"
                density="comfortable"
                hide-details
              >
                <template v-slot:prepend-inner>
                  <SvgSprite name="custom-search" class="text-lightText" style="width: 14px; height: 14px" />
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <div class="d-flex ga-2 justify-end">
                <v-dialog v-model="dialog" class="customer-modal">
                  <template v-slot:activator="{ props }">
                    <v-btn variant="flat" color="primary" rounded="md" v-bind="props">
                      <template v-slot:prepend>
                        <SvgSprite name="custom-plus" style="width: 20px; height: 20px" />
                      </template>
                      Create Flow
                    </v-btn>
                  </template>
                  <v-card>
                    <perfect-scrollbar style="max-height: calc(100vh - 48px)">
                      <v-card-title class="pa-5">
                        <span class="text-h5">New flow</span>
                      </v-card-title>
                      <v-divider></v-divider>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col md="12" cols="12">
                              <v-row>
                                <v-col cols="12">
                                  <v-label class="mb-2">Select user</v-label>
                                  <v-autocomplete
                                    :items="['User1...', 'User2...', 'User3...']"
                                    label="Single"
                                    rounded="0"
                                    color="primary"
                                    single-line
                                    density="comfortable"
                                    hide-details
                                    variant="outlined"
                                  ></v-autocomplete>
                                </v-col>
                                <v-col cols="12">
                                  <v-label class="mb-2">Webmaster e-mail</v-label>
                                  <v-text-field
                                    single-line
                                    placeholder="demo.dev@spendy.pro"
                                    hide-details
                                    variant="outlined"
                                    required
                                    density="comfortable"
                                    rounded="0"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-label class="mb-2">URL</v-label>
                                  <v-text-field
                                    single-line
                                    type="text"
                                    hide-details
                                    placeholder="https://mydomain.com/?clickid={clickid}&sub1={t1}&sub2={t2}&sub3={t3}&sub4={t4}&sub5={t5}&sub6={t6}"
                                    required
                                    variant="outlined"
                                    density="comfortable"
                                    rounded="0"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-label class="mb-2">Flow ID (Only letters and numbers without spaces or special characters)
                                </v-label>
                                  <v-text-field
                                    single-line
                                    type="text"
                                    hide-details
                                    placeholder="Flow ID"
                                    required
                                    variant="outlined"
                                    density="comfortable"
                                    rounded="0"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>
                      <v-divider></v-divider>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="error" rounded="md" variant="text" @click="(dialog = false)"> Cancel </v-btn>
                        <v-btn color="primary" rounded="md" variant="flat" @click="(dialog = false)"> Create </v-btn>
                      </v-card-actions>
                    </perfect-scrollbar>
                  </v-card>
                </v-dialog>
                <v-btn icon variant="text" aria-label="download" rounded="md" size="small">
                  <SvgSprite name="custom-document-2" class="text-lightText" style="width: 24px; height: 24px" />
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card-item>
        <v-divider></v-divider>
        <v-card-text class="pa-0">
          <EasyDataTable
            :headers="headers"
            :items="items"
            table-class-name="customize-table invoice-table"
            :theme-color="themeColor"
            :search-field="searchField"
            :search-value="searchValue"
            :rows-per-page="10"
            v-model:items-selected="itemsSelected"
          >
            <template #item-name="{ name }">
              <div class="player-wrapper">
                <h6 class="text-subtitle-1 mb-0">{{ name }}</h6>
              </div>
            </template>
            <template #item-email="{ email }">
              <div>{{ email }}</div>
            </template>
            <template #item-role="{ role }">
              <div>{{ role }}</div>
            </template>
            <template #item-telegram="{ telegram }">
              <div>{{ telegram }}</div>
            </template>
            <template #item-host="{ host }">
              <div>{{ host }}</div>
            </template>
            <template #item-operation="item">
              <div class="operation-wrapper">
                <v-btn icon color="secondary" aria-label="view" variant="text" rounded="md">
                  <SvgSprite name="custom-eye" style="width: 20px; height: 20px" />
                </v-btn>
                <v-btn icon color="primary" aria-label="edit" variant="text" rounded="md">
                  <SvgSprite name="custom-edit-outline" style="width: 20px; height: 20px" />
                </v-btn>
                <v-btn icon color="error" aria-label="trash" @click="deleteCustomer(item.name)" rounded="md">
                  <SvgSprite name="custom-trash" style="width: 20px; height: 20px" />
                </v-btn>
              </div>
            </template>
          </EasyDataTable>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<style lang="scss">
.customer-modal {
  width: calc(100% - 48px);
  min-width: 340px;
  max-width: 820px;
}
</style>
