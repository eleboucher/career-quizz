import { ref, computed, readonly, type Ref, type ComputedRef } from 'vue'
import type { QuizState, QuizStatus, Scores, CareerCategory } from '../types/quiz'

interface UseQuizStateReturn {
  currentQuestionIndex: Readonly<Ref<number>>
  answers: Readonly<Ref<number[][]>>
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
  scores: { FE: 0, BE: 0, MB: 0, OT: 0, QA: 0 },
  isCompleted: false,
})

const currentQuestionIndex = ref(0)
const answers = ref<number[][]>([])
const scores = ref<Scores>({ FE: 0, BE: 0, MB: 0, OT: 0, QA: 0 })
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
    // Initialize answers array for this question if it doesn't exist
    if (!answers.value[questionIndex]) {
      answers.value[questionIndex] = []
    }

    const questionAnswers = answers.value[questionIndex]
    const isSelected = questionAnswers.includes(optionIndex)

    if (isSelected) {
      // Remove the answer and subtract scores
      answers.value[questionIndex] = questionAnswers.filter(idx => idx !== optionIndex)
      Object.entries(optionScores).forEach(([category, score]) => {
        if (score && category in scores.value) {
          scores.value[category as CareerCategory] -= score
        }
      })
    } else {
      // Add the answer and add scores
      answers.value[questionIndex].push(optionIndex)
      Object.entries(optionScores).forEach(([category, score]) => {
        if (score && category in scores.value) {
          scores.value[category as CareerCategory] += score
        }
      })
    }
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
    return answers.value[questionIndex] !== undefined && answers.value[questionIndex].length > 0
  }

  const isLastQuestion = (totalQuestions: number): boolean => {
    return currentQuestionIndex.value === totalQuestions - 1
  }

  const completeQuiz = (): void => {
    isCompleted.value = true
  }

  return {
    currentQuestionIndex: readonly(currentQuestionIndex) as Readonly<Ref<number>>,
    answers: readonly(answers) as Readonly<Ref<number[][]>>,
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
