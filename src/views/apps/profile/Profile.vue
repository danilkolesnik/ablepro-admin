<script>
import BioForm from "./forms/BioForm.vue";
import PasswordForm from "./forms/PasswordForm.vue";
import TwoFactor from "./forms/TwoFactor.vue";
import Sessions from "./forms/Sessions.vue";

export default {
  components: { BioForm, PasswordForm, TwoFactor, Sessions },
};
</script>

<template>
    <v-container>
      <!-- bio -->
      <v-row class="mb-6">
        <v-col cols="12" md="4">
          <h2 class="text-h5 font-weight-medium">Profile</h2>
          <p class="text-h6 opacity-50">Update Profile</p>
        </v-col>
        <v-col cols="12" md="8">
          <v-card class="pa-6">
            <BioForm />
          </v-card>
        </v-col>
      </v-row>
      <v-divider />
      <!-- password -->
      <v-row class="my-6">
        <v-col cols="12" md="4">
          <h2 class="text-h5 font-weight-medium">Password</h2>
          <p class="text-h6 opacity-50">Update Password</p>
        </v-col>
        <v-col cols="12" md="8">
          <v-card class="pa-6">
            <PasswordForm />
          </v-card>
        </v-col>
      </v-row>
      <v-divider />
      <!-- two factor -->
      <v-row class="my-6">
        <v-col cols="12" md="4">
          <h2 class="text-h5 font-weight-medium">Two-factor authentication</h2>
        </v-col>
        <v-col cols="12" md="8">
          <v-card class="pa-6">
            <TwoFactor />
          </v-card>
        </v-col>
      </v-row>
      <v-divider />
      <!-- sessions -->
      <v-row class="my-6">
        <v-col cols="12" md="4">
          <h2 class="text-h5 font-weight-medium">Sessions</h2>
          <p class="text-h6 opacity-50">Manage active sessions and log out from them on other browsers and devices.</p>
        </v-col>
        <v-col cols="12" md="8">
          <v-card class="pa-6">
            <Sessions />
          </v-card>
        </v-col>
      </v-row>
      <v-divider />
      <!-- api tokens -->
      <v-row class="my-6">
        <v-col cols="12" md="4">
          <h2 class="text-h5 font-weight-medium">Manage Api Tokens</h2>
          <p class="text-h6 opacity-50">Create, Edit or Delete your api tokens.</p>
        </v-col>
        <v-col cols="12" md="8">
          <v-card class="pa-6">
            <v-btn @click="$router.push('/user/api-tokens')" color="primary">Create Api Token</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  