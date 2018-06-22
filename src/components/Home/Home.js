import React, { Component, Fragment } from 'react'
import { Element } from 'react-scroll'
import ScrollTrigger from 'react-scroll-trigger'

import logo from 'images/logo.png'
import Loader from 'components/Loader'
import Image from 'components/Image'
import InstaIcon from 'components/InstaIcon'
import BunIcon from 'components/BunIcon'
import BaoIcon from 'components/BaoIcon'
import EventPiquant from 'components/Event'
import Separator from 'components/Separator'
import whatwgFetch from 'utils/fetch'
import sortEvents from 'utils/sortEvents'

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
          image4: {},
          image5: {},
          image6: {}
        },
        events: {
          title: '',
          list: []
        },
        sortedEvents: {
          futureEvents: [],
          pastEvents: []
        },
        contact: {
          title: '',
          paragraphs: []
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
        const sortedEvents = sortEvents(res.events.list)
        const newData = Object.assign({}, this.state.data, res, sortedEvents)
        this.setState({
          data: newData,
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
    const {about, images, events, sortedEvents, contact} = data

    return (
      <div className='Home'>
        <img src={logo}
          className={logoClass}
          alt='Piquant'
          onLoad={this.handleLogoLoaded}
          onError={this.handleLogoLoadedError}
        />
        <section className={sectionAboutClass}>
          {isLoading &&
            <Loader>
              <BunIcon />
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
              <a href='https://www.instagram.com/eatatpiquant/' target='_blank'>
                <InstaIcon reversed responsive />
                <h3>Follow me on Instagram</h3>
              </a>
            </div>
          </ScrollTrigger>
        </section>

        <Separator>
          <BunIcon />
        </Separator>

        <ScrollTrigger triggerOnLoad={false} onEnter={() => this.showSections('events')}>
          <section className={sectionEventClass}>
            {isLoading &&
              <Loader>
                <BunIcon />
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
          <BaoIcon />
        </Separator>

        <ScrollTrigger triggerOnLoad={false} onEnter={() => this.showSections('contact')}>
          <section className={sectionContactClass}>
            {isLoading &&
              <Loader>
                <BunIcon />
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

export default Home
