# force-update

> Made with create-parcel-react-library

[![NPM](https://img.shields.io/npm/v/force-update.svg)](https://www.npmjs.com/package/force-update) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![Build Status](https://travis-ci.com/force-update.svg?branch=master)](https://travis-ci.com/force-update) ![Codecov](https://img.shields.io/codecov/c/github/force-update)

## Install

```bash
npm install --save force-update
```

## Usage

```tsx
import React, { Component } from 'react'

import MyComponent from 'force-update'
import 'force-update/dist/index.css'

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

To create a parcel production build:

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

MIT © [garry](https://github.com/garry)
