<script setup lang="ts">
import { ref, computed, onMounted, shallowRef } from "vue";
import { useReferral } from "@/stores/apps/referral";
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";
import type { Header, Item } from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";
import { useCustomers } from "@/stores/apps/customers";

const page = ref({ title: "Referral Stats" });

const store = useReferral();
const store_user = useCustomers();

const userItems = ref([]);

const referralItems = ref([]);

const formData = ref({
  user: null,
  referral: null,
});

const breadcrumbs = shallowRef([
  {
    title: "Referral",
    disabled: false,
    href: "#",
  },
  {
    title: "Stats",
    disabled: true,
    href: "#",
  },
]);

const getStats = computed(() => {
  return store.getStats;
});

onMounted(() => {
  store.fetchLinks().then((res) => {
    referralItems.value = res;
  });
  store_user.fetchCustomers().then((res) => {
    userItems.value = res;
  });
});

const searchField = ref("name");
const searchValue = ref("");

const headers: Header[] = [
  { text: "ID", value: "id", sortable: true },
  { text: "DOMAIN", value: "domain", sortable: true },
  { text: "PRICE", value: "price", sortable: true },
  { text: "USER ID", value: "user", sortable: true },
  { text: "CATEGORY", value: "category", sortable: true },
  { text: "CREATING DATE", value: "created_at", sortable: true },
  { text: "STATUS", value: "status", sortable: true },
];

const items = computed(() => getStats.value.referrals);
const themeColor = ref("rgb(var(--v-theme-primary))");

const itemsSelected = ref<Item[]>([]);

const { fetchStats } = store;

const searchStats = async () => {
  try {
    await fetchStats(formData.value.user!, formData.value.referral!);
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
            <v-col class="d-flex">
              <v-col cols="12" md="4">
                <v-label class="mb-2">User</v-label>
                <v-autocomplete
                  :items="userItems"
                  item-title="email"
                  item-value="id"
                  rounded="0"
                  color="primary"
                  single-line
                  density="comfortable"
                  hide-details
                  label="Select User"
                  variant="outlined"
                  v-model="formData.user"
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" md="4">
                <v-label class="mb-2">Referral</v-label>
                <v-autocomplete
                  :items="referralItems"
                  item-title="uuid"
                  item-value="user_id"
                  rounded="0"
                  color="primary"
                  single-line
                  density="comfortable"
                  hide-details
                  label="Select Referral"
                  variant="outlined"
                  v-model="formData.referral"
                ></v-autocomplete>
              </v-col>
              <v-col class="d-flex align-end">
                <v-btn
                  @click="searchStats"
                  color="primary"
                  rounded="md"
                  variant="flat"
                  style="height: 48px"
                >
                  Search
                </v-btn>
              </v-col>
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
