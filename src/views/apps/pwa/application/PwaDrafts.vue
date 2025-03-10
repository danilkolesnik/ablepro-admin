<script setup lang="ts">
import { ref, computed, onMounted, shallowRef } from "vue";
import { usePwaApplications } from "@/stores/apps/pwa/pwa";

import SvgSprite from "@/components/shared/SvgSprite.vue";
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";
import type { Header, Item } from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";
import type { PwaApplication } from "@/types/pwa/application";

const page = ref({ title: "PWA Drafts" });

const breadcrumbs = shallowRef([
  {
    title: "PWA",
    disabled: false,
    href: "#",
  },
  {
    title: "Drafts",
    disabled: true,
    href: "#",
  },
]);

const store = usePwaApplications();

const { restoreApplication } = store;

const restoreDraft = async (id: number) => {
  try {
    await restoreApplication(id);
    await store.getDraftsData();
  } catch (err) {
    console.log(err);
  }
};

const getDrafts = computed(() => {
  return store.getDrafts;
});

onMounted(() => {
  store.getDraftsData();
});

const searchField = ref("name");
const searchValue = ref("");

const headers: Header[] = [
  { text: "NAME", value: "name", sortable: true },
  { text: "USER TAG", value: "user_tag", sortable: true },
  { text: "STATUS", value: "status", sortable: true },
  { text: "LINK", value: "link", sortable: true },
  { text: "Action", value: "operation" },
];

const items = computed(() => {
  return (getDrafts?.value || []).map((item: PwaApplication) => ({
    id: item.id,
    name: `${item.name["1"]}(${item.id})`,
    user_tag: item.id,
    status: item.status,
    link: "test",
  }));
});
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
            <template #item-operation="item">
              <div class="operation-wrapper">
                <v-btn
                  icon
                  color="info"
                  aria-label="trash"
                  @click="restoreDraft(item.id)"
                  rounded="md"
                >
                  <SvgSprite
                    name="custom-setting-outline-1"
                    style="width: 20px; height: 20px"
                  />
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
