import { computed, onMounted, nextTick, type ComputedRef } from 'vue'
import { useQuizData } from './useQuizData'
import { useQuizState } from './useQuizState'
import { useQuizResults } from './useQuizResults'
import type { QuizQuestion, CareerResult } from '../types/quiz'

interface UseQuizReturn {
  // Data
  questions: ReturnType<typeof useQuizData>['questions']
  isLoading: ReturnType<typeof useQuizData>['isLoading']
  error: ReturnType<typeof useQuizData>['error']

  // State
  currentQuestionIndex: ReturnType<typeof useQuizState>['currentQuestionIndex']
  answers: ReturnType<typeof useQuizState>['answers']
  scores: ReturnType<typeof useQuizState>['scores']
  status: ReturnType<typeof useQuizState>['status']

  // Computed
  currentQuestion: ComputedRef<QuizQuestion | null>
  hasAnsweredCurrent: ComputedRef<boolean>
  isLastQuestion: ComputedRef<boolean>
  result: ComputedRef<CareerResult>

  // Actions
  selectAnswer: (optionIndex: number) => void
  nextQuestion: () => void
  previousQuestion: () => void
  resetQuiz: () => void
  completeQuiz: () => void
}

export function useQuiz(): UseQuizReturn {
  const { questions, isLoading, error, loadQuestions } = useQuizData()
  const quizState = useQuizState()
  const { getResult } = useQuizResults()

  // Computed properties
  const currentQuestion = computed((): QuizQuestion | null => {
    if (!questions.value.length) return null
    return questions.value[quizState.currentQuestionIndex.value] || null
  })

  const hasAnsweredCurrent = computed((): boolean => {
    return quizState.hasAnsweredCurrent(quizState.currentQuestionIndex.value)
  })

  const isLastQuestion = computed((): boolean => {
    return quizState.isLastQuestion(questions.value.length)
  })

  const result = computed(() => {
    return getResult(quizState.scores.value)
  })

  // Actions
  const selectAnswer = async (optionIndex: number): Promise<void> => {
    const question = currentQuestion.value
    if (!question) return

    const option = question.options[optionIndex]
    if (!option) return

    quizState.selectAnswer(quizState.currentQuestionIndex.value, optionIndex, option.scores)
    await nextTick()
    nextQuestion()
  }

  const nextQuestion = (): void => {
    if (isLastQuestion.value) {
      completeQuiz()
    } else {
      quizState.nextQuestion()
    }
  }

  const completeQuiz = (): void => {
    quizState.completeQuiz()
  }

  const resetQuiz = (): void => {
    quizState.resetQuiz()
  }

  // Initialize quiz data on mount
  onMounted(() => {
    loadQuestions()
  })

  return {
    // Data
    questions,
    isLoading,
    error,

    // State
    currentQuestionIndex: quizState.currentQuestionIndex,
    answers: quizState.answers,
    scores: quizState.scores,
    status: quizState.status,

    // Computed
    currentQuestion,
    hasAnsweredCurrent,
    isLastQuestion,
    result,

    // Actions
    selectAnswer,
    nextQuestion,
    previousQuestion: quizState.previousQuestion,
    resetQuiz,
    completeQuiz,
  }
}
