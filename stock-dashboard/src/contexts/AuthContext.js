import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [email, setEmail] = useState(null);

  useEffect(() => {
    if (token) {
      fetch("http://localhost:8080/api/auth/me", {
        headers: { Authorization: "Bearer " + token }
      })
      .then(r => r.ok ? r.text() : null)
      .then(data => setEmail(data));
    } else {
      setEmail(null);
    }
  }, [token]);

  const login = (jwt) => {
    localStorage.setItem("token", jwt);
    setToken(jwt);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setEmail(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout, email }}>
      {children}
    </AuthContext.Provider>
  );
};
