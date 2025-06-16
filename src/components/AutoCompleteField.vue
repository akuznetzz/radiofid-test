<template>
  <div class="auto-complete-field">
    <div class="input-wrapper">
      <v-text-field
        v-model="inputValue"
        v-bind="$attrs"
        :rules="rules"
        @input="handleInput"
        @keydown.tab.prevent="completeWord"
        @blur="handleBlur"
        class="main-input"
      />
      <div v-if="suggestion" class="suggestion-text">
        {{ inputValue }}{{ suggestion.slice(inputValue.length) }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

interface Props {
  modelValue?: string
  words?: string[]
  rules?: ((v: string) => boolean | string)[]
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  words: () => [],
  rules: () => []
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const inputValue = ref(props.modelValue)
const suggestion = ref('')

watch(() => props.modelValue, (newValue) => {
  inputValue.value = newValue
  updateSuggestion(newValue)
})

watch(inputValue, (newValue) => {
  emit('update:modelValue', newValue)
})

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  updateSuggestion(target.value)
}

const handleBlur = () => {
  setTimeout(() => {
    suggestion.value = ''
  }, 200)
}

const updateSuggestion = (value: string) => {
  if (!value) {
    suggestion.value = ''
    return
  }

  const lowerValue = value.toLowerCase()
  const found = props.words.find(word => 
    word.toLowerCase().startsWith(lowerValue) && 
    word.toLowerCase() !== lowerValue
  )

  suggestion.value = found || ''
}

const completeWord = () => {
  if (suggestion.value) {
    inputValue.value = suggestion.value
    suggestion.value = ''
  }
}
</script>

<style scoped>
.auto-complete-field {
  position: relative;
}

.input-wrapper {
  position: relative;
}

.main-input {
  position: relative;
  z-index: 2;
}

.suggestion-text {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 16px;
  color: rgba(0, 0, 0, 0.38);
  font-size: 16px;
  pointer-events: none;
  user-select: none;
  display: flex;
  align-items: center;
  z-index: 1;
  transform: translateY(-11px);
}
</style> 