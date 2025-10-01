import axios from 'axios';

// Create axios instance with base URL
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor - Add auth token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Unauthorized - clear token and redirect to login
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;

// API endpoints
export const authAPI = {
  login: (email: string, password: string) =>
    api.post('/auth/login', { email, password }),
  
  register: (data: any) =>
    api.post('/auth/register', data),
  
  getProfile: () =>
    api.get('/auth/me'),
  
  updatePassword: (oldPassword: string, newPassword: string) =>
    api.put('/auth/update-password', { oldPassword, newPassword }),
};

export const userAPI = {
  getProfile: () =>
    api.get('/users/profile'),
  
  updateProfile: (data: any) =>
    api.put('/users/profile', data),
  
  getNotifications: () =>
    api.get('/users/notifications'),
  
  markNotificationRead: (id: string) =>
    api.put(`/users/notifications/${id}/read`),
};

export const serviceAPI = {
  getAll: () =>
    api.get('/services'),
  
  getById: (id: string) =>
    api.get(`/services/${id}`),
  
  create: (data: any) =>
    api.post('/services', data),
  
  update: (id: string, data: any) =>
    api.put(`/services/${id}`, data),
  
  delete: (id: string) =>
    api.delete(`/services/${id}`),
};

export const claimAPI = {
  getAll: () =>
    api.get('/claims'),
  
  getById: (id: string) =>
    api.get(`/claims/${id}`),
  
  create: (data: any) =>
    api.post('/claims', data),
  
  update: (id: string, data: any) =>
    api.put(`/claims/${id}`, data),
};

export const paymentAPI = {
  getAll: () =>
    api.get('/payments'),
  
  create: (data: any) =>
    api.post('/payments', data),
  
  getBalance: () =>
    api.get('/payments/balance'),
};
