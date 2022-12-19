import React, { Component } from 'react'
import Item from './item'
export default class Listitem extends Component {
  render() {
    return (
      <div className='row'>
        <Item />
        <Item />
        <Item />
      </div>
    )
  }
}
