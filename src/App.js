import React from 'react';
import { BrowserRouter, Route , Switch } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound'
import About from './pages/About'

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/a-propos" component={About} />
      <Route component={NotFound} />
    </Switch>    
    </BrowserRouter>
  )
}

export default App
