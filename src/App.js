import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("dark"); //wether darkmode is enabled or not
  const [Pinkmode, setPinkmode] = useState("pink");
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
    }
  }
  const togglePinkMode = () => {
    if (mode === 'light') {
      setMode('dark');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'pink'
      document.body.style.color = 'black'
    }
  }
  return (
    <>
      <Router>
        <Navbar title="UtilsBar" mode={mode} toggleMode={toggleMode} togglePinkMode={togglePinkMode} Pinkmode={Pinkmode} />
        <div className="container">
        //this is link rendering switches. by this you can navigate to other component without loading the page
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm heading="Enter the text to analyze" mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
