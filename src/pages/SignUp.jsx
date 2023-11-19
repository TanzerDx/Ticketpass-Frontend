import '../styles/SignUp.css'
import React, { useState, useEffect} from 'react';
import UserService from '../services/UserService';
import RoleService from '../services/RoleService';


function SignUp() {

    const [formDataAccount, setFormDataAccount] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [formDataRole, setFormDataRole] = useState({
        user: JSON.parse(sessionStorage.getItem("user")),
        role: "user"
    })

    const updateFormDataAccount = event => {
        setFormDataAccount ({
            ...formDataAccount, [event.target.name]:event.target.value
        })
    }

    const handleRegister = (event) => {
        event.preventDefault();
        
        if (formDataAccount.password === formDataAccount.confirmPassword)
        {

            UserService.Register(formDataAccount)
            .then(() =>  {
                UserService.Login(formDataAccount)
                .then((data) => {
                    sessionStorage.setItem('user', JSON.stringify(data));
                    
                    RoleService.createRole(formDataRole)

                    window.location.href = 'signin'
            })})
        }
        else {
            alert("Passwords don't match!");
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
            
            <form onSubmit={handleRegister}>
                <div className='content-box-signup'>                   
                    <div className='text-info'>
                        <h1>EMAIL ADDRESS:</h1>
                    </div>

                    <div className='signup-container'>
                        <input
                            type="email"
                            name="email"
                            className="signup-input"
                            placeholder=""
                            required
                            onChange={updateFormDataAccount}
                        />  
                    </div>
                </div>

                <div className='content-box-signup'>
                    <div className='text-info'>
                        <h1>PASSWORD:</h1>
                    </div>

                    <div className='signup-container'>
                        <input
                            type="password"
                            name="password"
                            className="signup-input"
                            placeholder=""
                            required
                            onChange={updateFormDataAccount}
                        />  
                    </div>
                </div>

                <div className='content-box-signup'>
                    <div className='text-info'>
                        <h1>CONFIRM PASSWORD:</h1>
                    </div>

                    <div className='signup-container'>
                        <input
                            type="password"
                            name="confirmPassword"
                            className="signup-input"
                            placeholder=""
                            required
                            onChange={updateFormDataAccount}
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