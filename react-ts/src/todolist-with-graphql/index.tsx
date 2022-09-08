import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import QueryList from './components/QueryList';

const client = new ApolloClient({
  uri: '/graphql',
});

export default function TodoListWithGraphql() {
  return (
    <div>
      <h3>TodoListWithGraphql</h3>
      <ApolloProvider client={client}>
        <div>TQuery</div>
        <QueryList></QueryList>
      </ApolloProvider>
    </div>
  );
}
