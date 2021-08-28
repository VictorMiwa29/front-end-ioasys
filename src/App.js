import React from 'react';
import Routes from './routes';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AuthProvider from './context/Auth';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
