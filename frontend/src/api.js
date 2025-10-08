import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Products API
export const productsAPI = {
  getAll: async (category = null) => {
    const params = category && category !== 'All' ? { category } : {};
    const response = await axios.get(`${API}/products`, { params });
    return response.data;
  },
  getCategories: async () => {
    const response = await axios.get(`${API}/products/categories`);
    return response.data;
  },
  getById: async (id) => {
    const response = await axios.get(`${API}/products/${id}`);
    return response.data;
  }
};

// News API
export const newsAPI = {
  getAll: async (category = null) => {
    const params = category && category !== 'All' ? { category } : {};
    const response = await axios.get(`${API}/news`, { params });
    return response.data;
  },
  getById: async (id) => {
    const response = await axios.get(`${API}/news/${id}`);
    return response.data;
  }
};

// Contact API
export const contactAPI = {
  submit: async (contactData) => {
    const response = await axios.post(`${API}/contact`, contactData);
    return response.data;
  }
};

// Newsletter API
export const newsletterAPI = {
  subscribe: async (email) => {
    const response = await axios.post(`${API}/newsletter`, { email });
    return response.data;
  }
};
