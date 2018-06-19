import React, { Component } from 'react'
import { Element } from 'react-scroll'
import ScrollTrigger from 'react-scroll-trigger'

import logo from 'images/logo.png'
// import image1 from 'images/01.jpg'
// import image2 from 'images/02.jpg'
// import image3 from 'images/03.jpg'
// import image4 from 'images/04.jpg'
import InstaIcon from 'components/InstaIcon'
import whatwgFetch from 'utils/fetch'

import './Home.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        about: {
          title: 'Hi there!',
          paragraphs: []
        },
        images: {
          image1: {},
          image2: {},
          image3: {},
          image4: {}
        }
      },
      showLogo: false,
      showSectionAbout: false,
      showSectionContact: false,
      showSectionEvents: false,
      image1Src: '',
      image2Src: '',
      image3Src: '',
      image4Src: ''
    }
    this.handleLogoLoaded = this.handleLogoLoaded.bind(this)
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

  showImages() {
    const {images} = this.state.data
    this.setState({
      showImages: true,
      image1Src: images.image1 && images.image1.url,
      image2Src: images.image2 && images.image2.url,
      image3Src: images.image3 && images.image3.url,
      image4Src: images.image4 && images.image4.url
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

  componentDidMount() {
    whatwgFetch('https://raw.githubusercontent.com/flavio-dev/piquant/master/data.json')
      .then(res => {
        this.setState({data: res})
      })
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

    const imagesClass = this.state.showImages
      ? 'HomeImages HomeImagesShow'
      : 'HomeImages'

    const {about, images} = this.state.data

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
            <h2>about.title</h2>
          </Element>
          {about.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
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
                className='HomeImage'
              >
                {images.image1 && images.image1.blurb &&
                  <p className='HomeImageInfo'>
                    {images.image1.blurb}
                  </p>
                }
              </div>
              <div
                style={{
                  backgroundImage: 'url(' + this.state.image2Src + ')',
                  backgroundSize: 'cover'
                }}
                className='HomeImage'
              >
                {images.image2 && images.image2.blurb &&
                  <p className='HomeImageInfo'>
                    {images.image2.blurb}
                  </p>
                }
              </div>
              <div
                style={{
                  backgroundImage: 'url(' + this.state.image3Src + ')',
                  backgroundSize: 'cover'
                }}
                className='HomeImage'
              >
                {images.image3 && images.image3.blurb &&
                  <p className='HomeImageInfo'>
                    {images.image3.blurb}
                  </p>
                }
              </div>
              <div
                style={{
                  backgroundImage: 'url(' + this.state.image4Src + ')',
                  backgroundSize: 'cover'
                }}
                className='HomeImage'
              >
                {images.image4 && images.image4.blurb &&
                  <p className='HomeImageInfo'>
                    {images.image4.blurb}
                  </p>
                }
              </div>
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
