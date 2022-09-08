import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import QueryList from './components/QueryList';
import QueryDetail from './components/QueryDetail';
import AddMutation from './components/AddMutation';

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
        <QueryDetail id="631454cd6f5c859778c02055"></QueryDetail>
        <AddMutation></AddMutation>
      </ApolloProvider>
    </div>
  );
}
