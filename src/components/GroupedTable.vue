<template>
  <v-card class="grouped-table">
    <template v-slot:text>
      <v-text-field
        v-model="search"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        single-line
      ></v-text-field>
    </template>
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
      :group-by="groupBy"
      :items-per-page="10"
      class="elevation-1"
    >
      <template v-slot:group-header="{ item, columns, toggleGroup, isGroupOpen }">
        <tr>
          <td :colspan="columns.length">
            <div class="d-flex align-center">
              <v-btn
                :icon="isGroupOpen(item) ? '$expand' : '$next'"
                color="medium-emphasis"
                density="comfortable"
                size="small"
                variant="outlined"
                @click="toggleGroup(item)"
              ></v-btn>
              <span class="ms-4">{{ item.value }} ({{ item.items.length }})</span>
            </div>
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup lang="ts">
import {computed, ref, watch} from 'vue'
import type { TableHeader, GroupConfig, GroupByItem } from '@/types/Table'

interface Props {
  headers: TableHeader[]
  items: any[]
  groupConfig: GroupConfig
}

const props = defineProps<Props>()

const search = ref('')

const groupBy = computed<GroupByItem[]>(() => {
  if (!props.groupConfig.enabled || !props.groupConfig.field) {
    return []
  }
  return [{ key: props.groupConfig.field, order: 'asc' }]
})

watch(props.groupConfig, (val) => {
  console.log(val)
})

</script>