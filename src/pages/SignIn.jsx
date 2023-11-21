import '../styles/SignIn.css'
import {NavLink} from "react-router-dom"
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

    const concertData = JSON.parse(sessionStorage.getItem("concertItem"));

    // const handleLogin = (event) => {
    //     event.preventDefault();
        
    //     console.log(formData);

    //     UserService.Login(formData)
    //       .then((data) => {
    //         console.log('Login successful:', data);
    //         sessionStorage.setItem('user', JSON.stringify(data));
    //         if (concertData === null) 
    //         {
    //           window.location.href = '/orders';
    //         } 
    //         else 
    //         {
    //           window.location.href = '/checkout';
    //         }
    //       })
    //       .catch((error) => {
    //         console.error('Login failed:', error);
    //         alert('User is not found!');
    //       });
    //   };

    const handleLogin = (event) => {
        event.preventDefault();

        console.log('Login Request Payload:', JSON.stringify(formData));
      
        fetch('http://localhost:8080/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            console.log('Login successful:', data);
            sessionStorage.setItem('user', JSON.stringify(data));
            window.location.href = '/orders';
          })
          .catch(error => {
            console.error('Login failed:', error);
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