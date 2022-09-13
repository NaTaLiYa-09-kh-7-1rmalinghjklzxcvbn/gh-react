import { ErrorAlbums, LoadAlbums } from "./ActionCreator"
import { ERROR_ALBUMS, GET_ALBUMS, LOAD_ALBUMS } from "./ActionTypes"

const initialState = {
    albums: [],
    loading: false,
    error: null
}

export const AlbumsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ALBUMS:
            return {
                ...state,
                loading: true
            }
        case GET_ALBUMS:
            return {
                ...state,
                albums: action.payload,
                loading: false
            }
        case ERROR_ALBUMS:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state
    }
}

export const getAlbums = () => {
    return async dispatch => {
        dispatch(LoadAlbums())
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/albums')
            const data = await response.json()
            dispatch({ type: GET_ALBUMS, payload: data })
        } catch (e) {
            dispatch(ErrorAlbums(e))
        }

    }
}
