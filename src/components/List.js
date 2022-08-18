import React, { useRef } from 'react';
import { useState, useEffect } from 'react'
import ChatList from './ChatList';
import { Button } from '@mui/material';
import { FormControl, TextField } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { blue } from '@mui/material/colors';
import { create } from '@mui/material/styles/createTransitions';


const theme = createTheme({
    palette: {
        primary: {
            main: blue[500],
        }
    }
})
const List = ({ create, remove }) => {
    const initialMessageList = []
    const [messageList, setMessageList] = useState(initialMessageList)
    const [alertMessage, setAlertMessage] = useState(null)
    const [messages, setMessages] = useState({ text: '', name: '' })
    const ref = useRef(null)

    const addMessage = (e) => {
        e.preventDefault()
        const newPost = {
            ...messages, id: Date.now()
        }
        create(newPost)
        setMessages({ text: '', name: '' })
        ref.current.focus()
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
        ref.current.focus()
    }, [create]);


    const change = (e) => {
        e.preventDefault()
        setAlertMessage(null)
        ref.current.focus()
    }
    return (
        <ThemeProvider theme={theme}>
            <div>
                <h2>Сообщение</h2>

                <form className='form'>
                    <FormControl sx={{ width: '90%' }}>
                        <TextField
                            helperText="Please enter your text"
                            id="demo-helper-text-misaligned"
                            label="Text"
                            color='warning'
                            value={messages.text}
                            inputRef={ref}
                            onChange={e => setMessages({ ...messages, text: e.target.value })}
                        />
                        <TextField
                            helperText="Please enter your author"
                            id="demo-helper-text-misaligned"
                            label="Name"
                            color='success'
                            value={messages.name}
                            onChange={e => setMessages({ ...messages, name: e.target.value })}
                        />

                    </FormControl>

                    <Button variant="contained"
                        color='primary'
                        type='button' onClick={addMessage}
                        sx={{ mt: '10px', width: '90%' }}
                    >
                        Отправить
                    </Button>
                    {messageList.map((message, index) =>

                        <ChatList remove={remove} sx={{ width: '50%' }} number={index + 1} key={message.id} message={message} />
                    )}
                    {alertMessage &&
                        <div className='message'>
                            <h1>{alertMessage}</h1>
                            <Button
                                variant="contained"
                                sx={{ margin: '10px' }}
                                size="medium"
                                type='button' className='btn' onClick={change}>
                                x
                            </Button>
                        </div>
                    }
                </form>
            </div>
        </ThemeProvider>
    )
}

export default List