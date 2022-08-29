import { useSelector, useDispatch } from "react-redux";
import { useState, useRef } from "react";
import { getMessage } from "./MessageSelector";
import { getChats } from "./ChatSelector";

const Store = () => {
    const chats = useSelector(getChats)
    const messages = useSelector(getMessage);
    const [text, setText] = useState('');
    const [name, setName] = useState('')
    const dispatch = useDispatch();

    const addMessage = () => {
        const obj = {
            id: Date.now(),
            title: text
        }
        dispatch({ type: 'add_message', payload: obj })
        setText('')

    }
    const deleteMessage = (id) => {
        dispatch({ type: 'delete_message', payload: id })
    }

    const addChats = () => {
        const obj = {
            id: Date.now(),
            name: name
        }
        dispatch({ type: 'add_chats', payload: obj, })
        setName('')
    }

    const deleteChat = (id) => {
        dispatch({
            type: 'delete_chat', payload: id, meta: {
                delay: 2000
            }
        })
    }
    const handleChange = ((e) => setName(e.target.value))


    return (
        <div>
            <input value={text} onChange={e => setText(e.target.value)} />
            <button onClick={addMessage}>Добавить сообщение</button>
            {messages.map((message, index) => {
                return (
                    <div key={message.id}>
                        <h2>{index + 1}</h2>
                        {message.text}
                        <button onClick={() => deleteMessage(message.id)}>Удалить</button>
                    </div>
                )

            })}
            <input
                value={name}
                onChange={handleChange} />
            <button onClick={addChats}>Добавить чат</button>
            {chats.map((chat, index) => {
                return (
                    <h2
                        key={chat.id}>{index + 1}
                        <div>{chat.name}</div>
                        <button onClick={() => deleteChat(chat.id)}>Удалить</button>
                    </h2>
                )
            })
            }
        </div>
    )
}

export default Store