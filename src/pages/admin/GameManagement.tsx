
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { gameTypes } from '@/data/gameTypes';
import { Calendar, Play, Pause, Timer } from 'lucide-react';
import { toast } from 'sonner';

const GameManagement = () => {
  const handleStartGame = (gameId: string) => {
    toast.success('Game started successfully');
  };

  const handlePauseGame = (gameId: string) => {
    toast.info('Game paused');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Game Management</h1>
        <p className="text-muted-foreground">
          Manage and monitor all ongoing and upcoming games
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Active Games</CardTitle>
            <CardDescription>Currently running games</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Scheduled Games</CardTitle>
            <CardDescription>Upcoming games</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">5</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Games</CardTitle>
            <CardDescription>All available game types</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{gameTypes.length}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Game List</CardTitle>
          <CardDescription>All available game types and their status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Game</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Difficulty Levels</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {gameTypes.map((game) => (
                  <TableRow key={game.id}>
                    <TableCell className="font-medium">{game.title}</TableCell>
                    <TableCell>{game.category}</TableCell>
                    <TableCell>{game.difficultyLevels.join(', ')}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleStartGame(game.id)}
                        >
                          <Play className="h-4 w-4 mr-1" />
                          Start
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handlePauseGame(game.id)}
                        >
                          <Pause className="h-4 w-4 mr-1" />
                          Pause
                        </Button>
                        <Button variant="outline" size="sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          Schedule
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GameManagement;
