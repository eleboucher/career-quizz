<template>
  <div class="bg-white rounded-lg shadow-lg p-8 text-center">
    <h2 class="text-3xl font-bold text-gray-800 mb-4">Your Career Path</h2>
    <div class="mb-6">
      <h3 class="text-2xl font-semibold text-blue-600 mb-3">{{ result.name }}</h3>
      <p class="text-gray-600 text-lg mb-6">{{ result.description }}</p>

      <div class="grid grid-cols-2 gap-4 mb-6">
        <div
          v-for="(score, category) in scores"
          :key="category"
          class="bg-gray-50 p-4 rounded-lg"
        >
          <div class="text-sm text-gray-500 mb-1">
            {{ getCategoryDisplayName(category) }}
          </div>
          <div class="text-2xl font-bold text-gray-800">{{ score }}</div>
        </div>
      </div>
    </div>

    <button
      @click="$emit('reset')"
      class="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold
             transition-colors duration-200 hover:bg-blue-600 active:bg-blue-700"
    >
      Take Quiz Again
    </button>
  </div>
</template>

<script setup lang="ts">
import type { CareerResult, Scores, CareerCategory } from '../types/quiz'
import { CAREER_DISPLAY_NAMES } from '../types/quiz'

interface Props {
  result: CareerResult
  scores: Scores
}

interface Emits {
  reset: []
}

defineProps<Props>()
defineEmits<Emits>()

const getCategoryDisplayName = (category: string): string => {
  return CAREER_DISPLAY_NAMES[category as CareerCategory] || category
}
</script>