import { createContext, useContext } from "react";

// Create a context to store all the shared state and handlers
const PostContext = createContext();

// Custom hook to consume the PostContext and throw error if used outside Provider
function usePosts() {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePosts must be used within a PostProvider");
  }
  return context;
}

export { PostContext, usePosts };
