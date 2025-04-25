
export type Team = {
  id: string;
  name: string;
  members: number;
  score: number;
  rank?: number;
};

export type Match = {
  id: string;
  teamA: Team;
  teamB: Team;
  game: string;
  timeRemaining: number; // in seconds
  totalTime: number; // in seconds
  level: string;
  language: string;
  status: 'scheduled' | 'in-progress' | 'completed' | 'paused';
  startTime?: Date;
};

export const currentMatches: Match[] = [
  {
    id: 'match-1',
    teamA: {
      id: 'team-alpha',
      name: 'Team Alpha',
      members: 3,
      score: 450
    },
    teamB: {
      id: 'team-byte',
      name: 'Team Byte',
      members: 3,
      score: 420
    },
    game: 'Data Structure Challenge',
    timeRemaining: 756,
    totalTime: 1800,
    level: 'Advanced',
    language: 'Python',
    status: 'in-progress'
  },
  {
    id: 'match-2',
    teamA: {
      id: 'binary-beasts',
      name: 'Binary Beasts',
      members: 4,
      score: 520
    },
    teamB: {
      id: 'code-ninjas',
      name: 'Code Ninjas',
      members: 4,
      score: 485
    },
    game: 'Find the Error',
    timeRemaining: 1245,
    totalTime: 1800,
    level: 'Intermediate',
    language: 'JavaScript',
    status: 'in-progress'
  }
];

export const topTeams: Team[] = [
  {
    id: 'code-ninjas',
    name: 'Code Ninjas',
    members: 4,
    score: 520,
    rank: 1
  },
  {
    id: 'binary-beasts',
    name: 'Binary Beasts',
    members: 4,
    score: 485,
    rank: 2
  },
  {
    id: 'algo-avengers',
    name: 'Algo Avengers',
    members: 3,
    score: 470,
    rank: 3
  }
];
