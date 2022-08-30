
import "./App.css";

import { createContext } from "react";
import Home from "./components/Home";
import Header from "./components/Header";
import useLocalStorage from 'use-local-storage'



function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };
  return (
    <>
     
     <div className="app" data-theme={theme}>
    
      
         <Header switchTheme={switchTheme} />
        <Home /> 
   {/* <button onClick={switchTheme} theme={theme}>{theme === 'light'? 'Dark': 'Light'} mode</button> */}
        </div>
     
    
    </>
  );
}

export default App;
