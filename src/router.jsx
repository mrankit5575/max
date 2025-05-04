// src/router.jsx
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Tutors from './pages/Tutors';
import Contact from './pages/Contact';
// import TutorProfile from './pages/TutorProfile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/tutors', element: <Tutors /> },
    //   { path: '/tutor/:id', element: <TutorProfile /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
]);

export default router;
