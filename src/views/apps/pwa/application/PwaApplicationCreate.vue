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
const tabs = ["Main", "Template", "Basic info", "Additional info", "Rating", "Pushes", "Texts"];
</script>

<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs" />
  
  <v-container>
    <!-- language -->
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" variant="outlined">
          {{ selectedLanguage }}
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="lang in languages" :key="lang" @click="selectedLanguage = lang">
          <v-list-item-title>{{ lang }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    
    <!-- tabs -->
    <v-tabs v-model="activeTab" class="mt-4">
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
    <!-- iframe -->
    <div class="sticky top-[100px]">
      <div
        :style="{ backgroundImage: 'url(' + ')' }"
        style="background-repeat: no-repeat;
               filter: drop-shadow(0px 35px 46px rgba(33, 191, 115, 0.15));
               height: 995px;
               background-size: 100%;" class="iframe-container">
        <iframe
          srcdoc='<html id="html"></html>'
          class="iframe" width="412px" height="896px" frameborder="0"></iframe>
      </div>
    </div>
  </v-container>
</template>

<style>
.iframe-container {
    position: relative;
}
</style> 