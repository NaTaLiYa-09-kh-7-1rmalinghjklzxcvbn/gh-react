import React from 'react';
import { db } from '../services/firebase';
import '../Style.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const HomePage = () => {
    const [data, setData] = useState({});

    const removeContact = (id) => {
        db.child(`contacts/${id}`).remove()
    }

    useEffect(() => {
        db.child('contacts').on('value', (cont) => {
            if (cont.val() !== null) {
                setData({ ...cont.val() })
            }
            else {
                setData({})
            }
        })
        return () => { setData({}) }
    }, [])

    return (
        <div style={{ marginTop: '100px' }}>
            <table className='styled-table'>
                <thead>
                    <tr>
                        <th style={{ textAlign: 'center' }}>No</th>
                        <th style={{ textAlign: 'center' }}>Name</th>
                        <th style={{ textAlign: 'center' }}>Email</th>
                        <th style={{ textAlign: 'center' }}>Contact</th>
                        <th style={{ textAlign: 'center' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((id, index) => {
                        return (
                            <tr key={data[id].name}>
                                <th scope={'row'}>{index + 1}</th>
                                <td>{data[id].name}</td>
                                <td>{data[id].email}</td>
                                <td>{data[id].contact}</td>
                                <td>
                                    <button style={{ marginRight: '3px' }}
                                        onClick={() => removeContact(id)}>
                                        x
                                    </button>
                                    <Link to={"/view/:id"}>
                                        <button>View</button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default HomePage