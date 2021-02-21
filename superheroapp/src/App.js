import React from "react";
import './App.css';
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {Header} from "./Components/Header";
import {SavedList} from "./Components/SavedList";
import {SearchList} from "./Components/SearchList";

import './lib/font-awesome/css/all.min.css';
import  {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/"><SearchList /></Route>
        <Route path="/saved"><SavedList /></Route>
       </Switch> 
     </Router> 
     </GlobalProvider>
  );
}

export default App;
