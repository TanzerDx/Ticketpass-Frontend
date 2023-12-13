import '../styles/Concerts.css';
import React, {useState, useEffect} from "react";
import ConcertService from '../services/ConcertService';
import ConcertList from '../components/ConcertList';
import { useLocation } from 'react-router-dom';

function Concerts() {

    const [concerts, setConcerts] = useState([]);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const keyword = searchParams.get('keyword');

    useEffect(() => {
      console.log(keyword);

        if (keyword) {
          ConcertService.filterConcerts(keyword)
            .then(data => setConcerts(data))
            .catch(error => {
              if (error.response && error.response.status === 401) {
                localStorage.removeItem('accessToken');
                window.location.href = '/concerts';
              }
            });
        } else {
          ConcertService.getAllConcerts()
            .then(data => setConcerts(data))
            .catch(error => {
              if (error.response && error.response.status === 401) {
                localStorage.removeItem('accessToken');
                window.location.href = '/concerts';
              }
            });
        }
      }, []);

      return (
        <>
          <div className='background-color-concerts'>
            <div className="content">
              <div className='concerts-heading'>
                <h1 className='concerts-heading-margin'>Concerts</h1>
              </div>
              <ConcertList concerts={concerts} />
            </div>
          </div>
        </>
      );
    }
    
    export default Concerts;