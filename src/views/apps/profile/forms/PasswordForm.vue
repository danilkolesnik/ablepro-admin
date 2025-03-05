<script setup>
import { ref } from "vue";
import { useBioForm } from "@/stores/apps/profile/bioform";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const store = useBioForm();
const { updatePassword } = store;
const loading = ref(false);

const showCurrentPassword = ref(false);
const showNewPassword = ref(false);
const showConfirmPassword = ref(false);

const form = ref({
  current_password: "",
  password: "",
  password_confirmation: "",
});

const submitForm = async () => {
  if (form.value.password !== form.value.password_confirmation) {
    return;
  }

  try {
    loading.value = true;
    await updatePassword({
      current_password: form.value.current_password,
      password: form.value.password,
    });

    form.value = {
      current_password: "",
      password: "",
      password_confirmation: "",
    };
  } catch (error) {
    console.error("Error updating password:", error);
  } finally {
    loading.value = false;
  }
};
</script>

<template>
  <v-form @submit.prevent="submitForm">
    <v-row>
      <v-col cols="12">
        <label class="text-subtitle-1 font-weight-medium">{{
          t("Current Password")
        }}</label>
        <v-text-field
          v-model="form.current_password"
          :type="showCurrentPassword ? 'text' : 'password'"
          :append-inner-icon="showCurrentPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append-inner="showCurrentPassword = !showCurrentPassword"
          :placeholder="t('Enter current password')"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <label class="text-subtitle-1 font-weight-medium">{{ t("New Password") }}</label>
        <v-text-field
          v-model="form.password"
          :type="showNewPassword ? 'text' : 'password'"
          :append-inner-icon="showNewPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append-inner="showNewPassword = !showNewPassword"
          :placeholder="t('Enter new password')"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <label class="text-subtitle-1 font-weight-medium">{{
          t("Confirm Password")
        }}</label>
        <v-text-field
          v-model="form.password_confirmation"
          :type="showConfirmPassword ? 'text' : 'password'"
          :append-inner-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append-inner="showConfirmPassword = !showConfirmPassword"
          :placeholder="t('Confirm new password')"
          :error="form.password !== form.password_confirmation"
          :error-messages="
            form.password !== form.password_confirmation
              ? t('Passwords do not match')
              : ''
          "
        ></v-text-field>
      </v-col>
    </v-row>

    <v-btn
      type="submit"
      color="primary"
      :loading="loading"
      :disabled="
        !form.current_password ||
        !form.password ||
        form.password !== form.password_confirmation
      "
    >
      {{ t("Update Password") }}
    </v-btn>
  </v-form>
</template>
