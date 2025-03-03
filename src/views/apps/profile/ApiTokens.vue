<script>
import TokenForm from "./forms/TokenForm.vue";
import TokenList from "./forms/TokenList.vue";

export default {
  components: { TokenForm, TokenList },
};
</script>

<template>
    <v-container>
      <!-- create token -->
      <v-row class="my-6">
        <v-col cols="12" md="4">
          <h2 class="text-h5 font-weight-medium">Create API Token</h2>
          <p class="text-h6 opacity-50">API tokens allow third-party services to authenticate with our application on your behalf.</p>
        </v-col>
        <v-col cols="12" md="8">
          <v-card class="pa-6">
            <TokenForm />
          </v-card>
        </v-col>
      </v-row>
      <v-divider />
      <!-- manage tokens -->
      <v-row class="my-6">
        <v-col cols="12" md="4">
          <h2 class="text-h5 font-weight-medium">Manage API Tokens</h2>
          <p class="text-h6 opacity-50">You may delete any of your existing tokens if they are no longer needed.</p>
        </v-col>
        <v-col cols="12" md="8">
          <v-card class="pa-6">
            <TokenList />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  