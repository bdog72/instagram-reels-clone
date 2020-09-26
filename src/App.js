//
//

import React from 'react';
import Sidebar from './components/Sidebar';

import './styles/App.scss';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <div className='app__body'>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
