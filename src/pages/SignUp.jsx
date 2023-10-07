import '../styles/SignUp.css'
import {NavLink} from "react-router-dom"

function SignUp() {
    return (
        <div className='background-color-signup'>
            <div className="content">
                <div className='signup-text'>
                    <h1>Your Concert Adventure Starts Here.</h1>
                </div>

                <div className='content-box-signup'>                   
                    <div className='text-info'>
                        <h1>EMAIL ADDRESS:</h1>
                    </div>

                    <div className='signup-container'>
                        <input
                            type="email"
                            className="signup-input"
                            placeholder=""
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
                            className="signup-input"
                            placeholder=""
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
                            className="signup-input"
                            placeholder=""
                        />  
                    </div>
                </div>

                <NavLink to="/signin" id="concerts-link">
                <button type="button" name="find-a-concert" className="button-signup">CREATE ACCOUNT</button>
                </NavLink>

            </div>
        </div>
    )
}

export default SignUp;