<script setup lang="ts">
import { ref, shallowRef } from "vue";
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";

const page = ref({ title: "Top up" });

const breadcrumbs = shallowRef([
  {
    title: "Transactions",
    disabled: false,
    href: "/dashboard",
  },
  {
    title: "Top up",
    disabled: true,
    href: "#",
  },
]);
</script>

<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-card class="top-up-card">
        <p class="text-h6 opacity-50">API tokens allow third-party services to authenticate with our application on your behalf.</p>
    </v-card>
    <v-card class="top-up-card">
      <!-- create token -->
      <v-row class="my-6">
        <v-col cols="12" md="12">
          <h2 class="text-h5 font-weight-medium">Amount (Min. 50)</h2>
          <v-text-field 
            class="mt-2"
            color="primary"
            single-line
            hide-details
            type="number"
            required
            variant="outlined"
            density="comfortable"
            rounded="0"
            ></v-text-field>
        </v-col>
      </v-row>
      <v-divider />
      <!-- manage tokens -->
      <v-row class="my-6">
        <v-col cols="12" md="12">
          <h2 class="text-h5 font-weight-medium">Choose USDT network</h2>
          <v-autocomplete
            :items="['TRC20', 'ERC20',]"
            label="Choose network"
            rounded="0"
            color="primary"
            single-line
            density="comfortable"
            hide-details
            variant="outlined"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-card>
  </template>

<style>
.top-up-card {
    padding: 1.5rem 2rem;
    margin-bottom: 1rem;
}
</style>