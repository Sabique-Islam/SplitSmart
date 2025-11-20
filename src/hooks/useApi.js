import { useCallback } from 'react';
import { apiClient } from '../lib/apiClient.js';

export const useApi = () => {
  const request = useCallback((path, options) => apiClient.request(path, options), []);
  return { request };
};
