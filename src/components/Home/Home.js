import React, { Component } from 'react'
import { Element } from 'react-scroll'

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
        <div className='HomeSection'>
          <Element name='test1' id='about'>
            <h2>Hi, I am Portia</h2>
          </Element>
          <p>
            Piquant is my definition of how I make food. This is bcdhiaoch dio
            ahco adhcoh dsoch sodch iodshc ohdsoichdiosch iohds cj</p>
          <p>
            Piquant is my definition of how I make food dsico jsdoj
            ciosd jcijsdocjsdioc jsdjcos djc dsjoc jdsiocj siojcosi.
          </p>
          <p>Hope to see you enjoying my food soon!</p>
        </div>
      </div>
    )
  }
}

export default Home
