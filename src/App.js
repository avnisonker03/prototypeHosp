import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Newcase from './pages/Newcase';
import PatientDetail from './pages/PatientDetail'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app-background">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newcase" element={<Newcase />} />
          <Route path="/newcase/:id" element={<PatientDetail />} />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
