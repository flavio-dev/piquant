import React, { Component } from 'react'

import './App.css'

import Layout from 'components/Layout'
import Home from 'components/Home'

class App extends Component {
  render() {
    return (
      <div>
        <div className='App' />
        <Layout>
          <Home />
        </Layout>
      </div>
    )
  }
}

export default App
