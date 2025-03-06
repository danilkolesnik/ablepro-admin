<script setup lang="ts">
import { ref } from "vue";
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";
import Main from "./tabs/Main.vue";
import Template from "./tabs/Template.vue";
import BasicInfo from "./tabs/BasicInfo.vue";
import AdditionalInfo from "./tabs/AdditionalInfo.vue";
import Rating from "./tabs/Rating.vue";
import Pushes from "./tabs/Pushes.vue";
import Texts from "./tabs/texts/Texts.vue";
import DefaultTemplate from "./templates/android/DefaultTemplate.vue";
import NewTemplate from "./templates/android/NewTemplate.vue";
import DesktopTemplate from "./templates/android/DesktopTemplate.vue";
import IosDefaultTemplate from "./templates/ios/DefaultTemplate.vue";
import { usePwaStore } from "@/stores/apps/pwa/pwa_old";
import { ANDROID, IOS } from "@/utils/constants";

const store = usePwaStore();
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
              <template v-if="tab === 'Texts'">
                <Texts />
              </template>
            </v-card-text>
          </v-card>
        </v-window-item>
      </v-window>
    </v-container>
    <!-- iframe -->
    <div class="sticky top-[100px]">
      <div class="flex items-center justify-center gap-2 mb-3">
        <button
          :class="{ '!fill-white bg-[#2A5EE3]': store.getPlatformType === ANDROID }"
          @click="store.setPlatformType(ANDROID)"
          type="button"
          class="w-12 h-12 border border-transparent rounded-lg flex items-center justify-center transition-all fill-[#828aa3] hover:bg-[#2A5EE3] hover:fill-white"
        >
          <svg
            class="shrink-0"
            fill="inherit"
            height="32px"
            width="32px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 299.679 299.679"
            xml:space="preserve"
          >
            <path
              id="XMLID_221_"
              d="M181.122,299.679c10.02,0,18.758-8.738,18.758-18.758v-43.808h12.525c7.516,0,12.525-5.011,12.525-12.525
                                            V99.466H74.749v125.123c0,7.515,5.01,12.525,12.525,12.525H99.8v43.808c0,10.02,8.736,18.758,18.758,18.758
                                            c10.019,0,18.756-8.738,18.756-18.758v-43.808h25.051v43.808C162.364,290.941,171.102,299.679,181.122,299.679z"
            />
            <path
              id="XMLID_222_"
              d="M256.214,224.589c10.02,0,18.756-8.737,18.756-18.758v-87.615c0-9.967-8.736-18.75-18.756-18.75
                                            c-10.021,0-18.758,8.783-18.758,18.75v87.615C237.456,215.851,246.192,224.589,256.214,224.589z"
            />
            <path
              id="XMLID_223_"
              d="M43.466,224.589c10.021,0,18.758-8.737,18.758-18.758v-87.615c0-9.967-8.736-18.75-18.758-18.75
                                            c-10.02,0-18.756,8.783-18.756,18.75v87.615C24.71,215.851,33.446,224.589,43.466,224.589z"
            />
            <path
              id="XMLID_224_"
              d="M209.899,1.89c-2.504-2.52-6.232-2.52-8.736,0l-16.799,16.743l-0.775,0.774
                                            c-9.961-4.988-21.129-7.479-33.566-7.503c-0.061,0-0.121-0.002-0.182-0.002h-0.002c-0.063,0-0.121,0.002-0.184,0.002
                                            c-12.436,0.024-23.604,2.515-33.564,7.503l-0.777-0.774L98.516,1.89c-2.506-2.52-6.232-2.52-8.736,0
                                            c-2.506,2.506-2.506,6.225,0,8.729l16.25,16.253c-5.236,3.496-9.984,7.774-14.113,12.667C82.032,51.256,75.727,66.505,74.86,83.027
                                            c-0.008,0.172-0.025,0.342-0.033,0.514c-0.053,1.125-0.078,2.256-0.078,3.391H224.93c0-1.135-0.027-2.266-0.078-3.391
                                            c-0.008-0.172-0.025-0.342-0.035-0.514c-0.865-16.522-7.172-31.772-17.057-43.487c-4.127-4.893-8.877-9.171-14.113-12.667
                                            l16.252-16.253C212.405,8.115,212.405,4.396,209.899,1.89z M118.534,65.063c-5.182,0-9.383-4.201-9.383-9.383
                                            c0-5.182,4.201-9.383,9.383-9.383c5.182,0,9.383,4.201,9.383,9.383C127.917,60.862,123.716,65.063,118.534,65.063z M181.145,65.063
                                            c-5.182,0-9.383-4.201-9.383-9.383c0-5.182,4.201-9.383,9.383-9.383c5.182,0,9.383,4.201,9.383,9.383
                                            C190.528,60.862,186.327,65.063,181.145,65.063z"
            />
          </svg>
        </button>
        <button
          :class="{ '!fill-white bg-[#2A5EE3]': store.getPlatformType === IOS }"
          @click="store.setPlatformType(IOS)"
          type="button"
          class="w-12 h-12 border border-transparent rounded-lg flex items-center justify-center transition-all fill-[#828aa3] hover:bg-[#2A5EE3] hover:fill-white"
        >
          <svg
            class="shrink-0"
            fill="inherit"
            width="32px"
            height="32px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"
            />
          </svg>
        </button>
      </div>
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
        <div ref="templateIframe" class="iframe" width="412px" height="896px">
          <DefaultTemplate
            v-if="
            store.getPlatformType === ANDROID &&
            store.getSelectedPwaVersions[ANDROID].name as string === 'Blue Android'
          "
          />
          <NewTemplate
            v-if="
            store.getPlatformType === ANDROID &&
            store.getSelectedPwaVersions[ANDROID].name as string === 'Blue Updated Android'
          "
          />
          <DesktopTemplate
            v-if="
              store.getPlatformType === ANDROID &&
              store.getSelectedPwaVersions[ANDROID].name === 'Green Android'
            "
          />
          <IosDefaultTemplate v-if="store.getPlatformType === IOS" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.iframe-container {
  position: relative;
}
</style>
