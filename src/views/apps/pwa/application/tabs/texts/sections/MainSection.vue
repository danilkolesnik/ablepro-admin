<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { usePwaStore } from "@/stores/apps/pwa/pwa_old";

const installsNumber = ref("3250");
const reviewsText = ref("reviews");
const eighteenAgeText = ref("Rated for 18+");

const pwaStore = usePwaStore();

watchEffect(() => {
  pwaStore.setInstallsCount(installsNumber.value);
  pwaStore.setReviewsText(reviewsText.value);
  pwaStore.setEighteenAgeText(eighteenAgeText.value);
});

</script>

<template>
    <v-container>
            <v-row>
                <v-col md="12" cols="12">
                    <v-row>
                        <v-col cols="4">
                            <v-label class="mb-2">Text "Number of installs"</v-label>
                            <v-text-field color="primary"
                            single-line
                            placeholder="Enter domain"
                            hide-details
                            variant="outlined"
                            required
                            density="comfortable"
                            rounded="0"
                            v-model="installsNumber"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-label class="mb-2">Text {num} reviews</v-label>
                            <v-text-field color="primary"
                            single-line
                            hide-details
                            placeholder="reviews"
                            required
                            variant="outlined"
                            density="comfortable"
                            rounded="0"
                            v-model="reviewsText"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-label class="mb-2">Ad information</v-label>
                            <v-text-field color="primary"
                            single-line
                            hide-details
                            placeholder="Contains ads · In-app purchases"
                            required
                            variant="outlined"
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-label class="mb-2">Text age "18+"</v-label>
                            <v-text-field color="primary"
                            single-line
                            placeholder="Rated for 18+"
                            hide-details
                            variant="outlined"
                            required
                            density="comfortable"
                            rounded="0"
                            v-model="eighteenAgeText"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-label class="mb-2">Text "Editor's choice"</v-label>
                            <v-text-field color="primary"
                            single-line
                            hide-details
                            placeholder="Editor's Choice"
                            required
                            variant="outlined"
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-label class="mb-2">Text "More"</v-label>
                            <v-text-field color="primary"
                            single-line
                            hide-details
                            placeholder="More"
                            required
                            variant="outlined"
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-label class="mb-2">Text "Read More"</v-label>
                            <v-text-field color="primary"
                            single-line
                            placeholder="Read more"
                            hide-details
                            variant="outlined"
                            required
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-label class="mb-2">The announcement is placed by the app developer</v-label>
                            <v-text-field color="primary"
                            single-line
                            hide-details
                            placeholder="The announcement is placed by the app developer"
                            required
                            variant="outlined"
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-label class="mb-2">"Updated" text</v-label>
                            <v-text-field color="primary"
                            single-line
                            hide-details
                            placeholder="Updated"
                            required
                            variant="outlined"
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-label class="mb-2">"Required OS version" text</v-label>
                            <v-text-field color="primary"
                            single-line
                            placeholder="Required OS version"
                            hide-details
                            variant="outlined"
                            required
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-label class="mb-2">"and later versions" text</v-label>
                            <v-text-field color="primary"
                            single-line
                            hide-details
                            placeholder="and later versions"
                            required
                            variant="outlined"
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-label class="mb-2">"Distributor" text</v-label>
                            <v-text-field color="primary"
                            single-line
                            hide-details
                            placeholder="Distributor"
                            required
                            variant="outlined"
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-label class="mb-2">Works on your Android device</v-label>
                            <v-text-field color="primary"
                            single-line
                            placeholder="Works on your Android device"
                            hide-details
                            variant="outlined"
                            required
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-label class="mb-2">"Release date" text</v-label>
                            <v-text-field color="primary"
                            single-line
                            hide-details
                            placeholder="Release Date"
                            required
                            variant="outlined"
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-label class="mb-2">"Movies" text</v-label>
                            <v-text-field color="primary"
                            single-line
                            hide-details
                            placeholder="Movies"
                            required
                            variant="outlined"
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-label class="mb-2">"For Kids" text</v-label>
                            <v-text-field color="primary"
                            single-line
                            placeholder="For Kids"
                            hide-details
                            variant="outlined"
                            required
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-label class="mb-2">"Clock" text</v-label>
                            <v-text-field color="primary"
                            single-line
                            hide-details
                            placeholder="Clock"
                            required
                            variant="outlined"
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-label class="mb-2">"TV" text</v-label>
                            <v-text-field color="primary"
                            single-line
                            hide-details
                            placeholder="TV"
                            required
                            variant="outlined"
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-label class="mb-2">Developers improvement text</v-label>
                            <v-text-field color="primary"
                            single-line
                            placeholder="constantly improves its products. This often means adding new features and optimizing existing games and functionalities so that our players can enjoy the game even more. Therefore, we recommend regularly updating the app to the latest version to take full advantage of everything has to offer."
                            hide-details
                            variant="outlined"
                            required
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-label class="mb-2">Kids and Family</v-label>
                            <v-text-field color="primary"
                            single-line
                            hide-details
                            placeholder="Kids and Family"
                            required
                            variant="outlined"
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-label class="mb-2">Parent`s Guide</v-label>
                            <v-text-field color="primary"
                            single-line
                            hide-details
                            placeholder="Parent's Guide"
                            required
                            variant="outlined"
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <v-label class="mb-2">"More than" text</v-label>
                            <v-text-field color="primary"
                            single-line
                            placeholder="More than"
                            hide-details
                            variant="outlined"
                            required
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-label class="mb-2">Compatibility with active devices</v-label>
                            <v-text-field color="primary"
                            single-line
                            hide-details
                            placeholder="Compatibility with active devices"
                            required
                            variant="outlined"
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <v-label class="mb-2">Family access</v-label>
                            <v-text-field color="primary"
                            single-line
                            placeholder="Family Access"
                            hide-details
                            variant="outlined"
                            required
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-label class="mb-2">Terms of use</v-label>
                            <v-text-field color="primary"
                            single-line
                            hide-details
                            placeholder="Terms of use"
                            required
                            variant="outlined"
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-label class="mb-2">Text "About the game"</v-label>
                            <v-text-field color="primary"
                            single-line
                            placeholder="About this game"
                            hide-details
                            variant="outlined"
                            required
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-label class="mb-2">Text "Add to wishlist"</v-label>
                            <v-text-field color="primary"
                            single-line
                            hide-details
                            placeholder="Add to wishlist"
                            required
                            variant="outlined"
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-label class="mb-2">Text "Available to download"</v-label>
                            <v-text-field color="primary"
                            single-line
                            hide-details
                            placeholder="This app is available for all of your devices"
                            required
                            variant="outlined"
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="3">
                            <v-label class="mb-2">Text "In-app purchases" (iOS ver.)</v-label>
                            <v-text-field color="primary"
                            single-line
                            placeholder="In-app purchases"
                            hide-details
                            variant="outlined"
                            required
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-label class="mb-2">Age (iOS ver.)</v-label>
                            <v-text-field color="primary"
                            single-line
                            hide-details
                            placeholder="Age"
                            required
                            variant="outlined"
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-label class="mb-2">Text "Years" (iOS ver.)</v-label>
                            <v-text-field color="primary"
                            single-line
                            hide-details
                            placeholder="Years"
                            required
                            variant="outlined"
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-label class="mb-2">Text "Schedule" (iOS ver.)</v-label>
                            <v-text-field color="primary"
                            single-line
                            hide-details
                            placeholder="Schedule"
                            required
                            variant="outlined"
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="3">
                            <v-label class="mb-2">Text "Language" (iOS ver.)</v-label>
                            <v-text-field color="primary"
                            single-line
                            placeholder="Language"
                            hide-details
                            variant="outlined"
                            required
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-label class="mb-2">Text "Size" (iOS ver.)</v-label>
                            <v-text-field color="primary"
                            single-line
                            hide-details
                            placeholder="Size"
                            required
                            variant="outlined"
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-label class="mb-2">Text "Developer" (iOS ver.)</v-label>
                            <v-text-field color="primary"
                            single-line
                            hide-details
                            placeholder="Developer"
                            required
                            variant="outlined"
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <v-label class="mb-2">Text "from" (iOS ver.)</v-label>
                            <v-text-field color="primary"
                            single-line
                            hide-details
                            placeholder="from"
                            required
                            variant="outlined"
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-label class="mb-2">What’s new (iOS ver.)</v-label>
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
                        <v-col cols="4">
                            <v-label class="mb-2">Text "Version history" (iOS ver.)</v-label>
                            <v-text-field color="primary"
                            single-line
                            hide-details
                            placeholder="Version history"
                            required
                            variant="outlined"
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-label class="mb-2">Text "Version" (iOS ver.)</v-label>
                            <v-text-field color="primary"
                            single-line
                            hide-details
                            placeholder="Version"
                            required
                            variant="outlined"
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-label class="mb-2">Text "Information" (iOS ver.)</v-label>
                            <v-text-field color="primary"
                            single-line
                            placeholder="Information"
                            hide-details
                            variant="outlined"
                            required
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-label class="mb-2">Text "Category" (iOS ver.)</v-label>
                            <v-text-field color="primary"
                            single-line
                            hide-details
                            placeholder="Category"
                            required
                            variant="outlined"
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-label class="mb-2">Text "days ago" (iOS ver.)</v-label>
                            <v-text-field color="primary"
                            single-line
                            hide-details
                            placeholder="days ago"
                            required
                            variant="outlined"
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="4">
                            <v-label class="mb-2">Text "Compatibility" (iOS ver.)</v-label>
                            <v-text-field color="primary"
                            single-line
                            placeholder="Compatibility"
                            hide-details
                            variant="outlined"
                            required
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-label class="mb-2">Text "Compatible with this iPhone" (iOS ver.)</v-label>
                            <v-text-field color="primary"
                            single-line
                            hide-details
                            placeholder="Compatible with this iPhone"
                            required
                            variant="outlined"
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-label class="mb-2">Text "Copyright" (iOS ver.)</v-label>
                            <v-text-field color="primary"
                            single-line
                            hide-details
                            placeholder="Copyright"
                            required
                            variant="outlined"
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="6">
                            <v-label class="mb-2">Text "Game Center" (iOS ver.)</v-label>
                            <v-text-field color="primary"
                            single-line
                            placeholder="Game Center"
                            hide-details
                            variant="outlined"
                            required
                            density="comfortable"
                            rounded="0"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-label class="mb-2">Game Center description (iOS ver.)</v-label>
                            <v-text-field color="primary"
                            single-line
                            hide-details
                            placeholder="Play with friends, track and compare scores and achievements, challenge other players, and compete in multiplayer games."
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