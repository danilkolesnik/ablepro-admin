<script setup lang="ts">
import { ref, computed, onMounted, shallowRef } from "vue";

import SvgSprite from "@/components/shared/SvgSprite.vue";
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";
import type { Header, Item } from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";
import { useAdminsTemplates } from "@/stores/apps/admins/templates";
import { usePwaApplications } from "@/stores/apps/pwa/pwa";
import { useCustomers } from "@/stores/apps/customers";
import type { CreateTemplate } from "@/types/admins/templates";
import type { Customer } from "@/types/customers";

const page = ref({ title: "PWA template list" });

const breadcrumbs = shallowRef([
  {
    title: "Admins",
    disabled: false,
    href: "#",
  },
  {
    title: "PWA templates",
    disabled: true,
    href: "#",
  },
]);

const store = useAdminsTemplates();
const { getDataCreateApplication } = usePwaApplications();
const { fetchCustomers } = useCustomers();

const statusItems = [
  { id: 0, label: "OFF" },
  { id: 1, label: "ON" },
];

const categoryItems = ref<{ id: number; children: { id: number; name: string }[] }[]>([]);
const sub_categoryItems = computed(() => {
  return categoryItems.value.find(
    (item) => item.id === formDataTemplate.value.category_id
  )?.children;
});

const userItems = ref<Customer[]>([]);

const getTemplates = computed(() => {
  return store.getTemplates;
});

const formDataTemplate = ref<CreateTemplate>({
  status: null,
  category_id: null,
  subcategory_id: null,
  icon: "",
  banner_1: "",
  banner_2: "",
  banner_3: "",
  banner_4: "",
  banner_5: "",
  banner_6: "",
  user_id: null,
  is_available_for_team: false as boolean,
});

const formDataTemplateCustom = ref<{ icon: File | null; banners: File[] }>({
  icon: null,
  banners: [],
});

const { createTemplate, createTemplateCustom } = store;

const onSubmitForm = async (type = "standart") => {
  if (type === "standart") {
    const body = {
      status: formDataTemplate.value.status,
      icon: formDataTemplate.value.icon,
      banner_1: formDataTemplate.value.banner_1,
      banner_2: formDataTemplate.value.banner_2,
      banner_3: formDataTemplate.value.banner_3,
      banner_4: formDataTemplate.value.banner_4,
      banner_5: formDataTemplate.value.banner_5,
      banner_6: formDataTemplate.value.banner_6,
      category_id: formDataTemplate.value.category_id,
      subcategory_id: formDataTemplate.value.subcategory_id,
      user_id: formDataTemplate.value.user_id,
      is_available_for_team: formDataTemplate.value.is_available_for_team,
    };

    formDataTemplate.value = {
      status: null,
      category_id: null,
      subcategory_id: null,
      icon: "",
      banner_1: "",
      banner_2: "",
      banner_3: "",
      banner_4: "",
      banner_5: "",
      banner_6: "",
      user_id: null,
      is_available_for_team: false,
    };

    await createTemplate(body);
    dialogStandart.value = false;
  } else {
    const body = {
      icon: formDataTemplateCustom.value.icon,
      banners: formDataTemplateCustom.value.banners,
    };

    formDataTemplateCustom.value = {
      icon: null,
      banners: [],
    };
    await createTemplateCustom(body);
    dialogCustom.value = false;
  }
};

onMounted(() => {
  getDataCreateApplication().then((res) => {
    categoryItems.value = res.categories;
  });
  fetchCustomers().then((res) => {
    userItems.value = res;
  });
  store.getTemplatesData();
});

const searchField = ref("name");
const searchValue = ref("");

const headers: Header[] = [
  { text: "NAME", value: "id", sortable: true },
  { text: "STATUS", value: "status", sortable: true },
  { text: "CREATED", value: "created_at", sortable: true },
];

