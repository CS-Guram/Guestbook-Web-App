import Navbar from './components/Navbar';
import Home from './views/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Router>

    </>
  );
}

export default App;
