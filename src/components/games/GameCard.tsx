
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GameType } from '@/data/gameTypes';
import { Trophy, Gamepad2, Award } from 'lucide-react';

interface GameCardProps {
  game: GameType;
  onPlay?: (gameId: string) => void;
}

const iconMap = {
  Code: Gamepad2,
  LayoutGrid: Trophy,
  Award: Award,
};

export const GameCard = ({ game, onPlay }: GameCardProps) => {
  const IconComponent = iconMap[game.icon];

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <IconComponent className="h-6 w-6 text-primary" />
          <CardTitle className="text-xl">{game.title}</CardTitle>
        </div>
        <p className="text-sm text-muted-foreground">{game.description}</p>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="space-y-4 flex-1">
          <div>
            <h4 className="text-sm font-semibold mb-2">Challenges</h4>
            <ul className="space-y-2">
              {game.challenges.map((challenge, index) => (
                <li key={index} className="text-sm">
                  <div className="flex justify-between items-start">
                    <span className="font-medium">{challenge.title}</span>
                    <Badge variant="secondary">{challenge.points} pts</Badge>
                  </div>
                  <p className="text-muted-foreground text-xs mt-1">
                    {challenge.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-2">Difficulty Levels</h4>
            <div className="flex flex-wrap gap-2">
              {game.difficultyLevels.map((level) => (
                <Badge key={level} variant="outline">
                  {level}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Button 
            className="w-full" 
            onClick={() => onPlay?.(game.id)}
          >
            <Gamepad2 className="mr-2 h-4 w-4" />
            Play Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
