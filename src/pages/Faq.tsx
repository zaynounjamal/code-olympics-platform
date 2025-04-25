
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Faq = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          question: 'What is LUCSC Code Festival?',
          answer:
            'LUCSC Code Festival is a competitive programming event where participants of all skill levels can compete in various coding challenges.',
        },
        {
          question: 'Who can participate in the festival?',
          answer:
            'Anyone can participate! We have different categories for school students, college students, and professionals with varying difficulty levels.',
        },
        {
          question: 'Is there a registration fee?',
          answer:
            'No, participation is free for all contestants.',
        },
        {
          question: 'Can I participate as an individual or do I need a team?',
          answer:
            'Most challenges are designed for teams of 2-4 people, but we do have some individual events as well.',
        },
      ],
    },
    {
      category: 'Technical',
      questions: [
        {
          question: 'What programming languages are supported?',
          answer:
            'We support over 40 programming languages including Python, JavaScript, Java, C++, C#, Ruby, Go, Rust, PHP, and many more.',
        },
        {
          question: 'Do I need to bring my own computer?',
          answer:
            'Yes, participants need to bring their own laptops for the competition.',
        },
        {
          question: 'Is there an IDE provided for the competition?',
          answer:
            'Yes, our platform provides an online IDE for all supported languages, but you\'re also free to use your preferred local development environment.',
        },
        {
          question: 'How is the code judged?',
          answer:
            'Code is judged based on correctness, efficiency, and sometimes elegance/readability depending on the challenge.',
        },
      ],
    },
    {
      category: 'Game-related',
      questions: [
        {
          question: 'What types of challenges are included?',
          answer:
            'We offer a wide variety of challenges including Complete the Code, Find the Error, CSS Games, Data Structure Challenges, Write the Output, Reverse Challenges, Debug the Code, Code Golf, and many more.',
        },
        {
          question: 'How are points awarded?',
          answer:
            'Points are awarded based on the difficulty of the challenge, the time taken to solve it, and the quality of the solution.',
        },
        {
          question: 'Can I practice before the actual contest?',
          answer:
            'Yes, we provide a practice section with sample problems for all skill levels.',
        },
        {
          question: 'Are there time limits for challenges?',
          answer:
            'Yes, each challenge has a specific time limit ranging from 15 minutes to 2 hours depending on complexity.',
        },
      ],
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    toast.success('Your question has been submitted!', {
      description: 'We\'ll get back to you as soon as possible.',
    });
    setName('');
    setEmail('');
    setQuestion('');
  };

  const filteredFaqs = searchQuery
    ? faqs.map((category) => ({
        ...category,
        questions: category.questions.filter(
          (q) =>
            q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      })).filter(category => category.questions.length > 0)
    : faqs;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Frequently Asked Questions</h1>
      <p className="text-muted-foreground mb-8">
        Find answers to common questions or submit your own.
      </p>

      <div className="relative mb-8 max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
        <Input
          placeholder="Search questions..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue={faqs[0].category.toLowerCase()}>
        <TabsList className="mb-8 w-full justify-start overflow-auto">
          <TabsTrigger value="all">All Categories</TabsTrigger>
          {faqs.map((category) => (
            <TabsTrigger key={category.category} value={category.category.toLowerCase()}>
              {category.category}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all">
          {filteredFaqs.map((category) => (
            <div key={category.category} className="mb-8">
              <h2 className="text-xl font-bold mb-4">{category.category}</h2>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((faq, index) => (
                  <AccordionItem key={index} value={`${category.category}-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </TabsContent>

        {faqs.map((category) => (
          <TabsContent key={category.category} value={category.category.toLowerCase()}>
            <Accordion type="single" collapsible className="w-full">
              {(searchQuery ? category.questions.filter(
                (q) =>
                  q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  q.answer.toLowerCase().includes(searchQuery.toLowerCase())
              ) : category.questions).map((faq, index) => (
                <AccordionItem key={index} value={`${category.category}-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-16 max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Still have questions?</h2>
          <p className="text-muted-foreground">
            If you couldn't find an answer to your question, please feel free to ask us directly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 rounded-lg border">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="question">Question</Label>
            <Textarea
              id="question"
              placeholder="Type your question here..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              rows={5}
              required
            />
          </div>
          <div className="text-right">
            <Button type="submit" className="festival-button">
              Submit Question
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Faq;
