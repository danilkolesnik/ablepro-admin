<script setup lang="ts">
import { ref, computed, onMounted, shallowRef } from "vue";
import moment from "moment";
import SvgSprite from "@/components/shared/SvgSprite.vue";
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";
import type { Header, Item } from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";
import { useTransactions } from "@/stores/apps/transaction";

const page = ref({ title: "Transactions" });

const selectedDate = ref(null);
const selectedDate1 = ref(null);
const computedDateFormattedMomentjs = computed(() => {
  return selectedDate.value ? moment(selectedDate.value).format("D/MM/YYYY") : "";
});
const computedDateFormattedMomentjs1 = computed(() => {
  return selectedDate1.value ? moment(selectedDate1.value).format("D/MM/YYYY") : "";
});

const breadcrumbs = shallowRef([
  {
    title: "Dashboard",
    disabled: false,
    href: "/finance",
  },
  {
    title: "Transactions",
    disabled: true,
    href: "#",
  },
]);

const store = useTransactions();

const getTransactions = computed(() => {
  return store.getTransactions;
});

console.log(getTransactions);

onMounted(() => {
  store.fetchTransactions();
});

const searchField = ref("user");
const searchValue = ref("");

const headers: Header[] = [
  { text: "ID", value: "id", sortable: true },
  { text: "User", value: "user", sortable: true },
  { text: "Admin", value: "admin_в", sortable: true },
  { text: "Type", value: "finance_type", sortable: true },
  { text: "Network", value: "currency_network", sortable: true },
  { text: "Wallet", value: "wallet" },
  { text: "SUM", value: "sum_usd" },
  { text: "Filled Sum", value: "filled_sum" },
  { text: "Status", value: "status" },
  { text: "Active until", value: "active_until" },
  { text: "Created at", value: "created_at" },
  { text: "Updated at", value: "updated_at" },
];

const items = computed(() => getTransactions);
const themeColor = ref("rgb(var(--v-theme-primary))");
// const { deleteCustomer } = store;

const itemsSelected = ref<Item[]>([]);

// const dialog = ref(false);
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
              <v-autocomplete
                :items="['User1...', 'User2...', 'User3...']"
                label="Single"
                rounded="0"
                color="primary"
                single-line
                density="comfortable"
                hide-details
                variant="outlined"
              ></v-autocomplete>
            </v-col>
            <!-- calendar1 -->
            <v-col cols="12" md="3">
              <v-menu :close-on-content-click="false">
                <template v-slot:activator="{ props }">
                  <v-text-field
                    single-line
                    variant="outlined"
                    hide-details
                    v-bind="props"
                    v-model="computedDateFormattedMomentjs"
                    placeholder="DD/MM/YYYY"
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
                  v-model="selectedDate"
                  hide-header
                  color="primary"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <!-- calendar2 -->
            <v-col cols="12" md="3">
              <v-menu :close-on-content-click="false">
                <template v-slot:activator="{ props }">
                  <v-text-field
                    single-line
                    variant="outlined"
                    hide-details
                    v-bind="props"
                    v-model="computedDateFormattedMomentjs1"
                    placeholder="DD/MM/YYYY"
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
                  v-model="selectedDate1"
                  hide-header
                  color="primary"
                ></v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
          <v-row justify="space-between" class="align-center">
            <v-col cols="12" md="6">
              <v-btn
                class="mr-2"
                color="primary"
                rounded="md"
                variant="flat"
                @click="$router.push('/finance/choose-tariff')"
                >Choose tariff</v-btn
              >
              <v-btn
                class="mr-2"
                color="primary"
                rounded="md"
                variant="flat"
                @click="$router.push('/finance/top-up')"
                >Top up</v-btn
              >
            </v-col>
            <v-col cols="12" md="3" class="d-flex justify-end">
              <v-btn class="mr-2" color="primary" rounded="md" variant="flat"
                >Search</v-btn
              >
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
                  color="secondary"
                  aria-label="view"
                  variant="text"
                  rounded="md"
                >
                  <SvgSprite name="custom-eye" style="width: 20px; height: 20px" />
                </v-btn>
                <v-btn icon color="primary" aria-label="edit" variant="text" rounded="md">
                  <SvgSprite
                    name="custom-edit-outline"
                    style="width: 20px; height: 20px"
                  />
                </v-btn>
                <v-btn
                  icon
                  color="error"
                  aria-label="trash"
                  @click="deleteCustomer(item.name)"
                  rounded="md"
                >
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
