import React, { Component } from 'react'

import logo from 'images/logo.png'

import './Home.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { imageClass: 'HomeLogo' }
    this.handleImageLoaded = this.handleImageLoaded.bind(this)
  }

  handleImageLoaded() {
    this.setState({
      imageClass: 'HomeLogo HomeLogoShow'
    })
  }

  render() {
    return (
      <div className='Home'>
        <img src={logo}
          className={this.state.imageClass}
          alt='Piquant'
          onLoad={this.handleImageLoaded}
        />
      </div>
    )
  }
}

export default Home
