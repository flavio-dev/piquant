import React, { Component } from 'react'
import PropTypes from 'prop-types'

// import whatwgFetch from 'utils/fetch'
import sortEvents from 'utils/sortEvents'
import dataDev from 'data_dev.json'

import Header from 'components/Header'
import Footer from 'components/Footer'

import { DataContext, contextDefaultValues } from 'DataContext'

import './Layout.css'

class Layout extends Component {
  constructor(props) {
    super(props)

    this.state = contextDefaultValues
  }

  componentDidMount() {
    // whatwgFetch('https://raw.githubusercontent.com/flavio-dev/piquant/master/data.json')
    //   .then(res => {
    //     const sortedEvents = sortEvents(res.events.list)
    //     const newData = Object.assign({}, this.state.data, res, sortedEvents)
    //     this.setState({
    //       data: newData,
    //       isLoading: false
    //     })
    //   })

    const sortedEvents = sortEvents(dataDev.events.list)
    const newData = Object.assign({}, this.state.data, dataDev, sortedEvents)

    this.setState({
      data: newData,
      isLoading: false
    })
  }

  render() {
    return (
      <div>
        <Header />
        <div className='LayoutContent'>
          <DataContext.Provider value={this.state}>
            {this.props.children}
          </DataContext.Provider>
        </div>
        <Footer />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
