import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Board from './Board';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path='/' component ={Board} />
      </div>
    </Router>
  );
};

export default App;