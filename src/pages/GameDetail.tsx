
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { gameTypes } from '@/data/gameTypes';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gamepad2, Trophy, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

const GameDetail = () => {
  const { gameId } = useParams();
  const game = gameTypes.find(g => g.id === gameId);

  if (!game) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Game not found</h2>
        <Link to="/games">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Games
          </Button>
        </Link>
      </div>
    );
  }

  const handleStartGame = (challengeId: string) => {
    toast.success(`Starting ${game.title}`);
  };

  const iconMap = {
    Code: Gamepad2,
    LayoutGrid: Trophy,
    Award: Trophy,
  };
  
  const IconComponent = iconMap[game.icon];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/games">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Games
            </Button>
          </Link>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="md:w-2/3">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-muted rounded-lg">
              <IconComponent className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{game.title}</h1>
              <div className="flex flex-wrap gap-2 mt-1">
                <Badge>{game.category}</Badge>
                <Badge variant="default">{game.phase}</Badge>
              </div>
            </div>
          </div>
          
          <p className="text-lg mb-6">{game.description}</p>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-3">About this Game</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Difficulty Levels</h3>
                <div className="flex flex-wrap gap-2">
                  {game.difficultyLevels.map((level) => (
                    <Badge key={level} variant="outline">
                      {level}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-2">Recommended for</h3>
                <div className="flex flex-wrap gap-2">
                  {game.academicLevels.slice(0, 3).map((level) => (
                    <Badge key={level} variant="outline">
                      {level}
                    </Badge>
                  ))}
                  {game.academicLevels.length > 3 && (
                    <Badge variant="outline">+{game.academicLevels.length - 3} more</Badge>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/3">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="bg-green-50 text-green-800 p-4 rounded-lg border border-green-200 flex gap-3 mb-4 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800/30">
                  <Gamepad2 className="h-5 w-5 flex-shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Available for Everyone</p>
                    <p className="text-sm">Start playing right away!</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {game.programmingLanguages.map((language) => (
                      <Badge key={language} variant="outline">
                        {language}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Total Challenges</h3>
                  <p className="text-2xl font-bold">{game.challenges.length}</p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Total Points Available</h3>
                  <p className="text-2xl font-bold">
                    {game.challenges.reduce((sum, challenge) => sum + challenge.points, 0)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">Challenges</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {game.challenges.map((challenge) => (
            <Card key={challenge.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold">{challenge.title}</h3>
                  <Badge variant="secondary">{challenge.points} pts</Badge>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {challenge.description}
                </p>
                
                {challenge.timeLimit && (
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Clock className="h-4 w-4 mr-1" />
                    Time limit: {Math.floor(challenge.timeLimit / 60)}:
                    {(challenge.timeLimit % 60).toString().padStart(2, '0')}
                  </div>
                )}
                
                <div>
                  <Link to={`/games/${game.id}/${challenge.id}`} className="w-full">
                    <Button className="w-full">
                      Start Challenge
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
