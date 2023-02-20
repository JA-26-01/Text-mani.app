import './App.css';
import React,{useState}  from 'react';
import About from './components/About';
import Navbar from './components/Navbar.js'
import Textform from './components/Textform';

function App() {
  const [mode,setMode] = useState('light');

  const toggleMode = () =>
  {
    if(mode === "light")
     {
      setMode("dark")
      document.body.style.backgroundColor="black"
      document.body.style.color="white"
     }
    else
    {
      setMode("light")
      document.body.style.backgroundColor="white"
      document.body.style.color="black"
    }
  }
  return (
    <>
     <Navbar title="Text-Mani" mode={mode} toggleMode={toggleMode}/>
     <div className='container my-3'>
     <Textform heading="Enter Text Here:"/>
     </div>
    </>
  );
}

export default App;
