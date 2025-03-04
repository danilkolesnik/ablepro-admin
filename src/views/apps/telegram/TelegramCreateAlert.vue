<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";
import UiParentCard from "@/components/shared/UiParentCard.vue";
import { useTelegramAlerts } from "@/stores/apps/telegram/alerts";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const store = useTelegramAlerts();

const { createTelegramAlert } = store;

const page = ref({ title: t("Telegram Create Alert") });
const breadcrumbs = ref([
  {
    title: t("Telegram"),
    disabled: false,
    href: "#",
  },
  {
    title: t("Create Alert"),
    disabled: true,
    href: "#",
  },
]);

const getBots = computed(() => {
  return store.getTelegramBots;
});

const items = computed(() => getBots);

const formDataCreate = ref({
  message: "",
  bot_id: null,
  image: null,
  video: null,
});

const submitForm = async () => {
  const body = {
    message: formDataCreate.value.message,
    bot_id: formDataCreate.value.bot_id,
    image: formDataCreate.value.image,
    video: formDataCreate.value.video,
  };
  createTelegramAlert(body);
};

onMounted(() => {
  store.getTelegramAlertsData();
});

const isImageSelected = computed(() => formDataCreate.value.image !== null);
const isVideoSelected = computed(() => formDataCreate.value.video !== null);
</script>

<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
  <v-row>
    <v-col cols="12">
      <UiParentCard :title="t('Create Telegram Alert')">
        <v-row>
          <v-col cols="12">
            <v-label class="text-subtitle-1 text-lightText mb-2"
              >{{ t("Message Text") }}<span class="ms-1">*</span></v-label
            >
            <v-textarea
              style="width: 100%"
              density="comfortable"
              single-line
              variant="outlined"
              v-model="formDataCreate.message"
            >
            </v-textarea>
          </v-col>
        </v-row>
        <v-divider class="my-6"></v-divider>
        <v-row>
          <v-col cols="12" v-if="!isVideoSelected">
            <v-label class="text-subtitle-1 text-lightText mb-2"
              >{{ t("Message image") }}<span class="ms-1">*</span></v-label
            >
            <v-file-input
              :label="t('Select Message Image')"
              v-model="formDataCreate.image"
              accept="image/*"
              outlined
              required
            ></v-file-input>
          </v-col>
          <v-col cols="12" v-if="!isImageSelected">
            <v-label class="text-subtitle-1 text-lightText mb-2"
              >{{ t("Message video") }}<span class="ms-1">*</span></v-label
            >
            <v-file-input
              :label="t('Select Message Video')"
              v-model="formDataCreate.video"
              accept="video/*"
              outlined
              required
            ></v-file-input>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-label class="text-subtitle-1 text-lightText mb-2"
              >{{ t("Message bots") }}<span class="ms-1">*</span></v-label
            >
            <v-autocomplete
              aria-label="autocomplete"
              density="comfortable"
              :items="items.value"
              item-title="name"
              item-value="id"
              v-model="formDataCreate.bot_id"
              variant="outlined"
              class="skill-field"
              color="primary"
              :label="t('Select Bot')"
              single-line
              multiple
              hide-details
              closable-chips
            ></v-autocomplete>
          </v-col>
        </v-row>
        <v-divider class="my-6"></v-divider>

        <div class="text-end">
          <v-btn color="primary" rounded="md" variant="flat" @click="submitForm">
            {{ t("Send") }}
          </v-btn>
        </div>
      </UiParentCard>
    </v-col>
  </v-row>
</template>
