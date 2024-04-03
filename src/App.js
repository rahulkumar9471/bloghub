import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/user/Navbar';
import Signin from './components/auth/Signin';
import Home from './components/pages/Home';
import Footer from './components/user/Footer';
import Signup from './components/auth/Signup';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
