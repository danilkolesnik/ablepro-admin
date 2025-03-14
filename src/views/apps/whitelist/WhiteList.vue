<script setup lang="ts">
import { ref, computed, onMounted, shallowRef } from "vue";
import { useDomains } from "@/stores/apps/domains";

import SvgSprite from "@/components/shared/SvgSprite.vue";
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";
import type { Header, Item } from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const page = ref({ title: t("White list") });

const breadcrumbs = shallowRef([
  {
    title: t("Domains"),
    disabled: false,
    href: "#",
  },
  {
    title: t("Whitelist"),
    disabled: true,
    href: "#",
  },
]);

const store = useDomains();

const getWhitelist = computed(() => {
  return store.getWhitelist;
});

const formData = ref({
  user: null,
  domain: "",
});

const { createWhitelist, deleteWhitelist } = store;

const onSubmitForm = async () => {
  const body = {
    user: (formData.value.user as unknown) as number,
    domain: formData.value.domain,
  };
  formData.value = {
    user: null,
    domain: "",
  };
  await createWhitelist(body);
  dialog.value = false;
};

onMounted(() => {
  store.fetchWhitelist();
});

const searchField = ref("domain");
const searchValue = ref("");

const headers: Header[] = [
  { text: t("ID"), value: "id", sortable: true },
  { text: t("DOMAIN"), value: "domain", sortable: true },
  { text: t("USER ID"), value: "user", sortable: true },
  { text: t("CREATING DATE"), value: "created_at", sortable: true },
  { text: t("Action"), value: "operation" },
];

const items = computed(() => getWhitelist.value.domains);
const users = computed(() => {
  return getWhitelist.value.users.map((item) => ({ label: item.email, value: item.id }));
});
const themeColor = ref("rgb(var(--v-theme-primary))");

const itemsSelected = ref<Item[]>([]);

const dialog = ref(false);
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
                <v-dialog v-model="dialog" class="customer-modal">
                  <template v-slot:activator="{ props }">
                    <v-btn variant="flat" color="primary" rounded="md" v-bind="props">
                      <template v-slot:prepend>
                        <SvgSprite name="custom-plus" style="width: 20px; height: 20px" />
                      </template>
                      {{ t("Add whitelist") }}
                    </v-btn>
                  </template>
                  <v-card>
                    <perfect-scrollbar style="max-height: calc(100vh - 48px)">
                      <v-card-title class="pa-5">
                        <span class="text-h5">{{ t("New whitelist") }}</span>
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
                                  <v-label class="mb-2">{{ t("Domain") }}</v-label>
                                  <v-text-field
                                    single-line
                                    :placeholder="t('Enter domain')"
                                    hide-details
                                    variant="outlined"
                                    required
                                    density="comfortable"
                                    rounded="0"
                                    v-model="formData.domain"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-label class="mb-2">{{ t("User") }}</v-label>
                                  <v-autocomplete
                                    v-model="formData.user"
                                    :items="users"
                                    item-title="label"
                                    item-value="value"
                                    rounded="0"
                                    color="primary"
                                    single-line
                                    density="comfortable"
                                    hide-details
                                    variant="outlined"
                                    :label="t('Select User')"
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
                          {{ t("Cancel") }}
                        </v-btn>
                        <v-btn
                          color="primary"
                          rounded="md"
                          variant="flat"
                          @click="onSubmitForm"
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
            <template #item-operation="item">
              <div class="operation-wrapper">
                <v-btn
                  icon
                  color="error"
                  aria-label="trash"
                  @click="deleteWhitelist(item.id)"
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
