import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HomePage,AboutPage,ContactPage,NotFoundPage,LoginPage,RegisterPage, ProfilePage,IndexPage,PlacePage,PlacesPage,PlacesFormPage,BookingPage,BookingsPage, } from './pages';
import Layout from './Layout';
import ProjectsPage from './pages/ProjectsPage';
import ProjectRoutes from './ProjectRoutes';
import TestsPage from './pages/TestsPage';
function AnimatedRoutes() {

    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes
                location = {location}
                key={location.pathname}
                >
                <Route
                    path="/"
                    element={<Layout />}>
                <Route
                    index
                    element={<HomePage />} 
                />
                <Route
                    path="/articles"
                    element={<IndexPage />}
                />
                <Route
                    path="/about"
                    element={<AboutPage />}
                />
                <Route
                    path="/contact"
                    element={<ContactPage />}
                />
                <Route
                    path="*"
                    element={<NotFoundPage />}
                />
                <Route 
                    path="/login" 
                    element={<LoginPage />} 
                />
                <Route 
                    path="/register" 
                    element={<RegisterPage />} 
                />
                <Route 
                    index 
                    element={<IndexPage/>} 
                />
                <Route
                    path="/account"
                    element={<ProfilePage />}
                />
                <Route
                    path="/account/profile"
                    element={<ProfilePage />}
                />
                <Route
                    path="/account/places/"
                    element={<PlacesPage />}
                />
                <Route
                    path="/account/places/new"
                    element={<PlacesFormPage />}
                />
                <Route
                    path="/account/places/:id"
                    element={<PlacesFormPage />}
                />
                <Route
                    path="/place/:id"
                    element={<PlacePage />}
                />
                <Route
                    path="/account/bookings"
                    element={<BookingsPage />}
                />
                <Route
                    path="/account/bookings/:id"
                    element={<BookingPage />}
                />
                <Route 
                    path="/projects"
                    element={<ProjectsPage />}
                />
                <Route
                    path="/projects/*"
                    element={<ProjectRoutes />}
                />
                <Route 
                    path="/tests"
                    element={<TestsPage />}
                />
                </Route>
            </Routes> 
        </AnimatePresence>
    )
}

export default AnimatedRoutes