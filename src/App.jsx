import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Franchise from './pages/Franchise';
import Location from './pages/Location';
import Services from './pages/Services';  
import AboutUs from './pages/AboutUs';
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';


function Layout({ children }) {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const is404Page = location.pathname !== '/login' && 
    !['/login', '/', '/blog', '/franchise', '/location', '/services', '/about'].includes(location.pathname);

  return (
    <div className="min-h-screen w-full bg-cover bg-start bg-no-repeat" 
         style={{ 
           backgroundImage: `url(${isLoginPage ? "/login-bg.svg" : ""})`,
           minHeight: '100vh'
         }}>
      {!isLoginPage && !is404Page && <Header />}
      {children}
      {!isLoginPage && !is404Page && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/blog" element={
            <ProtectedRoute>
              <Blog />
            </ProtectedRoute>
          } />
          <Route path="/franchise" element={
            <ProtectedRoute>
              <Franchise />
            </ProtectedRoute>
          } />
          <Route path="/location" element={
            <ProtectedRoute>
              <Location />
            </ProtectedRoute>
          } />
          <Route path="/services" element={
            <ProtectedRoute>
              <Services />
            </ProtectedRoute>
          } />
          <Route path="/about" element={
            <ProtectedRoute>
              <AboutUs />
            </ProtectedRoute>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;