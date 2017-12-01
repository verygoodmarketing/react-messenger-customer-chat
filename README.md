# React Messenger Customer Chat

> React component for messenger customer chat plugin

[![npm](https://img.shields.io/npm/v/react-messenger-customer-chat.svg?style=flat-square)](https://www.npmjs.com/package/react-messenger-customer-chat)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Screenshot

![](https://user-images.githubusercontent.com/3382565/33435564-6ed7df66-d61d-11e7-8b6c-fdb2d36f0ff9.png)
![](https://user-images.githubusercontent.com/3382565/33435563-6eacb444-d61d-11e7-85a7-a5d29a418f25.png)

## Installation

```sh
npm install react-messenger-customer-chat
```

## Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import MessengerCustomerChat from 'react-messenger-customer-chat';

ReactDOM.render(
  <MessengerCustomerChat
    pageId="<PAGE_ID>"
    appId="<APP_ID>"
  />,
  document.getElementById('demo')
);
```

> Note: It will handle sdk initialize automatically for you. See more details in [fbsdk official docs](https://developers.facebook.com/docs/javascript/quickstart/).

## Props

```js
static propTypes = {
  pageId: PropTypes.string.isRequired,
  appId: PropTypes.string.isRequired,

  ref: PropTypes.string,
  minimized: PropTypes.bool,
  autoLogAppEvents: PropTypes.bool,
  xfbml: PropTypes.bool,
  version: PropTypes.string,
  language: PropTypes.string,
  debug: PropTypes.bool,
};

static defaultProps = {
  ref: undefined,
  minimized: undefined,
  autoLogAppEvents: true,
  xfbml: true,
  version: '2.11',
  language: 'en_US',
  debug: false,
};
```

## License

MIT © [Yoctol](https://github.com/Yoctol/react-messenger-customer-chat)
