import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import ComicContainer from './containers/ComicContainer'
import CharacterContainer from './containers/CharacterContainer'
import FormContainer from './containers/FormContainer'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path='/comics'>
            <ComicContainer />
          </Route>
          <Route path='/characters'>
            <CharacterContainer />
          </Route>
          <Route path='/new'>
            <FormContainer />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
