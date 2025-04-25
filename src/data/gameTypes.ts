
export type GameLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Monster';

export type AcademicLevel = 
  | 'School Students'
  | '1st Year College'
  | '2nd Year College'
  | '3rd Year College'
  | 'Final Year College'
  | 'Masters'
  | 'PhD';

export type GameType = {
  id: string;
  title: string;
  description: string;
  icon: 'Code' | 'LayoutGrid' | 'Award';
  category: string;
  difficultyLevels: GameLevel[];
  academicLevels: AcademicLevel[];
  programmingLanguages: string[];
};

export const gameTypes: GameType[] = [
  {
    id: 'complete-code',
    title: 'Complete the Code',
    description: 'Fill in the missing code to make the function work as expected.',
    icon: 'Code',
    category: 'Code Completion',
    difficultyLevels: ['Beginner', 'Intermediate', 'Advanced', 'Monster'],
    academicLevels: ['School Students', '1st Year College', '2nd Year College', '3rd Year College', 'Masters', 'PhD'],
    programmingLanguages: ['Python', 'JavaScript', 'Java', 'C++', 'TypeScript']
  },
  {
    id: 'data-structures',
    title: 'Data Structure Challenges',
    description: 'Solve complex problems using the right data structures.',
    icon: 'LayoutGrid',
    category: 'Algorithms',
    difficultyLevels: ['Intermediate', 'Advanced', 'Monster'],
    academicLevels: ['2nd Year College', '3rd Year College', 'Final Year College', 'Masters', 'PhD'],
    programmingLanguages: ['Python', 'Java', 'C++', 'JavaScript']
  },
  {
    id: 'find-error',
    title: 'Find the Error',
    description: 'Debug and fix issues in existing code snippets.',
    icon: 'Award',
    category: 'Debugging',
    difficultyLevels: ['Beginner', 'Intermediate', 'Advanced'],
    academicLevels: ['1st Year College', '2nd Year College', '3rd Year College', 'Final Year College'],
    programmingLanguages: ['Python', 'JavaScript', 'Java', 'C++', 'PHP']
  },
  {
    id: 'write-output',
    title: 'Write the Output',
    description: 'Predict and write the output for given code snippets.',
    icon: 'Code',
    category: 'Code Analysis',
    difficultyLevels: ['Beginner', 'Intermediate'],
    academicLevels: ['School Students', '1st Year College', '2nd Year College'],
    programmingLanguages: ['Python', 'JavaScript', 'Java']
  },
  {
    id: 'reverse-challenge',
    title: 'Reverse Challenge',
    description: 'Write code that produces the given output pattern.',
    icon: 'LayoutGrid',
    category: 'Code Writing',
    difficultyLevels: ['Advanced', 'Monster'],
    academicLevels: ['3rd Year College', 'Final Year College', 'Masters', 'PhD'],
    programmingLanguages: ['Python', 'JavaScript', 'Java', 'C++']
  }
];
