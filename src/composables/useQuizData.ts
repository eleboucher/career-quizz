import { ref, readonly } from 'vue'
import { quizData } from '../quizData'
import type { QuizQuestion } from '../types/quiz'

interface UseQuizDataReturn {
  questions: Readonly<typeof questions>
  isLoading: Readonly<typeof isLoading>
  error: Readonly<typeof error>
  loadQuestions: () => Promise<void>
}

const questions = ref<QuizQuestion[]>([])
const isLoading = ref(false)
const error = ref<string | null>(null)

export function useQuizData(): UseQuizDataReturn {
  const loadQuestions = async (): Promise<void> => {
    if (questions.value.length > 0) return

    isLoading.value = true
    error.value = null

    try {
      // Simulate async loading (could be API call in real app)
      await new Promise((resolve) => setTimeout(resolve, 100))
      questions.value = quizData
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to load quiz questions'
      console.error('Failed to load quiz questions:', err)
    } finally {
      isLoading.value = false
    }
  }

  return {
    questions: readonly(questions),
    isLoading: readonly(isLoading),
    error: readonly(error),
    loadQuestions,
  }
}
