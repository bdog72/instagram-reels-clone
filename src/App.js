//
//

import React from 'react';
import './styles/App.scss';

function App() {
  return (
    <div className='app'>
      <div className='app__top'>
        <img
          className='app__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png'
          alt=''
        />
        <h1>Reels</h1>
      </div>
      <div className='app__videos'></div>
    </div>
  );
}

export default App;
