import { fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const auth = process.env.REACT_APP_AUTH
const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  options.headers.set('auth-api', auth);
  return fetchUtils.fetchJson(url, options);
};

const jsonServerDataProvider = jsonServerProvider(
  'http://127.0.0.1:5001/ecommerce-nadim/us-central1/api',
  httpClient
);

const customDataProvider = {
  ...jsonServerDataProvider,

  // Override the create method to handle errors
  create: async (resource, params) => {
    try {
      const response = await jsonServerDataProvider.create(resource, params);
      return response;
    } catch (error) {
      if (error.status === 400) {
        // Handle validation errors or other specific error codes
        const message = error.message;
        throw new Error(message);
      }
      throw error;
    }
  },
};

export default customDataProvider;
