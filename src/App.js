import React from 'react';
import {HomePage} from "./components/pages/homepage/homepage.component"
import "./App.css"
import { Switch, Route } from 'react-router-dom';

const HatsPage=()=>(<div>
  <h1>HATSPAGE</h1>
  </div>)


function App() {
    return <div className='App'>
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
    <Route exact path="/hats" component={HatsPage}></Route>
    </Switch>
      <HomePage />
    </div>;
  }

export default App;
