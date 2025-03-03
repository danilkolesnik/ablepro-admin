<script>

</script>

<template>
  <v-form>
    <p class="text-h6 opacity-50 pb-3">If necessary, you can log out from all other browser sessions on all your devices. Some of your recent sessions are listed below, but this list may not be exhaustive. If you believe your account has been compromised, you should also consider updating your password.</p>
    <div class="session-row pb-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"></path>
        </svg>
        <div class="ip-container">
            <span>Windows - Chrome</span>
            <span>176.101.199.237</span>
        </div>
    </div>

    <!-- Кнопка log out -->
    <v-btn type="submit" color="primary">Log out of other browser sessions</v-btn>
  </v-form>
</template>

<style>
.session-row {
    display: flex;
    gap: 8px;
    align-items: center;
}
.ip-container {
    display: flex;
    flex-direction: column;
}

.ip-container > span {
    font-size: 0.8em;
}
</style>