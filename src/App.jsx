 // src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TutorCard from './components/TutorCard';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Tutors from './pages/Tutors';
import BecomeATutor from './components/BecomeATutor';
import TopHeader from './pages/TopHeader';
import CoursesPage from './pages/CoursesPage';
import CourseDetails from './pages/CourseDetails';
import ParticleAnimation from './pages/ParticleAnimation';
// import LocationMap from './components/LocationMap';
import LoginForm from './pages/Login';
import Gallery from './components/Photo';
import Branches from './layouts/Branches';
import UpcomingBatches from './pages/UpcomingBatches';
import TeacherSection from './layouts/TeacherSection';
import Testimonials from './components/Testimonials';
import BatchManager from './pages/BatchManager';
import ScrollToTop from './components/ScrollToTop';  // Import ScrollToTop
import CourseMaterial from './pages/CourseMaterials';
import StudentManager from './pages/StudentManager';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* This will handle scroll reset on route change */}
      <div className="flex flex-col min-h-screen">
        <TopHeader />
        <Navbar />
        <ParticleAnimation />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:slug" element={<CourseDetails />} />
            <Route path="/tutor" element={<Tutors />} />
            <Route path="/become-tutor" element={<BecomeATutor />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Contact />} />
            <Route path="/loginABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghidfgdfgdfgdgdfdfskasnfkjsjfifjfknfa8fjnfjfnfofdff1f54515f981f75f14ff84f1f8f4dfkjfiofuljjklmnopqrstuvwxyz0123456789" element={<LoginForm />} />
            <Route path="/photo" element={<Gallery />} />
            <Route path="/branches" element={<Branches />} />
            <Route path="/upcomming" element={<UpcomingBatches />} />
            <Route path="/teacher" element={<TeacherSection />} />
            <Route path="/feedback" element={<Testimonials />} />
            <Route path="/coursematerial" element={<CourseMaterial />} />
            <Route path="/studentMangeABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" element={<StudentManager/>} />

            <Route path="/managerABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" element={<BatchManager />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
