import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
//
//

import React, { useEffect, useState } from 'react';

import '../styles/Chat.scss';

function Chat() {
  const [seed, setSeed] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const funnyAvatarImage = `https://avatars.dicebear.com/api/human/${seed}.svg`;

  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar src={funnyAvatarImage} />

        <div className='chat__headerInfo'>
          <h3>Room Name</h3>
          <p>Last Seen...</p>
        </div>

        <div className='chat__headerRight'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className='chat__body'>
        <h1>BOZO BOY</h1>
      </div>

      <div className='chat__footer'></div>
    </div>
  );
}

export default Chat;
