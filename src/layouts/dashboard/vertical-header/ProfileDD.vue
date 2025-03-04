<script setup lang="ts">
import { onMounted, ref } from "vue";
import SvgSprite from "@/components/shared/SvgSprite.vue";
import { useCustomizerStore } from "../../../stores/customizer";

import { useAuthStore } from "@/stores/auth";
import { useBioForm } from "@/stores/apps/profile/bioform";
import type { BioFormStateProps } from "@/types/profile/bioform";

const store = useBioForm();
const authStore = useAuthStore();
const customizer = useCustomizerStore();

const userData = ref<BioFormStateProps | null>(null);

onMounted(() => {
  store.fetchUserData().then((res) => {
    userData.value = res.user;
  });
});
</script>

<template>
  <!-- ---------------------------------------------- -->
  <!-- profile DD -->
  <!-- ---------------------------------------------- -->
  <div>
    <div class="d-flex align-center pa-5">
      <v-avatar size="40" class="me-2">
        <img
          :src="userData?.photo_profile || '@/assets/images/users/avatar-6.png'"
          width="40"
          alt="profile"
        />
      </v-avatar>
      <div>
        <h6 class="text-subtitle-1 mb-0">{{ userData?.name }}</h6>
        <p class="text-caption text-lightText mb-0">{{ userData?.role }}</p>
      </div>
      <div class="ms-auto">
        <v-btn
          variant="text"
          aria-label="logout"
          color="error"
          rounded="sm"
          icon
          size="large"
          @click="authStore.logout()"
        >
          <SvgSprite name="custom-logout-1" />
        </v-btn>
      </div>
    </div>
    <v-divider></v-divider>
    <perfect-scrollbar style="height: calc(100vh - 300px); max-height: 240px">
      <v-list class="px-2" aria-label="profile list" aria-busy="true">
        <!-- edit -->
        <v-list-item
          @click="$router.push('/user/profile')"
          color="primary"
          :base-color="customizer.actTheme === 'dark' ? 'lightText' : 'secondary'"
          rounded="md"
        >
          <template v-slot:prepend>
            <div class="me-4">
              <SvgSprite name="custom-edit" style="width: 18px; height: 18px" />
            </div>
          </template>

          <v-list-item-title class="text-h6">Edit profile</v-list-item-title>
        </v-list-item>
        <!-- logout -->
        <v-list-item
          @click="authStore.logout()"
          color="primary"
          :base-color="customizer.actTheme === 'dark' ? 'lightText' : 'secondary'"
          rounded="md"
        >
          <template v-slot:prepend>
            <div class="me-4">
              <SvgSprite name="custom-logout-1" style="width: 18px; height: 18px" />
            </div>
          </template>

          <v-list-item-title class="text-h6"> Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </perfect-scrollbar>
  </div>
</template>
