<script setup lang="ts">
import { ref, computed, onMounted, shallowRef } from "vue";

import SvgSprite from "@/components/shared/SvgSprite.vue";
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";
import type { Header, Item } from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";
import { useAdminsPromocodes } from "@/stores/apps/admins/promocodes";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const page = ref({ title: t("Promocodes list") });

const breadcrumbs = shallowRef([
  {
    title: t("Admins"),
    disabled: false,
    href: "#",
  },
  {
    title: t("Promocodes"),
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
  { text: t("ID"), value: "id", sortable: true },
  { text: t("DISCOUNT"), value: "discount", sortable: true },
  { text: t("CODE"), value: "code", sortable: true },
  { text: t("CREATED"), value: "created_at", sortable: true },
  { text: t("USER"), value: "user", sortable: true },
];

const items = computed(() => getPromocodes.value);
const themeColor = ref("rgb(var(--v-theme-primary))");

const itemsSelected = ref<Item[]>([]);

const dialogStandart = ref(false);

const selectDate = ref<Date>(new Date());
const dateFormatExpiredAt = computed(() => {
  if (selectDate.value) {
    const date = selectDate.value;
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  return "";
});

const formData = ref({
  quantity: "",
  discount: "",
});

const { createPromocode } = store;

const onSubmitForm = async () => {
  try {
    await createPromocode({
      quantity: formData.value.quantity,
      discount: formData.value.discount,
      expired_at: dateFormatExpiredAt.value,
    });
    store.getPromocodesData();
    formData.value = {
      quantity: "",
      discount: "",
    };
    selectDate.value = new Date();
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
                :placeholder="t('Search 200 records...')"
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
                      {{ t("Add Promocode") }}
                    </v-btn>
                  </template>
                  <v-card>
                    <perfect-scrollbar style="max-height: calc(100vh - 48px)">
                      <v-card-title class="pa-5">
                        <span class="text-h5">{{ t("New Promocodes") }}</span>
                      </v-card-title>
                      <v-divider></v-divider>
                      <v-card-text>
                        <v-container>
                          <v-col cols="12">
                            <v-label class="mb-2">{{ t("Quantity") }}</v-label>
                            <v-text-field
                              single-line
                              type="number"
                              hide-details
                              :placeholder="t('Enter quantity')"
                              required
                              variant="outlined"
                              density="comfortable"
                              rounded="0"
                              v-model="formData.quantity"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-label class="mb-2">{{ t("Discount") }}</v-label>
                            <v-text-field
                              single-line
                              type="number"
                              hide-details
                              :placeholder="t('Enter discount')"
                              required
                              variant="outlined"
                              density="comfortable"
                              rounded="0"
                              v-model="formData.discount"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-label class="mb-2">{{ t("Expired at") }}</v-label>
                            <v-menu :close-on-content-click="false">
                              <template v-slot:activator="{ props }">
                                <v-text-field
                                  single-line
                                  hide-details
                                  variant="outlined"
                                  v-bind="props"
                                  v-model="dateFormatExpiredAt"
                                  :placeholder="t('DD/MM/YYYY')"
                                  readonly
                                  density="comfortable"
                                  color="primary"
                                >
                                  <template v-slot:append-inner>
                                    <SvgSprite
                                      name="custom-calendar"
                                      class="text-lightText"
                                      style="width: 20px; height: 20px"
                                    />
                                  </template>
                                </v-text-field>
                              </template>
                              <v-date-picker
                                v-model="selectDate"
                                hide-header
                                color="primary"
                              ></v-date-picker>
                            </v-menu>
                          </v-col>
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
                          {{ t("Cancel") }}
                        </v-btn>
                        <v-btn
                          color="primary"
                          rounded="md"
                          variant="flat"
                          @click="onSubmitForm"
                        >
                          {{ t("Add") }}
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
