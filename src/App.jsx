import '../src/styles/App.css'
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx'
import Statistics from './pages/Statistics.jsx'
import Concerts from './pages/Concerts.jsx'
import SignIn from './pages/SignIn.jsx'

function App() {
  return (
    <div className="App">
        <Router>
        <NavBar />
          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/concerts" element={<Concerts />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/signin" element={<SignIn />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;