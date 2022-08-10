import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Register from './containers/Register';
import Login from './containers/Login';
import SuccessRegister from './containers/SuccessRegister';
import ProtectedRoute from './containers/ProtectedRoute';
import NotFoundPage from './containers/NotFound';
import DetailPage from './containers/Detail';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="login" element={<ProtectedRoute loginOnly={false}><Login/></ProtectedRoute>}></Route>
        <Route path="register" element={<ProtectedRoute loginOnly={false}><Register/></ProtectedRoute>}></Route>
        <Route path="detail/:id" element={<ProtectedRoute><DetailPage></DetailPage></ProtectedRoute>}></Route>
        <Route path="success" element={<SuccessRegister /> } />
        <Route path="*" element={<NotFoundPage /> }></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();