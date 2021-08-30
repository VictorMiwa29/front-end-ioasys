import axios from 'axios';

require('dotenv').config();

async function LoginRequest(email, password) {
  const api = await axios.post('https://books.ioasys.com.br/api/v1/auth/sign-in', {
    email,
    password,
  });

  return api;
}

async function BooksRequest(token, page) {
  const api = await axios.get(`https://books.ioasys.com.br/api/v1/books?page=${page}&amount=12`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return api;
}

async function BookIdRequest(token, id) {
  const api = await axios.get(`https://books.ioasys.com.br/api/v1/books/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return api;
}

export {
  LoginRequest,
  BooksRequest,
  BookIdRequest,
};
