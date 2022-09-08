import React from 'react';
import TQuery from './components/TQuery';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: '/graphql',
});

export default function TodoListWithGraphql() {
  return (
    <div>
      <h3>TodoListWithGraphql</h3>
      <ApolloProvider client={client}>
        <div>TQuery</div>
        <TQuery></TQuery>
      </ApolloProvider>
    </div>
  );
}
