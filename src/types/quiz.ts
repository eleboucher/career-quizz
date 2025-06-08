export type CareerCategory = 'FE' | 'BE' | 'MB' | 'OT' | 'QA'

export type Scores = Record<CareerCategory, number>

export interface QuizOption {
  label: string
  scores: Partial<Scores>
}

export interface QuizQuestion {
  id: number
  text: string
  options: QuizOption[]
}

export interface CareerResult {
  name: string
  description: string
  category?: CareerCategory
}

export interface QuizState {
  currentQuestionIndex: number
  answers: number[][]
  scores: Scores
  isCompleted: boolean
}

export type QuizStatus = 'idle' | 'in_progress' | 'completed'

export const CAREER_PATHS: Record<CareerCategory, CareerResult> = {
  FE: {
    name: 'Frontend Developer',
    description:
      'You love creating beautiful, interactive user interfaces and working with users directly.',
    category: 'FE',
  },
  BE: {
    name: 'Backend Developer',
    description: 'You enjoy building robust systems, APIs, and working with data and server logic.',
    category: 'BE',
  },
  MB: {
    name: 'Mobile Developer',
    description:
      "You're passionate about creating apps for phones and tablets, focusing on mobile-specific features.",
    category: 'MB',
  },
  OT: {
    name: 'DevOps/Infrastructure Engineer',
    description: 'You thrive on automation, deployment, and keeping systems running smoothly.',
    category: 'OT',
  },
  QA: {
    name: 'Quality Assurance Engineer',
    description:
      'You focus on testing and ensuring software quality through thorough testing and analysis.',
    category: 'QA',
  },
}

export const CAREER_DISPLAY_NAMES: Record<CareerCategory, string> = {
  FE: 'Frontend',
  BE: 'Backend',
  MB: 'Mobile',
  OT: 'DevOps',
  QA: 'Quality Assurance',
}
