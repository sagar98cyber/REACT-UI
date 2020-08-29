import React from 'react';
import Home from './components/index'
import './App.css';
import Resume from './components/Resume'
import {Route} from 'react-router-dom'


import CssBaseline from '@material-ui/core/CssBaseline'
function App() {
  return (
    <>
      <CssBaseline/>  
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
    </>  
  );
}

export default App;
