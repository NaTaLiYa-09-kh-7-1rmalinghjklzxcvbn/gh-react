const initialState = {
    messages: [
        {
            id: 1,
            text: 'How are you?',
            chatId: 2
        },
        {
            id: 2,
            text: 'good',
            chatId: 1
        },
        {
            id: 3,
            text: 'bad',
            chatId: 3
        }

    ]
}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add_message':
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        case 'delete_message':
            return {
                ...state,
                messages: [...state.messages.filter(message => message.id !== action.payload)]
            }

        default:
            return state
    }

}