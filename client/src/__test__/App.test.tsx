import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { render, screen } from '@testing-library/react';
import ErrorBoundary from '../ErrorBoundary';
import App from '../App';
import { GRAPHQL_ENDPOINT } from '../config/graphql';
const client = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  cache: new InMemoryCache()
});

test('renders App Correctly', () => {
  render(
    <ErrorBoundary>
    <ApolloProvider client={client}>
    <React.StrictMode>
        <App />
     </React.StrictMode>
    </ApolloProvider>
    </ErrorBoundary>
  );
});
