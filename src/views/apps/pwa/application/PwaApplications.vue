<script setup lang="ts">
import { ref, computed, onMounted, shallowRef } from "vue";
import { usePwaApplications } from "@/stores/apps/pwa/pwa";

import SvgSprite from "@/components/shared/SvgSprite.vue";
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";
import type { Header, Item } from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";
import type { PwaApplication } from "@/types/pwa/application";

const page = ref({ title: "PWA Applications" });

const breadcrumbs = shallowRef([
  {
    title: "PWA",
    disabled: false,
    href: "#",
  },
  {
    title: "Applications",
    disabled: true,
    href: "#",
  },
]);

const store = usePwaApplications();

const getApplications = computed(() => {
  return store.getApplications;
});

const formDataApplication = ref({
  name: ["My PWA", "PWA Test"],
  user_tag: "User123",
  description: ["Description 1", "Description 2"],
  flow_id: 1,
  template_id: 2,
  author: ["John Doe", "Jane Doe"],
  rating: [4.5, 4.7],
  reviews_count: [100, 200],
  installs_quantity: ["1000+", "5000+"],
  five_rating_quantity: [80, 150],
  four_rating_quantity: [10, 30],
  three_rating_quantity: [5, 10],
  two_rating_quantity: [3, 5],
  one_rating_quantity: [2, 3],
  domain_id: 10,
  reviews_array: [],
  youtube_video: ["https://youtu.be/xyz123"],
  video: ["video.mp4"],
  selected_versions: [1, 2],
  related_pwas: [3, 5],
  installs_text: ["Install now", "Download"],
  reviews_text: ["See reviews", "User feedback"],
  ad_info: ["Ads may appear"],
  subject_id: 4,
  pixel_id: 7,
  related_pushes: [2, 8],
});

const { getDataCreateApplication, deleteApplication, createApplications } = store;

const dataForCreateApplication = ref({
  status: "success",
  defaultPwaVersions: {},
  pwaVersions: {},
  domains: [{}],
  flows: [{}],
  categories: [{}],
  lastUpdatedAt: "2025-02-23T15:15:45.931Z",
  pwaList: [{}],
  languages: [{}],
  subjects: [{}],
  pushes: [{}],
  pixels: [{}],
});

const firstFetch = async () => {
  const data = await getDataCreateApplication();
  dataForCreateApplication.value = data;
  await store.fetchApplications();
};

onMounted(() => {
  firstFetch();
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
  return getApplications.value.map((item: PwaApplication) => ({
    id: item.id,
    name: `${item.name["1"]}(${item.id})`,
    user_tag: item.id,
    status: item.status,
    link: "test",
  }));
});
const themeColor = ref("rgb(var(--v-theme-primary))");

const itemsSelected = ref<Item[]>([]);

const dialogStandart = ref(false);

const onSubmitForm = async () => {
  try {
    createApplications({
      name: formDataApplication.value.name,
      user_tag: formDataApplication.value.user_tag,
      description: formDataApplication.value.description,
      flow_id: formDataApplication.value.flow_id,
      template_id: formDataApplication.value.template_id,
      author: formDataApplication.value.author,
      rating: formDataApplication.value.rating,
      reviews_count: formDataApplication.value.reviews_count,
      installs_quantity: formDataApplication.value.installs_quantity,
      five_rating_quantity: formDataApplication.value.five_rating_quantity,
      four_rating_quantity: formDataApplication.value.four_rating_quantity,
      three_rating_quantity: formDataApplication.value.three_rating_quantity,
      two_rating_quantity: formDataApplication.value.two_rating_quantity,
      one_rating_quantity: formDataApplication.value.one_rating_quantity,
      domain_id: formDataApplication.value.domain_id,
      reviews_array: formDataApplication.value.reviews_array,
      youtube_video: formDataApplication.value.youtube_video,
      video: formDataApplication.value.video,
      selected_versions: formDataApplication.value.selected_versions,
      related_pwas: formDataApplication.value.related_pwas,
      installs_text: formDataApplication.value.installs_text,
      reviews_text: formDataApplication.value.reviews_text,
      ad_info: formDataApplication.value.ad_info,
      subject_id: formDataApplication.value.subject_id,
      pixel_id: formDataApplication.value.pixel_id,
      related_pushes: formDataApplication.value.related_pushes,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteApp = (id: number) => {
  try {
    deleteApplication(id);
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
                <v-dialog v-model="dialogStandart" class="customer-modal">
                  <template v-slot:activator="{ props }">
                    <v-btn variant="flat" color="primary" rounded="md" v-bind="props">
                      <template v-slot:prepend>
                        <SvgSprite name="custom-plus" style="width: 20px; height: 20px" />
                      </template>
                      Add Application
                    </v-btn>
                  </template>
                  <v-card>
                    <perfect-scrollbar style="max-height: calc(100vh - 48px)">
                      <v-card-title class="pa-5">
                        <span class="text-h5">New Application</span>
                      </v-card-title>
                      <v-divider></v-divider>
                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col md="9" cols="12">
                              <v-row>
                                <v-col cols="12">
                                  <v-label class="mb-2">Name</v-label>
                                  <v-text-field
                                    single-line
                                    placeholder="Enter Name"
                                    hide-details
                                    variant="outlined"
                                    required
                                    density="comfortable"
                                    rounded="0"
                                    v-model="formDataApplication.name"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-label class="mb-2">Link</v-label>
                                  <v-text-field
                                    single-line
                                    hide-details
                                    placeholder="Enter Link"
                                    required
                                    variant="outlined"
                                    density="comfortable"
                                    rounded="0"
                                    v-model="formDataApplication.name"
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
                          @click="dialogStandart = false"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                          color="primary"
                          rounded="md"
                          variant="flat"
                          @click="onSubmitForm"
                        >
                          Add
                        </v-btn>
                      </v-card-actions>
                    </perfect-scrollbar>
                  </v-card>
                </v-dialog>
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
                  color="error"
                  aria-label="trash"
                  @click="deleteApp(item.id)"
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
