import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const[mode, setMode] = useState('light');
  // const[inText, setInText] = useState('Enable dark mode');
  const[alert, setAlert] =useState(null);

  const showAlert = (message, type)=>{
    setAlert({msg: message,
      type : type});

      setTimeout(()=>{
        setAlert(null);
      },1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      // setInText('Enable light mode');
      document.body.style.backgroundColor = "#102354";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils Dark Mode";


      //This thing leaves a bad user impact- but it is kinda interesting 
      // in terms of dynamically changing the title of website.

      // setInterval(()=>{
      //   document.title = "TextUtils is amazing";
      // },2000);
      // setInterval(()=>{
      //   document.title = "Download TextUtils now";
      // },1500);

    }
    else {
      setMode('light');
      // setInText('Enable Dark Mode');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils Light Mode";
    }
  }

  return (
    <Router>
    <Navbar title = "TextUtils" mode={mode} toggleMode = {toggleMode}  />
    <Alert alert = {alert}/>
    <div className="container my-3">
    
    <Routes>
          <Route exact path="/about" element={<About mode={mode} />}>  
          </Route>
          <Route exact path="/" element={<TextForm heading = "Enter the text to analyze below" mode={mode} showAlert={showAlert} />}>            
          </Route>
    </Routes>  
    </div>
    </Router>
    
  );
}

export default App;
