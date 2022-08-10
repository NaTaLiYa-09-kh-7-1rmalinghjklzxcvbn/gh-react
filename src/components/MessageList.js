import React from 'react';
import { useState, useEffect } from 'react'
import MessagePost from './MessagePost';
import MyInput from './MyInput';




const MessageList = () => {
    const initialMessageList = []

    const [messageList, setMessageList] = useState(initialMessageList)


    const [alertMessage, setAlertMessage] = useState(null)
    const [messages, setMessages] = useState({ text: '', author: '' })

    const addMessage = (e) => {
        e.preventDefault()
        setMessageList([...messageList, { ...messages, id: Date.now() }])
        setMessages({ text: '', author: '' })
    }

    const sendAlert = () => {
        setTimeout(() => {
            setAlertMessage('Сообщение отправлено!')
        }, 1500)
    }

    useEffect(() => {
        if (messageList != initialMessageList) {
            sendAlert()
        }
    }, [messageList]);


    const change = (e) => {
        e.preventDefault()
        return setAlertMessage(null)
    }
    return (
        <div>
            <h1>Список сообщений</h1>
            {messageList.map((message, index) =>
                <MessagePost number={index + 1} key={message.id} message={message} />
            )}
            <form className='form'>
                <MyInput
                    value={messages.text}
                    type='text'
                    placeholder='Введите текст'
                    onChange={e => setMessages({ ...messages, text: e.target.value })}
                />
                <MyInput
                    type='text'
                    placeholder='Введите автора'
                    value={messages.author}
                    onChange={e => setMessages({ ...messages, author: e.target.value })}
                >

                </MyInput>
                <button type='button' onClick={addMessage}>Отправить</button>
                {alertMessage &&
                    <div className='message'>
                        <h1>{alertMessage}</h1>
                        <button type='button' className='btn' onClick={change}>x</button>
                    </div>

                }

            </form>
        </div>
    )
}

export default MessageList