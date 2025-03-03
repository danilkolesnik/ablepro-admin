<script setup lang="ts">
import { ref, computed, onMounted, shallowRef } from "vue";
import { useTelegramKeys } from "@/stores/apps/telegram/keys";

import SvgSprite from "@/components/shared/SvgSprite.vue";
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";
import type { Header, Item } from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";
import { useCustomers } from "@/stores/apps/customers";

const page = ref({ title: "Telegam Keys" });

const breadcrumbs = shallowRef([
  {
    title: "Telegram",
    disabled: false,
    href: "#",
  },
  {
    title: "Keys",
    disabled: true,
    href: "#",
  },
]);

const store = useTelegramKeys();
const store_user = useCustomers();

const getKeys = computed(() => {
  return store.getTelegramKeys;
});

const userItems = computed(() => {
  return store_user.getCustomers;
});

onMounted(() => {
  store.getTelegramKeysData();
  store_user.fetchCustomers();
});

const searchField = ref("user_id");
const searchValue = ref("");

const headers: Header[] = [
  { text: "KEY", value: "key", sortable: true },
  { text: "BOT ID", value: "bot_id", sortable: true },
  { text: "CHAT ID", value: "chat_id", sortable: true },
  { text: "USER", value: "user_id", sortable: true },
  { text: "STATUS", value: "status", sortable: true },
  { text: "DATE", value: "created_at", sortable: true },
];

const items = computed(() => getKeys);
const themeColor = ref("rgb(var(--v-theme-primary))");

const itemsSelected = ref<Item[]>([]);
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
            <v-col justify="start" class="d-flex align-center">
              <v-col>
                <v-label class="mb-2">Number</v-label>
                <v-text-field
                  type="number"
                  variant="outlined"
                  persistent-placeholder
                  placeholder="1"
                  v-model="searchValue"
                  density="comfortable"
                  hide-details
                >
                </v-text-field>
              </v-col>
              <v-col>
                <v-label class="mb-2">Select Option</v-label>
                <v-autocomplete
                  aria-label="autocomplete"
                  density="comfortable"
                  :items="userItems"
                  item-title="email"
                  item-value="id"
                  variant="outlined"
                  class="skill-field"
                  color="primary"
                  label="Select Option"
                  single-line
                  hide-details
                  closable-chips
                ></v-autocomplete>
              </v-col>
            </v-col>
            <v-col cols="12" md="3">
              <v-btn variant="flat" color="primary" rounded="md" style="height: 50px">
                <template v-slot:prepend>
                  <SvgSprite name="custom-plus" style="width: 20px; height: 30px" />
                </template>
                Generate Key
              </v-btn>
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
