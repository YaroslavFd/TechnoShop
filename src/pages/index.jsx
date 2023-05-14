import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('./HomePage'));
const LoginPage = lazy(() => import('./LoginPage'));
const SignUpPage = lazy(() => import('./SignUpPage'));
const ContactPage = lazy(() => import('./ContactPage'));
const AboutPage = lazy(() => import('./AboutPage'));
const CartPage = lazy(() => import('./CartPage'));
const FavoritesPage = lazy(() => import('./FavoritesPage'));
const AccountPage = lazy(() => import('./AccountPage'));

const Pages = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sing-up" element={<SignUpPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </Suspense>
  );
};

export default Pages;
