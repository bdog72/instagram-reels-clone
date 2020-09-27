//
//

import React, { useEffect, useState } from 'react';

import '../styles/SidebarChat.scss';
import { Avatar, Button } from '@material-ui/core';

function SidebarChat({ addNewChat }) {
  const [seed, setSeed] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const funnyAvatarImage = `https://avatars.dicebear.com/api/human/${seed}.svg`;

  const createChat = () => {
    const roomName = prompt('Please enter a name for chat room');

    console.log(roomName);
    if (roomName) {
    }
  };

  return !addNewChat ? (
    <div className='sidebarChat'>
      <Avatar src={funnyAvatarImage} />
      <div className='sidebarChat__info'>
        <h2>Room Name</h2>
        <h3>{addNewChat}</h3>
        <p>Last Message...</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className='sidebarChat'>
      <Button variant='contained' color='primary'>
        {/* <h1>Add New Chat</h1> */}
        Add New Chat
      </Button>
    </div>
  );
}

export default SidebarChat;

// let random = Math.floor(Math.random() * 10 + 1);

// const random = () => {
//   return Math.floor(Math.random() * 100 + 1);
// };
