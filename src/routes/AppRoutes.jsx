import { Routes, Route, Navigate } from 'react-router-dom';

// Auth Pages
import SplashScreen from '../pages/SplashScreen';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';

// Main Pages
import Home from '../pages/Home';
import Search from '../pages/Search';
import Offers from '../pages/Offers';

// Product Pages
import CategoryPage from '../pages/CategoryPage';
import ProductDetails from '../pages/ProductDetails';

// Cart & Order Pages
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import PaymentWaiting from '../pages/PaymentWaiting';
import OrderSuccess from '../pages/OrderSuccess';
import Orders from '../pages/Orders';

// Account Pages
import Account from '../pages/Account';
import Wishlist from '../pages/Wishlist';
import Addresses from '../pages/Addresses';
import Wallet from '../pages/Wallet';
import Settings from '../pages/Settings';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Splash Screen - App entry point */}
      <Route path="/" element={<SplashScreen />} />

      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />                         {/* Login page */}
      <Route path="/register" element={<Register />} />                   {/* Register / Sign up page */}
      <Route path="/forgot-password" element={<ForgotPassword />} />      {/* Forgot password page */}

      {/* Main Routes */}
      <Route path="/home" element={<Home />} />                           {/* Home / Dashboard page */}
      <Route path="/search" element={<Search />} />                       {/* Search products page */}
      <Route path="/offers" element={<Offers />} />                       {/* Offers & deals page */}

      {/* Product Routes */}
      <Route path="/category/:categoryName" element={<CategoryPage />} /> {/* Category listing page */}
      <Route path="/product/:productId" element={<ProductDetails />} />   {/* Product detail page */}

      {/* Cart & Order Routes */}
      <Route path="/cart" element={<Cart />} />                           {/* Cart page */}
      <Route path="/checkout" element={<Checkout />} />                   {/* Checkout page */}
      <Route path="/payment-waiting" element={<PaymentWaiting />} />      {/* Payment processing page */}
      <Route path="/order-success" element={<OrderSuccess />} />          {/* Order success confirmation page */}
      <Route path="/orders" element={<Orders />} />                       {/* Order history page */}

      {/* Account Routes */}
      <Route path="/account" element={<Account />} />                     {/* User account page */}
      <Route path="/wishlist" element={<Wishlist />} />                   {/* Wishlist page */}
      <Route path="/addresses" element={<Addresses />} />                 {/* Saved addresses page */}
      <Route path="/wallet" element={<Wallet />} />                       {/* Wallet & balance page */}
      <Route path="/settings" element={<Settings />} />                   {/* App settings page */}

      {/* Fallback - Redirect unknown routes to home */}
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};

export default AppRoutes;
