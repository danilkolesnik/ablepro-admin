<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";
import Main from "./tabs/Main.vue";
import Template from "./tabs/Template.vue";
import BasicInfo from "./tabs/BasicInfo.vue";
import AdditionalInfo from "./tabs/AdditionalInfo.vue";
import Rating from "./tabs/Rating.vue";
import Pushes from "./tabs/Pushes.vue";

const page = ref({ title: "Create PwaApplication" });
const breadcrumbs = ref([
  {
    title: "PWA",
    disabled: false,
    href: "#",
  },
  {
    title: "Create PwaApplication",
    disabled: true,
    href: "#",
  },
]);

const languages = ref(["English", "Українська"]);
const selectedLanguage = ref(languages.value[0]);
const activeTab = ref("Main");
const tabs = [
  "Main",
  "Template",
  "Basic info",
  "Additional info",
  "Rating",
  "Pushes",
  "Texts",
];

const formDataMain = ref({
  selected_versions: [],
  user_tag: "",
  domain_id: null,
  flow_id: null,
  subject_id: null,
});

const formDataTemplate = ref({
  template_id: null,
});

const formDataBasicInfo = ref({
  name: [],
  author: [],
  description: [],
  video: [],
  youtube_video: [],
});

const formDataAdditionalInfo = ref({
  related_pwas: [],
});

const formDataRating = ref({
  rating: [],
  five_rating_quantity: [],
  four_rating_quantity: [],
  three_rating_quantity: [],
  two_rating_quantity: [],
  one_rating_quantity: [],
  reviews_array: [
    {
      author: "User1",
      rating: 4.8,
      body: "Great app!",
      date: "2024-06-01",
      useful: 5,
      pfp: "profile.jpg",
    },
  ],
});

const formDataPushes = ref({
  related_pushes: [],
});
</script>

<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs" />

  <div class="d-flex">
    <v-container>
      <!-- language -->
      <v-menu>
        <template v-slot:activator="{ props }">
          <v-btn color="primary" v-bind="props" variant="outlined">
            {{ selectedLanguage }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="lang in languages"
            :key="lang"
            @click="selectedLanguage = lang"
          >
            <v-list-item-title>{{ lang }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- tabs -->
      <v-tabs v-model="activeTab" class="mt-4" color="primary">
        <v-tab v-for="tab in tabs" :key="tab" :value="tab">
          {{ tab }}
        </v-tab>
      </v-tabs>

      <v-window v-model="activeTab">
        <v-window-item v-for="tab in tabs" :key="tab" :value="tab">
          <v-card class="pa-4 mt-4">
            <v-card-text>
              <template v-if="tab === 'Main'">
                <Main />
              </template>
              <template v-if="tab === 'Template'">
                <Template />
              </template>
              <template v-if="tab === 'Basic info'">
                <BasicInfo />
              </template>
              <template v-if="tab === 'Additional info'">
                <AdditionalInfo />
              </template>
              <template v-if="tab === 'Rating'">
                <Rating />
              </template>
              <template v-if="tab === 'Pushes'">
                <Pushes />
              </template>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </v-container>
    <!-- iframe -->
    <div class="sticky top-[100px]">
      <div
        :style="{ backgroundImage: 'url(/src/assets/images/phone.svg)' }"
        style="
          background-repeat: no-repeat;
          filter: drop-shadow(0px 35px 46px rgba(33, 191, 115, 0.15));
          width: 475px;
          height: 995px;
          background-size: 100%;
          padding: 48px 32px 25px;
          margin: 0 auto;
        "
      >
        <iframe
          :src="'/preview-template'"
          ref="templateIframe"
          class="iframe"
          width="412px"
          height="896px"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style>
.iframe-container {
  position: relative;
}
</style>
