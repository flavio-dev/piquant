import React, { Component } from 'react'
import { Element } from 'react-scroll'
import ScrollTrigger from 'react-scroll-trigger'

import logo from 'images/logo.png'

import './Home.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLogo: false,
      showSectionAbout: false,
      showSectionContact: false,
      showSectionEvents: false
    }
    this.handleImageLoaded = this.handleImageLoaded.bind(this)
    this.handleImageLoadedError = this.handleImageLoadedError.bind(this)
    this.showSections = this.showSections.bind(this)
  }

  handleImageLoaded() {
    this.setState({
      showLogo: true
    })

    this.showSections('about')
  }

  handleImageLoadedError() {
    this.showSections('about')
  }

  showSections(section) {
    switch (section) {
      case 'about':
        // triggering the about manually as showing just under the logo
        setTimeout(() => {
          this.setState({
            showSectionAbout: true
          })
        }, 1500)
        break
      case 'contact':
        this.setState({
          showSectionContact: true
        })
        break
      case 'events':
        this.setState({
          showSectionEvents: true
        })
        break
      default:
        this.setState({
          showSectionAbout: true,
          showSectionContact: true,
          showSectionEvents: true
        })
        break
    }
  }

  render() {
    const logoClass = this.state.showLogo
      ? 'HomeLogo HomeLogoShow'
      : 'HomeLogo'

    const sectionAboutClass = this.state.showSectionAbout
      ? 'HomeSection HomeSectionShow'
      : 'HomeSection'

    const sectionEventClass = this.state.showSectionEvents
      ? 'HomeSection HomeSectionShow'
      : 'HomeSection'

    const sectionContactClass = this.state.showSectionContact
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
        <div className={sectionAboutClass}>
          <Element name='about'>
            <h2>Hi, I am Portia ABOUT</h2>
          </Element>
          <p>
            Piquant is my definition of how I make food. This is bcdhiaoch dio
            ahco adhcoh dsoch sodch iodshc ohdsoichdiosch iohds cj</p>
          <p>
            Piquant is my definition of how I make food dsico jsdoj
            ciosd jcijsdocjsdioc jsdjcos djc dsjoc jdsiocj siojcosi.
          </p>
          <p>Hope to see you enjoying my food soon!</p>
          <div>some pictures here</div>
        </div>
        <ScrollTrigger triggerOnLoad={false} onEnter={() => this.showSections('events')}>
          <div className={sectionEventClass}>
            <Element name='events'>
              <h2>Hi, I am Portia EVENTS</h2>
            </Element>
            <p>
              Piquant is my definition of how I make food. This is bcdhiaoch dio
              ahco adhcoh dsoch sodch iodshc ohdsoichdiosch iohds cj</p>
            <p>
              Piquant is my definition of how I make food dsico jsdoj
              ciosd jcijsdocjsdioc jsdjcos djc dsjoc jdsiocj siojcosi.
            </p>
            <p>Hope to see you enjoying my food soon!</p>
            <div>some pictures here</div>
          </div>
        </ScrollTrigger>
        <ScrollTrigger triggerOnLoad={false} onEnter={() => this.showSections('contact')}>
          <div className={sectionContactClass}>
            <Element name='contact'>
              <h2>Hi, I am Portia CONTACT</h2>
            </Element>
            <p>
              Piquant is my definition of how I make food. This is bcdhiaoch dio
              ahco adhcoh dsoch sodch iodshc ohdsoichdiosch iohds cj</p>
            <p>
              Piquant is my definition of how I make food dsico jsdoj
              ciosd jcijsdocjsdioc jsdjcos djc dsjoc jdsiocj siojcosi.
            </p>
            <p>Hope to see you enjoying my food soon!</p>
            <div>some pictures here</div>
          </div>
        </ScrollTrigger>
      </div>
    )
  }
}

export default Home
