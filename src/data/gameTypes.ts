export type GameLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Monster';

export type AcademicLevel = 
  | 'School Students'
  | '1st Year College'
  | '2nd Year College'
  | '3rd Year College'
  | 'Final Year College'
  | 'Masters'
  | 'PhD';

export type GamePhase = 'Phase 1' | 'Phase 2';

export type Challenge = {
  id: string;
  title: string;
  description: string;
  points: number;
  timeLimit?: number; // in seconds
  codeTemplate?: string;
  solution?: string;
  testCases?: {
    input: string;
    expectedOutput: string;
  }[];
};

export type GameType = {
  id: string;
  title: string;
  description: string;
  icon: 'Code' | 'LayoutGrid' | 'Award';
  category: string;
  phase: GamePhase;
  difficultyLevels: GameLevel[];
  academicLevels: AcademicLevel[];
  challenges: Challenge[];
  programmingLanguages: string[];
};

export const gameTypes: GameType[] = [
  {
    id: 'complete-code',
    title: 'Complete the Code',
    description: 'Fill in the missing code to make the function work as expected.',
    icon: 'Code',
    category: 'Code Completion',
    phase: 'Phase 1',
    difficultyLevels: ['Beginner', 'Intermediate', 'Advanced', 'Monster'],
    academicLevels: ['School Students', '1st Year College', '2nd Year College', '3rd Year College', 'Masters', 'PhD'],
    challenges: [
      {
        id: 'array-sum',
        title: 'Array Sum',
        description: 'Complete the function to calculate the sum of array elements.',
        points: 100,
        timeLimit: 300,
        codeTemplate: `function sumArray(arr) {
  // TODO: Implement the function
  // The function should return the sum of all elements in the array
  
}`,
        solution: `function sumArray(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}`,
        testCases: [
          { input: '[1, 2, 3, 4, 5]', expectedOutput: '15' },
          { input: '[-1, -2, 10]', expectedOutput: '7' },
          { input: '[0, 0, 0]', expectedOutput: '0' }
        ]
      },
      {
        id: 'string-reversal',
        title: 'String Reversal',
        description: 'Implement a function to reverse a string without using built-in reverse methods.',
        points: 150,
        timeLimit: 300,
        codeTemplate: `function reverseString(str) {
  // TODO: Implement the function
  // The function should return the reversed string
  // Do not use built-in reverse() or similar methods
  
}`,
        solution: `function reverseString(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}`,
        testCases: [
          { input: '"hello"', expectedOutput: '"olleh"' },
          { input: '"javascript"', expectedOutput: '"tpircsavaj"' },
          { input: '""', expectedOutput: '""' }
        ]
      },
      {
        id: 'binary-search',
        title: 'Binary Search',
        description: 'Complete the binary search implementation.',
        points: 200,
        timeLimit: 450,
        codeTemplate: `function binarySearch(arr, target) {
  // TODO: Implement binary search
  // The function should return the index of the target or -1 if not found
  
}`,
        solution: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    }
    
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}`,
        testCases: [
          { input: '([1, 2, 3, 4, 5], 3)', expectedOutput: '2' },
          { input: '([1, 2, 3, 4, 5], 6)', expectedOutput: '-1' },
          { input: '([1, 3, 5, 7, 9], 5)', expectedOutput: '2' }
        ]
      }
    ],
    programmingLanguages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++']
  },
  {
    id: 'typing-challenges',
    title: 'Speed Typing Challenges',
    description: 'Master typing code in various programming languages',
    icon: 'Code',
    category: 'Typing',
    phase: 'Phase 1',
    difficultyLevels: ['Beginner', 'Intermediate', 'Advanced'],
    academicLevels: ['School Students', '1st Year College', '2nd Year College', '3rd Year College'],
    challenges: [
      {
        id: 'python-basics',
        title: 'Python Basics',
        description: 'Practice typing Python code with proper indentation',
        points: 100,
        timeLimit: 180,
        codeTemplate: `def calculate_factorial(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * calculate_factorial(n - 1)

def main():
    numbers = [5, 7, 3, 8, 4]
    results = []
    
    for num in numbers:
        factorial = calculate_factorial(num)
        results.append(factorial)
    
    print("Results:", results)

if __name__ == "__main__":
    main()`
      },
      {
        id: 'typescript-interface',
        title: 'TypeScript Interface',
        description: 'Practice typing TypeScript interfaces and types',
        points: 150,
        timeLimit: 240,
        codeTemplate: `interface User {
  id: string;
  name: string;
  email: string;
  age?: number;
  roles: UserRole[];
}

type UserRole = 'admin' | 'user' | 'editor';

interface UserService {
  getUser(id: string): Promise<User>;
  updateUser(user: Partial<User>): Promise<void>;
  deleteUser(id: string): Promise<boolean>;
}

class UserServiceImpl implements UserService {
  async getUser(id: string): Promise<User> {
    // Implementation
    return {
      id,
      name: 'John Doe',
      email: 'john@example.com',
      roles: ['user']
    };
  }

  async updateUser(user: Partial<User>): Promise<void> {
    // Implementation
  }

  async deleteUser(id: string): Promise<boolean> {
    // Implementation
    return true;
  }
}`
      },
      {
        id: 'react-component',
        title: 'React Component',
        description: 'Practice typing a React functional component',
        points: 200,
        timeLimit: 300,
        codeTemplate: `import React, { useState, useEffect } from 'react';

interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      const todo: TodoItem = {
        id: Date.now().toString(),
        text: newTodo.trim(),
        completed: false
      };
      setTodos([...todos, todo]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    ));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="px-2 py-1 border rounded"
          placeholder="Add new todo"
        />
        <button
          onClick={handleAddTodo}
          className="px-4 py-1 bg-blue-500 text-white rounded"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {todos.map(todo => (
          <li
            key={todo.id}
            className="flex items-center gap-2"
            onClick={() => toggleTodo(todo.id)}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              readOnly
            />
            <span className={todo.completed ? 'line-through' : ''}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};`
      }
    ],
    programmingLanguages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++']
  },
  {
    id: 'data-structures',
    title: 'Data Structure Challenges',
    description: 'Solve complex problems using the right data structures.',
    icon: 'LayoutGrid',
    category: 'Algorithms',
    phase: 'Phase 2',
    difficultyLevels: ['Intermediate', 'Advanced', 'Monster'],
    academicLevels: ['2nd Year College', '3rd Year College', 'Final Year College', 'Masters', 'PhD'],
    challenges: [
      {
        id: 'linked-list',
        title: 'Linked List Operations',
        description: 'Implement basic linked list operations including insert, delete, and find.',
        points: 200,
        timeLimit: 900,
        codeTemplate: `class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  // TODO: Implement the insert method
  insert(value) {
    
  }
  
  // TODO: Implement the delete method
  delete(value) {
    
  }
  
  // TODO: Implement the find method
  find(value) {
    
  }
  
  // Print the list (already implemented)
  print() {
    let current = this.head;
    const values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values.join(' -> ');
  }
}`,
        solution: `class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  insert(value) {
    const newNode = new Node(value);
    
    if (!this.head) {
      this.head = newNode;
      return;
    }
    
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  
  delete(value) {
    if (!this.head) return false;
    
    if (this.head.value === value) {
      this.head = this.head.next;
      return true;
    }
    
    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }
    
    if (current.next) {
      current.next = current.next.next;
      return true;
    }
    
    return false;
  }
  
  find(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  
  print() {
    let current = this.head;
    const values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values.join(' -> ');
  }
}`
      },
      {
        id: 'binary-tree',
        title: 'Binary Tree Traversal',
        description: 'Implement different tree traversal methods: inorder, preorder, and postorder.',
        points: 250,
        timeLimit: 900,
        codeTemplate: `class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  
  // TODO: Implement inOrder traversal
  inOrder() {
    
  }
  
  // TODO: Implement preOrder traversal
  preOrder() {
    
  }
  
  // TODO: Implement postOrder traversal
  postOrder() {
    
  }
  
  // Helper method for recursive traversal
  _inOrderHelper(node, result) {
    
  }
  
  _preOrderHelper(node, result) {
    
  }
  
  _postOrderHelper(node, result) {
    
  }
}`,
        solution: `class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  
  inOrder() {
    const result = [];
    this._inOrderHelper(this.root, result);
    return result;
  }
  
  preOrder() {
    const result = [];
    this._preOrderHelper(this.root, result);
    return result;
  }
  
  postOrder() {
    const result = [];
    this._postOrderHelper(this.root, result);
    return result;
  }
  
  _inOrderHelper(node, result) {
    if (node) {
      this._inOrderHelper(node.left, result);
      result.push(node.value);
      this._inOrderHelper(node.right, result);
    }
  }
  
  _preOrderHelper(node, result) {
    if (node) {
      result.push(node.value);
      this._preOrderHelper(node.left, result);
      this._preOrderHelper(node.right, result);
    }
  }
  
  _postOrderHelper(node, result) {
    if (node) {
      this._postOrderHelper(node.left, result);
      this._postOrderHelper(node.right, result);
      result.push(node.value);
    }
  }
}`
      }
    ],
    programmingLanguages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++']
  },
  {
    id: 'find-error',
    title: 'Find the Error',
    description: 'Debug and fix issues in existing code snippets.',
    icon: 'Award',
    category: 'Debugging',
    phase: 'Phase 1',
    difficultyLevels: ['Beginner', 'Intermediate', 'Advanced'],
    academicLevels: ['1st Year College', '2nd Year College', '3rd Year College', 'Final Year College'],
    challenges: [
      {
        id: 'syntax-errors',
        title: 'Fix Syntax Errors',
        description: 'Find and fix syntax errors in this JavaScript code.',
        points: 100,
        timeLimit: 300,
        codeTemplate: `function calculateTotal(items) {
  let total = 0
  
  for (let i = 0; i < items.length i++) {
    let item = items[i];
    total += item.price * item.quantity;
  }
  
  return total
}

function applyDiscount(total, discountCode) {
  if (discountCode = "SAVE10") {
    return total * 0.9;
  } else if (discountCode === "SAVE20" {
    return total * 0.8;
  } else {
    return total;
  }
}

const processOrder = (order) => {
  const subtotal = calculateTotal(order.items);
  const total = applyDiscount(subtotal, order.discountCode);
  
  console.log("Order processed:");
  console.log("Subtotal: $" + subtotal);
  console.log("Total: $" + total)
  
  return {
    subtotal: subtotal;
    total: total,
    saving: subtotal - total
  };
};`,
        solution: `function calculateTotal(items) {
  let total = 0;
  
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    total += item.price * item.quantity;
  }
  
  return total;
}

function applyDiscount(total, discountCode) {
  if (discountCode === "SAVE10") {
    return total * 0.9;
  } else if (discountCode === "SAVE20") {
    return total * 0.8;
  } else {
    return total;
  }
}

const processOrder = (order) => {
  const subtotal = calculateTotal(order.items);
  const total = applyDiscount(subtotal, order.discountCode);
  
  console.log("Order processed:");
  console.log("Subtotal: $" + subtotal);
  console.log("Total: $" + total);
  
  return {
    subtotal: subtotal,
    total: total,
    saving: subtotal - total
  };
};`
      },
      {
        id: 'logic-bugs',
        title: 'Fix Logical Errors',
        description: 'Find and fix logical errors in this function that should validate a password.',
        points: 200,
        timeLimit: 300,
        codeTemplate: `function validatePassword(password) {
  // Password should be at least 8 characters long
  // Password should contain at least one uppercase letter
  // Password should contain at least one lowercase letter
  // Password should contain at least one number
  
  let isValid = true;
  
  if (password.length < 8) {
    isValid = false;
  }
  
  // Check for uppercase
  let hasUppercase = false;
  for (let i = 0; i <= password.length; i++) {
    if (password[i] === password[i].toUpperCase()) {
      hasUppercase = true;
    }
  }
  if (!hasUppercase) {
    isValid = false;
  }
  
  // Check for lowercase
  let hasLowercase = false;
  for (let i = 0; i < password.length; i++) {
    if (password[i] === password[i].toLowerCase()) {
      hasLowercase = true;
    }
  }
  if (!hasLowercase) {
    isValid = false;
  }
  
  // Check for number
  let hasNumber = false;
  for (let i = 0; i < password.length; i++) {
    if (isNaN(password[i])) {
      hasNumber = true;
      break;
    }
  }
  if (!hasNumber) {
    isValid = false;
  }
  
  return isValid;
}`,
        solution: `function validatePassword(password) {
  // Password should be at least 8 characters long
  // Password should contain at least one uppercase letter
  // Password should contain at least one lowercase letter
  // Password should contain at least one number
  
  let isValid = true;
  
  if (password.length < 8) {
    isValid = false;
  }
  
  // Check for uppercase
  let hasUppercase = false;
  for (let i = 0; i < password.length; i++) {
    if (password[i] === password[i].toUpperCase() && password[i] !== password[i].toLowerCase()) {
      hasUppercase = true;
      break;
    }
  }
  if (!hasUppercase) {
    isValid = false;
  }
  
  // Check for lowercase
  let hasLowercase = false;
  for (let i = 0; i < password.length; i++) {
    if (password[i] === password[i].toLowerCase() && password[i] !== password[i].toUpperCase()) {
      hasLowercase = true;
      break;
    }
  }
  if (!hasLowercase) {
    isValid = false;
  }
  
  // Check for number
  let hasNumber = false;
  for (let i = 0; i < password.length; i++) {
    if (!isNaN(parseInt(password[i]))) {
      hasNumber = true;
      break;
    }
  }
  if (!hasNumber) {
    isValid = false;
  }
  
  return isValid;
}`
      }
    ],
    programmingLanguages: ['JavaScript', 'Python', 'Java', 'C++', 'PHP']
  },
  {
    id: 'algorithm-puzzles',
    title: 'Algorithm Puzzles',
    description: 'Solve algorithmic challenges and optimize solutions.',
    icon: 'LayoutGrid',
    category: 'Algorithms',
    phase: 'Phase 2',
    difficultyLevels: ['Intermediate', 'Advanced', 'Monster'],
    academicLevels: ['2nd Year College', '3rd Year College', 'Final Year College', 'Masters', 'PhD'],
    challenges: [
      {
        id: 'dynamic-fib',
        title: 'Dynamic Programming - Fibonacci',
        description: 'Optimize the Fibonacci sequence calculation using dynamic programming.',
        points: 300,
        timeLimit: 600,
        codeTemplate: `// This naive recursive implementation is very inefficient
// Optimize it using dynamic programming
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// TODO: Implement an efficient version
function efficientFibonacci(n) {
  // Your code here
}`,
        solution: `// This naive recursive implementation is very inefficient
// Optimize it using dynamic programming
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function efficientFibonacci(n) {
  if (n <= 1) return n;
  
  let fib = [0, 1];
  
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  
  return fib[n];
}`,
        testCases: [
          { input: '10', expectedOutput: '55' },
          { input: '20', expectedOutput: '6765' },
          { input: '30', expectedOutput: '832040' }
        ]
      },
      {
        id: 'greedy-coins',
        title: 'Greedy Algorithms - Coin Change',
        description: 'Implement a greedy algorithm to find the minimum number of coins needed to make change.',
        points: 250,
        timeLimit: 600,
        codeTemplate: `// Implement a greedy algorithm for coin change
// Coins available: [1, 5, 10, 25]
// Return the minimum number of coins needed to make 'amount'
function minCoins(coins, amount) {
  // Your code here
}`,
        solution: `function minCoins(coins, amount) {
  // Sort coins in descending order
  coins.sort((a, b) => b - a);
  
  let coinCount = 0;
  let remaining = amount;
  
  for (const coin of coins) {
    // Use as many of the current coin as possible
    const count = Math.floor(remaining / coin);
    coinCount += count;
    remaining -= coin * count;
    
    if (remaining === 0) break;
  }
  
  return coinCount;
}`,
        testCases: [
          { input: '([1, 5, 10, 25], 36)', expectedOutput: '3' },  // 25 + 10 + 1
          { input: '([1, 5, 10, 25], 42)', expectedOutput: '5' },  // 25 + 10 + 5 + 1 + 1
          { input: '([1, 5, 10, 25], 100)', expectedOutput: '4' }  // 25 + 25 + 25 + 25
        ]
      }
    ],
    programmingLanguages: ['JavaScript', 'Python', 'Java', 'C++']
  },
  {
    id: 'frontend-frameworks',
    title: 'Frontend Framework Challenge',
    description: 'Test your skills with popular frontend frameworks like React, Vue, and Angular.',
    icon: 'Code',
    category: 'Web Development',
    phase: 'Phase 1',
    difficultyLevels: ['Intermediate', 'Advanced'],
    academicLevels: ['2nd Year College', '3rd Year College', 'Final Year College', 'Masters'],
    challenges: [
      {
        id: 'react-component',
        title: 'React Component Architecture',
        description: 'Build a reusable React component with proper state management and props.',
        points: 200,
        timeLimit: 1800,
        codeTemplate: `// Create a reusable React counter component with the following features:
// - Increment/decrement buttons
// - Reset functionality
// - Custom step size (via props)
// - Optional max/min values (via props)

import React from 'react';

// TODO: Implement the Counter component
export const Counter = () => {
  // Your code here
};`,
        solution: `import React, { useState } from 'react';

export const Counter = ({ 
  initialValue = 0, 
  step = 1, 
  min = null, 
  max = null 
}) => {
  const [count, setCount] = useState(initialValue);
  
  const increment = () => {
    setCount(prevCount => {
      const newCount = prevCount + step;
      return max !== null ? Math.min(newCount, max) : newCount;
    });
  };
  
  const decrement = () => {
    setCount(prevCount => {
      const newCount = prevCount - step;
      return min !== null ? Math.max(newCount, min) : newCount;
    });
  };
  
  const reset = () => {
    setCount(initialValue);
  };
  
  return (
    <div className="counter">
      <h2>Count: {count}</h2>
      <div className="controls">
        <button onClick={decrement}>Decrease</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increase</button>
      </div>
      <p>Step size: {step}</p>
      {min !== null && <p>Minimum value: {min}</p>}
      {max !== null && <p>Maximum value: {max}</p>}
    </div>
  );
};`
      },
      {
        id: 'vue-reactivity',
        title: 'Vue.js Reactivity',
        description: 'Implement a reactive system using Vue.js composition API.',
        points: 250,
        timeLimit: 1800,
        codeTemplate: `// Create a Vue.js composition function that manages a shopping cart
// The cart should support adding items, removing items, and calculating totals

export default function useShoppingCart() {
  // TODO: Implement a reactive shopping cart
  
  return {
    // Export functions and reactive state here
  };
}`
      }
    ],
    programmingLanguages: ['JavaScript', 'TypeScript']
  },
  {
    id: 'python-challenges',
    title: 'Python Masterclass',
    description: 'Demonstrate your Python prowess with these algorithmic and data science challenges.',
    icon: 'Code',
    category: 'Data Science',
    phase: 'Phase 1',
    difficultyLevels: ['Beginner', 'Intermediate', 'Advanced'],
    academicLevels: ['1st Year College', '2nd Year College', '3rd Year College', 'Final Year College', 'Masters', 'PhD'],
    challenges: [
      {
        id: 'data-analysis',
        title: 'Data Analysis with Pandas',
        description: 'Analyze a dataset using pandas to extract meaningful insights.',
        points: 200,
        timeLimit: 1800,
        codeTemplate: `import pandas as pd
import numpy as np

# TODO: Complete the data analysis functions below
# The dataset represents sales data with columns: date, product_id, category, price, quantity

def load_data(file_path):
    # Load the CSV file and parse dates
    pass

def top_selling_products(df, n=5):
    # Return the top n selling products by total revenue
    pass

def sales_trend_by_month(df):
    # Group sales by month and return monthly totals
    pass

def category_performance(df):
    # Analyze performance by category and return a summary
    pass`,
        solution: `import pandas as pd
import numpy as np

def load_data(file_path):
    # Load the CSV file and parse dates
    df = pd.read_csv(file_path)
    df['date'] = pd.to_datetime(df['date'])
    return df

def top_selling_products(df, n=5):
    # Return the top n selling products by total revenue
    df['revenue'] = df['price'] * df['quantity']
    product_revenue = df.groupby('product_id')['revenue'].sum().reset_index()
    return product_revenue.sort_values('revenue', ascending=False).head(n)

def sales_trend_by_month(df):
    # Group sales by month and return monthly totals
    df['month'] = df['date'].dt.to_period('M')
    return df.groupby('month')['revenue'].sum().reset_index()

def category_performance(df):
    # Analyze performance by category and return a summary
    df['revenue'] = df['price'] * df['quantity']
    category_stats = df.groupby('category').agg({
        'revenue': 'sum',
        'quantity': 'sum',
        'product_id': pd.Series.nunique
    }).rename(columns={'product_id': 'unique_products'}).reset_index()
    
    category_stats['avg_price'] = df.groupby('category')['price'].mean().values
    return category_stats`
      },
      {
        id: 'machine-learning',
        title: 'ML Model Training',
        description: 'Implement and optimize a machine learning model for classification.',
        points: 300,
        timeLimit: 2400,
        codeTemplate: `import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score, classification_report
# You may use any classifier from scikit-learn or implement your own

# TODO: Complete the ML pipeline functions

def preprocess_data(X, y):
    # Split data into train/test sets and scale features
    pass

def train_model(X_train, y_train):
    # Train a classifier and return the trained model
    pass

def evaluate_model(model, X_test, y_test):
    # Evaluate the model and return performance metrics
    pass

def optimize_hyperparameters(X_train, y_train):
    # Use cross-validation to find optimal hyperparameters
    pass`
      }
    ],
    programmingLanguages: ['Python']
  },
  {
    id: 'java-challenges',
    title: 'Java Mastery',
    description: 'Tackle Java challenges focusing on OOP principles, concurrency, and enterprise patterns.',
    icon: 'LayoutGrid',
    category: 'Software Engineering',
    phase: 'Phase 2',
    difficultyLevels: ['Intermediate', 'Advanced', 'Monster'],
    academicLevels: ['2nd Year College', '3rd Year College', 'Final Year College', 'Masters'],
    challenges: [
      {
        id: 'design-patterns',
        title: 'Design Pattern Implementation',
        description: 'Implement a solution using appropriate design patterns.',
        points: 250,
        timeLimit: 2400,
        codeTemplate: `// TODO: Implement an online shopping system using appropriate design patterns
// Required patterns: Factory, Observer, Decorator
// The system should allow creating products, notifying customers of price changes,
// and adding features/addons to products dynamically

// Product interface and implementations
interface Product {
    // Your code here
}

// Factory implementation
class ProductFactory {
    // Your code here
}

// Observer implementation for price notifications
interface PriceObserver {
    // Your code here
}

// Decorator implementation for product features
abstract class ProductDecorator implements Product {
    // Your code here
}

// Main class to demonstrate the pattern implementations
public class ShoppingSystem {
    public static void main(String[] args) {
        // Your demo code here
    }
}`
      },
      {
        id: 'concurrency',
        title: 'Concurrent Data Processing',
        description: 'Implement a concurrent solution for processing large datasets.',
        points: 300,
        timeLimit: 1800,
        codeTemplate: `import java.util.List;
import java.util.ArrayList;
import java.util.concurrent.*;

// TODO: Implement a concurrent data processing system
// The system should read data from multiple sources concurrently,
// transform the data, and then aggregate the results

class DataProcessor {
    // Your code here
}

class DataSource {
    private final String name;
    
    public DataSource(String name) {
        this.name = name;
    }
    
    public List<String> readData() {
        // Simulate reading data from a source
        try {
            Thread.sleep(100); // Simulating I/O delay
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        List<String> data = new ArrayList<>();
        for (int i = 0; i < 1000; i++) {
            data.add(name + "-data-" + i);
        }
        return data;
    }
}

public class ConcurrencyExample {
    public static void main(String[] args) {
        // Your demo code here
    }
}`
      }
    ],
    programmingLanguages: ['Java']
  },
  {
    id: 'backend-api',
    title: 'Backend API Challenge',
    description: 'Design and implement robust backend APIs using various technologies.',
    icon: 'Code',
    category: 'Backend Development',
    phase: 'Phase 2',
    difficultyLevels: ['Intermediate', 'Advanced'],
    academicLevels: ['2nd Year College', '3rd Year College', 'Final Year College', 'Masters'],
    challenges: [
      {
        id: 'nodejs-api',
        title: 'Node.js REST API',
        description: 'Build a RESTful API with Node.js, Express, and MongoDB.',
        points: 250,
        timeLimit: 2400,
        codeTemplate: `// TODO: Implement a RESTful API for a blog platform with the following features:
// - User authentication (signup, login)
// - CRUD operations for blog posts
// - Comments functionality
// - User profiles

// File: server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Your code here

// File: models/userModel.js
const mongoose = require('mongoose');

// Your code here

// File: controllers/authController.js
// Your code here

// File: controllers/postController.js
// Your code here

// File: routes/apiRoutes.js
// Your code here`
      },
      {
        id: 'graphql-api',
        title: 'GraphQL API Design',
        description: 'Create a GraphQL API with proper schema design and resolver implementation.',
        points: 300,
        timeLimit: 2400,
        codeTemplate: `// TODO: Implement a GraphQL API for an e-commerce platform with:
// - Product catalog with categories
// - User accounts and authentication
// - Shopping cart functionality
// - Order processing

// File: schema.graphql
// Your schema definitions here

// File: resolvers.js
// Your resolver implementations here

// File: server.js
const { ApolloServer } = require('apollo-server');
const fs = require('fs');
const path = require('path');

// Your code here`
      }
    ],
    programmingLanguages: ['JavaScript', 'TypeScript', 'Python', 'Java']
  },
  {
    id: 'database-optimization',
    title: 'Database Optimization',
    description: 'Optimize database queries, design schemas, and improve performance.',
    icon: 'LayoutGrid',
    category: 'Database Management',
    phase: 'Phase 2',
    difficultyLevels: ['Advanced', 'Monster'],
    academicLevels: ['3rd Year College', 'Final Year College', 'Masters', 'PhD'],
    challenges: [
      {
        id: 'sql-optimization',
        title: 'SQL Query Optimization',
        description: 'Optimize complex SQL queries for better performance.',
        points: 300,
        timeLimit: 1800,
        codeTemplate: `-- TODO: Optimize the following SQL queries for an e-commerce database

-- Query 1: Find top customers by order total
SELECT c.customer_id, c.name, SUM(o.total_amount) as total_spent
FROM customers c
JOIN orders o ON c.customer_id = o.customer_id
WHERE o.order_date >= '2023-01-01'
GROUP BY c.customer_id, c.name
ORDER BY total_spent DESC
LIMIT 10;

-- Query 2: Find products that are frequently purchased together
SELECT p1.product_id, p2.product_id, COUNT(*) as frequency
FROM order_items oi1
JOIN order_items oi2 ON oi1.order_id = oi2.order_id
JOIN products p1 ON oi1.product_id = p1.product_id
JOIN products p2 ON oi2.product_id = p2.product_id
WHERE p1.product_id < p2.product_id
GROUP BY p1.product_id, p2.product_id
ORDER BY frequency DESC
LIMIT 20;

-- Query 3: Calculate monthly sales by category
SELECT 
    DATE_FORMAT(o.order_date, '%Y-%m') as month,
    pc.category_name,
    SUM(oi.quantity * oi.price) as total_sales
FROM orders o
JOIN order_items oi ON o.order_id = oi.order_id
JOIN products p ON oi.product_id = p.product_id
JOIN product_categories pc ON p.category_id = pc.category_id
WHERE o.order_date BETWEEN '2022-01-01' AND '2023-12-31'
GROUP BY DATE_FORMAT(o.order_date, '%Y-%m'), pc.category_name
ORDER BY month, total_sales DESC;`
      },
      {
        id: 'nosql-design',
        title: 'NoSQL Database Design',
        description: 'Design an efficient NoSQL database schema for a social media platform.',
        points: 250,
        timeLimit: 1800,
        codeTemplate: `// TODO: Design a MongoDB schema for a social media platform
// Requirements:
// - User profiles with followers/following
// - Posts with comments and likes
// - News feed generation
// - Direct messaging
// - Notifications

// User schema
const userSchema = {
  // Your code here
};

// Post schema
const postSchema = {
  // Your code here
};

// Comment schema
const commentSchema = {
  // Your code here
};

// Message schema
const messageSchema = {
  // Your code here
};

// Notification schema
const notificationSchema = {
  // Your code here
};

// Indexing strategy
const indexes = [
  // Your indexing strategy here
];

// Example queries
const queries = {
  // generateNewsFeed: {...},
  // getUserFollowers: {...},
  // getPostComments: {...},
};`
      }
    ],
    programmingLanguages: ['SQL', 'NoSQL', 'JavaScript', 'Python']
  },
  {
    id: 'mobile-dev',
    title: 'Mobile App Development',
    description: 'Create components and features for mobile applications using various frameworks.',
    icon: 'Code',
    category: 'Mobile Development',
    phase: 'Phase 1',
    difficultyLevels: ['Intermediate', 'Advanced'],
    academicLevels: ['2nd Year College', '3rd Year College', 'Final Year College'],
    challenges: [
      {
        id: 'flutter-ui',
        title: 'Flutter UI Challenge',
        description: 'Build a complex UI component with Flutter and Dart.',
        points: 200,
        timeLimit: 1800,
        codeTemplate: `// TODO: Implement an interactive contact card component in Flutter
// The component should include:
// - Profile picture with online status indicator
// - Contact info with name, title, phone, email
// - Expandable section for additional details
// - Action buttons (call, message, video)
// - Animations for state changes

import 'package:flutter/material.dart';

class ContactCard extends StatefulWidget {
  // Your code here
  
  @override
  _ContactCardState createState() => _ContactCardState();
}

class _ContactCardState extends State<ContactCard> with SingleTickerProviderStateMixin {
  // Your code here
  
  @override
  Widget build(BuildContext context) {
    // Your code here
    return Container();
  }
}`
      },
      {
        id: 'react-native-nav',
        title: 'React Native Navigation',
        description: 'Implement a complex navigation system in React Native.',
        points: 250,
        timeLimit: 2100,
        codeTemplate: `// TODO: Implement a navigation system for an e-commerce app with:
// - Bottom tab navigation (Home, Search, Cart, Profile)
// - Stack navigation for product details and checkout flow
// - Drawer navigation for categories and settings
// - Modal screens for quick actions
// - Deep linking support

import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Your code here

export default function App() {
  return (
    <NavigationContainer>
      {/* Your navigation structure here */}
    </NavigationContainer>
  );
}`
      }
    ],
    programmingLanguages: ['Dart', 'JavaScript', 'TypeScript', 'Kotlin', 'Swift']
  },
  {
    id: 'devops-challenge',
    title: 'DevOps Automation',
    description: 'Create automation scripts and workflows for modern DevOps practices.',
    icon: 'Award',
    category: 'DevOps',
    phase: 'Phase 2',
    difficultyLevels: ['Advanced', 'Monster'],
    academicLevels: ['Final Year College', 'Masters', 'PhD'],
    challenges: [
      {
        id: 'ci-pipeline',
        title: 'CI Pipeline Configuration',
        description: 'Create a comprehensive CI pipeline configuration for a web application.',
        points: 300,
        timeLimit: 1800,
        codeTemplate: `# TODO: Create a GitHub Actions workflow for a full-stack web application
# Requirements:
# - Run tests for frontend (React) and backend (Node.js)
# - Build and bundle the application
# - Run security scanning
# - Deploy to staging on PR merge to develop branch
# - Deploy to production on release tag
# - Send notifications on failure

name: CI/CD Pipeline

# Your workflow configuration here`
      },
      {
        id: 'kubernetes-config',
        title: 'Kubernetes Deployment',
        description: 'Design a Kubernetes deployment for a microservices architecture.',
        points: 350,
        timeLimit: 2400,
        codeTemplate: `# TODO: Create Kubernetes deployment files for a microservices application
# The application consists of:
# - Frontend service
# - Authentication service
# - Product catalog service
# - Order processing service
# - Database (PostgreSQL)
# - Redis cache
# - Message queue (RabbitMQ)

# Requirements:
# - Proper resource management
# - Horizontal scaling for appropriate services
# - Health checks and restart policies
# - ConfigMaps and Secrets management
# - Service discovery and load balancing
# - Persistent storage for databases
# - Ingress configuration

# frontend-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: frontend
spec:
  # Your configuration here

# Your additional K8s configuration files here`
      }
    ],
    programmingLanguages: ['YAML', 'Shell', 'HCL', 'Docker']
  },
  {
    id: 'system-design',
    title: 'System Design Challenge',
    description: 'Design scalable, resilient systems to solve complex architectural problems.',
    icon: 'LayoutGrid',
    category: 'Architecture',
    phase: 'Phase 2',
    difficultyLevels: ['Advanced', 'Monster'],
    academicLevels: ['Final Year College', 'Masters', 'PhD'],
    challenges: [
      {
        id: 'url-shortener',
        title: 'URL Shortener Service',
        description: 'Design a scalable URL shortening service like bit.ly.',
        points: 350,
        timeLimit: 3600,
        codeTemplate: `// System Design Document: URL Shortener Service
// 
// Please provide a comprehensive design for a URL shortener service that can:
// - Shorten long URLs to unique short URLs
// - Redirect users from short URLs to original URLs
// - Track analytics on URL usage
// - Scale to handle millions of URLs and redirects
// 
// Your solution should include:
// 1. High-level architecture diagram (describe it in text)
// 2. API design
// 3. Database schema
// 4. Shortening algorithm explanation
// 5. Caching strategy
// 6. Scaling approach
// 7. Analytics implementation
// 8. Potential bottlenecks and solutions

// Your design document here
`
      },
      {
        id: 'chat-system',
        title: 'Real-time Chat System',
        description: 'Design a scalable real-time chat system supporting millions of users.',
        points: 400,
        timeLimit: 3600,
        codeTemplate: `// System Design Document: Real-time Chat System
// 
// Please provide a comprehensive design for a real-time chat system that:
// - Supports one-on-one and group messaging
// - Delivers messages in real-time with minimal latency
// - Shows online/offline status and "typing" indicators
// - Stores message history
// - Supports media sharing (images, files)
// - Can scale to millions of concurrent users
// 
// Your solution should include:
// 1. High-level architecture diagram (describe it in text)
// 2. Technology stack recommendations
// 3. Data model
// 4. API design
// 5. Real-time communication approach
// 6. Storage strategy for messages and media
// 7. Scaling strategy for different components
// 8. Handling edge cases (offline users, message delivery guarantees)

// Your design document here
`
      }
    ],
    programmingLanguages: ['System Design', 'Architecture', 'Documentation']
  }
];
