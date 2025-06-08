import { ref, computed, readonly, type Ref, type ComputedRef } from 'vue'
import type { QuizState, QuizStatus, Scores, CareerCategory } from '../types/quiz'

interface UseQuizStateReturn {
  currentQuestionIndex: Readonly<Ref<number>>
  answers: Readonly<Ref<Map<number, Set<number>>>>
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
  answers: new Map(),
  scores: { FE: 0, BE: 0, MB: 0, OT: 0, QA: 0 },
  isCompleted: false,
})

const currentQuestionIndex = ref(0)
const answers = ref<Map<number, Set<number>>>(new Map())
const scores = ref<Scores>({ FE: 0, BE: 0, MB: 0, OT: 0, QA: 0 })
const isCompleted = ref(false)

const status = computed<QuizStatus>(() => {
  if (isCompleted.value) return 'completed'
  if (currentQuestionIndex.value > 0 || answers.value.size > 0) return 'in_progress'
  return 'idle'
})

export function useQuizState(): UseQuizStateReturn {
  const selectAnswer = (
    questionIndex: number,
    optionIndex: number,
    optionScores: Partial<Scores>,
  ): void => {
    // Initialize answers set for this question if it doesn't exist
    if (!answers.value.has(questionIndex)) {
      answers.value.set(questionIndex, new Set())
    }

    const questionAnswers = answers.value.get(questionIndex)!
    const isSelected = questionAnswers.has(optionIndex)

    if (isSelected) {
      // Remove the answer and subtract scores
      questionAnswers.delete(optionIndex)
      Object.entries(optionScores).forEach(([category, score]) => {
        if (score && category in scores.value) {
          scores.value[category as CareerCategory] -= score
        }
      })
    } else {
      // Add the answer and add scores
      questionAnswers.add(optionIndex)
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
    answers.value.clear()
    scores.value = initialState.scores
    isCompleted.value = initialState.isCompleted
  }

  const hasAnsweredCurrent = (questionIndex: number): boolean => {
    const questionAnswers = answers.value.get(questionIndex)
    return questionAnswers !== undefined && questionAnswers.size > 0
  }

  const isLastQuestion = (totalQuestions: number): boolean => {
    return currentQuestionIndex.value === totalQuestions - 1
  }

  const completeQuiz = (): void => {
    isCompleted.value = true
  }

  return {
    currentQuestionIndex: readonly(currentQuestionIndex) as Readonly<Ref<number>>,
    answers: readonly(answers) as Readonly<Ref<Map<number, Set<number>>>>,
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
