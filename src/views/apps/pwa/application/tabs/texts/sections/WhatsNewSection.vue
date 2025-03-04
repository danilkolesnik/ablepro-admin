<template>
    <v-container>
            <v-row>
                <v-col md="12" cols="12">
                    <v-row>
                        <v-col cols="6">
                            <v-label class="mb-2">Text "What's new"</v-label>
                            <v-text-field color="primary"
                            single-line
                            placeholder="What's new"
                            hide-details
                            variant="outlined"
                            required
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-label class="mb-2">Text "Last updated"</v-label>
                            <v-text-field color="primary"
                            single-line
                            hide-details
                            placeholder="Last updated"
                            required
                            variant="outlined"
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <v-label class="mb-2">"May also interest" text</v-label>
                            <v-text-field color="primary"
                            single-line
                            placeholder="May also interest"
                            hide-details
                            variant="outlined"
                            required
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-label class="mb-2">"Provider" text</v-label>
                            <v-text-field color="primary"
                            single-line
                            hide-details
                            placeholder="Provider"
                            required
                            variant="outlined"
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
    </v-container>
</template>