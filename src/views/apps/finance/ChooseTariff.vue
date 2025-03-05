<script setup lang="ts">
import { ref, shallowRef } from "vue";
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";

const page = ref({ title: "Choose tariff" });

const breadcrumbs = shallowRef([
  {
    title: "Transactions",
    disabled: false,
    href: "/dashboard",
  },
  {
    title: "Choose tariff",
    disabled: true,
    href: "#",
  },
]);
</script>

<template>
    <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
    <v-card class="top-up-card">
        <p class="text-h6 opacity-50">There is no available tariffs for you</p>
    </v-card>
  </template>

<style>
.top-up-card {
    padding: 1.5rem 2rem;
    margin-bottom: 1rem;
}
</style>