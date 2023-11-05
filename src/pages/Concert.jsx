import '../styles/Concert.css';
import picture from '../assets/concert_crowd_people_134866_1920x1080.jpg';

function Concert() {
    

    return (
        <>
            <div className='background-color-concert'>
                
                <div className="content">
                
                    <div className="concert-grid">
                        
                        <div className="concert-grid-left">
                            <div className='artist-name'>
                                <h1 className='remove-margin'>ARTIST</h1>
                            </div>
                                            
                            <div className='artist-description'>
                                <h1 className='remove-margin'>
                                    This is a very detailed description. Honestly this
                                    probably the best descripiton I have ever seen in my whole life.
                                </h1>
                            </div>

                            <div className='concert-details'>
                                <h1 className='remove-margin'>VENUE: TivoliVredenburg</h1>
                                <h1 className='remove-margin'>DATE: 20:00 - 04/05/2024 </h1>
                                <h1 className='remove-margin'>LOCATION: Utrecht, The Netherlands  </h1>
                            </div>

                        </div>

                        <div className="concert-grid-right">
                            <img src={picture} alt="Artist" className="artist-picture" />
                            
                            <button type="button" className="button-buyTickets" name="buyTickets">BUY TICKETS</button>
                        </div>

                    </div>
                </div>
            
            </div>
        </>
    )
}

export default Concert;