const InitialState = {
    chats: [
        { id: 1, name: 'Jonn' },
        { id: 2, name: 'Nike' },
        { id: 3, name: 'Alex' }
    ]
}

export const chatsReducer = (state = InitialState, action) => {
    switch (action.type) {
        case 'delete_chat':
            return {
                ...state,
                chats: [...state.chats.filter(chat => chat.id !== action.payload)]
            }

        case 'add_chats':
            return {
                ...state,
                chats: [...state.chats, action.payload]

            }
        default:
            return state
    }
}
