<template>
  <v-container fluid>
    <v-row>
      <v-col :cols="cols">
        <v-card class="carousel-container">
          <v-carousel
            v-model="currentIndex"
            :show-arrows="true"
            height="400"
            hide-delimiter-background
            hide-delimiters
            class="carousel-vuetify"
          >
            <v-carousel-item
              v-for="(item, index) in items"
              :key="index"
            >
              <v-container class="fill-height d-flex flex-column justify-center align-center pa-4 pa-md-8 pb-10">
                <div v-if="item.type === 'text'" class="text-content mx-auto">
                  <div class="text-center text-h6 mb-4" v-html="item.content"></div>
                </div>

                <div v-else-if="item.type === 'image'" class="image-content mx-auto">
                  <v-img
                    :src="item.content"
                    :alt="item.alt || 'Image'"
                    :aspect-ratio="item.aspectRatio || 16/9"
                    cover
                    class="rounded-lg"
                  />
                </div>

                <div v-else-if="item.type === 'form'" class="form-content mx-auto">
                  <v-form
                    ref="form"
                    v-model="item.valid"
                    @submit.prevent="onSubmit(index)"
                  >
                    <v-container>
                      <v-row>
                        <v-col
                          v-for="(field, fieldIndex) in item.fields"
                          :key="fieldIndex"
                          :cols="field.cols || 12"
                        >
                          <v-text-field
                            v-if="field.type === 'text'"
                            v-model="field.value"
                            :label="field.label"
                            :rules="field.rules"
                            :required="field.required"
                            variant="outlined"
                            class="mb-2"
                          />
                          <v-textarea
                            v-else-if="field.type === 'textarea'"
                            v-model="field.value"
                            :label="field.label"
                            :rules="field.rules"
                            :required="field.required"
                            variant="outlined"
                            class="mb-2"
                          />
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" class="text-center">
                          <v-btn
                            color="primary"
                            type="submit"
                            :disabled="!item.valid"
                            class="mt-4"
                          >
                            Отправить
                          </v-btn>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-form>
                </div>

                <div v-else-if="item.type === 'video'" class="video-content mx-auto">
                  <video
                    :src="item.content"
                    controls
                    :poster="item.poster"
                    class="video-player rounded-lg"
                  ></video>
                </div>
              </v-container>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ICarouselItem } from '../types/CarouselItem'

const props = defineProps<{
  items: ICarouselItem[]
  cols?: number
}>()

const emit = defineEmits<{
  (e: 'submit', data: { index: number, values: Record<string, string> }): void
}>()

const currentIndex = ref(0)
const form = ref()

const cols = computed(() => props.cols || 12)

const onSubmit = (index: number) => {
  const item = props.items[index]
  if (item.type === 'form' && item.fields) {
    const values = item.fields.reduce((acc, field) => {
      acc[field.label] = field.value
      return acc
    }, {} as Record<string, string>)
    emit('submit', { index, values })
  }
}
</script>

<style scoped>
.carousel-container {
  position: relative;
  padding: 20px;
}

.carousel-vuetify {
  max-width: 900px;
  margin: 0 auto;
}

.text-content {
  max-width: 800px;
}
.image-content {
  width: 100%;
  max-width: 800px;
}
.form-content {
  width: 100%;
  max-width: 600px;
}
.video-content {
  width: 100%;
  max-width: 800px;
}
.video-player {
  width: 100%;
  max-height: 500px;
}
</style> 