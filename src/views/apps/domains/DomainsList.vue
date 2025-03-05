<script setup lang="ts">
import { ref, computed, onMounted, shallowRef } from "vue";
import { useDomains } from "@/stores/apps/domains";

import SvgSprite from "@/components/shared/SvgSprite.vue";
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";
import type { Header, Item } from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const page = ref({ title: t("Domains list") });

const breadcrumbs = shallowRef([
  {
    title: t("Domains"),
    disabled: false,
    href: "#",
  },
  {
    title: t("List"),
    disabled: true,
    href: "#",
  },
]);

const store = useDomains();

const getDomains = computed(() => {
  return store.getDomains;
});

const formDataDomain = ref({
  price: 0,
  domains: "",
  category: null,
});

const formDataCustomDomain = ref({
  domain: "",
});

const { createDomains, createCustomDomains } = store;

const onSubmitForm = async (type = "standart") => {
  if (type === "standart") {
    const body = {
      price: formDataDomain.value.price,
      domains: formDataDomain.value.domains,
      category: formDataDomain.value.category,
    };
    formDataDomain.value = {
      price: 0,
      domains: "",
      category: null,
    };
    await createDomains(body);
    dialogStandart.value = false;
  } else {
    formDataCustomDomain.value = {
      domain: "",
    };

    await createCustomDomains({ domain: formDataCustomDomain.value.domain });
    dialogCustom.value = false;
  }
};

onMounted(() => {
  store.fetchDomains();
});

const searchField = ref("domain");
const searchValue = ref("");

const headers: Header[] = [
  { text: t("ID"), value: "id", sortable: true },
  { text: t("DOMAIN"), value: "domain", sortable: true },
  { text: t("PRICE"), value: "price", sortable: true },
  { text: t("USER ID"), value: "user", sortable: true },
  { text: t("CATEGORY"), value: "category", sortable: true },
  { text: t("CREATING DATE"), value: "created_at", sortable: true },
  { text: t("STATUS"), value: "status", sortable: true },
];

const items = computed(() => getDomains.value);
const themeColor = ref("rgb(var(--v-theme-primary))");

const itemsSelected = ref<Item[]>([]);

const dialogStandart = ref(false);
const dialogCustom = ref(false);
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
                      {{ t("Add domain") }}
                    </v-btn>
                  </template>
                  <v-card>
                    <perfect-scrollbar style="max-height: calc(100vh - 48px)">
                      <v-card-title class="pa-5">
                        <span class="text-h5">{{ t("New Domain") }}</span>
                      </v-card-title>
                      <v-divider></v-divider>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col md="3" cols="12" class="text-center">
                              <v-avatar
                                size="72"
                                variant="outlined"
                                color="primary"
                                class="dashed"
                              >
                                <img
                                  src="@/assets/images/users/avatar-1.png"
                                  width="72"
                                  alt="profile"
                                />
                                <input
                                  type="file"
                                  aria-label="upload"
                                  class="preview-upload"
                                />
                              </v-avatar>
                            </v-col>
                            <v-col md="9" cols="12">
                              <v-row>
                                <v-col cols="12">
                                  <v-label class="mb-2">Domain</v-label>
                                  <v-text-field
                                    single-line
                                    placeholder="Enter domain"
                                    hide-details
                                    variant="outlined"
                                    required
                                    density="comfortable"
                                    rounded="0"
                                    v-model="formDataDomain.domains"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-label class="mb-2">Price</v-label>
                                  <v-text-field
                                    single-line
                                    hide-details
                                    placeholder="Enter customer email"
                                    required
                                    variant="outlined"
                                    density="comfortable"
                                    rounded="0"
                                    v-model="formDataDomain.price"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-label class="mb-2">Category</v-label>
                                  <v-autocomplete
                                    :items="['LINK', 'PWA', 'TGAPPS']"
                                    label="Select Category"
                                    rounded="0"
                                    color="primary"
                                    single-line
                                    density="comfortable"
                                    hide-details
                                    variant="outlined"
                                    v-model="formDataDomain.category"
                                  ></v-autocomplete>
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
                          @click="dialogStandart = false"
                        >
                          {{ t("Cancel") }}
                        </v-btn>
                        <v-btn
                          color="primary"
                          rounded="md"
                          variant="flat"
                          @click="onSubmitForm('standart')"
                        >
                          {{ t("Add") }}
                        </v-btn>
                      </v-card-actions>
                    </perfect-scrollbar>
                  </v-card>
                </v-dialog>
                <v-dialog v-model="dialogCustom" class="customer-modal">
                  <template v-slot:activator="{ props }">
                    <v-btn variant="flat" color="primary" rounded="md" v-bind="props">
                      <template v-slot:prepend>
                        <SvgSprite name="custom-plus" style="width: 20px; height: 20px" />
                      </template>
                      {{ t("Add custom domain") }}
                    </v-btn>
                  </template>
                  <v-card>
                    <perfect-scrollbar style="max-height: calc(100vh - 48px)">
                      <v-card-title class="pa-5">
                        <span class="text-h5">{{ t("New Domain") }}</span>
                      </v-card-title>
                      <v-divider></v-divider>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col md="3" cols="12" class="text-center">
                              <v-avatar
                                size="72"
                                variant="outlined"
                                color="primary"
                                class="dashed"
                              >
                                <img
                                  src="@/assets/images/users/avatar-1.png"
                                  width="72"
                                  alt="profile"
                                />
                                <input
                                  type="file"
                                  aria-label="upload"
                                  class="preview-upload"
                                />
                              </v-avatar>
                            </v-col>
                            <v-col md="9" cols="12">
                              <v-row>
                                <v-col cols="12">
                                  <v-label class="mb-2">Domain</v-label>
                                  <v-text-field
                                    single-line
                                    placeholder="Enter domain"
                                    hide-details
                                    variant="outlined"
                                    required
                                    density="comfortable"
                                    rounded="0"
                                    v-model="formDataCustomDomain.domain"
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
                          @click="dialogCustom = false"
                        >
                          {{ t("Cancel") }}
                        </v-btn>
                        <v-btn
                          color="primary"
                          rounded="md"
                          variant="flat"
                          @click="onSubmitForm('custom')"
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
