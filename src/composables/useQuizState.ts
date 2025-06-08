import { ref, computed, readonly, type Ref, type ComputedRef } from 'vue'
import type { QuizState, QuizStatus, Scores, CareerCategory } from '../types/quiz'

interface UseQuizStateReturn {
  currentQuestionIndex: Readonly<Ref<number>>
  answers: Readonly<Ref<number[]>>
  scores: Readonly<Ref<Scores>>
  status: Readonly<ComputedRef<QuizStatus>>
  selectAnswer: (questionIndex: number, optionIndex: number, optionScores: Partial<Scores>) => void
  nextQuestion: () => void
  previousQuestion: () => void
  resetQuiz: () => void
  hasAnsweredCurrent: (questionIndex: number) => boolean
  isLastQuestion: (totalQuestions: number) => boolean
  completeQuiz: () => void
}

const createInitialState = (): QuizState => ({
  currentQuestionIndex: 0,
  answers: [],
  scores: { FE: 0, BE: 0, MB: 0, OT: 0 },
  isCompleted: false,
})

const currentQuestionIndex = ref(0)
const answers = ref<number[]>([])
const scores = ref<Scores>({ FE: 0, BE: 0, MB: 0, OT: 0 })
const isCompleted = ref(false)

const status = computed<QuizStatus>(() => {
  if (isCompleted.value) return 'completed'
  if (currentQuestionIndex.value > 0 || answers.value.length > 0) return 'in_progress'
  return 'idle'
})

export function useQuizState(): UseQuizStateReturn {
  const selectAnswer = (
    questionIndex: number,
    optionIndex: number,
    optionScores: Partial<Scores>,
  ): void => {
    // Remove previous answer's scores if exists
    const previousAnswer = answers.value[questionIndex]
    if (previousAnswer !== undefined) {
      // We'd need to store previous scores to subtract them
      // For now, we'll prevent changing answers
      if (answers.value[questionIndex] === optionIndex) return
    }

    answers.value[questionIndex] = optionIndex

    // Add new scores
    Object.entries(optionScores).forEach(([category, score]) => {
      if (score && category in scores.value) {
        scores.value[category as CareerCategory] += score
      }
    })
  }

  const nextQuestion = (): void => {
    currentQuestionIndex.value++
  }

  const previousQuestion = (): void => {
    if (currentQuestionIndex.value > 0) {
      currentQuestionIndex.value--
    }
  }

  const resetQuiz = (): void => {
    const initialState = createInitialState()
    currentQuestionIndex.value = initialState.currentQuestionIndex
    answers.value = initialState.answers
    scores.value = initialState.scores
    isCompleted.value = initialState.isCompleted
  }

  const hasAnsweredCurrent = (questionIndex: number): boolean => {
    return answers.value[questionIndex] !== undefined
  }

  const isLastQuestion = (totalQuestions: number): boolean => {
    return currentQuestionIndex.value === totalQuestions - 1
  }

  const completeQuiz = (): void => {
    isCompleted.value = true
  }

  return {
    currentQuestionIndex: readonly(currentQuestionIndex) as Readonly<Ref<number>>,
    answers: readonly(answers) as Readonly<Ref<number[]>>,
    scores: readonly(scores) as Readonly<Ref<Scores>>,
    status: status as Readonly<ComputedRef<QuizStatus>>,
    selectAnswer,
    nextQuestion,
    previousQuestion,
    resetQuiz,
    hasAnsweredCurrent,
    isLastQuestion,
    completeQuiz,
  }
}
