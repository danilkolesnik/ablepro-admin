<script setup>
import { useBioForm } from "@/stores/apps/profile/bioform";
import { ref, computed, onMounted } from "vue";

const store = useBioForm();
const { getData } = store;

const profile = computed(() => {
  const data = getData;
  return {
    photo: data.photo_profile,
    name: data.name,
    email: data.email,
    telegram: data.telegram,
  };
});

// console.log(profile);

const originalProfile = ref(null);

const isChanged = computed(() => {
  return JSON.stringify(profile.value) !== JSON.stringify(originalProfile.value);
});

const uploadPhoto = () => {
  console.log("Upload photo...");
};

const deletePhoto = () => {
  profile.value.photo = "https://via.placeholder.com/56";
};

const saveProfile = () => {
  console.log("Saving profile:", profile.value);
  originalProfile.value = JSON.parse(JSON.stringify(profile.value));
};

// Equivalent to mounted()
originalProfile.value = JSON.parse(JSON.stringify(profile.value));

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
        <v-btn variant="outlined" class="me-2" @click="uploadPhoto">New Photo</v-btn>
        <v-btn variant="outlined" color="red" @click="deletePhoto">Delete Photo</v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4"
        ><label class="text-subtitle-1 font-weight-medium">Name</label></v-col
      >
      <v-col cols="12" md="8">
        <v-text-field v-model="profile.name"></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4"
        ><label class="text-subtitle-1 font-weight-medium">E-mail</label></v-col
      >
      <v-col cols="12" md="8">
        <v-text-field v-model="profile.email"></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="4"
        ><label class="text-subtitle-1 font-weight-medium">Telegram</label></v-col
      >
      <v-col cols="12" md="8">
        <v-text-field v-model="profile.telegram"></v-text-field>
      </v-col>
    </v-row>

    <v-btn type="submit" color="primary" :disabled="!isChanged">Save</v-btn>
  </v-form>
</template>
