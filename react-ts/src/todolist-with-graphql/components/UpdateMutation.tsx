import React, { Component } from 'react';
import { Query, MutationFunction, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import type { Data } from '../type';

export default class UpdateMutation extends Component {
  mutation = gql`
    mutation ($id: String!, $input: FilmInput) {
      updateFilm(id: $id, input: $input) {
        id
        name
        price
      }
    }
  `;

  render() {
    return (
      <div>
        <h4>mutation 编辑：</h4>
        <Mutation mutation={this.mutation}>
          {(updateFilm: MutationFunction<{ input: Data }>) => {
            return (
              <div>
                <button
                  onClick={() => {
                    // 点击触发新增
                    updateFilm({
                      variables: {
                        id: '631415663bfd3f3f9edc5fdf',
                        input: {
                          name: '城南旧事2',
                          price: 220,
                        },
                      },
                    }).then((res) => {
                      alert('编辑成功');
                      console.log(res);
                    });
                  }}
                >
                  update
                </button>
              </div>
            );
          }}
        </Mutation>
      </div>
    );
  }
}
