import '../styles/SignIn.css'
import {NavLink} from "react-router-dom"
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import React, { useState, useEffect} from 'react';
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

    const concertData = JSON.parse(localStorage.getItem("concertItem"));

    const handleLogin = (event) => {
        event.preventDefault();

        localStorage.removeItem('accessToken');

        UserService.Login(formData)
          .then((data) => {

            localStorage.setItem('accessToken', data.accessToken);
            
            UserService.getUserByAccessToken(data.accessToken)

            .then((userData) => {

                const user = userData;
      
                 if (user.role === 'admin' || user.role === 'manager') {
                window.location.href = '/allOrders';
                }

                else if (concertData === null && user !== null) {
                  window.location.href = '/orders';

                } else if (concertData !== null && user !== null) {
                  window.location.href = '/checkout';
              }})
        })
        
          .catch((error) => {
            console.error('Login failed:', error);
            toast.error('Invalid username or password', {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            setTimeout(() => {
            }, 1000);
          });
        
      };


    useEffect(() => {
        
        function sleep(ms) {
            return new Promise((resolve) => 
            setTimeout(resolve,ms));
        }

        const phrase = 'SIGN IN. CONTINUE YOUR JOURNEY.';
        const element = document.getElementById('typewriter-signin');
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
        <div className='background-color-signin'>
            <div className="content">
                <div className='signin-text'>
                <span id="typewriter-signin"></span><span id="cursor-signin">|</span>
                </div>
            
            <form data-testid="cypress-loginUser-form" onSubmit={handleLogin}>
                <div className='content-box-signin'>                   
                    <div className='text-info'>
                        <h1 data-testid="cypress-loginUser-email">EMAIL ADDRESS:</h1>
                    </div>

                    <div className='signin-container'>
                        <input
                            data-testid="cypress-loginUser-input-email"
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
                        <h1 data-testid="cypress-loginUser-password">PASSWORD:</h1>
                    </div>

                    <div className='signin-container'>
                        <input
                            data-testid="cypress-loginUser-input-password"
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