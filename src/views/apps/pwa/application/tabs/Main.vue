<script setup lang="ts">
import { ref } from "vue";

const pwaVersion = ref("Blue android");
const userTag = ref("");
const domain = ref("");
const flow = ref("");
const pwaSubject = ref("Gambl");
</script>

<template>
  <v-container>
    <h3 class="text-h6 font-weight-bold mt-4">PWA Version</h3>
    <v-select
      color="primary"
      v-model="pwaVersion"
      label=""
      :items="['Blue android', 'Blue updated android', 'Green android']"
    />

    <h3 class="text-h6 font-weight-bold mt-4">User tag</h3>
    <v-text-field v-model="userTag" label="User tag" />

    <h3 class="text-h6 font-weight-bold mt-4">Domain</h3>
    <v-select color="primary" v-model="domain" label="" :items="['Select domain']" />
    <v-btn color="primary" class="mt-2" variant="outlined">Add custom domain</v-btn>

    <h3 class="text-h6 font-weight-bold mt-4">Select Flow</h3>
    <v-select color="primary" v-model="flow" label="" :items="['Select flow']" />
    <v-btn color="primary" class="mt-2" variant="outlined">Add custom flow</v-btn>

    <h3 class="text-h6 font-weight-bold mt-4">PWA Subject</h3>
    <v-select color="primary" v-model="pwaSubject" label="" :items="['Gambling']" />
  </v-container>
</template>
