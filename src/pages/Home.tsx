
import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Code, BarChart, ChessKnight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-festival-background">
        <div className="absolute inset-0 bg-code-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              LUCSC Coding Festival
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-10">
              A competitive programming platform where coders of all levels come together to challenge, learn, and excel.
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

      {/* Current Match Section */}
      <section className="py-12 bg-muted/30">
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
                icon: ChessKnight,
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

      {/* Leaderboard Preview */}
      <section className="py-20 bg-muted/30">
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

export default Home;
