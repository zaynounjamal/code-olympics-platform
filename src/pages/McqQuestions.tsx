
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { CheckCircle, XCircle, ChevronRight, ChevronLeft } from 'lucide-react';

// MCQ Question Type
interface McqQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  points: number;
}

// Example MCQ questions
const mcqQuestions: McqQuestion[] = [
  {
    id: 'js-1',
    question: 'What is the output of `console.log(typeof null)` in JavaScript?',
    options: ['null', 'object', 'undefined', 'string'],
    correctAnswer: 1,
    explanation: 'In JavaScript, typeof null returns "object", which is considered a bug in the language.',
    category: 'JavaScript',
    difficulty: 'Easy',
    points: 10
  },
  {
    id: 'py-1',
    question: 'Which of these is NOT a valid way to create a list in Python?',
    options: ['list()', '[]', 'list.new()', 'list([1, 2, 3])'],
    correctAnswer: 2,
    explanation: 'list.new() is not a valid Python syntax. Valid ways include using [], list(), or list([1,2,3]).',
    category: 'Python',
    difficulty: 'Easy',
    points: 10
  },
  {
    id: 'java-1',
    question: 'What does JVM stand for?',
    options: ['Java Virtual Machine', 'Java Visual Monitor', 'Java Variable Method', 'JavaScript Virtual Machine'],
    correctAnswer: 0,
    explanation: 'JVM stands for Java Virtual Machine, which is the runtime engine that executes Java bytecode.',
    category: 'Java',
    difficulty: 'Easy',
    points: 10
  },
  {
    id: 'ts-1',
    question: 'Which TypeScript type encompasses all possible values?',
    options: ['any', 'unknown', 'object', 'never'],
    correctAnswer: 0,
    explanation: 'The "any" type in TypeScript can hold values of any type and bypasses type checking.',
    category: 'TypeScript',
    difficulty: 'Medium',
    points: 15
  },
  {
    id: 'react-1',
    question: 'Which hook would you use to perform side effects in a React component?',
    options: ['useState', 'useEffect', 'useContext', 'useReducer'],
    correctAnswer: 1,
    explanation: 'useEffect is the React hook designed for performing side effects in functional components.',
    category: 'React.js',
    difficulty: 'Medium',
    points: 15
  }
];

// Group questions by category
const groupedQuestions = mcqQuestions.reduce<Record<string, McqQuestion[]>>((acc, question) => {
  if (!acc[question.category]) {
    acc[question.category] = [];
  }
  acc[question.category].push(question);
  return acc;
}, {});

const McqQuestions = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalAttempted, setTotalAttempted] = useState(0);

  const categories = Object.keys(groupedQuestions);
  const currentQuestions = selectedCategory ? groupedQuestions[selectedCategory] : [];
  const currentQuestion = currentQuestions[currentQuestionIndex];

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setHasSubmitted(false);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) {
      toast.warning("Please select an answer first");
      return;
    }

    setHasSubmitted(true);
    setTotalAttempted(prev => prev + 1);

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setCorrectAnswers(prev => prev + 1);
      toast.success("Correct answer!");
    } else {
      toast.error("Incorrect answer!");
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < currentQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setHasSubmitted(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedAnswer(null);
      setHasSubmitted(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Multiple Choice Questions</h1>
      
      {!selectedCategory ? (
        <div className="space-y-6">
          <div className="bg-muted/30 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-medium mb-2">Select a Category</h2>
            <p className="text-muted-foreground mb-4">
              Choose from {categories.length} programming languages and technologies to test your knowledge.
            </p>
            <div className="stats bg-background shadow rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-muted-foreground">Quiz Progress</p>
                  <p className="text-2xl font-bold">{totalAttempted} Attempted</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Correct Answers</p>
                  <p className="text-2xl font-bold text-green-500">{correctAnswers}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                  <p className="text-2xl font-bold">
                    {totalAttempted > 0 ? Math.round((correctAnswers / totalAttempted) * 100) : 0}%
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map(category => (
              <Card key={category} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle>{category}</CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <p className="text-sm text-muted-foreground">
                    {groupedQuestions[category].length} questions available
                  </p>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    onClick={() => handleCategorySelect(category)}
                  >
                    Start Quiz
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex justify-between items-center mb-4">
            <Button variant="outline" onClick={() => setSelectedCategory(null)}>
              Back to Categories
            </Button>
            <div className="text-sm text-muted-foreground">
              Question {currentQuestionIndex + 1} of {currentQuestions.length}
            </div>
          </div>
          
          <Card className="w-full">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>
                  <span className="text-muted-foreground mr-2">
                    {currentQuestion.difficulty}
                  </span>
                  <span>{currentQuestion.category}</span>
                </CardTitle>
                <div className="bg-muted px-2 py-1 rounded text-sm">
                  {currentQuestion.points} Points
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg font-medium">{currentQuestion.question}</p>
              
              <RadioGroup 
                value={selectedAnswer?.toString()} 
                onValueChange={(value) => setSelectedAnswer(Number(value))}
                disabled={hasSubmitted}
              >
                {currentQuestion.options.map((option, index) => (
                  <div key={index} className={`flex items-center space-x-2 p-2 rounded-md ${
                    hasSubmitted && index === currentQuestion.correctAnswer 
                      ? 'bg-green-50 dark:bg-green-950/20' 
                      : hasSubmitted && index === selectedAnswer 
                        ? index !== currentQuestion.correctAnswer 
                          ? 'bg-red-50 dark:bg-red-950/20'
                          : ''
                        : ''
                  }`}>
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label 
                      htmlFor={`option-${index}`}
                      className="flex-1 cursor-pointer"
                    >
                      {option}
                    </Label>
                    {hasSubmitted && index === currentQuestion.correctAnswer && (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    )}
                    {hasSubmitted && index === selectedAnswer && index !== currentQuestion.correctAnswer && (
                      <XCircle className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                ))}
              </RadioGroup>
              
              {hasSubmitted && (
                <div className="bg-muted/30 p-4 rounded-md">
                  <h4 className="font-medium">Explanation:</h4>
                  <p>{currentQuestion.explanation}</p>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className="flex items-center"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </Button>
              
              {hasSubmitted ? (
                <Button
                  variant="outline"
                  onClick={handleNext}
                  disabled={currentQuestionIndex === currentQuestions.length - 1}
                  className="flex items-center"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              ) : (
                <Button onClick={handleSubmit}>
                  Submit Answer
                </Button>
              )}
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
};

export default McqQuestions;
