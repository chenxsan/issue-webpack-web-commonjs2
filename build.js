const React = require('react')
const ReactDOMServer = require('react-dom/server')
const { renderToStaticMarkup } = ReactDOMServer
const { createElement } = React
const {default: Page} = require('./dist/index.server')
console.log(renderToStaticMarkup(createElement(Page)))
