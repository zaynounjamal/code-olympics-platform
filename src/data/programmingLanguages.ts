
export type ProgrammingLanguage = {
  id: string;
  name: string;
  category: 'Compiled' | 'Interpreted' | 'Hybrid';
  description: string;
};

export const programmingLanguages: ProgrammingLanguage[] = [
  {
    id: 'python',
    name: 'Python',
    category: 'Interpreted',
    description: 'A versatile language known for its simplicity and readability.'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Interpreted',
    description: 'The language of the web, essential for frontend development.'
  },
  {
    id: 'java',
    name: 'Java',
    category: 'Compiled',
    description: 'A robust language used in enterprise and Android development.'
  },
  {
    id: 'cpp',
    name: 'C++',
    category: 'Compiled',
    description: 'A powerful language for system programming and game development.'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Hybrid',
    description: 'JavaScript with static typing for large-scale applications.'
  }
];
