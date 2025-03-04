<script setup lang="ts">
import { shallowRef } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const languageDD = shallowRef([
  { title: "English", subtext: "UK", value: "en" },
  { title: "Русский", subtext: "Russian", value: "ru" },
  { title: "Українська", subtext: "Ukraine", value: "ua" },
]);

const changeLanguage = (value: string) => {
  locale.value = value;
  localStorage.setItem("selectedLanguage", value);
};
</script>

<template>
  <v-list class="px-2" aria-label="language list">
    <v-list-item
      v-for="(item, index) in languageDD"
      :key="index"
      color="primary"
      rounded="md"
      :active="locale === item.value"
      class="d-flex align-center"
      @click="changeLanguage(item.value)"
    >
      <v-list-item-title class="text-h6">
        {{ item.title }}
        <span class="text-lightText text-caption pl-2">({{ item.subtext }})</span>
      </v-list-item-title>
    </v-list-item>
  </v-list>
</template>
