<script setup>
import { useBioForm } from "@/stores/apps/profile/bioform";
import { ref, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const store = useBioForm();
const { getData, updateUser } = store;
const loading = ref(false);

const profile = computed(() => {
  const data = getData;
  return {
    photo: data.photo_profile,
    name: data.name,
    email: data.email,
    telegram: data.telegram_id,
    telegramKey: data.telegram_key,
  };
});

const uploadPhoto = () => {
  console.log("Upload photo...");
};

const deletePhoto = () => {
  profile.value.photo = "https://via.placeholder.com/56";
};

const saveProfile = async () => {
  try {
    loading.value = true;
    const updateData = {
      name: profile.value.name,
      email: profile.value.email,
      telegram: profile.value.telegram,
      password: "",
      role: "",
      pages: [],
      users: [],
      all_users: false,
      tariffs: 0,
      tariff_expiration_date: "",
      balance: 0,
      credit_limit: 0,
      referral_percent: 0,
    };

    const userId = "current";
    await updateUser(userId, updateData);
  } catch (error) {
    console.error("Error updating profile:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  store.fetchUserData();
});
</script>

<template>
  <v-form @submit.prevent="saveProfile">
    <v-row align="center" class="d-flex flex-column">
      <v-col cols="3" class="d-flex justify-center">
        <v-avatar size="56">
          <img
            :src="profile.photo || '/src/assets/images/users/avatar-6.png'"
            alt="User Photo"
          />
        </v-avatar>
      </v-col>
      <v-col cols="9" class="d-flex justify-center">
        <v-btn variant="outlined" class="me-2" @click="uploadPhoto">{{
          t("New Photo")
        }}</v-btn>
        <v-btn variant="outlined" color="error" @click="deletePhoto">{{
          t("Delete Photo")
        }}</v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4">
        <label class="text-subtitle-1 font-weight-medium">{{ t("Name") }}</label>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          v-model="profile.name"
          :placeholder="t('Enter your name')"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4">
        <label class="text-subtitle-1 font-weight-medium">{{ t("E-mail") }}</label>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          v-model="profile.email"
          :placeholder="t('Enter your email')"
          type="email"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4">
        <label class="text-subtitle-1 font-weight-medium">{{ t("Telegram") }}</label>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          v-model="profile.telegram"
          :placeholder="t('Enter your Telegram ID')"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4">
        <label class="text-subtitle-1 font-weight-medium">{{ t("Telegram Key") }}</label>
      </v-col>
      <v-col cols="12" md="8">
        <v-text-field
          v-model="profile.telegramKey"
          readonly
          :placeholder="t('Your Telegram Key')"
        ></v-text-field>
      </v-col>
    </v-row>

    <div class="d-flex justify-end mt-4">
      <v-btn type="submit" color="primary" :loading="loading">
        {{ t("Save Changes") }}
      </v-btn>
    </div>
  </v-form>
</template>
