
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Award, Code, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const LiveMatches = () => {
  const matches = [
    {
      id: 1,
      teamA: { name: 'Team Alpha', members: 3 },
      teamB: { name: 'Team Byte', members: 3 },
      game: 'Data Structure Challenge',
      timeRemaining: 756, // in seconds
      totalTime: 1800, // 30 minutes in seconds
      level: 'Advanced',
      language: 'Python'
    },
    {
      id: 2,
      teamA: { name: 'Binary Beasts', members: 4 },
      teamB: { name: 'Code Ninjas', members: 4 },
      game: 'Find the Error',
      timeRemaining: 1245,
      totalTime: 1800,
      level: 'Intermediate',
      language: 'JavaScript'
    },
    {
      id: 3,
      teamA: { name: 'Algo Avengers', members: 3 },
      teamB: { name: 'Syntax Squad', members: 3 },
      game: 'Complete the Code',
      timeRemaining: 902,
      totalTime: 1200,
      level: 'PhD',
      language: 'Java'
    }
  ];

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Live Matches</h1>
      <p className="text-muted-foreground mb-8">
        Watch ongoing matches in real-time and see teams compete.
      </p>

      <Tabs defaultValue="all">
        <TabsList className="mb-8">
          <TabsTrigger value="all">All Matches</TabsTrigger>
          <TabsTrigger value="beginner">Beginner</TabsTrigger>
          <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
          <TabsTrigger value="phd">PhD Level</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          {matches.map((match) => (
            <Card key={match.id} className="overflow-hidden">
              <CardHeader className="border-b bg-muted/30 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="live-badge mr-2">LIVE</span>
                    <CardTitle className="text-xl">{match.game}</CardTitle>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Award className="h-4 w-4" />
                      <span>{match.level}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Code className="h-4 w-4" />
                      <span>{match.language}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">{match.teamA.name}</div>
                    <div className="flex items-center justify-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{match.teamA.members} Members</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="text-4xl font-bold mb-4">VS</div>
                    <div className="w-full max-w-xs space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Time Remaining:</span>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-festival-primary" />
                          <span className="font-medium">{formatTime(match.timeRemaining)}</span>
                        </div>
                      </div>
                      <Progress 
                        value={(match.timeRemaining / match.totalTime) * 100} 
                        className="h-2"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">{match.teamB.name}</div>
                    <div className="flex items-center justify-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{match.teamB.members} Members</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="beginner">
          <div className="py-16 text-center">
            <p className="text-muted-foreground">No live beginner matches at the moment.</p>
          </div>
        </TabsContent>
        
        <TabsContent value="intermediate">
          {matches.filter(m => m.level === 'Intermediate').map((match) => (
            // Same match card layout as above
            <Card key={match.id} className="overflow-hidden mb-6">
              {/* Card content as above */}
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="advanced">
          {matches.filter(m => m.level === 'Advanced').map((match) => (
            // Same match card layout as above
            <Card key={match.id} className="overflow-hidden mb-6">
              {/* Card content as above */}
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="phd">
          {matches.filter(m => m.level === 'PhD').map((match) => (
            // Same match card layout as above
            <Card key={match.id} className="overflow-hidden mb-6">
              {/* Card content as above */}
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LiveMatches;
