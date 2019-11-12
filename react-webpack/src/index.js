'use strict'

import React from 'react'
import { render } from 'react-dom'

import Title from './app'

console.log('webpack is running!')

render(
    <Title />,
    document.querySelector('[data-js="app"]')
)