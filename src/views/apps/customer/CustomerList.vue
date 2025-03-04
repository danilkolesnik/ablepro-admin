<script setup lang="ts">
import { ref, computed, onMounted, shallowRef } from "vue";
import { useCustomers } from "@/stores/apps/customers";

import SvgSprite from "@/components/shared/SvgSprite.vue";
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";
import type { Header, Item } from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";

const page = ref({ title: "Users list" });

const breadcrumbs = shallowRef([
  {
    title: "User",
    disabled: false,
    href: "#",
  },
  {
    title: "List",
    disabled: true,
    href: "#",
  },
]);

const store = useCustomers();

const getCustomers = computed(() => {
  return store.getCustomers;
});

onMounted(() => {
  store.fetchCustomers();
});

const searchField = ref("email");
const searchValue = ref("");
const creditLimit = ref(0);

const headers: Header[] = [
  { text: "EMAIL", value: "email", sortable: true },
  { text: "GROUP", value: "role", sortable: true },
  { text: "ADMIN", value: "admin", sortable: true },
  { text: "TELEGRAM", value: "telegram", sortable: true },
  { text: "TARIFF TO", value: "tariff_expiration_date", sortable: true },
  { text: "HOST", value: "host", sortable: true },
  { text: "LOGIN", value: "operation" },
];

const items = computed(() => getCustomers.value);
const themeColor = ref("rgb(var(--v-theme-primary))");
const { loginCustomer, createCustomer } = store;

const itemsSelected = ref<Item[]>([]);

const dialog = ref(false);

const formData = ref({
  name: "",
  email: "",
  telegram: "",
  password: "",
  role: "",
  pages: [],
  users: [],
  balance: null,
  credit_limit: null,
  referral_percent: null,
});

const submitForm = async () => {
  try {
    const body = {
      name: formData.value.name,
      email: formData.value.email,
      telegram: formData.value.telegram,
      password: formData.value.password,
      role: formData.value.role,
      pages: formData.value.pages,
      users: formData.value.users,
      balance: formData.value.balance,
      credit_limit: formData.value.credit_limit,
      referral_percent: formData.value.referral_percent,
    };
    await createCustomer(body);
  } catch (err) {
    console.log(err);
  }
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
                <v-dialog v-model="dialog" class="customer-modal">
                  <template v-slot:activator="{ props }">
                    <v-btn variant="flat" color="primary" rounded="md" v-bind="props">
                      <template v-slot:prepend>
                        <SvgSprite name="custom-plus" style="width: 20px; height: 20px" />
                      </template>
                      Add user
                    </v-btn>
                  </template>
                  <v-card>
                    <perfect-scrollbar style="max-height: calc(100vh - 48px)">
                      <v-card-title class="pa-5">
                        <span class="text-h5">New User</span>
                      </v-card-title>
                      <v-divider></v-divider>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col md="12" cols="12">
                              <v-row>
                                <v-col cols="12">
                                  <v-label class="mb-2">Name</v-label>
                                  <v-text-field
                                    single-line
                                    placeholder="Name"
                                    hide-details
                                    variant="outlined"
                                    required
                                    density="comfortable"
                                    rounded="0"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-label class="mb-2">Email</v-label>
                                  <v-text-field
                                    single-line
                                    type="email"
                                    hide-details
                                    placeholder="Email"
                                    required
                                    variant="outlined"
                                    density="comfortable"
                                    rounded="0"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-label class="mb-2">Telegram</v-label>
                                  <v-text-field
                                    single-line
                                    type="email"
                                    hide-details
                                    placeholder="Telegram"
                                    required
                                    variant="outlined"
                                    density="comfortable"
                                    rounded="0"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-label class="mb-2">Balance</v-label>
                                  <v-text-field
                                    single-line
                                    type="number"
                                    hide-details
                                    placeholder="Balance"
                                    required
                                    variant="outlined"
                                    density="comfortable"
                                    rounded="0"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-label class="mb-2">Credit limit</v-label>
                                  <v-text-field
                                    single-line
                                    type="number"
                                    hide-details
                                    placeholder="Credit limit"
                                    required
                                    variant="outlined"
                                    density="comfortable"
                                    rounded="0"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-label class="mb-2">Referral Percent</v-label>
                                  <v-text-field
                                    single-line
                                    type="number"
                                    v-model="creditLimit"
                                    hide-details
                                    placeholder="Credit limit"
                                    required
                                    variant="outlined"
                                    density="comfortable"
                                    rounded="0"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-label class="mb-2">Password</v-label>
                                  <v-text-field
                                    single-line
                                    type="password"
                                    hide-details
                                    placeholder="********"
                                    required
                                    variant="outlined"
                                    density="comfortable"
                                    rounded="0"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-label class="mb-2">Roles</v-label>
                                  <v-autocomplete
                                    :items="['Admin', 'Pseudo Admin', 'Partner', 'Webmaster']"
                                    label="Select role..."
                                    rounded="0"
                                    color="primary"
                                    single-line
                                    density="comfortable"
                                    hide-details
                                    variant="outlined"
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
                <v-btn
                  icon
                  color="success"
                  aria-label="trash"
                  @click="loginCustomer(item.id)"
                  rounded="md"
                  style="min-width: 60px"
                >
                  Login
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
