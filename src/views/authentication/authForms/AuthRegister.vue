<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import SvgSprite from '@/components/shared/SvgSprite.vue';

const showPassword = ref(false);
const name = ref('');
const email = ref('');
const password = ref('');
const passwordConfirmation = ref('');
const telegram = ref('');
const Regform = ref();
const authStore = useAuthStore();

// Валидация полей
const emailRules = [
  (v: string) => !!v.trim() || 'E-mail is required',
  (v: string) => /.+@.+\..+/.test(v.trim()) || 'E-mail must be valid'
];

const passwordRules = [
  (v: string) => !!v || 'Password is required',
  (v: string) => v.length >= 6 || 'Password must be at least 6 characters'
];

const confirmPasswordRules = [
  (v: string) => !!v || 'Password confirmation is required',
  (v: string) => v === password.value || 'Passwords do not match'
];

const nameRules = [(v: string) => !!v || 'Name is required'];

const telegramRules = [(v: string) => !!v || 'Telegram is required'];

function validate() {
  const trimmedEmail = email.value.trim();
  const trimmedName = name.value.trim();
  const trimmedTelegram = telegram.value.trim();

  email.value = trimmedEmail;
  name.value = trimmedName;
  telegram.value = trimmedTelegram;

  const authStore = useAuthStore();
  return authStore
    .register(trimmedName, trimmedEmail, password.value, passwordConfirmation.value, trimmedTelegram)
    .catch((error) => console.log('ERROR!', error));
}

</script>

<template>
  <div class="d-flex justify-space-between align-center">
    <h3 class="text-h3 text-center mb-0">Sign up</h3>
    <router-link to="/login" class="text-primary text-decoration-none">Already have an account?</router-link>
  </div>

  <v-form ref="Regform" lazy-validation class="mt-7 loginForm">
    <v-row>
      <v-col cols="12">
        <v-label>Name*</v-label>
        <v-text-field v-model="name" :rules="nameRules" placeholder="John Doe" required variant="outlined" />
      </v-col>

      <v-col cols="12">
        <v-label>Email Address*</v-label>
        <v-text-field v-model="email" :rules="emailRules" placeholder="demo@company.com" required variant="outlined" />
      </v-col>

      <v-col cols="12">
        <v-label>Password*</v-label>
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          placeholder="*****"
          required
          variant="outlined"
          :type="showPassword ? 'text' : 'password'"
        >
          <template v-slot:append-inner>
            <v-btn icon variant="text" @click="showPassword = !showPassword">
              <SvgSprite :name="showPassword ? 'custom-eye' : 'custom-eye-invisible'" style="width: 20px; height: 20px" />
            </v-btn>
          </template>
        </v-text-field>
      </v-col>

      <v-col cols="12">
        <v-label>Confirm Password*</v-label>
        <v-text-field
          v-model="passwordConfirmation"
          :rules="confirmPasswordRules"
          placeholder="*****"
          required
          variant="outlined"
          :type="showPassword ? 'text' : 'password'"
        />
      </v-col>

      <v-col cols="12">
        <v-label>Telegram*</v-label>
        <v-text-field v-model="telegram" :rules="telegramRules" placeholder="@your_username" required variant="outlined" />
      </v-col>
    </v-row>

    <v-btn color="primary" block class="mt-4" variant="flat" rounded="md" size="large" @click="validate()">Create Account</v-btn>
  </v-form>
</template>
