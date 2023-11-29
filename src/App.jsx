import '../src/styles/App.css'
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx'
import Statistics from './pages/Statistics.jsx'
import Concerts from './pages/Concerts.jsx'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import Orders from './pages/Orders.jsx'
import Concert from './pages/Concert.jsx'
import Checkout from './pages/Checkout.jsx'
import Tickets from './pages/Tickets.jsx';

function App() {
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
              <Route path="/signup" element={<SignUp />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/tickets" element={<Tickets/>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;