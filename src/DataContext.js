import React from 'react'

export const contextDefaultValues = {
  data: {
    about: {
      title: '',
      panoimagelarge: '',
      panoimagesmall: '',
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
  isLoading: false
}

export const DataContext = React.createContext({
  contextDefaultValues
})

export default DataContext
