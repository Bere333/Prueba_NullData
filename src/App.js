import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Register from './Views/Register/Register';
import AllRegisters from './Views/AllRegisters/AllRegisters';
import {MyMapComponent} from './Components/Map/Map';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Route exact path='/' component={Register} />
        <Route path='/registros' component={AllRegisters} />
        <Route path='/ubicacion' component={MyMapComponent}/>
  </Router>
  );
}

export default App;
