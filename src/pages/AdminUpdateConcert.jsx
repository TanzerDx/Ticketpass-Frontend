import '../styles/AdminManageConcerts.css';
import ConcertService from '../services/ConcertService';
import '../styles/AdminManageConcerts.css';
import React, {useState} from "react";
import {toast} from "react-toastify";
import {parseISO, format} from "date-fns";

function AdminUpdateConcert () 
{

    const [concertId, setConcertId] = useState(""); 
    
    const [formData, setFormData] = useState({
        id: "",
        artist: "",
        musicGenre: "",
        venue: "",
        date: "",
        city: "",
        description: "",
        photoURL: "",
        price: 0,
        ticketsRemaining: 0,
    });
    
    const updateFormData = (event) => {
        setFormData((formData) => ({
            ...formData,
            [event.target.name]: event.target.value,
        }));
    };
    
    const handleUpdateConcert = (event) => {
        event.preventDefault();
    
        console.log(formData);
        
        ConcertService.updateConcert(formData);
    
        toast.success('Concert updated successful', {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    
        setTimeout(() => {
        }, 1000);
    };
    
    const getConcertToUpdate = async (event) => {
        event.preventDefault();
      
        const data = await ConcertService.getConcert(concertId);
      
        setFormData((formData) => ({
          ...formData,
          id: data.id,
          artist: data.artist,
          musicGenre: data.musicGenre,
          venue: data.venue,
          date: format(parseISO(data.date), "yyyy-MM-dd'T'HH:mm"),
          city: data.city,
          description: data.description,
          photoURL: data.photoURL,
          price: data.price,
          ticketsRemaining: data.ticketsRemaining,
        }));
      };


    return (
        <>
            <div className='background-color-adminManageConcerts'>
                
                <div className="content">
                    
                    <div className='adminManageConcerts-heading'>
                        <h1 className='remove-margin'>UPDATE A CONCERT</h1>
                    </div>
                        
                            
                    <form onSubmit={getConcertToUpdate}>
                        <div className='getConcert-grid'>
                            <div className='grid-item'>
                                <div className='getConcert-validation-text'>
                                    <h1 className='remove-margin'>CONCERT ID: </h1>
                                </div>
                                <div className='manageConcerts-container'>
                                    <input
                                        type="text"
                                        name="concertId"
                                        className="getConcert-input"
                                        placeholder=""
                                        required
                                        value={concertId} 
                                        onChange={(e) => setConcertId(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                        <input type="submit" className="button-getConcert" value="FIND CONCERT" />
                    </form>


                            <form onSubmit={handleUpdateConcert}>
                                <div className='manageConcerts-grid'>
                                <div className='grid-item'>
                                    <div className='manageConcerts-validation-text'>
                                                    <h1 className='remove-margin'>Artist: </h1>
                                                </div>
                                                <div className='manageConcerts-container'>
                                                    <input
                                                        type="text"
                                                        name="artist"
                                                        className="manageConcerts-input"
                                                        placeholder=""
                                                        value={formData.artist}
                                                        required
                                                        onChange={updateFormData}
                                                    />  
                                                </div>
                                </div>     

                                <div className='grid-item'>  
                                            <div className='manageConcerts-validation-text'>
                                                <h1 className='remove-margin'>Genre: </h1>
                                            </div>
                                            <div className='manageConcerts-container'>
                                                <input
                                                    type="text"
                                                    name="musicGenre"
                                                    className="manageConcerts-input"
                                                    placeholder=""
                                                    value={formData.musicGenre}
                                                    required
                                                    onChange={updateFormData}
                                                />  
                                            </div>
                                </div>

                                <div className='grid-item'>
                                            <div className='manageConcerts-validation-text'>
                                                <h1 className='remove-margin'>Venue: </h1>
                                            </div>
                                            <div className='manageConcerts-container'>
                                                <input
                                                    type="text"
                                                    name="venue"
                                                    className="manageConcerts-input"
                                                    placeholder=""
                                                    value={formData.venue}
                                                    required
                                                    onChange={updateFormData}
                                                />  
                                            </div>
                                </div>


                                <div className='grid-item'>
                                            <div className='manageConcerts-validation-text'>
                                                <h1 className='remove-margin'>Date: </h1>
                                            </div>
                                            <div className='manageConcerts-container'>
                                                <input
                                                    type="datetime-local"
                                                    name="date"
                                                    className="manageConcerts-input"
                                                    value={formData.date}
                                                    placeholder=""
                                                    required
                                                    onChange={updateFormData}
                                                />  
                                            </div>
                                </div>

                                
                                <div className='grid-item'>
                                            <div className='manageConcerts-validation-text'>
                                                <h1 className='remove-margin'>City: </h1>
                                            </div>
                                            <div className='manageConcerts-container'>
                                                <input
                                                    type="text"
                                                    name="city"
                                                    className="manageConcerts-input"
                                                    value={formData.city}
                                                    placeholder=""
                                                    required
                                                    onChange={updateFormData}
                                                />  
                                            </div>
                                </div>



                                <div className='grid-item'>
                                            <div className='manageConcerts-validation-text'>
                                                <h1 className='remove-margin'>Description: </h1>
                                            </div>
                                            <div className='manageConcerts-container'>
                                                <input
                                                    type="text"
                                                    name="description"
                                                    className="manageConcerts-input"
                                                    maxLength= {250}
                                                    value={formData.description}
                                                    placeholder=""
                                                    required
                                                    onChange={updateFormData}
                                                />  
                                            </div>
                                </div>



                                <div className='grid-item'>
                                            <div className='manageConcerts-validation-text'>
                                                <h1 className='remove-margin'>Photo: </h1>
                                            </div>
                                            <div className='manageConcerts-container'>
                                                <input
                                                    type="text"
                                                    name="photoURL"
                                                    className="manageConcerts-input"
                                                    value={formData.photoURL}
                                                    placeholder=""
                                                    required
                                                    onChange={updateFormData}
                                                />  
                                            </div>
                                </div>



                                <div className='grid-item'>
                                            <div className='manageConcerts-validation-text'>
                                                <h1 className='remove-margin'>Price: </h1>
                                            </div>
                                            <div className='manageConcerts-container'>
                                                <input
                                                    type="text"
                                                    name="price"
                                                    className="manageConcerts-input"
                                                    value={formData.price}
                                                    placeholder=""
                                                    required
                                                    onChange={updateFormData}
                                                />  
                                            </div>
                                </div>



                                <div className='grid-item'>
                                            <div className='manageConcerts-validation-text'>
                                                <h1 className='remove-margin'>Number of Tickets: </h1>
                                            </div>
                                            <div className='manageConcerts-container'>
                                                <input
                                                    type="text"
                                                    name="ticketsRemaining"
                                                    className="manageConcerts-input"
                                                    value={formData.ticketsRemaining}
                                                    placeholder=""
                                                    required
                                                    onChange={updateFormData}
                                                />  
                                            </div>
                                </div>
                            
                            </div>
                            
                            <input type="submit" className="button-manageConcert" value="PROCEED"/>
                        
                        </form>
                    </div>
                </div>

        </>
    )

}




export default AdminUpdateConcert;