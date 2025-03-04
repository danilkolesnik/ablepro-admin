<script setup lang="ts">
import { ref, computed, onMounted, shallowRef, watch } from 'vue';
import { usePages } from '@/stores/apps/pages';

import SvgSprite from '@/components/shared/SvgSprite.vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import type { Header, Item } from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

const page = ref({ title: 'Page Management' });

const breadcrumbs = shallowRef([
  {
    title: 'Page Management',
    disabled: false,
    href: '#'
  },
  {
    title: 'Pages',
    disabled: true,
    href: '#'
  }
]);

const store = usePages();

const getPagesList = computed(() => {
  return store.getPagesList;
});

onMounted(() => {
  store.fetchPages();
});

const searchField = ref('name');
const searchValue = ref('');

const headers: Header[] = [
  { text: 'Name', value: 'name', sortable: true },
  { text: 'Route', value: 'route', sortable: true },
  { text: 'Is Visible?', value: 'is_visible', sortable: true },
];

const items = computed(() => getPagesList.value);
const themeColor = ref('rgb(var(--v-theme-primary))');

// const { deleteDomain } = store;

const itemsSelected = ref<Item[]>([]);

const dialog = ref(false);
watch(getPagesList, (suka) => {
  console.log('Pages:', suka);
});
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
                      Create Page
                    </v-btn>
                  </template>
                  <v-card>
                    <perfect-scrollbar style="max-height: calc(100vh - 48px)">
                      <v-card-title class="pa-5">
                        <span class="text-h5">New Page</span>
                      </v-card-title>
                      <v-divider></v-divider>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col md="9" cols="12">
                              <v-row>
                                <v-col cols="12">
                                  <v-label class="mb-2">Name</v-label>
                                  <v-text-field
                                    single-line
                                    placeholder="Enter name"
                                    hide-details
                                    variant="outlined"
                                    required
                                    density="comfortable"
                                    rounded="0"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-label class="mb-2">Route</v-label>
                                  <v-text-field
                                    single-line
                                    hide-details
                                    placeholder="Enter route"
                                    required
                                    variant="outlined"
                                    density="comfortable"
                                    rounded="0"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-label class="mb-2">Icon</v-label>
                                  <v-text-field
                                    single-line
                                    hide-details
                                    placeholder="Icon"
                                    required
                                    variant="outlined"
                                    density="comfortable"
                                    rounded="0"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-label class="mb-2">Roles</v-label>
                                  <v-text-field
                                    single-line
                                    hide-details
                                    placeholder="ROLES SELECT"
                                    required
                                    variant="outlined"
                                    density="comfortable"
                                    rounded="0"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-label class="mb-2">Group</v-label>
                                  <v-text-field
                                    single-line
                                    hide-details
                                    placeholder="GROUP SELECT"
                                    required
                                    variant="outlined"
                                    density="comfortable"
                                    rounded="0"
                                  ></v-text-field>
                                </v-col>
                                <v-label class="mb-2">IS_VISIBLE_CHECKBOX</v-label>
                              </v-row>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>
                      <v-divider></v-divider>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="error" rounded="md" variant="text" @click="(dialog = false)"> Cancel </v-btn>
                        <v-btn color="primary" rounded="md" variant="flat" @click="(dialog = false)"> Add </v-btn>
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
          <template #item-id="{ id }">
            <div class="player-wrapper">
              <h6 class="text-subtitle-1 mb-0">{{ id }}</h6>
            </div>
            </template>
            <template #item-pixel="{ name }">
              <div>{{ name }}</div>
            </template>
            <template #item-route="{ route }">
              <div>{{ route }}</div>
            </template>
            <template #item-is_visible="{ is_visible }">
              <div>{{ is_visible === 1 ? 'True' : 'False' }}</div>
            </template>
            <template #item-operation="item">
              <div class="operation-wrapper">
                <v-btn icon color="secondary" aria-label="view" variant="text" rounded="md">
                  <SvgSprite name="custom-eye" style="width: 20px; height: 20px" />
                </v-btn>
                <v-btn icon color="primary" aria-label="edit" variant="text" rounded="md">
                  <SvgSprite name="custom-edit-outline" style="width: 20px; height: 20px" />
                </v-btn>
                <!-- @click="deleteDomain(item.id)" -->
                <v-btn icon color="error" aria-label="trash" rounded="md">
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
