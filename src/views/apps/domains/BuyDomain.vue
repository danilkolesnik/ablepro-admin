<script setup lang="ts">
import { ref } from "vue";
// common components
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";
import UiParentCard from "@/components/shared/UiParentCard.vue";
import { useDomains } from "@/stores/apps/domains";

// theme breadcrumb
const page = ref({ title: "Buy Domain" });
const breadcrumbs = ref([
  {
    title: "Domains",
    disabled: false,
    href: "#",
  },
  {
    title: "Buy Domain",
    disabled: true,
    href: "#",
  },
]);

const store = useDomains();

const { buyDomain } = store;

const formData = ref({
  domain: "",
  price: "",
});

const onSubmitForm = async () => {
  const body = {
    domain: formData.value.domain,
    price: Number(formData.value.price),
  };

  formData.value = {
    domain: "",
    price: "",
  };

  await buyDomain(body);
};
</script>

<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
  <v-row>
    <v-col cols="12">
      <UiParentCard title="Buy Domain">
        <v-row>
          <v-col cols="12">
            <v-label class="text-subtitle-1 text-lightText mb-2"
              >Domain<span class="ms-1">*</span></v-label
            >
            <v-text-field
              type="text"
              color="primary"
              v-model="formData.domain"
              hide-details
              variant="outlined"
              density="comfortable"
              persistent-placeholder
              placeholder="Enter domain"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-label class="text-subtitle-1 text-lightText mb-2"
              >Price:<span class="ms-1">*</span></v-label
            >
            <v-text-field
              color="primary"
              v-model="formData.price"
              hide-details
              variant="outlined"
              density="comfortable"
              persistent-placeholder
              placeholder="Enter price"
            />
          </v-col>
        </v-row>
        <v-divider class="my-6"></v-divider>
        <div class="text-end">
          <v-btn color="primary" rounded="md" variant="flat" @click="onSubmitForm"
            >Buy Domain</v-btn
          >
        </div>
      </UiParentCard>
    </v-col>
  </v-row>
</template>
