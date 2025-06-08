<template>
  <div class="flex justify-between items-center mb-4">
    <span class="text-sm text-gray-500">
      Question {{ current }} of {{ total }}
    </span>
    <div class="w-32 bg-gray-200 rounded-full h-2 overflow-hidden">
      <div
        class="bg-blue-500 h-2 rounded-full transition-all duration-500 ease-out transform"
        :style="{ width: `${percentage}%` }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  current: number
  total: number
}

const props = defineProps<Props>()

const percentage = computed(() => {
  if (props.total === 0) return 0
  return (props.current / props.total) * 100
})
</script>