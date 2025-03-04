<script setup lang="ts">
import { ref } from "vue";
import MainSection from "./sections/MainSection.vue";
import SecuritySection from "./sections/SecuritySection.vue";
import ButtonSection from "./sections/ButtonSection.vue";
import RatingSection from "./sections/RatingSection.vue";
import WhatsNewSection from "./sections/WhatsNewSection.vue";
import AppSupportSection from "./sections/AppSupportSection.vue";
import ContactsSection from "./sections/ContactsSection.vue";

const formData = ref({
  mainTitle: "",
  mainDescription: "",
  securityPassword: "",
  security2FA: false,
  buttonColor: "",
  buttonSize: "",
  ratingStars: 0,
  whatsNewText: "",
  appSupportEmail: "",
  contactsPhone: "",
});
</script>

<template>
  <v-expansion-panels multiple>
    <!-- 🏠 Main Section -->
    <v-expansion-panel>
      <v-expansion-panel-title>Main</v-expansion-panel-title>
      <v-expansion-panel-text>
        <MainSection />
      </v-expansion-panel-text>
    </v-expansion-panel>

    <!-- 🔒 Security Section -->
    <v-expansion-panel>
      <v-expansion-panel-title>Security</v-expansion-panel-title>
      <v-expansion-panel-text>
        <SecuritySection />
      </v-expansion-panel-text>
    </v-expansion-panel>

    <!-- 🎨 Button Settings -->
    <v-expansion-panel>
      <v-expansion-panel-title>Button</v-expansion-panel-title>
      <v-expansion-panel-text>
        <ButtonSection />
      </v-expansion-panel-text>
    </v-expansion-panel>

    <!-- ⭐ Rating -->
    <v-expansion-panel>
      <v-expansion-panel-title>Rating</v-expansion-panel-title>
      <v-expansion-panel-text>
        <RatingSection />
      </v-expansion-panel-text>
    </v-expansion-panel>

    <!-- 🆕 What's New? -->
    <v-expansion-panel>
      <v-expansion-panel-title>What's new?</v-expansion-panel-title>
      <v-expansion-panel-text>
        <WhatsNewSection />
      </v-expansion-panel-text>
    </v-expansion-panel>

    <!-- 📩 App Support -->
    <v-expansion-panel>
      <v-expansion-panel-title>App support</v-expansion-panel-title>
      <v-expansion-panel-text>
        <AppSupportSection />
      </v-expansion-panel-text>
    </v-expansion-panel>

    <!-- ☎ Contacts -->
    <v-expansion-panel>
      <v-expansion-panel-title>Contacts</v-expansion-panel-title>
      <v-expansion-panel-text>
        <ContactsSection />
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
