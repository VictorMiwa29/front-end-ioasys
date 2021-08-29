import axios from 'axios';

require('dotenv').config();

async function LoginRequest(email, password) {
  const api = await axios.post(process.env.REACT_APP_API_LOGIN, {
    email,
    password,
  });

  return api;
}

export default LoginRequest;
