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
    <v-text-field v-model="rating" label="" type="number" />

    <v-slider v-model="fiveStarCount" label="Five-star ratings count" min="0" max="100" thumb-label />
    <v-slider v-model="fourStarCount" label="Four-star ratings count" min="0" max="100" thumb-label />
    <v-slider v-model="threeStarCount" label="Three-star ratings count" min="0" max="100" thumb-label />
    <v-slider v-model="twoStarCount" label="Two-star ratings count" min="0" max="100" thumb-label />
    <v-slider v-model="oneStarCount" label="One-star ratings count" min="0" max="100" thumb-label />

    <v-checkbox v-model="generateReviews" label="Generate reviews?" />

    <v-btn variant="outlined" class="mt-2">Add review</v-btn>
  </v-container>
</template>
