import '../styles/SignUp.css'
import React, { useState, useEffect} from 'react';
import {toast} from "react-toastify";
import UserService from '../services/UserService';


function SignUp() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    const updateFormData = event => {
        setFormData ({
            ...formData, [event.target.name]:event.target.value
        })
    }

    const handleRegister = (event) => {
        event.preventDefault();
        
        if (formData.password === formData.confirmPassword)
        {

            UserService.Register(formData)
            .then(() =>  {
                    window.location.href = 'signin'
            })
            .catch(() => {
                toast.error('Email is already taken!', {
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
            })
        }
        else {
            toast.error('Passwords do not match!', {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
        }

    }

    useEffect(() => {

        function sleep(ms) {
            return new Promise((resolve) => 
            setTimeout(resolve,ms));
        }

        const phrase = 'YOUR CONCERT ADVENTURE STARTS HERE.';
        const element = document.getElementById('typewriter-signup');
        let sleepTime = 60;

        const writePhrase = async () => {
            for (let i = 0; i < phrase.length; i++) {
                element.innerText = phrase.substring(0, i + 1);
                await sleep(sleepTime);
            }
        };

        writePhrase();
    }, []);

    return (
        <div className='background-color-signup'>
            <div className="content">
                <div className='signup-text'>
                    <span id="typewriter-signup"></span><span id="cursor-signup">|</span>
                </div>
            
            <form data-testid="cypress-registerUser-form" onSubmit={handleRegister}>
                <div className='content-box-signup'>                   
                    <div className='text-info'>
                        <h1 data-testid="cypress-registerUser-email">EMAIL ADDRESS:</h1>
                    </div>

                    <div className='signup-container'>
                        <input
                            data-testid="cypress-registerUser-input-email"
                            type="email"
                            name="email"
                            className="signup-input"
                            placeholder=""
                            required
                            onChange={updateFormData}
                        />  
                    </div>
                </div>

                <div className='content-box-signup'>
                    <div className='text-info'>
                        <h1 data-testid="cypress-registerUser-password">PASSWORD:</h1>
                    </div>

                    <div className='signup-container'>
                        <input
                            data-testid="cypress-registerUser-input-password"
                            type="password"
                            name="password"
                            className="signup-input"
                            placeholder=""
                            required
                            onChange={updateFormData}
                        />  
                    </div>
                </div>

                <div className='content-box-signup'>
                    <div className='text-info'>
                        <h1 data-testid="cypress-registerUser-confirmPassword">CONFIRM PASSWORD:</h1>
                    </div>

                    <div className='signup-container'>
                        <input
                            data-testid="cypress-registerUser-input-confirmPassword"
                            type="password"
                            name="confirmPassword"
                            className="signup-input"
                            placeholder=""
                            required
                            onChange={updateFormData}
                        />  
                    </div>
                </div>

                <input type="submit" className='button-signup' value="CREATE ACCOUNT" />
            </form>

            </div>
        </div>
    )
}

export default SignUp;