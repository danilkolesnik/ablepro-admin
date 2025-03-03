<template>
    <v-form @submit.prevent="saveProfile">
      <v-row align="center">
        <v-col cols="3">
          <v-avatar size="56">
            <img :src="profile.photo" alt="User Photo" />
          </v-avatar>
        </v-col>
        <v-col cols="9">
          <v-btn variant="outlined" class="me-2" @click="uploadPhoto">New Photo</v-btn>
          <v-btn variant="outlined" color="red" @click="deletePhoto">Delete Photo</v-btn>
        </v-col>
      </v-row>
  
      <v-row>
        <v-col cols="12" md="4"><label class="text-subtitle-1 font-weight-medium">Name</label></v-col>
        <v-col cols="12" md="8">
          <v-text-field v-model="profile.name"></v-text-field>
        </v-col>
      </v-row>
  
      <v-row>
        <v-col cols="12" md="4"><label class="text-subtitle-1 font-weight-medium">E-mail</label></v-col>
        <v-col cols="12" md="8">
          <v-text-field v-model="profile.email"></v-text-field>
        </v-col>
      </v-row>
  
      <v-row>
        <v-col cols="12" md="4"><label class="text-subtitle-1 font-weight-medium">Telegram</label></v-col>
        <v-col cols="12" md="8">
          <v-text-field v-model="profile.telegram"></v-text-field>
        </v-col>
      </v-row>
  
      <v-row>
        <v-col cols="12" md="4"><label class="text-subtitle-1 font-weight-medium">Telegram Key</label></v-col>
        <v-col cols="12" md="8">
          <v-text-field v-model="profile.telegramKey" readonly></v-text-field>
        </v-col>
      </v-row>
  
      <v-btn type="submit" color="primary" :disabled="!isChanged">Save</v-btn>
    </v-form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        profile: {
          photo: "https://via.placeholder.com/56",
          name: "Demo.user",
          email: "demo.dev@spendy.pro",
          telegram: "@demo.746",
          telegramKey: "JGmgcMrhI35KGhd7W6Nn0mU8wfTKsr",
        },
        originalProfile: null,
      };
    },
    computed: {
      isChanged() {
        return JSON.stringify(this.profile) !== JSON.stringify(this.originalProfile);
      },
    },
    methods: {
      uploadPhoto() {
        console.log("Upload photo...");
      },
      deletePhoto() {
        this.profile.photo = "https://via.placeholder.com/56";
      },
      saveProfile() {
        console.log("Saving profile:", this.profile);
        this.originalProfile = JSON.parse(JSON.stringify(this.profile));
      },
    },
    mounted() {
      this.originalProfile = JSON.parse(JSON.stringify(this.profile));
    },
  };
  </script>
  