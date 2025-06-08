import type { Scores, CareerResult, CareerCategory } from '../types/quiz'
import { CAREER_PATHS } from '../types/quiz'

interface UseQuizResultsReturn {
  getResult: (scores: Scores) => CareerResult
  getTopCategories: (scores: Scores) => CareerCategory[]
  getMaxScore: (scores: Scores) => number
}

export function useQuizResults(): UseQuizResultsReturn {
  const getMaxScore = (scores: Scores): number => {
    return Math.max(...Object.values(scores))
  }

  const getTopCategories = (scores: Scores): CareerCategory[] => {
    const maxScore = getMaxScore(scores)
    return Object.entries(scores)
      .filter(([, score]) => score === maxScore)
      .map(([category]) => category as CareerCategory)
  }

  const getResult = (scores: Scores): CareerResult => {
    const topCategories = getTopCategories(scores)

    if (topCategories.length === 1) {
      return CAREER_PATHS[topCategories[0]]
    }

    // Handle ties
    const careerNames = topCategories.map((category) => CAREER_PATHS[category].name)
    return {
      name: 'Hybrid Developer',
      description: `You have strong interests in multiple areas: ${careerNames.join(' and ')}.`,
    }
  }

  return {
    getResult,
    getTopCategories,
    getMaxScore,
  }
}
