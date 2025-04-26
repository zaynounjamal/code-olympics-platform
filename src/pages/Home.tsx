
import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Code, BarChart, LayoutGrid, Calendar, Users, Trophy, Gamepad2, Clock, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-festival-background">
        <div className="absolute inset-0 bg-code-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="outline" className="mb-4 px-4 py-1 text-base">Aug 15-25, 2025</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              LUCSC Coding Festival
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-10">
              The annual competitive programming platform where coders of all levels come together to challenge, learn, and excel in a multi-day coding celebration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/live">
                <Button className="festival-button">
                  Watch Live Matches
                </Button>
              </Link>
              <Link to="/games">
                <Button variant="outline" className="px-6 py-3 rounded-full">
                  Explore Games
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Festival Info */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">About the Festival</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">What is LUCSC Coding Festival?</h3>
              <p className="text-muted-foreground mb-6">
                The LUCSC Coding Festival is an annual event hosted by Lincoln University Computer Science Club (LUCSC) that brings together coding enthusiasts, students, professionals, and researchers for a week-long celebration of programming skills, problem-solving, and collaborative learning.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="bg-primary/10 p-2 rounded-full h-fit">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Multi-Day Event</h4>
                    <p className="text-sm text-muted-foreground">A 10-day celebration of coding with scheduled challenges and competitions.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="bg-primary/10 p-2 rounded-full h-fit">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Open to All</h4>
                    <p className="text-sm text-muted-foreground">From beginners to experts, everyone is welcome to participate and learn.</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="bg-primary/10 p-2 rounded-full h-fit">
                    <Trophy className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Prizes & Recognition</h4>
                    <p className="text-sm text-muted-foreground">Win awards, certificates, and recognition for your coding skills.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="mb-2">
                    <Code className="h-8 w-8 mx-auto mb-2 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">50+</h3>
                  <p className="text-sm text-muted-foreground">Coding Challenges</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="mb-2">
                    <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">500+</h3>
                  <p className="text-sm text-muted-foreground">Participants</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="mb-2">
                    <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">5+</h3>
                  <p className="text-sm text-muted-foreground">Programming Languages</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="mb-2">
                    <Award className="h-8 w-8 mx-auto mb-2 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">10+</h3>
                  <p className="text-sm text-muted-foreground">Prizes & Awards</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Festival Phases */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Festival Phases</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="mb-4 inline-flex bg-primary/10 p-3 rounded-full">
                  <Gamepad2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Phase 1: Open Challenges</h3>
                <p className="text-muted-foreground mb-6">
                  Open to everyone without registration. Dive straight into coding challenges, practice problems, 
                  and skill-building exercises to sharpen your programming abilities.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                      <CheckIcon className="h-3 w-3 text-white" />
                    </div>
                    <span>No registration required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                      <CheckIcon className="h-3 w-3 text-white" />
                    </div>
                    <span>Practice at your own pace</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center">
                      <CheckIcon className="h-3 w-3 text-white" />
                    </div>
                    <span>Multiple difficulty levels</span>
                  </div>
                </div>
                
                <Link to="/games">
                  <Button className="w-full">
                    Start Phase 1 Challenges
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-primary/10">
              <CardContent className="p-8">
                <div className="mb-4 inline-flex bg-primary/10 p-3 rounded-full">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Phase 2: Tournament</h3>
                <p className="text-muted-foreground mb-6">
                  The official competition phase where registered participants compete in timed 
                  coding challenges, algorithmic puzzles, and team-based programming contests.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-amber-500 flex items-center justify-center">
                      <Clock className="h-3 w-3 text-white" />
                    </div>
                    <span>Registration required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-amber-500 flex items-center justify-center">
                      <Clock className="h-3 w-3 text-white" />
                    </div>
                    <span>Scheduled competition times</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-amber-500 flex items-center justify-center">
                      <Clock className="h-3 w-3 text-white" />
                    </div>
                    <span>Official scoring and prizes</span>
                  </div>
                </div>
                
                <Button variant="outline" disabled className="w-full">
                  Coming Soon (Aug 20-25)
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Match Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            <div className="inline-flex items-center mb-6">
              <span className="live-badge mr-2">LIVE</span>
              <h2 className="text-2xl font-bold">Current Match</h2>
            </div>
            
            <div className="bg-background rounded-xl shadow-lg p-6 w-full max-w-2xl">
              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">Team Alpha</div>
                  <div className="text-sm text-muted-foreground">3 Members</div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="text-lg font-medium mb-2">Data Structure Challenge</div>
                  <div className="text-4xl font-bold mb-2">VS</div>
                  <div className="bg-muted/50 rounded-lg px-3 py-1 text-sm">
                    12:47 remaining
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">Team Byte</div>
                  <div className="text-sm text-muted-foreground">3 Members</div>
                </div>
              </div>
            </div>

            <Link to="/live" className="mt-8 text-festival-primary hover:underline">
              View all live matches
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Games</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Complete the Code',
                description: 'Fill in the missing code to make the function work as expected.',
                icon: Code,
              },
              {
                title: 'Data Structure Challenges',
                description: 'Solve complex problems using the right data structures.',
                icon: LayoutGrid,
              },
              {
                title: 'Find the Error',
                description: 'Debug and fix issues in existing code snippets.',
                icon: Award,
              },
            ].map((game, index) => (
              <div key={index} className="game-card">
                <div className="mb-4 p-3 bg-muted/30 rounded-full w-fit">
                  <game.icon className="h-6 w-6 text-festival-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
                <p className="text-muted-foreground mb-6">{game.description}</p>
                <Link to="/games" className="text-festival-primary hover:underline text-sm font-medium">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/games">
              <Button className="festival-button">View All Games</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Festival Schedule</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/30"></div>
              
              {/* Timeline events */}
              <div className="space-y-8">
                <TimelineEvent 
                  date="August 15, 2025" 
                  title="Opening Ceremony" 
                  description="Official opening of the LUCSC Coding Festival with keynote speeches and demonstrations."
                />
                
                <TimelineEvent 
                  date="August 15-19, 2025" 
                  title="Phase 1: Open Challenges" 
                  description="Free access to all practice challenges and exercises for participants to warm up their skills."
                />
                
                <TimelineEvent 
                  date="August 20, 2025" 
                  title="Team Registration Deadline" 
                  description="Last day to register teams for the competitive phase of the festival."
                />
                
                <TimelineEvent 
                  date="August 20-24, 2025" 
                  title="Phase 2: Tournament" 
                  description="Official competition with daily challenges, team contests, and live coding battles."
                />
                
                <TimelineEvent 
                  date="August 25, 2025" 
                  title="Finals & Closing Ceremony" 
                  description="Final round of competition followed by awards ceremony and celebration."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboard Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Leaderboard</h2>
              <p className="text-muted-foreground mb-6">
                Check out the current standings of participating teams. Who will claim the top spot?
              </p>
              <Link to="/leaderboard">
                <Button className="festival-button">View Full Leaderboard</Button>
              </Link>
            </div>
            <div className="md:w-1/2 bg-background rounded-xl shadow p-6 self-stretch">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Top Teams</h3>
                <BarChart className="h-5 w-5 text-festival-primary" />
              </div>
              
              {[
                { rank: 1, name: 'Code Ninjas', score: 520 },
                { rank: 2, name: 'Binary Beasts', score: 485 },
                { rank: 3, name: 'Algo Avengers', score: 470 },
              ].map((team) => (
                <div 
                  key={team.rank}
                  className="flex items-center justify-between py-3 border-b last:border-0"
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-festival-primary/10 flex items-center justify-center mr-3">
                      <span className="font-semibold text-festival-primary">{team.rank}</span>
                    </div>
                    <span>{team.name}</span>
                  </div>
                  <span className="font-semibold">{team.score}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper components
const CheckIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="4" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const TimelineEvent = ({ 
  date, 
  title, 
  description 
}: { 
  date: string; 
  title: string; 
  description: string;
}) => (
  <div className="relative pl-12">
    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
      <Calendar className="h-4 w-4 text-white" />
    </div>
    <div>
      <div className="text-sm text-muted-foreground">{date}</div>
      <h3 className="text-lg font-bold mt-1">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </div>
);

export default Home;
