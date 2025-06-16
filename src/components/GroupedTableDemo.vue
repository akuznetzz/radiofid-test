<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-card class="pa-4">
          <v-card-title class="text-h5 mb-4">
            Таблица автомобилей с группировкой
          </v-card-title>

          <v-card-text>
            <v-row class="mb-4">
              <v-col cols="12" sm="4">
                <v-switch
                  v-model="groupConfig.enabled"
                  label="Включить группировку"
                  color="primary"
                  hide-details
                />
              </v-col>
              <v-col cols="12" sm="4">
                <v-select
                  v-model="groupConfig.field"
                  :items="groupByOptions"
                  label="Группировать по"
                  :disabled="!groupConfig.enabled"
                  hide-details
                />
              </v-col>
            </v-row>

            <GroupedTable
              :headers="headers"
              :items="cars"
              :group-config="groupConfig"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GroupedTable from './GroupedTable.vue'
import type { TableHeader, GroupConfig } from '@/types/Table'

const headers: TableHeader[] = [
  { title: 'Марка', key: 'brand', sortable: true },
  { title: 'Л.с.', key: 'horsepower', sortable: true },
  { title: 'Страна', key: 'country', sortable: true },
  { title: 'Цена', key: 'price', sortable: true },
  { title: 'Цвет', key: 'color', sortable: true }
]

const cars = [
  { id: 1, brand: 'BMW', horsepower: 300, country: 'Россия', price: 50000, color: 'Красный' },
  { id: 2, brand: 'Mercedes', horsepower: 350, country: 'Германия', price: 55000, color: 'Синий' },
  { id: 3, brand: 'Toyota', horsepower: 200, country: 'Япония', price: 35000, color: 'Красный' },
  { id: 4, brand: 'Honda', horsepower: 180, country: 'Япония', price: 30000, color: 'Синий' },
  { id: 5, brand: 'Ford', horsepower: 250, country: 'США', price: 40000, color: 'Зеленый' },
  { id: 6, brand: 'Chevrolet', horsepower: 280, country: 'США', price: 45000, color: 'Красный' },
  { id: 7, brand: 'Audi', horsepower: 320, country: 'Германия', price: 52000, color: 'Зеленый' },
  { id: 8, brand: 'Nissan', horsepower: 190, country: 'Япония', price: 32000, color: 'Синий' },
  { id: 9, brand: 'Dodge', horsepower: 270, country: 'США', price: 42000, color: 'Зеленый' },
  { id: 10, brand: 'Volkswagen', horsepower: 220, country: 'Германия', price: 38000, color: 'Красный' }
]

const groupConfig = ref<GroupConfig>({
  enabled: false,
  field: null
})

const groupByOptions = [
  { title: 'Страна', value: 'country' },
  { title: 'Цвет', value: 'color' }
]
</script> 