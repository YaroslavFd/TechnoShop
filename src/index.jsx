import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import ProductService from './Service/ProductService';
import { ServiceContext } from './Service/serviceContext';

import './style/index.css';

const productService = new ProductService();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ServiceContext.Provider value={{ productService }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ServiceContext.Provider>
);
