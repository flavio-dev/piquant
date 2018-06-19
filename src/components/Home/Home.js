import React, { Component } from 'react'
import { Element } from 'react-scroll'
import ScrollTrigger from 'react-scroll-trigger'

import logo from 'images/logo.png'
import Loader from 'components/Loader'
import Image from 'components/Image'
import InstaIcon from 'components/InstaIcon'
import BunIcon from 'components/BunIcon'
import whatwgFetch from 'utils/fetch'

import './Home.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {
        about: {
          title: '',
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
      isLoading: true
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
    this.setState({
      showImages: true
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
        }, 1000)
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
        this.setState({
          data: res,
          isLoading: false
        })
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

    const {isLoading, data} = this.state
    const {about, images} = data

    return (
      <div className='Home'>
        <img src={logo}
          className={logoClass}
          alt='Piquant'
          onLoad={this.handleLogoLoaded}
          onError={this.handleLogoLoadedError}
        />
        <div className={sectionAboutClass}>
          {isLoading &&
            <Loader>
              <BunIcon rotate />
            </Loader>
          }
          <Element name='about'>
            <h2>{about.title}</h2>
          </Element>
          {about.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
          <ScrollTrigger
            triggerOnLoad={false}
            onEnter={this.showImages}
          >
            <div className={imagesClass}>
              <Image
                url={(images.image1 && images.image1.url) || ''}
                blurb={(images.image1 && images.image1.blurb) || ''}
              />
              <Image
                url={(images.image2 && images.image2.url) || ''}
                blurb={(images.image2 && images.image2.blurb) || ''}
              />
              <Image
                url={(images.image3 && images.image3.url) || ''}
                blurb={(images.image3 && images.image3.blurb) || ''}
              />
              <Image
                url={(images.image4 && images.image4.url) || ''}
                blurb={(images.image4 && images.image4.blurb) || ''}
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
            {isLoading &&
              <Loader>
                <BunIcon rotate />
              </Loader>
            }
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
            {isLoading &&
              <Loader>
                <BunIcon rotate />
              </Loader>
            }
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
