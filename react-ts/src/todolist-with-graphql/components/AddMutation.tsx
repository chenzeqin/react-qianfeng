import React, { Component } from 'react';
import { Query, MutationFunction, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import type { Data } from '../type';

export default class AddMutation extends Component {
  mutation = gql`
    mutation ($input: FilmInput) {
      addFilm(input: $input) {
        id
        name
      }
    }
  `;

  handleAdd() {}
  render() {
    return (
      <div>
        <h4>mutation 新增：</h4>
        <Mutation mutation={this.mutation}>
          {(createFilm: MutationFunction<{ input: Data }>) => {
            return (
              <div>
                <button
                  onClick={() => {
                    // 点击触发新增
                    createFilm({
                      variables: {
                        input: {
                          name: 'test',
                          price: 220,
                        },
                      },
                    }).then((res) => {
                      alert('新增成功');
                      console.log(res);
                    });
                  }}
                >
                  add
                </button>
              </div>
            );
          }}
        </Mutation>
      </div>
    );
  }
}
