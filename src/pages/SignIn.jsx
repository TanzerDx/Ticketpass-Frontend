import '../styles/SignIn.css'
import {NavLink} from "react-router-dom"

function SignIn() {
    return (
        <div className='background-color-signin'>
            <div className="content">
                <div className='signin-text'>
                    <h1>SIGN IN. CONTINUE YOUR JOURNEY.</h1>
                </div>

                <div className='content-box-signin'>                   
                    <div className='text-info'>
                        <h1>EMAIL ADDRESS:</h1>
                    </div>

                    <div className='signin-container'>
                        <input
                            type="email"
                            className="signin-input"
                            placeholder=""
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
                            className="signin-input"
                            placeholder=""
                        />  
                    </div>
                </div>

                <NavLink to="/concerts" id="concerts-link">
                <button type="button" name="find-a-concert" className="button-signin">SIGN IN</button>
                </NavLink>

                <div className='text-createAccount'>
                    <h1>DON'T HAVE AN ACCOUNT? <NavLink to="/signup" className='text-createAccount-link'>CREATE ONE HERE</NavLink>!</h1>
                </div>

            </div>
        </div>
    )
}

export default SignIn;