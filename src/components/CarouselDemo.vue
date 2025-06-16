<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="pa-4">
          <v-card-text>
            <Carousel
              :items="carouselItems"
              :cols="12"
              @submit="handleSubmit"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Carousel from './Carousel.vue'
import { CarouselItem } from '../types/CarouselItem'

const carouselItems = ref([
  CarouselItem.createText('<h2>Добро пожаловать!</h2><p>Это демонстрация карусели с различными типами контента.</p>'),
  
  CarouselItem.createImage(
    '/images/random-image.jpg',
    'Изображение для карусели',
    2
  ),
  
  CarouselItem.createForm([
    {
      type: 'text',
      label: 'Имя',
      value: '',
      required: true,
      rules: [v => !!v || 'Имя обязательно'],
      cols: 6
    },
    {
      type: 'text',
      label: 'Email',
      value: '',
      required: true,
      rules: [
        v => !!v || 'Email обязателен',
        v => /.+@.+\..+/.test(v) || 'Email должен быть валидным'
      ],
      cols: 6
    },
    {
      type: 'textarea',
      label: 'Сообщение',
      value: '',
      required: true,
      rules: [v => !!v || 'Сообщение обязательно'],
      cols: 12
    }
  ]),
  
  CarouselItem.createVideo('https://www.w3schools.com/html/mov_bbb.mp4')
])

const handleSubmit = (data: { index: number, values: Record<string, string> }) => {
  console.log('Form submitted:', data)
  alert('Форма отправлена: ' + JSON.stringify(data.values, null, 2))
}
</script>