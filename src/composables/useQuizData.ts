import { ref, readonly, type Ref } from 'vue'
import { quizData } from '../quizData'
import type { QuizQuestion } from '../types/quiz'

interface UseQuizDataReturn {
  questions: Readonly<Ref<QuizQuestion[]>>
  isLoading: Readonly<Ref<boolean>>
  error: Readonly<Ref<string | null>>
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
    questions: readonly(questions) as Readonly<Ref<QuizQuestion[]>>,
    isLoading: readonly(isLoading) as Readonly<Ref<boolean>>,
    error: readonly(error) as Readonly<Ref<string | null>>,
    loadQuestions,
  }
}
