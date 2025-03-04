<script setup lang="ts">
import { ref } from "vue";

const rating = ref(2);
const fiveStarCount = ref(50);
const fourStarCount = ref(30);
const threeStarCount = ref(10);
const twoStarCount = ref(5);
const oneStarCount = ref(5);
const generateReviews = ref(false);
</script>

<template>
  <v-container>
    <h3 class="text-h6 font-weight-bold mt-4">Rating</h3>
    <v-text-field
    color="primary"
    type="number"
    single-line
    hide-details
    placeholder="Books"
    required
    variant="outlined"
    density="comfortable"
    rounded="0"
    v-model="rating"
    ></v-text-field>

    <v-slider v-model="fiveStarCount" color="primary" label="Five-star ratings count" min="0" max="100" thumb-label />
    <v-slider v-model="fourStarCount" color="primary" label="Four-star ratings count" min="0" max="100" thumb-label />
    <v-slider v-model="threeStarCount" color="primary" label="Three-star ratings count" min="0" max="100" thumb-label />
    <v-slider v-model="twoStarCount" color="primary" label="Two-star ratings count" min="0" max="100" thumb-label />
    <v-slider v-model="oneStarCount" color="primary" label="One-star ratings count" min="0" max="100" thumb-label />

    <v-checkbox v-model="generateReviews" color="primary" label="Generate reviews?" />

    <v-btn variant="outlined" color="primary" class="mt-2">Add review</v-btn>
  </v-container>
</template>
