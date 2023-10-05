import '../styles/Homepage.css'
import video from "../assets/bgvideo.mp4"
import {NavLink} from "react-router-dom"

function Homepage() {
    return (
    <div className='background-video-homepage'>
        
        <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="overlay"></div>S
        

        <div className="content">
            
            <div className="homepage-text">
                <h1>TICKETPASS - WHERE MUSIC MEETS MOMENTS</h1>    	
            </div>
            
            <NavLink to="/concerts" id="concerts-link">
            <button type="button" name="find-a-concert" className="button-concerts">FIND A CONCERT</button>
            </NavLink>
        
        </div>
    </div>
    )
}

export default Homepage;