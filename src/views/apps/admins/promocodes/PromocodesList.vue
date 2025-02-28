<script setup lang="ts">
import { ref, computed, onMounted, shallowRef } from "vue";

import SvgSprite from "@/components/shared/SvgSprite.vue";
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";
import type { Header, Item } from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";
import { useAdminsPromocodes } from "@/stores/apps/admins/promocodes";

const page = ref({ title: "Promocodes list" });

const breadcrumbs = shallowRef([
  {
    title: "Admins",
    disabled: false,
    href: "#",
  },
  {
    title: "Promocodes",
    disabled: true,
    href: "#",
  },
]);

const store = useAdminsPromocodes();

const getPromocodes = computed(() => {
  return store.getPromocodes;
});

onMounted(() => {
  store.getPromocodesData();
});

const searchField = ref("code");
const searchValue = ref("");

const headers: Header[] = [
  { text: "ID", value: "id", sortable: true },
  { text: "CODE", value: "code", sortable: true },
  { text: "DISCOUNT", value: "discount", sortable: true },
  { text: "CREATED", value: "created_at", sortable: true },
];

const items = computed(() => getPromocodes.value);
const themeColor = ref("rgb(var(--v-theme-primary))");

const itemsSelected = ref<Item[]>([]);

const dialogStandart = ref(false);

const formData = ref({
  quantity: "",
  discount: "",
  expired_at: new Date(),
});

const { createPromocode } = store;

const onSubmitForm = async () => {
  try {
    await createPromocode({
      quantity: formData.value.quantity,
      discount: formData.value.discount,
      expired_at: formData.value.expired_at.toISOString().split("T")[0],
    });
    store.getPromocodesData();
    formData.value = {
      quantity: "",
      discount: "",
      expired_at: new Date(),
    };
  } catch (err) {
    console.log(err);
  }
  dialogStandart.value = false;
};
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
                <v-dialog v-model="dialogStandart" class="customer-modal">
                  <template v-slot:activator="{ props }">
                    <v-btn variant="flat" color="primary" rounded="md" v-bind="props">
                      <template v-slot:prepend>
                        <SvgSprite name="custom-plus" style="width: 20px; height: 20px" />
                      </template>
                      Add Promocodes
                    </v-btn>
                  </template>
                  <v-card>
                    <perfect-scrollbar style="max-height: calc(100vh - 48px)">
                      <v-card-title class="pa-5">
                        <span class="text-h5">New Promocodes</span>
                      </v-card-title>
                      <v-divider></v-divider>
                      <v-card-text>
                        <v-container>
                          <v-col cols="12">
                            <v-label class="mb-2">Quantity</v-label>
                            <v-text-field
                              single-line
                              type="number"
                              hide-details
                              placeholder="Enter quantity"
                              required
                              variant="outlined"
                              density="comfortable"
                              rounded="0"
                              v-model="formData.quantity"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-label class="mb-2">Discount</v-label>
                            <v-text-field
                              single-line
                              type="number"
                              hide-details
                              placeholder="Enter discount"
                              required
                              variant="outlined"
                              density="comfortable"
                              rounded="0"
                              v-model="formData.discount"
                            ></v-text-field>
                          </v-col>
                          <v-date-picker
                            style="width: 100%"
                            width="337"
                            v-model="formData.expired_at"
                          ></v-date-picker>
                        </v-container>
                      </v-card-text>
                      <v-divider></v-divider>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="error"
                          rounded="md"
                          variant="text"
                          @click="dialogStandart = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          color="primary"
                          rounded="md"
                          variant="flat"
                          @click="onSubmitForm"
                        >
                          Add
                        </v-btn>
                      </v-card-actions>
                    </perfect-scrollbar>
                  </v-card>
                </v-dialog>
                <v-btn
                  icon
                  variant="text"
                  aria-label="download"
                  rounded="md"
                  size="small"
                >
                  <SvgSprite
                    name="custom-document-2"
                    class="text-lightText"
                    style="width: 24px; height: 24px"
                  />
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
