<script setup lang="ts">
import { ref } from 'vue';

const dialog = ref(false);
</script>

<template>
  <!-- ----------------------------------------------------------------------------- -->
  <!-- Persistent -->
  <!-- ----------------------------------------------------------------------------- -->
  <p class="text-caption text-grey-darken-1">
    Persistent dialogs are not dismissed when touching outside or pressing the <strong>esc</strong> key.
  </p>
  <div class="text-center mt-6">
    <v-dialog v-model="dialog" persistent>
      <template v-slot:activator="{ props }">
        <v-btn color="primary" variant="flat" v-bind="props"> Open Dialog </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5"> Use Google's location service? </v-card-title>
        <v-card-text
          >Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are
          running.</v-card-text
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" variant="text" @click="(dialog = false)"> Disagree </v-btn>
          <v-btn color="green darken-1" variant="text" @click="(dialog = false)"> Agree </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
