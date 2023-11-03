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
              <Route path="/signup" element={<SignUp />} />
              <Route path="/orders" element={<Orders />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;