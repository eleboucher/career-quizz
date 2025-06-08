<template>
  <div class="space-y-3">
    <div
      v-for="(option, index) in question.options"
      :key="`${question.id}-${index}`"
      class="animate-fadeInUp opacity-0"
      :class="`animate-delay-[${index * 100}ms]`"
      :style="{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }"
    >
      <label
        class="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer 
               transition-all duration-200 hover:bg-gray-50 hover:border-gray-300 
               active:bg-gray-100"
        :class="{
          'ring-2 ring-blue-500 bg-blue-50 hover:bg-blue-50': selectedAnswers?.includes(index),
        }"
      >
        <input
          type="checkbox"
          :value="index"
          :checked="selectedAnswers?.includes(index)"
          @change="$emit('select', index)"
          class="mr-3 text-blue-500 transition-all duration-150"
        />
        <span class="text-gray-700 transition-colors duration-150">{{ option.label }}</span>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { QuizQuestion as QuizQuestionType } from '../types/quiz'

interface Props {
  question: QuizQuestionType
  selectedAnswers?: number[]
}

interface Emits {
  select: [index: number]
}

defineProps<Props>()
defineEmits<Emits>()

const isVisible = ref(false)

onMounted(() => {
  // Trigger animation on mount
  setTimeout(() => {
    isVisible.value = true
  }, 50)
})
</script>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.4s ease-out;
}
</style>
