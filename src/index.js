import React from 'react'
const logo = new URL('./logo.svg', import.meta.url)
export default function Index() {
  return React.createElement(img, { src: logo })
}
