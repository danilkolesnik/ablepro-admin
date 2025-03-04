<script>
</script>

<template>
  <v-form>
    <!-- Поле "Current Password" -->
    <v-row>
      <v-col cols="12">
        <label class="text-subtitle-1 font-weight-medium">Current Password</label>
        <v-text-field type="password"></v-text-field>
      </v-col>
    </v-row>

    <!-- Поле "New Password" -->
    <v-row>
      <v-col cols="12">
        <label class="text-subtitle-1 font-weight-medium">New Password</label>
        <v-text-field type="password"></v-text-field>
      </v-col>
    </v-row>

    <!-- Поле "Repeat New Password" -->
    <v-row>
      <v-col cols="12">
        <label class="text-subtitle-1 font-weight-medium">Repeat New Password</label>
        <v-text-field type="password"></v-text-field>
      </v-col>
    </v-row>

    <!-- Кнопка Save -->
    <v-btn type="submit" color="primary">Save</v-btn>
  </v-form>
</template>
