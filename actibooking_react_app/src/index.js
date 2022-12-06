import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = "337470745858-36e0ar5ddn0csbinl1ore0qor37t6imn.apps.googleusercontent.com";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <GoogleOAuthProvider clientId={clientId}>
    <App />
    </GoogleOAuthProvider>
  </BrowserRouter>
);