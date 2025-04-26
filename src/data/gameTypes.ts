
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
    id: 'typing-challenge',
    title: 'Speed Typing Challenge',
    description: 'Test your coding speed and accuracy by typing code snippets as fast as possible.',
    icon: 'Code',
    category: 'Typing',
    phase: 'Phase 1',
    difficultyLevels: ['Beginner', 'Intermediate', 'Advanced'],
    academicLevels: ['School Students', '1st Year College', '2nd Year College', '3rd Year College', 'Final Year College'],
    challenges: [
      {
        id: 'js-basics',
        title: 'JavaScript Basics',
        description: 'Type the following JavaScript basic syntax as fast as you can with high accuracy.',
        points: 100,
        timeLimit: 120,
        codeTemplate: `function calculateArea(length, width) {
  // Calculate the area of a rectangle
  const area = length * width;
  return area;
}

const printMessage = (message) => {
  console.log(\`The message is: \${message}\`);
};

// Create an array and filter even numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);`
      },
      {
        id: 'react-component',
        title: 'React Component',
        description: 'Type this React functional component with high accuracy.',
        points: 150,
        timeLimit: 180,
        codeTemplate: `import React, { useState, useEffect } from 'react';

function UserProfile({ userId, onUpdate }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(\`/api/users/\${userId}\`);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchUser();
  }, [userId]);
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <button onClick={() => onUpdate(user)}>
        Edit Profile
      </button>
    </div>
  );
}`
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
  }
];

