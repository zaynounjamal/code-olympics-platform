
import React from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { GameCard } from '@/components/games/GameCard';
import { gameTypes } from '@/data/gameTypes';
import { toast } from 'sonner';

const Games = () => {
  const handlePlayGame = (gameId: string) => {
    const game = gameTypes.find(g => g.id === gameId);
    if (game) {
      toast.success(`Starting ${game.title}`, {
        description: "Preparing your challenge environment..."
      });
    }
  };

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
          <TabsTrigger value="monster">Monster Level</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gameTypes.map((game) => (
            <GameCard key={game.id} game={game} onPlay={handlePlayGame} />
          ))}
        </TabsContent>

        {['beginner', 'intermediate', 'advanced', 'monster'].map((level) => (
          <TabsContent
            key={level}
            value={level}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {gameTypes
              .filter((game) => 
                game.difficultyLevels.includes(level.charAt(0).toUpperCase() + level.slice(1) as any)
              )
              .map((game) => (
                <GameCard key={game.id} game={game} onPlay={handlePlayGame} />
              ))}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Games;
