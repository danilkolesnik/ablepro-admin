<script setup lang="ts">
import { ref, computed, onMounted, shallowRef, watch } from "vue";
import { usePixels } from "@/stores/apps/pixels";

import SvgSprite from "@/components/shared/SvgSprite.vue";
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";
import type { Header, Item } from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";
import { useI18n } from "vue-i18n";

const page = ref({ title: "Facebook Pixel List" });

const breadcrumbs = shallowRef([
  {
    title: "Facebook Pixel",
    disabled: false,
    href: "#",
  },
  {
    title: "List",
    disabled: true,
    href: "#",
  },
]);

const store = usePixels();

const { t } = useI18n();

const getPixels = computed(() => {
  return store.getPixels;
});

onMounted(() => {
  store.fetchPixels();
});

const searchField = ref("name");
const searchValue = ref("");

const items = computed(() => getPixels.value);
const themeColor = ref("rgb(var(--v-theme-primary))");
// const { deleteDomain } = store;

const headers: Header[] = [
  { text: "Pixel", value: "id", sortable: true },
  { text: t("Token"), value: "token", sortable: true },
  { text: t("Creation date"), value: "created_at", sortable: true },
  { text: t("Transfer status"), value: "transfer_status", sortable: true },
  { text: t("Action"), value: "operation" },
];

const itemsSelected = ref<Item[]>([]);

const dialog = ref(false);
</script>

<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
  <v-row>
    <v-col cols="12" md="12">
      <v-card
        elevation="0"
        variant="outlined"
        class="bg-surface overflow-hidden"
        rounded="lg"
      >
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
                  <SvgSprite
                    name="custom-search"
                    class="text-lightText"
                    style="width: 14px; height: 14px"
                  />
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
                      Add pixel
                    </v-btn>
                  </template>
                  <v-card>
                    <perfect-scrollbar style="max-height: calc(100vh - 48px)">
                      <v-card-title class="pa-5">
                        <span class="text-h5">New Pixel</span>
                      </v-card-title>
                      <v-divider></v-divider>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col md="9" cols="12">
                              <v-row>
                                <v-col cols="12">
                                  <v-label class="mb-2">Pixel</v-label>
                                  <v-text-field
                                    single-line
                                    placeholder="Enter pixel"
                                    hide-details
                                    variant="outlined"
                                    required
                                    density="comfortable"
                                    rounded="0"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-label class="mb-2">Token</v-label>
                                  <v-text-field
                                    single-line
                                    hide-details
                                    placeholder="Enter token"
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
                        <v-btn
                          color="error"
                          rounded="md"
                          variant="text"
                          @click="dialog = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          color="primary"
                          rounded="md"
                          variant="flat"
                          @click="dialog = false"
                        >
                          Add
                        </v-btn>
                      </v-card-actions>
                    </perfect-scrollbar>
                  </v-card>
                </v-dialog>
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
            <template #item-pixel="{ pixel }">
              <div>{{ pixel }}</div>
            </template>
            <template #item-token="{ token }">
              <div class="token-container">
                <div class="token-item">{{ token }}</div>
              </div>
            </template>
            <template #item-created_at="{ created_at }">
              <div>{{ created_at }}</div>
            </template>
            <template #item-trasfer_status="{ transfer_status }">
              <div>{{ transfer_status }}</div>
            </template>
            <template #item-operation="item">
              <div class="operation-wrapper">
                <v-btn icon color="primary" aria-label="edit" variant="text" rounded="md">
                  <SvgSprite
                    name="custom-edit-outline"
                    style="width: 20px; height: 20px"
                  />
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

.token-container {
  max-width: 150px;
  overflow-x: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 4px;
}

.token-item {
  padding: 4px 8px;
  background: #f0f0f0;
  border-radius: 4px;
}
</style>
