import React, { Component } from 'react';
import { Query, QueryResult } from 'react-apollo';
import gql from 'graphql-tag';
import type { Data } from '../type';
/* 
  查询单条数据
*/
export default class QueryDetail extends Component<{ id: string }> {
  query = gql`
    query ($id: String!) {
      getFilm(id: $id) {
        id
        name
      }
    }
  `;
  render() {
    return (
      <div>
        <h4>query 查询详情：</h4>
        <Query query={this.query} variables={{ id: this.props.id }}>
          {(res: QueryResult<Record<'getFilm', Data>>) => {
            const { loading, data } = res;
            // console.log(data);
            if (loading) return <div>loading...</div>;
            return <div>{data?.getFilm.name}</div>;
          }}
        </Query>
      </div>
    );
  }
}
