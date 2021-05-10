import React, { useState } from 'react';
import { Http } from "./../hooks/http.hook";

export const AuthPageComponent = () => {
    const {loading, error, request} = Http();

    const [form, setFrom] = useState({
        email:"",
        password:""
    })

    const updateFromHendles = event => {
        setFrom ({...form, [event.target.name]: event.target.value})
        setFrom ({...form, [event.target.name]: event.target.value})
    }

    const userRegistration = async () => {
        const data = await request('/api/auth/register', 'POST', {...form})
        console.log(data);

    }

    return (
        <div className="loggin">
            <h1 className="loggin_title">Loggin</h1>
            <div className="loggin_inputs">
                <input id="email" type="email" onChange={updateFromHendles}></input>
                <input id="password" type="password" onChange={updateFromHendles}></input>
            </div>
            <div className="loggin_btns">
                <button className="loggin_btn" disabled={loading}>loggin</button>
                <button className="create-user_btn" onClick={userRegistration} disabled={loading}>create user</button>
            </div>
        </div>
    )
}