<script setup lang="ts">
import { ref } from "vue";
// common components
import BaseBreadcrumb from "@/components/shared/BaseBreadcrumb.vue";
import UiParentCard from "@/components/shared/UiParentCard.vue";
import { useDomains } from "@/stores/apps/domains";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
// theme breadcrumb
const page = ref({ title: t("Buy Domain") });
const breadcrumbs = ref([
  {
    title: t("Domains"),
    disabled: false,
    href: "#",
  },
  {
    title: t("Buy Domain"),
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
      <UiParentCard :title="t('Buy Domain')">
        <v-row>
          <v-col cols="12">
            <v-label class="text-subtitle-1 text-lightText mb-2"
              >{{ t("Domain") }}<span class="ms-1">*</span></v-label
            >
            <v-text-field
              type="text"
              color="primary"
              v-model="formData.domain"
              hide-details
              variant="outlined"
              density="comfortable"
              persistent-placeholder
              :placeholder="t('Enter domain')"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-label class="text-subtitle-1 text-lightText mb-2"
              >{{ t("Price") }}:<span class="ms-1">*</span></v-label
            >
            <v-text-field
              color="primary"
              v-model="formData.price"
              hide-details
              variant="outlined"
              density="comfortable"
              persistent-placeholder
              :placeholder="t('Enter price')"
            />
          </v-col>
        </v-row>
        <v-divider class="my-6"></v-divider>
        <div class="text-end">
          <v-btn color="primary" rounded="md" variant="flat" @click="onSubmitForm">{{
            t("Buy Domain")
          }}</v-btn>
        </div>
      </UiParentCard>
    </v-col>
  </v-row>
</template>
