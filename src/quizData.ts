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
    text: 'What sounds most fun to you?',
    options: [
      { label: 'Building interactive web apps using React or Vue', scores: { FE: 3 } },
      { label: 'Writing code to manage data, users, and APIs', scores: { BE: 3 } },
      { label: 'Making apps run smoothly on iOS and Android', scores: { MB: 3 } },
      { label: 'Creating scripts or tools to automate work', scores: { OT: 3 } },
      { label: 'Not sure yet', scores: {} },
    ],
  },
  {
    id: 2,
    text: "You're given a task to help a team. What would you prefer doing?",
    options: [
      { label: 'Handle the UI and user interactions', scores: { FE: 3 } },
      { label: 'Design the system behind the scenes', scores: { BE: 3 } },
      { label: 'Get the app to run on phones', scores: { MB: 3 } },
      { label: 'Write scripts to help automate deployment', scores: { OT: 3 } },
      { label: 'Not sure', scores: {} },
    ],
  },
  {
    id: 3,
    text: 'When something breaks, what kind of problem would you rather investigate?',
    options: [
      { label: "The interface isn't responding correctly to user clicks", scores: { FE: 2 } },
      { label: "The data isn't being saved or retrieved properly", scores: { BE: 2 } },
      { label: 'The app works on iPhone but crashes on Android', scores: { MB: 2 } },
      { label: 'The automated build process is failing', scores: { OT: 2 } },
      { label: "I'm not sure yet", scores: {} },
    ],
  },
  {
    id: 4,
    text: 'Which tutorial would you rather watch?',
    options: [
      { label: 'How to build a web app with Vue or React', scores: { FE: 2 } },
      { label: 'How to design and build an API with a database', scores: { BE: 2 } },
      { label: 'How to build your first mobile app', scores: { MB: 2 } },
      { label: 'How to automate tasks with Python or set up CI/CD', scores: { OT: 2 } },
      { label: 'Not sure', scores: {} },
    ],
  },
  {
    id: 5,
    text: 'What kind of project would you enjoy building?',
    options: [
      { label: 'An interactive portfolio website with animations', scores: { FE: 3 } },
      { label: 'A task manager with user accounts and data persistence', scores: { BE: 3 } },
      { label: 'A mobile app for tracking habits', scores: { MB: 3 } },
      { label: 'A script to organize files and automate workflows', scores: { OT: 3 } },
      { label: 'None of these excite me', scores: {} },
    ],
  },
  {
    id: 6,
    text: 'When learning something new, what gives you the most satisfaction?',
    options: [
      { label: 'Seeing immediate visual results of my changes', scores: { FE: 2 } },
      { label: 'Understanding how data flows through a system', scores: { BE: 2 } },
      { label: 'Getting something to work across different devices', scores: { MB: 2 } },
      { label: 'Building tools that make other tasks easier', scores: { OT: 2 } },
      { label: "I don't know yet", scores: {} },
    ],
  },
  {
    id: 7,
    text: 'Which kind of job sounds most appealing?',
    options: [
      { label: 'Working closely with designers to improve user experience', scores: { FE: 2 } },
      { label: 'Architecting systems that handle thousands of users', scores: { BE: 2 } },
      { label: 'Publishing an app to the Play Store or App Store', scores: { MB: 2 } },
      { label: 'Improving build pipelines and developer productivity', scores: { OT: 2 } },
      { label: "I'm not sure", scores: {} },
    ],
  },
  {
    id: 8,
    text: 'Which type of thinking appeals to you most?',
    options: [
      { label: 'How users will interact with and navigate through features', scores: { FE: 2 } },
      { label: 'How to structure data and optimize performance', scores: { BE: 2 } },
      { label: 'How to make features work consistently across platforms', scores: { MB: 2 } },
      { label: 'How to streamline and automate repetitive processes', scores: { OT: 2 } },
      { label: "I don't know yet", scores: {} },
    ],
  },
  {
    id: 9,
    text: 'What interests you most about tech?',
    options: [
      { label: 'Making digital tools intuitive and delightful to use', scores: { FE: 2 } },
      { label: 'Building robust systems that handle complex business logic', scores: { BE: 2 } },
      { label: 'Making technology accessible on mobile devices', scores: { MB: 2 } },
      { label: 'Creating tools and processes that help teams work better', scores: { OT: 2 } },
      { label: 'Still exploring', scores: {} },
    ],
  },
  {
    id: 10,
    text: 'Which part of the stack would you like to learn first?',
    options: [
      { label: 'UI frameworks like Vue or React', scores: { FE: 3 } },
      { label: 'Databases, APIs, and server logic', scores: { BE: 3 } },
      { label: 'Mobile app frameworks and platform-specific features', scores: { MB: 3 } },
      { label: 'Dev tools, version control, and deployment systems', scores: { OT: 3 } },
      { label: 'Not sure yet', scores: {} },
    ],
  },
  {
    id: 11,
    text: 'Which skill would you rather practice?',
    options: [
      { label: 'Creating responsive layouts and interactive components', scores: { FE: 2 } },
      { label: 'Designing database schemas and writing efficient queries', scores: { BE: 2 } },
      {
        label: 'Testing apps on real devices and handling platform differences',
        scores: { MB: 2 },
      },
      { label: 'Writing scripts to automate testing and deployment', scores: { OT: 2 } },
      { label: "I don't know", scores: {} },
    ],
  },
  {
    id: 12,
    text: 'Which of these is least intimidating?',
    options: [
      { label: 'Creating a dynamic form that validates user input', scores: { FE: 2 } },
      { label: 'Setting up a database and writing API endpoints', scores: { BE: 2 } },
      { label: 'Building a simple app layout for phones and tablets', scores: { MB: 2 } },
      { label: 'Writing a script that automatically backs up files', scores: { OT: 2 } },
      { label: 'They all sound challenging', scores: {} },
    ],
  },
  {
    id: 13,
    text: 'What aspect of app development is most interesting to you?',
    options: [
      { label: 'How buttons, animations, and interactions feel to users', scores: { FE: 2 } },
      { label: 'How user data is securely stored and efficiently retrieved', scores: { BE: 2 } },
      { label: 'How the app adapts to different screen sizes and orientations', scores: { MB: 2 } },
      { label: 'How the app gets tested, built, and deployed reliably', scores: { OT: 2 } },
      { label: 'Not sure', scores: {} },
    ],
  },
  {
    id: 14,
    text: 'What kind of teammate do you want to be?',
    options: [
      { label: 'The one who makes the product beautiful and easy to use', scores: { FE: 2 } },
      { label: 'The one who ensures the system is scalable and reliable', scores: { BE: 2 } },
      { label: 'The one who makes sure mobile users have a great experience', scores: { MB: 2 } },
      { label: 'The one who improves team productivity and workflows', scores: { OT: 2 } },
      { label: 'Any role sounds fine', scores: {} },
    ],
  },
  {
    id: 15,
    text: 'Which problem-solving approach appeals to you?',
    options: [
      {
        label: "Debugging why a user interface element isn't behaving correctly",
        scores: { FE: 2 },
      },
      { label: 'Investigating why data processing is slow or incorrect', scores: { BE: 2 } },
      { label: 'Figuring out why an app works differently on various devices', scores: { MB: 2 } },
      { label: 'Troubleshooting why an automated process failed', scores: { OT: 2 } },
      { label: 'None of them appeal to me yet', scores: {} },
    ],
  },
  {
    id: 16,
    text: 'How do you feel about design?',
    options: [
      {
        label: "I enjoy bringing designs to life, but don't want to create them",
        scores: { FE: 2 },
      },
      { label: "Design isn't my focus — I prefer logic and data problems", scores: { BE: 2 } },
      { label: 'I want to ensure designs work well across different devices', scores: { MB: 2 } },
      { label: "Design doesn't interest me — I like systems and automation", scores: { OT: 2 } },
      { label: 'Still figuring that out', scores: {} },
    ],
  },
  {
    id: 17,
    text: 'What excites you more: building something new or improving something existing?',
    options: [
      { label: 'Creating new user interfaces and interactions from scratch', scores: { FE: 2 } },
      { label: 'Optimizing existing systems to handle more users or data', scores: { BE: 2 } },
      { label: 'Adapting existing apps to work better on mobile platforms', scores: { MB: 2 } },
      { label: 'Improving existing tools and processes to save time', scores: { OT: 2 } },
      { label: 'Both sound equally interesting', scores: {} },
    ],
  },
  {
    id: 18,
    text: 'What excites you about software development?',
    options: [
      { label: 'Making complex functionality feel simple and intuitive', scores: { FE: 2 } },
      { label: 'Building systems that reliably handle business requirements', scores: { BE: 2 } },
      { label: 'Creating experiences that work seamlessly across devices', scores: { MB: 2 } },
      { label: 'Building tools that make development faster and more reliable', scores: { OT: 2 } },
      { label: "I'm not sure yet", scores: {} },
    ],
  },
  {
    id: 19,
    text: 'What would you most enjoy building for a hackathon?',
    options: [
      { label: 'An interactive web tool with a polished user interface', scores: { FE: 3 } },
      { label: 'A backend service that processes and analyzes data', scores: { BE: 3 } },
      { label: 'A mobile app prototype that solves a real problem', scores: { MB: 3 } },
      { label: 'A developer tool or automation that helps other teams', scores: { OT: 3 } },
      { label: 'Not sure yet', scores: {} },
    ],
  },
  {
    id: 20,
    text: 'How do you want your day-to-day work to feel?',
    options: [
      { label: 'Creative and user-focused, with visible impact on experience', scores: { FE: 3 } },
      { label: 'Analytical and systematic, building robust foundations', scores: { BE: 3 } },
      { label: 'Versatile and platform-aware, ensuring broad accessibility', scores: { MB: 3 } },
      { label: 'Efficiency-focused, optimizing processes behind the scenes', scores: { OT: 3 } },
      { label: 'Still exploring what appeals to me', scores: {} },
    ],
  },
]
