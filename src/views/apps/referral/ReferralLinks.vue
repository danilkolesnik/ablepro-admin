<script setup lang="ts">
import { ref, computed, onMounted, shallowRef } from 'vue';
import { useReferral } from '@/stores/apps/referral';

import SvgSprite from '@/components/shared/SvgSprite.vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import type { Header, Item } from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

const page = ref({ title: 'Referral links' });

const breadcrumbs = shallowRef([
  {
    title: 'Referral',
    disabled: false,
    href: '#'
  },
  {
    title: 'Links',
    disabled: true,
    href: '#'
  }
]);

const store = useReferral();

const getLinks = computed(() => {
  return store.getLinks;
});


const formDataLink = ref({
  name: "",
  link: ""
})

const { createLink } = store;

const onSubmitForm = async (type = 'standart') => {

  if (type === 'standart') {
    const body = {
      name: formDataLink.value.name,
      link: formDataLink.value.link,
    }
    formDataLink.value = {
      name: '',
      link: '',
    };
    await createLink(body)
    dialogStandart.value = false
  }
}

onMounted(() => {
  store.fetchLinks();
});

const searchField = ref('name');
const searchValue = ref('');

const headers: Header[] = [
  { text: 'NAME', value: 'name', sortable: true },
  { text: 'LINK', value: 'link', sortable: true },
  { text: 'Referrals quantity', value: 'referrals_quantity', sortable: true },
  { text: 'Action', value: 'operation' }
];

const items = computed(() => getLinks.value);
const themeColor = ref('rgb(var(--v-theme-primary))');

const itemsSelected = ref<Item[]>([]);

const dialogStandart = ref(false);
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
                <v-dialog v-model="dialogStandart" class="customer-modal">
                  <template v-slot:activator="{ props }">
                    <v-btn variant="flat" color="primary" rounded="md" v-bind="props">
                      <template v-slot:prepend>
                        <SvgSprite name="custom-plus" style="width: 20px; height: 20px" />
                      </template>
                      Add Referral
                    </v-btn>
                  </template>
                  <v-card>
                    <perfect-scrollbar style="max-height: calc(100vh - 48px)">
                      <v-card-title class="pa-5">
                        <span class="text-h5">New Referral</span>
                      </v-card-title>
                      <v-divider></v-divider>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col md="3" cols="12" class="text-center">
                              <v-avatar size="72" variant="outlined" color="primary" class="dashed">
                                <img src="@/assets/images/users/avatar-1.png" width="72" alt="profile" />
                                <input type="file" aria-label="upload" class="preview-upload" />
                              </v-avatar>
                            </v-col>
                            <v-col md="9" cols="12">
                              <v-row>
                                <v-col cols="12">
                                  <v-label class="mb-2">Name</v-label>
                                  <v-text-field single-line placeholder="Enter Name" hide-details variant="outlined"
                                    required density="comfortable" rounded="0"
                                    v-model="formDataLink.name"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-label class="mb-2">Link</v-label>
                                  <v-text-field single-line hide-details placeholder="Enter Link" required
                                    variant="outlined" density="comfortable" rounded="0"
                                    v-model="formDataLink.link"></v-text-field>
                                </v-col>
                              </v-row>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>
                      <v-divider></v-divider>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="error" rounded="md" variant="text" @click="(dialogStandart = false)"> Cancel
                        </v-btn>
                        <v-btn color="primary" rounded="md" variant="flat" @click="onSubmitForm"> Add </v-btn>
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
