<template>
  <div 
    class="donut-button"
    :style="buttonStyle"
    @click="handleClick"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  size?: string
  thickness?: string
  color?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: '200',
  thickness: '50',
  color: 'blue'
})

const buttonStyle = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size}px`,
  borderRadius: '50%',
  border: `${props.thickness}px solid ${props.color}`,
  backgroundColor: 'transparent',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'opacity 0.2s'
}))

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const handleClick = (event: MouseEvent) => {
  // Проверяем, что клик был не в центре бублика
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  const distance = Math.sqrt(
    Math.pow(event.clientX - centerX, 2) + Math.pow(event.clientY - centerY, 2)
  )
  
  // Если клик был дальше от центра, чем радиус внутреннего круга
  if (distance > (props.size - props.thickness * 2) / 2) {
    emit('click', event)
  }
}
</script>

<style scoped>
.donut-button {
  display: inline-block;
  background-color: transparent !important;
}

.donut-button:hover {
  opacity: 0.7;
}
</style> 