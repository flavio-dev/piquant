import React, { Component } from 'react'
import { Element } from 'react-scroll'
import ScrollTrigger from 'react-scroll-trigger'

import logo from 'images/logo.png'
import image1 from 'images/01.jpg'
import image2 from 'images/02.jpg'
import image3 from 'images/03.jpg'
import image4 from 'images/04.jpg'
import InstaIcon from 'components/InstaIcon'

import './Home.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showLogo: false,
      showSectionAbout: false,
      showSectionContact: false,
      showSectionEvents: false,
      showImage1: false,
      showImage2: false,
      showImage3: false,
      showImage4: false,
      showImages: false,
      image1Src: '',
      image2Src: '',
      image3Src: '',
      image4Src: ''
    }
    this.handleLogoLoaded = this.handleLogoLoaded.bind(this)
    this.handleImageLoaded = this.handleImageLoaded.bind(this)
    this.handleLogoLoadedError = this.handleLogoLoadedError.bind(this)
    this.showSections = this.showSections.bind(this)
    this.showImages = this.showImages.bind(this)
  }

  handleLogoLoaded() {
    this.setState({
      showLogo: true
    })

    this.showSections('about')
  }

  handleLogoLoadedError() {
    this.showSections('about')
  }

  handleImageLoaded(imageNumber) {
    switch (imageNumber) {
      case 1:
        console.log('in CASE 1')
        setTimeout(() => {
          console.log('in the setTimeout')
          this.setState({
            showImage1: true
          })
        }, 4000)
        break
      case 2:
        this.setState({
          showImage2: true
        })
        break
      case 3:
        this.setState({
          showImage3: true
        })
        break
      case 4:
        this.setState({
          showImage4: true
        })
        break
      default:
        this.setState({
          showImage1: true,
          showImage2: true,
          showImage3: true,
          showImage4: true
        })
        break
    }
  }

  showImages() {
    this.setState({
      showImages: true,
      image1Src: image1,
      image2Src: image2,
      image3Src: image3,
      image4Src: image4
    })
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

    const image1Class = this.state.showImage1
      ? 'HomeImageTest HomeImageShow'
      : 'HomeImageTest'

    const image2Class = this.state.showImage2
      ? 'HomeImage HomeImageShow'
      : 'HomeImage'

    const image3Class = this.state.showImage3
      ? 'HomeImage HomeImageShow'
      : 'HomeImage'

    const image4Class = this.state.showImage4
      ? 'HomeImage HomeImageShow'
      : 'HomeImage'

    const imagesClass = this.state.showImages
      ? 'HomeImages HomeImagesShow'
      : 'HomeImages'

    return (
      <div className='Home'>
        <img src={logo}
          className={logoClass}
          alt='Piquant'
          onLoad={this.handleLogoLoaded}
          onError={this.handleLogoLoadedError}
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
          <ScrollTrigger
            triggerOnLoad={false}
            onEnter={this.showImages}
          >
            <div className={imagesClass}>
              <div
                style={{
                  backgroundImage: 'url(' + this.state.image1Src + ')',
                  backgroundSize: 'cover'
                }}
                className={image1Class}
                onLoad={() => this.handleImageLoaded(1)}
              />
              <img src={this.state.image2Src}
                className={image2Class}
                alt='food image 2'
                onLoad={() => this.handleImageLoaded(2)}
              />
              <img src={this.state.image3Src}
                className={image3Class}
                alt='food image 3'
                onLoad={() => this.handleImageLoaded(3)}
              />
              <img src={this.state.image4Src}
                className={image4Class}
                alt='food image 4'
                onLoad={() => this.handleImageLoaded(4)}
              />
            </div>
            <div className='HomeInsta'>
              <a href='https://www.instagram.com/eatatpiquant/' target='_blank'>
                <InstaIcon reversed responsive />
                <h3>Follow me on Instagram</h3>
              </a>
            </div>
          </ScrollTrigger>
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
