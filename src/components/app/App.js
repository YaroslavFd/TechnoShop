import HeaderMenu from '../header/headerMenu/HeaderMenu';
import HeaderTop from '../header/headerTop/HeaderTop';
import Footer from '../footer/Footer';
import SingUp from '../../pages/SignUp';
import Login from '../../pages/Login';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Contact from '../../pages/Contact';
import About from '../../pages/About';

const App = () => {
  return (
    <>
      <header className="header">
        <HeaderTop />
        <HeaderMenu />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sing-up" element={<SingUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
