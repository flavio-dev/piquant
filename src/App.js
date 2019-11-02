import React, { Component } from 'react'

import Layout from 'components/Layout'
import Home from 'pages/Home'
import About from 'pages/About'

import DataContext from 'DataContext'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Router>
            <Switch>
              <Route path='/about'>
                <DataContext.Consumer>
                  {({data, isLoading}) => (
                    <About data={data} isLoading={isLoading} />
                  )}
                </DataContext.Consumer>
              </Route>
              <Route path='/'>
                <DataContext.Consumer>
                  {({data, isLoading}) => (
                    <Home data={data} isLoading={isLoading} />
                  )}
                </DataContext.Consumer>
              </Route>
            </Switch>
          </Router>
        </Layout>
      </div>
    )
  }
}

export default App
