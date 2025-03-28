import { Configuration } from '@azure/msal-browser';

export const msalConfig: Configuration = {
  auth: {
    clientId: import.meta.env.VITE_AZURE_CLIENT_ID,
    authority: `https://login.microsoftonline.com/${import.meta.env.VITE_AZURE_TENANT_ID}`,
    redirectUri: window.location.origin,
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false,
  }
};

export const loginRequest = {
  scopes: ['User.Read']
};

export const apiConfig = {
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  sqlServer: import.meta.env.VITE_AZURE_SQL_SERVER,
  sqlDatabase: import.meta.env.VITE_AZURE_SQL_DATABASE
};