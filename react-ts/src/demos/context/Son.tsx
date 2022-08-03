import React, { Component } from 'react'
import GrandSon from './GrandSon'

export default class Son extends Component {
  render() {
    return (
      <div>
        <h5>Son</h5>
        <GrandSon></GrandSon>
      </div>
    )
  }
}
