/* eslint-disable import/no-extraneous-dependencies */
import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(false);
  const [nameUser, setNameUser] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setToken(true);
      setNameUser(user.name);
    }
    return setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={
      {
        token, loading, nameUser, setToken,
      }
    }
    >
      { children }
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
