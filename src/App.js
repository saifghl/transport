import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import AdminLogin from './components/AdminLogin/AdminLogin';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <main style={{ padding: '2rem', textAlign: 'center', minHeight: '50vh' }}>
              <h1>Welcome to Transportation</h1>
              <p>Your logistics partner.</p>
            </main>
          } />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
