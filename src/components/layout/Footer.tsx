
import React from 'react';
import { Link } from 'react-router-dom';
import { Trophy } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Trophy className="h-6 w-6 text-festival-primary" />
              <span className="text-lg font-bold gradient-text">LUCSC Festival</span>
            </div>
            <p className="text-sm text-muted-foreground">
              A competitive programming festival for coders of all skill levels.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-festival-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/live" className="text-sm text-muted-foreground hover:text-festival-primary">
                  Live Matches
                </Link>
              </li>
              <li>
                <Link to="/games" className="text-sm text-muted-foreground hover:text-festival-primary">
                  Games
                </Link>
              </li>
              <li>
                <Link to="/leaderboard" className="text-sm text-muted-foreground hover:text-festival-primary">
                  Leaderboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-sm text-muted-foreground hover:text-festival-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/rules" className="text-sm text-muted-foreground hover:text-festival-primary">
                  Rules
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-festival-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-festival-primary">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-festival-primary">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-festival-primary">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-festival-primary">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-festival-primary">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} LUCSC Festival. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
