<script setup lang="ts">
import { ref, computed } from 'vue'
import { quizData } from './quizData'

interface Scores {
  FE: number
  BE: number
  MB: number
  OT: number
}

const currentQuestionIndex = ref(0)
const answers = ref<number[]>([])
const scores = ref<Scores>({ FE: 0, BE: 0, MB: 0, OT: 0 })
const showResults = ref(false)

const currentQuestion = computed(() => quizData[currentQuestionIndex.value])
const isLastQuestion = computed(() => currentQuestionIndex.value === quizData.length - 1)

const selectAnswer = (optionIndex: number) => {
  answers.value[currentQuestionIndex.value] = optionIndex

  const option = currentQuestion.value.options[optionIndex]
  Object.entries(option.scores).forEach(([category, score]) => {
    scores.value[category as keyof Scores] += score
  })
}

const nextQuestion = () => {
  if (isLastQuestion.value) {
    showResults.value = true
  } else {
    currentQuestionIndex.value++
  }
}

const previousQuestion = () => {
  if (currentQuestionIndex.value > 0) {
    const previousAnswer = answers.value[currentQuestionIndex.value - 1]
    if (previousAnswer !== undefined) {
      const option = quizData[currentQuestionIndex.value - 1].options[previousAnswer]
      Object.entries(option.scores).forEach(([category, score]) => {
        scores.value[category as keyof Scores] -= score
      })
    }
    currentQuestionIndex.value--
  }
}

const getResult = computed(() => {
  const maxScore = Math.max(...Object.values(scores.value))
  const winners = Object.entries(scores.value)
    .filter(([, score]) => score === maxScore)
    .map(([category]) => category)

  const careerMap = {
    FE: {
      name: 'Frontend Developer',
      description:
        'You love creating beautiful, interactive user interfaces and working with users directly.',
    },
    BE: {
      name: 'Backend Developer',
      description:
        'You enjoy building robust systems, APIs, and working with data and server logic.',
    },
    MB: {
      name: 'Mobile Developer',
      description:
        "You're passionate about creating apps for phones and tablets, focusing on mobile-specific features.",
    },
    OT: {
      name: 'DevOps/Infrastructure Engineer',
      description: 'You thrive on automation, deployment, and keeping systems running smoothly.',
    },
  }

  if (winners.length === 1) {
    return careerMap[winners[0] as keyof typeof careerMap]
  } else {
    return {
      name: 'Hybrid Developer',
      description: `You have strong interests in multiple areas: ${winners.map((w) => careerMap[w as keyof typeof careerMap].name).join(' and ')}.`,
    }
  }
})

const resetQuiz = () => {
  currentQuestionIndex.value = 0
  answers.value = []
  scores.value = { FE: 0, BE: 0, MB: 0, OT: 0 }
  showResults.value = false
}

const hasAnswered = computed(() => answers.value[currentQuestionIndex.value] !== undefined)
</script>

<template>
  <div class="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100">
    <main class="w-full p-4">
      <div class="max-w-2xl mx-auto">
        <h1 class="text-4xl font-bold text-center text-gray-800 mb-8">What is your tech stack?</h1>

        <div v-if="!showResults" class="bg-white rounded-lg shadow-lg p-6">
          <div class="mb-6">
            <div class="flex justify-between items-center mb-4">
              <span class="text-sm text-gray-500">
                Question {{ currentQuestionIndex + 1 }} of {{ quizData.length }}
              </span>
              <div class="w-32 bg-gray-200 rounded-full h-2">
                <div
                  class="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  :style="{ width: `${((currentQuestionIndex + 1) / quizData.length) * 100}%` }"
                ></div>
              </div>
            </div>

            <h2 class="text-xl font-semibold text-gray-800 mb-6">
              {{ currentQuestion.text }}
            </h2>

            <div class="space-y-3">
              <label
                v-for="(option, index) in currentQuestion.options"
                :key="index"
                class="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                :class="{
                  'ring-2 ring-blue-500 bg-blue-50': answers[currentQuestionIndex] === index,
                }"
              >
                <input
                  type="radio"
                  :name="`question-${currentQuestion.id}`"
                  :value="index"
                  :checked="answers[currentQuestionIndex] === index"
                  @change="selectAnswer(index)"
                  class="mr-3 text-blue-500"
                />
                <span class="text-gray-700">{{ option.label }}</span>
              </label>
            </div>
          </div>

          <div class="flex justify-between">
            <button
              @click="previousQuestion"
              :disabled="currentQuestionIndex === 0"
              class="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>

            <button
              @click="nextQuestion"
              :disabled="!hasAnswered"
              class="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ isLastQuestion ? 'See Results' : 'Next' }}
            </button>
          </div>
        </div>

        <div v-else class="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Your Career Path</h2>
          <div class="mb-6">
            <h3 class="text-2xl font-semibold text-blue-600 mb-3">{{ getResult.name }}</h3>
            <p class="text-gray-600 text-lg mb-6">{{ getResult.description }}</p>

            <div class="grid grid-cols-2 gap-4 mb-6">
              <div
                v-for="(score, category) in scores"
                :key="category"
                class="bg-gray-50 p-4 rounded-lg"
              >
                <div class="text-sm text-gray-500 mb-1">
                  {{ { FE: 'Frontend', BE: 'Backend', MB: 'Mobile', OT: 'DevOps' }[category] }}
                </div>
                <div class="text-2xl font-bold text-gray-800">{{ score }}</div>
              </div>
            </div>
          </div>

          <button
            @click="resetQuiz"
            class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 text-lg font-semibold"
          >
            Take Quiz Again
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped></style>
