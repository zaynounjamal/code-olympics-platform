
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { gameTypes, Challenge } from '@/data/gameTypes';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Trophy, Eye, CheckSquare, XSquare } from 'lucide-react';
import { toast } from 'sonner';
import CodeEditor from '@/components/games/CodeEditor';
import TypingEditor from '@/components/games/TypingEditor';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const ChallengeDetail = () => {
  const { gameId, challengeId } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState(gameTypes.find(g => g.id === gameId));
  const [challenge, setChallenge] = useState<Challenge | undefined>();
  const [code, setCode] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [typingStats, setTypingStats] = useState({ accuracy: 0, speed: 0, completed: false });
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const totalCharactersRef = useRef(0);
  const correctCharactersRef = useRef(0);

  useEffect(() => {
    if (!game || !challengeId) {
      navigate('/games');
      toast.error('Challenge not found');
      return;
    }

    const foundChallenge = game.challenges.find(c => c.id === challengeId);
    if (!foundChallenge) {
      navigate(`/games/${gameId}`);
      toast.error('Challenge not found');
      return;
    }

    setChallenge(foundChallenge);
    setCode(foundChallenge.codeTemplate || '');
    setTimeRemaining(foundChallenge.timeLimit || 600);
  }, [gameId, challengeId, navigate, game]);

  const handleTyping = (newCode: string) => {
    if (!challenge || !game || game.category !== 'Typing') {
      setCode(newCode);
      return;
    }
    
    if (!isRunning && !typingStats.completed) {
      startTimeRef.current = Date.now();
      setIsRunning(true);
      startTimer();
    }
    
    const template = challenge.codeTemplate || '';
    totalCharactersRef.current = newCode.length;
    correctCharactersRef.current = 0;
    
    for (let i = 0; i < newCode.length; i++) {
      if (i < template.length && newCode[i] === template[i]) {
        correctCharactersRef.current++;
      }
    }
    
    const accuracy = totalCharactersRef.current === 0 
      ? 0 
      : (correctCharactersRef.current / totalCharactersRef.current) * 100;
    
    const timeElapsed = (Date.now() - (startTimeRef.current || Date.now())) / 1000 / 60;
    const speed = timeElapsed > 0 ? Math.round(totalCharactersRef.current / timeElapsed) : 0;
    
    const completed = template === newCode;
    if (completed && !typingStats.completed) {
      stopTimer();
      toast.success('Challenge completed!');
    }
    
    setTypingStats({
      accuracy: Math.round(accuracy * 100) / 100,
      speed,
      completed
    });
    
    setCode(newCode);
  };

  const startTimer = () => {
    if (timerRef.current) return;
    
    timerRef.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          toast.warning('Time\'s up!');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handleViewSolution = () => {
    setDialogOpen(true);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  if (!challenge) return null;

  const generateSolutionImage = () => {
    if (!challenge?.solution) return null;
    
    // We'll directly display the formatted code instead of an external image
    return challenge.solution;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3">
          <Card>
            <CardHeader>
              <CardTitle>{challenge?.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">{challenge?.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">
                    <Trophy className="w-4 h-4 mr-1" />
                    {challenge?.points} Points
                  </Badge>
                  
                  <Badge variant="outline">
                    <Clock className="w-4 h-4 mr-1" />
                    {formatTime(timeRemaining)}
                  </Badge>
                  
                  {game && (
                    <Badge>{game.phase}</Badge>
                  )}
                </div>
                
                {game?.category === 'Typing' ? (
                  <div className="space-y-2 mt-4">
                    <div className="flex justify-between">
                      <span>Accuracy:</span>
                      <span className="font-medium">{typingStats.accuracy}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Speed:</span>
                      <span className="font-medium">{typingStats.speed} CPM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Status:</span>
                      <span className="font-medium">
                        {typingStats.completed ? (
                          <span className="text-green-600 flex items-center">
                            <CheckSquare className="w-4 h-4 mr-1" />
                            Complete
                          </span>
                        ) : (
                          <span className="text-amber-600 flex items-center">
                            <XSquare className="w-4 h-4 mr-1" />
                            In Progress
                          </span>
                        )}
                      </span>
                    </div>
                  </div>
                ) : null}

                <div className="mt-6 pt-4">
                  <Button 
                    className="w-full flex items-center justify-center gap-2"
                    onClick={handleViewSolution}
                  >
                    <Eye className="h-4 w-4" />
                    View Solution
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:w-2/3">
          {game?.category === 'Typing' ? (
            <TypingEditor
              value={code}
              onChange={handleTyping}
              targetText={challenge.codeTemplate || ''}
              height="70vh"
              readOnly={timeRemaining === 0}
            />
          ) : (
            <CodeEditor
              value={code}
              onChange={handleTyping}
              language={game?.programmingLanguages[0]?.toLowerCase() || 'javascript'}
              height="70vh"
              readOnly={timeRemaining === 0}
            />
          )}
        </div>
      </div>
      
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Trophy className="h-5 w-5 mr-2 text-yellow-500" />
              Solution for {challenge.title}
            </DialogTitle>
            <DialogDescription>
              Review the solution below to understand the approach
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4 overflow-auto max-h-[70vh] rounded-lg">
            {challenge.solution ? (
              <div className="flex flex-col items-center">
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto w-full mb-4">
                  <code className="language-javascript">{generateSolutionImage()}</code>
                </pre>
              </div>
            ) : (
              <div className="text-center p-4">No solution available</div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ChallengeDetail;
