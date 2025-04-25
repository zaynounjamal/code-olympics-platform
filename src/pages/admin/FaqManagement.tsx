
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Edit, Trash2, ChevronDown, ChevronUp, Search, FileText } from 'lucide-react';
import { toast } from 'sonner';

// Sample FAQ data
const initialFaqs = [
  {
    id: '1',
    question: 'How do I register my team?',
    answer: 'Teams can register through the registration portal on the home page. You will need to provide team name, member details, and select the competitions you want to participate in.',
    category: 'Registration',
    isExpanded: false,
  },
  {
    id: '2',
    question: 'What programming languages are supported in the competitions?',
    answer: 'Our competitions support a wide range of languages including JavaScript, Python, Java, C++, Go, Ruby, and many more. Specific competitions may have language restrictions which will be mentioned in their rules.',
    category: 'Technical',
    isExpanded: false,
  },
  {
    id: '3',
    question: 'How are the winners determined?',
    answer: 'Winners are determined based on multiple factors including code correctness, efficiency, readability, and completion time. Each competition has specific scoring criteria that will be announced before the event.',
    category: 'Judging',
    isExpanded: false,
  },
  {
    id: '4',
    question: 'Can I participate in multiple competitions?',
    answer: 'Yes, participants can register for multiple competitions. However, please check the schedule to ensure there are no timing conflicts between events you wish to join.',
    category: 'Registration',
    isExpanded: false,
  },
  {
    id: '5',
    question: 'What should I do if I encounter technical issues during a competition?',
    answer: 'If you encounter any technical issues, immediately notify a moderator through the help button in the competition interface. Our technical team will assist you as soon as possible.',
    category: 'Technical',
    isExpanded: false,
  },
];

const FaqManagement = () => {
  const [faqs, setFaqs] = useState(initialFaqs);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newFaq, setNewFaq] = useState({
    question: '',
    answer: '',
    category: '',
  });
  const [showNewFaqForm, setShowNewFaqForm] = useState(false);

  const handleToggleExpand = (id: string) => {
    setFaqs(
      faqs.map((faq) => (faq.id === id ? { ...faq, isExpanded: !faq.isExpanded } : faq))
    );
  };

  const handleEdit = (id: string) => {
    setEditingId(id);
    toast.info('You are now editing this FAQ');
  };

  const handleDelete = (id: string) => {
    setFaqs(faqs.filter((faq) => faq.id !== id));
    toast.success('FAQ deleted successfully');
  };

  const handleSaveEdit = (id: string) => {
    setEditingId(null);
    toast.success('FAQ updated successfully');
  };

  const handleAddNewFaq = () => {
    if (newFaq.question && newFaq.answer && newFaq.category) {
      const newId = (faqs.length + 1).toString();
      setFaqs([
        ...faqs,
        {
          id: newId,
          ...newFaq,
          isExpanded: false,
        },
      ]);
      setNewFaq({ question: '', answer: '', category: '' });
      setShowNewFaqForm(false);
      toast.success('New FAQ added successfully');
    } else {
      toast.error('Please fill in all fields');
    }
  };

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(faqs.map((faq) => faq.category))];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">FAQ Management</h1>
        <p className="text-muted-foreground">
          Create, edit, and organize frequently asked questions for participants
        </p>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div>
            <CardTitle>Manage FAQs</CardTitle>
            <CardDescription>Add, edit, or remove frequently asked questions</CardDescription>
          </div>
          <Button onClick={() => setShowNewFaqForm(!showNewFaqForm)}>
            <Plus className="mr-2 h-4 w-4" />
            Add FAQ
          </Button>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search FAQs..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {showNewFaqForm && (
            <Card className="mb-6 border-dashed">
              <CardHeader>
                <CardTitle>Add New FAQ</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Category</label>
                    <Input
                      placeholder="Category"
                      value={newFaq.category}
                      onChange={(e) => setNewFaq({ ...newFaq, category: e.target.value })}
                      list="categories"
                    />
                    <datalist id="categories">
                      {categories.map((category) => (
                        <option key={category} value={category} />
                      ))}
                    </datalist>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Question</label>
                    <Input
                      placeholder="Enter question"
                      value={newFaq.question}
                      onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Answer</label>
                    <Textarea
                      placeholder="Enter answer"
                      value={newFaq.answer}
                      onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline" onClick={() => setShowNewFaqForm(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleAddNewFaq}>
                      <Plus className="mr-2 h-4 w-4" />
                      Add FAQ
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Question</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredFaqs.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={3} className="text-center py-4">
                      <FileText className="h-12 w-12 mx-auto text-muted-foreground opacity-50 mb-2" />
                      <p className="text-muted-foreground">No FAQs found</p>
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredFaqs.map((faq) => (
                    <React.Fragment key={faq.id}>
                      <TableRow>
                        <TableCell className="font-medium">
                          <Button
                            variant="ghost"
                            className="p-0 h-auto w-full justify-start font-medium hover:no-underline flex items-center text-left"
                            onClick={() => handleToggleExpand(faq.id)}
                          >
                            <span className="truncate">{faq.question}</span>
                            {faq.isExpanded ? (
                              <ChevronUp className="ml-2 h-4 w-4" />
                            ) : (
                              <ChevronDown className="ml-2 h-4 w-4" />
                            )}
                          </Button>
                        </TableCell>
                        <TableCell>{faq.category}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleEdit(faq.id)}
                            >
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleDelete(faq.id)}
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              Delete
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                      {faq.isExpanded && (
                        <TableRow>
                          <TableCell colSpan={3} className="bg-muted/50">
                            {editingId === faq.id ? (
                              <div className="space-y-4 p-2">
                                <div>
                                  <label className="text-sm font-medium mb-1 block">
                                    Category
                                  </label>
                                  <Input defaultValue={faq.category} />
                                </div>
                                <div>
                                  <label className="text-sm font-medium mb-1 block">
                                    Question
                                  </label>
                                  <Input defaultValue={faq.question} />
                                </div>
                                <div>
                                  <label className="text-sm font-medium mb-1 block">
                                    Answer
                                  </label>
                                  <Textarea defaultValue={faq.answer} rows={4} />
                                </div>
                                <div className="flex justify-end space-x-2">
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setEditingId(null)}
                                  >
                                    Cancel
                                  </Button>
                                  <Button
                                    size="sm"
                                    onClick={() => handleSaveEdit(faq.id)}
                                  >
                                    Save Changes
                                  </Button>
                                </div>
                              </div>
                            ) : (
                              <div className="p-4">{faq.answer}</div>
                            )}
                          </TableCell>
                        </TableRow>
                      )}
                    </React.Fragment>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FaqManagement;
