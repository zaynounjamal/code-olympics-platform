
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Trophy, Gamepad2, Users, Clock, Star, Calendar } from 'lucide-react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-background">
      <div className="text-center space-y-12">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            LUCSC Coding Festival
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            The annual competitive programming platform where coders of all levels come together to challenge, learn, and excel in a multi-day coding celebration.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 md:space-x-4">
            <Link to="/games">
              <Button size="lg" className="bg-festival-primary hover:bg-festival-secondary transition-colors w-full md:w-auto">
                <Gamepad2 className="mr-2 h-5 w-5" />
                Explore Games
              </Button>
            </Link>
            <Link to="/live">
              <Button size="lg" variant="outline" className="w-full md:w-auto">
                <Trophy className="mr-2 h-5 w-5" />
                Watch Live Matches
              </Button>
            </Link>
          </div>
        </div>

        {/* Festival Details */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="bg-secondary/10 p-6 rounded-xl">
            <Calendar className="h-12 w-12 text-festival-primary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">5-Day Event</h3>
            <p className="text-muted-foreground">
              Join us for an exciting 5-day coding journey filled with challenges, competitions, and learning.
            </p>
          </div>
          <div className="bg-secondary/10 p-6 rounded-xl">
            <Users className="h-12 w-12 text-festival-secondary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-muted-foreground">
              Connect with developers, participate in challenges, and grow together in our supportive community.
            </p>
          </div>
          <div className="bg-secondary/10 p-6 rounded-xl">
            <Trophy className="h-12 w-12 text-festival-accent mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Exciting Rewards</h3>
            <p className="text-muted-foreground">
              Win prizes, badges, and recognition for your coding prowess and problem-solving skills.
            </p>
          </div>
          <div className="bg-secondary/10 p-6 rounded-xl">
            <Star className="h-12 w-12 text-festival-primary mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Multiple Categories</h3>
            <p className="text-muted-foreground">
              From algorithms to web development, participate in various coding categories.
            </p>
          </div>
        </div>

        {/* Festival Highlights */}
        <div className="max-w-4xl mx-auto bg-secondary/5 p-8 rounded-2xl border border-secondary/20">
          <h2 className="text-3xl font-bold mb-6">Festival Highlights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Clock className="h-5 w-5 text-festival-primary" />
                Phase 1: Open Challenges
              </h3>
              <p className="text-muted-foreground">
                Start coding immediately with our open challenges. Practice and improve your skills with no registration required.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Trophy className="h-5 w-5 text-festival-secondary" />
                Phase 2: Competition
              </h3>
              <p className="text-muted-foreground">
                Register to participate in our main competition phase with timed challenges and live rankings.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Test Your Skills?</h2>
          <p className="text-muted-foreground mb-6">
            Join thousands of developers in this exciting coding festival. Start with Phase 1 challenges or register for Phase 2 competitions.
          </p>
          <Link to="/games">
            <Button size="lg" className="bg-festival-primary hover:bg-festival-secondary transition-colors">
              Start Coding Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
