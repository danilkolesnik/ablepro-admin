<script setup lang="ts">
import { ref, computed, onMounted, shallowRef } from 'vue';
import { useReferral } from '@/stores/apps/referral';

import SvgSprite from '@/components/shared/SvgSprite.vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import type { Header, Item } from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

const page = ref({ title: 'Refferal Stats' });

const breadcrumbs = shallowRef([
  {
    title: 'Refferal',
    disabled: false,
    href: '#'
  },
  {
    title: 'Stats',
    disabled: true,
    href: '#'
  }
]);

const store = useReferral();

const getStats = computed(() => {
  return store.getStats;
});

onMounted(() => {
  store.fetchStats();
});

const searchField = ref('name');
const searchValue = ref('');

const headers: Header[] = [
  { text: 'ID', value: 'id', sortable: true },
  { text: 'DOMAIN', value: 'domain', sortable: true },
  { text: 'PRICE', value: 'price', sortable: true },
  { text: 'USER ID', value: 'user', sortable: true },
  { text: 'CATEGORY', value: 'category', sortable: true },
  { text: 'CREATING DATE', value: 'created_at', sortable: true },
  { text: 'STATUS', value: 'status', sortable: true },
];

const items = computed(() => getStats.value);
const themeColor = ref('rgb(var(--v-theme-primary))');

const itemsSelected = ref<Item[]>([]);
</script>

<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
  <v-row>
    <v-col cols="12" md="12">
      <v-card elevation="0" variant="outlined" class="bg-surface overflow-hidden" rounded="lg">
        <v-card-item>
          <v-row justify="space-between" class="align-center">
            <v-col cols="12" md="3">
              <v-text-field type="text" variant="outlined" persistent-placeholder placeholder="Search 200 records..."
                v-model="searchValue" density="comfortable" hide-details>
                <template v-slot:prepend-inner>
                  <SvgSprite name="custom-search" class="text-lightText" style="width: 14px; height: 14px" />
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <div class="d-flex ga-2 justify-end">
                <v-btn icon variant="text" aria-label="download" rounded="md" size="small">
                  <SvgSprite name="custom-document-2" class="text-lightText" style="width: 24px; height: 24px" />
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-card-item>
        <v-divider></v-divider>
        <v-card-text class="pa-0">
          <EasyDataTable :headers="headers" :items="items" table-class-name="customize-table invoice-table"
            :theme-color="themeColor" :search-field="searchField" :search-value="searchValue" :rows-per-page="10"
            v-model:items-selected="itemsSelected">
            <template #item-id="{ id }">
              <div class="player-wrapper">
                <h6 class="text-subtitle-1 mb-0">{{ id }}</h6>
              </div>
            </template>
            <template #item-domain="{ domain }">
              <div>{{ domain }}</div>
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
