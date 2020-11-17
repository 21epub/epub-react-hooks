# debounce

> Made with create-parcel-react-library

[![NPM](https://img.shields.io/npm/v/debounce.svg)](https://www.npmjs.com/package/debounce) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) ![Build Status](https://img.shields.io/travis/com/hentai-miao/debounce) ![Codecov](https://img.shields.io/codecov/c/github/hentai-miao/debounce)

## Intro

This is a component for react. 

## Feature

- [x] Easy-to-use
- [x] Typescript Support

## Install

```bash
npm install --save debounce
```

## Usage

```tsx
import React, { Component } from 'react'

import MyComponent from 'debounce'
import 'debounce/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

For Details: See Example


## Developing and running on localhost

First install dependencies and then install peerDeps for parcel dev:

```sh
npm install
npm run install-peers
```

To run Example in hot module reloading mode:

```sh
npm start
```

To create a parcel example production build:

```sh
npm run build-prod
```

To create a bundle library module build:

```sh
npm run build
```

## Running

Open the file `dist/index.html` in your browser

## Testing

To run unit tests:

```sh
npm test
```

## License

MIT © [hentai-miao](https://github.com/hentai-miao)
