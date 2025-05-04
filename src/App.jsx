import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TutorCard from './components/TutorCard';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';  // ✅ Import added
import Footer from './components/Footer';  // ✅ Import added
import Tutors from './pages/Tutors';
import BecomeATutor from './components/BecomeATutor';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tutor" element={<Tutors />} />
            <Route path="/become-tutor" element={<BecomeATutor />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/services" element={<Contact />} />
            {/* <Route path="/tutor" element={<TutorCard/>} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
