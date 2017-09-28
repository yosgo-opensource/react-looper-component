<h3 align="center">
  React Looper Component
</h3>

<p align="center">
  <a href="https://www.npmjs.com/package/react-looper-component"><img src="https://img.shields.io/npm/v/react-looper-component.svg?style=flat-square"></a> 
  <a href="https://travis-ci.org/yosgo-opensource/react-looper-component"><img src="https://api.travis-ci.org/yosgo-opensource/react-looper-component.svg"></a>
  <a href="https://github.com/yosgo-opensource/react-looper-component/"><img src="https://codecov.io/gh/yosgo-opensource/react-looper-component/branch/master/graph/badge.svg"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg"></a>
</p>

<p align="center">
  Flexible to mapping your data for component 👷👷👷👷👷
</p>

## Installation

```
> yarn add react-looper-component
```

## Why use

Because we always loop our data in component like this:

```javascript
<div>
  {
    items.map(item => <h1>{item.name}</h1>)  
  }
</div>
```

but it does not beautiful right? so we use react-loop-component to decorate it as the component.

## How to use

< Array >

```javascript
import Looper from 'react-looper-component'

const items = [
  {name: 'Foo', age: 18},
  {name: 'Bar', age: 20}
]

<Looper items={items}>
  {({ name, age }, index) => (
    <div key={`index-${name}-${age}`}>
      name: {name} age: {age}
    </div>
  )}
</Looper>
```

< Object >

```javascript
import Looper from 'react-looper-component'

const items = {
  user1: { name: 'Foo', age: 18 },
  user2: { name: 'Bar', age: 20 }
}

<Looper items={items}>
  {({ name, age }, index) => (
    <div key={`index-${name}-${age}`}>
      name: {name} age: {age}
    </div>
  )}
</Looper>
```

## Function as child component

The react-looper-component does not care about render component, just loop the data and return to children props, it can help us to control child component flexible.

## License

MIT
