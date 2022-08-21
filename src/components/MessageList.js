import React, { useRef } from 'react';
import { useState, useEffect } from 'react'
import MessagePost from './MessagePost';
//import MyInput from './MyInput';
import { Button } from '@mui/material';
import { FormControl, TextField } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { blue } from '@mui/material/colors';


const theme = createTheme({
    palette: {
        primary: {
            main: blue[400],
        }
    }
})
const MessageList = () => {
    const initialMessageList = []
    const [messageList, setMessageList] = useState(initialMessageList)
    const [alertMessage, setAlertMessage] = useState(null)
    const [messages, setMessages] = useState({ text: '', author: '' })
    const ref = useRef(null)

    const addMessage = (e) => {
        e.preventDefault()
        setMessageList([...messageList, { ...messages, id: Date.now() }])
        setMessages({ text: '', author: '' })
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
    }, [messageList]);


    const change = (e) => {
        e.preventDefault()
        return setAlertMessage(null)
    }
    return (
        <ThemeProvider theme={theme}>
            <div>
                <h1>Список сообщений</h1>
                {messageList.map((message, index) =>
                    <MessagePost number={index + 1} key={message.id} message={message} />
                )}
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
                            label="Author"
                            color='success'
                            value={messages.author}
                            onChange={e => setMessages({ ...messages, author: e.target.value })}
                        />

                    </FormControl>
                    {/* <MyInput
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

            </MyInput>*/}
                    <Button variant="contained"
                        color='primary'
                        type='button' onClick={addMessage}
                        sx={{ mt: '10px' }}
                    >
                        Отправить
                    </Button>

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

export default MessageList