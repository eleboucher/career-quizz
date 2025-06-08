export interface QuizOption {
  label: string
  scores: { [key: string]: number }
}

export interface QuizQuestion {
  id: number
  text: string
  options: QuizOption[]
}

export const quizData: QuizQuestion[] = [
  {
    id: 1,
    text: "When you're trying to solve a problem, which approaches feel most natural to you? (Select all that apply)",
    options: [
      {
        label: 'Start by understanding who will be affected and how they currently handle this',
        scores: { FE: 2, MB: 1, QA: 1 },
      },
      {
        label: 'Break it down into smaller pieces and tackle each part systematically',
        scores: { BE: 2, OT: 1, QA: 1 },
      },
      {
        label: 'Look for existing solutions and adapt them to this specific context',
        scores: { MB: 1, BE: 1, FE: 1 },
      },
      {
        label: 'Consider what could go wrong and build in safeguards from the start',
        scores: { OT: 2, BE: 1, QA: 2 },
      },
      { label: 'Try a quick prototype to see if the basic idea works', scores: { FE: 1, MB: 1 } },
      {
        label: 'Research the underlying principles to understand why current approaches exist',
        scores: { BE: 1, OT: 1 },
      },
      {
        label: 'Think about all the ways this could be misused or break in unexpected situations',
        scores: { QA: 2, OT: 1 },
      },
    ],
  },
  {
    id: 2,
    text: 'In a group project, what role do you naturally gravitate toward? (Select all that feel right)',
    options: [
      {
        label: 'Making sure the final result is intuitive and easy for people to use',
        scores: { FE: 2, MB: 1, QA: 1 },
      },
      {
        label: 'Figuring out the underlying structure and how all the pieces connect',
        scores: { BE: 2, OT: 1 },
      },
      {
        label: 'Ensuring it works well in different situations and environments',
        scores: { MB: 2, OT: 1, QA: 1 },
      },
      {
        label: 'Setting up processes so the team can work efficiently together',
        scores: { OT: 2 },
      },
      { label: 'Iterating on ideas based on feedback from others', scores: { FE: 1, MB: 1 } },
      {
        label: 'Researching and sharing knowledge to help everyone make better decisions',
        scores: { BE: 1, OT: 1 },
      },
      {
        label: 'Double-checking that everything meets the original requirements',
        scores: { QA: 2, OT: 1 },
      },
    ],
  },
  {
    id: 3,
    text: 'When learning something new, what keeps you most engaged? (Select all that resonate)',
    options: [
      {
        label: 'Seeing immediate results and being able to show others what I built',
        scores: { FE: 2 },
      },
      { label: 'Understanding the logic behind how and why something works', scores: { BE: 2 } },
      {
        label: 'Figuring out how to make it work in real-world conditions',
        scores: { MB: 2, OT: 1 },
      },
      { label: 'Learning how to make processes more reliable and repeatable', scores: { OT: 2 } },
      {
        label: 'Getting feedback from others and improving based on their input',
        scores: { FE: 1, MB: 1 },
      },
      { label: 'Going deep into the technical details and edge cases', scores: { BE: 1, OT: 1 } },
    ],
  },
  {
    id: 4,
    text: 'Which types of challenges energize you most? (Select all that sound interesting)',
    options: [
      {
        label: 'Making something complex feel simple and obvious to use',
        scores: { FE: 2, MB: 1 },
      },
      {
        label: 'Optimizing something to handle much larger scale or complexity',
        scores: { BE: 2, OT: 1 },
      },
      {
        label: 'Getting something to work consistently across different constraints',
        scores: { MB: 2, BE: 1 },
      },
      { label: 'Eliminating manual work through smart automation', scores: { OT: 2 } },
      {
        label: 'Balancing multiple competing requirements to find the best solution',
        scores: { BE: 1, FE: 1, MB: 1 },
      },
      {
        label: "Taking something that's unreliable and making it rock-solid",
        scores: { OT: 1, BE: 1 },
      },
    ],
  },
  {
    id: 5,
    text: 'When working under pressure, how do you prefer to contribute? (Select all that feel natural)',
    options: [
      {
        label: 'Focus on keeping things working for the people who depend on them',
        scores: { FE: 2, MB: 1 },
      },
      {
        label: "Dig into the details to understand what's really causing the problem",
        scores: { BE: 2 },
      },
      {
        label: 'Test different scenarios to understand the scope of the issue',
        scores: { MB: 1, BE: 1, OT: 1 },
      },
      {
        label: 'Coordinate the response and make sure nothing important gets missed',
        scores: { OT: 2 },
      },
      {
        label: 'Find the quickest safe solution and then investigate properly later',
        scores: { FE: 1, OT: 1 },
      },
      {
        label: 'Document what we learn so we can prevent similar issues',
        scores: { OT: 1, BE: 1 },
      },
    ],
  },
  {
    id: 6,
    text: 'What type of feedback makes you feel most accomplished? (Select all that would motivate you)',
    options: [
      { label: '"This is so much easier to use now - thank you!"', scores: { FE: 2, MB: 1 } },
      {
        label: '"This handles our complex requirements perfectly and runs fast"',
        scores: { BE: 2 },
      },
      {
        label: '"Finally, something that works the same way everywhere I try it"',
        scores: { MB: 2, OT: 1 },
      },
      { label: '"This saved our team hours of work every week"', scores: { OT: 2 } },
      {
        label: '"You made this feel effortless even though I know it\'s complicated"',
        scores: { FE: 1, MB: 1 },
      },
      { label: '"This is robust - I can rely on it completely"', scores: { BE: 1, OT: 1 } },
      {
        label: '"You caught issues we never would have thought of - this prevented major problems"',
        scores: { QA: 2 },
      },
    ],
  },
  {
    id: 7,
    text: 'In your ideal work environment, how would you spend your time? (Select all that appeal to you)',
    options: [
      { label: 'Collaborating with creative people to bring ideas to life', scores: { FE: 2 } },
      {
        label: 'Having long stretches of focused time to work through complex problems',
        scores: { BE: 2 },
      },
      {
        label: 'Testing and refining solutions across different real-world scenarios',
        scores: { MB: 2 },
      },
      { label: 'Working across teams to improve how everyone gets things done', scores: { OT: 2 } },
      {
        label: 'Getting quick feedback cycles to iterate and improve continuously',
        scores: { FE: 1, MB: 1 },
      },
      { label: 'Building foundational work that others can depend on', scores: { BE: 1, OT: 1 } },
    ],
  },
  {
    id: 8,
    text: 'When you imagine the impact you want to have, what resonates most? (Select all that inspire you)',
    options: [
      {
        label: "Creating experiences that make people's daily tasks more enjoyable",
        scores: { FE: 2, MB: 1 },
      },
      {
        label: 'Building systems that reliably handle important business processes',
        scores: { BE: 2 },
      },
      {
        label: 'Making powerful tools accessible to people in different situations',
        scores: { MB: 2 },
      },
      {
        label: 'Enabling teams to focus on creative work instead of repetitive tasks',
        scores: { OT: 2 },
      },
      {
        label: 'Solving problems that directly improve how people get things done',
        scores: { FE: 1, BE: 1, MB: 1 },
      },
      {
        label: "Building things that just work, so people don't have to think about them",
        scores: { BE: 1, OT: 1 },
      },
    ],
  },
  {
    id: 9,
    text: 'Which aspects of quality are you most naturally drawn to care about? (Select all that matter to you)',
    options: [
      {
        label: "Making sure it's intuitive and doesn't frustrate people",
        scores: { FE: 2, MB: 1, QA: 1 },
      },
      {
        label: 'Ensuring it handles edge cases and unexpected inputs gracefully',
        scores: { BE: 2, OT: 1, QA: 1 },
      },
      {
        label: 'Verifying it performs well under different real-world conditions',
        scores: { MB: 2, BE: 1, QA: 1 },
      },
      {
        label: 'Building in monitoring and recovery so problems get caught early',
        scores: { OT: 2 },
      },
      {
        label: 'Getting input from actual users to make sure it meets their needs',
        scores: { FE: 1, MB: 1, QA: 1 },
      },
      {
        label: "Making the code maintainable so future changes don't break things",
        scores: { BE: 1, OT: 1 },
      },
      {
        label: 'Thoroughly testing every possible scenario before anyone else uses it',
        scores: { QA: 2 },
      },
    ],
  },
  {
    id: 10,
    text: 'Looking ahead 2-3 years, which growth areas excite you most? (Select all that sound appealing)',
    options: [
      {
        label: 'Becoming great at translating complex functionality into simple experiences',
        scores: { FE: 3, MB: 1 },
      },
      { label: 'Mastering the design of efficient, scalable systems', scores: { BE: 3 } },
      {
        label: 'Specializing in creating solutions that work across diverse environments',
        scores: { MB: 3 },
      },
      { label: 'Leading efforts to improve how development teams operate', scores: { OT: 3 } },
      {
        label: 'Building end-to-end solutions from concept to deployment',
        scores: { BE: 2, FE: 2 },
      },
      {
        label: 'Developing deep expertise in solving complex technical challenges',
        scores: { BE: 1, OT: 1 },
      },
      {
        label: 'Becoming an expert at ensuring software quality and preventing issues',
        scores: { QA: 3 },
      },
      {
        label: 'Mentoring others and helping build great development cultures',
        scores: { FE: 1, BE: 1, MB: 1, OT: 1, QA: 1 },
      },
    ],
  },
]
