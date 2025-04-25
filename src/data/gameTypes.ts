
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
  challenges: {
    title: string;
    description: string;
    points: number;
  }[];
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
    challenges: [
      {
        title: 'Array Sum',
        description: 'Complete the function to calculate the sum of array elements.',
        points: 100
      },
      {
        title: 'String Reversal',
        description: 'Implement a function to reverse a string without using built-in methods.',
        points: 150
      },
      {
        title: 'Binary Search',
        description: 'Complete the binary search implementation.',
        points: 200
      }
    ],
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
    challenges: [
      {
        title: 'Linked List Operations',
        description: 'Implement basic linked list operations.',
        points: 200
      },
      {
        title: 'Binary Tree Traversal',
        description: 'Implement different tree traversal methods.',
        points: 250
      },
      {
        title: 'Graph Algorithms',
        description: 'Implement DFS and BFS for a graph.',
        points: 300
      }
    ],
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
    challenges: [
      {
        title: 'Syntax Errors',
        description: 'Find and fix basic syntax errors in code.',
        points: 100
      },
      {
        title: 'Logic Bugs',
        description: 'Identify and fix logical errors in algorithms.',
        points: 200
      },
      {
        title: 'Performance Issues',
        description: 'Optimize code for better performance.',
        points: 300
      }
    ],
    programmingLanguages: ['Python', 'JavaScript', 'Java', 'C++', 'PHP']
  },
  {
    id: 'algorithm-puzzles',
    title: 'Algorithm Puzzles',
    description: 'Solve algorithmic challenges and optimize solutions.',
    icon: 'LayoutGrid',
    category: 'Algorithms',
    difficultyLevels: ['Intermediate', 'Advanced', 'Monster'],
    academicLevels: ['2nd Year College', '3rd Year College', 'Final Year College', 'Masters', 'PhD'],
    challenges: [
      {
        title: 'Dynamic Programming',
        description: 'Solve problems using dynamic programming approach.',
        points: 300
      },
      {
        title: 'Greedy Algorithms',
        description: 'Implement greedy solutions to optimization problems.',
        points: 250
      },
      {
        title: 'Backtracking',
        description: 'Solve problems using backtracking approach.',
        points: 350
      }
    ],
    programmingLanguages: ['Python', 'Java', 'C++']
  },
  {
    id: 'code-review',
    title: 'Code Review Challenge',
    description: 'Review code for best practices and suggest improvements.',
    icon: 'Code',
    category: 'Code Quality',
    difficultyLevels: ['Intermediate', 'Advanced'],
    academicLevels: ['3rd Year College', 'Final Year College', 'Masters'],
    challenges: [
      {
        title: 'Code Style Review',
        description: 'Review code for style and formatting issues.',
        points: 150
      },
      {
        title: 'Performance Review',
        description: 'Identify performance bottlenecks and suggest improvements.',
        points: 250
      },
      {
        title: 'Security Review',
        description: 'Find security vulnerabilities in code.',
        points: 300
      }
    ],
    programmingLanguages: ['Python', 'JavaScript', 'Java', 'C++']
  }
];

