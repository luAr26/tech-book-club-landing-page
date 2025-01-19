type Step = {
  stepNumber: number;
  stepDescription: string;
};

type Steps = Step[];

export const readingJourneySteps: Steps = [
  {
    stepNumber: 1,
    stepDescription: "Choose your membership tier",
  },
  {
    stepNumber: 2,
    stepDescription: "Get your monthly book selection",
  },

  {
    stepNumber: 3,
    stepDescription: "Join our discussion forums",
  },

  {
    stepNumber: 4,
    stepDescription: "Attend exclusive meetups",
  },
];
