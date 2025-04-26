import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000',
});

// Add token to request if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// User Authentication API
export const registerUser = async (userData) => {
  try {
    const response = await API.post('/users/signup', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await API.post('/users/login', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//user profile creation
export const createProfile= async (userData)=>{
  try {
    const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
    const response=await API.post("/profile/create-profile",userData,config)
    return response.data
  } catch (error) {
    console.log("Error while creating the error ")
    throw error;
  }
}


// Books API (for user dashboard)
export const getBooks = async (searchParams = {}) => {
  try {
    const response = await API.get('/books', { params: searchParams });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getBorrowedBooks = async () => {
  try {
    const response = await API.get('/books/borrowed');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const returnBook = async (bookId) => {
  try {
    const response = await API.post(`/books/${bookId}/return`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const borrowBook = async (bookId) => {
  try {
    const response = await API.post(`/books/${bookId}/borrow`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Librarian API
export const addBook = async (bookData) => {
  try {
    const response = await API.post('/books', bookData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateBook = async (bookId, bookData) => {
  try {
    const response = await API.put(`/books/${bookId}`, bookData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteBook = async (bookId) => {
  try {
    const response = await API.delete(`/books/${bookId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUsers = async () => {
  try {
    const response = await API.get('/users');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getActivityLog = async () => {
  try {
    const response = await API.get('/activity');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default API;