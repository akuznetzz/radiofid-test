<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="pa-4">
          <v-card-title>Автодополнение месяцев</v-card-title>
          <v-card-text>
            <p class="text-body-2 mb-4">
              Начните вводить название месяца. Нажмите Tab для автодополнения.
            </p>
            <AutoCompleteField
              v-model="monthInput"
              :words="months"
              :rules="[v => !!v || 'Обязательное поле', v => months.includes(v) || 'Введите корректное название месяца']"
              label="Введите месяц"
              placeholder="Начните вводить..."
              variant="outlined"
              class="mb-4"
            />
            <div v-if="monthInput" class="text-body-1">
              Выбранный месяц: {{ monthInput }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import AutoCompleteField from './AutoCompleteField.vue'
import { ref } from 'vue'

const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь'
]

const monthInput = ref('')
</script> 