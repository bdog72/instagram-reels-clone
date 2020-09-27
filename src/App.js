//
//

import React from 'react';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';

import './styles/App.scss';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className='app'>
      <div className='app__body'>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
