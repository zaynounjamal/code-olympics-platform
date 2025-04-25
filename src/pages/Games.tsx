
import React from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Games = () => {
  const gameTypes = [
    {
      id: 1,
      title: 'Complete the Code',
      description: 'Fill in the missing code to make the function work as expected.',
      level: ['Beginner', 'Intermediate', 'Advanced', 'PhD'],
      languages: ['Python', 'JavaScript', 'Java', 'C++', '...and 36+ more'],
      icon: '🧩',
    },
    {
      id: 2,
      title: 'Find the Error',
      description: 'Debug and fix issues in existing code snippets.',
      level: ['Beginner', 'Intermediate', 'Advanced', 'PhD'],
      languages: ['Python', 'JavaScript', 'Java', 'C++', '...and 36+ more'],
      icon: '🔍',
    },
    {
      id: 3,
      title: 'CSS Games',
      description: 'Recreate designs using only CSS. Test your frontend skills!',
      level: ['Beginner', 'Intermediate', 'Advanced'],
      languages: ['CSS', 'SCSS', 'Less'],
      icon: '🎨',
    },
    {
      id: 4,
      title: 'Data Structure Challenges',
      description: 'Solve complex problems using the right data structures.',
      level: ['Intermediate', 'Advanced', 'PhD'],
      languages: ['Python', 'JavaScript', 'Java', 'C++', '...and 36+ more'],
      icon: '🔢',
    },
    {
      id: 5,
      title: 'Write the Output',
      description: 'Determine what the code outputs without running it.',
      level: ['Beginner', 'Intermediate', 'Advanced'],
      languages: ['Python', 'JavaScript', 'Java', 'C++', '...and 36+ more'],
      icon: '📝',
    },
    {
      id: 6,
      title: 'Reverse Challenges',
      description: 'Write the code from the given output.',
      level: ['Intermediate', 'Advanced', 'PhD'],
      languages: ['Python', 'JavaScript', 'Java', 'C++', '...and 36+ more'],
      icon: '🔄',
    },
    {
      id: 7,
      title: 'Debug the Code',
      description: 'Fix buggy code to meet the intended output.',
      level: ['Beginner', 'Intermediate', 'Advanced'],
      languages: ['Python', 'JavaScript', 'Java', 'C++', '...and 36+ more'],
      icon: '🐛',
    },
    {
      id: 8,
      title: 'Code Golf',
      description: 'Solve problems using the shortest possible code.',
      level: ['Intermediate', 'Advanced', 'PhD'],
      languages: ['Python', 'JavaScript', 'Java', 'C++', '...and 36+ more'],
      icon: '⛳',
    },
    {
      id: 9,
      title: 'Algorithm Design',
      description: 'Solve real-world problems using the best algorithm.',
      level: ['Advanced', 'PhD'],
      languages: ['Python', 'JavaScript', 'Java', 'C++', '...and 36+ more'],
      icon: '🧠',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Game Library</h1>
      <p className="text-muted-foreground mb-8">
        Explore our collection of coding challenges across multiple languages and difficulty levels.
      </p>

      <div className="relative mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
        <Input
          placeholder="Search games, languages, or difficulty levels..."
          className="pl-10"
        />
      </div>

      <Tabs defaultValue="all">
        <TabsList className="mb-8">
          <TabsTrigger value="all">All Games</TabsTrigger>
          <TabsTrigger value="beginner">Beginner</TabsTrigger>
          <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
          <TabsTrigger value="phd">PhD Level</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gameTypes.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </TabsContent>

        <TabsContent value="beginner" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gameTypes
            .filter((game) => game.level.includes('Beginner'))
            .map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
        </TabsContent>

        <TabsContent value="intermediate" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gameTypes
            .filter((game) => game.level.includes('Intermediate'))
            .map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
        </TabsContent>

        <TabsContent value="advanced" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gameTypes
            .filter((game) => game.level.includes('Advanced'))
            .map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
        </TabsContent>

        <TabsContent value="phd" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gameTypes
            .filter((game) => game.level.includes('PhD'))
            .map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface GameCardProps {
  game: {
    id: number;
    title: string;
    description: string;
    level: string[];
    languages: string[];
    icon: string;
  };
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card className="game-card h-full flex flex-col">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="text-4xl mb-4">{game.icon}</div>
        <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
        <p className="text-muted-foreground mb-6 flex-grow">{game.description}</p>
        
        <div className="space-y-3 mt-auto">
          <div>
            <p className="text-xs text-muted-foreground mb-2">DIFFICULTY</p>
            <div className="flex flex-wrap gap-2">
              {game.level.map((level) => (
                <Badge key={level} variant={level === 'PhD' ? 'destructive' : 'outline'}>
                  {level}
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <p className="text-xs text-muted-foreground mb-2">LANGUAGES</p>
            <div className="text-sm truncate">
              {game.languages.slice(0, 4).join(', ')} {game.languages.length > 4 && '...'}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Games;
