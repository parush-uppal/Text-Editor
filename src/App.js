
import { useState } from 'react';
import About from './About';
import './App.css';
import Alert from './components/Alert';
import Nav   from  './components/Nav';
import TextForm from './components/TextForm';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {

  const[mode,setMode]=useState("light");  // weather dark mode is enabled or not
  const [alert,setalert] = useState(null);


  const showalert = (message,type)=>{
    setalert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  
  const toggleModew = ()=>{
    setMode('light');
    document.body.style.backgroundColor='white';
    showalert("Light Theme has been applied","success");
  }

  const toggleMode = ()=>{
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showalert("Dark Theme has been applied","success");
  }
  const toggleModey = ()=>{
    document.body.style.backgroundColor='yellow';
    setMode('yellow')
    showalert("Yellow Theme has been applied","success");
  }
  const toggleModeg = ()=>{
    setMode('green')
    document.body.style.backgroundColor='green';
    showalert("Green Theme has been applied","success");
  }


  return (
  <>
  <BrowserRouter>
  <Nav mode={mode} toggleMode={toggleMode} toggleModey={toggleModey} toggleModeg={toggleModeg} toggleModew={toggleModew}></Nav>

   <Alert alert={alert}/>
   <div className="container my-3">
    <Routes>
  
          <Route exact path="/about"
           element={ <About mode={mode}></About>} />
         
          <Route exact path="/"
            element={ <TextForm mode={mode} showalert={showalert}/>}/>
          
          </Routes>
    </div>
   </BrowserRouter>
  </>
  );
}

export default App;
