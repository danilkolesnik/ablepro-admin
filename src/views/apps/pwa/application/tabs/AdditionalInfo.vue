<script setup lang="ts">
import { ref } from "vue";

const relatedPWAs = ref("");
const reviewNumber = ref("120");
const installsNumber = ref("3250");
const fileSize = ref("0");

</script>

<template>
  <v-container>
    <h3 class="text-h6 font-weight-bold mt-4">Related PWAs</h3>
    <v-select
      color="primary"
      v-model="relatedPWAs"
      label=""
      :items="['Select related PWAs']"
    />

    <h3 class="text-h6 font-weight-bold mt-4">Number of reviews</h3>
    <v-text-field v-model="reviewNumber" color="primary" label="" />

    <h3 class="text-h6 font-weight-bold mt-4">Number of installs</h3>
    <v-text-field v-model="installsNumber" color="primary" label="" />

    <h3 class="text-h6 font-weight-bold mt-4">File Size (MB)</h3>
    <v-text-field v-model="fileSize" color="primary" label="" />
  </v-container>
</template>
