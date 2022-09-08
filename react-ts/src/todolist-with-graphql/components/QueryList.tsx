import React, { Component } from 'react';
import { Query, QueryResult } from 'react-apollo';
import gql from 'graphql-tag';
import type { Data } from '../type';

export default class QueryList extends Component {
  query = gql`
    query {
      getFilmList {
        id
        name
      }
    }
  `;
  render() {
    return (
      <div>
        <h4>query 查询：</h4>
        <Query query={this.query}>
          {(res: QueryResult<Record<'getFilmList', Data[]>>) => {
            const { loading, data } = res;
            // console.log(data);
            if (loading) return <div>loading...</div>;
            return (
              <div>
                {data?.getFilmList.map((item) => {
                  return <div key={item.id}>{item.name}</div>;
                })}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}
