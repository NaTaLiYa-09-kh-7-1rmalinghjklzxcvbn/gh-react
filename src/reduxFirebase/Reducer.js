import * as types from './ActionTypes'

const initialState = {
    loading: false,
    error: null,
    currentUser: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_START:
        case types.REGISTER_START:
        case types.LOGOUT_START:
            return {
                ...state,
                loading: true
            };
        case types.LOGIN_SUCCESS:
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                loading: false,
                email: '',
                password: ''
            }
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                currentUser: null
            }
        case types.REGISTER_ERROR:
        case types.REGISTER_ERROR:
        case types.LOGOUT_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }



}