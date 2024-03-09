import '../styles/AboutUs.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function AboutUs() {

  const mapCenter = [51.451672, 5.479698];

    return (
        <div className='background-color-aboutUs'>
            <div className="content">
            
            <div className='aboutUs-heading'>
              <h1 className='remove-margin'>ABOUT US</h1>
            </div>

            <div className="aboutUs-grid">
                        
                <div className="aboutUs-grid-left">         
                    <div className='aboutUs-description'>
                        <h1 className='remove-margin'>Ticketpass is a website created by Ticketpass Inc. in 2023. It was established in Eindhoven, 
                        the Netherlands, solely by an university student. The goal of the website is to provide the 
                        concert lovers with a platform for purchasing concert tickets, getting rid of the burden of obtaining tickets from separate venue websites.</h1>
                    </div>
                </div>

                <div className="aboutUs-grid-right">
                  <MapContainer center={mapCenter} zoom={15} style={{ height: '110%', width: '130%' }}>

                  <TileLayer
                    url="https://{s}.basemaps.cartocdn.com/{style}/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://carto.com/attributions">CartoDB</a>'
                    style="light_all"
                  />
                  
                  <Marker position={mapCenter}>
                    <Popup>Ticketpass Headquarters</Popup>
                  </Marker>
                  
                </MapContainer>
                </div>

            </div>
            </div>

        </div>
    )
}

export default AboutUs;