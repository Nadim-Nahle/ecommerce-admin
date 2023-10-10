// in src/dataProvider.ts
import jsonServerProvider from 'ra-data-json-server';

export const dataProvider = jsonServerProvider(
    "http://127.0.0.1:5001/ecommerce-nadim/us-central1/api"
);