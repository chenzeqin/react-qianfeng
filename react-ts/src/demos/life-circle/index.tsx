import React, { Component } from 'react';
import Cinema from './Cinema';

export default class LifeCircle extends Component {
  state = {
    show: true,
    name: '',
  };
  render(): React.ReactNode {
    const { show } = this.state;
    return (
      <div>
        <h3>LifeCircle</h3>
        {show && <Cinema name="影院列表"></Cinema>}
        <button
          onClick={() => {
            this.setState({ show: !show });
          }}
        >
          {show ? 'hide' : 'show'}
        </button>
      </div>
    );
  }
}