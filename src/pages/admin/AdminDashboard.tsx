
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Users, Award, Calendar, Play, Pause, Clock, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';

const AdminDashboard = () => {
  const stats = [
    {
      title: 'Active Games',
      value: '3',
      description: '2 in progress, 1 about to start',
      icon: Trophy,
      color: 'text-blue-500',
    },
    {
      title: 'Total Teams',
      value: '24',
      description: '6 new this week',
      icon: Users,
      color: 'text-indigo-500',
    },
    {
      title: 'Challenges',
      value: '42',
      description: 'Across 9 game types',
      icon: Award,
      color: 'text-purple-500',
    },
    {
      title: 'Upcoming Events',
      value: '7',
      description: 'Next event in 2 days',
      icon: Calendar,
      color: 'text-pink-500',
    },
  ];

  const liveMatches = [
    {
      id: 1,
      teamA: 'Team Alpha',
      teamB: 'Team Byte',
      game: 'Data Structure Challenge',
      timeRemaining: 756, // in seconds
      totalTime: 1800, // 30 minutes in seconds
      level: 'Advanced',
      language: 'Python',
      status: 'in-progress',
    },
    {
      id: 2,
      teamA: 'Binary Beasts',
      teamB: 'Code Ninjas',
      game: 'Find the Error',
      timeRemaining: 1245,
      totalTime: 1800,
      level: 'Intermediate',
      language: 'JavaScript',
      status: 'in-progress',
    },
    {
      id: 3,
      teamA: 'Algo Avengers',
      teamB: 'Syntax Squad',
      game: 'Complete the Code',
      timeRemaining: 902,
      totalTime: 1200,
      level: 'PhD',
      language: 'Java',
      status: 'scheduled',
      scheduledStart: new Date(Date.now() + 10 * 60 * 1000), // 10 minutes from now
    },
  ];

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handlePauseMatch = (id: number) => {
    toast.info(`Match #${id} has been paused`, {
      description: 'You can resume it at any time.',
    });
  };

  const handleResumeMatch = (id: number) => {
    toast.success(`Match #${id} has been resumed`, {
      description: 'The timer is now counting down again.',
    });
  };

  const handleStartMatch = (id: number) => {
    toast.success(`Match #${id} has been started`, {
      description: 'The match is now live.',
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Monitor and manage ongoing competitions and festival activities.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Live Matches</CardTitle>
          <CardDescription>Manage currently running and upcoming matches</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {liveMatches.map((match) => (
              <div key={match.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">{match.game}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">{match.level}</span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{match.language}</span>
                    {match.status === 'in-progress' ? (
                      <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-500/20 px-2.5 py-0.5 text-xs font-medium text-green-600 dark:text-green-400">
                        <span className="mr-1 h-1.5 w-1.5 rounded-full bg-green-500"></span>
                        Live
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-500/20 px-2.5 py-0.5 text-xs font-medium text-blue-600 dark:text-blue-400">
                        <span className="mr-1 h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                        Scheduled
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="font-semibold">{match.teamA}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">VS</div>
                    {match.status === 'in-progress' ? (
                      <div className="flex items-center justify-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {formatTime(match.timeRemaining)} remaining
                      </div>
                    ) : (
                      <div className="flex items-center justify-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        Starts in{' '}
                        {Math.round(
                          (match.scheduledStart.getTime() - Date.now()) / (60 * 1000)
                        )}{' '}
                        minutes
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">{match.teamB}</div>
                  </div>
                </div>

                {match.status === 'in-progress' && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Time elapsed</span>
                      <span>
                        {formatTime(match.totalTime - match.timeRemaining)} /{' '}
                        {formatTime(match.totalTime)}
                      </span>
                    </div>
                    <Progress
                      value={((match.totalTime - match.timeRemaining) / match.totalTime) * 100}
                      className="h-2"
                    />
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <Button variant="outline" size="sm">
                    <Activity className="h-4 w-4 mr-2" />
                    View Details
                  </Button>

                  <div className="flex gap-2">
                    {match.status === 'in-progress' ? (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handlePauseMatch(match.id)}
                      >
                        <Pause className="h-4 w-4 mr-2" />
                        Pause
                      </Button>
                    ) : match.status === 'scheduled' ? (
                      <Button
                        size="sm"
                        variant="default"
                        onClick={() => handleStartMatch(match.id)}
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Start Now
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        variant="default"
                        onClick={() => handleResumeMatch(match.id)}
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Resume
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <Button variant="outline" className="w-full">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule New Match
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
