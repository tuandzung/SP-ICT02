'use strict'

module.exports = {
  app: {
    name: 'Selling Wears',
    version: '1.0.0'
  },
  template: {
    path: 'app/views',
    options: {
      map: { html: 'ect' }
    }
  },
  staticDir: {
    root: './static',
    options: {}
  }
}
