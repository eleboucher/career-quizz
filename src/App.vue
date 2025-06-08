<script setup lang="ts">
import { useQuiz } from './composables/useQuiz'
import QuizQuestion from './components/QuizQuestion.vue'
import QuizProgress from './components/QuizProgress.vue'
import QuizResults from './components/QuizResults.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'
import ErrorMessage from './components/ErrorMessage.vue'

const {
  // Data
  questions,
  isLoading,
  error,

  // State
  currentQuestionIndex,
  answers,
  scores,
  status,

  // Computed
  currentQuestion,
  hasAnsweredCurrent,
  isLastQuestion,
  result,

  // Actions
  selectAnswer,
  nextQuestion,
  previousQuestion,
  resetQuiz,
} = useQuiz()

const handleRetry = () => {
  window.location.reload()
}
</script>

<template>
  <div class="min-h-screen w-full bg-gradient-to-br from-blue-50 to-indigo-100">
    <main class="w-full p-4">
      <div class="max-w-2xl mx-auto">
        <h1 class="text-4xl font-bold text-center text-gray-800 mb-8">What is your tech stack?</h1>

        <!-- Loading State -->
        <LoadingSpinner v-if="isLoading" />

        <!-- Error State -->
        <ErrorMessage v-else-if="error" :message="error" :show-retry="true" @retry="handleRetry" />

        <!-- Quiz Content -->
        <template v-else-if="questions.length > 0">
          <!-- Quiz Questions -->
          <div v-if="status !== 'completed'" class="bg-white rounded-lg shadow-lg p-6">
            <div class="mb-6">
              <QuizProgress :current="currentQuestionIndex + 1" :total="questions.length" />

              <Transition name="question" mode="out-in">
                <div :key="currentQuestionIndex" class="transform transition-all duration-300">
                  <h2 class="text-xl font-semibold text-gray-800 mb-6 animate-slideInLeft">
                    {{ currentQuestion?.text }}
                  </h2>

                  <QuizQuestion
                    v-if="currentQuestion"
                    :question="currentQuestion"
                    :selected-answers="
                      answers.get(currentQuestionIndex)
                        ? Array.from(answers.get(currentQuestionIndex)!)
                        : []
                    "
                    @select="selectAnswer"
                  />
                </div>
              </Transition>
            </div>

            <div class="flex justify-between">
              <button
                @click="previousQuestion"
                :disabled="currentQuestionIndex === 0"
                class="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg transition-colors duration-200 hover:bg-gray-50 hover:border-gray-400 active:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:border-gray-300"
              >
                Previous
              </button>

              <button
                @click="nextQuestion"
                :disabled="!hasAnsweredCurrent"
                class="px-6 py-2 bg-blue-500 text-white rounded-lg transition-colors duration-200 hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-500"
              >
                {{ isLastQuestion ? 'See Results' : 'Next' }}
              </button>
            </div>
          </div>

          <!-- Quiz Results -->
          <QuizResults v-else :result="result" :scores="scores" @reset="resetQuiz" />
        </template>

        <!-- Empty State -->
        <ErrorMessage
          v-else
          title="No Questions Available"
          message="Unable to load quiz questions. Please try again later."
          :show-retry="true"
          @retry="handleRetry"
        />
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Vue Transition for question changes */
.question-enter-active,
.question-leave-active {
  transition: all 0.3s ease-in-out;
}

.question-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.question-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* Custom animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-15px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.5s ease-out;
}

.animate-slideInLeft {
  animation: slideInLeft 0.4s ease-out;
}
</style>
