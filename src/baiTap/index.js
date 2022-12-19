import React, { Component } from 'react'
import Header from './header'
import Carosell from './carosell'
import Listitem from './listItem'
import Footer from './footer'
export default class Baitap extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Carosell />
        <Listitem />
        <Footer />
      </div>
    )
  }
}
