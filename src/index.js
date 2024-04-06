import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from './context/ThemeProvider';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './context/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <ContextProvider>
        <AuthProvider>
          <App />
          <Toaster />
        </AuthProvider>
      </ContextProvider>
    </BrowserRouter>
  </>
);


