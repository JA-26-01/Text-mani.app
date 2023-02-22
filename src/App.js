import './App.css';
import React,{useState}  from 'react';
import About from './components/About';
import Navbar from './components/Navbar.js'
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert]= useState(null);

  const showAlert=(message,type)=>
  {
       setAlert({
        msg: message,
        type: type
       })
       setTimeout(() => {
        setAlert(null)
       }, 1200);
  }

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
     <div className='container my-3'>
     <Router>
     <Navbar title="Text-Mani" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <Routes>
          <Route path="/" element={<Textform heading="Enter Text Here:"showAlert={showAlert}/>} />
          <Route exact path="/about" element={<About />}/>
      </Routes>
      </Router>
     </div>
    </>
  );
}

export default App;
