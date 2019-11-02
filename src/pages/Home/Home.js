import React, { Component, Fragment } from 'react'
import { Element } from 'react-scroll'
import ScrollTrigger from 'react-scroll-trigger'
import PropTypes from 'prop-types'

import logo from 'images/logo.png'
import Loader from 'components/Loader'
import Image from 'components/Image'
import ImagePano from 'components/ImagePano'
import InstaIcon from 'components/InstaIcon'
import ChapatiIcon from 'components/ChapatiIcon'
import EventPiquant from 'components/Event'
import Separator from 'components/Separator'

import './Home.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: props.data,
      isLoading: props.isLoading,
      showLogo: false,
      showAboutText: false,
      showImages: false,
      showSectionAbout: false,
      showSectionContact: false,
      showSectionEvents: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.isLoading === false) {
      return {...state, data: props.data, isLoading: false}
    }

    return state
  }

  handleLogoLoaded = () => {
    this.setState({
      showLogo: true
    })

    this.showSections('about')
  }

  handleLogoLoadedError = () => {
    this.showSections('about')
  }

  showAboutText = () => {
    this.setState({
      showAboutText: true
    })
  }

  showImages = () => {
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

  render() {
    const logoClass = this.state.showLogo
      ? 'HomeLogo HomeLogoShow'
      : 'HomeLogo'

    const panoAboutClass = this.state.showSectionAbout
      ? 'HomeAbout HomeSectionShow'
      : 'HomeAbout'

    const sectionAboutClass = this.state.showSectionAbout
      ? 'HomeSection HomeSectionShow'
      : 'HomeSection'

    const textAboutClass = this.state.showAboutText
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
    const {about, images, events, sortedEvents, contact} = data

    return (
      <div className='Home'>
        <img src={logo}
          className={logoClass}
          alt='Piquant'
          onLoad={this.handleLogoLoaded}
          onError={this.handleLogoLoadedError}
        />
        {isLoading &&
          <Loader>
            <ChapatiIcon />
          </Loader>
        }
        <Element name='about' className={panoAboutClass}>
          <ImagePano urlSmall={about.panoimagesmall} urlLarge={about.panoimagelarge} title={about.title} />
        </Element>
        <section className={sectionAboutClass}>
          <ScrollTrigger
            triggerOnLoad={false}
            onEnter={this.showAboutText}
          >
            <div className={textAboutClass}>
              {about.paragraphs.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </ScrollTrigger>
          <ScrollTrigger
            triggerOnLoad={false}
            onEnter={this.showImages}
          >
            <div className={imagesClass}>
              <div className='HomeImageWrapper'>
                <Image
                  url={(images.image1 && images.image1.url) || ''}
                  blurb={(images.image1 && images.image1.blurb) || ''}
                />
              </div>
              <div className='HomeImageWrapper'>
                <Image
                  url={(images.image2 && images.image2.url) || ''}
                  blurb={(images.image2 && images.image2.blurb) || ''}
                />
              </div>
              <div className='HomeImageWrapper'>
                <Image
                  url={(images.image3 && images.image3.url) || ''}
                  blurb={(images.image3 && images.image3.blurb) || ''}
                />
              </div>
              <div className='HomeImageWrapper'>
                <Image
                  url={(images.image4 && images.image4.url) || ''}
                  blurb={(images.image4 && images.image4.blurb) || ''}
                />
              </div>
              <div className='HomeImageWrapper'>
                <Image
                  url={(images.image5 && images.image5.url) || ''}
                  blurb={(images.image5 && images.image5.blurb) || ''}
                />
              </div>
              <div className='HomeImageWrapper'>
                <Image
                  url={(images.image6 && images.image6.url) || ''}
                  blurb={(images.image6 && images.image6.blurb) || ''}
                />
              </div>
            </div>
            <div className='HomeInsta'>
              <a href='https://www.instagram.com/portia_piquant/' target='_blank'>
                <InstaIcon reversed responsive />
                <h3>See what I'm up to on Instagram</h3>
              </a>
            </div>
          </ScrollTrigger>
        </section>

        <Separator>
          <ChapatiIcon />
        </Separator>

        <ScrollTrigger triggerOnLoad={false} onEnter={() => this.showSections('events')}>
          <section className={sectionEventClass}>
            {isLoading &&
              <Loader>
                <ChapatiIcon />
              </Loader>
            }
            <Element name='events'>
              <h2>{events.title}</h2>
            </Element>
            <h3 className='HomeEventsTitle'>Future Events</h3>
            <div className={sortedEvents.pastEvents.length && 'HomeEventsBottomSpace'}>
              {!sortedEvents.futureEvents.length && <p>No upcoming events.</p>}
              {sortedEvents.futureEvents.map((evt, index) => {
                return (
                  <EventPiquant key={index}
                    url={evt.url}
                    dateLongOfEvent={evt.dateLongOfEvent}
                    dateShortOfEvent={evt.dateShortOfEvent}
                    desc={evt.desc}
                    timeOfEvent={evt.timeOfEvent}
                  />
                )
              })}
            </div>
            {sortedEvents.pastEvents.length > 0 &&
              <Fragment>
                <h3 className='HomeEventsTitle'>Past Events</h3>
                <div className='HomeEventsPast'>
                  {sortedEvents.pastEvents.map((evt, index) => {
                    return (
                      <EventPiquant key={index}
                        url={evt.url}
                        dateLongOfEvent={evt.dateLongOfEvent}
                        dateShortOfEvent={evt.dateShortOfEvent}
                        desc={evt.desc}
                        timeOfEvent={evt.timeOfEvent}
                      />
                    )
                  })}
                </div>
              </Fragment>
            }
          </section>
        </ScrollTrigger>

        <Separator>
          <ChapatiIcon />
        </Separator>

        <ScrollTrigger triggerOnLoad={false} onEnter={() => this.showSections('contact')}>
          <section className={sectionContactClass}>
            {isLoading &&
              <Loader>
                <ChapatiIcon />
              </Loader>
            }
            <Element name='contact'>
              <h2>{contact.title}</h2>
            </Element>
            {contact.paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
            <form method='POST' action='https://formspree.io/myshoestravel@gmail.com'>
              <div className='HomeContact'>
                <div className='HomeContactNameEmail'>
                  <input type='name' name='name' placeholder='Your name' />
                  <input type='email' name='email' placeholder='Your email*' />
                </div>
                <textarea name='message' placeholder='Your message' rows='4' />
              </div>
              <button type='submit'>Send</button>
            </form>
          </section>
        </ScrollTrigger>
      </div>
    )
  }
}

Home.propTypes = {
  data: PropTypes.object,
  isLoading: PropTypes.bool
}

export default Home
