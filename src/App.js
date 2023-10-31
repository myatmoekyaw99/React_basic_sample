import React,{ useState } from 'react';
import './App.css';
import ContentSection from './components/ContentSection';
import Navbar from './components/Navbar';
import ThemeProvider from './contexts/ThemeContext';

export const NavContext = React.createContext();

function App() {

  const [checkText,setCheckText] = useState('');

  return (
    <ThemeProvider className="App">
      <Navbar textUpdate={setCheckText}/>
      <ContentSection text={checkText}/>
    </ThemeProvider>
  );
}

export default App;
