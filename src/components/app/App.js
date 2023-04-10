import HeaderMenu from '../header/headerMenu/HeaderMenu';
import HeaderTop from '../header/headerTop/HeaderTop';
import Footer from '../footer/Footer';
import Login from '../../pages/Login';

const App = () => {
  return (
    <>
      <header className="header">
        <HeaderTop />
        <HeaderMenu />
      </header>

      <Login />

      <Footer />
    </>
  );
};

export default App;
