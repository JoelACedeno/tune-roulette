import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Generator from './Generator/Generator';
import "./App.css"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Generator />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
