<script setup lang="ts">
import { ref, computed, onMounted, shallowRef } from "vue";
import { usePwaSplits } from "@/stores/apps/pwa/pwa_splits";
import SvgSprite from "@/components/shared/SvgSprite.vue";
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";
import type { Header, Item } from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";
import { type PwaData } from "@/types/pwa/splits";
import { usePwaApplications } from "@/stores/apps/pwa/pwa";

const store_pwa = usePwaApplications()

const page = ref({ title: "PWA Splits" });

const breadcrumbs = shallowRef([
  {
    title: "PWA",
    disabled: false,
    href: "#",
  },
  {
    title: "Splits",
    disabled: true,
    href: "#",
  },
]);

const store = usePwaSplits();

const getSplits = computed(() => {
  return store.getSplits;
});

const { createSplit } = store;

const {getDataCreateApplication} = store_pwa

onMounted(() => {
  store.getSplitsData();
  getDataCreateApplication().then((res) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pwa_select_items.value = res.pwaList.map((item: any) => ({
      ...item,
      name: item.name["1"],
    }));
  });
});

const searchField = ref("link");
const searchValue = ref("");

const headers: Header[] = [
  { text: "ID", value: "id", sortable: true },
  { text: "LINK", value: "domain.domain", sortable: true },
  { text: "PWA COUNT CLICKS", value: "count_clicks", sortable: true },
  { text: "PWA APPS", value: "name", sortable: true },
  { text: "BALANCE", value: "balance", sortable: true },
  { text: "Action", value: "operation" },
];

const items = computed(() => {
  return getSplits.value.map((item) => ({
    ...item,
    pwa_data: item.pwa_data.map((data) => ({
      ...data,
      pwa: {
        ...data.pwa,
        name: data.pwa.name["1"]
      },
    })),
    name: item.pwa_data.map((data) => data.pwa.name[1]).join("\n"),
    balance: item.pwa_data.map((data) => `${data.percentage}%`).join("\n")
  }))
});
const themeColor = ref("rgb(var(--v-theme-primary))");

const itemsSelected = ref<Item[]>([]);

const dialogStandart = ref(false);
const dialogEdit = ref(false);
const pwa_select_items = ref([]);

const addCard = (type = "create") => {
  if (type === "edit") {
    editFormData.value = [...editFormData.value, structuredClone(defaultFormCard)];
  } else {
    createFormData.value = [...createFormData.value, structuredClone(defaultFormCard)];
  }
};

const removeCard = (index: number, type = "create") => {
  if (type === "edit") {
    editFormData.value = editFormData.value.filter((_, idx) => idx !== index);
  } else {
    createFormData.value = createFormData.value.filter((_, idx) => idx !== index);
  }
};

const findEditItem = (id: number) => {
  const data = items.value.find((item) => item.id === id)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  editFormData.value = data?.pwa_data;
  dialogEdit.value = true
};

const defaultFormCard = {
  pwa: { id: 0, name: { "1": "" }, user_tag: "" },
  percentage: 3,
};

// create
const createFormData = ref([
  structuredClone(defaultFormCard),
  structuredClone(defaultFormCard),
]);

// const submitForm = async () => {
//   createSplit()
// }

// edit
const editFormData = ref<PwaData[]>([]);
</script>

