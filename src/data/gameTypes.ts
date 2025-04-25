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
  },
  {
    id: 'debug-code',
    title: 'Debug the Code',
    description: 'Find and fix bugs in existing code snippets.',
    icon: 'Code',
    category: 'Debugging',
    difficultyLevels: ['Beginner', 'Intermediate', 'Advanced'],
    academicLevels: ['1st Year College', '2nd Year College', '3rd Year College'],
    programmingLanguages: ['Python', 'JavaScript', 'Java', 'C++']
  },
  {
    id: 'code-golf',
    title: 'Code Golf Challenge',
    description: 'Write the shortest possible code to solve a problem.',
    icon: 'Code',
    category: 'Code Optimization',
    difficultyLevels: ['Intermediate', 'Advanced', 'Monster'],
    academicLevels: ['3rd Year College', 'Final Year College', 'Masters', 'PhD'],
    programmingLanguages: ['Python', 'JavaScript', 'Ruby']
  },
  {
    id: 'algorithm-design',
    title: 'Algorithm Design',
    description: 'Design and implement efficient algorithms for complex problems.',
    icon: 'LayoutGrid',
    category: 'Algorithms',
    difficultyLevels: ['Advanced', 'Monster'],
    academicLevels: ['Final Year College', 'Masters', 'PhD'],
    programmingLanguages: ['Python', 'Java', 'C++']
  },
  {
    id: 'system-design',
    title: 'System Design Challenge',
    description: 'Design scalable system architectures and implement key components.',
    icon: 'LayoutGrid',
    category: 'System Design',
    difficultyLevels: ['Advanced', 'Monster'],
    academicLevels: ['Masters', 'PhD'],
    programmingLanguages: ['Any']
  },
  {
    id: 'security-puzzle',
    title: 'Security Challenge',
    description: 'Identify and fix security vulnerabilities in code.',
    icon: 'Code',
    category: 'Security',
    difficultyLevels: ['Intermediate', 'Advanced', 'Monster'],
    academicLevels: ['3rd Year College', 'Final Year College', 'Masters'],
    programmingLanguages: ['Python', 'JavaScript', 'Java']
  }
];
