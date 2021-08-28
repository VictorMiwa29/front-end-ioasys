import axios from 'axios';

async function LoginRequest(email, password) {
  const api = await axios.post('https://books.ioasys.com.br/api/v1/auth/sign-in', {
    email,
    password,
  });

  return api;
}

export default LoginRequest;
