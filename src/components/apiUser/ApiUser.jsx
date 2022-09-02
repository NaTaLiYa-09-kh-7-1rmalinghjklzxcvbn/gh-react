import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { getUsers } from "./redux/UsersReducer"

const ApiUser = () => {
    const users = useSelector(state => state.users);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    if (loading) {
        return (
            <h3>Идет загрузка...</h3>
        )
    }

    if (error) {
        return (
            <h3>
                Ошибка
            </h3>
        )
    }

    return (
        <div>
            {users.map(message => {
                return (
                    <div key={message.id}>
                        {message.name}
                    </div>
                )
            })}
        </div>
    )
}

export default ApiUser