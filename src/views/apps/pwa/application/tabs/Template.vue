<script setup lang="ts">
import { ref } from "vue";

const pwaCategory = ref("Gambling");
const pwaSubCategory = ref("");
</script>

<template>
  <v-container>
    <h3 class="text-h6 font-weight-bold mt-4">Select Category</h3>
    <v-select
      v-model="pwaCategory"
      label=""
      :items="['Gambling', 'Animated Gambling', 'Custom']"
    />
    <h3 class="text-h6 font-weight-bold mt-4">Select Category</h3>
    <v-select
      v-model="pwaSubCategory"
      label=""
      :items="['']"
    />
  </v-container>
</template>
