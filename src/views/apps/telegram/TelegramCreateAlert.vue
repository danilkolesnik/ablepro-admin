<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";
import UiParentCard from "@/components/shared/UiParentCard.vue";
import { useTelegramAlerts } from "@/stores/apps/telegram/alerts";

const store = useTelegramAlerts();

const { createTelegramAlert } = store;

const page = ref({ title: "Telegram Create Alert" });
const breadcrumbs = ref([
  {
    title: "Telegram",
    disabled: false,
    href: "#",
  },
  {
    title: "Create Alert",
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
  image: "",
  video: "",
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
</script>

<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
  <v-row>
    <v-col cols="12">
      <UiParentCard title="Create Telegram Alert">
        <v-row>
          <v-col cols="12">
            <v-label class="text-subtitle-1 text-lightText mb-2"
              >Message Text<span class="ms-1">*</span></v-label
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
        <v-row>
          <v-col cols="12">
            <v-label class="text-subtitle-1 text-lightText mb-2"
              >Message bots<span class="ms-1">*</span></v-label
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
              label="Select Bot"
              single-line
              multiple
              hide-details
              closable-chips
            ></v-autocomplete>
          </v-col>
        </v-row>
        <v-divider class="my-6"></v-divider>
        <v-row>
          <v-col cols="12">
            <v-label class="text-subtitle-1 text-lightText mb-2"
              >Message image<span class="ms-1">*</span></v-label
            >
            <v-text-field
              type="text"
              color="primary"
              v-model="formDataCreate.image"
              hide-details
              variant="outlined"
              density="comfortable"
              persistent-placeholder
              placeholder="Enter Message video"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-label class="text-subtitle-1 text-lightText mb-2"
              >Message video<span class="ms-1">*</span></v-label
            >
            <v-text-field
              type="text"
              color="primary"
              v-model="formDataCreate.image"
              hide-details
              variant="outlined"
              density="comfortable"
              persistent-placeholder
              placeholder="Enter Message video"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-divider class="my-6"></v-divider>
        <div class="text-end">
          <v-btn color="primary" rounded="md" variant="flat" @click="submitForm"
            >Send</v-btn
          >
        </div>
      </UiParentCard>
    </v-col>
  </v-row>
</template>
