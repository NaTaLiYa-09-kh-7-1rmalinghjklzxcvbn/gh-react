import { ERROR_ALBUMS, LOAD_ALBUMS } from "./ActionTypes"

export const LoadAlbums = () => (
    {
        type: LOAD_ALBUMS
    }
)

export const ErrorAlbums = (e) => (
    {
        type: ERROR_ALBUMS,
        payload: e.toString()
    }
)