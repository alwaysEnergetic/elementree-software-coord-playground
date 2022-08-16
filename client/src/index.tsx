import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './ErrorBoundary';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { GRAPHQL_ENDPOINT } from './config/graphql';

const client = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  cache: new InMemoryCache()
});
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ErrorBoundary>
  <ApolloProvider client={client}>
  <React.StrictMode>
      <App />
   </React.StrictMode>
  </ApolloProvider>
  </ErrorBoundary>

);
reportWebVitals();
