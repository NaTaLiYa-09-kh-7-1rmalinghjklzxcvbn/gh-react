const initialState = {
    users: [],
    loading: false,
    error: null

}

export const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'isLoading':
            return {
                ...state,
                loading: true
            }
        case 'getUsers':
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case 'isError':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export const getUsers = () => {
    return async dispatch => {
        dispatch({ type: 'isLoading' })
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            dispatch({ type: 'getUsers', payload: data })
        } catch (e) {
            dispatch({ type: 'isError', payload: e.toString() })
        }


    }

}