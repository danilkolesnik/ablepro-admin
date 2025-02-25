<script setup lang="ts">
import { ref } from "vue";

const formDataMain = ref({
  version: "",
  user_tag: "",
  domain: "",
  flow: "",
  pwa_subject: "",
});
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-label class="mb-2">PWA Version</v-label>
      <v-autocomplete
        :items="['LINK', 'PWA', 'TGAPPS']"
        label="LINK"
        rounded="0"
        color="primary"
        single-line
        density="comfortable"
        hide-details
        variant="outlined"
        v-model="formDataDomain.category"
      ></v-autocomplete>
    </v-col>
  </v-row>
</template>
