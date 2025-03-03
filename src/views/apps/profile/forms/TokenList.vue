<template>
    <v-form>
      <div class="token-row-wrapper">
        <span class="token-name">
            auth-token
        </span>
        <div class="token-properties__wrapper">
            <span class="token-name">
                Last used 3 days ago
            </span>
            <v-btn class="btn__delete" type="submit">Create</v-btn>
        </div>
      </div>
    </v-form>
</template>

<style>

.token-properties__wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
}

.token-row-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.token-name {
    font-size: 0.9em;
    opacity: 0.6;
}

.btn__delete {
    background-color: #ff7979;
    color: white;
}
</style>