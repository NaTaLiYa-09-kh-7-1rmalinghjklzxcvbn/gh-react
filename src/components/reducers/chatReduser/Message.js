import React from "react";
import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux";



const Message = () => {
    const messages = useSelector(state => state.messages.messages)
    const { id } = useParams()
    const message = messages.filter(item => {
        if (!id) return true;
        return item.chatId === +(id)
    })

    return (
        <div>
            <h1>Messages</h1>
            {message.map((item) => {
                return (
                    <div key={item.id}>
                        {item.text}
                    </div>
                )

            })}
        </div>
    )
}

export default Message