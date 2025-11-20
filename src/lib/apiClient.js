const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const apiClient = {
  request: async (path, { method = 'GET', body } = {}) => {
    const res = await fetch(`${API_BASE}${path}`, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : undefined,
    });
    return res.json();
  },
};
