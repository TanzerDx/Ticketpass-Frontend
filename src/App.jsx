import '../src/styles/App.css'
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx'
import Statistics from './pages/Statistics.jsx'
import Concerts from './pages/Concerts.jsx'
import {ToastContainer} from "react-toastify";
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import Orders from './pages/Orders.jsx'
import Concert from './pages/Concert.jsx'
import Checkout from './pages/Checkout.jsx'
import Tickets from './pages/Tickets.jsx'
import AdminAllOrders from './pages/AdminAllOrders.jsx'
import AdminManageConcerts from './pages/AdminManageConcerts.jsx';
import AdminManageUsers from './pages/AdminManageUsers.jsx';
import AdminUpdateConcert from './pages/AdminUpdateConcert.jsx';
import AdminAddAdmin from './pages/AdminAddAdmin.jsx';
import AdminDeleteAdmin from './pages/AdminDeleteAdmin.jsx';
import AttendedConcerts from './pages/AttendedConcerts.jsx';
import ThankYou from './pages/ThankYou.jsx'
import AdminUnbanUser from './pages/AdminUnbanUser.jsx';

function App() {

  const user = localStorage.getItem("user");
  
  return (
    <div className="App">

        <Router>
        <NavBar />
          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/concerts" element={<Concerts />} />
              <Route path="/concert" element={<Concert />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/thankyou" element={<ThankYou/>} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/tickets" element={<Tickets/>} />
              <Route path="/allOrders" element={<AdminAllOrders/>} />
              <Route path="/banUser" element={<AdminManageUsers/>} />
              <Route path="/addConcert" element={<AdminManageConcerts/>} />
              <Route path="/addAdmin" element={<AdminAddAdmin/>} />
              <Route path="/previousConcerts" element={<AttendedConcerts/>} />
              <Route path="/updateConcert" element={<AdminUpdateConcert/>} />
              <Route path="/deleteAdmin" element={<AdminDeleteAdmin/>} />
              <Route path="/unbanUser" element={<AdminUnbanUser/>} />
          </Routes>
        </Router>
                      
      <ToastContainer />
    </div>
  );
}

export default App;