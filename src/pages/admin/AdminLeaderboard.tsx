
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { topTeams } from '@/data/matches';
import { Medal, Search, Trophy, Download, FileSpreadsheet, Award } from 'lucide-react';
import { toast } from 'sonner';

const AdminLeaderboard = () => {
  const [filterValue, setFilterValue] = useState('');
  const [sortMethod, setSortMethod] = useState('score');
  
  // Enhanced teams with more data for admin view
  const enhancedTeams = topTeams.map(team => ({
    ...team,
    gamesPlayed: Math.floor(Math.random() * 10) + 5,
    winRate: `${Math.floor(Math.random() * 60) + 40}%`,
    lastActive: new Date(Date.now() - Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000)).toLocaleDateString(),
  }));
  
  const filteredTeams = enhancedTeams.filter(team => 
    team.name.toLowerCase().includes(filterValue.toLowerCase())
  );
  
  const sortedTeams = [...filteredTeams].sort((a, b) => {
    if (sortMethod === 'score') {
      return b.score - a.score;
    } else if (sortMethod === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortMethod === 'gamesPlayed') {
      return b.gamesPlayed - a.gamesPlayed;
    }
    return 0;
  });

  const handleExportLeaderboard = () => {
    toast.success('Leaderboard data exported successfully');
  };

  const handleManualUpdate = (teamId: string, points: number) => {
    toast.success(`Team score adjusted by ${points > 0 ? '+' : ''}${points} points`);
  };
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Leaderboard Management</h1>
        <p className="text-muted-foreground">
          Monitor team rankings and manage scores
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Top Team</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">{enhancedTeams[0]?.name}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Score: {enhancedTeams[0]?.score}
                </p>
              </div>
              <Trophy className="h-8 w-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Teams</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">{enhancedTeams.length}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Active in leaderboard
                </p>
              </div>
              <Award className="h-8 w-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">
                  {Math.round(enhancedTeams.reduce((acc, team) => acc + team.score, 0) / enhancedTeams.length)}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Points per team
                </p>
              </div>
              <Medal className="h-8 w-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Matches</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold">
                  {enhancedTeams.reduce((acc, team) => acc + team.gamesPlayed, 0)}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Completed games
                </p>
              </div>
              <FileSpreadsheet className="h-8 w-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div>
            <CardTitle>Team Rankings</CardTitle>
            <CardDescription>Current leaderboard standings and team scores</CardDescription>
          </div>
          <Button onClick={handleExportLeaderboard}>
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <div className="relative flex-grow">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Filter teams..."
                className="pl-8"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
              />
            </div>
            <div className="flex-shrink-0 w-full md:w-[200px]">
              <Select value={sortMethod} onValueChange={setSortMethod}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="score">Sort by Score</SelectItem>
                  <SelectItem value="name">Sort by Name</SelectItem>
                  <SelectItem value="gamesPlayed">Sort by Games Played</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">Rank</TableHead>
                  <TableHead>Team</TableHead>
                  <TableHead>Members</TableHead>
                  <TableHead>Score</TableHead>
                  <TableHead>Games Played</TableHead>
                  <TableHead>Win Rate</TableHead>
                  <TableHead>Last Active</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedTeams.map((team, index) => (
                  <TableRow key={team.id}>
                    <TableCell className="font-medium">
                      {index + 1}
                      {index < 3 && (
                        <span className="ml-1">
                          {index === 0 && "🥇"}
                          {index === 1 && "🥈"}
                          {index === 2 && "🥉"}
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="font-medium">{team.name}</TableCell>
                    <TableCell>{team.members}</TableCell>
                    <TableCell>{team.score}</TableCell>
                    <TableCell>{team.gamesPlayed}</TableCell>
                    <TableCell>{team.winRate}</TableCell>
                    <TableCell>{team.lastActive}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => handleManualUpdate(team.id, 5)}
                        >
                          +5
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleManualUpdate(team.id, -5)}
                        >
                          -5
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

export default AdminLeaderboard;
