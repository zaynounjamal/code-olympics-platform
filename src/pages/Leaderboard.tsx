
import React from 'react';
import { Trophy, Medal, Award, Filter } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Leaderboard = () => {
  const teams = [
    {
      rank: 1,
      name: 'Code Ninjas',
      members: ['Alex Kim', 'Jamie Smith', 'Jordan Lee'],
      score: 520,
      gamesPlayed: 15,
      winRate: 80,
    },
    {
      rank: 2,
      name: 'Binary Beasts',
      members: ['Taylor Wong', 'Sam Chen', 'Morgan Hill'],
      score: 485,
      gamesPlayed: 14,
      winRate: 71,
    },
    {
      rank: 3,
      name: 'Algo Avengers',
      members: ['Robin Park', 'Casey Johnson', 'Avery Williams'],
      score: 470,
      gamesPlayed: 16,
      winRate: 62,
    },
    {
      rank: 4,
      name: 'Syntax Squad',
      members: ['Riley Thompson', 'Quinn Martinez', 'Jesse Brown'],
      score: 455,
      gamesPlayed: 17,
      winRate: 59,
    },
    {
      rank: 5,
      name: 'Data Dragons',
      members: ['Skyler Davis', 'Jordan Taylor', 'Ray Wilson'],
      score: 440,
      gamesPlayed: 15,
      winRate: 60,
    },
    {
      rank: 6,
      name: 'Logic Loop',
      members: ['Ash Rodriguez', 'Dakota Clark', 'Reese Lewis'],
      score: 425,
      gamesPlayed: 13,
      winRate: 69,
    },
    {
      rank: 7,
      name: 'Error Handlers',
      members: ['Harper Adams', 'Rowan Allen', 'Charlie Scott'],
      score: 400,
      gamesPlayed: 12,
      winRate: 58,
    },
    {
      rank: 8,
      name: 'Bug Hunters',
      members: ['Parker Young', 'Ellis Walker', 'Finley King'],
      score: 385,
      gamesPlayed: 14,
      winRate: 50,
    },
    {
      rank: 9,
      name: 'Query Queens',
      members: ['Blake Green', 'Drew Hall', 'Hayden Moore'],
      score: 370,
      gamesPlayed: 13,
      winRate: 46,
    },
    {
      rank: 10,
      name: 'Stack Smashers',
      members: ['Emerson White', 'Kendall Baker', 'London Evans'],
      score: 355,
      gamesPlayed: 15,
      winRate: 40,
    },
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 3:
        return <Award className="h-5 w-5 text-amber-700" />;
      default:
        return <span className="text-muted-foreground">{rank}</span>;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Leaderboard</h1>
      <p className="text-muted-foreground mb-8">
        View the current standings of all participating teams.
      </p>

      {/* Top 3 teams highlight */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {teams.slice(0, 3).map((team, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 text-center ${
              index === 0
                ? 'bg-gradient-to-br from-yellow-500/20 to-amber-600/20 border border-yellow-500/40'
                : index === 1
                ? 'bg-gradient-to-br from-gray-300/20 to-gray-500/20 border border-gray-400/40'
                : 'bg-gradient-to-br from-amber-600/20 to-amber-800/20 border border-amber-700/40'
            }`}
          >
            <div
              className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                index === 0
                  ? 'bg-yellow-500/20'
                  : index === 1
                  ? 'bg-gray-400/20'
                  : 'bg-amber-700/20'
              }`}
            >
              {index === 0 ? (
                <Trophy className="h-8 w-8 text-yellow-500" />
              ) : index === 1 ? (
                <Medal className="h-8 w-8 text-gray-400" />
              ) : (
                <Award className="h-8 w-8 text-amber-700" />
              )}
            </div>

            <h3 className="text-xl font-bold">{team.name}</h3>
            <p className="text-muted-foreground text-sm mb-2">
              {team.members.join(', ')}
            </p>
            <p className="text-2xl font-bold">{team.score} pts</p>
            <div className="text-sm mt-2 text-muted-foreground">
              {team.gamesPlayed} games played • {team.winRate}% win rate
            </div>
          </div>
        ))}
      </div>

      {/* Filter section */}
      <div className="flex flex-wrap gap-4 mb-6 items-end">
        <div className="flex-1 min-w-[200px]">
          <label className="text-sm font-medium block mb-2">Filter by Game Type</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="All Games" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Games</SelectItem>
              <SelectItem value="complete">Complete the Code</SelectItem>
              <SelectItem value="find">Find the Error</SelectItem>
              <SelectItem value="css">CSS Games</SelectItem>
              <SelectItem value="data">Data Structure Challenges</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1 min-w-[200px]">
          <label className="text-sm font-medium block mb-2">Filter by Level</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="All Levels" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
              <SelectItem value="phd">PhD Level</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1 min-w-[200px]">
          <label className="text-sm font-medium block mb-2">Search Teams</label>
          <Input placeholder="Search by team name..." />
        </div>

        <Button variant="outline" className="flex items-center gap-1">
          <Filter className="h-4 w-4" />
          Reset Filters
        </Button>
      </div>

      {/* Main leaderboard table */}
      <div className="rounded-lg border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[60px]">Rank</TableHead>
              <TableHead>Team</TableHead>
              <TableHead>Members</TableHead>
              <TableHead className="text-right">Score</TableHead>
              <TableHead className="text-right">Games Played</TableHead>
              <TableHead className="text-right">Win Rate</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teams.map((team) => (
              <TableRow key={team.rank} className="hover:bg-muted/50">
                <TableCell className="font-medium">
                  <div className="flex items-center justify-center w-8 h-8">
                    {getRankIcon(team.rank)}
                  </div>
                </TableCell>
                <TableCell className="font-semibold">{team.name}</TableCell>
                <TableCell className="text-muted-foreground">
                  {team.members.join(', ')}
                </TableCell>
                <TableCell className="text-right font-semibold">{team.score}</TableCell>
                <TableCell className="text-right">{team.gamesPlayed}</TableCell>
                <TableCell className="text-right">{team.winRate}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Leaderboard;
