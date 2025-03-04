<script setup>
import { useBioForm } from "@/stores/apps/profile/bioform";
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const store = useBioForm();
const { getData, activeTwoFactor, deactiveTwoFactor } = store;
const loading = ref(false);

const isTwoFactorEnabled = computed(() => getData.two_factor_confirmed_at);

const handleTwoFactor = async () => {
  try {
    loading.value = true;
    if (isTwoFactorEnabled.value) {
      await deactiveTwoFactor();
    } else {
      await activeTwoFactor();
    }
  } catch (error) {
    console.error("Error with two factor:", error);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <v-form @submit.prevent="handleTwoFactor">
    <h2 class="text-h5 font-weight-medium">
      {{
        isTwoFactorEnabled
          ? t("Two-factor authentication is enabled")
          : t("Two-factor authentication is not enabled")
      }}
    </h2>
    <p class="text-h6 opacity-50 py-3">
      {{ t("Two factor authentication description") }}
    </p>
    <v-btn
      type="submit"
      :color="isTwoFactorEnabled ? 'error' : 'primary'"
      :loading="loading"
    >
      {{ isTwoFactorEnabled ? t("Disable") : t("Enable") }}
    </v-btn>
  </v-form>
</template>