<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
  <v-row>
    <v-col cols="12" md="12">
      <v-card
        elevation="0"
        variant="outlined"
        class="bg-surface overflow-hidden"
        width="100%"
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
                      Create PWA Splits
                    </v-btn>
                  </template>
                  <v-card>
                    <perfect-scrollbar style="max-height: calc(100vh - 48px)">
                      <v-card-title class="pa-5">
                        <span class="text-h5">New Splits</span>
                      </v-card-title>
                      <v-divider></v-divider>
                      <v-card-text>
                        <v-container>
                          <v-row style="gap: 15px">
                            <!-- Form Card -->
                            <v-card
                              v-for="(card, index) of createFormData"
                              v-bind:key="card.pwa.id"
                              class="bg-surface"
                              variant="outlined"
                              rounded="lg"
                            >
                              <v-card-item class="pa-0">
                                <v-col>
                                  <v-label class="mb-2">Select PWA</v-label>
                                  <v-autocomplete
                                    aria-label="autocomplete"
                                    density="comfortable"
                                    :items="pwa_select_items"
                                    item-title="name"
                                    item-value="id"
                                    :v-model="card.pwa.id"
                                    variant="outlined"
                                    class="skill-field"
                                    color="primary"
                                    label="Select PWA"
                                    single-line
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
                                            style="
                                              width: 20px;
                                              height: 20px;
                                              transform: rotate(45deg);
                                            "
                                          />
                                        </template>
                                      </v-chip>
                                    </template>
                                  </v-autocomplete>
                                </v-col>
                              </v-card-item>
                              <v-card-item class="pa-0">
                                <v-col>
                                  <v-label class="mb-2">Balance %</v-label>
                                  <v-text-field
                                    single-line
                                    density="comfortable"
                                    type="number"
                                    placeholder="12"
                                    :v-model="card.percentage"
                                    variant="outlined"
                                    hide-details
                                  ></v-text-field>
                                </v-col>
                              </v-card-item>
                              <v-col>
                                <v-btn
                                  v-if="createFormData.length > 2"
                                  @click="removeCard(index)"
                                  color="error"
                                  rounded="md"
                                  variant="flat"
                                >
                                  Remove Row
                                </v-btn>
                              </v-col>
                            </v-card>
                          </v-row>
                        </v-container>
                      </v-card-text>
                      <v-divider></v-divider>
                      <v-spacer></v-spacer>
                      <v-card-actions class="d-flex justify-space-between">
                        <v-row>
                          <v-btn
                            color="error"
                            rounded="md"
                            variant="text"
                            @click="dialogStandart = false"
                          >
                            Cancel
                          </v-btn>
                        </v-row>
                        <v-row class="d-flex justify-end" style="gap: 15px">
                          <v-btn
                            @click="addCard"
                            color="primary"
                            rounded="md"
                            variant="flat"
                          >
                            Add Row
                          </v-btn>
                          <v-btn
                            @click="submitForm"
                            color="primary"
                            rounded="md"
                            variant="flat"
                          >
                            Save
                          </v-btn>
                        </v-row>
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
            <template #item-operation="item">
              <div class="operation-wrapper">
                <v-dialog v-model="dialogEdit" class="customer-modal">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      icon
                      color="info"
                      aria-label="trash"
                      v-bind="props"
                      @click="findEditItem(item.id)"
                    >
                      <SvgSprite
                        name="custom-edit-outline"
                        style="width: 20px; height: 20px"
                      />
                    </v-btn>
                  </template>
                  <v-card>
                    <perfect-scrollbar style="max-height: calc(100vh - 48px)">
                      <v-card-title class="pa-5">
                        <span class="text-h5">Edit Splits</span>
                      </v-card-title>
                      <v-divider></v-divider>
                      <v-card-text>
                        <v-container>
                          <v-row style="gap: 15px">
                            <!-- Form Card -->
                            <v-card
                              v-for="(card, index) of editFormData"
                              v-bind:key="card.pwa.id"
                              class="bg-surface"
                              variant="outlined"
                              rounded="lg"
                            >
                              <v-card-item class="pa-0">
                                <v-col>
                                  <v-label class="mb-2">Select PWA</v-label>
                                  <v-autocomplete
                                    aria-label="autocomplete"
                                    density="comfortable"
                                    :items="pwa_select_items"
                                    :v-model="card.pwa.id"
                                    item-value="id"
                                    item-title="name"
                                    variant="outlined"
                                    class="skill-field"
                                    color="primary"
                                    label="Select PWA"
                                    single-line
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
                                            style="
                                              width: 20px;
                                              height: 20px;
                                              transform: rotate(45deg);
                                            "
                                          />
                                        </template>
                                      </v-chip>
                                    </template>
                                  </v-autocomplete>
                                </v-col>
                              </v-card-item>
                              <v-card-item class="pa-0">
                                <v-col>
                                  <v-label class="mb-2">Balance %</v-label>
                                  <v-text-field
                                    single-line
                                    density="comfortable"
                                    type="number"
                                    placeholder="12"
                                    :v-model="card.percentage"
                                    variant="outlined"
                                    hide-details
                                  ></v-text-field>
                                </v-col>
                              </v-card-item>
                              <v-col>
                                <v-btn
                                  v-if="createFormData.length > 2"
                                  @click="removeCard(index)"
                                  color="error"
                                  rounded="md"
                                  variant="flat"
                                >
                                  Remove Row
                                </v-btn>
                              </v-col>
                            </v-card>
                          </v-row>
                        </v-container>
                      </v-card-text>
                      <v-divider></v-divider>
                      <v-spacer></v-spacer>
                      <v-card-actions class="d-flex justify-space-between">
                        <v-row>
                          <v-btn
                            color="error"
                            rounded="md"
                            variant="text"
                            @click="dialogEdit = false"
                          >
                            Cancel
                          </v-btn>
                        </v-row>
                        <v-row class="d-flex justify-end" style="gap: 15px">
                          <v-btn
                            @click="addCard('edit')"
                            color="primary"
                            rounded="md"
                            variant="flat"
                          >
                            Add Row
                          </v-btn>
                          <v-btn color="primary" rounded="md" variant="flat">
                            Save
                          </v-btn>
                        </v-row>
                      </v-card-actions>
                    </perfect-scrollbar>
                  </v-card>
                </v-dialog>
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
