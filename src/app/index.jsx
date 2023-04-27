import ErrorBoundary from 'components/ErrorBoundary';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Main from 'containers/Main';
import Wrapper from 'containers/Wrapper';
import Pages from 'pages';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundary>
          <Wrapper>
            <Header />
            <Main>
              <Pages />
            </Main>
            <Footer />
          </Wrapper>
        </ErrorBoundary>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
