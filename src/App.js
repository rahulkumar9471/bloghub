import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/user/Navbar';
import Signin from './components/auth/Signin';
import Home from './components/pages/Home';
import Footer from './components/user/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
