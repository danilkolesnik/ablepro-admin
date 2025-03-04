<script setup lang="ts">
import { ref, computed, shallowRef, onMounted } from "vue";
// import { usePwaStatistics } from "@/stores/apps/pwa/pwa_statistics";

import SvgSprite from "@/components/shared/SvgSprite.vue";
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";
import type { Header, Item } from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";
import moment from "moment";
import { usePwaStatistics } from "@/stores/apps/pwa/pwa_statistics";
import { usePwaApplications } from "@/stores/apps/pwa/pwa";

const page = ref({ title: "PWA Statistics" });

const breadcrumbs = shallowRef([
  {
    title: "PWA",
    disabled: false,
    href: "#",
  },
  {
    title: "Statistics",
    disabled: true,
    href: "#",
  },
]);
const store = usePwaStatistics();
const store_pwa = usePwaApplications();

const getStatistics = computed(() => {
  return store.getStatisticsAll;
});

const { getDataAllStatisticsData } = store;
const selectDateTo = ref(null);
const dateFormatTo = computed(() => {
  return selectDateTo.value ? moment(selectDateTo.value).format("D/MM/YYYY") : "";
});

const selectDateFrom = ref(null);
const dateFormatFrom = computed(() => {
  return selectDateFrom.value ? moment(selectDateFrom.value).format("D/MM/YYYY") : "";
});

const paramsRequest = ref({
  limit: 10,
  offset: 0,
  pwa_ids: [],
  from: dateFormatFrom.value || "2024-02-01",
  to: dateFormatTo.value || "2024-02-10",
});

const searchRequest = async () => {
  try {
    await getDataAllStatisticsData({
      limit: 10,
      offset: 0,
      pwa_ids: paramsRequest.value.pwa_ids,
      from: dateFormatFrom.value || "2024-02-01",
      to: dateFormatTo.value || "2024-02-10",
    });
  } catch (err) {
    console.log(err);
  }
};

const { getDataCreateApplication } = store_pwa;
const pwa_select_items = ref([]);
onMounted(() => {
  getDataCreateApplication().then((res) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pwa_select_items.value = res.pwaList.map((item: any) => ({
      ...item,
      name: item.name["1"],
    }));
  });
});

const searchField = ref("name");
const searchValue = ref("");

const headers: Header[] = [
  { text: "DATE", value: "date", sortable: true },
  { text: "CLICKS", value: "clicks", sortable: true },
  { text: "INSTALLS", value: "installs", sortable: true },
  { text: "FIRST OPENINGS", value: "first_openings", sortable: true },
  { text: "RE-OPENINGS", value: "re_openings", sortable: true },
  { text: "REGS", value: "regs", sortable: true },
  { text: "DEPS", value: "deps", sortable: true },
  { text: "PUSH SUBSCRIPTION", value: "push_subscriptions", sortable: true },
  { text: "PUSH SENDS", value: "push_sends", sortable: true },
  { text: "PUSH CLICKS", value: "push_clicks", sortable: true },
  { text: "PUSH UN-SUBSCRIPTION", value: "push_un_subscriptions", sortable: true },
  { text: "Action", value: "operation" },
];

const items = computed(() => getStatistics.value);
const themeColor = ref("rgb(var(--v-theme-primary))");

const itemsSelected = ref<Item[]>([]);

// const dialogStandart = ref(false);
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
            <v-col cols="12" md="3" sm="6">
              <v-label class="mb-2">To</v-label>
              <v-menu :close-on-content-click="false">
                <template v-slot:activator="{ props }">
                  <v-text-field
                    single-line
                    hide-details
                    variant="outlined"
                    v-bind="props"
                    v-model="dateFormatTo"
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
                  v-model="selectDateTo"
                  hide-header
                  color="primary"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" md="3" sm="6">
              <v-label class="mb-2">From</v-label>
              <v-menu :close-on-content-click="false">
                <template v-slot:activator="{ props }">
                  <v-text-field
                    single-line
                    hide-details
                    variant="outlined"
                    v-bind="props"
                    v-model="dateFormatFrom"
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
                  v-model="selectDateFrom"
                  hide-header
                  color="primary"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" md="3" sm="6">
              <v-label class="mb-2">Select PWA</v-label>
              <v-col cols="12">
                <v-autocomplete
                  aria-label="autocomplete"
                  density="comfortable"
                  v-model="paramsRequest.pwa_ids"
                  :items="pwa_select_items"
                  item-title="name"
                  item-value="id"
                  variant="outlined"
                  class="skill-field"
                  color="primary"
                  label="Select PWA"
                  single-line
                  multiple
                  hide-details
                  closable-chips
                >
                  <template v-slot:chip>
                    <v-chip
                      label
                      variant="tonal"
                      color="lightText"
                      size="large"
                      rounded="lg"
                      style="--v-chip-height: 38px"
                      class="my-1 text-subtitle-1 text-dark font-weight-regular"
                      border="lightText solid thin opacity-50"
                    >
                      <template v-slot:close>
                        <SvgSprite
                          name="custom-close"
                          style="width: 20px; height: 20px; transform: rotate(45deg)"
                        />
                      </template>
                    </v-chip>
                  </template>
                </v-autocomplete>
              </v-col>
            </v-col>
            <v-col cols="12" md="3" sm="6" class="d-flex flex-column">
              <v-label class="mb-2 opacity-0">-</v-label>
              <v-btn
                elevation="0"
                variant="flat"
                color="primary"
                size="large"
                @click="searchRequest"
              >
                Search
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
            <template #item-operation="">
              <div class="operation-wrapper">
                <v-btn icon color="info" aria-label="trash">
                  <SvgSprite
                    name="custom-edit-outline"
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
