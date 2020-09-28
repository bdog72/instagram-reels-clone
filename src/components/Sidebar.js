//
//

import React, { useEffect, useState } from 'react';
import SidebarChat from './SidebarChat';

import '../styles/Sidebar.scss';
import db from '../firebase';

import { Avatar, IconButton } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';

function Sidebar() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('rooms').onSnapshot((snapshot) => {
      return setRooms(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            data: doc.data(),
          };
        })
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <Avatar />
        <div className='sidebar__headerRight'>
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className='sidebar__search'>
        <div className='sidebar__searchContainer'>
          <SearchOutlined />
          <input placeholder='Search or start new chat' type='text' />
        </div>
      </div>
      <div className='sidebar__chats'>
        <SidebarChat addNewChat='bozo' />
        {rooms.map((room) => {
          return (
            <SidebarChat key={room.id} id={room.id} name={room.data.name} />
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
