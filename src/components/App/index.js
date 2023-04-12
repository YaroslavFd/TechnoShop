import { Route, Routes } from 'react-router-dom';

import Wrapper from '../Wrapper';
import Footer from '../Footer';
import Main from '../Main';
import Header from '../Header';
import SingUp from '../../pages/SignUp';
import Login from '../../pages/Login';
import Home from '../../pages/Home';
import Contact from '../../pages/Contact';
import About from '../../pages/About';



const App = () => {
  return (
    <Wrapper>
      <Header />

      <Main>
        <h1>Main</h1>
      </Main>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sing-up" element={<SingUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>


      <Footer />
    </Wrapper>
  );
};

export default App;
