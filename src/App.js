import React from 'react';
import { useState, useEffect } from 'react';
import Message from './components/Message';
import Counter from './components/Counter';
import './styles/App.css';
import MessagePost from './components/MessagePost';
import MyInput from './components/MyInput';
import MessageList from './components/MessageList';

function App() {
  const name = 'Jonn';



  return (
    <div>
      <Message name={name} />
      <Counter />

      <MessageList />




    </div>
  );

}
export default App;
