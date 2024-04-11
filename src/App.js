import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/user/Navbar';
import Signin from './components/auth/Signin';
import Home from './components/pages/Home';
import Footer from './components/user/Footer';
import Signup from './components/auth/Signup';
import EmailVerification from './components/auth/EmailVerification';
import NotFound from './components/pages/NotFound';
import Sidebar from './components/user/Sidebar';
import ForgotPassword from './components/auth/ForgotPassword'; 
import ConfirmPassword from './components/auth/ConfirmPassword';

function App() { 
  return (
    <>
      <Navbar   />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/sign-in" element={<Signin />} />
        <Route path="/auth/sign-up" element={<Signup />} />
        <Route path="/auth/verification" element={<EmailVerification />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/reset-password" element={<ConfirmPassword />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Sidebar   />
    </>
  );
}

export default App;
