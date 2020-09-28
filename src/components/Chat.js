//
//
import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';

import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from '@material-ui/icons';
import '../styles/Chat.scss';

function Chat() {
  const [input, setInput] = useState('');
  const [seed, setSeed] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
    // setInput('');
  }, []);

  const funnyAvatarImage = `https://avatars.dicebear.com/api/human/${seed}.svg`;

  const sendMessage = (e) => {
    e.preventDefault();
    console.log('You typed ->', input);
    setInput('');
  };

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
        <p className={`chat__message ${true && 'chat__receiver'}`}>
          <span className='chat__name'>Bozo Boy</span> Hey Guys{' '}
          <span className='chat__timestamp'>4:20pm</span>
        </p>
      </div>

      <div className='chat__footer'>
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type='text'
            placeholder='Type a Message...'
          />
          <button onClick={sendMessage} type='submit'>
            Send A Message
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
