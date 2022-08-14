import React from 'react';
import { useState, useEffect } from 'react';
import Message from './components/Message';
import Counter from './components/Counter';
import './styles/App.css';
import MessagePost from './components/MessagePost';
import MyInput from './components/MyInput';
import MessageList from './components/MessageList';
import ChatList from './components/ChatList';
import List from './components/List';

function App() {
  const name = 'Jonn';
  const [chats, setChats] = useState([
    { id: '1', name: 'post', text: 'hello' },
    { id: '2', name: 'shop', text: 'I good' },
    { id: '3', name: 'servis', text: 'Welcom' }
  ])


  return (
    <div>

      <div className='list'>
        <div style={{ width: '50%', marginRight: '5%' }}><h2>Список чатов</h2>
          {chats.map(message =>
            <ChatList message={message} key={message.id} />
          )}
        </div>
        <List />

      </div>


    </div>
  );

}
export default App;
