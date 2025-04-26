
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Trophy, Gamepad2, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-background">
      <div className="text-center space-y-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            LUCSC Coding Festival
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            The annual competitive programming platform where coders of all levels come together to challenge, learn, and excel in a multi-day coding celebration.
          </p>
        </div>

        <div className="flex justify-center space-x-4">
          <Link to="/games">
            <Button className="bg-festival-primary hover:bg-festival-secondary transition-colors">
              <Gamepad2 className="mr-2 h-5 w-5" />
              Explore Games
            </Button>
          </Link>
          <Link to="/live">
            <Button variant="outline">
              <Trophy className="mr-2 h-5 w-5" />
              Watch Live Matches
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-secondary/10 p-6 rounded-xl">
            <Users className="h-12 w-12 text-festival-primary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-muted-foreground">
              Connect with developers, participate in challenges, and grow together.
            </p>
          </div>
          <div className="bg-secondary/10 p-6 rounded-xl">
            <Trophy className="h-12 w-12 text-festival-secondary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Exciting Rewards</h3>
            <p className="text-muted-foreground">
              Win prizes, badges, and recognition for your coding skills.
            </p>
          </div>
          <div className="bg-secondary/10 p-6 rounded-xl">
            <Gamepad2 className="h-12 w-12 text-festival-accent mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Diverse Challenges</h3>
            <p className="text-muted-foreground">
              From beginner to expert levels, there's a challenge for everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

