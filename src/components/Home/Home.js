import React, { Component } from 'react'
import { Element } from 'react-scroll'

import logo from 'images/logo.png'

import './Home.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLogo: false,
      showSections: false
    }
    this.handleImageLoaded = this.handleImageLoaded.bind(this)
    this.handleImageLoadedError = this.handleImageLoadedError.bind(this)
    this.showSections = this.showSections.bind(this)
  }

  handleImageLoaded() {
    this.setState({
      showLogo: true
    })

    this.showSections()
  }

  handleImageLoadedError() {
    this.showSections()
  }

  showSections() {
    setTimeout(() => {
      this.setState({
        showSections: true
      })
    }, 1500)
  }

  render() {
    const logoClass = this.state.showLogo
      ? 'HomeLogo HomeLogoShow'
      : 'HomeLogo'

    const sectionClass = this.state.showSections
      ? 'HomeSection HomeSectionShow'
      : 'HomeSection'

    return (
      <div className='Home'>
        <img src={logo}
          className={logoClass}
          alt='Piquant'
          onLoad={this.handleImageLoaded}
          onError={this.handleImageLoadedError}
        />
        <div className={sectionClass}>
          <Element name='about'>
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
