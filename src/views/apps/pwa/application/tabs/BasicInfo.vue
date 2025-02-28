<script setup lang="ts">
import { ref } from "vue";

const pwaName = ref("");
const pwaAuthor = ref("");
const pwaDescription = ref("");
const pwaKeywords = ref("");
const pwaVideoLink = ref("");
const pwaYouTubeLink = ref("");
</script>

<template>
  <v-container>
    <h3 class="text-h6 font-weight-bold mt-4">PWA Name</h3>
    <v-text-field v-model="pwaName" label="" />
    <h3 class="text-h6 font-weight-bold mt-4">PWA Author</h3>
    <v-text-field v-model="pwaAuthor" label="" />
    <h3 class="text-h6 font-weight-bold mt-4">Description</h3>
    <v-textarea v-model="pwaDescription" label="" rows="3" auto-grow />
    <h3 class="text-h6 font-weight-bold mt-4">Key words for autogenerate description</h3>
    <v-text-field v-model="pwaKeywords" label="" />
    <h3 class="text-h6 font-weight-bold mt-4">Video (Optional)</h3>
    <v-text-field v-model="pwaVideoLink" label="" />
    <h3 class="text-h6 font-weight-bold mt-4">Add a youtube link (Optional)</h3>
    <v-text-field v-model="pwaYouTubeLink" label="" />
  </v-container>
</template>
