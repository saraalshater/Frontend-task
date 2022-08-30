import React from "react";
import "./App.css";
import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
export const ThemeContext = createContext(null);

function App() {
 const [theme, setTheme] = useState("light");

 const toggleTheme = () => {
  setTheme((curr) => (curr === "light" ? "dark" : "light"))
 }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      <div className="App" id={theme}>
     
      <Routes>
          <Route path="/" exact element={<Home />} />
          </Routes>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
