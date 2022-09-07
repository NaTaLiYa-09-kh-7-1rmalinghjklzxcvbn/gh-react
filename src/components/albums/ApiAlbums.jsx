import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAlbums } from "./redux/AlbumsReducer";


const ApiAlbums = () => {
    const albums = useSelector(state => state.albums);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAlbums())
    }, [])

    const restart = () => {
        dispatch(getAlbums())
    }

    if (loading) {
        return (
            <h3>
                Идет загрузка...
            </h3>
        )
    }
    if (error) {
        return (
            <h3>
                Ошибка. <button onClick={restart}>Обновить</button>
            </h3>
        )
    }
    return (
        <div>
            {albums.map(alb => {
                return (
                    <div key={alb.id}>
                        {alb.title}
                    </div>
                )

            })}
        </div>
    )
}

export default ApiAlbums