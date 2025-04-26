
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Trophy, Gamepad2, Users, Clock, Star, Calendar, Code, Server, Database, BookOpen, Laptop } from 'lucide-react';

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
              <Button size="lg" variant="outline" className="w-full md:w-auto border border-muted dark:border-muted">
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

        {/* Programming Languages Section */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Programming Languages</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['JavaScript', 'Python', 'Java', 'C++', 'TypeScript', 'Go'].map((lang) => (
              <div key={lang} className="bg-secondary/5 border border-secondary/10 p-4 rounded-lg text-center">
                <Code className="h-8 w-8 mb-2 mx-auto text-festival-secondary" />
                <h3 className="font-medium">{lang}</h3>
              </div>
            ))}
          </div>
          <p className="mt-4 text-muted-foreground">
            And many more including Ruby, C#, Rust, PHP, Kotlin, SQL and R!
          </p>
        </div>

        {/* Technology Categories */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Technology Categories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-muted bg-card rounded-xl p-6">
              <Server className="h-10 w-10 text-festival-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p className="text-muted-foreground mb-4">
                Build robust APIs, optimize database queries, and design server architectures.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-secondary/20 px-2 py-1 rounded">Node.js</span>
                <span className="text-xs bg-secondary/20 px-2 py-1 rounded">Django</span>
                <span className="text-xs bg-secondary/20 px-2 py-1 rounded">Spring Boot</span>
              </div>
            </div>
            <div className="border border-muted bg-card rounded-xl p-6">
              <Laptop className="h-10 w-10 text-festival-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Frontend Frameworks</h3>
              <p className="text-muted-foreground mb-4">
                Create responsive UIs and dynamic user experiences with modern frontend technologies.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-secondary/20 px-2 py-1 rounded">React</span>
                <span className="text-xs bg-secondary/20 px-2 py-1 rounded">Vue</span>
                <span className="text-xs bg-secondary/20 px-2 py-1 rounded">Angular</span>
              </div>
            </div>
            <div className="border border-muted bg-card rounded-xl p-6">
              <Database className="h-10 w-10 text-festival-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Database Systems</h3>
              <p className="text-muted-foreground mb-4">
                Master SQL optimization, NoSQL schema design, and database performance tuning.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-secondary/20 px-2 py-1 rounded">PostgreSQL</span>
                <span className="text-xs bg-secondary/20 px-2 py-1 rounded">MongoDB</span>
                <span className="text-xs bg-secondary/20 px-2 py-1 rounded">Redis</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Games Section */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Featured Games & Challenges</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-secondary/5 border border-secondary/20 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-festival-primary/10 p-2 rounded-lg">
                  <Code className="h-6 w-6 text-festival-primary" />
                </div>
                <h3 className="text-xl font-semibold">Frontend Framework Challenge</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Test your skills with popular frontend frameworks like React, Vue, and Angular.
                Build reusable components and implement complex UI interactions.
              </p>
              <Link to="/games/frontend-frameworks">
                <Button variant="outline" className="w-full">
                  View Challenges
                  <Trophy className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="bg-secondary/5 border border-secondary/20 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-festival-secondary/10 p-2 rounded-lg">
                  <BookOpen className="h-6 w-6 text-festival-secondary" />
                </div>
                <h3 className="text-xl font-semibold">Python Masterclass</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Demonstrate your Python prowess with data science, machine learning,
                and algorithmic challenges designed to test your analytical skills.
              </p>
              <Link to="/games/python-challenges">
                <Button variant="outline" className="w-full">
                  View Challenges
                  <Trophy className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
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
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-festival-accent" />
                  <span>Self-paced learning</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-festival-accent" />
                  <span>Instant feedback</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-festival-accent" />
                  <span>Multiple languages supported</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Trophy className="h-5 w-5 text-festival-secondary" />
                Phase 2: Competition
              </h3>
              <p className="text-muted-foreground">
                Register to participate in our main competition phase with timed challenges and live rankings.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-festival-accent" />
                  <span>Competitive leaderboards</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-festival-accent" />
                  <span>Advanced team challenges</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-festival-accent" />
                  <span>Industry expert judging</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Test Your Skills?</h2>
          <p className="text-muted-foreground mb-6">
            Join thousands of developers in this exciting coding festival. Start with Phase 1 challenges or register for Phase 2 competitions.
            With over 50+ challenges across 15+ programming languages and frameworks, there's something for every developer!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/games">
              <Button size="lg" className="bg-festival-primary hover:bg-festival-secondary transition-colors w-full">
                Start Coding Now
                <Code className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/leaderboard">
              <Button size="lg" variant="outline" className="w-full">
                View Leaderboard
                <Trophy className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
