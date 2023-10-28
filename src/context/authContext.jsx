import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // Check if the user is authenticated based on a stored token in localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // Function to log in a user
  const login = () => {
    setIsAuthenticated({
      id: 1, name: 'Afra'
    });
  };

  // Function to log out a user
  const logout = () => {
    setIsAuthenticated(false);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(isAuthenticated));
  }, [isAuthenticated])

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
