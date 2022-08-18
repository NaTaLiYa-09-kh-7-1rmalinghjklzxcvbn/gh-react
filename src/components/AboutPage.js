import React from 'react';
import { useState } from 'react';
import '../styles/App.css';
import ChatList from './ChatList';
import List from './List';

function AboutPage() {

    const [chats, setChats] = useState([
        { id: '1', name: 'post', text: 'hello' },
        { id: '2', name: 'shop', text: 'I good' },
        { id: '3', name: 'servis', text: 'Welcom' }
    ])
    const createPost = (newPost) => {
        setChats([...chats, newPost])
    }
    const removeMessage = (message) => {
        setChats(chats.filter(messages => messages.id !== message.id))
    }

    return (
        <div>
            <div className='list'>
                <div style={{ width: '50%', marginRight: '5%' }}><h2>Список чатов</h2>
                    {chats.map((message, index) =>
                        <ChatList remove={removeMessage} number={index + 1} message={message} key={message.id} />
                    )}

                </div>
                <List create={createPost} />
            </div>
        </div>
    );

}
export default AboutPage;