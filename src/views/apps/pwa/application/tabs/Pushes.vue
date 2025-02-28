<script setup lang="ts">
import { ref } from "vue";

const pushes = ref("");

</script>

<template>
  <v-container>
    <v-btn variant="outlined" class="mt-2">Create Pixel</v-btn>
    <h3 class="text-h6 font-weight-bold mt-4">Select Pushes</h3>
    <v-select
      v-model="pushes"
      label=""
      :items="['Select related PWAs']"
    />
  </v-container>
</template>
