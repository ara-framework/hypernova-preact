# hypernova-preact

[Preact](https://preactjs.com) bindings for [Hypernova](https://github.com/airbnb/hypernova).

On the server, wraps the component in a function to render it to a HTML string given its props.

On the client, calling this function with your component scans the DOM for any server-side rendered instances of it. It then resumes those components using the server-specified props.

## Install

```sh
npm install hypernova-preact
```

## Usage

Here's how to use it in your module:

```js
import { renderPreact } from 'hypernova-preact'
import Example from './components/Example'

export default renderPreact('Example', Example)
```