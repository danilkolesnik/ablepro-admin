<script setup lang="ts">
import { ref } from 'vue';
// common components
import ComponentTitle from '@/components/shared/ComponentTitle.vue';
import UiParentCard from '@/components/shared/UiParentCard.vue';

// component content
const page = ref({ title: 'Empty State' });
const subContent = ref({
  content: 'It is used to indicate that a list is empty or that no search results were found.'
});
const path = ref({ filepath: 'src/views/ui-elements/advance/emptystate' });
const link = ref({ filelink: 'https://vuetifyjs.com/en/components/empty-states/' });
</script>

<template>
  <ComponentTitle :title="page.title" :subContent="subContent.content" :path="path.filepath" :link="link.filelink"></ComponentTitle>
  <v-row>
    <v-col cols="12">
      <v-row>
        <!-- Basic -->
        <v-col cols="12">
          <UiParentCard title="Basic">
            <div class="mt-n9">
              <v-empty-state
                headline="Whoops, 404"
                title="Page not found"
                text="The page you were looking for does not exist"
                image="https://vuetifyjs.b-cdn.net/docs/images/logos/v.png"
              />
            </div>
          </UiParentCard>
        </v-col>
        <!-- Content -->
        <v-col cols="12">
          <UiParentCard title="Content">
            <v-empty-state
              headline="No Messages Yet"
              text="You haven't received any messages yet. When you do, they'll appear here."
              title="Check back later."
            />
          </UiParentCard>
        </v-col>
        <!-- Media -->
        <v-col cols="12">
          <UiParentCard title="Media">
            <v-empty-state
              icon="$magnify"
              text="Try adjusting your search terms or filters. Sometimes less specific terms or broader queries can help you find what you're looking for."
              title="We couldn't find a match."
            />
          </UiParentCard>
        </v-col>
        <!-- Custom Actions -->
        <v-col cols="12">
          <UiParentCard title="Custom actions">
            <v-empty-state image="https://cdn.vuetifyjs.com/docs/images/components/v-empty-state/teamwork.png">
              <template v-slot:title>
                <div class="text-h4 mt-8">Manage your inventory transfers</div>
              </template>

              <template v-slot:text>
                <div class="text-subtitle1">Track and receive your incoming inventory from suppliers</div>
              </template>

              <template v-slot:actions>
                <v-btn color="primary" elevation="1" rounded="md" text="Learn more" />

                <v-btn color="primary" variant="outlined" rounded="md" text="Add transfer" />
              </template>
            </v-empty-state>
          </UiParentCard>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
