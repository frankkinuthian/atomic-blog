# 🚀 The Atomic Blog

A modern React application demonstrating efficient state management and component composition.

## 📋 Overview

The Atomic Blog is a dynamic blog application that allows users to:

- View and search through blog posts
- Create new posts
- Access a large archive of historical posts
- Toggle between light and dark modes

## 🏗️ Architecture

### Component Hierarchy

```
App
├── Header
│   ├── Results (displays post count)
│   └── SearchPosts (handles search input)
├── Main
│   ├── FormAddPost (adds new posts)
│   └── Posts
│       └── List (displays posts)
└── Archive (contains historical posts)
```

### State Management

#### Top-Level State (App Component)

- `posts`: Array of current blog posts
- `searchQuery`: Search input state
- `isFakeDark`: Theme toggle state

#### Data Flow

1. **Posts Management**

   - Initial state: 30 random posts
   - Add new posts via form or archive
   - Clear all posts functionality
   - Real-time post filtering based on search

2. **Search Functionality**

   - Live search filtering
   - Case-insensitive search across title and body
   - Derived state for filtered posts

3. **Post Creation**

   - Form with title and body inputs
   - Validation before submission
   - Immediate UI update on new post

4. **Archive System**
   - Separate state with 10,000 historical posts
   - Toggle visibility
   - Add archived posts to main feed

## 🔄 State Flow

### Props Distribution

- **Header**

  - `posts`: Current filtered posts
  - `onClearPosts`: Post clearing function
  - `searchQuery`: Current search term
  - `setSearchQuery`: Search update function

- **Main**

  - `posts`: Current filtered posts
  - `onAddPost`: Post addition function

- **Archive**
  - `onAddPost`: Post addition function

### State Management Pattern

- Utilizes React's built-in state management
- Follows unidirectional data flow
- Implements lifting state up pattern
- Uses derived state for performance
- Local state for UI-specific features

## 🎨 Features

1. **Post Management**

   - Create new posts
   - View existing posts
   - Clear all posts
   - Search through posts

2. **Archive System**

   - Access to historical posts
   - Add archived posts to main feed
   - Toggle archive visibility

3. **Theme Toggle**

   - Switch between light and dark modes
   - Persistent theme state

4. **Search Functionality**
   - Real-time search results
   - Search through post titles and bodies
   - Case-insensitive searching

## 🛠️ Technical Implementation

- Built with React
- Uses functional components
- Implements React Hooks (useState, useEffect)
- Efficient state management
- Optimized rendering with derived state
- Component-based architecture
- Prop drilling for data flow

## 💡 Best Practices

- Single responsibility components
- Unidirectional data flow
- Lifted state management
- Controlled components
- Optimized performance
- Clean and maintainable code structure
