import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductDetail } from './components/ProductDetail.jsx';
import { Basket } from './components/Basket.jsx';
import { Checkout } from './components/Checkout.jsx';
import './index.css';
import { Category } from './components/Category.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='basket' element={<Basket />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='products/:productId' element={<ProductDetail />} />
        <Route path='categories/:categoryId' element={<Category />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
