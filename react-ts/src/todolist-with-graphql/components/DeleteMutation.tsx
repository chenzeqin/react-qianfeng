import { Component } from 'react';
import { MutationFunction, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

export default class DeleteMutation extends Component {
  mutation = gql`
    mutation ($id: String!) {
      deleteFilm(id: $id)
    }
  `;

  render() {
    return (
      <div>
        <h4>mutation delete：</h4>
        <Mutation mutation={this.mutation}>
          {(deleteFilm: MutationFunction<{ input: string }>) => {
            return (
              <div>
                <button
                  onClick={() => {
                    // 点击触发删除
                    deleteFilm({
                      variables: {
                        id: '631a3166f07a57e745f2c47f',
                      },
                    }).then((res) => {
                      alert('删除成功');
                      console.log(res);
                    });
                  }}
                >
                  delete
                </button>
              </div>
            );
          }}
        </Mutation>
      </div>
    );
  }
}
