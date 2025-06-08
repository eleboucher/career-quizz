<template>
  <div class="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
    <div class="text-red-800 font-semibold mb-2">{{ title }}</div>
    <div class="text-red-600">{{ message }}</div>
    <button
      v-if="showRetry"
      @click="$emit('retry')"
      class="mt-3 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Try Again
    </button>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  message: string
  showRetry?: boolean
}

interface Emits {
  retry: []
}

withDefaults(defineProps<Props>(), {
  title: 'Something went wrong',
  showRetry: false
})

defineEmits<Emits>()
</script>