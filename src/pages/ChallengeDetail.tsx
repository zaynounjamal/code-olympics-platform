import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { gameTypes, Challenge } from '@/data/gameTypes';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Trophy, Lock, CheckSquare, XSquare } from 'lucide-react';
import { toast } from 'sonner';
import CodeEditor from '@/components/games/CodeEditor';
import TypingEditor from '@/components/games/TypingEditor';

const ChallengeDetail = () => {
  const { gameId, challengeId } = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState(gameTypes.find(g => g.id === gameId));
  const [challenge, setChallenge] = useState<Challenge | undefined>();
  const [code, setCode] = useState('');
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState<{success: boolean, message: string, testResults?: {passed: boolean, input: string, expected: string, actual: string}[]}>();
  const [showSolution, setShowSolution] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
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

  const handleRunCode = () => {
    if (!challenge) return;
    
    if (game?.category === 'Typing') {
      return;
    }
    
    try {
      const testResults = executeTests(code, challenge);
      const allPassed = testResults.every(test => test.passed);
      
      setResults({
        success: allPassed,
        message: allPassed ? 'All tests passed!' : 'Some tests failed',
        testResults
      });
      
      if (allPassed) {
        toast.success('Challenge completed successfully!');
      } else {
        toast.error('Some tests failed. Keep trying!');
      }
    } catch (error) {
      setResults({
        success: false,
        message: `Error executing code: ${error}`
      });
      toast.error('Error executing code');
    }
  };

  const executeTests = (code: string, challenge: Challenge) => {
    if (!challenge.testCases) return [];
    
    const results = [];
    
    for (const test of challenge.testCases) {
      try {
        const executeFunction = new Function(`
          ${code}
          return eval(${JSON.stringify(test.input)});
        `);
        
        const actual = String(executeFunction());
        const passed = actual === test.expectedOutput;
        
        results.push({
          passed,
          input: test.input,
          expected: test.expectedOutput,
          actual
        });
      } catch (error) {
        results.push({
          passed: false,
          input: test.input,
          expected: test.expectedOutput,
          actual: `Error: ${error}`
        });
      }
    }
    
    return results;
  };

  const handleCheckPassword = () => {
    if (passwordInput === '81428142') {
      setShowSolution(true);
      toast.success('Solution unlocked');
    } else {
      toast.error('Incorrect password');
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  if (!challenge) return null;

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
                ) : (
                  <div>
                    <Button 
                      className="w-full mt-4" 
                      onClick={handleRunCode}
                    >
                      Run Code
                    </Button>
                    
                    {results && (
                      <div className={`mt-4 p-4 rounded-md ${results.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                        <p className="font-medium mb-2">
                          {results.success ? (
                            <span className="flex items-center">
                              <CheckSquare className="w-4 h-4 mr-1" />
                              {results.message}
                            </span>
                          ) : (
                            <span className="flex items-center">
                              <XSquare className="w-4 h-4 mr-1" />
                              {results.message}
                            </span>
                          )}
                        </p>
                        
                        {results.testResults && (
                          <div className="space-y-2 mt-2">
                            {results.testResults.map((test, index) => (
                              <div key={index} className={`p-2 rounded-md ${test.passed ? 'bg-green-100' : 'bg-red-100'}`}>
                                <p className="text-sm font-medium">Test {index + 1}</p>
                                <p className="text-xs">Input: {test.input}</p>
                                <p className="text-xs">Expected: {test.expected}</p>
                                <p className="text-xs">Actual: {test.actual}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                <div className="mt-6 border-t pt-4">
                  <h3 className="text-lg font-medium flex items-center mb-2">
                    <Lock className="w-4 h-4 mr-1" />
                    Access Solution
                  </h3>
                  
                  {!showSolution ? (
                    <div className="flex gap-2">
                      <input 
                        type="password"
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                        placeholder="Enter password"
                        className="border rounded-md px-3 py-1 flex-1"
                      />
                      <Button variant="outline" onClick={handleCheckPassword}>Unlock</Button>
                    </div>
                  ) : (
                    <div className="bg-muted/50 p-3 rounded-md">
                      <p className="text-sm mb-2 font-medium">Solution:</p>
                      <pre className="text-xs overflow-x-auto bg-muted p-2 rounded">
                        <code>{challenge.solution}</code>
                      </pre>
                    </div>
                  )}
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
    </div>
  );
};

export default ChallengeDetail;
