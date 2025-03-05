<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { usePwaStore } from "@/stores/apps/pwa/pwa_old";

const pwaName = ref("");
const pwaAuthor = ref("");
const pwaDescription = ref("");
const pwaKeywords = ref("");
const pwaVideoLink = ref("");
const pwaYouTubeLink = ref("");

const pwaStore = usePwaStore();

watchEffect(() => {
  pwaStore.setName(pwaName.value);
  pwaAuthor.value = pwaStore.getAuthor().value;
});

// function updatePwaName() {
//   pwaStore.setName(pwaName.value);
// }

function updatePwaAuthor() {
  pwaStore.setAuthor(pwaAuthor.value);
}
</script>

<template>
  <v-container>
    <h3 class="text-h6 font-weight-bold mt-4">PWA Name</h3>
    <v-text-field
      color="primary"
      type="text"
      single-line
      hide-details
      placeholder="Books"
      required
      variant="outlined"
      density="comfortable"
      rounded="0"
      v-model="pwaName"
    ></v-text-field>
    <h3 class="text-h6 font-weight-bold mt-4">PWA Author</h3>
    <v-text-field
      color="primary"
      type="text"
      single-line
      hide-details
      placeholder="Books"
      required
      variant="outlined"
      density="comfortable"
      rounded="0"
      v-model="pwaAuthor"
      @input="updatePwaAuthor"
    ></v-text-field>
    <h3 class="text-h6 font-weight-bold mt-4">Description</h3>
    <v-textarea
      color="primary"
      type="number"
      single-line
      hide-details
      placeholder="Books"
      required
      variant="outlined"
      density="comfortable"
      rounded="0"
      v-model="pwaDescription"
    ></v-textarea>
    <h3 class="text-h6 font-weight-bold mt-4">Key words for autogenerate description</h3>
    <v-text-field
      color="primary"
      type="text"
      single-line
      hide-details
      placeholder="Books"
      required
      variant="outlined"
      density="comfortable"
      rounded="0"
      v-model="pwaKeywords"
    ></v-text-field>
    <h3 class="text-h6 font-weight-bold mt-4">Video (Optional)</h3>
    <v-text-field
      color="primary"
      type="text"
      single-line
      hide-details
      placeholder="Books"
      required
      variant="outlined"
      density="comfortable"
      rounded="0"
      v-model="pwaVideoLink"
    ></v-text-field>
    <h3 class="text-h6 font-weight-bold mt-4">Add a youtube link (Optional)</h3>
    <v-text-field
      color="primary"
      type="text"
      single-line
      hide-details
      placeholder="Books"
      required
      variant="outlined"
      density="comfortable"
      rounded="0"
      v-model="pwaYouTubeLink"
    ></v-text-field>
  </v-container>
</template>