const items = computed(() => getTemplates.value);
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
                      Add Template
                    </v-btn>
                  </template>
                  <v-card>
                    <perfect-scrollbar style="max-height: calc(100vh - 48px)">
                      <v-card-title class="pa-5">
                        <span class="text-h5">New Temlate</span>
                      </v-card-title>
                      <v-divider></v-divider>
                      <v-card-text>
                        <v-container>
                          <v-col cols="12">
                            <v-label class="mb-2">Status</v-label>
                            <v-autocomplete
                              :items="statusItems"
                              item-title="label"
                              item-value="id"
                              rounded="0"
                              color="primary"
                              single-line
                              density="comfortable"
                              hide-details
                              label="Status"
                              variant="outlined"
                              v-model="formDataTemplate.status"
                            ></v-autocomplete>
                          </v-col>

                          <v-col cols="12">
                            <v-label class="mb-2">Category</v-label>
                            <v-autocomplete
                              :items="categoryItems"
                              item-value="id"
                              item-title="name"
                              rounded="0"
                              color="primary"
                              single-line
                              density="comfortable"
                              hide-details
                              label="Category"
                              variant="outlined"
                              v-model="formDataTemplate.category_id"
                            ></v-autocomplete>
                          </v-col>
                          <v-col cols="12" v-if="formDataTemplate.category_id !== null">
                            <v-label class="mb-2">SubCategory</v-label>
                            <v-autocomplete
                              :items="sub_categoryItems"
                              item-title="name"
                              item-value="id"
                              rounded="0"
                              color="primary"
                              single-line
                              density="comfortable"
                              hide-details
                              variant="outlined"
                              label="SubCategory"
                              v-model="formDataTemplate.subcategory_id"
                            ></v-autocomplete>
                          </v-col>
                          <v-col cols="12">
                            <v-label class="mb-2">Icon</v-label>
                            <v-text-field
                              single-line
                              type="text"
                              hide-details
                              placeholder="Enter icon"
                              required
                              variant="outlined"
                              density="comfortable"
                              rounded="0"
                              v-model="formDataTemplate.icon"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-label class="mb-2">Banner 1</v-label>
                            <v-text-field
                              single-line
                              type="text"
                              hide-details
                              placeholder="Enter banner 1"
                              required
                              variant="outlined"
                              density="comfortable"
                              rounded="0"
                              v-model="formDataTemplate.banner_1"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-label class="mb-2">Banner 2</v-label>
                            <v-text-field
                              single-line
                              type="text"
                              hide-details
                              placeholder="Enter banner 2"
                              required
                              variant="outlined"
                              density="comfortable"
                              rounded="0"
                              v-model="formDataTemplate.banner_2"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-label class="mb-2">Banner 3</v-label>
                            <v-text-field
                              single-line
                              type="text"
                              hide-details
                              placeholder="Enter banner 3"
                              required
                              variant="outlined"
                              density="comfortable"
                              rounded="0"
                              v-model="formDataTemplate.banner_3"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-label class="mb-2">Banner 4</v-label>
                            <v-text-field
                              single-line
                              type="text"
                              hide-details
                              placeholder="Enter banner 4"
                              required
                              variant="outlined"
                              density="comfortable"
                              rounded="0"
                              v-model="formDataTemplate.banner_4"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-label class="mb-2">Banner 5</v-label>
                            <v-text-field
                              single-line
                              type="text"
                              hide-details
                              placeholder="Enter banner 5"
                              required
                              variant="outlined"
                              density="comfortable"
                              rounded="0"
                              v-model="formDataTemplate.banner_5"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-label class="mb-2">Banner 6</v-label>
                            <v-text-field
                              single-line
                              type="text"
                              hide-details
                              placeholder="Enter banner 6"
                              required
                              variant="outlined"
                              density="comfortable"
                              rounded="0"
                              v-model="formDataTemplate.banner_6"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12">
                            <v-label class="mb-2">User</v-label>
                            <v-autocomplete
                              :items="userItems"
                              item-title="name"
                              item-value="id"
                              rounded="0"
                              color="primary"
                              single-line
                              density="comfortable"
                              hide-details
                              variant="outlined"
                              v-model="formDataTemplate.user_id"
                            ></v-autocomplete>
                          </v-col>
                          <v-col cols="12">
                            <v-checkbox
                              class="mt-3"
                              :v-model="formDataTemplate.is_available_for_team"
                              label="Is available for team?"
                              color="primary"
                              hide-details
                            ></v-checkbox>
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
                          Cancel
                        </v-btn>
                        <v-btn
                          color="primary"
                          rounded="md"
                          variant="flat"
                          @click="onSubmitForm('standart')"
                        >
                          Add
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
                      Add custom template
                    </v-btn>
                  </template>
                  <v-card>
                    <perfect-scrollbar style="max-height: calc(100vh - 48px)">
                      <v-card-title class="pa-5">
                        <span class="text-h5">New Custom Template</span>
                      </v-card-title>
                      <v-divider></v-divider>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col cols="12">
                              <v-file-input
                                label="Select icon"
                                :v-model="formDataTemplateCustom.icon"
                                accept="image/*"
                                outlined
                                required
                              ></v-file-input>
                            </v-col>
                            <v-col cols="12">
                              <v-file-input
                                label="Select Banners (min 3 max 6)"
                                :v-model="formDataTemplateCustom.banners"
                                accept="image/*"
                                multiple
                                outlined
                                required
                              ></v-file-input>
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
                          Cancel
                        </v-btn>
                        <v-btn
                          color="primary"
                          rounded="md"
                          variant="flat"
                          @click="onSubmitForm('custom')"
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
