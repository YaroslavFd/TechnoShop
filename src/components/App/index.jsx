import Main from 'containers/Main';
import Wrapper from 'containers/Wrapper';
import { About, Contact, Home, Login, SingUp } from 'pages';
import { Route, Routes } from 'react-router-dom';

import Footer from '../Footer';
import Header from '../Header';

const App = () => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sing-up" element={<SingUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Main>
      <Footer />
    </Wrapper>
  );
};

export default App;
