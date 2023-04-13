import { Route, Routes } from 'react-router-dom';

import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import SingUp from '../../pages/SignUp';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';
import Wrapper from '../Wrapper';

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
