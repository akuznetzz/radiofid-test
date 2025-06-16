<template>
  <v-app>
    <v-main>
      <CarouselDemo />
      <DonutButtonDemo />
      <AutoCompleteDemo />
      <GroupedTableDemo />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import CarouselDemo from './components/CarouselDemo.vue'
import DonutButtonDemo from "@/components/DonutButtonDemo.vue";
import AutoCompleteDemo from './components/AutoCompleteDemo.vue'
import GroupedTableDemo from './components/GroupedTableDemo.vue'
</script>

<style>
.v-application {
  background: #f5f5f5 !important;
}
</style>