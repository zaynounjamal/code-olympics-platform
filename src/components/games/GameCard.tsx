
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { GameType } from '@/data/gameTypes';
import { Trophy, Gamepad2, Award, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GameCardProps {
  game: GameType;
  onPlay?: (gameId: string) => void;
  showChallenges?: boolean;
}

const iconMap = {
  Code: Gamepad2,
  LayoutGrid: Trophy,
  Award: Award,
};

export const GameCard = ({ game, onPlay, showChallenges = true }: GameCardProps) => {
  const IconComponent = iconMap[game.icon];

  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <IconComponent className="h-6 w-6 text-primary" />
          <CardTitle className="text-xl">{game.title}</CardTitle>
        </div>
        <div className="flex flex-wrap gap-1 mb-2">
          <Badge variant="outline">{game.phase}</Badge>
          {game.difficultyLevels.map((level) => (
            <Badge key={level} variant={level === 'Monster' ? 'destructive' : 'secondary'}>
              {level}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">{game.description}</p>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="space-y-4 flex-1">
          {showChallenges && (
            <div>
              <h4 className="text-sm font-semibold mb-2">Challenges</h4>
              <ul className="space-y-3">
                {game.challenges.slice(0, 3).map((challenge) => (
                  <li key={challenge.id} className="text-sm">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <span className="font-medium">{challenge.title}</span>
                        <p className="text-muted-foreground text-xs mt-1 line-clamp-1">
                          {challenge.description}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1 min-w-[80px] ml-2">
                        <Badge variant="secondary">{challenge.points} pts</Badge>
                        {challenge.timeLimit && (
                          <span className="text-xs text-muted-foreground flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {Math.floor(challenge.timeLimit / 60)}:{(challenge.timeLimit % 60).toString().padStart(2, '0')}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="mt-1">
                      <Link to={`/games/${game.id}/${challenge.id}`}>
                        <Button variant="ghost" size="sm" className="w-full h-7 justify-between text-xs">
                          Play Challenge
                          <ArrowRight className="h-3 w-3" />
                        </Button>
                      </Link>
                    </div>
                  </li>
                ))}
                {game.challenges.length > 3 && (
                  <li className="text-center text-xs text-muted-foreground pt-1">
                    +{game.challenges.length - 3} more challenges
                  </li>
                )}
              </ul>
            </div>
          )}
          
          <div>
            <h4 className="text-sm font-semibold mb-2">Languages</h4>
            <div className="flex flex-wrap gap-1">
              {game.programmingLanguages.map((language) => (
                <Badge key={language} variant="outline" className="text-xs">
                  {language}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Link to={`/games/${game.id}`} className="w-full">
            <Button 
              className="w-full" 
              onClick={() => onPlay?.(game.id)}
            >
              <Gamepad2 className="mr-2 h-4 w-4" />
              Play Now
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
