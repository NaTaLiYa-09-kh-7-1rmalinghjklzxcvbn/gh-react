import React from 'react'
import { useState } from 'react';
import { db } from '../services/firebase'
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
    name: '',
    email: '',
    contact: '',
}
const AddContactPage = () => {
    const [state, setState] = useState(initialState)
    const { name, email, contact } = state

    const { id } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !contact) {
            toast.error("Please provide value into each input field");
        } else {
            if (!id) {
                db.child("contacts").push(state, (err) => {
                    if (err) {
                        toast.error(err);
                    } else {
                        toast.success("Contact added successfully");
                    }
                });
            } else {
                db.child(`contacts/${id}`).set(state, (err) => {
                    if (err) {
                        toast.error(err);
                    } else {
                        toast.success("Contact updated successfully");
                    }
                });
            }
        } setState({ state: '', name: '', email: '' })
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });

    }

    return (
        <div>
            <form onClick={handleSubmit}>
                <label htmlFor={'name'}>Name</label>
                <input id={'name'} name={'name'} onChange={handleChange}
                    value={name} />
                <label htmlFor={'email'}>Email</label>
                <input id={'email'} name={'email'} onChange={handleChange}
                    value={email} />
                <label htmlFor={'contact'}>Contact</label>
                <input id={'contact'} name={'contact'} onChange={handleChange} value={contact}></input>
                <input type={'submit'} value={'save'} />
            </form>
        </div>
    )
}

export default AddContactPage