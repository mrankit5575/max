import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TutorCard from './components/TutorCard';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';  // ✅ Import added
import Footer from './components/Footer';  // ✅ Import added
import Tutors from './pages/Tutors';
import BecomeATutor from './components/BecomeATutor';
import TopHeader from './pages/TopHeader';
import CoursesPage from './pages/CoursesPage';
import CourseDetails from './pages/CourseDetails';
import ParticleAnimation from './pages/ParticleAnimation';
import LocationMap from './components/LocationMap';
   
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <TopHeader/>
        <Navbar />
        <ParticleAnimation/>
        
        <main className="flex-grow">
          <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:slug" element={<CourseDetails/>} />
            <Route path="/tutor" element={<Tutors />} />
            <Route path="/become-tutor" element={<BecomeATutor />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/services" element={<Contact />} />
            {/* <Route path="/tutor" element={<TutorCard/>} /> */}
          </Routes>
        </main>
        <LocationMap />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
