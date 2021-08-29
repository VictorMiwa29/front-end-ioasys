import axios from 'axios';

require('dotenv').config();

async function LoginRequest(email, password) {
  const api = await axios.post(process.env.REACT_APP_API_LOGIN, {
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
