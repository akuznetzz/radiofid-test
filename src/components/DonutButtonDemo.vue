<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card class="pa-4 mb-4">
          <v-card-text>
            <p class="text-body-1 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p class="text-body-1 mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p class="text-body-1">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </v-card-text>
          
          <div class="donut-button-wrapper">
            <DonutButton
              size="150"
              thickness="30"
              color="#B00020"
              @click="handleClick"
            />
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import DonutButton from './DonutButton.vue'

const handleClick = () => {
  alert('Кнопка-бублик нажата!')
}
</script>

<style scoped>
.donut-button-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
</style> 