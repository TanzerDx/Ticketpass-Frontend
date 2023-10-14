import '../styles/SignIn.css'
import {NavLink} from "react-router-dom"
import React, { useState} from 'react';
import UserService from '../services/UserService';

function SignIn() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const updateFormData = event => {
        setFormData ({
            ...formData, [event.target.name]:event.target.value
        })
    }

    const handleLogin = (event) => {
        event.preventDefault();

        UserService.Login(formData)
        .then(data => {
            sessionStorage.setItem("user", JSON.stringify(data));
            window.location.href = "/orders";
        })
        .catch(() => {
            alert("User is not found!");
        });
        

    }

    return (
        <div className='background-color-signin'>
            <div className="content">
                <div className='signin-text'>
                    <h1>SIGN IN. CONTINUE YOUR JOURNEY.</h1>
                </div>
            
            <form onSubmit={handleLogin}>
                <div className='content-box-signin'>                   
                    <div className='text-info'>
                        <h1>EMAIL ADDRESS:</h1>
                    </div>

                    <div className='signin-container'>
                        <input
                            type="email"
                            name="email"
                            className="signin-input"
                            placeholder=""
                            required
                            onChange={updateFormData}

                        />  
                    </div>
                </div>

                <div className='content-box-signin'>
                    <div className='text-info'>
                        <h1>PASSWORD:</h1>
                    </div>

                    <div className='signin-container'>
                        <input
                            type="password"
                            name="password"
                            className="signin-input"
                            placeholder=""
                            required
                            onChange={updateFormData}
                        />  
                    </div>
                </div>

                <input type="submit" className="button-signin" value="SIGN IN"/>
            </form>

                <div className='text-createAccount'>
                    <h1>DON'T HAVE AN ACCOUNT? <NavLink to="/signup" className='text-createAccount-link'>CREATE ONE HERE</NavLink>!</h1>
                </div>

            </div>
        </div>
    )
}

export default SignIn;