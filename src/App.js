import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Register from './Views/Register/Register';
import AllRegisters from './Views/AllRegisters/AllRegisters';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Route  exact path='/' component={Register} />
        <Route  exact path='/registros' component={AllRegisters} />

  </Router>
  );
}

export default App;
