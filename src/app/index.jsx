import ErrorBoundary from 'components/ErrorBoundary';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Main from 'containers/Main';
import Wrapper from 'containers/Wrapper';
import {
  About,
  CartPage,
  Contact,
  FavoritesPage,
  Home,
  Login,
  SingUp,
} from 'pages';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <Wrapper>
            <Header />
            <Main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/sing-up" element={<SingUp />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
              </Routes>
            </Main>
            <Footer />
          </Wrapper>
          ;
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
