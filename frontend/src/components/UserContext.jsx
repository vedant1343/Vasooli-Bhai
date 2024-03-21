// Create a UserContext component
import React, { createContext, useState, useContext } from "react";
import axios from "axios";

// Create a user context
const UserContext = createContext(null);

// Create a custom UserProvider component
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const register = async (userData) => {
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      body: userData,
    });
    setUser(response.data);
  };

  const login = async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setUser(response.data);
    } catch (e) {
      console.error(e);
      setUser(null);
    }
    return true;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook to access the user context
export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
