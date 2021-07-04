import './App.css';
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ButtonExample from './Components/Button/ButtonExample';
import AvatarExample from './Components/Avatar/AvatarExample';
import SpinnerExample from './Components/Spinner/SpinnerExample';

function App() {
  return (
    // <div >
    //  <ButtonExample></ButtonExample>
    // </div>
    <Router>
    <SpinnerExample></SpinnerExample>
    <ButtonExample></ButtonExample>
    <AvatarExample></AvatarExample>
      <Switch>
      
      
      </Switch>
   
  </Router>
  );
}

export default App;
