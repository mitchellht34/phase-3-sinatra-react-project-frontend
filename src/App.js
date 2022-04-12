import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import ComicContainer from './containers/ComicContainer'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <h1>Welcome to My Ever Expanding Comic Database</h1>
        <Switch>
          <Route path='/comics'>
            <ComicContainer />
          </Route>
          <Route path='/characters'>
            <h2>Character Info</h2>
          </Route>
          <Route path='/new'>
            <h2>Create New</h2>
          </Route>
          <Route path='/'>
            <h2>Home</h2>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
