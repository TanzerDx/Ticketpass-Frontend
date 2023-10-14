import '../styles/SignUp.css'
import React, { useState} from 'react';
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
        }
        else {
            alert("Passwords don't match!");
        }

    }

    return (
        <div className='background-color-signup'>
            <div className="content">
                <div className='signup-text'>
                    <h1>Your Concert Adventure Starts Here.</h1>
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
                            onChange={updateFormData}
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
                            onChange={updateFormData}
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