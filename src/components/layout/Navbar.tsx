
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Trophy, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Trophy className="h-8 w-8 text-festival-primary" />
          <span className="text-xl font-bold gradient-text">LUCSC Festival</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/live" className="text-foreground/80 hover:text-festival-primary transition-colors">
            Live Matches
          </Link>
          <Link to="/games" className="text-foreground/80 hover:text-festival-primary transition-colors">
            Games
          </Link>
          <Link to="/leaderboard" className="text-foreground/80 hover:text-festival-primary transition-colors">
            Leaderboard
          </Link>
          <Link to="/faq" className="text-foreground/80 hover:text-festival-primary transition-colors">
            FAQ
          </Link>
        </div>

        {/* Right Section - Theme Toggle and Auth */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Link to="/admin">
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Users className="mr-2 h-4 w-4" />
              Admin
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t p-4">
          <div className="flex flex-col space-y-4">
            <Link
              to="/live"
              className="px-4 py-2 text-foreground/80 hover:text-festival-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Live Matches
            </Link>
            <Link
              to="/games"
              className="px-4 py-2 text-foreground/80 hover:text-festival-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Games
            </Link>
            <Link
              to="/leaderboard"
              className="px-4 py-2 text-foreground/80 hover:text-festival-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Leaderboard
            </Link>
            <Link
              to="/faq"
              className="px-4 py-2 text-foreground/80 hover:text-festival-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              to="/admin"
              className="px-4 py-2 text-festival-primary font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Admin Dashboard
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
