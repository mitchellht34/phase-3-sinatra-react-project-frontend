import './App.css';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path='/comics'>
            <h1>My Comics</h1>
          </Route>
          <Route path='/characters'>
            <h1>Characters I know about</h1>
          </Route>
          <Route path='/'>
            <h1>Welcome to My Ever Expanding Comic Database</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
