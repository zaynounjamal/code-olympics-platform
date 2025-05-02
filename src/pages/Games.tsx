
import React, { useState, useMemo } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Search, CheckSquare } from 'lucide-react';
import { GameCard } from '@/components/games/GameCard';
import { gameTypes } from '@/data/gameTypes';
import { toast } from 'sonner';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Games = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // Make all phases selected by default
  const [selectedPhases, setSelectedPhases] = useState<string[]>(['Phase 1', 'Phase 2']);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  
  const handlePlayGame = (gameId: string) => {
    const game = gameTypes.find(g => g.id === gameId);
    if (game) {
      toast.success(`Starting ${game.title}`, {
        description: "Preparing your challenge environment..."
      });
    }
  };

  // Get all unique programming languages
  const allLanguages = useMemo(() => {
    const languages = new Set<string>();
    gameTypes.forEach(game => {
      game.programmingLanguages.forEach(lang => languages.add(lang));
    });
    return Array.from(languages).sort();
  }, []);

  // Filter games based on search term and selected languages only (ignore phase filter)
  const filteredGames = useMemo(() => {
    return gameTypes.filter(game => {
      // Filter by search term
      const matchesSearch = searchTerm === '' || 
        game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.difficultyLevels.some(level => level.toLowerCase().includes(searchTerm.toLowerCase())) ||
        game.programmingLanguages.some(lang => lang.toLowerCase().includes(searchTerm.toLowerCase()));
      
      // Filter by selected languages
      const matchesLanguage = selectedLanguages.length === 0 || 
        game.programmingLanguages.some(lang => selectedLanguages.includes(lang));
      
      return matchesSearch && matchesLanguage;
    });
  }, [searchTerm, selectedLanguages]);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Game Library</h1>
      <p className="text-muted-foreground mb-8">
        Explore our collection of coding challenges across multiple languages and difficulty levels.
      </p>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            placeholder="Search games, languages, or difficulty levels..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-2">
                <CheckSquare className="h-4 w-4" />
                Languages
                {selectedLanguages.length > 0 && (
                  <Badge variant="secondary" className="ml-1 h-5 px-1">
                    {selectedLanguages.length}
                  </Badge>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              {allLanguages.map((language) => (
                <DropdownMenuCheckboxItem
                  key={language}
                  checked={selectedLanguages.includes(language)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setSelectedLanguages([...selectedLanguages, language]);
                    } else {
                      setSelectedLanguages(selectedLanguages.filter(l => l !== language));
                    }
                  }}
                >
                  {language}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {filteredGames.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No games match your search criteria</p>
        </div>
      ) : (
        <Tabs defaultValue="all">
          <TabsList className="mb-8">
            <TabsTrigger value="all">All Levels</TabsTrigger>
            <TabsTrigger value="beginner">Beginner</TabsTrigger>
            <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
            <TabsTrigger value="monster">Monster Level</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGames.map((game) => (
              <GameCard key={game.id} game={game} onPlay={handlePlayGame} />
            ))}
          </TabsContent>

          {['beginner', 'intermediate', 'advanced', 'monster'].map((level) => (
            <TabsContent
              key={level}
              value={level}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredGames
                .filter((game) => 
                  game.difficultyLevels.includes(level.charAt(0).toUpperCase() + level.slice(1) as any)
                )
                .map((game) => (
                  <GameCard key={game.id} game={game} onPlay={handlePlayGame} />
                ))}
            </TabsContent>
          ))}
        </Tabs>
      )}
    </div>
  );
};

export default Games;
